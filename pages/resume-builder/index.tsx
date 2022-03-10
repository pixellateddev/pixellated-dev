import { NextPage } from "next"
import Link from "next/link"

const ResumeBuilder: NextPage = () => {
    return (
        <main className="container">
            <div className="layout">
                <div className="full-width">
                    <h2>Resume Builder</h2>    
                    <Link href='/resume-builder/preview'>
                        <div className="resume-theme-box">
                            Click Here
                        </div>
                    </Link>
                </div>
            </div>
        </main>
    )
}

export default ResumeBuilder