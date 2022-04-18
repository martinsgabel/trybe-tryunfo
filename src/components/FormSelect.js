import React, { Component } from 'react';
import PropTypes from 'prop-types';

class FormSelect extends Component {
  render() {
    const { htmlFor, label, dataTestid, id, name, value, onInputChange } = this.props;
    return (
      <label htmlFor={ htmlFor }>
        <p>{ label }</p>
        <select
          data-testid={ dataTestid }
          id={ id }
          name={ name }
          value={ value }
          onChange={ onInputChange }
        >
          <option value="normal">normal</option>
          <option value="raro">raro</option>
          <option value="muito-raro">muito raro</option>
        </select>
      </label>
    );
  }
}

FormSelect.propTypes = {
  htmlFor: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  dataTestid: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
};

export default FormSelect;
