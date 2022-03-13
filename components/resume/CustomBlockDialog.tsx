import { FC, useEffect } from "react"
import { useFieldArray, useForm } from "react-hook-form"
import { CustomInfo, Job } from "../../@types/resume"
import { Dialog, DialogActions, DialogTitle, DialogContent, Button, TextField, IconButton } from "@mui/material"
import { AddCircle, Delete } from '@mui/icons-material'


interface Props {
    open: boolean
    edit: boolean
    block?: CustomInfo
    onClose: () => any
    onOkay: (data: any) => void
}


const CustomBlockDialog: FC<Props> = ({open, onClose, onOkay, edit=false, block}) => {
    const { register, handleSubmit, reset, getValues, control } = useForm<CustomInfo>()
    const { fields, append, remove } = useFieldArray({
        control, // control props comes from useForm (optional: if you are using FormContext)
        name: "values" as never, // unique name for your Field Array
    });

 
    const onSubmit = (data: any) => {
        onOkay({
            id: data.id,
            name: data.name,
            values: data.values.map((v: any) => v.value)
        })
    }

    useEffect(() => {
        if(edit) {
            reset({
                ...block,
                values: block?.values.map(value => ({value}))
            } as any)
        }
    }, [block])

    return (
        <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth >
            <DialogTitle>{edit ? block?.name : 'Add Custom Block'}</DialogTitle>
            <form onSubmit={handleSubmit(onSubmit)}>
                <DialogContent style={{padding: '1em 1em', display: 'flex', flexDirection: 'column', gap: '0.5em'}}>
                    <TextField label="Name" {...register('name')} />
                    <br />
                    <p>Add {edit ? block?.name : 'Values'}</p>
                    {fields.map((field, index) => (
                        <div key={field.id} style={{display: 'flex'}}>
                            <TextField
                                // important to include key with field's id
                                fullWidth
                                {...register(`values.${index}.value` as any)} 
                            />
                            <IconButton color="error" onClick={() => remove(index)}><Delete /></IconButton>
                        </div>  
                    ))}            
                    <Button onClick={() => append({value: ''})}>Add Value</Button>
                </DialogContent>
                <DialogActions>
                    <Button onClick={onClose} color="error" variant="outlined">Cancel</Button>
                    <Button type="submit" variant="outlined">Okay</Button>
                </DialogActions>
            </form>
        </Dialog>
    )
}

export default CustomBlockDialog