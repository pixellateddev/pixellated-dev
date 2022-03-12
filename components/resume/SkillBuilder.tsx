import { Button } from "@mui/material"
import { FC, useState } from "react"
import { Skill } from "../../@types/resume"
import EducationDetailsDialog from "./EducationDetailsDialog"
import SkillDialog from "./SkillDialog"

interface Props {
    skills: Skill[]
    onAdd: (data: Skill) => void
    onChange: (id: string, data: Skill) => void
    onDelete: (id: string) => void
}

const SkillBuilder: FC<Props> = ({skills, onAdd}) => {
    const [open, setOpen] = useState(false)

    const onSubmit = (data: Skill) => {
        onAdd(data)
        setOpen(false)
    }

    return (
        <>
            <div className="education-details">
                <h3>Skills</h3>
                {skills.map(skill => (
                    <div key={skill.id} className="edu-details">
                        <p>{skill.name}</p>
                    </div>
                ))}
                <Button onClick={() => setOpen(true)}>Add Skill</Button>
            </div>
            <SkillDialog open={open} onOkay={onSubmit} onClose={() => setOpen(false)} />
        </>
    )
}

export default SkillBuilder