import { useField } from 'formik'
import { FC } from 'react'

import {
  Checkbox as MuiCheckbox,
  CheckboxProps,
  FormControlLabel,
  Switch,
  TextFieldProps
} from '@mui/material'

interface Props extends CheckboxProps {
    label: string
    readOnly?: boolean
}

const Checkbox: FC<Props> = (props) => {
    const { name , label, readOnly=false} = props
    const [field, meta, helpers] = useField({name: name!, type: 'checkbox'})
    return (
    <FormControlLabel 
        label={label}
        control={<>{field.value}</>}
        // control={<MuiCheckbox {...field} {...props}/>}
    />
    )
}

export default Checkbox