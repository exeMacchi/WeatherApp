import { createUserWithEmailAndPassword } from "firebase/auth"
import { auth } from "../../services/firebase"
import { initializeFavoritesByUser } from "../../utils/firestore"
import { useNavigate } from "react-router-dom"

const Register = () => {

    const navigate = useNavigate()

    const handleOnSubmit = (e) => {
        e.preventDefault()
        const dataFrom = new FormData(e.target)
        const data = {
            email: dataFrom.get("email"),
            pass: dataFrom.get("pass")
        }
        createUserWithEmailAndPassword(auth, data.email, data.pass)
        .then((userCredential) => {
            initializeFavoritesByUser(userCredential.user.uid)
            navigate("/favorites")
        })
    }

    return(
        <section className="card card--login">
                <section className="card__header">
                    <h2 className="card__title">Registrar</h2>
                    <span className="card__subtitle">Registrar una cuenta en WeatherAPP para guardar sus favoritos</span>
                </section>

                <section className="card__body">
                    <form onSubmit={handleOnSubmit} className="">
                        <div className="inputs__container">
                            <label htmlFor="label"
                                className="label">
                                Correo electrónico
                            </label>
                            <input id="login-email"
                                name="user-email"
                                className="input input--text"
                                type="email"
                                placeholder="usuario@mail.com"/>
                        </div>

                        <div className="inputs__container">
                            <label htmlFor="login-pass"
                                className="label">
                                Contraseña:
                            </label>
                            <input id="login-pass"
                                name="user-pass"
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
    )
}

export default Register