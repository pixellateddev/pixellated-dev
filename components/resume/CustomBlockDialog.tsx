import { Dialog, DialogActions, DialogTitle, DialogContent, Button, TextField, FormControlLabel, Checkbox } from "@mui/material"
import { FC, useEffect } from "react"
import { useFieldArray, useForm } from "react-hook-form"
import { CustomInfo } from "../../@types/resume"

interface Props {
    open: boolean
    edit: boolean
    block?: CustomInfo
    onClose: () => any
    onOkay: (data: any) => void
}


const CustomBlockDialog: FC<Props> = ({open, onClose, onOkay, edit=false, block}) => {
    const { register, handleSubmit, reset, formState, control } = useForm<CustomInfo>()
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
            console.log({block})
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
                    {fields.map((field, index) => (
                        <TextField
                            key={field.id} // important to include key with field's id
                            {...register(`values.${index}.value` as any)} 
                        />
                    ))}                    
                    <Button onClick={() => append({value: ''})}>Add Value</Button>
                    <Button onClick={() => remove(fields.length - 1)}>Remove Value</Button>
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