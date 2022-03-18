import cx from 'classnames'
import { FC, useState } from 'react'

import { Button } from '@mui/material'

import { Skill } from '../../../@types/resume'
import { useResume } from '../../../state/resume'
import styles from '../../../styles/resume.module.scss'
import SkillForm from './SkillForm'

interface Props {
    onContinue: () => void
}

const Skills: FC<Props> = ({ onContinue }) => {
    const { userDetails, addSkill, updateSkill, deleteSkill } = useResume()
    const [edit, setEdit] = useState<string>('')

    const handleUpdate = (id: string, data: Skill) => {
        updateSkill(id, data)
        setEdit('')
    }

    const handleAdd = (data: Skill) => {
        addSkill(data)
        setEdit('')
    }

    const handleCancel = () => {
        setEdit('')
    }
    return (
        <div className={cx(styles.tabPanelContent, styles.skills)}>
            <h4>Skills</h4>
            <div className={styles.skillForms}>
                {userDetails.skills.map(skill => (
                    <SkillForm 
                        key={skill.id} 
                        data={skill} 
                        onEdit={() => setEdit(skill.id)}
                        onDelete={() => deleteSkill(skill.id)}
                        onSave={data => handleUpdate(skill.id, data)}
                        readOnly={!edit || edit !== skill.id}
                        onCancel={handleCancel}
                    />
                ))}
                {edit === 'true' && (
                    <SkillForm
                        onSave={(data) => handleAdd(data)}
                        onCancel={handleCancel}
                    />
                )}
            </div>
            <div className={styles.tabActionButtons}>
                <Button onClick={onContinue}>Continue</Button>
                {!edit && <Button onClick={() => setEdit('true')}>Add Skill</Button>}
            </div>
        </div>
    )
}

export default Skills