import { Button } from "@mui/material"
import { FC, useState } from "react"
import { WorkExperience } from "../../@types/resume"
import WorkExperienceDialog from "./WorkExperienceDialog"

interface Props {
    workExperience: WorkExperience[]
    onAdd: (data: WorkExperience) => void
    onChange: (id: string, data: WorkExperience) => void
    onDelete: (id: string) => void
}

const WorkExperienceBuilder: FC<Props> = ({workExperience, onAdd}) => {
    const [ open, setOpen ] = useState(false)
    const onSubmit = (data: WorkExperience) => {
        onAdd(data)
        setOpen(false)
    }
    return (
        <>
            <div className="work-details">
                <h3>Work Details</h3>
                {workExperience.map(exp => (
                    <div key={exp.id}>
                        <p>Organization: {exp.organization}</p>
                        <p>Job Role: {exp.role}</p>
                    </div>
                ))}
                <Button onClick={() => setOpen(true)}>Add Work Experience</Button>
            </div>
            <WorkExperienceDialog open={open} onClose={() => setOpen(false)} initialValues={workExperience[0]} onOkay={onSubmit}/>
        </>
    )
}

export default WorkExperienceBuilder