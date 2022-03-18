import cx from 'classnames'
import { FC, useState } from 'react'

import { Button } from '@mui/material'

import { Course } from '../../../@types/resume'
import { useResume } from '../../../state/resume'
import styles from '../../../styles/resume.module.scss'
import EducationDetailsForm from './EducationDetailsForm'

interface Props {
    onContinue: () => void
}

const EducationDetails: FC<Props> = ({ onContinue }) => {
    const { userDetails, addEducationDetails, updateEducationDetails, deleteEducationDetails } = useResume()
    const [edit, setEdit] = useState<string>('')

    const handleUpdate = (id: string, data: Course) => {
        updateEducationDetails(id, data)
        setEdit('')
    }

    const handleAdd = (data: Course) => {
        addEducationDetails(data)
        setEdit('')
    }

    const handleCancel = () => {
        setEdit('')
    }

    return (
        <div className={cx(styles.tabPanelContent, styles.educationDetails)}>
            <h4>Education Details</h4>
            <div className={styles.eductionDetailsForm}>
                {userDetails.educationDetails.map(course => (
                    <EducationDetailsForm 
                        key={course.id} 
                        data={course} 
                        onEdit={() => setEdit(course.id)}
                        onDelete={() => deleteEducationDetails(course.id)}
                        onSave={data => handleUpdate(course.id, data)}
                        readOnly={!edit || edit !== course.id}
                        onCancel={handleCancel}
                    />
                ))}
                {edit === 'true' && (
                    <EducationDetailsForm
                        onSave={(data) => handleAdd(data)}
                        onCancel={handleCancel}
                    />
                )}
            </div>
            <div className={styles.tabActionButtons}>
                <Button onClick={onContinue}>Continue</Button>
                {!edit && <Button onClick={() => setEdit('true')}>Add Education History</Button>}
            </div>
        </div>
    )
}

export default EducationDetails