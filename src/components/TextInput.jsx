import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class TextInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
  }

  onChange(e) {
    this.props.onChange(e.target.value);
    this.setState({ value: e.target.value });
  }

  render() {
    const icon = {
      [this.props.icon]: this.props.icon,
      'input--icon': this.props.icon,
      'p-l-10': !this.props.icon,
    };
    const placeholder = {
      'input__placeholder--fly': this.props.fly,
      fill: this.state.value,
    };
    return (
      <div className={classNames('input input--big p-r-10', icon, this.props.className)}>
        <input type="text" className="input__field flex-grow-1" value={this.props.text} onChange={this.onChange.bind(this)} />
        <span className={classNames('input__placeholder', placeholder)}>{this.props.placeholder}</span>
      </div>
    );
  }
}

TextInput.propTypes = {
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  fly: PropTypes.bool,
  icon: PropTypes.string,
  text: PropTypes.string,
};

export default TextInput;
