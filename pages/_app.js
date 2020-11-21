import { createGlobalStyle, ThemeProvider } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  .link {
    text-decoration: underline #457B9D;
    color: #1D3557;
  }
  .textBlue {
    color: #457B9D;
  }
`;

// https://coolors.co/palettes/popular
const theme = {
  colors: {
    jet: "hsl(0, 0%, 21%)",
    ming: "hsl(183, 31%, 34%)",
    white: "hsl(0, 0%, 100%)",
    gainsboro: "hsl(0, 0%, 85%)",
    indigoDye: "hsl(204, 42%, 27%)",
  },
};

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
