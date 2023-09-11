import React, { useState } from "react";


const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  
  const onChangeName = (e) => setName(e.target.value);
  const onChangeEmail = (e) => setEmail(e.target.value);

  const handlerForm = (e) => {
    e.preventDefault();
  }

  if(name.length < 5 || !/^\S+@\S+\.\S+$/.test(email)){
    alert("Por favor verifique su información nuevamente")
  }

  return (
    <div>
      {submitted ? (<p>Gracias {name}, te contactaremos cuando antes vía mail”</p>) : (
      <form onSubmit={handlerForm}>
        <input type="text" placeholder="Nombre de usuario" value={name} onChange={onChangeName} />
        <input type="email" placeholder="Ingresar email" value={email} onChange={onChangeEmail} />

        <button type="submit">Enviar</button>
      </form>
      )}
    </div>
  );
};

export default Form;
