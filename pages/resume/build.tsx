import { Button, Paper } from "@mui/material"
import { NextPage } from "next"
import { useRouter } from "next/router"
import { CustomBlockBuilder, EducationDetailsBuilder, LayoutBuilder, PersonalDetailsBuilder, SkillBuilder, WorkExperienceBuilder } from "../../components/resume"
import { useResume } from "../../state/resume"


const ResumeBuilder: NextPage = () => {
    const { 
        resume,
        userDetails: user, 
        updatePersonalDetails, 
        addWorkExperience, updateWorkExperience,deleteWorkExperience,
        addEducationDetails, updateEducationDetails, deleteEducationDetails,
        addSkill, updateSkill, deleteSkill,
        addCustomBlock, updateCustomBlock, deleteCustomBlock
    } = useResume()
    const router = useRouter()

    const saveAndPreview = async () => {

        fetch('/api/resume/save', {
            method: 'POST',
            body: JSON.stringify({resume})
        })
        router.push('/resume/preview')
    }

    return (
        <main className="container">
            <div className="layout">
                <div className="full-width">
                    <Paper style={{padding: '1em'}}>
                        <h2>{resume.title} - Resume Builder</h2>    
                        {/* <div className="resume-theme-box" onClick={() => setOpenPersonalDetailstrue)}>
                            Click Here
                        </div> */}
                        <PersonalDetailsBuilder 
                            personalDetails={user.personalDetails}
                            onChange={updatePersonalDetails}
                        />

                        <WorkExperienceBuilder 
                            workExperience={user.workExperience}
                            onAdd={addWorkExperience}
                            onDelete={deleteWorkExperience}
                            onChange={updateWorkExperience}
                        />

                        <EducationDetailsBuilder 
                            educationDetails={user.educationDetails}
                            onAdd={addEducationDetails}
                            onChange={updateEducationDetails}
                            onDelete={deleteEducationDetails}
                        />

                        <SkillBuilder 
                            skills={user.skills}
                            onAdd={addSkill}
                            onChange={updateSkill}
                            onDelete={deleteSkill}
                        />

                        <CustomBlockBuilder 
                            customInfo={user.customInfo} 
                            onAdd={addCustomBlock} 
                            onChange={updateCustomBlock}
                            onDelete={deleteCustomBlock}
                        />
                        <LayoutBuilder />
                        <Button onClick={saveAndPreview}>Save and Preview</Button>
                    </Paper>
                </div>
            </div>
        </main>
    )
}

export default ResumeBuilder