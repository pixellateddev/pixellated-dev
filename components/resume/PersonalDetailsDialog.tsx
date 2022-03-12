import { FC } from "react"
import { Dialog, DialogActions, DialogContent, DialogTitle, TextField, Button } from "@mui/material"

interface Props {
    open: boolean
    onClose: () => any
    onSubmit: () => any
}


const PersonalDetailsDialog: FC<Props> = ({open, onClose, onSubmit}) => {
    return (
        <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth >
            <DialogTitle>Personal Details</DialogTitle>
            <DialogContent style={{padding: '1em 1em', display: 'flex', flexDirection: 'column', gap: '1em'}}>
                <TextField label="Full Name" fullWidth/>
                <TextField label="Email" fullWidth/>
            </DialogContent>
            <DialogActions>
                <Button onClick={onSubmit} color="error" variant="outlined">Cancel</Button>
                <Button onClick={onClose} variant="outlined">Okay</Button>
            </DialogActions>
        </Dialog>
    )
}

export default PersonalDetailsDialog