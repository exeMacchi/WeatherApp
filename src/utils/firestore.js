import { collection, doc, setDoc, getDocs, getDoc, deleteDoc, updateDoc } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import { db, auth } from "../services/firebase";

const usersCollection = collection(db, 'users')

// AUX: Devuelve un hash segun un string indicado
const generateHash = (str) => {
    let chars = str.split('')
    const hash = chars.reduce((h, c) => (h = c.charCodeAt(0) + (h << 6) + (h << 16) - h), 0)
    return hash.toString()
}

// AUX: Devuelve true si el favorito existe
const existFavorite = async (uid, location) => {
    const locationHash = generateHash(location)
    const res = await getDoc(doc(usersCollection, uid, "favorites", locationHash))
    return (res.exists())
}

// Cuando se registra un usuario, crea su documento correspondiente para sus favoritos
const initializeFavoritesByUser = async () => {
    //Obtiene el UID del usuario
    onAuthStateChanged(auth, (user) => {
        if (user) {
            setDoc(doc(usersCollection, user.uid), {
                uid: user.uid,
                email: user.email
            })
        }
    })
}

// Añade un nuevo favorito
const addFavorite = (favorite_data) => {
    //Obtiene el UID del usuario
    onAuthStateChanged(auth, (user) => {
        favorite_data = {
            ...favorite_data,
            id: generateHash(favorite_data.location) // Genera un hash para usarlo como ID con el nombre de la locacion
        }
        setDoc(doc(usersCollection, user.uid, "favorites", favorite_data.id), {
            id: favorite_data.id,
            tag: favorite_data.tag,
            location: favorite_data.location,
            lat: favorite_data.lat,
            lon: favorite_data.lon,
        })
    })
}

// Actualiza un favorito
const updateFavorite = (uid, favId, tag) => {
    try {
        updateDoc(doc(usersCollection, uid, "favorites", favId), {
            tag: tag
        });
    } catch (error) {
        console.log("Error al actualizar:", error)
    }
}

// Elimina un favorito
const removeFavorite = async (uid, favId) => {
    try {
        await deleteDoc(doc(usersCollection, uid, "favorites", favId))
    } catch (error) {
        console.log("Error al eliminar:", error)
    }
}

//Obtiene el listado de todos los favoritos
const getAllFavorites = async (uid) => {
    const favorites = await getDocs(collection(db, 'users', uid, 'favorites'))
    let listFav = []
    favorites.forEach((doc) => listFav.push(doc.data()))
    return listFav
}

export {
    generateHash,
    getAllFavorites,
    existFavorite,
    updateFavorite,
    removeFavorite,
    initializeFavoritesByUser,
    addFavorite
}
