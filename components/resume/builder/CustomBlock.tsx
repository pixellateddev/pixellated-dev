import { FieldArray, Formik } from 'formik'
import { FC, useState } from 'react'

import { Delete, Edit, Save } from '@mui/icons-material'
import { Button, IconButton } from '@mui/material'
import { TextField } from '@pixellated/components/formik'
import { useResume } from '@pixellated/state/resume'
import styles from '@pixellated/styles/resume.module.scss'
import { CustomInfo } from '@pixellated/types/resume'

interface Props {
    block: CustomInfo,
    onContinue: () => void
}

const initialValues: CustomInfo = {
    id: '',
    name: '',
    items: []
}

const CustomBlock: FC<Props> = ({ block, onContinue }) => {
    const [ edit, setEdit ] = useState(-1)
    const { addCustomBlock, updateCustomBlock } = useResume()


    const handleUpdate = (data: CustomInfo) => {
        updateCustomBlock(block.id, data)
        onContinue()
    }
    
    return (
        <div className={styles.tabPanelContent}>
            <h4>{block.name}</h4>
            <Formik initialValues={block || initialValues} onSubmit={handleUpdate}>
                {({handleSubmit, values}) => (
                    <>
                    <form>
                        <FieldArray
                            name="items"
                            render={helpers => (
                                <div style={{padding: '1em 0 1em 2em'}}>
                                    {values.items.map((_, index) => (
                                        <div key={index} style={{display: 'flex', justifyContent: 'space-between', gap: '2em'}}>
                                            <TextField fullWidth multiline maxRows={2} name={`items.${index}`} label={`Item ${index + 1}`} readOnly={edit !== index}/>
                                            <div style={{display: 'flex'}}>
                                                {edit === index ? 
                                                <IconButton onClick={() => setEdit(-1)}><Save color="primary"/></IconButton>
                                                :
                                                <IconButton onClick={() => setEdit(index)}><Edit /></IconButton>
                                                }
                                                <IconButton color="error" onClick={() => helpers.remove(index)}><Delete /></IconButton>
                                            </div>
                                        </div>
                                    ))} 

                                    <Button 
                                        disabled={!!(edit !== -1 && values.items.length)}
                                        onClick={() => {
                                            helpers.push('')
                                            setEdit(values.items.length)
                                        }}
                                    >Add Item</Button>
                                </div>
                            )}
                        />
                        
                    </form>
                    <div className={styles.tabActionButtons}>
                            <Button onClick={() => handleSubmit()}>Save And Continue</Button>
                            {/* <Button onClick={() => handleSubmit()}>Save</Button>
                            <Button>Delete Custom Block</Button> */}
                    </div>
                    </>
                )}
            </Formik>
        </div>
    )
}

export default CustomBlock