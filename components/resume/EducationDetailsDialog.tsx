import { Dialog, DialogActions, DialogTitle, DialogContent, Button, TextField, FormControlLabel, Checkbox } from "@mui/material"
import { FC, useEffect } from "react"
import { useForm } from "react-hook-form"
import { EducationDetail } from "../../@types/resume"

interface Props {
    open: boolean
    onClose: () => any
    onOkay: (data: any) => void
}

const EducationDetailsDialog: FC<Props> = ({open, onClose, onOkay}) => {
    const { register, handleSubmit, reset, formState } = useForm<EducationDetail>()

    

    return (
        <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth >
            <DialogTitle>Education Details</DialogTitle>
            <form onSubmit={handleSubmit(onOkay)}>
                <DialogContent style={{padding: '1em 1em', display: 'flex', flexDirection: 'column', gap: '0.5em'}}>
                    <TextField label="Course Name" {...register('courseName')} />
                    <TextField label="Institute Name" {...register('institute')} />
                    <TextField label="Location" {...register('location')} />
                    <TextField label="Start Year" {...register('startYear')} />
                    <TextField label="End Year" {...register('endYear')} />
                    <FormControlLabel label="Currently Persuing?" control={<Checkbox {...register('currentlyPursuing')} />}/>
                    <TextField label="Score" {...register('score')} />
                </DialogContent>
                <DialogActions>
                    <Button onClick={onClose} color="error" variant="outlined">Cancel</Button>
                    <Button type="submit" variant="outlined">Okay</Button>
                </DialogActions>
            </form>
        </Dialog>
    )
}

export default EducationDetailsDialog