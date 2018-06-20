import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class ModalLayout extends Component {
  static type = {
    center: Symbol('center'),
    embedded: Symbol('embedded'),
  };

  render() {
    const {open, onClose} = this.props;
    const type = {
      'modal-layout__center': this.props.type === ModalLayout.type.center,
      'modal-layout__embedded': this.props.type === ModalLayout.type.embedded,
    };
    return (
      <div className={classNames('modal-layout', {'none': !open})}>
        <div className={classNames('z-popup', type, this.props.className)}>{
          this.props.children
        }</div>
        {this.props.overlay && <div className='modal-layout__overlay' onClick={onClose} />}
      </div>
    );
  }
}

ModalLayout.propTypes = {
  type: PropTypes.oneOf(Object.values(ModalLayout.type)),
  open: PropTypes.bool,
  closeIcon: PropTypes.string,
};

export default ModalLayout
