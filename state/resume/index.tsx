import { createContext, FC, useContext, useState } from 'react'
import { CustomInfo, EducationDetail, PersonalDetails, Resume, ResumeContextType, Skill, UserDetails, WorkExperience } from '../../@types/resume'

export const ResumeContext = createContext<ResumeContextType | null>(null)


const defaultUser: UserDetails =  {
    personalDetails:{
        fullName: '',
        phoneNumber: '',
        email: ''
    },
    workExperience: [
        
    ],
    educationDetails: [],
    skills: [],
    customInfo: [
        {   
            id: 'languages',
            name: 'Languages',
            values: [
                'English',
                'Hindi'
            ]
        }
    ]
}


const ResumeProvider: FC = ({children}) => {
    const [user, setUser] = useState<UserDetails>(defaultUser)
    const [resume, setResume] = useState<Resume>({
        theme: 'default',
        left: [],
        right: []
    })
    return (
        <ResumeContext.Provider value={{ user, setUser, resume, setResume }}>
            {children}
        </ResumeContext.Provider>
    )
}


export const useResume = () => {
    const { user, setUser, resume, setResume } = useContext(ResumeContext)!

    const updatePersonalDetails = (personalDetails: PersonalDetails) => {
        setUser({
            ...user,
            personalDetails
        })
    }

    const addCustomBlock = (block: CustomInfo) => {
        const id = block.name.toLocaleLowerCase()
        setUser({
            ...user,
            customInfo: [
                ...user.customInfo,
                {
                    ...block,
                    id
                }
            ]
        })
        setResume({
            ...resume,
            right: [...resume.right, id]
        })
    }

    const updateCustomBlock = (id: string, block: CustomInfo) => {
        setUser({
            ...user,
            customInfo: user.customInfo.map(customBlock => {
                if (customBlock.id === id) {
                    return block
                }
                return customBlock
            })
        })
    }

    const deleteCustomBlock = (id: string) => {
        setUser({
            ...user,
            customInfo: user.customInfo.filter(block => block.id !== id)
        })
    }

    const addSkill = (data: Skill) => {
        setUser({
            ...user,
            skills: [
                ...user.skills,
                {
                    ...data,
                    id: Math.random().toString()
                }
            ]
        })
    }

    const updateSkill = (id: string, data: Skill) => {
        setUser({
            ...user,
            skills: user.skills.map(skill => {
                if (skill.id === id) {
                    return data
                }
                return skill
            })
        })
    }

    const deleteSkill = (id: string) => {
        setUser({
            ...user,
            skills: user.skills.filter(skill => skill.id !== id)
        })
    }

    const addEducationDetails = (data: EducationDetail) => {
        setUser({
            ...user,
            educationDetails: [
                ...user.educationDetails,
                {
                    ...data,
                    id: Math.random().toString()
                }
            ]
        })
    }

    const updateEducationDetails = (id: string, data: EducationDetail) => {
        setUser({
            ...user,
            educationDetails: user.educationDetails.map(course => {
                if (course.id === id) {
                    return data
                }
                return course
            })
        })
    }

    const deleteEducationDetails = (id: string) => {
        setUser({
            ...user,
            educationDetails: user.educationDetails.filter(course => course.id !== id)
        })
    }

    const addWorkExperience = (data: WorkExperience) => {
        setUser({
            ...user,
            workExperience: [
                ...user.workExperience,
                {
                    ...data,
                    id: Math.random().toString()
                }
            ]
        })
    }

    const updateWorkExperience = (id: string, data: WorkExperience) => {
        setUser({
            ...user,
            workExperience: user.workExperience.map(exp => {
                if (exp.id === id) {
                    return data
                }
                return exp
            })
        })
    }

    const deleteWorkExperience = (id: string) => {
        setUser({
            ...user,
            workExperience: user.workExperience.filter(exp => exp.id !== id)
        })
    }
    return {
        user, 
        resume,
        setUser, 
        addWorkExperience, 
        updateWorkExperience, 
        deleteWorkExperience,
        updatePersonalDetails,
        addEducationDetails,
        updateEducationDetails,
        deleteEducationDetails,
        addSkill,
        updateSkill,
        deleteSkill,
        addCustomBlock,
        updateCustomBlock,
        deleteCustomBlock
    }
}


export default ResumeProvider