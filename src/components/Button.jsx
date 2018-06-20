import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class Button extends Component {
  static type = {
    primary: Symbol('primary'),
    border: Symbol('border'),
    borderLess: Symbol('borderLess'),
  };

  render() {
    const icon = {
      [this.props.icon]: this.props.icon,
      'button--icon': this.props.icon,
    };
    const type = {
      'button--primary': this.props.type === Button.type.primary,
      'button--border': this.props.type === Button.type.border,
      'button--border-less': this.props.type === Button.type.borderLess,
    };
    const disabled = {
      'button--disabled': this.props.disabled,
    };
    return (
      <div className={classNames('button button--big', icon, type, disabled, this.props.className)} onClick={this.props.disabled ? null : this.props.onClick}>
        <span className='button__text flex-grow-1'>{this.props.text}</span>
      </div>
    );
  }
}

Button.propTypes = {
  type: PropTypes.oneOf(Object.values(Button.type)),
  icon: PropTypes.string,
  text: PropTypes.string,
};

export default Button
