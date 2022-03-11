import Link from "next/link"
import { useRouter } from "next/router"
import { FC } from "react"
import cx from 'classnames'
import { Segmentation } from "../icons"

const Header: FC = () => {
    const router = useRouter()
    const path = router.asPath.split('/')[1]
    return (
        <header className="header">
            <nav className="nav container">
                <Link href="/">
                    <a><img src="/assets/images/logo.svg" alt="logo" className="logo"/></a>
                </Link>
                <ul className="nav-links">
                    <li>
                        <Link href="/blog">
                            <a className={cx("nav-link", {
                                "nav-link-active": path === 'blog'
                            })}>
                                Blog
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/about">
                            <a className={cx("nav-link", {
                                "nav-link-active": path === 'about'
                            })}>
                                About
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/resume-builder">
                            <a className={cx("nav-link", {
                                "nav-link-active": path === 'resume-builder'
                            })}>
                                Resume Builder
                            </a>
                        </Link>
                    </li>
                </ul>
                <div role="button" className="hamburger">
                    <Segmentation />
                </div>
            </nav>
        </header>
    )
}

export default Header