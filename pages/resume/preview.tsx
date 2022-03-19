import { FC } from 'react'

import {
  Email,
  GitHub,
  LinkedIn,
  LocationOn,
  PhoneIphone,
  Public
} from '@mui/icons-material'
import IconText from '@pixellated/components/IconText'
import { ResumeBlock } from '@pixellated/components/resume'
import { useResume } from '@pixellated/state/resume'

const ResumePreview: FC = () => {
    const { userDetails: user, layout } = useResume()
    return (
        <main className="resume-preview">
            <div className="container">
                
                <div className="layout">
                    <div className="main-content">
                        <ResumeBlock title="" classes="personal-details">
                            <h2 className="user-name">{user.personalDetails.fullName}</h2>
                            <p className="user-role">{user.personalDetails.currentRole}</p>
                            <div className="contact-details">
                                <div className="contact-details-item">
                                    <IconText icon={<Email />}>{user.personalDetails.email}</IconText>
                                </div>
                                <div className="contact-details-item">
                                    <IconText icon={<PhoneIphone />}>{user.personalDetails.phoneNumber}</IconText>
                                </div>
                                <div className="contact-details-item">
                                    <IconText icon={<LocationOn />}>{user.personalDetails.location}</IconText>
                                </div>
                                {!!user.personalDetails.github && (
                                    <div className="contact-details-item">
                                        <IconText icon={<GitHub />}><a href={`https://github.com/${user.personalDetails.github}`} target="_blank" rel="noreferrer">@{user.personalDetails.github}</a></IconText>
                                    </div>
                                )}
                                {!!user.personalDetails.linkedin && (
                                    <div className="contact-details-item">
                                        <IconText icon={<LinkedIn />}><a href={`https://www.linkedin.com/in/${user.personalDetails.github}`} target="_blank" rel="noreferrer">@{user.personalDetails.linkedin}</a></IconText>
                                    </div>
                                )}
                                {!!user.personalDetails.website && (
                                    <div className="contact-details-item">
                                        <IconText icon={<Public />}><a href={user.personalDetails.website} target="_blank" rel="noreferrer">{user.personalDetails.website}</a></IconText>
                                    </div>
                                )}
                            </div>
                        </ResumeBlock>
                        {!!user.workExperience?.length && (
                            <ResumeBlock title="Work Experience">
                                {user.workExperience.map(exp => {
                                    let responsibilities = exp.description.split('.').filter(res => res)
                                    if (responsibilities.length === 1) {
                                        responsibilities = []
                                    }
                                    const description = responsibilities.length ? '' : exp.description
                                    return (
                                    <div key={`${exp.organization} - ${exp.role}`} className="work-experience">
                                        <div className="org-details">
                                            <p className="job-role">{exp.role}</p>
                                            <p>{exp.startDate} - {exp.currentlyWorking || !exp.endDate ? 'Present' : exp.endDate}</p>
                                        </div>
                                        <p className="org-name">{exp.organization}</p>
                                        <p className='org-description'>{description}</p>
                                        {!!responsibilities?.length && (
                                            <>
                                                <p><strong>Responsibilities</strong></p>
                                                <ul className='org-responsibilities'>
                                                    {responsibilities.map(responsibility => (
                                                        <li key={responsibility}>
                                                            {responsibility}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </>
                                        )}
                                        
                                    </div>
                                )})}
                            </ResumeBlock>
                        )}
                        {!!user.educationDetails?.length && (
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
                        {layout.left.map(custom => {
                            const block = user.customInfo.find(block => block.id === custom)
                            if(block && block.items.length) {
                                return (
                                    <ResumeBlock key={custom} title={block.name}>
                                        <ul>
                                            {block.items.map(item => (
                                                <li key={item}>{item}</li>
                                            ))}
                                        </ul>
                                    </ResumeBlock>
                                )
                            }
                        })}
                        
                    </div>
                    <div className="sidebar">
                        <ResumeBlock title="Skills">
                            <div className="skills">
                                {user.skills.map(skill => (
                                    <div key={skill.id} className="skill">
                                        <p className="skill-name">{skill.name}</p>
                                        <p className="skill-description">{skill.description}</p>
                                    </div>
                                ))} 
                            </div>
                        </ResumeBlock>
                        {layout.right.map(custom => {
                            const block = user.customInfo.find(block => block.id === custom)
                            if(block && block.items.length) {
                                return (
                                    <ResumeBlock key={custom} title={block.name}>
                                        <ul>
                                            {block.items.map(item => (
                                                <li key={item}>{item}</li>
                                            ))}
                                        </ul>
                                    </ResumeBlock>
                                )
                            }
                        })}
                    </div>
                </div>
            </div>
            <p className="placeholder">Created by pixellateddev resume builder</p>

        </main>
    )
}

export default ResumePreview