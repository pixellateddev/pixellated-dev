import { FC, useState } from 'react'

import { Delete } from '@mui/icons-material'
import { Button, IconButton } from '@mui/material'

import { CustomInfo } from '../../@types/resume'
import CustomBlockDialog from './CustomBlockDialog'

interface Props {
    customInfo: CustomInfo[]
    onAdd: (data: CustomInfo) => void
    onChange: (id: string, data: CustomInfo) => void
    onDelete: (id: string) => void
}

const CustomBlockBuilder: FC<Props> = ({customInfo, onAdd, onChange, onDelete}) => {
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
                    <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                        <h3>{block.name}</h3>
                        <IconButton color="error" onClick={() => onDelete(block.id)}><Delete /></IconButton>
                    </div>
                    <ul>
                        {block.items.map(item => (
                            <li key={item}>{item}</li>
                        ))}
                    </ul>
                    <Button onClick={() => editBlock(block)}>{block.items.length ? 'Edit' : 'Add'} {block.name}</Button>
                </div>
            ))}
            <Button onClick={addNewBlock}>Add Custom Block</Button>
            <CustomBlockDialog 
                open={open} 
                onClose={() => setOpen(false)} 
                onOkay={onSubmit} 
                edit={!!selectedBlock} 
                block={selectedBlock}
            />
        </div>
    )
}

export default CustomBlockBuilder