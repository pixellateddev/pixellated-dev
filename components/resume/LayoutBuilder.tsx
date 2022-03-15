import { FC } from "react"
import { useResume } from "../../state/resume"
import { TransferList } from "../ui"

const LayoutBuilder: FC = () => {
    const {layout, updateLayout} = useResume()
    return (
        <div>
            <h3>Layout Builder</h3>
            <TransferList 
                leftTitle="Left" 
                rightTitle="Right" 
                left={layout.left} 
                right={layout.right}
                onChange={updateLayout}
            />
        </div>
    )
}

export default LayoutBuilder