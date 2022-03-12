import { Button, Checkbox, Dialog, DialogActions, DialogContent, DialogTitle, FormControlLabel, TextField } from "@mui/material"
import { FC, useEffect } from "react"
import { useForm } from "react-hook-form"
import { WorkExperience } from "../../@types/resume"

interface Props {
    open: boolean
    onClose: () => any
    onOkay: (data: any) => void
    initialValues: WorkExperience
}


const WorkExperienceDialog: FC<Props> = ({open, onClose, onOkay, initialValues}) => {
    const { register, handleSubmit, reset, formState } = useForm<WorkExperience>({
        defaultValues: initialValues
    })

    useEffect(() => {
        reset(initialValues)
    },[open])
    return (
        <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth >
            <DialogTitle>Add Work Experience</DialogTitle>
            <form onSubmit={handleSubmit(onOkay)}>
                <DialogContent style={{padding: '1em 1em', display: 'flex', flexDirection: 'column', gap: '0.5em'}}>
                    <TextField label="Organization Name" {...register('organization')} />
                    <TextField label="Job Role" {...register('role')} />
                    <TextField label="Start Date" {...register('startDate')} />
                    <TextField label="End Date" {...register('endDate')} />
                    <FormControlLabel label="Currently Working?" control={<Checkbox {...register('currenltyWorking')} />}/>
                    <TextField label="Job Description" rows={4} maxRows={4} multiline {...register('description')}/>
                </DialogContent>
                <DialogActions>
                    <Button onClick={onClose} color="error" variant="outlined">Cancel</Button>
                    <Button type="submit" variant="outlined">Okay</Button>
                </DialogActions>
            </form>
        </Dialog>
    )
}

export default WorkExperienceDialog