const BASE_URL = 'https://wft-geo-db.p.rapidapi.com/v1/geo';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '66a91504a9mshe594c74a4574632p1c25fcjsn386cf51d3aa3',
		'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
	}
};

/**
 * Buscar y devolver la/las ciudades que coincidan con el texto en el buscador.
 * @param {String} searchValue - Texto en el buscador
 * @returns {Array}
 */
const getCity = async (searchValue) => {
    try {
        let city = searchValue;
        let countryCode = "";

        if (searchValue.includes(",")) {
            let advancedSearch = searchValue.split(",");
            city = advancedSearch[0].trim();
            countryCode = await getCountryCode(advancedSearch[1].trim());
        }

        const res = await fetch(`${BASE_URL}/cities?namePrefix=${city}&languageCode=es&minPopulation=50000${countryCode ? `&countryIds=${countryCode}` : ""}`, 
                                 options);
        if (!res.ok) {
            throw new Error("Error: " + res.statusText);
        }
        return await res.json();
    }
    catch (err) {
        console.error(err);
        return;
    }
}

/**
 * Buscar y devolver el código de país en la geoDB API que se utilizará en la búsqueda
 * avanzada.
 * @param {String} country - País
 * @returns {String}
 */
const getCountryCode = async (country) => {
    try {
        const res = await fetch(`${BASE_URL}/countries?namePrefix=${country}&languageCode=es`, options);
        if (!res.ok) {
            throw new Error("Error: " + res.statusText);
        }
        const data = await res.json();
        // Delay de un segundo necesario por el límite de peticiones por segundo.
        await new Promise((resolve) => setTimeout(resolve, 1100)); 
        return data.data[0].code;
    }
    catch (err) {
        console.error(err);
    }
}

export { getCity };
