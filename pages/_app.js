import { createGlobalStyle } from 'styled-components'
import { GeistProvider, CssBaseline } from '@geist-ui/react'

const GlobalStyle = createGlobalStyle`
  body {
    text-align: center;
  }
`

const theme = {
  "palette": {
    "background": "#f9ffed",
    "foreground": "#09d32a",
    "success": "#09d32a",
    "successLight": "#5d8707",
    "successDark": "#05b308"
  }
}

export default function App({ Component, pageProps }) {
  return (
    <GeistProvider theme={theme}>
      <CssBaseline />
      <GlobalStyle />
      <Component {...pageProps} />
    </GeistProvider>

  )
}
