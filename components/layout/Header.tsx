import Link from "next/link"
import { useRouter } from "next/router"
import { FC, MouseEventHandler, useEffect, useState } from "react"
import cx from 'classnames'
import { ERemove, Segmentation } from "../icons"


interface NavProps {
    overlay?: boolean
    onClick?: MouseEventHandler<HTMLElement>
}

const NavLinks: FC<NavProps> = ({overlay, onClick}) => {
    const router = useRouter()
    const path = router.asPath.split('/')[1]
    const liProps = overlay ? {onClick: onClick} : {}
    return (
        <ul className="nav-links">
            <li {...liProps}>
                <Link href="/blog">
                    <a className={cx("nav-link", {
                        "nav-link-active": path === 'blog'
                    })}>
                        Blog
                    </a>
                </Link>
            </li>
            <li {...liProps}>
                <Link href="/about">
                    <a className={cx("nav-link", {
                        "nav-link-active": path === 'about'
                    })}>
                        About
                    </a>
                </Link>
            </li>
            <li {...liProps}>
                <Link href="/resume-builder">
                    <a className={cx("nav-link", {
                        "nav-link-active": path === 'resume-builder'
                    })}>
                        Resume Builder
                    </a>
                </Link>
            </li>
        </ul>
    )
}

const Header: FC = () => {
    const [navigationOpened, setNavigationOpened] = useState(false)

    const toggleNavigation = () => {
        setNavigationOpened(!navigationOpened)
    }

    useEffect(() => {
        if (navigationOpened) {
            document.body.classList.add('noscroll')
        }
        else {
            document.body.classList.remove('noscroll')
        }
    }, [navigationOpened])

    return (
        <header className="header">
            <nav className="nav container">
                <Link href="/">
                    <a><img src="/assets/images/logo.svg" alt="logo" className="logo"/></a>
                </Link>
                <NavLinks />
                <div className={cx('menu', {
                    'opened': navigationOpened
                })}>
                    <div role="button" className="close-menu" onClick={toggleNavigation}>
                        <ERemove title="close"/>
                    </div>
                    <NavLinks overlay onClick={toggleNavigation}/>

                </div>
                <div role="button" className="hamburger" onClick={toggleNavigation}>
                    <Segmentation />
                </div>
            </nav>
        </header>
    )
}

export default Header