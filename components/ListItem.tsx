import { FC } from "react"

const ListItem: FC = ({children}) => {
    return (
        <li>
            <div style={{display: "flex", gap: '.5em', alignItems: 'flex-start'}}>
                <img src="/assets/icons/bullet.svg" style={{position: 'relative', top: -2}}/>
                <p>{children}</p>
            </div>
        </li>
    )
}

export default ListItem