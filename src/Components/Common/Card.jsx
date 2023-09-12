import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
//import { ContextGlobal } from '../utils/global.context'
const Card = ({ name, username, id }) => {
  // Obtener el array de favoritos del localStorage
  //const context = useContext(ContextGlobal);
  const [isFav, setIsFav] = useState(false);

  useEffect(() => {
    const favs = JSON.parse(localStorage.getItem('favs')) || [];
    const dentistExists = favs.find((dentist) => dentist.id === id);
    if (dentistExists) { setIsFav(true) }
  }, [id]);
  const addFav = () => {
    //e.stopPropagation();

    const favs = JSON.parse(localStorage.getItem('favs')) || [];
    const dentistExists = favs.find((dentist) => dentist.id === id);


    //Si el dentista ya esta en favoritos, lo elimina:
    if (dentistExists) {
      const newFavs = favs.filter((dentist) => dentist.id !== id);
      localStorage.setItem('favs', JSON.stringify(newFavs));
      setIsFav(false);
      return;
    }

    //Si el dentista no esta en favoritos, lo agrega:
    const dentistData = { name, username, id };
    favs.push(dentistData);
    localStorage.setItem('favs', JSON.stringify(favs));
    setIsFav(true);
  }

  return (
    <div className="card">
      <Link to={`/dentist/${id}`}>
        <h3>{name}</h3>
        <p>Username: {username}</p>
        <p>ID: {id}</p>
      </Link>
      <button onClick={addFav} className="favButton">{isFav ? "Eliminar de" : "Agregar a"} favoritos</button>
    </div>
  );
};

export default Card;
