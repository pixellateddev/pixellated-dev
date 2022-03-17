import { Button } from "@mui/material"
import { FC, useState } from "react"
import { useResume } from "../../../state/resume"
import WorkExperienceForm from "./WorkExperienceForm"
import styles from '../../../styles/resume.module.scss'
import { Job } from "../../../@types/resume"

const WorkExperience: FC = () => {
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
        <div className={styles.workExperience}>
            Work Experience
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
                <Button>Continue</Button>
                {!edit && <Button onClick={() => setEdit('true')}>Add Job History</Button>}
            </div>
        </div>
    )
}

export default WorkExperience