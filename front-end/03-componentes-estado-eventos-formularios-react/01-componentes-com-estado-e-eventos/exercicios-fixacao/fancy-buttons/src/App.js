import './App.css';
import React from 'react';

class App extends React.Component {
  constructor() {
    super();
    
    this.handleClickBtn1 = this.handleClickBtn1.bind(this);
    this.handleClickBtn2 = this.handleClickBtn2.bind(this);
    this.handleClickBtn3 = this.handleClickBtn3.bind(this);

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

  handleClickBtn1() {
    this.setState((previewState, _props) => ({
      clicksBtn1: previewState.clicksBtn1 + 1,
    }))
  };
  handleClickBtn2() {
    this.setState((previewState, _props) => ({
      clicksBtn2: previewState.clicksBtn2 + 1,
    }))
  };
  handleClickBtn3() {
    this.setState((previewState, _props) => ({
      clicksBtn3: previewState.clicksBtn3 + 1,
    }))
  };

  render() {
    const { clicksBtn1, clicksBtn2, clicksBtn3 } = this.state;
    return (
      <main>
        <button name="Botão1" onClick={this.handleClickBtn1}>{`Botão 1, Clicks: ${clicksBtn1}`}</button>
        <button name="Botão2" onClick={this.handleClickBtn2}>{`Botão 2, Clicks: ${clicksBtn2}`}</button>
        <button name="Botão3" onClick={this.handleClickBtn3}>{`Botão 3, Clicks: ${clicksBtn3}`}</button>
      </main>
    )
  }
}

export default App;
