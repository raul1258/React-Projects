import React, {useState, useEffect} from 'react'
import WeatherData from './weatherdata';

function Weather() {
        const [searchInput, setSearchInput] = useState();
        const [searchResults, setSearchResults]  = useState([]);
        const [currentCity, setCurrentCity] = useState(null);

       function searchBtnHandler() {
            fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${searchInput}&limit=5&appid=aff6f1194660ee7643d426b59c2f2742`)
            .then(res => res.json())
            .then(data => {setSearchResults(data)
            setSearchInput("");
                
       })
        }

  return (
    <div>
      <h1 className='text-center' >Weather API</h1>
      <WeatherData currentCity={currentCity}/>
      <label className='form-label' htmlFor='location'>Enter Location</label>
            <input type='text' id='location' className='form-control' value={searchInput} onChange={(e) => setSearchInput(e.target.value)}/>
            <button className='d-block btn btn-primary m-auto my-2' onClick={searchBtnHandler}>Search</button>

            {/*  search results here  */}
            <ul className='list-group'>
                {searchResults.map((city,i) => 
                    <li key={i} className='btn btn-secondary list-group-item' onClick={() => setCurrentCity(city)}>
                        {city.name},{city.country}
                    </li>
                    )}
            </ul>

    </div>
  )
}

export default Weather
