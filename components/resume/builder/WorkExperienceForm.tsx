import cx from 'classnames'
import { Formik } from 'formik'
import { FC } from 'react'

import { Delete, Edit } from '@mui/icons-material'
import { Button, IconButton } from '@mui/material'
import { Checkbox, TextField } from '@pixellated/components/formik'
import styles from '@pixellated/styles/resume.module.scss'
import { Job } from '@pixellated/types/resume'

interface Props {
    data?: Job
    readOnly?: boolean
    onEdit?: () => void
    onDelete?: () => void
    onSave: (data: Job) => void
    onCancel: () => void
}

const initialValues: Job = {
    id: '',
    currentlyWorking: false,
    description: '',
    organization: '',
    responsibilities: [],
    role: '',
    startDate: '',
    endDate: ''
}

const WorkExperienceForm: FC<Props> = ({data, readOnly, onDelete, onEdit, onSave, onCancel}) => {
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
                        <div className={styles.workExperienceForm}>
                            <div className={styles.field}>
                               <p className={styles.label}>Organization Name: </p>
                                <TextField name="organization"  readOnly={readOnly} />
                            </div>
                            <div className={styles.field}>
                                <p className={styles.label}>Job Role: </p>
                                <TextField name="role"  readOnly={readOnly}/>
                            </div>
                            <div className={styles.field}>
                                <p className={styles.label}>Start Date: </p>
                                <TextField name="startDate"  readOnly={readOnly}/>
                            </div>
                            <div className={cx(styles.field, styles.fieldAuto)}>
                                <p className={styles.label}>End Date: </p>
                                <TextField name="endDate"  readOnly={readOnly} />
                            </div>

                            <div className={cx(styles.field, styles.fieldAuto)}>
                                {/* <p className={styles.label}>End Date: </p> */}
                                <Checkbox name="currentlyWorking" label="Currently Working?" />
                            </div>
                            
                            <div className={cx(styles.field, styles.fieldFull)}>
                                <p className={styles.label}>Job Description: </p>
                                <TextField name="description"  readOnly={readOnly} fullWidth rows={4} multiline />
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

export default WorkExperienceForm