import React, { useState } from "react";


const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const onChangeName = (e) => {
    setName(e.target.value);
    setNameError("");
  }
  const onChangeEmail = (e) => {
    setEmail(e.target.value);
    setEmailError("");
  }

  const handlerForm = (e) => {
    e.preventDefault();
    validateForm()
  }

  const validateForm = () => {
    let isValid = true;
    if (!name) { 
      setNameError("El nombre es requerido") 
      isValid = false}
    if (!email) {
      setEmailError("El email es requerido")
      isValid = false
    }
    if (name.length < 5) {
      setNameError("El nombre debe tener al menos 5 caracteres")
      isValid = false
    }

    if (isValid) { setSubmitted(true) }

  }

  return (
    <div>
      {submitted ? (<p>Gracias {name}, te contactaremos cuando antes vía mail</p>) : (
        <form className="form" onSubmit={handlerForm}>
          <div>
            <input type="text" placeholder="Nombre de usuario" value={name} onChange={onChangeName} />
            {nameError && <span className="error" style={{ color: "red" }}>{nameError}</span>}
          </div>
          <div>
            <input type="email" placeholder="Ingresar email" value={email} onChange={onChangeEmail} />
            {emailError && <span className="error" style={{ color: "red" }}>{emailError}</span>}
          </div>
          <button type="submit">Enviar</button>
        </form>
      )}
    </div>
  );
};

export default Form;
