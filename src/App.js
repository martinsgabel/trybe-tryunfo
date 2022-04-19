import React from 'react';
import './App.css';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  constructor() {
    super();
    this.onInputChange = this.onInputChange.bind(this);
    this.onSaveButtonClick = this.onSaveButtonClick.bind(this);
    this.disablingButton = this.disablingButton.bind(this);

    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: 0,
      cardAttr2: 0,
      cardAttr3: 0,
      cardImage: '',
      cardRare: '',
      cardTrunfo: false,
      isSaveButtonDisabled: true,
    };
  }

  onInputChange({ target }) {
    // console.log(`${target} ${target.value}`);
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    }, () => this.disablingButton());
  }

  onSaveButtonClick() {
    console.log('func');
  }

  // validatingInputs() {
  //   const { cardName, cardDescription, cardImage, cardRare } = this.state;
  //   const validations = [(!cardName.length), (!cardDescription.length),
  //     (!cardImage.length), (!cardRare.length)];
  //   if (validations.some((val) => val === true)) {
  //     return true;
  //   }
  //   return false;
  // }

  // validatingAtts() {
  //   const { cardAttr1, cardAttr2, cardAttr3 } = this.state;
  //   const maxNum = 90;
  //   if ((cardAttr1 < 0 || cardAttr1 > maxNum)
  //   || (cardAttr2 < 0 || cardAttr2 > maxNum)
  //   || (cardAttr3 < 0 || cardAttr3 > maxNum)) {
  //     return true;
  //   }
  //   return false;
  // }

  // validatingMaxSum() {
  //   const { cardAttr1, cardAttr2, cardAttr3 } = this.state;
  //   const maxSum = 210;
  //   if ((cardAttr1 + cardAttr2 + cardAttr3) > maxSum) return true;
  //   return false;
  // }

  disablingButton() {
    const { cardName, cardDescription, cardAttr1, cardAttr2,
      cardAttr3, cardImage, cardRare } = this.state;
    const numMax = 90;
    const numSum = 210;
    if (!cardName.length
      || !cardDescription.length
      || !cardImage.length
      || !cardRare.length
      || cardAttr1 < 0
      || cardAttr2 < 0
      || cardAttr3 < 0
      || cardAttr1 > numMax
      || cardAttr2 > numMax
      || cardAttr3 > numMax
      || Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3) > numSum) {
      this.setState({
        isSaveButtonDisabled: true,
      });
    } else {
      this.setState({
        isSaveButtonDisabled: false,
      });
    }
  }

  render() {
    const { cardName, cardDescription, cardAttr1, cardAttr2, isSaveButtonDisabled,
      cardAttr3, cardImage, cardRare, cardTrunfo } = this.state;
    return (
      <div className="main">
        <Form
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          isSaveButtonDisabled={ isSaveButtonDisabled }
          onInputChange={ this.onInputChange }
          onSaveButtonClick={ this.onSaveButtonClick }
        />
        <Card
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          // hasTrunfo,
          // isSaveButtonDisabled={}
          // onInputChange={}
          // onSaveButtonClick={}
        />
      </div>
    );
  }
}

export default App;
