const BASE_URL = 'https://wft-geo-db.p.rapidapi.com/v1/geo/cities';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '66a91504a9mshe594c74a4574632p1c25fcjsn386cf51d3aa3',
		'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
	}
};

const getCity = async (searchValue) => {
    try {
        // TODO: buscar el código de país para una búsqueda más eficiente si es que el usuario lo coloca.
        const res = await fetch(`${BASE_URL}?namePrefix=${searchValue}&languageCode=es`, options);
        const data = await res.json();
        return data;
    }
    catch (err) {
        console.error(err);
    }
}

export { getCity };
