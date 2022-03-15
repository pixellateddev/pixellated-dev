export interface UserDetails {
    personalDetails: PersonalDetails,
    workExperience: Job[],
    educationDetails: Course[],
    skills: Skill[]
    customInfo: CustomInfo[]
}

export interface PersonalDetails {
    fullName: string
    currentRole?: string
    phoneNumber: string
    email: string
    github?: string
    linkedin?: string
    location?: string
}

export interface Job {
    id: string
    organization: string
    role: string
    startDate: string
    endDate?: string
    currentlyWorking: boolean
    description: string
    responsibilities: string[]
}

export interface Course {
    id: string
    courseName: string
    startYear: string
    endYear?: string
    currentlyPursuing: boolean
    institute: string
    location: string
    score: string
}

export interface Skill {
    id: string
    name: string
}

export interface CustomInfo {
    id: string
    name: string
    items: string[]
}

export interface Layout {
    theme: string
    left: string[]
    right: string[]
}

export interface Resume {
    _id: string
    username: string
    title: string
    slug: {
        current: string
    },
    userDetails: UserDetails,
    layout: Layout
}

export type ResumeContextType = {
    resume: Resume
    userDetails: UserDetails,
    layout: Layout,
    setUserDetails: (user: UserDetails) => void,
    setLayout: (layout: Layout) => void,
    setResume: (resume: Resume) => void
}

