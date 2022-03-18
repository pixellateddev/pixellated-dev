import { FieldArray, Formik } from 'formik'
import { FC, useState } from 'react'

import { Delete, Edit, Save } from '@mui/icons-material'
import { Button, IconButton } from '@mui/material'

import { CustomInfo } from '../../../@types/resume'
import styles from '../../../styles/resume.module.scss'
import { TextField } from '../../formik'

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
    const handleContinue = () => {
        onContinue()
    }
    return (
        <div className={styles.tabPanelContent}>
            <h4>{block.name}</h4>
            <Formik initialValues={block || initialValues} onSubmit={data => console.log(data)}>
                {({handleSubmit, values}) => (
                    <>
                    <form>
                        <FieldArray
                            name="items"
                            render={helpers => (
                                <div>
                                    {values.items.map((_, index) => (
                                        <div key={index} style={{display: 'flex', justifyContent: 'space-between'}}>
                                            <TextField fullWidth multiline maxRows={2} name={`items.${index}`} label={`Item ${index + 1}`} readOnly={edit !== index}/>
                                            {edit === index ? 
                                            <IconButton onClick={() => setEdit(-1)}><Save color="primary"/></IconButton>
                                            :
                                            <IconButton onClick={() => setEdit(index)}><Edit /></IconButton>
                                            }
                                            <IconButton color="error" onClick={() => helpers.remove(index)}><Delete /></IconButton>
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
                            <Button onClick={handleContinue}>Save And Continue</Button>
                            <Button>Save</Button>
                            <Button>Delete Custom Block</Button>
                    </div>
                    </>
                )}
            </Formik>
        </div>
    )
}

export default CustomBlock