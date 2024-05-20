import { useState } from "react"
import { passwordReset } from "../../utils/auth"
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState('')

    const alertOk = () => {
        Swal.fire({
            title: "El correo electrónico ha sido enviado; ¡Revisa tu correo!",
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
                navigate("/login");
            }
        })
    }

    const alertError = () => {
        Swal.fire({
            title: "El correo ingresado no existe",
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

    const handleOnSubmit = async (e) => {
        e.preventDefault()

        try {
            await passwordReset(email)
            alertOk()
        } catch (error) {
            if (error.code === 'auth/user-not-found') {
                alertError()
                setEmail('')
            }
        }
    }

    return(
        <section className="card card--login">
            <section className="card__header">
                <h2 className="card__title">Olvidé mi contraseña</h2>
                <span className="card__subtitle">Te enviaremos un correo electrónico con instrucciones para restablecer tu contraseña</span>
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
                            placeholder="usuario@mail.com"
                            onChange={(e) => setEmail(e.target.value)}/>
                    </div>

                    <div className="inputs__container">
                        <button type="submit" className="btn btn--login">Enviar correo</button>
                    </div>
                </form>
            </section>
        </section>
    )
}

export default ForgotPassword