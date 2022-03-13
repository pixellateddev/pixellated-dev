import { Dialog, DialogActions, DialogTitle, DialogContent, Button, TextField, FormControlLabel, Checkbox } from "@mui/material"
import { FC, useEffect } from "react"
import { Controller, useForm } from "react-hook-form"
import { Course } from "../../@types/resume"

interface Props {
    open: boolean
    onClose: () => any
    onOkay: (data: any) => void
    selectedCourse?: Course
}

const EducationDetailsDialog: FC<Props> = ({open, onClose, onOkay, selectedCourse}) => {
    const { register, handleSubmit, reset, formState, control } = useForm<Course>()

    useEffect(() => {
        reset(selectedCourse || {})
    }, [open])

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
                    <Controller 
                        name='currentlyPursuing'
                        control={control}
                        render={({ field: { onChange, value }}) => (
                            <FormControlLabel label="Currently Persuing?"  checked={Boolean(value)} onChange={onChange} control={<Checkbox />}/>
                        )}
                    />
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