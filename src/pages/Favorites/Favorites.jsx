import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { addFavorite, getAllFavorites } from "../../utils/firestore"
import { auth } from "../../services/firebase"
import { onAuthStateChanged } from "firebase/auth"

const Favorites = ({isLogged}) => {
    const navigate = useNavigate()
    const [favorites, setFavorites] = useState([])

    const variable_de_prueba = {
        tag: "TEST_tag",
        location: "TEST_locationxsaaa",
        lat: "TEST_lat",
        lon: "TEST_lon"
    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            getAllFavorites(user.uid).then((res) =>{
                setFavorites(res)
            })
        })
    },[])

    if (isLogged) {
        return(
            <div className="card">
                <h1>Favorites</h1>
                <ul>
                    {favorites.map( (fav) => (
                        <li key={fav.id}>{fav.location}</li>
                    ) )}
                </ul>
            </div>
        )
    }else{
        navigate('/login')
    }
}

export default Favorites