import { Dialog, DialogTitle, DialogContent, Button, DialogActions } from "@mui/material"
import { Formik } from "formik"
import { FC, useEffect } from "react"
import { Course } from "../../@types/resume"
import { TextField, Checkbox } from "../formik"

interface Props {
    open: boolean
    onClose: () => any
    onOkay: (data: any) => void
    selectedCourse?: Course
}

const initialValues: Course = {
    id: '',
    courseName: '',
    institute: '',
    currentlyPursuing: false,
    startYear: '',
    endYear: '',
    location: '',
    score: ''
}

const EducationDetailsDialog: FC<Props> = ({open, onClose, onOkay, selectedCourse}) => {
    console.log(selectedCourse)
    return (
        <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth >
            {open && ( <>
            <DialogTitle>Education Details</DialogTitle>
            <Formik
                initialValues={selectedCourse || initialValues}
                onSubmit={(data) => {
                    console.log(data)
                    onOkay(data)
                }}
            >
                {({handleSubmit}) => (
                    <form onSubmit={handleSubmit}>
                        <DialogContent>
                            <TextField label="Course Name" name="courseName" />
                            <TextField label="Institute Name" name="institute" />
                            <TextField label="Location" name="location" />
                            <TextField label="Start Year" name="startYear" />
                            <TextField label="End Year" name="endYear" />
                            <Checkbox label="Currently Persuing?" name="currentlyPursuing"/>
                            <TextField label="Score" name="score" />
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={onClose}>Cancel</Button>
                            <Button type="submit">Okay</Button>
                        </DialogActions>
                    </form>
                )}
            </Formik>
            </>)}
        </Dialog>
    )
}

export default EducationDetailsDialog