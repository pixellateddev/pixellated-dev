import { FC } from "react"

export const ListItem: FC = ({children}) => {
    return <li>{children}</li>
}


export const List: FC = ({children}) => {
    return (
        <ul>{children}</ul>
    )
}

