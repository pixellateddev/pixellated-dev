import { FC, useEffect } from "react"
import { CustomInfo, Job } from "../../@types/resume"
import { Dialog, DialogActions, DialogTitle, DialogContent, Button, IconButton } from "@mui/material"
import { AddCircle, Delete } from '@mui/icons-material'
import { FieldArray, Formik } from "formik"
import { TextField } from "../formik"


interface Props {
    open: boolean
    edit: boolean
    block?: CustomInfo
    onClose: () => any
    onOkay: (data: any) => void
}

const initialValues: CustomInfo = {
    id: '',
    name: '',
    items: []
}


const CustomBlockDialog: FC<Props> = ({open, onClose, onOkay, block}) => {
    return (
        <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth >
            {open && (
                <>
                    <DialogTitle>{block?.name || 'Add Custom Block'}</DialogTitle>
                    <Formik
                        initialValues={block || initialValues}
                        onSubmit={data => onOkay(data)}
                    >
                        {({ handleSubmit, values }) => (
                            <form onSubmit={handleSubmit}>
                                <DialogContent>
                                    <TextField label="Name" name="name" />
                                    <FieldArray 
                                        name="items"
                                        render={helpers => (
                                            <div>
                                                {values.items.map((_, index) => (
                                                    <div key={index}>
                                                        <TextField  name={`items.${index}`} label={`Item ${index + 1}`} />
                                                        <IconButton color="error" onClick={() => helpers.remove(index)}><Delete /></IconButton>
                                                    </div>
                                                ))} 
                                                <Button onClick={() => helpers.push('')}>Add Item</Button>
                                            </div>

                                        )}
                                    />
                                </DialogContent>
                                <DialogActions>
                                    <Button onClick={onClose} color="error" variant="outlined">Cancel</Button>
                                    <Button type="submit" variant="outlined">Okay</Button>
                                </DialogActions>
                            </form>
                        )}
                    </Formik>
                </>
            )}
            
            {/* <form onSubmit={handleSubmit(onSubmit)}>
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
            </form> */}
        </Dialog>
    )
}

export default CustomBlockDialog