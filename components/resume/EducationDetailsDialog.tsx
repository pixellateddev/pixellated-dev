import { Formik } from 'formik'
import { FC, useEffect } from 'react'

import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle
} from '@mui/material'

import { Course } from '../../@types/resume'
import styles from '../../styles/resume.module.scss'
import { Checkbox, TextField } from '../formik'

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
    return (
        <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth >
            {open && ( <>
            <DialogTitle>Education Details</DialogTitle>
            <Formik
                initialValues={selectedCourse || initialValues}
                onSubmit={(data) => onOkay(data)}
            >
                {({handleSubmit}) => (
                    <form onSubmit={handleSubmit}>
                        <DialogContent className={styles.educationDetailsForm}>
                            <TextField label="Course Name" name="courseName" required className={styles.courseName} />
                            <TextField label="Institute Name" name="institute" required className={styles.institute}/>
                            <TextField label="Location" name="location" className={styles.location}/>
                            <div className={styles.date}>
                                <TextField label="Start Year" placeholder="YYYY" required name="startYear" />
                                <TextField label="End Year" placeholder="YYYY" name="endYear" />
                                <Checkbox label="Currently Persuing?" name="currentlyPursuing"/>
                            </div>
                            <TextField label="Score" name="score" required className={styles.score}/>
                        </DialogContent>
                        <DialogActions>
                            <Button color="error" variant="outlined" onClick={onClose}>Cancel</Button>
                            <Button variant="outlined" type="submit">Okay</Button>
                        </DialogActions>
                    </form>
                )}
            </Formik>
            </>)}
        </Dialog>
    )
}

export default EducationDetailsDialog