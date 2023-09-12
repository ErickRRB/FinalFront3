import React, { useContext, useEffect } from "react";
import Card from "../Common/Card";
import { ContextGlobal } from "../utils/global.context";
import { Link } from "react-router-dom";


const Home = () => {

    const { state } = useContext(ContextGlobal)

    return (
        <div className="container">
            <div className="row">
                {state.data.map((dentist) => (
                    <Link to={`/dentist/${dentist.id}`} className="card-grid" key={dentist.id}>
                        <Card {...dentist}/>
                    </Link>
                ))}
            </div>
        </div>
    )


}


export default Home;