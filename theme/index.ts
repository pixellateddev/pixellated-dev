import { createTheme } from "@mui/material/styles"

const headingFonts = "copperplate, serif";

const theme = createTheme({
    palette: {
        primary: {
            main: '#2D8054'
        }
    },

    typography: {
        fontFamily: "profile-pro, sans-serif",
        h1: {
            fontFamily: headingFonts
        },
        h2: {
            fontFamily: headingFonts
        },
        h3: {
            fontFamily: headingFonts
        },
        h4: {
            fontFamily: headingFonts
        },
        h5: {
            fontFamily: headingFonts
        },
        h6: {
            fontFamily: headingFonts
        }
    },

    components: {
        MuiTextField: {
            defaultProps: {
                size: 'small',
                variant: 'outlined'
            }
        },

        MuiDialogTitle: {
            styleOverrides: {
                root: {
                    fontFamily: headingFonts
                }
            }
        }
    }
})

export default theme