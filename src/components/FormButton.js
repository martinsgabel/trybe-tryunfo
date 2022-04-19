import React, { Component } from 'react';
import PropTypes from 'prop-types';

class FormButton extends Component {
  render() {
    const { dataTestid, disabled, onSaveButtonClick } = this.props;
    return (
      <button
        data-testid={ dataTestid }
        type="button"
        disabled={ disabled }
        onClick={ onSaveButtonClick }
      >
        Salvar
      </button>
    );
  }
}

FormButton.propTypes = {
  dataTestid: PropTypes.string.isRequired,
  disabled: PropTypes.bool.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default FormButton;
