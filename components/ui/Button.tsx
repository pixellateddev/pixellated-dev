import cx from 'classnames'
import { ButtonHTMLAttributes, FC } from 'react'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement>{
    variant?: 'text' | 'outlined' | 'contained'
    color?: 'primary' | 'secondary'
    fullWidth?: boolean
}

const Button: FC<Props> = ({ children, variant='contained', color='primary', className, ...props }) => {
    return (
        <button className={cx('button', variant, color, className)} {...props}>{children}</button>
    )
}

export default Button