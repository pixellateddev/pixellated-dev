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
}

const Checkbox: FC<Props> = (props) => {
    const [field, meta, helpers] = useField({name: props.name!, type: 'checkbox'})
    return (
    <FormControlLabel 
        label={props.label}
        control={<MuiCheckbox {...field} {...props}/>}
    />
    )
}

export default Checkbox