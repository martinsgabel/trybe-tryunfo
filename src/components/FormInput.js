import React, { Component } from 'react';
import PropTypes from 'prop-types';

class FormInput extends Component {
  render() {
    const { htmlFor, label, dataTestid, id, name,
      type, value, onInputChange } = this.props;
    return (
      <label htmlFor={ htmlFor }>
        <p>{ label }</p>
        <input
          data-testid={ dataTestid }
          id={ id }
          name={ name }
          type={ type }
          value={ value }
          onChange={ onInputChange }
        />
      </label>
    );
  }
}

FormInput.propTypes = {
  htmlFor: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  dataTestid: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
};

export default FormInput;
