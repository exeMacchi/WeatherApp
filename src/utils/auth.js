import { auth } from "../services/firebase"
import { sendPasswordResetEmail } from "firebase/auth"


const passwordReset = async (email) => {
    return await sendPasswordResetEmail(auth, email)
}

export { passwordReset }