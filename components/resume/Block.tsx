import { FC } from "react"

interface Props {
    title: string
}

const Block: FC<Props> = ({title, children}) => {
    return (
        <div className="block">
            <h3>{title}</h3>
            {children}
        </div>
    )
}

export default Block