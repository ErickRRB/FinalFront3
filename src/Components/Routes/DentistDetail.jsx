import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function DentistDetail() {

  const { id } = useParams();
  const [dentist, setDentist] = useState({});
  const navigate = useNavigate();
  //const { name, email, phone, website } = dentist;

  const handlerGoBack = () => { navigate(-1) }

  const getDentist = async () => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    const data = await response.json();
    setDentist(data);
  }


  useEffect(() => {
    getDentist()
  })

  return (
    <div>
      {/* Mostrar detalles del dentista usando el objeto dentist */}
      <h2>Detalles del dentista: {id}</h2>
      <table>
        <tbody>
          <tr>
            <th>Nombre</th>
            <th>Email</th>
            <th>Número de teléfono</th>
            <th>Sitio web</th>
          </tr>
          <tr>
            <td>{dentist.name}</td>
            <td>{dentist.email}</td>
            <td>{dentist.phone}</td>
            <td>{dentist.website}</td>
          </tr>
        </tbody>
      </table>

      <button onClick={handlerGoBack}>Volver</button>
    </div>
  );
}

export default DentistDetail;