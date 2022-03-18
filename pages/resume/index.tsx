import { GetServerSideProps, NextPage } from 'next'
import { getSession } from 'next-auth/react'
import { groq } from 'next-sanity'
import { useRouter } from 'next/router'
import { useState } from 'react'

import { Delete, Edit, Preview } from '@mui/icons-material'
import { Button, IconButton, Paper, TextField } from '@mui/material'
import { sanityClient } from '@pixellated/sanity'
import { useResume } from '@pixellated/state/resume'
import styles from '@pixellated/styles/resume.module.scss'
import { Resume } from '@pixellated/types/resume'

interface Props {
    fetchedResumes: Resume[]
    username: string
}



const ResumeHome: NextPage<Props> = ({username, fetchedResumes}) => {
    const router = useRouter()
    const { resume, setResume } = useResume()
    const [ resumes, setResumes ] = useState(fetchedResumes)
    const [ title, setTitle ] = useState('')
    const onCreate = () => {
        setResume({
            ...resume,
            title,
            username
        })
        router.push('/resume/builder')
    }
    const onEdit = (resume: Resume) => {
        setResume(resume)
        router.push('/resume/builder')
    }

    const onPreview = (resume: Resume) => {
        setResume(resume)
        router.push('/resume/preview')
    }

    const onDelete = async (id: string) => {
        const oldState = resumes
        setResumes(resumes.filter(resume => resume._id !== id))
        await fetch(`/api/resume/delete/${id}`, {
            method: 'POST',
        })
    }

    return (
        <main className="container">
            <div className="layout">
                <Paper className={styles.resumeSelect}>

                    <h4 className={styles.sectionTitle}>Create new resume</h4>
                    <div className={styles.newResume}>
                        <TextField label="Resume Name" placeholder="Choose a cool name" value={title} onChange={e => setTitle(e.target.value)}/>
                        <Button className={styles.createResume} variant="contained" size="large" onClick={onCreate}>Create New Resume</Button>
                    </div>
                    <h6 className={styles.or}>or</h6>
                    <h4 className={styles.sectionTitle}>Use an existing one</h4>
                    <div className={styles.existingResumeList}>
                        {resumes.map(resume => (
                            <Paper elevation={4} key={resume._id} className={styles.existingResumeItem}>
                                <div className={styles.existingResumeHead}>
                                <p className="resume-name">{resume.title}</p>
                                <IconButton onClick={() => onDelete(resume._id)}><Delete fontSize="small"/></IconButton>
                                </div>
                                {/* <p>Theme: {resume.layout.theme}</p> */}
                                <Button
                                    fullWidth
                                    onClick={() => onEdit(resume)}
                                    size="large"
                                    startIcon={<Edit />}
                                    variant="contained"
                                    className={styles.editResume}
                                >Edit</Button>
                                <Button
                                    fullWidth
                                    onClick={() => onPreview(resume)}
                                    size="large"
                                    startIcon={<Preview />}
                                    variant="contained"
                                    className={styles.previewResume}
                                >Preview</Button>
                            </Paper>
                        ))}
                    </div>

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
                destination: '/auth/signin?redirect=/resume'
            },
            props: {}
        }
    }
    const query = groq`
        *[_type == "resume" && username == $username] {
            ...
        }
    `
    const fetchedResumes = await sanityClient.fetch(query, {
        username: session.user?.email
    })
    return {
        props: {
            fetchedResumes,
            username: session.user?.email
        }
    }
}