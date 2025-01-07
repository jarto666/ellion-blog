// pages/_document.tsx
import { Html, Head, Main, NextScript } from "next/document";

const Document = () => {
  const setInitialTheme = `
    (function() {
      const theme = localStorage.getItem('theme') || 'light';
      document.documentElement.setAttribute('data-theme', theme);
    })();
  `;

  return (
    <Html>
      <Head />
      <body>
        <script dangerouslySetInnerHTML={{ __html: setInitialTheme }} />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
