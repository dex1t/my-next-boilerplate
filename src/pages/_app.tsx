import type { AppProps } from "next/app";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { dt } from "@/utils/designTokens";
import Head from "next/head";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }: AppProps) {
  const url = "https://example.com/";
  const router = useRouter();
  const canonicalUrl = (
    url + (router.asPath === "/" ? "" : router.asPath)
  ).split("?")[0];

  return (
    <>
      <Head>
        <link rel="icon" type="image/png" href="/favicon.png" />
        <link rel="canonical" href={canonicalUrl} />
        <meta name="description" content="Example" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:url" content={url} />
        <meta property="og:site_name" content="Example" />
        <meta property="og:locale" content="ja" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Example" />
        <meta property="og:description" content="Example"></meta>
        <meta property="og:image" content={`${url}/ogp.png`} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:site" content="@example" />
      </Head>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  );
}

const theme = extendTheme({
  styles: {
    global: {
      "html, body": {
        fontFamily: `"Noto Sans", "Noto Sans JP", "Helvetica Neue",
      "Hiragino Kaku Gothic ProN", "Hiragino Sans", Meiryo, sans-serif`,
        "-webkit-font-smoothing": "antialiased",
        "-moz-osx-font-smoothing": "grayscale",
        textRendering: "optimizeLegibility",
        fontFeatureSettings: `"palt"`,
        letterSpacing: "0.6px",
      },
      "ul, ol": {
        listStyle: "none",
      },
      a: {
        "&:link, &:visited, &:hover, &:active": {
          color: "inherit",
          textDecoration: "inherit",
        },
      },
      "::selection": {
        background: dt.colors.black,
        color: dt.colors.white,
      },
    },
  },
  fontSizes: {
    xs: "10px",
    sm: "11px",
    md: "14px",
    lg: "18px",
    xl: "20px",
    "2xl": "24px",
    "3xl": "36px",
    "4xl": "54px",
  },
  breakpoints: {
    sm: null,
    md: null,
    lg: "768px",
    xl: "1024px",
    "2xl": null,
  },
});
