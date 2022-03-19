import { useField } from 'formik'
import { FC } from 'react'

import { TextField as MuiTextField, TextFieldProps } from '@mui/material'

interface Props {
    readOnly?: boolean
}

const TextField: FC<Props & TextFieldProps> = (props) => {
    const { name, readOnly=false } = props
    const [field, meta, helpers] = useField(name!)
    const { error, touched } = meta
    
    if (readOnly) {
        return <p>{field.value}</p>
    }
    return (
        <MuiTextField {...field} {...props} helperText={touched && error} error={!!(touched && error)}/>
    )
}

export default TextField