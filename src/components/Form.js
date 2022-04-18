import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FormInput from './FormInput';
import FormCheckbox from './FormCheckbox';
import FormTextArea from './FormTextArea';
import FormSelect from './FormSelect';
import FormButton from './FormButton';

class Form extends Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      // hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;

    return (
      <form>
        <FormInput
          htmlFor="nomeCarta"
          label="Nome"
          dataTestid="name-input"
          id="nomeCarta"
          name="nomeCarta"
          type="text"
          value={ cardName }// this.state.cardName prob
          onInputChange={ onInputChange }
        />
        <FormTextArea
          htmlFor="descriCarta"
          label="Descrição"
          dataTestid="description-input"
          id="descriCarta"
          name="descriCarta"
          value={ cardDescription }
          onInputChange={ onInputChange }
        />
        <FormInput
          htmlFor="atrib1"
          label="Atributo 1"
          dataTestid="attr1-input"
          id="atrib1"
          name="atrib1"
          type="text"
          value={ cardAttr1 }
          onInputChange={ onInputChange }
        />
        <FormInput
          htmlFor="atrib2"
          label="Atributo 2"
          dataTestid="attr2-input"
          id="atrib2"
          name="atrib2"
          type="text"
          value={ cardAttr2 }
          onInputChange={ onInputChange }
        />
        <FormInput
          htmlFor="atrib3"
          label="Atributo 3"
          dataTestid="attr3-input"
          id="atrib3"
          name="atrib3"
          type="text"
          value={ cardAttr3 }
          onInputChange={ onInputChange }
        />
        <FormInput
          htmlFor="imgCarta"
          label="Imagem"
          dataTestid="image-input"
          id="imgCarta"
          name="imgCarta"
          type="text"
          value={ cardImage }
          onInputChange={ onInputChange }
        />
        <FormSelect
          htmlFor="raridade"
          label="Raridade"
          dataTestid="rare-input"
          id="raridade"
          name="raridade"
          value={ cardRare }
          onInputChange={ onInputChange }
        />
        <FormCheckbox
          htmlFor="checkbox"
          label="Super Trybe Trunfo"
          dataTestid="trunfo-input"
          id="checkbox"
          name="checkbox"
          type="checkbox"
          checked={ cardTrunfo }
          onInputChange={ onInputChange }
        />
        <FormButton
          dataTestid="save-button"
          disabled={ isSaveButtonDisabled }
          onSaveButtonClick={ onSaveButtonClick }
        />
      </form>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  // hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
