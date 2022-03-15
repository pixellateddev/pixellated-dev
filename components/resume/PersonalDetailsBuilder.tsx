import { Button } from "@mui/material"
import { FC, useState } from "react"
import { PersonalDetails } from "../../@types/resume"
import PersonalDetailsDialog from "./PersonalDetailsDialog"

interface Props {
    personalDetails: PersonalDetails
    onChange: (data: PersonalDetails) => void
}

const PersonalDetailsBuilder: FC<Props> = ({ personalDetails, onChange }) => {
    const [ open, setOpen] = useState(false)
    const onSubmit = (data: PersonalDetails) => {
        onChange(data)
        setOpen(false)
    }    
    return (
        <>
            <div className="personal-details">
                <h3>Personal Details</h3>
                <p>FullName: {personalDetails.fullName}</p>
                <p>Current Title: {personalDetails.currentRole}</p>
                <p>Email: {personalDetails.email}</p>
                <p>Phone Number: {personalDetails.phoneNumber}</p>
                <p>GitHub Url: {personalDetails.github}</p>
                <p>LinkedIn Url: {personalDetails.linkedin}</p>
                <Button onClick={() => setOpen(true)}>{personalDetails.fullName ? 'Edit Personal Detail' : 'Add Personal Details'}</Button>
                <Button>Reset</Button>
            </div>
            <PersonalDetailsDialog open={open} initialValues={personalDetails} onClose={() => setOpen(false)} onOkay={onSubmit}/>
        </>
    )
}

export default PersonalDetailsBuilder