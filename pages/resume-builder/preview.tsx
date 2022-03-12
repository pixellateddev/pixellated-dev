import { FC } from "react"

import IconText from "../../components/IconText"
import { LogoGithub, LogoLinkedin, LoveHeartPin, Letter, CallDoctor } from '../../components/icons'
import { BlockBody, ResumeBlock } from "../../components/resume"
import { List, ListItem } from "../../components/resume/List"
import { useResume } from "../../state/resume"

const user = {
    name: 'Himanshu Sagar',
    currentRole: 'Software Engineer III @ FactSet',
    image: '',
    description: '',
    email: 'pixellateddev@gmail.com',
    contactNo: '+91 7509406124',
    linkedInUrl: 'https://www.linkedin.com/in/hsagarthegr8/',
    githubUrl: 'https://github.com/pixellateddev',
    location: 'Hyderabad, India',
    skills: [
        {
            name: 'React Js'
        }, 
        {
            name: 'JavaScript / Typescript'
        },
        {
            name: 'Python'
        },
        {
            name: 'Next Js'
        }, 
        {
            name: 'Django and Django Rest Framework'
        },
        {
            name: 'Databases - MongoDB, MySQL'
        }
    ],
    projects: [
        'Built Blink (Real Time) Messenger application using React and Django with Websockets.',
        'Built Expense Tracker in React using Rest Services from Django.',
        'Built Capmesh - A Professional Network SPA using MEAN stack.',
        'Built Agog - A Social Network Web Application as a Minor Project -II using Django Framework.',
        'Built a Faculty attendance software with facial recognition as a Minor Project using Python, OpenCV, Qt5',
        `Built a Blog " 'thecodersportal.com' - A web portal for programmers" (2016-2017).`
    ],
    certifications: [
        'Deep Learning Specialization by deeplearning.ai.',
        'Machine Learning Track by DataCamp',
        'Data Analyst Track by DataCamp',
        'Python Programmer Track by DataCamp'
    ],
    activities: [
        `Organized "'Let's Code' - An introductory course to C++ programming" for freshers.`,
        `Course Instructor and Mentor for 'Lets Code'.`,
        `Organized a "#!/bin/bash - A linux workshop for beginners".`
    ],
    strengths: [
        'Self Motivated and always initiative to take up the tasks.',
        'Can work in team as well as single.',
        'Good communication skills.',
        'Self confidence',
        'Hard Working'
    ],

    achievements: [
        'Secured AIR 62nd in Google Hash Code 2020.',
        'Google Codejam Qualifier in year 2015, 2016, 2017, 2018, 2020.',
        'Codechef Snackdown Qualifier in 2016.',
        'President, RJITGEEKs.',
        'Secured 34th Position in CS50X (HarvardX) 2015.',
        'HackerRank WorldCup Semifinalist in 2015.',
        'GeeksforGeeks Campus Ambassador in 2016.'
    ],

    hobbies: [
        'Competitive Programming',
        'Singing',
        'Playing Table Tennis'
    ],
    
    languages: [
        'English',
        'Hindi'
    ],

    workExperience: [
        {
            org: 'Factset Research Systems',
            role: 'Javascript Developer',
            description: "Working as a Lead Engineer for few projects here. Responsible for making sure that the project is delivered with in the deadline.",
            startDate: '2020/06',
            endDate: '',
            currentlyWorking: true,
            responsibilities: [
                // 'Counselling students and resolve their queries.',
                // 'Guiding students with the process of enrolment in to the University'
            ]
        },
        {
            org: 'Capgemini India Pvt. Ltd.',
            role: 'ReactJs Developer',
            description: 'Building Reusable and testable UI components for one of the top banks in US.',
            startDate: '2018/06',
            endDate: '2020/06',
            currentlyWorking: false,
            responsibilities: [
                // 'Customer problem solving by understanding the customer’s query about the product.',
                // 'Understanding and authenticating the existing product or the new product transaction which is in the process of clients.',
                // 'Product based suggestions according to the Client’s requirements.',
                // 'Risk investigation in terms of customer requirement and also with the association of third party.',
                // 'Handling overall transactions process with accuracy, assurance and productivity.'
            ]
        }
    ],
    education: [
        {
            courseName: 'Bachelor of Engineering in Computer Science',
            startYear: '2014',
            endYear: '2018',
            currentlyPursuing: false,
            school: 'RustamJi Institute of Technology',
            location: 'Tekanpur, Madhya Pradesh',
            score: '7.04 CGPA'
        },
        {
            courseName: 'Higher Secondary (XII)',
            startYear: '2013',
            endYear: '2014',
            currentlyPursuing: false,
            school: "Kiddy's Corner School - CBSE",
            location: 'Gwalior, Madhya Pradesh',
            score: '70%'
        },
        {
            courseName: 'High School (X)',
            startYear: '2011',
            endYear: '2012',
            currentlyPursuing: false,
            school: "Kiddy's Corner School - CBSE",
            location: 'Gwalior, Madhya Pradesh',
            score: '8 CGPA'
        },
    ]
}

