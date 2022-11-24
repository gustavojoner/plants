import type { AppProps } from 'next/app';
import { ThemeProvider, createGlobalStyle } from "styled-components";

const theme = {
  light: {
    backgroundBase: "#f9f9f9",
    backgroundBase2: "#f9f9f9",
    backgroundLevel1: "#ffffff",
    backgroundLevel2: "#f0f0f0",
    backgroundLevel3: "#f0f0f0",
    borderBase: "#e5e5e5",
    textColorBase: "#222222",
  },
  dark: {
    backgroundBase: "#181818",
    backgroundBase2: "#313131",
    backgroundLevel1: "#202020",
    backgroundLevel2: "#313131",
    backgroundLevel3: "#2b2b2b",
    borderBase: "#383838",
    textColorBase: "#FFFFFF",
  }
};

const GlobalStyle = createGlobalStyle`
  *{
    font-family: Arial, Helvetica, sans-serif;
  }
`

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme.dark}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
