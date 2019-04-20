// Required
const axios = require('axios');


// Axios
const APIWHEATHERBASEURL = 'https://api.openweathermap.org/data/2.5/weather';
const API_KEY = '?appid=a324ca55e90c9aa8f822c4190aeff640';
const UNITS_PARAM = '&units=metric';
const UNITS_LANG = '&lang=es';

const getClimaByLatLon = async(lat, lon) => {

    const instance = axios.create({
        baseURL: APIWHEATHERBASEURL + API_KEY + `&lat=${lat}&lon=${lon}` + UNITS_LANG + UNITS_PARAM,
        timeout: 1000
    });

    try {
        resp = await instance.get();
        return resp.data.main;

    } catch (error) {
        throw new Error(`Error interno Axios en getClimaByLatLon ${error}`);
    }

}

module.exports = {
    getClimaByLatLon
}