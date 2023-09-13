import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

function DentistDetail({ dentists }) {

  const { id } = useParams();
  const dentist = dentists.find(d => d.id === id);

 /*  const getDentist = async()=>{
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    const data = await res.json()
    
  }

  useEffect(()=>{
    getDentist()
  }) */
  


  return (
    <div>
      {/* Mostrar detalles del dentista usando el objeto dentist */}
      <h2>Detalles del dentista: {dentist.id}</h2>
      <table>
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
      </table>
    </div>
  );
}

export default DentistDetail;