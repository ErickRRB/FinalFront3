import React, {useContext} from 'react'
import { ContextGlobal } from '../utils/global.context'
import { Link } from 'react-router-dom'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  const { dispatch } = useContext(ContextGlobal)
  const toggleTheme = () => {
    dispatch({ type: "CHANGE_THEME" })
  }

 
  return (
    <nav >
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <Link to="/home">Home</Link>
      <Link to ="/contacto">Contacto</Link>
      <Link to ="/favs">Favoritos</Link>
      <button onClick={toggleTheme}>Change theme</button>
    </nav>
  )
}

export default Navbar