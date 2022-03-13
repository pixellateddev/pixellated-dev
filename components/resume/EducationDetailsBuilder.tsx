import { Delete, Edit } from "@mui/icons-material"
import { Button, IconButton, Paper } from "@mui/material"
import { FC, useState } from "react"
import { EducationDetails } from "../../@types/resume"
import EducationDetailsDialog from "./EducationDetailsDialog"

interface Props {
    educationDetails: EducationDetails[]
    onAdd: (data: EducationDetails) => void
    onChange: (id: string, data: EducationDetails) => void
    onDelete: (id: string) => void
}

const EducationDetailsBuilder: FC<Props> = ({educationDetails, onAdd, onChange, onDelete}) => {
    const [open, setOpen] = useState(false)
    const [ selectedCourse, setSelectedCourse ] = useState<EducationDetails | undefined>(undefined)

    const addCourse = () => {
        setSelectedCourse(undefined)
        setOpen(true)
    }

    const editCourse = (selectedCourse: EducationDetails) => {
        setSelectedCourse(selectedCourse)
        setOpen(true)
    }

    const onSubmit = (data: EducationDetails) => {
        if (selectedCourse) {
            onChange(selectedCourse.id, data)
        }
        else {
            onAdd(data)
        }
        setOpen(false)
    }
    return (
        <>
            <div className="education-details">
                <h3>Education Details</h3>
                {educationDetails.map(course => (
                    <Paper key={course.id} className="edu-details" style={{padding: '1em', display: 'flex', justifyContent: 'space-between'}}>
                        <div>
                            <p>Course Name: {course.courseName}</p>
                            <p>Institue Name: {course.institute}</p>
                            <p>Start Year: {course.startYear}</p>
                            <p>End Year: {course.endYear}</p>
                            <p>Currently Persuing?: {Boolean(course.currentlyPursuing).toString()}</p>
                            <p>Location: {course.location}</p>
                            <p>Score: {course.score}</p>
                        </div>
                        <div>
                            <IconButton color="primary" onClick={() => editCourse(course)}><Edit /></IconButton>
                            <IconButton color="error" onClick={() => onDelete(course.id)}><Delete /></IconButton>
                        </div>
                    </Paper>
                ))}
                <Button onClick={addCourse}>Add Education Details</Button>
            </div>
            <EducationDetailsDialog 
                open={open} 
                onOkay={onSubmit} 
                onClose={() => setOpen(false)}
                selectedCourse={selectedCourse}
            />
        </>
    )
}

export default EducationDetailsBuilder