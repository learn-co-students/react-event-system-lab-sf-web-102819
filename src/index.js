import React from 'react';
import ReactDOM from 'react-dom';

import Keypad from './components/Keypad';
import EyesOnMe from './components/EyesOnMe';

ReactDOM.render(
  <div>
    <Keypad input = 'hello'/>
    <EyesOnMe />
  </div>,
  document.getElementById('global')
);
