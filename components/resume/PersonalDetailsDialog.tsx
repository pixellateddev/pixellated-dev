import { FC, useEffect } from "react"
import { Dialog, DialogActions, DialogContent, DialogTitle, TextField, Button } from "@mui/material"
import { useForm } from 'react-hook-form'
import { PersonalDetails } from "../../@types/resume"

interface Props {
    open: boolean
    onClose: () => any
    onOkay: (data: any) => void
    initialValues: PersonalDetails
}


const PersonalDetailsDialog: FC<Props> = ({open, onClose, onOkay, initialValues}) => {
    const { register, handleSubmit, reset, formState } = useForm<PersonalDetails>({
        defaultValues: initialValues
    })

    useEffect(() => {
        reset(initialValues)
    },[open])
    
    return (
        <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth >
            <DialogTitle>Personal Details</DialogTitle>
            <form onSubmit={handleSubmit(onOkay)}>
                <DialogContent style={{padding: '1em 1em', display: 'flex', flexDirection: 'column', gap: '0.5em'}}>
                    <TextField label="Full Name"  {...register('fullName')} />
                    <TextField label="Current Title"  {...register('currentRole')} />
                    <TextField label="Phone Number"  {...register('phoneNumber')} />
                    <TextField label="Email"  {...register('email')}/>
                    <TextField label="Location" {...register('location')} />
                    <TextField label="Github Handle"  {...register('github')} />
                    <TextField label="LinkedIn Handle"  {...register('linkedin')} />
                </DialogContent>
                <DialogActions>
                    <Button onClick={onClose} color="error" variant="outlined">Cancel</Button>
                    <Button type="submit" variant="outlined">Okay</Button>
                </DialogActions>
            </form>
        </Dialog>
    )
}

export default PersonalDetailsDialog