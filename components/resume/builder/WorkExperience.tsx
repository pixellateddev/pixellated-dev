import cx from 'classnames'
import { FC, useState } from 'react'

import { Button } from '@mui/material'
import { useResume } from '@pixellated/state/resume'
import styles from '@pixellated/styles/resume.module.scss'
import { Job } from '@pixellated/types/resume'

import WorkExperienceForm from './WorkExperienceForm'

interface Props {
    onContinue: () => void
}

const WorkExperience: FC<Props> = ({ onContinue }) => {
    const { userDetails, addWorkExperience, deleteWorkExperience, updateWorkExperience } = useResume()
    const [edit, setEdit] = useState<string>('')
    const handleUpdate = (id: string, data: Job) => {
        updateWorkExperience(id, data)
        setEdit('')
    }

    const handleAdd = (data: Job) => {
        addWorkExperience(data)
        setEdit('')
    }

    const handleCancel = () => {
        setEdit('')
    }
    return (
        <div className={cx(styles.tabPanelContent, styles.workExperience)}>
            <h4>Work Experience</h4>
            <div className={styles.workExperienceForms}>
                {userDetails.workExperience.map(job => (
                    <WorkExperienceForm 
                        key={job.id} 
                        data={job} 
                        onEdit={() => setEdit(job.id)}
                        onDelete={() => deleteWorkExperience(job.id)}
                        onSave={data => handleUpdate(job.id, data)}
                        readOnly={!edit || edit !== job.id}
                        onCancel={handleCancel}
                    />
                ))}
                {edit === 'true' && (
                    <WorkExperienceForm
                        onSave={(data) => handleAdd(data)}
                        onCancel={handleCancel}
                    />
                )}
            </div>
            
            <div className={styles.tabActionButtons}>
                <Button onClick={onContinue}>Continue</Button>
                {!edit && <Button onClick={() => setEdit('true')}>Add Job History</Button>}
            </div>
        </div>
    )
}

export default WorkExperience