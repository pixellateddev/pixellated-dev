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
    values: string[]
}

export interface Resume {
    theme: string
    left: string[]
    right: string[]
}

export type ResumeContextType = {
    user: UserDetails,
    resume: Resume,
    setUser: (user: UserDetails) => void,
    setResume: (resume: Resume) => void
}

