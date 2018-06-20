import React, { Component } from 'react';
import PropTypes from 'prop-types';
import seeds from './seeds';

class Router extends Component {

  isActive(routeConfig) {
    const route = new RegExp(routeConfig.path.replace(/\{.*?\}/g, '.+?') + '$');
    return route.test(this.props.currentUrl);
  }

  render() {
    const page404 = <h1>Page Not Found</h1>;
    const { routes, notFound = page404 } = this.props;
    const { component: Page } = routes.find((item) => this.isActive(item)) || { component: notFound };
    const data = this.props.data || seeds[Page.name];
    return <Page data={data}></Page>;
  }
}

Router.propTypes = {
  routes: PropTypes.array,
  currentUrl: PropTypes.string,
  data: PropTypes.any,
  notFound: PropTypes.any,
};

export default Router;
