import Link from "next/link"
import { FC } from "react"

const Header: FC = () => {
    return (
        <header className="header">
            <nav className="nav container">
                <Link href="/">
                    <a><img src="assets/images/logo.svg" alt="logo" className="logo"/></a>
                </Link>
                <ul className="nav-links">
                    <li>
                        <Link href="/blog">
                            <a className="nav-link">Blog</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/about">
                            <a className="nav-link">About</a>
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header