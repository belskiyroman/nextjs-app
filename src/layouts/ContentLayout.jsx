import React, { Component } from 'react';

class ContentLayout extends Component {

  render() {
    return (
      <div className='content flex-grow-1 m-b-40'>
        {this.props.children}
      </div>
    );
  }
}

export default ContentLayout
