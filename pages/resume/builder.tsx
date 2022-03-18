import { Button, Paper, Tab, Tabs, Typography } from "@mui/material"
import { NextPage } from "next"
import { FC, HTMLProps, useState } from "react"
import cx from 'classnames'
import styles from '../../styles/resume.module.scss'
import { PersonalDetailsForm, WorkExperience, EducationDetails, Skills, LayoutEditor, CustomBlock } from "../../components/resume/builder"
import { useRouter } from "next/router"
import { useResume } from "../../state/resume"

interface TabPanelProps extends HTMLProps<HTMLDivElement>{
    children?: React.ReactNode;
    index: number;
    value: number;
}

const TabPanel:FC<TabPanelProps> = (props) => {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
        {value === index && (
            children
        )}
        </div>
    )
}

const Builder: NextPage = () => {
    const [tab, selectTab] = useState(0)
    const router = useRouter()
    const { resume } = useResume()
    console.log(resume)

    const saveAndPreview = async () => {

        fetch('/api/resume/save', {
            method: 'POST',
            body: JSON.stringify({resume})
        })
        router.push('/resume/preview')
    }

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        selectTab(newValue);
    };

    const handleContinue = () => {
        selectTab(tab + 1)
    }

    const blocks = resume.userDetails.customInfo.length
    return (
        <main className={cx('container', styles.resumeBuilderContainer)}>
            <Paper className={styles.resumeBuilder}>
                <Tabs
                    className={styles.tabs}
                    orientation="vertical"
                    variant="scrollable"
                    value={tab}
                    onChange={handleChange}
                    sx={{ borderRight: 1, borderColor: 'divider', height:500 }}
                >
                    <Tab label="Personal Details" />
                    <Tab label="Work Experience" />
                    <Tab label="Education Details" />
                    <Tab label="Skills" />
                    {resume.userDetails.customInfo.map(block => (
                        <Tab key={block.id} label={block.name} />
                    ))}
                    <Tab label="Custom Blocks" />
                    <Tab label="Layout Editor" />
                    <Tab label="Save and Preview" />
                </Tabs>
                <TabPanel value={tab} index={0} className={styles.tabPanel}>
                    <PersonalDetailsForm onContinue={handleContinue}/>
                </TabPanel>
                <TabPanel value={tab} index={1} className={styles.tabPanel}>
                    <WorkExperience onContinue={handleContinue}/>
                </TabPanel>
                <TabPanel value={tab} index={2} className={styles.tabPanel}>
                    <EducationDetails onContinue={handleContinue}/>
                </TabPanel>
                <TabPanel value={tab} index={3} className={styles.tabPanel}>
                    <Skills onContinue={handleContinue}/>
                </TabPanel>
                {resume.userDetails.customInfo.map((block, index) => (
                    <TabPanel key={block.id} index={index+4}  value={tab} className={styles.tabPanel}>
                        <CustomBlock block={block} onContinue={handleContinue}/>
                    </TabPanel>
                ))}
                <TabPanel value={tab} index={5 + blocks} className={styles.tabPanel}>
                    <LayoutEditor onContinue={handleContinue}/>
                </TabPanel>
                <TabPanel value={tab} index={6 + blocks} className={styles.tabPanel}>
                    <Button onClick={saveAndPreview}>Save And Preview</Button>
                </TabPanel>
            </Paper>
        </main>
    )
}

export default Builder