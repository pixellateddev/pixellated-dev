import { Children, FC } from 'react'

import { Icon } from '@mui/material'

interface Props {
    icon: React.ReactElement,
}

const IconText: FC<Props> = ({icon, children}) => {
    return (
        <div className="icon-text">
            <Icon color="error">{icon}</Icon>
            <p>{children}</p>
        </div>
    )
}

export default IconText