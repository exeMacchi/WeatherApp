const UserLocation = ({handleOnSearchChange}) => {

    const handlerClick = () => {
        navigator.geolocation.getCurrentPosition(async position => {
            const latlong = `${position.coords.latitude},${position.coords.longitude}`
            handleOnSearchChange({value: latlong})
        })
    }

    return(
        <button onClick={handlerClick}>Obtener ubicacion</button>
    )
}

export default UserLocation