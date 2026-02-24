import React, { useState } from 'react';
import './Country.css'

const Country = ({country,handleVisitedCountry}) => {
    // console.log(country?.flags?.flags?.png);
    const [visited,setVisited] = useState(false);

    const handleVisited =()=>{
        // if(visited){
        //     setVisited(false)
        // }else{
        //     setVisited(true)
        // }

        visited ? setVisited(false) : setVisited(true);
        handleVisitedCountry(country)
        // setVis(ited(!visited)
    }
    
    return (
        <div className={`country ${visited && 'visited-countries'}`}>
            <img src={country?.flags?.flags?.png} alt={country?.flags?.flags?.alt} />
            <h3>Name:{country?.name?.common}</h3>
            <h5>Area:{country.area.area}</h5>
            <h5>Population:{country.population.population} {country.population.population > 3000000 ? "Big country" : "Small country"}</h5>
            <button onClick={handleVisited} style={{padding:"10px", borderRadius:"10px", cursor:'pointer'}}>{visited?'visited' : 'Not visited'}</button>
        </div>
    );
};

export default Country;