import React, {useState} from "react";
import Submitted from "../submitted/Submitted";

const WithFormValidation = (Display) => {
    const FormValidation = (props) =>{
        const [formData, setFormData] = useState({});
        const [errors, setErrors] = useState({});
        const [subForm, setSubForm] = useState({});

        //retorno de input
        const handleChange = (e) => {
            const { name, value } = e.target;
            setFormData((prevData) => ({
                ...prevData,
                [name]: value,
            }));
        };

        //chamada para validação de campos e retorno para cadastro realizado
        const handleSubmit = (e) =>{
            e.preventDefault();
            const validationErrors = validateForm(formData)
            setErrors(validationErrors)
            // console.log(validationErrors)
            
            if(Object.keys(validationErrors).length === 0){
                console.log("Formulario enviado:", formData);
                setSubForm(formData);

                setFormData({});
                setErrors({});
            }
        }

        //validação de campos
        const validateForm = (data) =>{
            const errors = {};
            const emailFormat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
            if(!data.name){
                errors.name = 'Campo Obrigatorio'
            }
            if(data.name){
                if(data.name.length < 3 && data.name){
                    console.log(data.name)
                    errors.name = 'Nome deve conter mais de 3 caracteres'
                }
            }
            if (emailFormat.test(data.email) === false){
                errors.email = 'Email Inválido'
            }
            if(!data.email){
                errors.email = 'Campo obrigatório'
            }
            if(!data.password){
                errors.password = 'Campo Obrigatorio'
            }
            if(data.password){
                if(data.password.length < 3 && data.password){
                    errors.password = 'Nome deve conter mais de 3 caracteres'
                }
            }
            return errors;
        }
        return(
            <div>
                <Display
                formData={formData}
                errors={errors}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                {...props}
              />
                {Object.keys(subForm).length > 0 && 
                <Submitted data={subForm}
                />}
            </div>
        )
    }

    return FormValidation

}

export default WithFormValidation