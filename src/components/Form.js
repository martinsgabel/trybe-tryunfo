import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FormInput from './FormInput';
import FormInputNumber from './FormInputNumber';
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
          htmlFor="cardName"
          label="Nome"
          dataTestid="name-input"
          id="cardName"
          name="cardName"
          type="text"
          value={ cardName }// this.state.cardName prob
          onInputChange={ onInputChange }
        />
        <FormTextArea
          htmlFor="cardDescription"
          label="Descrição"
          dataTestid="description-input"
          id="cardDescription"
          name="cardDescription"
          value={ cardDescription }
          onInputChange={ onInputChange }
        />
        <FormInputNumber
          htmlFor="cardAttr1"
          label="Atributo 1"
          dataTestid="attr1-input"
          id="cardAttr1"
          name="cardAttr1"
          type="number"
          value={ cardAttr1 }
          onInputChange={ onInputChange }
        />
        <FormInputNumber
          htmlFor="cardAttr2"
          label="Atributo 2"
          dataTestid="attr2-input"
          id="cardAttr2"
          name="cardAttr2"
          type="number"
          value={ cardAttr2 }
          onInputChange={ onInputChange }
        />
        <FormInputNumber
          htmlFor="cardAttr3"
          label="Atributo 3"
          dataTestid="attr3-input"
          id="cardAttr3"
          name="cardAttr3"
          type="number"
          value={ cardAttr3 }
          onInputChange={ onInputChange }
        />
        <FormInput
          htmlFor="cardImage"
          label="Imagem"
          dataTestid="image-input"
          id="cardImage"
          name="cardImage"
          type="text"
          value={ cardImage }
          onInputChange={ onInputChange }
        />
        <FormSelect
          htmlFor="cardRare"
          label="Raridade"
          dataTestid="rare-input"
          id="cardRare"
          name="cardRare"
          value={ cardRare }
          onInputChange={ onInputChange }
        />
        <FormCheckbox
          htmlFor="cardTrunfo"
          label="Super Trybe Trunfo"
          dataTestid="trunfo-input"
          id="cardTrunfo"
          name="cardTrunfo"
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
  cardAttr1: PropTypes.number.isRequired,
  cardAttr2: PropTypes.number.isRequired,
  cardAttr3: PropTypes.number.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  // hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
