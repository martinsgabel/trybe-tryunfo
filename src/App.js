import React from 'react';
import './App.css';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  constructor() {
    super();

    this.onInputChange = this.onInputChange.bind(this);

    // this.onSaveButtonClick = this.onSaveButtonClick.bind(this);

    this.state = {
      cardName: '',
      cardAttr1: '',
      cardAttr2: '',
      cardAttr3: '',
      cardImage: '',
      cardRare: '',
      cardTrunfo: false,
    };
  }

  onInputChange({ target }) {
    console.log(target.value);
    this.setState({
      cardName: target.value,
      cardAttr1: target.value,
      cardAttr2: target.value,
      cardAttr3: target.value,
      cardImage: target.value,
      cardRare: target.value,
    });
  }

  render() {
    const { cardName, cardAttr1, cardAttr2,
      cardAttr3, cardImage, cardRare, cardTrunfo } = this.state;
    return (
      <div className="main">
        <Form onInputChange={ this.onInputChange } />
        <Card
          cardName={ cardName }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
        />
      </div>
    );
  }
}

export default App;

// onSaveButtonClick() {
//   console.log('func');
// }
