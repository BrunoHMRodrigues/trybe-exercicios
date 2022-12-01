import './App.css';
import React from 'react';

class App extends React.Component {
  constructor() {
    super();
    
    this.handleClickBtn1 = this.handleClickBtn1.bind(this);
    this.handleClickBtn2 = this.handleClickBtn2.bind(this);
    this.handleClickBtn3 = this.handleClickBtn3.bind(this);
    this.getButtonColor = this.getButtonColor.bind(this);

    this.state = {
      clicksBtn1: 0,
      clicksBtn2: 0,
      clicksBtn3: 0,
    };
  }

  // state {
  //   clicksBtn1: 0,
  //   clicksBtn2: 0,
  //   clicksBtn3: 0,
  // };

  handleClickBtn1(event) {
    this.setState((previewState) => ({
      clicksBtn1: previewState.clicksBtn1 + 1,
    }), () => {
      const color = event.target.style.backgroundColor;
      console.log(color);
    })
  };
  handleClickBtn2(event) {
    this.setState((previewState) => ({
      clicksBtn2: previewState.clicksBtn2 + 1,
    }), () => {
      const color = event.target.style.backgroundColor;
      console.log(color);
    })
  };
  handleClickBtn3(event) {
    this.setState((previewState) => ({
      clicksBtn3: previewState.clicksBtn3 + 1,
    }), () => {
      const color = event.target.style.backgroundColor;
      console.log(color);
    })
  };

  getButtonColor(number) {
    return (number % 2 === 0) ? 'green' : 'blue';
  }

  render() {
    const { clicksBtn1, clicksBtn2, clicksBtn3 } = this.state;
    return (
      <main>
        <button name="Botão1" style={ { backgroundColor: this.getButtonColor(clicksBtn1) } } onClick={this.handleClickBtn1}>{`Botão 1, Clicks: ${clicksBtn1}`}</button>
        <button name="Botão2" style={ { backgroundColor: this.getButtonColor(clicksBtn2) } } onClick={this.handleClickBtn2}>{`Botão 2, Clicks: ${clicksBtn2}`}</button>
        <button name="Botão3" style={ { backgroundColor: this.getButtonColor(clicksBtn3) } } onClick={this.handleClickBtn3}>{`Botão 3, Clicks: ${clicksBtn3}`}</button>
      </main>
    )
  }
}

export default App;
