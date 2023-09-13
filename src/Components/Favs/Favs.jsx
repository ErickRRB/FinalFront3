import React, { useState, useEffect } from 'react';
import Card from '../Common/Card';

function Favs() {
  const [favDentists, setFavDentists] = useState([]);

  useEffect(() => {
    const storedFavs = localStorage.getItem('favs');
    if (storedFavs) {
      setFavDentists(JSON.parse(storedFavs));
    }
  }, []);

  return (
    <div>
      {favDentists.map((dentist) => (
        <Card key={dentist.id} {...dentist} />
      ))}

    </div>
  );
}

export default Favs;