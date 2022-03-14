import { FC } from "react"
import { Dialog, DialogActions, DialogContent, DialogTitle, Button } from "@mui/material"
import { PersonalDetails } from "../../@types/resume"
import { Formik } from "formik"
import { TextField } from "../formik"

interface Props {
    open: boolean
    onClose: () => any
    onOkay: (data: any) => void
    initialValues: PersonalDetails
}


const PersonalDetailsDialog: FC<Props> = ({open, onClose, onOkay, initialValues}) => {
    return (
        <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth >
            <DialogTitle>Personal Details</DialogTitle>
            <Formik 
                initialValues={initialValues}
                onSubmit={data => onOkay(data)}
            >
                {({handleSubmit}) => (
                    <form onSubmit={handleSubmit}>
                        <DialogContent>
                            <TextField label="Full Name" name="fullName" />
                            <TextField label="Current Title" name="currentRole" />
                            <TextField label="Phone Number" name="phoneNumber" />
                            <TextField label="Email" name="email" />
                            <TextField label="Location" name="location" />
                            <TextField label="Github Handle" name="github" />
                            <TextField label="LinkedIn Handle" name="linkedin" />
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