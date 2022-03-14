import { createContext, FC, useContext, useState } from 'react'
import { CustomInfo, Course, PersonalDetails, Resume, ResumeContextType, Skill, UserDetails, Job } from '../../@types/resume'

export const ResumeContext = createContext<ResumeContextType | null>(null)


const defaultUser: UserDetails =  {
    personalDetails:{
        fullName: '',
        phoneNumber: '',
        email: '',
        location: '',
        currentRole: '',
        github: '',
        linkedin: ''

    },
    workExperience: [
        
    ],
    educationDetails: [],
    skills: [],
    customInfo: [
        {
            id: 'projects',
            name: 'Projects',
            items: []
        },
        {
            id: 'certifications',
            name: 'Certification',
            items: []
        },
        {
            id: 'activities',
            name: 'Activities',
            items: []
        },
        {
            id: 'areaOfInterests',
            name: 'Area of Interests',
            items: []
        },
        {   
            id: 'achievements',
            name: 'Achievements',
            items: []
        },
        {
            id: 'hobbies',
            name: 'Hobbies',
            items: []
        },
        {   
            id: 'languages',
            name: 'Languages',
            items: []
        }
    ]
}

const defaultResume: Resume = {
    theme: 'default',
    left: [],
    right: ['projects', 'certifications', 'activities', 'areaOfInterests', 'achievements', 'hobbies', 'languages']
}

const ResumeProvider: FC = ({children}) => {
    const [user, setUser] = useState<UserDetails>(defaultUser)
    const [resume, setResume] = useState<Resume>(defaultResume)
    return (
        <ResumeContext.Provider value={{ user, setUser, resume, setResume }}>
            {children}
        </ResumeContext.Provider>
    )
}


export const useResume = () => {
    const { user, setUser, resume, setResume } = useContext(ResumeContext)!
    const setLayout = (left: string[], right: string[]) => {
        setResume({
            ...resume,
            left,
            right
        })
    }

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
        setResume({
            ...resume,
            left: resume.left.filter(block => block !== id),
            right: resume.right.filter(block => block !== id)
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

    const addEducationDetails = (newCourse: Course) => {
        setUser({
            ...user,
            educationDetails: [
                ...user.educationDetails,
                {
                    ...newCourse,
                    id: Math.random().toString()
                }
            ]
        })
    }

    const updateEducationDetails = (id: string, updatedCourse: Course) => {
        setUser({
            ...user,
            educationDetails: user.educationDetails.map(course => {
                if (course.id === id) {
                    return updatedCourse
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

    const addWorkExperience = (newJob: Job) => {
        setUser({
            ...user,
            workExperience: [
                ...user.workExperience,
                {
                    ...newJob,
                    id: Math.random().toString()
                }
            ]
        })
    }

    const updateWorkExperience = (id: string, updatedJob: Job) => {
        setUser({
            ...user,
            workExperience: user.workExperience.map(job => {
                if (job.id === id) {
                    return updatedJob
                }
                return job
            })
        })
    }

    const deleteWorkExperience = (id: string) => {
        setUser({
            ...user,
            workExperience: user.workExperience.filter(job => job.id !== id)
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
        deleteCustomBlock,
        setLayout
    }
}


export default ResumeProvider