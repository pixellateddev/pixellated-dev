import { FC } from "react"
import cx from 'classnames'
import { Divider } from "@mui/material"

interface Props {
    title: string,
    classes?: string
}

export const BlockBody: FC = ({children}) => {
    return (
        <div className="resume-block-body">{children}</div>
    )
}

const ResumeBlock: FC<Props> = ({ title, children, classes }) => {
    return (
        <div className={cx("resume-block", classes)}>
            {!!title && (<div className="resume-block-title" style={{display: 'flex', alignItems: 'center', gap: '.5em'}}>
                <h3 >{title}</h3>
                <hr 
                    style={{
                        flex: 1,
                        borderTop: '1.5px solid #4B79A0'
                    }}
                />
            </div>)}
            {children}
        </div>
    )
}

export default ResumeBlock