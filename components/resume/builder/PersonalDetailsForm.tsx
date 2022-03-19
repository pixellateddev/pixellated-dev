import cx from 'classnames'
import { Formik } from 'formik'
import { FC, useState } from 'react'
import * as yup from 'yup'

import { Button } from '@mui/material'
import { TextField } from '@pixellated/components/formik'
import { useResume } from '@pixellated/state/resume'
import styles from '@pixellated/styles/resume.module.scss'
import { PersonalDetails } from '@pixellated/types/resume'

interface Props {
    onContinue: () => void
}


const validations: yup.SchemaOf<PersonalDetails> = yup.object({
    fullName: yup.string().required(),
    currentRole: yup.string(),
    email: yup.string().email().required(),
    phoneNumber: yup.string().required(),
    github: yup.string(),
    linkedin: yup.string(),
    website: yup.string().url(),
    location: yup.string().required()
})


const PersonalDetailsForm: FC<Props> = ({onContinue}) => {
    const [ edit, setEdit ] = useState(false)
    const { userDetails, updatePersonalDetails } = useResume()

    return (
        <div className={styles.tabPanelContent}>
            <h4>Personal Details</h4>
            <Formik
                initialValues={userDetails.personalDetails}
                validationSchema={validations}
                onSubmit={data => {
                    console.log('submitting')
                    updatePersonalDetails(data)
                    setEdit(false)
                }}
            >
                {({ handleSubmit, errors }) => {
                    const saveAndContinue = () => {
                        onContinue()
                    }
                    console.log(errors)
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
                        {!edit && <Button onClick={() => setEdit(true)}>Edit</Button>}
                        {edit && <Button onClick={() => handleSubmit()}>Save</Button>}
                    </div>
                    </>
                )}}
            </Formik>
        </div>
    )
}

export default PersonalDetailsForm