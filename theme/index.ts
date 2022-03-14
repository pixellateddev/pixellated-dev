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
                    fontFamily: headingFonts,
                    padding: '1em 1em 0.5em'
                }
            }
        },
        MuiDialogActions: {
            styleOverrides: {
                root: {
                    padding: '0.5em 1em 1em',
                    'button': {
                        marginRight: '1em',
                        '&:last-child': {
                            marginRight: 0
                        }
                    },
                    '&>:not(:first-of-type)': {
                        marginLeft: 0
                    }

                }
            }
        },
        MuiDialogContent: {
            styleOverrides: {
                root: {
                    padding: '0.5em 1em'
                }
            }
        },
        MuiFormLabel: {
            styleOverrides: {
                asterisk: {
                    color: 'red'
                }
            }
        }
    }
})

export default theme