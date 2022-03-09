import { useRouter } from "next/router"
import { FC } from "react"
import Footer from "./Footer"
import Header from "./Header"

const Layout: FC = ({children}) => {
    const router = useRouter()
    if (router.asPath === '/resume') {
        return <>{children}</>
    }
    return (
        <div className="body">
            <Header />
            {children}
            <Footer />
        </div>
    )
}

export default Layout