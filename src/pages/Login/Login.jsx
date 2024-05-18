import { useState, useEffect } from "react"
import { useNavigate, Link } from "react-router-dom";
import { auth } from "../../services/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

import "./Login.css";

const Login = ({ setBgClass, setIsLogged }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        setBgClass("default");
    }, [])

    const handleOnSubmit = async (e) => {
        try {
            e.preventDefault();
            const userCredentials = await signInWithEmailAndPassword(auth, email, password);
            if (userCredentials) {
                setIsLogged({logged: true, uid: userCredentials.user.uid});
                navigate(`/favorites`)
            }
        }
        catch (err) {
            console.error(err);
            return;
        }
    }

    return(
            <section className="login__container">
                <h1 className="login__title">Ingresar a su cuenta</h1>
                <form onSubmit={handleOnSubmit} className="login__form-container">
                    <div className="login__email-container">
                        <label htmlFor="login-email"
                               className="login__email-label">
                            Correo electrónico
                        </label>
                        <input id="login-email"
                               name="user-email"
                               className="login__input"
                               type="email"
                               value={email}
                               placeholder="usuario@mail.com"
                               onChange={e => setEmail(e.target.value)}/>
                    </div>

                    <div className="login__pass-container">
                        <label htmlFor="login-pass"
                               className="login__email-label">
                            Contraseña:
                        </label>
                        <input id="login-pass"
                               name="user-pass"
                               className="login__input"
                               type="password"
                               placeholder="••••••"
                               value={password}
                               onChange={e => setPassword(e.target.value)}/>
                    </div>
                    <p className="login__signup">
                        ¿No tienes una cuenta? <Link to="/register">Regístrate</Link>
                    </p>
                    
                    <button type="submit"
                            className="login__submit">Ingresar</button>
                </form>
            </section>
    )
}

export default Login
