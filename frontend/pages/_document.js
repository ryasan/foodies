import Document, { Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

// preload style sheets so everything is styled on page load
export default class MyDocument extends Document {
  static getInitialProps = ({ renderPage }) => {
    const sheet = new ServerStyleSheet();
    const page = renderPage(App => props =>
      sheet.collectStyles(<App {...props} />),
    );
    const styleTags = sheet.getStyleElement();

    return { ...page, styleTags };
  };

  render = () => (
    <html>
      <Head>{this.props.styleTags}</Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </html>
  );
}
