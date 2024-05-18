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
<section className="login__container card">
                <h1 className="login__title">Registro</h1>

                <form onSubmit={handleOnSubmit} className="login__form-container">
                    <div className="login__email-container">
                        <label htmlFor="login-email"
                               className="login__email-label">
                            Correo electrónico
                        </label>
                        <input id="email"
                               name="email"
                               className="login__input"
                               type="email"
                               placeholder="usuario@mail.com"
                               />
                    </div>

                    <div className="login__pass-container">
                        <label htmlFor="login-pass"
                               className="login__email-label">
                            Contraseña:
                        </label>
                        <input id="pass"
                               name="pass"
                               className="login__input"
                               type="password"
                               placeholder="••••••"
                               />
                    </div>


                    <button type="submit"
                            className="login__submit">Ingresar</button>
                </form>
            </section>
    )
}

export default Register