import { Button, Paper, Tab, Tabs, Typography } from "@mui/material"
import { NextPage } from "next"
import { FC, HTMLProps, useState } from "react"
import cx from 'classnames'
import styles from '../../styles/resume.module.scss'
import { PersonalDetailsForm, WorkExperience, EducationDetails, Skills } from "../../components/resume/builder"
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
    return (
        <main className={cx('container', styles.resumeBuilderContainer)}>
            <Paper className={styles.resumeBuilder}>
                <Tabs
                    className={styles.tabs}
                    orientation="vertical"
                    value={tab}
                    onChange={handleChange}
                >
                    <Tab label="Personal Details" />
                    <Tab label="Work Experience" />
                    <Tab label="Education Details" />
                    <Tab label="Skills" />
                    <Tab label="Save and Preview" />
                </Tabs>
                <TabPanel value={tab} index={0} className={styles.tabPanel}>
                    <PersonalDetailsForm onContinue={handleContinue}/>
                </TabPanel>
                <TabPanel value={tab} index={1} className={styles.tabPanel}>
                    <WorkExperience />
                </TabPanel>
                <TabPanel value={tab} index={2} className={styles.tabPanel}>
                    <EducationDetails />
                </TabPanel>
                <TabPanel value={tab} index={3} className={styles.tabPanel}>
                    <Skills />
                </TabPanel>
                <TabPanel value={tab} index={4} className={styles.tabPanel}>
                    <Button onClick={saveAndPreview}>Save And Preview</Button>
                </TabPanel>
            </Paper>
        </main>
    )
}

export default Builder