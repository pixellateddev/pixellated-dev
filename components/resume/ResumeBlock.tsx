import { FC } from "react"
import cx from 'classnames'

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
            <h3 className="resume-block-title">{title}</h3>
            {children}
        </div>
    )
}

export default ResumeBlock