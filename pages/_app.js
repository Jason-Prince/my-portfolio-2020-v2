import { ThemeProvider } from "styled-components";
import "./_app.css";
import Head from "next/head";

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
      <Head>
        <link rel="icon" href="favicon.svg" />
      </Head>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
