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
            <section className="card card--login">
                <section className="card__header">
                    <h2 className="card__title">Ingresar a su cuenta</h2>
                    <span className="card__subtitle">Ingrese a su cuenta de WeatherAPP para acceder a sus favoritos</span>
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
                                value={email}
                                placeholder="usuario@mail.com"
                                onChange={e => setEmail(e.target.value)}/>
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
                                placeholder="••••••"
                                value={password}
                                onChange={e => setPassword(e.target.value)}/>
                        </div>
                        <div className="inputs__container">
                            <p className="singup__text">
                                ¿No tienes una cuenta? <Link to="/register" className="link">Regístrate</Link>
                            </p>
                        </div>
                        
                        <div className="inputs__container">
                            <button type="submit" className="btn btn--login">Ingresar</button>
                        </div>
                    </form>
                </section>
            </section>
    )
}

export default Login
