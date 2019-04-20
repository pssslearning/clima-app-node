// Required
const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Dirección de la ciudad para obtener la información del clima',
        demand: true
    }
}).help().argv;

const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

// // argv.direccion
// lugar.getLugarLatLng(argv.direccion)
//     .then((resp) => {
//         console.log('OK: ', resp.lat, resp.lng);
//         clima.getClimaByLatLon(resp.lat, resp.lng)
//             .then((resp) => {
//                 console.log('OK: ', resp.data);
//             }).catch((error) => {
//                 console.log('ERROR CLIMA: ', error);
//             });
//     })
//     .catch((error) => {
//         console.log('ERROR LUGAR: ', error);
//     });

const getInfoClima = async(localidad) => {

    try {
        const coordenadas = await lugar.getLugarLatLng(argv.direccion);
        console.log("Coordenadas: ", coordenadas)
        const datosClima = await clima.getClimaByLatLon(coordenadas.lat, coordenadas.lng);
        return datosClima;
    } catch (error) {
        throw new Error(`Error en GetInfoClima: ${ error }`);
    }
}

getInfoClima(argv.direccion)
    .then((clima) => {
        const datosClima = {
            temperatura: `${clima.temp} ºC`,
            temperatura_minima: `${clima.temp_min} ºC`,
            temperatura_maxima: `${clima.temp_max} ºC`,
            presion: `${clima.pressure} mmHg`,
            humedad: `${clima.humidity} %`
        }
        console.log(`Los datos de clima actual en la dirección de '${argv.direccion}' son:\n`, datosClima);
    })
    .catch((error) => {
        console.log(`No se pudo obtener los datos de clima actual en la dirección de '${argv.direccion}' por la siguiente incidencia:\n${error}.`);
    });