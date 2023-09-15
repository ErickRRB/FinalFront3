import React, { useContext } from "react";
import Card from "../Common/Card";
import { ContextGlobal } from "../utils/global.context";

const Home = () => {

    const { state } = useContext(ContextGlobal)

    return (
        
        <div className="container">
            <h1>Home</h1>
            <div className="card-grid">
                {state.data.map((dentist) => (
                    <div key={dentist.id}>
                        <Card {...dentist}/>
                    </div>
                ))}
            </div>
         </div>
    )
}

export default Home;