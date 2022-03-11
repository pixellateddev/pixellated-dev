import Link from "next/link"
import { useRouter } from "next/router"
import { FC, MouseEventHandler, useEffect, useState } from "react"
import cx from 'classnames'
import { ERemove, Logout, Segmentation } from "../icons"
import { useSession, signIn, signOut } from "next-auth/react"
import { Button } from "../ui"


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
    const {data: session} = useSession()
    console.log(session)
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
                <div className="nav-toolbar">
                    <NavLinks />
                    { session ? 
                    <div className="session">
                        <p>Hi, {session.user?.name}</p>
                        <div role="button" className="logout-button" onClick={() => signOut()}>
                            <Logout />
                        </div>
                    </div>
                    : 
                    <Button variant="text" onClick={() => signIn('github')}>Login</Button>
                    }
                </div>
                <div className={cx('menu', {
                    'opened': navigationOpened
                })}>
                    <div role="button" className="close-menu" onClick={toggleNavigation}>
                        <ERemove title="close"/>
                    </div>
                    <div className="menu-body">
                        {session ? 
                            <p>Hi, {session.user?.name}</p> :
                            <Button variant="text" onClick={() => signIn('github')}>Login</Button>
                        }
                        <NavLinks overlay onClick={toggleNavigation}/>
                        {session && <Button variant="text" onClick={() => signOut()}>Logout</Button>}
                    </div>
                </div>
                <div role="button" className="hamburger" onClick={toggleNavigation}>
                    <Segmentation />
                </div>
            </nav>
        </header>
    )
}

export default Header