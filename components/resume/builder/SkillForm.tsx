import cx from 'classnames'
import { Formik } from 'formik'
import { FC } from 'react'

import { Delete, Edit } from '@mui/icons-material'
import { Button, IconButton } from '@mui/material'

import { Course, Skill } from '../../../@types/resume'
import styles from '../../../styles/resume.module.scss'
import { TextField } from '../../formik'

interface Props {
    data?: Skill
    readOnly?: boolean
    onEdit?: () => void
    onDelete?: () => void
    onSave: (data: Skill) => void
    onCancel: () => void
}

const initialValues: Skill = {
    id: '',
    name: '',
    proficiency: 0,
    description: ''
}

const SkillForm: FC<Props> = ({data, readOnly, onDelete, onEdit, onSave, onCancel}) => {
    return (
        <div>
            <Formik
                initialValues={data || initialValues}
                onSubmit={data => onSave(data)}
            >
                {({handleSubmit}) => (
                    <form onSubmit={handleSubmit}>
                        <div style={{float: 'right'}}>
                            <IconButton size="small" color="primary" onClick={onEdit}><Edit /></IconButton>
                            <IconButton size="small" color="error" onClick={onDelete}><Delete /></IconButton>
                        </div>
                        <div className={styles.skillForm}>
                            <div className={cx(styles.field)}>
                               <p className={styles.label}>Skill: </p>
                                <TextField name="name"  readOnly={readOnly} />
                            </div>
                            <div className={cx(styles.field)}>
                                <p className={styles.label}>Proficiency: </p>
                                <TextField name="proficiency"  readOnly={readOnly}/>
                            </div>
                            <div className={cx(styles.field, styles.fieldFull)}>
                                <p className={styles.label}>Description: </p>
                                <TextField name="description"  readOnly={readOnly} rows={2} multiline/>
                            </div>
                        </div>
                        {!readOnly && 
                        <div style={{display: "flex", flexDirection: 'row-reverse'}}>
                            <Button type="submit">Save</Button>
                            <Button onClick={onCancel}>Cancel</Button>
                        </div>}
                    </form>
                )} 
            </Formik>
            
        </div>
    )
}

export default SkillForm