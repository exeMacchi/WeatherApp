import { getCity } from "../../services/geoDB_api.js"
import { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate"
import "./Search.css";

const Search = ({ onSearchChange }) => {
    const [ searchValue, setSearchValue ] = useState(null);

    // const handleInputChange = event => {
    //     setSearchValue(event.target.value);
    //     console.log(searchValue);
    // }
    // const handleSearchButton = () => {
    //     getCity(searchValue);
    // }

    const handleInputChange = (searchInput) => {
        setSearchValue(searchInput);
        onSearchChange(searchInput);
    }

    const handleLoadOptions = async (searchInput) => {
        const cities = await getCity(searchInput)
        return {
            options: cities.data.map(city => {
                return {
                    value: `${city.latitude},${city.longitude}`,
                    label: `${city.name}, ${city.region}, ${city.country}`
                }
            })
        }
    }


    return (
        <section className="search__container">
            <AsyncPaginate placeholder="Buscar"
                           // Retraso en la llamada a la API, esto permite al usuario 
                           // tipear la ciudad y que no llame a la API por cada tipeo.
                           debounceTimeout={1000} 
                           value={searchValue}
                           className="search__bar"
                           onChange={handleInputChange}
                           loadOptions={handleLoadOptions}/>
        </section>
    );
}

export default Search;
