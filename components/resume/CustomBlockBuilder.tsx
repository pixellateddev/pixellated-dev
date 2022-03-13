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

const CustomBlockBuilder: FC<Props> = ({customInfo, onAdd, onChange}) => {
    const [ open, setOpen ] = useState(false)
    const [ selectedBlock, setSelectedBlock ] = useState<CustomInfo | undefined>()

    const addNewBlock = () => {
        setSelectedBlock(undefined)
        setOpen(true)
    }

    const editBlock = (block: CustomInfo) => {
        setSelectedBlock(block)
        setOpen(true)
    }

    const onSubmit = (data: CustomInfo) => {
        if (selectedBlock) {
            onChange(selectedBlock.id, data)
        }
        else {
            onAdd(data)
        }
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
                    <Button onClick={() => editBlock(block)}>{block.values.length ? 'Edit' : 'Add'} {block.name}</Button>
                </div>
            ))}
            <Button onClick={addNewBlock}>Add Custom Block</Button>
            <CustomBlockDialog open={open} onClose={() => setOpen(false)} onOkay={onSubmit} edit={setSelectedBlock !== null} block={selectedBlock}/>
        </div>
    )
}

export default CustomBlockBuilder