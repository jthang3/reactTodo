import logo from './logo.svg';
import './App.css';
import React from 'react';
import Container from './components/Container';

class App extends React.Component {
  render(){
    return(
      <div className='app'>
        <Container />
      </div>
    )
  }
}

export default App;
