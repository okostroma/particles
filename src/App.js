import React from 'react';
import logo from './logo.svg';
import './App.css';
import Particles from 'react-particles-js';

function App() {


  return (
    <div className="App">

      Oxana Kostroma
        <Particles
            params={{
                particles: {
                    number: {
                        value: 200,
                        density: {
                            enable: true,
                            value_area: 1000,
                        }
                    },
                },
            }}
        />
    </div>
  );
}

export default App;
