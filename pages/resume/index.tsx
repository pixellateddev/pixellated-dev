import { Button, Paper, TextField } from "@mui/material"
import { GetServerSideProps, NextPage } from "next"
import { getSession } from "next-auth/react"
import { groq } from "next-sanity"
import { useRouter } from "next/router"
import { useState } from "react"
import { Resume } from "../../@types/resume"
import { sanityClient } from "../../sanity"
import { useResume } from "../../state/resume"

interface Props {
    resumes: Resume[]
    username: string
}



const ResumeHome: NextPage<Props> = ({username, resumes}) => {
    const router = useRouter()
    const { resume, setResume } = useResume()
    const [ title, setTitle ] = useState('')
    const onCreate = () => {
        setResume({
            ...resume,
            title,
            username
        })
        router.push('/resume/build')
    }
    const onSelect = (resume: Resume) => {
        setResume(resume)
        router.push('/resume/build')
    }
    return (
        <main className="container">
            <div className="layout">
                <Paper className="full-width resume-create">
                    <div className="new-resume">
                        <p>Create new resume</p>
                        <TextField label="Title" value={title} onChange={e => setTitle(e.target.value)}/>
                        <Button variant="contained" onClick={onCreate} disabled={!title}>Create</Button>
                    </div>
                    {resumes.map(resume => (
                        <div key={resume._id}>
                            <Button onClick={() => onSelect(resume)}>{resume.title}</Button>
                        </div>
                    ))}
                </Paper>
            </div>
        </main>
    )
}

export default ResumeHome

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const session = await getSession(ctx)
    if (!session) {
        return {
            redirect: {
                permanent: false,
                destination: '/'
            },
            props: {}
        }
    }
    const query = groq`
        *[_type == "resume" && username == $username] {
            ...
        }
    `
    const resumes = await sanityClient.fetch(query, {
        username: session.user?.email
    })
    return {
        props: {
            resumes,
            username: session.user?.email
        }
    }
}