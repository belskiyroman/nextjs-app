import App, { Container } from 'next/app';
import React from 'react';
import { Provider } from 'react-redux';
import nextReduxSaga from 'next-redux-saga';
import withRedux from 'next-redux-wrapper';
import configureStore from '../redux';

class ConnectedApp extends App {
  static async getInitialProps({ Component, ctx }) {
    try {
      if (Component.getInitialProps) {
        return {
          pageProps: await Component.getInitialProps(ctx),
        };
      }
    } catch (e) {
      // todo: the Component should catch an error
    }

    return {};
  }

  render() {
    const { Component, store, pageProps = {} } = this.props;
    return (
      <Container>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </Container>
    );
  }
}

export default withRedux(configureStore)(nextReduxSaga(ConnectedApp));
