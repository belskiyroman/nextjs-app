import React, { Component } from 'react';

class ContentHeaderLayout extends Component {

  render() {
    return (
      <div className='content-header'>
        {this.props.children}
      </div>
    );
  }
}

export default ContentHeaderLayout
