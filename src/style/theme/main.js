import { createTheme } from '@mui/material/styles';

const typographyList = { h1: 54, h2: 46, h3: 39, h4: 31, h5: 23, h6: 19 }

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