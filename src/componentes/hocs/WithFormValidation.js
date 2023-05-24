import React, {useState} from "react";

const WithFormValidation = (Display) => {
    const FormValidation = (props) =>{
        const [formData, setFormData] = useState({});
        const [errors, setErrors] = useState({});

        const handleChange = (e) => {
            const { name, value } = e.target;
            setFormData((prevData) => ({
                ...prevData,
                [name]: value,
            }));
        };

        const handleSubmit = (e) =>{
            e.preventDefault();
            const validationErrors = validateForm(formData)
            setErrors(validationErrors)
            // console.log(validationErrors)
            
            if(Object.keys(validationErrors).length === 0){
                console.log("Formulario enviado:", formData);

                setFormData({});
                setErrors({});
            }
        }

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
            if(!data.passoword){
                errors.passoword = 'Campo Obrigatorio'
            }
            if(data.passoword){
                if(data.passoword.length < 3 && data.passoword){
                    errors.passoword = 'Nome deve conter mais de 3 caracteres'
                }
            }
            return errors;
        }
        
        return(
            <Display
            formData={formData}
            errors={errors}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            {...props}
          />
        )
    }

    return FormValidation

}

export default WithFormValidation