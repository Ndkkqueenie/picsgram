import React from 'react';
import { Link } from 'react-router-dom';

class Brand extends React.Component{

    render(){
        return(
            <h1 className="brand">
                <Link to="/home">Picsgram</Link>
            </h1>
        )
    }
}

export default Brand;

