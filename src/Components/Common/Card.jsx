import React from "react";

const Card = ({ name, username, id }) => {
  // Obtener el array de favoritos del localStorage
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
      {/* En cada card deberan mostrar en name - username y el id */}

      {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

      {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
      <h3>{name}</h3>
      <p>Username: {username}</p>
      <p>ID: {id}</p>
      <button onClick={addFav} className="favButton">Add fav</button>
    </div>
  );
};

export default Card;
