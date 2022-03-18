import cx from 'classnames'
import { Formik } from 'formik'
import { FC } from 'react'

import { Delete, Edit } from '@mui/icons-material'
import { Button, IconButton } from '@mui/material'

import { Course } from '../../../@types/resume'
import styles from '../../../styles/resume.module.scss'
import { TextField } from '../../formik'

interface Props {
    data?: Course
    readOnly?: boolean
    onEdit?: () => void
    onDelete?: () => void
    onSave: (data: Course) => void
    onCancel: () => void
}

const initialValues: Course = {
    id: '',
    courseName: '',
    startYear: '',
    endYear: '',
    currentlyPursuing: false,
    institute: '',
    location: '',
    score: ''
}

const EducationDetailsForm: FC<Props> = ({data, readOnly, onDelete, onEdit, onSave, onCancel}) => {
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
                        <div className={styles.educationDetailsForm}>
                            <div className={cx(styles.field, styles.fieldLarge)}>
                               <p className={styles.label}>Course: </p>
                                <TextField name="courseName"  readOnly={readOnly} />
                            </div>
                            <div className={cx(styles.field, styles.fieldLarge)}>
                                <p className={styles.label}>Institute: </p>
                                <TextField name="institute"  readOnly={readOnly}/>
                            </div>
                            <div className={styles.field}>
                                <p className={styles.label}>Start Year: </p>
                                <TextField name="startYear"  readOnly={readOnly}/>
                            </div>
                            <div className={cx(styles.field, styles.fieldAuto)}>
                                <p className={styles.label}>End Year: </p>
                                <TextField name="endYear"  readOnly={readOnly} />
                            </div>
                            
                            <div className={cx(styles.field)}>
                                <p className={styles.label}>Location: </p>
                                <TextField name="location"  readOnly={readOnly} />
                            </div> 
                            <div className={cx(styles.field)}>
                                <p className={styles.label}>Score: </p>
                                <TextField name="score"  readOnly={readOnly} />
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

export default EducationDetailsForm