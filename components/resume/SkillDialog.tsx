import { Dialog, DialogActions, DialogTitle, DialogContent, Button, TextField, FormControlLabel, Checkbox } from "@mui/material"
import { FC, useEffect } from "react"
import { useForm } from "react-hook-form"
import { Skill } from "../../@types/resume"

interface Props {
    open: boolean
    onClose: () => any
    onOkay: (data: any) => void
    selectedSkill?: Skill
}

const SkillDialog: FC<Props> = ({open, onClose, onOkay, selectedSkill}) => {
    const { register, handleSubmit, reset, formState } = useForm<Skill>()
    useEffect(() => {
        reset(selectedSkill || {})
    }, [open])
    return (
        <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth >
            <DialogTitle>Add Skill</DialogTitle>
            <form onSubmit={handleSubmit(onOkay)}>
                <DialogContent style={{padding: '1em 1em', display: 'flex', flexDirection: 'column', gap: '0.5em'}}>
                    <TextField label="Name" {...register('name')} />
                </DialogContent>
                <DialogActions>
                    <Button onClick={onClose} color="error" variant="outlined">Cancel</Button>
                    <Button type="submit" variant="outlined">Okay</Button>
                </DialogActions>
            </form>
        </Dialog>
    )
}

export default SkillDialog