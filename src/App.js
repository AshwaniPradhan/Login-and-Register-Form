import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

import { Login } from './Login';
import { Register } from './Register';

function App() {
  //const to hold the value for which form will be displayed
  const [currentForm, setCurrentForm] = useState('login');

  const toggleForm = (formName) => {
    setCurrentForm(formName);

  }

  return (
    <div className="App">
      {
        currentForm === 'login' ? <Login onFormSwitch={toggleForm} /> : < Register onFormSwitch={toggleForm} />
      }
    </div>
  );
}

export default App;
