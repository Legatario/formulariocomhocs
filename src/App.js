import './App.css';
import React from 'react';
import Form from './componentes/form/Form';
import WithFormValidation from './componentes/hocs/WithFormValidation';

function App() {
  const Hocs = WithFormValidation(Form)
  return (
    <div className="App">
        <Hocs />
    </div>
  );
}

export default App;
