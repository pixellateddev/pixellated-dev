import { GitHub } from "@mui/icons-material"
import { Button, Paper } from "@mui/material"
import { NextPage } from "next"
import { signIn, useSession } from "next-auth/react"
import { useRouter } from "next/router"

const SignIn: NextPage = () => {
    const { query, replace } = useRouter()
    const { data: session } = useSession()
    
    if (session && query.redirect) {
        replace(query.redirect as string)
    }
    
    return (
        <main className="sign-in">
            <Paper className="container">
                <h5 className="title">Sign in to continue</h5>
                <Button 
                    className="github"
                    startIcon={<GitHub />} 
                    size="large" 
                    variant="contained" 
                    onClick={() => signIn('github')}
                >
                    Sign In with Github
                </Button>
            </Paper>
        </main>
    )
}

export default SignIn