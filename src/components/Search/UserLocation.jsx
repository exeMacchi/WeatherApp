import { useNavigate } from "react-router-dom"

const UserLocation = () => {
    const navigate = useNavigate()

    const handlerClick = () => {
        navigator.geolocation.getCurrentPosition(async position => {
            navigate(`weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}`)
        })
    }

    return(
        <button onClick={handlerClick}>Obtener ubicacion</button>
    )
}

export default UserLocation