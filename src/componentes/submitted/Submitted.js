//componente para mostar campos
import React from "react";
import "./Submitted.css"

const Submitted = (data) =>{
    return(
        <div className="submitted-container">
            <h2>Cadastro Realizado</h2>
            <p>Nome: {data.data.name}</p>
            <p>E-mail: {data.data.email}</p>
            <p>Password: {data.data.password}</p>
        </div>
    )
}

export default Submitted
