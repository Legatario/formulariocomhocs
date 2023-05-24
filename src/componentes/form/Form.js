import React from 'react';
import withFormValidation from '../hocs/WithFormValidation';
import Display from '../display/Display';
import "./Form.css"

// chamada para o display

const Form = ({ formData, errors, handleChange, handleSubmit }) => {
  return (
    <div>
      <h2 className='title'>Cadastro</h2>
      <Display
        formData={formData}
        errors={errors}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </div>
  );
};

export default withFormValidation(Form);