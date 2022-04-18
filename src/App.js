import React from 'react';
import './App.css';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  constructor() {
    super();
    this.onInputChange = this.onInputChange.bind(this);
    this.onSaveButtonClick = this.onSaveButtonClick.bind(this);
    this.isSaveButtonDisabled = this.isSaveButtonDisabled.bind(this);

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
    console.log(`${target} ${target.value}`);
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    });
  }

  onSaveButtonClick() {
    console.log('func');
  }

  isSaveButtonDisabled() {
    console.log(cardAttr1.value);
  }

  render() {
    const { cardName, cardDescription, cardAttr1, cardAttr2, isSaveButtonDisabled,
      cardAttr3, cardImage, cardRare, cardTrunfo } = this.state;
    return (
      <div className="main">
        <Form
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
