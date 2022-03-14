import { Button, Dialog, DialogActions, DialogContent, DialogTitle} from "@mui/material"
import { Formik } from "formik"
import { FC, useEffect } from "react"
import { Job } from "../../@types/resume"
import { Checkbox, TextField, DatePicker } from "../formik"
import styles from '../../styles/resume.module.scss'

const initialValues: Job = {
    id: '',
    currentlyWorking: false,
    description: '',
    organization: '',
    responsibilities: [],
    role: '',
    startDate: '',
    endDate: ''
}

interface Props {
    open: boolean
    onClose: () => any
    onOkay: (data: any) => void
    selectedJob?: Job
}


const WorkExperienceDialog: FC<Props> = ({open, onClose, onOkay, selectedJob}) => {
    return (
        <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
            {open && (
                <>
                    <DialogTitle>Add Work Experience</DialogTitle>
                    <Formik
                        initialValues={selectedJob || initialValues}
                        onSubmit={(data) => onOkay(data)}
                    >
                        {({handleSubmit}) => (
                            <form onSubmit={handleSubmit}>
                                <DialogContent className={styles.workExperienceForm}>
                                    <div className={styles.orgName}>
                                        <TextField label="Organization Name" name="organization" fullWidth required/>
                                    </div>
                                    <div className={styles.jobRole}>
                                        <TextField label="Job Role" name="role" fullWidth required/>

                                    </div>
                                    <div className={styles.date}>
                                        <TextField label="Start Date" name="startDate" required />
                                        <TextField label="End Date" name="endDate" />
                                        <Checkbox label="Currently Working?" name="currentlyWorking" />
                                    </div>
                                    <div className={styles.jobDescription}>
                                        <TextField 
                                            label="Job Description" 
                                            name="description"
                                            fullWidth
                                            rows={4} 
                                            multiline 
                                        />
                                    </div>
                                </DialogContent>
                                <DialogActions>
                                    <Button variant="outlined" color="error" onClick={onClose}>Cancel</Button>
                                    <Button variant="outlined" type="submit">Okay</Button>
                                </DialogActions>
                            </form>
                        )}
                    </Formik>
                </>
            )}
        </Dialog>
    )
}

export default WorkExperienceDialog