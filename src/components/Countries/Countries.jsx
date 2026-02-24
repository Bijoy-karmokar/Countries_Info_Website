import React, { use, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css'

const Countries = ({countriesPromise}) => {
    const countriesData = use(countriesPromise);
    const countries= countriesData.countries;
    const [visitedCount,setVisitedCount] = useState([]);
    const handleVisitedCountry = (country)=>{
        // console.log("country visited");
        const newCountry = [...visitedCount,country];
        setVisitedCount(newCountry);
    }
    
    return (
        <div>
            <h1>All the countries:{countries.length}</h1>
            <h3>Visited Country:{visitedCount.length}</h3>
            <div className='countries'>
                {
                    countries.map(country=><Country key={country.ccn3.ccn3} handleVisitedCountry={handleVisitedCountry} country={country}></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;