import React, { useContext, useEffect } from "react";
import Card from "../Common/Card";
import { ContextGlobal } from "../utils/global.context";


const Home = () => {
    //const [dentists, setDentists] = React.useState([]);
    const { state } = useContext(ContextGlobal)
    // useEffect(() => {
    //     fetch('https://jsonplaceholder.typicode.com/users')
    //         .then((response) => response.json())
    //         .then((data) => setDentists(data))
    //         .catch((error) => console.log('Hubo un error al recibir los dentistas: ' + error));
    // }, []);

    return (
        <div className="container">
            <div className="row">
                {state.data.map((dentist) => (
                    <div className="card-grid" key={dentist.id}>
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