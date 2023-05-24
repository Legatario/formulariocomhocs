import React from 'react';
import withFormValidation from '../hocs/WithFormValidation';
import Display from '../display/Display';

const Form = ({ formData, errors, handleChange, handleSubmit }) => {
  return (
    <div>
      <h2>Cadastro</h2>
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