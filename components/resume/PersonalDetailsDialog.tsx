import { FC } from "react"
import { Dialog, DialogActions, DialogContent, DialogTitle, Button } from "@mui/material"
import { PersonalDetails } from "../../@types/resume"
import { Formik } from "formik"
import { TextField } from "../formik"
import cx from 'classnames'
import styles from '../../styles/resume.module.scss'

interface Props {
    open: boolean
    onClose: () => any
    onOkay: (data: any) => void
    initialValues: PersonalDetails
}


const PersonalDetailsDialog: FC<Props> = ({open, onClose, onOkay, initialValues}) => {
    return (
        <Dialog open={open} onClose={onClose} maxWidth="lg" fullWidth >
            <DialogTitle>Personal Details</DialogTitle>
            <Formik 
                initialValues={initialValues}
                onSubmit={data => onOkay(data)}
            >
                {({handleSubmit}) => (
                    <form onSubmit={handleSubmit}>
                        <DialogContent className={styles.personalDetailsForm}>
                            <TextField label="Full Name" name="fullName" className={styles.field} />
                            <TextField label="Email" name="email" className={styles.field} />
                            <TextField label="Current Title" name="currentRole" fullWidth className={cx(styles.field, styles.full)} />
                            <TextField label="Phone Number" name="phoneNumber" className={styles.field} />
                            <TextField label="Location" name="location" className={styles.field} />
                            <TextField label="Github Handle" name="github" className={styles.field} />
                            <TextField label="LinkedIn Handle" name="linkedin" className={styles.field} />
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={onClose} color="error" variant="outlined">Cancel</Button>
                            <Button type="submit" variant="outlined">Okay</Button>
                        </DialogActions>
                    </form>
                )}
            </Formik>
        </Dialog>
    )
}

export default PersonalDetailsDialog