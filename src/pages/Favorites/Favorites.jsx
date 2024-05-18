import Swal from 'sweetalert2'
import { Icon } from "@iconify-icon/react/dist/iconify.js"
import { Fade } from "react-awesome-reveal"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { getAllFavorites, removeFavorite, updateFavorite } from "../../utils/firestore"
import { auth } from "../../services/firebase"
import { onAuthStateChanged } from "firebase/auth"
import './Favorites.css'

const Favorites = ({isLogged}) => {
    const navigate = useNavigate()
    const [favorites, setFavorites] = useState([])

    const handleCurrentLocation = (lat, lon) => {
        navigate(`/weather?lat=${lat}&lon=${lon}`)
    }

    // Handler para borrar el favorito indicado
    const handleDelete = async (favId) => {
        Swal.fire({
            title: "Estas seguro que quieres eliminar?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Confirmar"
          }).then((result) => {
            if (result.isConfirmed) {
                try {
                    removeFavorite(isLogged.uid, favId)
                    Swal.fire({
                      title: "Deleted!",
                      text: "Your file has been deleted.",
                      icon: "success"
                    });
                    updaterList()
                } catch (error) {
                    Swal.fire({
                      title: "Error",
                      text: error.message,
                      icon: "error"
                    });
                }
            }
          });
        }

        // Handler para actualizar el tag name del favorito indicado
        const handleUpdate = async (favId) => {
            Swal.fire({
                title: "Cambiar nombre de favorito",
                input: "text",
                inputAttributes: {
                  autocapitalize: "off"
                },
                showCancelButton: true,
                confirmButtonText: "Confirmar",
                showLoaderOnConfirm: true,
                preConfirm: async (tag) => {
                  try {
                    if (tag.length < 3) {
                        Swal.fire({
                            title: "El nombre de favorito debe tener al menos 3 caracteres",
                            icon: "error"
                        })
                        return false
                    }else{
                        updateFavorite(isLogged.uid, favId, tag) //actualiza el favorito si el tag es correcto
                    }
                  } catch (error) {
                    Swal.showValidationMessage(`Request failed: ${error}`);
                  }
                },
                allowOutsideClick: () => !Swal.isLoading()
                // Mensaje de confirmacion
              }).then((result) => {
                if (result.isConfirmed) {
                  Swal.fire({
                    title: `Se actualizó el favorito`,
                  });
                  updaterList()
                }
              });
        }

        // Actualiza la lista de favoritos
        const updaterList = async () => {
            onAuthStateChanged(auth, (user) => {
                getAllFavorites(user.uid).then((res) =>{
                    setFavorites(res)
                })
            })
        }


    useEffect(() => {
        updaterList()
    },[favorites])

    if (isLogged) {
        return(
            <div className="card">
                <h1 className='card-title'>Favoritos</h1>
                <span>Aqui se listan los favoritos que has creado</span>
                <ul className='fav__ul'>
                    {favorites.map( (fav) => (
                        <Fade cascade={true}
                        triggerOnce={true}
                        damping={0.5}>

                        <li key={fav.id} className='fav__li'>
                            <div className='fav__text-container'>
                                <p className='fav__tag'>{fav.tag}</p>
                                <p className='fav__location'>{fav.location}</p>
                                <div className='fav__data'>
                                    <p>Latitud: <span>{fav.lat}</span> - Longitud: <span>{fav.lon}</span></p> 
                                </div>
                            </div>
                            <div className='li__buttons-container'>
                                <button className='btn--fav' onClick={() => (handleCurrentLocation(fav.lat, fav.lon))}><Icon icon="tabler:map-pin" /></button>
                                <button className='btn--fav' onClick={() => (handleUpdate(fav.id))}><Icon icon="tabler:edit" /></button>
                                <button className='btn--fav' onClick={() => (handleDelete(fav.id))}><Icon icon="tabler:trash" /></button>
                            </div>
                        </li>
                        </Fade>
                    ) )}
                </ul>
            </div>
        )
    }else{
        navigate('/login')
    }
}

export default Favorites