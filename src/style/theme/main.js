import { createTheme } from '@mui/material/styles';

const typographyList = { h1: 70, h2: 60, h3: 50, h4: 40, h5: 30, h6: 24 }

let AppTheme = {
  palette: {
    primary: {
      main: "#E2C703"
    }, secondary: {
      main: "#111111"
    }
  },
  typography: {
    fontFamily: [
      "Montserrat", "Roboto", "Helvetica", "Arial", "sans-serif"
    ].join(",")
  }
}


AppTheme = createTheme(AppTheme)
Object.keys(typographyList).forEach((item) => {
  AppTheme.typography[item] = {
    fontSize: `${typographyList[item]}px`,
    [AppTheme.breakpoints.only("xs")]: {
      fontSize: `${(typographyList[item] * 0.6) > 18 ? typographyList[item] * 0.6 : 18}px`,
    },
    [AppTheme.breakpoints.only("sm")]: {
      fontSize: `${(typographyList[item] * 0.8) > 18 ? typographyList[item] * 0.8 : 18}px`,
    }
  }
})

export default AppTheme