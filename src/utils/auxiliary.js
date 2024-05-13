/**
 * Devolver un texto de clima correspondiente con el código que viene con el ícono de la weatherAPI.
 * @param {Number} weatherCode - Código del ícono de tiempo que viene con la weatherAPI
 * @param {Number} hour - Hora actual
 * @returns 
 */
const getWeatherIcon = (weatherCode, hour) => {
    switch (weatherCode) {
        case 1000:
            return (hour >= 6 && hour <= 18) ? "sunny" : "clear_night";

        case 1003:
            return (hour >= 6 && hour <= 18) ? "partly_cloudy_day" : "partly_cloudy_night";

        case 1006: case 1009:
            return "cloud";

        case 1030: case 1135: case 1147:
            return "foggy";

        case 1063: case 1066: case 1069: case 1072:
            return "weather_mix";

        case 1168: case 1171: case 1114: case 1117: case 1198: case 1201: 
        case 1210: case 1213: case 1216: case 1219: case 1222: case 1225:
        case 1237: case 1255: case 1258: case 1261: case 1264:
            return "weather_snowy";

        case 1150: case 1153: case 1180: case 1183: case 1186: case 1189:
        case 1192: case 1195: case 1204: case 1207: case 1240: case 1243:
        case 1246: case 1249: case 1252:
            return "rainy";
        
        case 1087: case 1273: case 1276: case 1279: case 1282:
            return "thunderstorm";
        
        default:
            return "routine";
    }
}

export { getWeatherIcon }
