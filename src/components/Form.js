import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Form extends Component {
  constructor() {
    super();

    this.onInputChange = this.onInputChange.bind(this);

    this.onSaveButtonClick = this.onSaveButtonClick.bind(this);
  }

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
      hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick } = this.props;

    return (
      <form>
        <label htmlFor="nomeCarta">
          <p>Nome</p>
          <input
            data-testid="name-input"
            id="nomeCarta"
            name="nomeCarta"
            type="text"
            value={ cardName }
            onChange={ this.onInputChange }
          />
        </label>
        <label htmlFor="descriCarta">
          <p>Descrição</p>
          <textarea
            data-testid="description-input"
            id="descriCarta"
            name="descriCarta"
            value={ cardDescription }
            onChange={ this.onInputChange }
          />
        </label>
        <label htmlFor="atrib1">
          <p>Atributo 1</p>
          <input
            data-testid="attr1-input"
            id="atrib1"
            name="atrib1"
            type="number"
            value={ cardAttr1 }
            onChange={ this.onInputChange }
          />
        </label>
        <label htmlFor="atrib2">
          <p>Atributo 2</p>
          <input
            data-testid="attr2-input"
            id="atrib2"
            name="atrib2"
            type="number"
            value={ cardAttr2 }
            onChange={ this.onInputChange }
          />
        </label>
        <label htmlFor="atrib3">
          <p>Atributo 3</p>
          <input
            data-testid="attr3-input"
            id="atrib3"
            name="atrib3"
            type="number"
            value={ cardAttr3 }
            onChange={ this.onInputChange }
          />
        </label>
        <label htmlFor="imgCarta">
          <p>Imagem</p>
          <input
            data-testid="image-input"
            id="imgCarta"
            name="imgCarta"
            type="text"
            value={ cardImage }
            onChange={ this.onInputChange }
          />
        </label>
        <label htmlFor="raridade">
          <p>Raridade</p>
          <select
            data-testid="rare-input"
            id="raridade"
            name="raridade"
            value={ cardRare }
            onChange={ this.onInputChange }
          >
            <option value="normal">normal</option>
            <option value="raro">raro</option>
            <option value="muito-raro">muito raro</option>
          </select>
        </label>
        <label htmlFor="checkbox">
          <p>Super Trybe Trunfo</p>
          <input
            data-testid="trunfo-input"
            id="checkbox"
            name="checkbox"
            type="checkbox"
            checked={ cardTrunfo }
            onChange={ this.onInputChange }
          />
        </label>
        <button
          data-testid="save-button"
          type="submit"
          disabled={ isSaveButtonDisabled }
          onClick={ this.onSaveButtonClick }
        >
          Salvar
        </button>
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
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
