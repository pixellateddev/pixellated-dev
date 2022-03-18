import { FC } from 'react'

import { Button } from '@mui/material'

import { useResume } from '../../../state/resume'
import styles from '../../../styles/resume.module.scss'
import { TransferList } from '../../ui'

interface Props {
    onContinue: () => void
}

const LayoutEditor: FC<Props> = ({ onContinue }) => {
    const { layout, updateLayout } = useResume()
    return (
        <div className={styles.tabPanelContent}>
            Layout Editor
            <TransferList
                leftTitle="Left" 
                rightTitle="Right" 
                left={layout.left} 
                right={layout.right}
                onChange={updateLayout}
            />

            <div className={styles.tabActionButtons}>
                <Button onClick={onContinue}>Continue</Button>
            </div>
        </div>
    )
}

export default LayoutEditor