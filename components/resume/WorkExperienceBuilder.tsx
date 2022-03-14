import { Delete, Edit } from "@mui/icons-material"
import { Button, IconButton, Paper } from "@mui/material"
import { FC, useState } from "react"
import { Job } from "../../@types/resume"
import WorkExperienceDialog from "./WorkExperienceDialog"

interface Props {
    workExperience: Job[]
    onAdd: (data: Job) => void
    onChange: (id: string, data: Job) => void
    onDelete: (id: string) => void
}

const WorkExperienceBuilder: FC<Props> = ({workExperience, onAdd, onDelete, onChange}) => {
    const [ open, setOpen ] = useState(false)
    const [ selectedJob, setSelectedJob]  = useState<Job | undefined>(undefined)


    const editJob = (selectedJob: Job) => {
        setSelectedJob(selectedJob)
        setOpen(true)
    }

    const addJob = () => {
        setSelectedJob(undefined)
        setOpen(true)
    }

    const onSubmit = (data: Job) => {
        if (selectedJob) {
            onChange(selectedJob.id, data)
        }
        else {
            onAdd(data)
        }
        setOpen(false)
    }
    return (
        <>
            <div className="work-details">
                <h3>Work Details</h3>
                {workExperience.map(exp => (
                    <Paper key={exp.id} style={{padding: '1em', display: 'flex', justifyContent: 'space-between'}}>
                        <div>
                            <p>Organization: {exp.organization}</p>
                            <p>Job Role: {exp.role}</p>
                            <p>Job Description: {exp.description}</p>
                            <p>Start Date: {exp.startDate}</p>
                            <p>End Date: {exp.endDate}</p>
                            <p>Currently Working: {`${exp.currentlyWorking}`}</p>

                        </div>
                        <div>
                            <IconButton color="primary" onClick={() => editJob(exp)}><Edit /></IconButton>
                            <IconButton color="error" onClick={() => onDelete(exp.id)}><Delete /></IconButton>
                        </div>
                    </Paper>
                ))}
                <Button onClick={addJob}>Add Work Experience</Button>
            </div>
            <WorkExperienceDialog 
                open={open} onClose={() => setOpen(false)} 
                onOkay={onSubmit} 
                selectedJob={selectedJob}
            />
        </>
    )
}

export default WorkExperienceBuilder