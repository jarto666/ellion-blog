import { AppProps } from "next/app";
import Layout from "../components/common/layout"; // Import the Layout component
import "../styles/globals.css"; // Global styles

import localFont from "next/font/local";
import { ThemeProvider } from "../context/ThemeContext";
import { SpeedInsights } from "@vercel/speed-insights/next";

const syncopate = localFont({
  src: [
    {
      path: "../public/fonts/Syncopate-Regular.ttf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-syncopate",
});

const nunito = localFont({
  src: [
    {
      path: "../public/fonts/NunitoSans_var.ttf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-nunito",
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <div className={`${syncopate.variable} ${nunito.variable}`}>
        <SpeedInsights />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </div>
    </ThemeProvider>
  );
}

export default MyApp;
