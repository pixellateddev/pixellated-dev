import { FC } from "react"
import { TextField as MuiTextField, TextFieldProps } from '@mui/material'
import { useField } from "formik"

interface Props {
    readOnly?: boolean
}

const TextField: FC<Props & TextFieldProps> = (props) => {
    const { name, readOnly=false } = props
    const [field, meta, helpers] = useField(name!)
    if (readOnly) {
        return <p>{field.value}</p>
    }
    return (
        <MuiTextField {...field} {...props}/>
    )
}

export default TextField