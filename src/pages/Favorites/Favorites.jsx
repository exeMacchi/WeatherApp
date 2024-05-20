import Swal from "sweetalert2";
import { Icon } from "@iconify-icon/react/dist/iconify.js";
import { Fade } from "react-awesome-reveal";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
    getAllFavorites,
    removeFavorite,
    updateFavorite,
} from "../../utils/firestore";
import { auth } from "../../services/firebase";
import { onAuthStateChanged } from "firebase/auth";
import "./Favorites.css";

const Favorites = ({ setBgClass, isLogged }) => {
    const navigate = useNavigate();
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        setBgClass("default");
    }, [])

    const handleCurrentLocation = (lat, lon) => {
        navigate(`/weather?lat=${lat}&lon=${lon}`);
    };

    // Handler para borrar el favorito indicado
    const handleDelete = async (favId, favTag) => {
        Swal.fire({
            title: `Eliminar ${favTag} de tus favoritos?`,
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Confirmar",
            buttonsStyling: false,
            customClass: {
                input: "input input--swal",
                confirmButton: "btn btn--swal",
                closeButton: "btn btn--swal",
                cancelButton: "btn btn--swal btn--swal--cancel",
            },
            showClass: {
                popup: `
                                                animate__animated
                                                animate__fadeInUp
                                                animate__faster
                                        `,
            },
            hideClass: {
                popup: `
                                                animate__animated
                                                animate__fadeOutDown
                                                animate__faster
                                        `,
            },
        }).then((result) => {
            if (result.isConfirmed) {
                try {
                    removeFavorite(isLogged.uid, favId);
                    Swal.fire({
                        title: "Eliminado!",
                        icon: "success",
                        confirmButtonText: "Confirmar",
                        buttonsStyling: false,
                        customClass: {
                            input: "input input--swal",
                            confirmButton: "btn btn--swal",
                            closeButton: "btn btn--swal",
                            cancelButton: "btn btn--swal btn--swal--cancel",
                        },
                        showClass: {
                            popup: `
                            	animate__animated
                                animate__fadeInUp
                                animate__faster
                        `},
                        hideClass: {
                            popup: `
                                animate__animated
                                animate__fadeOutDown
                                animate__faster`},
                    });
                    updaterList();
                } catch (error) { 
                    Swal.fire({
                        title: "Error",
                        text: error.message,
                        icon: "error",
                        confirmButtonText: "Confirmar",
                        buttonsStyling: false,
                        customClass: {
                            input: "input input--swal",
                            confirmButton: "btn btn--swal",
                            closeButton: "btn btn--swal",
                            cancelButton: "btn btn--swal btn--swal--cancel",
                        },
                        showClass: {
                            popup: `
								animate__animated
                                animate__fadeInUp
                                animate__faster`,
                        },
                        hideClass: {
                            popup: `
                                                animate__animated
                                                animate__fadeOutDown
                                                animate__faster
                                        `,
                        },
                    });
                }
            }
        });
    };

    // Handler para actualizar el tag name del favorito indicado
    const handleUpdate = async (favId, favTag) => {
        Swal.fire({
            title: "Cambiar nombre de favorito",
            input: "text",
            inputPlaceholder: favTag,
            inputAttributes: {
                autocapitalize: "off",
            },
            showCancelButton: true,
            confirmButtonText: "Confirmar",
            showLoaderOnConfirm: true,
            buttonsStyling: false,
            customClass: {
                input: "input input--swal",
                confirmButton: "btn btn--swal",
                cancelButton: "btn btn--swal btn--swal--cancel",
            },
            showClass: {
                popup: `
                                                animate__animated
                                                animate__fadeInUp
                                                animate__faster
                                        `,
            },
            hideClass: {
                popup: `
                                                animate__animated
                                                animate__fadeOutDown
                                                animate__faster
                                        `,
            },
            preConfirm: async (tag) => {
                try {
                    if (tag.length < 3) {
                        Swal.fire({
                            title: "El nombre de favorito debe tener al menos 3 caracteres",
                            icon: "error",
                        });
                        return false;
                    } else {
                        updateFavorite(isLogged.uid, favId, tag); //actualiza el favorito si el tag es correcto
                    }
                } catch (error) {
                    Swal.showValidationMessage(`Request failed: ${error}`);
                }
            },
            allowOutsideClick: () => !Swal.isLoading(),
            // Mensaje de confirmacion
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: `Se actualizó el favorito`,
                });
                updaterList();
            }
        });
    };

    // Actualiza la lista de favoritos
    const updaterList = async () => {
        onAuthStateChanged(auth, (user) => {
            getAllFavorites(user.uid).then((res) => {
                setFavorites(res);
            });
        });
    };

    useEffect(() => {
        updaterList();
    }, [favorites]);

    if (isLogged) {
        return (
            <div className="card">
                <div className="card__header">
                    <h1 className="card__title">Favoritos</h1>
                    <span className="card__subtitle">
                        Aqui se listan tus ciudades favoritas
                    </span>
                </div>
                <div className="card__body">
                    <ul className="fav__ul">
                        {favorites.map((fav) => (
                            <li key={fav.id} className="fav__li">
                                <Fade cascade={true} triggerOnce={true} damping={0.5}>
                                    <div className="fav__text-container">
                                        <p className="fav__tag text-dg-primary">{fav.tag}</p>
                                        <p className="fav__location">{fav.location}</p>
                                        <div className="fav__data">
                                            <p>
                                                Latitud: <span>{fav.lat}</span> - Longitud:{" "}
                                                <span>{fav.lon}</span>
                                            </p>
                                        </div>
                                    </div>

                                    <div className="li__buttons-container">
                                        <button
                                            className="btn-rounded"
                                            onClick={() => handleCurrentLocation(fav.lat, fav.lon)}
                                        >
                                            <Icon icon="tabler:map-pin" />
                                        </button>
                                        <button
                                            className="btn-rounded"
                                            onClick={() => handleUpdate(fav.id, fav.tag)}
                                        >
                                            <Icon icon="tabler:edit" />
                                        </button>
                                        <button
                                            className="btn-rounded"
                                            onClick={() => handleDelete(fav.id, fav.tag)}
                                        >
                                            <Icon icon="tabler:trash" />
                                        </button>
                                    </div>
                                </Fade>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        );
    } else {
        navigate("/login");
    }
};

export default Favorites;
