import React from 'react';
import './App.css';
import LoginForm from './components/LoginForm/LoginForm';
import Navigation from './components/Navigation/Navigation';

function App() {
  return (
    <div className="App">
      <Navigation />
      <div className="content">
        <LoginForm />
      </div>
    </div>
  );
}

export default App;