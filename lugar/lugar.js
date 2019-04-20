// Required
const axios = require('axios');

const getLugarLatLng = async(direccionSolicitada) => {

    const encodedUrl = encodeURI(direccionSolicitada);
    console.log(encodedUrl);

    // Axios
    const APIGEOBASEURL = 'https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php';

    const instance = axios.create({
        baseURL: APIGEOBASEURL + `?location=${encodedUrl}`,
        timeout: 1000,
        headers: {
            'X-RapidAPI-Host': 'devru-latitude-longitude-find-v1.p.rapidapi.com',
            'X-RapidAPI-Key': '56c10122a1msh2f0d51520ec3252p115e03jsn168d2b95cc14'
        }
    });


    let resp = null;

    try {
        resp = await instance.get();

    } catch (error) {
        throw new Error(`Error interno Axios en getLugarLatLng ${error}`);
    }

    if (resp.data.Results.length === 0) {
        throw new Error(`Error en getLugarLatLng: No hay resultados para ${direccionSolicitada}.`);
    }

    // console.log("RESPUESTA", resp);
    // console.log("DATA", resp.data);
    const data = resp.data.Results[0];
    const direccion = data.name;
    const lat = data.lat;
    const lng = data.lon;

    console.log("DATOS:", direccion, lat, lng);
    return {
        direccion,
        lat,
        lng
    }

}

module.exports = {
    getLugarLatLng
}