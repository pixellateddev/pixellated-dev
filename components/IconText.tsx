import { Children, FC } from "react"

interface Props {
    icon: React.ReactElement,
}

const IconText: FC<Props> = ({icon, children}) => {
    return (
        <div className="icon-text">
            {icon}
            <p>{children}</p>
        </div>
    )
}

export default IconText