import { Delete, Edit } from "@mui/icons-material"
import { Button, IconButton, Paper } from "@mui/material"
import { FC, useState } from "react"
import { WorkExperience } from "../../@types/resume"
import WorkExperienceDialog from "./WorkExperienceDialog"

interface Props {
    workExperience: WorkExperience[]
    onAdd: (data: WorkExperience) => void
    onChange: (id: string, data: WorkExperience) => void
    onDelete: (id: string) => void
}

const WorkExperienceBuilder: FC<Props> = ({workExperience, onAdd, onDelete, onChange}) => {
    const [ open, setOpen ] = useState(false)
    const [ selectedJob, setSelectedJob]  = useState<WorkExperience | undefined>(undefined)

    const editJob = (selectedJob: WorkExperience) => {
        setSelectedJob(selectedJob)
        setOpen(true)
    }
    const onSubmit = (data: WorkExperience) => {
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
                            <p>Currently Working: {exp.currenltyWorking.toString()}</p>

                        </div>
                        <div>
                            <IconButton color="primary" onClick={() => editJob(exp)}><Edit /></IconButton>
                            <IconButton color="error" onClick={() => onDelete(exp.id)}><Delete /></IconButton>
                        </div>
                    </Paper>
                ))}
                <Button onClick={() => setOpen(true)}>Add Work Experience</Button>
            </div>
            <WorkExperienceDialog 
                open={open} onClose={() => setOpen(false)} 
                onOkay={onSubmit} 
                edit={Boolean(selectedJob)} 
                selectedJob={selectedJob}
            />
        </>
    )
}

export default WorkExperienceBuilder