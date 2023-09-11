import React, {useContext} from "react";
import {ContextGlobal} from '../utils/global.context'
const Card = ({ name, username, id }) => {
  // Obtener el array de favoritos del localStorage
  const {state, dispatch} = useContext(ContextGlobal);
  const addFav = () => {
    const favs = JSON.parse(localStorage.getItem('favs')) || [];


    //Objeto del dentista a añadir
    const dentistData = { name, username, id };

    favs.push(dentistData);

    //Guardar la lista actualizada en el localStorage
    localStorage.setItem('favs', JSON.stringify(favs));
  }
  
  return (
    <div className="card">
      <h3>{name}</h3>
      <p>Username: {username}</p>
      <p>ID: {id}</p>
      <button onClick={addFav} className="favButton">Add fav</button>
    </div>
  );
};

export default Card;
