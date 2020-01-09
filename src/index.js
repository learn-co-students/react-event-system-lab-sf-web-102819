import React from 'react';
import ReactDOM from 'react-dom';

import Keypad from './components/Keypad';
import EyesOnMe from './components/EyesOnMe';

ReactDOM.render(
  <div>
    <br></br>
    <br></br>
    <br></br>
    <Keypad />
    <br></br>
    <br></br>
    <EyesOnMe />
  </div>,
  document.getElementById('global')
);
