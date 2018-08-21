const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');
const colors = require('colors');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Dirección de la ciudad para obtener el clima',
        demand: true
    }
}).argv;


let getInfo = async(direccion) => {

    try {

        let coors = await lugar.getLugarLatLng(direccion);
        let temp = await clima.getClima(coors.lat, coors.lng);
        console.log('===========Dirección ============'.green);
        return `El clima en ${ coors.direccion.bold.blue } es de ${ temp }°C`;

    } catch (e) {
        console.log('=============Error!!!============'.green);
        return `No se pudo determinar el clima en ${ direccion.bold.blue  }`;
    }

}



getInfo(argv.direccion)
    .then(mensaje => console.log(mensaje))
    .catch(e => console.log(e));