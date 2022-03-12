import { Button } from "@mui/material"
import { FC, useState } from "react"
import { CustomInfo } from "../../@types/resume"
import CustomBlockDialog from "./CustomBlockDialog"

interface Props {
    customInfo: CustomInfo[]
    onAdd: (data: CustomInfo) => void
    onChange: (id: string, data: CustomInfo) => void
    onDelete: (id: string) => void
}

const CustomBlockBuilder: FC<Props> = ({customInfo, onAdd}) => {
    const [ open, setOpen ] = useState(false)
    const onSubmit = (data: CustomInfo) => {
        onAdd(data)
        setOpen(false)
    }
    return (
        <div>
            {customInfo.map(block => (
                <div key={block.id}>
                    <h3>{block.name}</h3>
                    <ul>
                        {block.values.map(value => (
                            <li key={value}>{value}</li>
                        ))}
                    </ul>
                    <Button>Edit {block.name} details</Button>
                </div>
            ))}
            <Button onClick={() => setOpen(true)}>Add Custom Block</Button>
            <CustomBlockDialog open={open} onClose={() => setOpen(false)} onOkay={onSubmit}/>
        </div>
    )
}

export default CustomBlockBuilder