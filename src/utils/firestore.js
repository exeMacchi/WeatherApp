import { collection, doc, setDoc, getDocs } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import { db, auth } from "../services/firebase";

const usersCollection = collection(db,'users')

// AUX: Devuelve un hash segun un string indicado
const generateHash = (str) => {
    let chars = str.split('')
    const hash = chars.reduce((h, c) => (h = c.charCodeAt(0) + (h << 6) + (h << 16) -h),0)
    return hash.toString()
}

// Cuando se registra un usuario, crea su documento correspondiente para sus favoritos
const initializeFavoritesByUser = async () => {
    //Obtiene el UID del usuario
    onAuthStateChanged(auth, (user) => {
        if (user) {
            setDoc(doc(usersCollection,user.uid),{
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
        setDoc(doc(usersCollection,user.uid,"favorites",favorite_data.id),{
            id: favorite_data.id,
            tag: favorite_data.tag,
            location: favorite_data.location,
            lat: favorite_data.lat,
            lon: favorite_data.lon,
        }).then(() => {
            console.log('Se añadio nuevo favorito');
        })
    })
}

//Obtiene el listado de todos los favoritos
const getAllFavorites = async (uid) => {
    const favorites = await getDocs(collection(db,'users',uid,'favorites'))
    let listFav = []
    favorites.forEach((doc) => listFav.push(doc.data()) )
    return listFav
}

/* 

res.docs.map ((doc) => (
                {
                    ...doc.data(),
                    id:doc.id
                }
            ))

*/

export { 
    generateHash,
    getAllFavorites,
    initializeFavoritesByUser,
    addFavorite
}
