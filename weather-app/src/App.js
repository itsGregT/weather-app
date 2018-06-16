import React, { Component } from 'react';
import Home from './components/Home';
import './App.css';

class App extends Component {
  componentDidMount() {
  const cityInput = "new";
  const url = 'https://andruxnet-world-cities-v1.p.mashape.com/?query=' + cityInput + '&searchby=city';

  try {
    fetch(url, {
      method: 'GET',
      headers: {
      'X-Mashape-Key': 'elJSzs80GjmshE9NIhftugGztMYXp1OqX9qjsnBm6qPbeA8ktQ',
      'Accept': 'application/json'
      }
    }).then(function(response) {
      try {
        return response.json();
      } catch(error) {
        console.log("response error - ", error);
      }
     
    })
    .then(function(myJson) {
      console.log(myJson);
    });
  } catch(error) {
    console.log('Error ', error);
  }
}

  render() {
    return (
      <div className="App">
        <Home />
      </div>
    );
  }
}

export default App;
