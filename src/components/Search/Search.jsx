import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AsyncPaginate } from "react-select-async-paginate";
import { getCity } from "../../services/geoDB_api.js";
import "./Search.css";

const Search = () => {
    const [searchValue, setSearchValue] = useState(null);

    const navigate = useNavigate();

    const handleInputChange = (searchInput) => {
        setSearchValue(searchInput);
        navigate(`/weather?lat=${searchInput.lat}&lon=${searchInput.lon}`);
    };

    const handleLoadOptions = async (searchInput) => {
        const cities = await getCity(searchInput);
        return {
            options: cities.data.map((city) => {
                return {
                    lat: city.latitude,
                    lon: city.longitude,
                    label: `${city.name}, ${city.region}, ${city.country}`,
                };
            }),
        };
    };

    return (
        <section className="search__container">
            <AsyncPaginate
                placeholder="Buscar: ciudad, país"
                // Retraso en la llamada a la API, esto permite al usuario
                // tipear la ciudad y que no llame a la API por cada tipeo.
                debounceTimeout={1000}
                value={searchValue}
                className="search__bar"
                onChange={handleInputChange}
                loadOptions={handleLoadOptions}
            />
        </section>
    );
};

export default Search;
