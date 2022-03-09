import { FC } from "react"
import Letter from "../icons/Letter"
import CallDoctor from "../icons/CallDoctor"
import LoveHeartPin from "../icons/LoveHeartPin"
import IconText from "../IconText"
import Block from "./Block"
import ListItem from "../ListItem"

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


const ResumePreview: FC= () => {
    return (
        <div className="resume-preview">
            <div className="sidebar">
                <Block title="Skills">
                    <ul className="list-items">
                        {user.skills.map(skill => (
                            <ListItem key={skill.name}>{skill.name}</ListItem>
                        ))}
                    </ul>
                </Block>
                <Block title="Strengths">
                    <ul className="list-items">
                        {user.strengths.map(strength => (
                            <ListItem key={strength}>{strength}</ListItem>
                        ))}
                    </ul>
                </Block>
                <Block title="Achievements">
                    <ul className="list-items">
                        {user.achievements.map(achievement => (
                            <ListItem key={achievement}>{achievement}</ListItem>
                        ))}
                    </ul>
                </Block>

                <Block title="Hobbies">
                    <ul className="list-items">
                        {user.hobbies.map(hobby => (
                            <ListItem key={hobby}>{hobby}</ListItem>
                        ))}
                    </ul>
                </Block>

                <Block title="Languages">
                    <ul className="list-items">
                        {user.languages.map(language => (
                            <ListItem key={language}>{language}</ListItem>
                        ))}
                    </ul>
                </Block>
            </div>
            <div className="main">
                <div className="personal-details">
                    <h2>{user.name}</h2>
                    <p>{user.description}</p>
                    <div className="contact-details">
                        <div className="contact-details-item">
                            <IconText icon={<Letter />} text={user.email}/>
                        </div>
                        <div className="contact-details-item">
                            <IconText icon={<CallDoctor />} text={user.contactNo} />
                        </div>
                        <div className="contact-details-item">
                            <IconText icon={<LoveHeartPin />} text={user.location} />
                        </div>
                    </div>
                </div>

                <Block title="Work Experience">
                    {user.workExperience.map((job, index) => (
                        <div key={index} className="work-experience">
                            <div className="org-details">
                                <p className="org-name">{job.org}</p>
                                <p>{job.startDate} - {job.currentlyWorking ? 'Present' : job.endDate}</p>
                            </div>
                            <p className="job-role">{job.role}</p>

                            <h4 className="list-title">Responsibilities</h4>
                            <ul className="list-items">
                                {job.responsibilities.map(responsibility => (
                                    <ListItem key={responsibility}>{responsibility}</ListItem>
                                ))}
                            </ul>
                        </div>
                    ))}
                </Block>

                <Block title="Education Details">
                    {user.education.map(course => (
                        <div className="course" key={course.courseName}>
                            <div className="course-details">
                                <p className="course-name">{course.courseName}</p>
                                <p>{course.startYear} - {course.endYear}</p>
                            </div>
                            <p className="school">{course.school}</p>
                            <p>{course.location}</p>
                            <p>{course.score}</p>
                        </div>
                    ))}
                </Block>
                
            </div>
        </div>
    )
}

export default ResumePreview