const ResumePreview: FC = () => {
    const { user, resume } = useResume()
    return (
        <main className="resume-preview">
            <div className="container">
                
                <div className="layout">
                    <div className="main-content">
                        <ResumeBlock title="" classes="personal-details">
                            <h2 className="user-name">{user.personalDetails.fullName}</h2>
                            {/* <p className="user-description">{user.personalDetails.description}</p> */}
                            <div className="contact-details">
                                <div className="contact-details-item">
                                    <IconText icon={<Letter />}>{user.personalDetails.email}</IconText>
                                </div>
                                <div className="contact-details-item">
                                    <IconText icon={<CallDoctor />}>{user.personalDetails.phoneNumber}</IconText>
                                </div>
                                <div className="contact-details-item">
                                    <IconText icon={<LoveHeartPin />}>{user.personalDetails.location}</IconText>
                                </div>
                                {/* <div className="contact-details-item">
                                    <IconText icon={<LogoLinkedin />}><a href={user.linkedInUrl}>{user.linkedInUrl}</a></IconText>
                                </div> */}
                                <div className="contact-details-item">
                                    <IconText icon={<LogoGithub />}><a href={user.personalDetails.github} target="_blank" rel="noreferrer">{user.personalDetails.github}</a></IconText>
                                </div>
                            </div>
                        </ResumeBlock>
                        {Boolean(user.workExperience?.length) && 
                            <ResumeBlock title="Work Experience">
                                {user.workExperience.map(exp => (
                                    <div key={`${exp.organization} - ${exp.role}`} className="work-experience">
                                        <div className="org-details">
                                            <p className="org-name">{exp.organization}</p>
                                            <p>{exp.startDate} - {exp.currenltyWorking ? 'Present' : exp.endDate}</p>
                                        </div>
                                        <p>{exp.role}</p>
                                        <p>{exp.description}</p>
                                        {exp.responsibilities && 
                                        Boolean(exp.responsibilities.length) && (
                                            <>
                                                <p><strong>Responsibilities</strong></p>
                                                <List>
                                                    {exp.responsibilities.map(responsibility => (
                                                        <ListItem key={responsibility}>
                                                            {responsibility}
                                                        </ListItem>
                                                    ))}
                                                </List>
                                            </>
                                        )}
                                        
                                    </div>
                                ))}
                            </ResumeBlock>
                        }
                        {Boolean(user.educationDetails?.length) && (
                            <ResumeBlock title="Education Details">
                                {user.educationDetails.map(edu => (
                                    <div key={edu.courseName} className="education-details">
                                        <div className="course-details">
                                            <p className="course-name">{edu.courseName}</p>
                                            <p>{edu.startYear} - {edu.currentlyPursuing ? 'Present' : edu.endYear}</p>
                                        </div>
                                        <p>{edu.institute}</p>
                                        <p className="education-location">{edu.location}</p>
                                        <p>{edu.score}</p>
                                    </div>
                                ))}
                            </ResumeBlock>
                        )}
                        {resume.left.map(custom => {
                            const block = user.customInfo.find(block => block.id === custom)
                            if(block) {
                                return (
                                    <ResumeBlock key={custom} title={block.name}>
                                        <ul>
                                            {block.values.map(value => (
                                                <li key={value}>{value}</li>
                                            ))}
                                        </ul>
                                    </ResumeBlock>
                                )
                            }
                        })}
                        
                        {/* <ResumeBlock title="Projects">
                            <List>
                                {user.projects.map(project => (
                                    <ListItem key={project}>
                                        {project}
                                    </ListItem>
                                ))}
                            </List>
                        </ResumeBlock>
                        <ResumeBlock title="Certifications">
                            <List>
                                {user.certifications.map(certification => (
                                    <ListItem key={certification}>
                                        {certification}
                                    </ListItem>
                                ))}
                            </List>
                        </ResumeBlock>
                        <ResumeBlock title="Activities">
                            <List>
                                {user.activities.map(activity => (
                                    <ListItem key={activity}>
                                        {activity}
                                    </ListItem>
                                ))}
                            </List>
                        </ResumeBlock> */}
                    </div>
                    <div className="sidebar">
                        <ResumeBlock title="Skills">
                            <List>
                                {user.skills.map(skill => (
                                    <ListItem key={skill.name}>{skill.name}</ListItem>
                                ))}
                            </List>    
                        </ResumeBlock>
                        {resume.right.map(custom => {
                            const block = user.customInfo.find(block => block.id === custom)
                            if(block) {
                                return (
                                    <ResumeBlock key={custom} title={block.name}>
                                        <ul>
                                            {block.values.map(value => (
                                                <li key={value}>{value}</li>
                                            ))}
                                        </ul>
                                    </ResumeBlock>
                                )
                            }
                        })}
                        {/* <ResumeBlock title="Strengths">
                            <List>
                                {user.strengths.map(strength => (
                                    <ListItem key={strength}>{strength}</ListItem>
                                ))}
                            </List>
                        </ResumeBlock>
                        <ResumeBlock title="Achievements">
                            <List>
                                {user.achievements.map(achivement => (
                                    <ListItem key={achivement}>{achivement}</ListItem>
                                ))}
                            </List>
                        </ResumeBlock>
                        <ResumeBlock title="Hobbies">
                            <List>
                                {user.hobbies.map(hobby => (
                                    <ListItem key={hobby}>{hobby}</ListItem>
                                ))}
                            </List>
                        </ResumeBlock>
                        <ResumeBlock title="Languages">
                            <List>
                                {user.languages.map(language => (
                                    <ListItem key={language}>{language}</ListItem>
                                ))}
                            </List>
                        </ResumeBlock> */}
                    </div>
                </div>
            </div>
            <p className="placeholder">Created by pixellateddev resume builder</p>

        </main>
    )
}

export default ResumePreview