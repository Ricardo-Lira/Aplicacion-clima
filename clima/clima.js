const axios = require('axios');


const getClima = async(lat, lng) => {

    let resp = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lng }&units=metric&appid=81b4581df61d2ac73538def9b21bd945`)

    return resp.data.main.temp;
}


module.exports = {
    getClima
}