import { FC } from "react"
import { useResume } from "../../state/resume"
import { TransferList } from "../ui"

const LayoutBuilder: FC = () => {
    const {resume, setLayout} = useResume()
    return (
        <div>
            <h3>Layout Builder</h3>
            <TransferList 
                leftTitle="Left" 
                rightTitle="Right" 
                left={resume.left} 
                right={resume.right}
                onChange={setLayout}
            />
        </div>
    )
}

export default LayoutBuilder