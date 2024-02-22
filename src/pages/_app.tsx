import "@/styles/globals.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import type { AppProps } from "next/app";
import { Roboto } from "next/font/google";
import { AppCacheProvider } from "@mui/material-nextjs/v13-pagesRouter";
const theme = createTheme({
  typography: {
    // fontFamily: Roboto.style.fontFamily,
  },
});
export default function App(props: AppProps) {
  const { Component, pageProps } = props;
  return (
    <AppCacheProvider {...props}>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </AppCacheProvider>
  );
}
