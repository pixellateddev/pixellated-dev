import { FC } from "react"

interface Props {
    icon: React.ReactElement,
    text: string
}

const IconText: FC<Props> = ({icon, text}) => {
    return (
        <div className="icon-text">
            {icon}
            <p>{text}</p>
        </div>
    )
}

export default IconText