import React from 'react';
import App from 'next/app';
import Router from 'next/router';
import smoothscroll from 'smoothscroll-polyfill';
import 'styles/global.scss';

import GlobalContextProvider from 'context/GlobalContextProvider';

class MyApp extends App {
  // Only uncomment this method if you have blocking data requirements for
  // every single page in your application. This disables the ability to
  // perform automatic static optimization, causing every page in your app to
  // be server-side rendered.
  //
  // static async getInitialProps(appContext) {
  //   // calls page's `getInitialProps` and fills `appProps.pageProps`
  //   const appProps = await App.getInitialProps(appContext);
  //
  //   return { ...appProps }
  // }
  componentDidMount(): void {
    smoothscroll.polyfill();
  }

  render(): React.ReactElement {
    const { Component, pageProps } = this.props;

    // TODO: Remove when fixed by Next.js
    // Workaround on style not loaded on routing using Link / Router.push in development mode
    // https://github.com/zeit/next-plugins/issues/282#issuecomment-562047811
    if (process.env.NODE_ENV !== 'production') {
      const refreshChunkStyle = (chunkFileName: string): void => {
        const head = document.getElementsByTagName('head')[0];
        const style = document.createElement('link');

        style.rel = 'stylesheet';
        style.href = `${chunkFileName}?ts=${new Date().getTime()}`;
        head.append(style);

        const chunks = document.querySelectorAll(`link[href*="${chunkFileName}"]`);

        // delete all chunks css, except the last one. (delay 1.5s to keep the page from flickering)
        setTimeout(
          () => chunks.forEach((c, i) => i !== chunks.length - 1 && c && c.parentNode && c.parentNode.removeChild(c)),
          1500
        );
      };

      Router.events.on('routeChangeComplete', () => {
        refreshChunkStyle('/_next/static/css/styles.chunk.css');
      });
    }

    return (
      <>
        <GlobalContextProvider>
          <Component {...pageProps} />
        </GlobalContextProvider>
      </>
    );
  }
}

export default MyApp;
