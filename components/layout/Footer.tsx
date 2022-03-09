import { FC } from "react"

const Footer: FC = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-body">
                    <img src="/assets/images/logo.svg" className="footer-logo"/>
                    <p className="footer-text">All Rights Reserved</p>
                </div>
                
            </div>
        </footer>
    )
}

export default Footer