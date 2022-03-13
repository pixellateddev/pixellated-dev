import { Button, Checkbox, Dialog, DialogActions, DialogContent, DialogTitle, FormControlLabel, TextField } from "@mui/material"
import { FC, useEffect } from "react"
import { Controller, useForm } from "react-hook-form"
import { WorkExperience } from "../../@types/resume"

interface Props {
    open: boolean
    onClose: () => any
    onOkay: (data: any) => void
    selectedJob?: WorkExperience
}


const WorkExperienceDialog: FC<Props> = ({open, onClose, onOkay, selectedJob}) => {
    const { register, handleSubmit, reset, control } = useForm<WorkExperience>()

    useEffect(() => {
        reset(selectedJob || {})
    }, [open])

    return (
        <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth >
            <DialogTitle>Add Work Experience</DialogTitle>
            <form onSubmit={handleSubmit(onOkay)}>
                <DialogContent style={{padding: '1em 1em', display: 'flex', flexDirection: 'column', gap: '0.5em'}}>
                    <TextField label="Organization Name" {...register('organization')} />
                    <TextField label="Job Role" {...register('role')} />
                    <TextField label="Start Date" {...register('startDate')} />
                    <TextField label="End Date" {...register('endDate')} />
                    <Controller 
                        name='currenltyWorking'
                        control={control}
                        render={({ field: { onChange, value }}) => (
                            <FormControlLabel label="Currently Working?"  checked={Boolean(value)} onChange={onChange} control={<Checkbox />}/>
                        )}
                    />
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