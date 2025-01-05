import { AppProps } from "next/app";
import Layout from "../components/layout"; // Import the Layout component
import "../styles/globals.css"; // Global styles

import localFont from "next/font/local";

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
    <div className={`${syncopate.variable} ${nunito.variable}`}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}

export default MyApp;
