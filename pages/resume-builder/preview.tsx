import { FC } from "react"
import LoveHeartPin from "../../components/icons/LoveHeartPin"
import Letter from '../../components/icons/Letter'
import CallDoctor from '../../components/icons/CallDoctor'
import IconText from "../../components/IconText"
import { BlockBody, ResumeBlock } from "../../components/resume"
import { List, ListItem } from "../../components/resume/List"

const user = {
    name: 'Padma Neanavath',
    image: '',
    description: 'To work on challenging jobs providing opportunities to enhance my technical skills and knowledge.',
    email: 'padma207.np@gmail.com',
    contactNo: '+91 9701652103',
    location: 'Hyderabad, India',
    skills: [
        {
            name: 'Operating System'
        }, 
        {
            name: 'MS Office'
        }
    ],
    strengths: [
        'Self Motivated and always initiative to take up the tasks.',
        'Can work in team as well as single.',
        'Good interpersonal and communication skills.',
        'Self confidence',
        'Hard Working'
    ],

    achievements: [
        'Winner of “Beat My Best” contest, Annual summit Goa for consecutive years.',
        'Recognised as Rating 1 Employee in every quarter in ICICI Lombard.'
    ],

    hobbies: [
        'Planting',
        'Travelling'
    ],
    
    languages: [
        'English',
        'Hindi',
        'Telugu'
    ],

    workExperience: [
        {
            org: 'Global University System Pvt. Ltd.',
            role: 'Educational Counsellor',
            startDate: '2021/06',
            endDate: '',
            currentlyWorking: true,
            responsibilities: [
                'Counselling students and resolve their queries.',
                'Guiding students with the process of enrolment in to the University'
            ]
        },
        {
            org: 'ICICI Lombard GIC Ltd',
            role: 'Tele Sales Officer',
            startDate: '2017/06',
            endDate: '2020/12',
            currentlyWorking: false,
            responsibilities: [
                'Customer problem solving by understanding the customer’s query about the product.',
                'Understanding and authenticating the existing product or the new product transaction which is in the process of clients.',
                'Product based suggestions according to the Client’s requirements.',
                'Risk investigation in terms of customer requirement and also with the association of third party.',
                'Handling overall transactions process with accuracy, assurance and productivity.'
            ]
        }
    ],
    education: [
        {
            courseName: 'Bachelor of Science - Microbiology',
            startYear: '2013',
            endYear: '2017',
            currentlyPursuing: false,
            school: 'Osmania University',
            location: 'Hyderabad, India',
            score: '68%'
        },
        {
            courseName: 'Higher Secondary (XII)',
            startYear: '2012',
            endYear: '2013',
            currentlyPursuing: false,
            school: 'Sri Chaitanya Bharathi Junior College',
            location: 'Hyderabad, India',
            score: '64%'
        },
        {
            courseName: 'High School (X)',
            startYear: '2010',
            endYear: '2011',
            currentlyPursuing: false,
            school: 'A.P.S.W.E.R.S',
            location: 'Hyderabad, India',
            score: '60%'
        },
    ]
}

const ResumePreview: FC = () => {
    return (
        <main className="resume-preview">
            <div className="container">
                
                <div className="layout">
                    <div className="main-content">
                        <ResumeBlock title="" classes="personal-details">
                            <h2 className="user-name">{user.name}</h2>
                            <p className="user-description">{user.description}</p>
                            <div className="contact-details">
                                <div className="contact-details-item">
                                    <IconText icon={<Letter />}>{user.email}</IconText>
                                </div>
                                <div className="contact-details-item">
                                    <IconText icon={<CallDoctor />}>{user.contactNo}</IconText>
                                </div>
                                <div className="contact-details-item">
                                    <IconText icon={<LoveHeartPin />}>{user.location}</IconText>
                                </div>
                            </div>
                        </ResumeBlock>
                        <ResumeBlock title="Work Experience">
                            {user.workExperience.map(exp => (
                                <div key={`${exp.org} - ${exp.role}`} className="work-experience">
                                    <div className="org-details">
                                        <p className="org-name">{exp.org}</p>
                                        <p>{exp.startDate} - {exp.currentlyWorking ? 'Present' : exp.endDate}</p>
                                    </div>
                                    <p>{exp.role}</p>
                                    <p><strong>Responsibilities</strong></p>
                                    <List>
                                        {exp.responsibilities.map(responsibility => (
                                            <ListItem key={responsibility}>
                                                {responsibility}
                                            </ListItem>
                                        ))}
                                    </List>
                                </div>
                            ))}
                        </ResumeBlock>
                        <ResumeBlock title="Education Details">
                            {user.education.map(edu => (
                                <div key={edu.courseName} className="education-details">
                                    <div className="course-details">
                                        <p className="course-name">{edu.courseName}</p>
                                        <p>{edu.startYear} - {edu.currentlyPursuing ? 'Present' : edu.endYear}</p>
                                    </div>
                                    <p>{edu.school}</p>
                                    <p className="education-location">{edu.location}</p>
                                    <p>{edu.score}</p>
                                </div>
                            ))}
                        </ResumeBlock>
                    </div>
                    <div className="sidebar">
                        <ResumeBlock title="Skills">
                            <List>
                                {user.skills.map(skill => (
                                    <ListItem key={skill.name}>{skill.name}</ListItem>
                                ))}
                            </List>    
                        </ResumeBlock>
                        <ResumeBlock title="Strengths">
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
                        </ResumeBlock>
                    </div>
                </div>
            </div>
            <p className="placeholder">Created by pixellateddev resume builder</p>

        </main>
    )
}

export default ResumePreview