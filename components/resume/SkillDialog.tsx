import { Dialog, DialogActions, DialogTitle, DialogContent, Button } from "@mui/material"
import { Formik } from "formik"
import { FC, useEffect } from "react"
import { Skill } from "../../@types/resume"
import { TextField } from "../formik"

interface Props {
    open: boolean
    onClose: () => any
    onOkay: (data: any) => void
    selectedSkill?: Skill
}

const initialValues: Skill = {
    id: '',
    name: ''
}

const SkillDialog: FC<Props> = ({open, onClose, onOkay, selectedSkill}) => {

    return (
        <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth >
            {open && (
                <>
                    <DialogTitle>Add Skill</DialogTitle>
                    <Formik
                        initialValues={initialValues}
                        onSubmit={data => onOkay(data)}
                    >
                        {({handleSubmit}) => (
                            <form onSubmit={handleSubmit}>
                                <DialogContent>
                                    <TextField label="Skill" name="name" />
                                </DialogContent>
                                <DialogActions>
                                    <Button onClick={onClose}>Cancel</Button>
                                    <Button type="submit">Okay</Button>
                                </DialogActions>
                            </form>
                        )}
                    </Formik>
                </>
            )}
        </Dialog>
    )
}

export default SkillDialog