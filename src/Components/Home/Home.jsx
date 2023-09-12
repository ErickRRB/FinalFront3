import React, { useContext } from "react";
import Card from "../Common/Card";
import { ContextGlobal } from "../utils/global.context";

const Home = () => {

    const { state } = useContext(ContextGlobal)

    return (
        <div className="container">
            <div className="row">
                {state.data.map((dentist) => (
                    <div className="card-grid" key={dentist.id}>
                        <Card {...dentist}/>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Home;