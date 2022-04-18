import React, { Component } from 'react';
import PropTypes from 'prop-types';

class FormCheckbox extends Component {
  render() {
    const { htmlFor, label, dataTestid, id, name,
      type, checked, onInputChange } = this.props;
    return (
      <label htmlFor={ htmlFor }>
        <p>{ label }</p>
        <input
          data-testid={ dataTestid }
          id={ id }
          name={ name }
          type={ type }
          checked={ checked }
          onChange={ onInputChange }
        />
      </label>
    );
  }
}

FormCheckbox.propTypes = {
  htmlFor: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  dataTestid: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  checked: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
};

export default FormCheckbox;
