import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { addFavorite, getAllFavorites } from "../../utils/firestore"

const Favorites = ({isLogged}) => {
    const navigate = useNavigate()
    const [favorites, setFavorites] = useState([])

    const variable_de_prueba = {
        tag: "TEST_tag",
        location: "TEST_locationx2",
        lat: "TEST_lat",
        lon: "TEST_lon"
    }
    
    const handleAddFavorite = async () => {
        await addFavorite(variable_de_prueba)
    }

    const obtener = async () => {
        await getAllFavorites().then((res) =>{
            console.log('LISTA FAVORITOS: ',res);
        })
    }

    if (isLogged) {
        return(
            <>
                <h1>Favorites</h1>
                <button onClick={handleAddFavorite}>AÑADIR</button>
                <button onClick={obtener}>OBTENER</button>
            </>
        )
    }else{
        navigate('/login')
    }
}

export default Favorites