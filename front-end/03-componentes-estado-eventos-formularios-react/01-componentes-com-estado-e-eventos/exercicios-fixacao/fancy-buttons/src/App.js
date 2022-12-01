import './App.css';
import React from 'react';

function handleClick(event) {
  const button = event.target.name
  console.log(`clicou no botão: ${button}`);
}

class App extends React.Component {
  render() {
    return (
      <main>
        <button name="Botão1" onClick={handleClick}>Clique Aqui</button>
        <button name="Botão2" onClick={handleClick}>Clique Aqui</button>
        <button name="Botão3" onClick={handleClick}>Clique Aqui</button>
      </main>
    )
  }
}

export default App;
