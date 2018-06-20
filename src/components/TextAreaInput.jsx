import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class TextAreaInput extends Component {
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
    const placeholder = {
      'input__placeholder--fly': this.props.fly,
      'fill': this.state.value,
    };
    return (
      <div className='input input--textarea'>
        <textarea type='text' className='input__field flex-grow-1 p-t-4 p-b-4 p-l-10 p-r-10' onChange={this.onChange.bind(this)}>{
          this.props.text
        }</textarea>
        <span className={classNames('input__placeholder input__placeholder--textarea', placeholder)}>{this.props.placeholder}</span>
      </div>
    );
  }
}

TextAreaInput.propTypes = {
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  fly: PropTypes.bool,
  icon: PropTypes.string,
  text: PropTypes.string,
};

export default TextAreaInput
