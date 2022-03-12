import { Button } from "@mui/material"
import { NextPage } from "next"
import Link from "next/link"
import { useState } from "react"
import { PersonalDetails } from "../../@types/resume"
import { CustomBlockBuilder, EducationDetailsBuilder, PersonalDetailsBuilder, SkillBuilder, WorkExperienceBuilder } from "../../components/resume"
import { useResume } from "../../state/resume"


const ResumeBuilder: NextPage = () => {
    const { 
        user, 
        updatePersonalDetails, 
        addWorkExperience, updateWorkExperience,deleteWorkExperience,
        addEducationDetails, updateEducationDetails, deleteEducationDetails,
        addSkill, updateSkill, deleteSkill,
        addCustomBlock, updateCustomBlock, deleteCustomBlock
    } = useResume()

    return (
        <main className="container">
            <div className="layout">
                <div className="full-width">
                    <h2>Resume Builder</h2>    
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
                    <Link href="/resume-builder/preview"><Button>Preview</Button></Link>
                </div>
            </div>
        </main>
    )
}

export default ResumeBuilder