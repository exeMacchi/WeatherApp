import { createUserWithEmailAndPassword } from "firebase/auth"
import { auth } from "../../services/firebase"
import { initializeFavoritesByUser } from "../../utils/firestore"
import { useNavigate } from "react-router-dom"
import Swal from "sweetalert2";

const Register = ({setIsLogged}) => {
    const navigate = useNavigate()

    const alertOk = () => {
        Swal.fire({
            title: "¡Se ha registrado con éxito!",
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
        }).then((result) => {
            if (result.isConfirmed) {
                navigate("/favorites")
            }
        })
    }

    const alertError = (error) => {
        Swal.fire({
            title: `ERROR: ${error}`,
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
                    animate__faster
            `},
            hideClass: {
                popup: `
                    animate__animated
                    animate__fadeOutDown
                    animate__faster`},
        });
    }

    const handleOnSubmit = (e) => {
        e.preventDefault()
        const dataFrom = new FormData(e.target)
        const data = {
            email: dataFrom.get("email"),
            pass: dataFrom.get("pass")
        }

        createUserWithEmailAndPassword(auth, data.email, data.pass)
        .then((userCredential) => {
            console.log(userCredential);
            setIsLogged({logged: true, uid: userCredential.user.uid});
            initializeFavoritesByUser(userCredential.user.uid)
            alertOk()
        }).catch((error) => {
            alertError(error.message)
        })
    }

    return (
        <div className="sub-container">
            <section className="card card--login">
                <section className="card__header">
                    <h2 className="card__title text-dg-primary">
                        Registrar
                    </h2>
                    <p className="card__subtitle">
                        Registrar una cuenta en WeatherAPP para guardar sus 
                        favoritos.
                    </p>
                </section>

                <section className="card__body">
                    <form onSubmit={handleOnSubmit} className="">
                        <div className="inputs__container">
                            <label htmlFor="label"
                                className="label">
                                Correo electrónico
                            </label>
                            <input id="email"
                                name="email"
                                className="input input--text"
                                type="email"
                                placeholder="usuario@mail.com"/>
                        </div>

                        <div className="inputs__container">
                            <label htmlFor="login-pass"
                                className="label">
                                Contraseña:
                            </label>
                            <input id="pass"
                                name="pass"
                                className="input input--text"
                                type="password"
                                placeholder="••••••"/>
                        </div>

                        <div className="inputs__container">
                            <button type="submit" className="btn btn--login">Registrarse</button>
                        </div>
                    </form>
                </section>
            </section>
        </div>
    )
}

export default Register
