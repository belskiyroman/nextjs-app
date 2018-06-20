import React, { Component } from 'react';

class MainLayout extends Component {

  render() {
    return (
      <main className='container'>
        {this.props.children}
      </main>
    );
  }
}

export default MainLayout
