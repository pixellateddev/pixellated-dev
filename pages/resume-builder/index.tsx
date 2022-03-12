import { NextPage } from "next"
import { useState } from "react"
import { PersonalDetailsDialog } from "../../components/resume"

const ResumeBuilder: NextPage = () => {
    const [ open, setOpen ] = useState(false)

    const handleClose = () => {
        setOpen(false)
    }
    
    return (
        <main className="container">
            <div className="layout">
                <div className="full-width">
                    <h2>Resume Builder</h2>    
                    <div className="resume-theme-box" onClick={() => setOpen(true)}>
                        Click Here
                    </div>
                    <PersonalDetailsDialog open={open} onClose={handleClose} onSubmit={handleClose}/>
                </div>
            </div>
        </main>
    )
}

export default ResumeBuilder