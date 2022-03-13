import { FC } from "react"
import { TextField as MuiTextField, TextFieldProps } from '@mui/material'
import { useField } from "formik"

const TextField: FC<TextFieldProps> = (props) => {
    const [field, meta, helpers] = useField(props.name!)
    return (
        <MuiTextField {...field} {...props}/>
    )
}

export default TextField