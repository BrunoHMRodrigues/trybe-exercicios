import './App.css';
import React from 'react';

class App extends React.Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }
  
  handleClick(event) {
    const button = event.target.name
    console.log(`clicou no botão: ${button}`);
  }

  render() {
    return (
      <main>
        <button name="Botão1" onClick={this.handleClick}>Clique Aqui</button>
        <button name="Botão2" onClick={this.handleClick}>Clique Aqui</button>
        <button name="Botão3" onClick={this.handleClick}>Clique Aqui</button>
      </main>
    )
  }
}

export default App;
