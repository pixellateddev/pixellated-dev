import { FC } from 'react'

import { Button } from '@mui/material'
import { TransferList } from '@pixellated/components/ui'
import { useResume } from '@pixellated/state/resume'
import styles from '@pixellated/styles/resume.module.scss'

interface Props {
    onContinue: () => void
}

const LayoutEditor: FC<Props> = ({ onContinue }) => {
    const { layout, updateLayout } = useResume()
    return (
        <div className={styles.tabPanelContent}>
            <h4>Layout Editor</h4>
            <p>
                The resume will be a two column layout having some default layout settings. <br />
                The left (main) column will have <strong>Personal Details</strong>, <strong>Work Experience</strong> and <strong>Education Details</strong>. <br />
                The right (sidebar) column will have <strong>Skills</strong>. <br />
                For all other blocks, you can customize where you want them in the resume.</p>
            <TransferList
                leftTitle="Left" 
                rightTitle="Right" 
                left={layout.left} 
                right={layout.right}
                onChange={updateLayout}
            />

            <div className={styles.tabActionButtons}>
                <Button onClick={onContinue}>Save and Preview</Button>
            </div>
        </div>
    )
}

export default LayoutEditor