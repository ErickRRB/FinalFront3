import React, { useEffect }  from "react";
import Card from "../Common/Card";


const Home = () => {
    const [dentists, setDentists] = React.useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json())
            .then((data) => setDentists(data))
            .catch((error) => console.log('Hubo un error al recibir los dentistas: ' + error));
    }, []);

    return (
        <div className="container">
            <div className="row">
                {dentists.map((dentist) => (
                    <div className="col-12 col-md-6 col-lg-4 mb-3" key={dentist.id}>
                        <Card
                            name={dentist.name}
                            username={dentist.username}
                            email={dentist.email}
                            phone={dentist.phone}
                            website={dentist.website}
                        />
                    </div>
                ))}
            </div>
        </div>
    )


}


export default Home;