import { FC } from "react"

import IconText from "../../components/IconText"
import { LogoGithub, LogoLinkedin, LoveHeartPin, Letter, CallDoctor } from '../../components/icons'
import { BlockBody, ResumeBlock } from "../../components/resume"
import { List, ListItem } from "../../components/resume/List"
import { useResume } from "../../state/resume"


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
                            if(block && block.values.length) {
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
                            if(block && block.values.length) {
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