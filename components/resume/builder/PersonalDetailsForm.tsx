import cx from 'classnames'
import { Formik } from 'formik'
import { FC, useState } from 'react'

import { Button } from '@mui/material'

import { PersonalDetails } from '../../../@types/resume'
import { useResume } from '../../../state/resume'
import styles from '../../../styles/resume.module.scss'
import { TextField } from '../../formik'

interface Props {
    onContinue: () => void
}


const PersonalDetailsForm: FC<Props> = ({onContinue}) => {
    const [ edit, setEdit ] = useState(false)
    const { userDetails, updatePersonalDetails } = useResume()

    return (
        <div className={styles.tabPanelContent}>
            <h4>Personal Details</h4>
            <Formik
                initialValues={userDetails.personalDetails}
                onSubmit={data => updatePersonalDetails(data)}
            >
                {({ handleSubmit, values, setSubmitting }) => {
                    const save = () => {
                        if (edit) {
                            setSubmitting(true)
                            handleSubmit()
                            setEdit(false)
                        }
                        else {
                            setEdit(true)
                        }
                    }
                
                    const saveAndContinue = () => {
                        onContinue()
                    }
                    return (
                        <>
                        <form className={styles.personalDetailsForm}>
                           <div className={styles.field}>
                               <p className={styles.label}>Full Name: </p>
                                <TextField name="fullName"  readOnly={!edit} />
                           </div>
                           <div className={styles.field}>
                               <p className={styles.label}>Current Role: </p>
                               <TextField name="currentRole"  readOnly={!edit}/>
                           </div>
                           <div className={styles.field}>
                               <p className={styles.label}>Location: </p>
                               <TextField name="location"  readOnly={!edit}/>
                           </div>
                           <div className={cx(styles.field, styles.fieldAuto)}>
                               <p className={styles.label}>Website: </p>
                               <TextField name="website"  readOnly={!edit} />
                           </div>
                           <div className={cx(styles.field, styles.fieldAuto)}>   
                               <p className={styles.label}>Email: </p>
                               <TextField name="email"  readOnly={!edit}/>
                           </div>
                           <div className={cx(styles.field, styles.fieldAuto)}>
                               <p className={styles.label}>Phone Number: </p>
                               <TextField name="phoneNumber"  readOnly={!edit}/>
                           </div>
                           
                           <div className={cx(styles.field, styles.fieldAuto)}>
                               <p className={styles.label}>Github: </p> 
                               <TextField name="github"  readOnly={!edit}/>
                           </div>
                           <div className={cx(styles.field, styles.fieldAuto)}>
                               <p className={styles.label}>Linkedin: </p>
                               <TextField name="github"  readOnly={!edit}/>
                           </div>
                    </form>
                    <div className={styles.tabActionButtons}>
                        <Button onClick={saveAndContinue}>{edit ? 'Save and Continue' : 'Continue'}</Button>
                        <Button onClick={save}>{edit ? 'Save' : 'Edit'}</Button>
                    </div>
                    </>
                )}}
            </Formik>
        </div>
    )
}

export default PersonalDetailsForm