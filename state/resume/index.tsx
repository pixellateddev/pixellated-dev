import { createContext, FC, useContext, useState } from 'react'
import { CustomInfo, Course, PersonalDetails, Resume, ResumeContextType, Skill, UserDetails, Job, Layout } from '../../@types/resume'

export const ResumeContext = createContext<ResumeContextType | null>(null)


const defaultUser: UserDetails =  {
    personalDetails:{
        fullName: '',
        phoneNumber: '',
        email: '',
        location: '',
        currentRole: '',
        github: '',
        linkedin: '',
        website: ''

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

const defaultLayout: Layout = {
    theme: 'default',
    left: [],
    right: ['projects', 'certifications', 'activities', 'areaOfInterests', 'achievements', 'hobbies', 'languages']
}

const defaultResume: Resume = {
    _id: '',
    slug: { current: ''},
    title: '',
    username: '',
    userDetails: defaultUser,
    layout: defaultLayout
}

const ResumeProvider: FC = ({children}) => {
    const [resume, setResume] = useState<Resume>(defaultResume)
    const userDetails = resume.userDetails
    const layout = resume.layout
    const setUserDetails = (userDetails: UserDetails) => {
        setResume({
            ...resume,
            userDetails
        })
    }

    const setLayout = (layout: Layout) => {
        setResume({
            ...resume,
            layout
        })
    }
    // const [user, setUser] = useState<UserDetails>(defaultUser)
    // const [layout, setLayout] = useState<Layout>(defaultLayout)
    return (
        <ResumeContext.Provider value={{ resume, userDetails, setUserDetails, layout, setLayout, setResume }}>
            {children}
        </ResumeContext.Provider>
    )
}


export const useResume = () => {
    const { userDetails, setUserDetails, layout, setLayout, resume, setResume } = useContext(ResumeContext)!
    const updateLayout = (left: string[], right: string[]) => {
        setLayout({
            ...layout,
            left,
            right
        })
    }

    const updatePersonalDetails = (personalDetails: PersonalDetails) => {
        setUserDetails({
            ...userDetails,
            personalDetails
        })
    }

    const addCustomBlock = (block: CustomInfo) => {
        const id = block.name.toLocaleLowerCase()
        setUserDetails({
            ...userDetails,
            customInfo: [
                ...userDetails.customInfo,
                {
                    ...block,
                    id
                }
            ]
        })
        setLayout({
            ...layout,
            right: [...layout.right, id]
        })
    }

    const updateCustomBlock = (id: string, block: CustomInfo) => {
        setUserDetails({
            ...userDetails,
            customInfo: userDetails.customInfo.map(customBlock => {
                if (customBlock.id === id) {
                    return block
                }
                return customBlock
            })
        })
    }

    const deleteCustomBlock = (id: string) => {
        setUserDetails({
            ...userDetails,
            customInfo: userDetails.customInfo.filter(block => block.id !== id)
        })
        setLayout({
            ...layout,
            left: layout.left.filter(block => block !== id),
            right: layout.right.filter(block => block !== id)
        })
    }

    const addSkill = (data: Skill) => {
        setUserDetails({
            ...userDetails,
            skills: [
                ...userDetails.skills,
                {
                    ...data,
                    id: Math.random().toString()
                }
            ]
        })
    }

    const updateSkill = (id: string, data: Skill) => {
        setUserDetails({
            ...userDetails,
            skills: userDetails.skills.map(skill => {
                if (skill.id === id) {
                    return data
                }
                return skill
            })
        })
    }

    const deleteSkill = (id: string) => {
        setUserDetails({
            ...userDetails,
            skills: userDetails.skills.filter(skill => skill.id !== id)
        })
    }

    const addEducationDetails = (newCourse: Course) => {
        setUserDetails({
            ...userDetails,
            educationDetails: [
                ...userDetails.educationDetails,
                {
                    ...newCourse,
                    id: Math.random().toString()
                }
            ]
        })
    }

    const updateEducationDetails = (id: string, updatedCourse: Course) => {
        setUserDetails({
            ...userDetails,
            educationDetails: userDetails.educationDetails.map(course => {
                if (course.id === id) {
                    return updatedCourse
                }
                return course
            })
        })
    }

    const deleteEducationDetails = (id: string) => {
        setUserDetails({
            ...userDetails,
            educationDetails: userDetails.educationDetails.filter(course => course.id !== id)
        })
    }

    const addWorkExperience = (newJob: Job) => {
        setUserDetails({
            ...userDetails,
            workExperience: [
                ...userDetails.workExperience,
                {
                    ...newJob,
                    id: Math.random().toString()
                }
            ]
        })
    }

    const updateWorkExperience = (id: string, updatedJob: Job) => {
        setUserDetails({
            ...userDetails,
            workExperience: userDetails.workExperience.map(job => {
                if (job.id === id) {
                    return updatedJob
                }
                return job
            })
        })
    }

    const deleteWorkExperience = (id: string) => {
        setUserDetails({
            ...userDetails,
            workExperience: userDetails.workExperience.filter(job => job.id !== id)
        })
    }
    return {
        resume,
        setResume,
        userDetails, 
        layout,
        setUserDetails, 
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
        updateLayout
    }
}


export default ResumeProvider