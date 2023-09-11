import React from 'react';
import { useParams } from 'react-router-dom';

function DentistDetail({ dentists }) {
  const { id } = useParams();
  const dentist = dentists.find(d => d.id === id);

  return (
    <div>
      {/* Mostrar detalles del dentista usando el objeto dentist */}
    </div>
  );
}

export default DentistDetail;