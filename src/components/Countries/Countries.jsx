import React, { use, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css'

const Countries = ({countriesPromise}) => {
    const countriesData = use(countriesPromise);
    const countries= countriesData.countries;
    const [visitedCount,setVisitedCount] = useState([]);
    const [visitedFlags,setVisitedFlags] = useState([]);

    const handleVisitedCountry = (country)=>{
        // console.log("country visited");
        const newCountry = [...visitedCount,country];
        setVisitedCount(newCountry);
    }
    
    const handleVisitedFlag=(flags)=>{
        const newFlags = [...visitedFlags,flags];
        setVisitedFlags(newFlags);
    } 
    
    return (
        <div>
            <h1>All the countries:{countries.length}</h1>
            <h3>Visited Country:{visitedCount.length}</h3>
            <h3>Flag Added:{visitedFlags.length}</h3>
            <ol>
                {
                    visitedCount.map((country,index)=><li key={index}>{country?.name?.common}</li>)
                }
            </ol>
            <div className='flag-container'>
                {
                    visitedFlags.map((flag,index)=><img key={index} src={flag}></img>)
                }
            </div>
            <div className='countries'>
                {
                    countries.map(country=><Country key={country.ccn3.ccn3} handleVisitedCountry={handleVisitedCountry} handleVisitedFlag={handleVisitedFlag} country={country}></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;