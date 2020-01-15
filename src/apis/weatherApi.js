import axios from 'axios';

class WeatherApi {
    getWeather({ latitude, longitude }) {
        return axios.get(`http://api.openweathermap.org/data/2.5/weather?APPID=ebd024465e138374770235a87dbab4b7&lat=${latitude}&lon=${longitude}&units=metric`)
    } 
}

export default new WeatherApi();