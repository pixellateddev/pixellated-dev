import { Button } from "@mui/material"
import { FC, useState } from "react"
import { EducationDetail } from "../../@types/resume"
import EducationDetailsDialog from "./EducationDetailsDialog"

interface Props {
    educationDetails: EducationDetail[]
    onAdd: (data: EducationDetail) => void
    onChange: (id: string, data: EducationDetail) => void
    onDelete: (id: string) => void
}

const EducationDetailsBuilder: FC<Props> = ({educationDetails, onAdd}) => {
    const [open, setOpen] = useState(false)

    const onSubmit = (data: EducationDetail) => {
        onAdd(data)
        setOpen(false)
    }
    return (
        <>
            <div className="education-details">
                <h3>Education Details</h3>
                {educationDetails.map(course => (
                    <div key={course.id} className="edu-details">
                        <p>Course Name: {course.courseName}</p>
                    </div>
                ))}
                <Button onClick={() => setOpen(true)}>Add Education Details</Button>
            </div>
            <EducationDetailsDialog open={open} onOkay={onSubmit} onClose={() => setOpen(false)}/>
        </>
    )
}

export default EducationDetailsBuilder