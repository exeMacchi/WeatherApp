import { doc, getDoc } from "firebase/firestore";
import { db } from "../services/firebase";

const getUserData = async (userId) => {
    try {
        const userDataDoc = doc(db, "users", userId);
        const docSnapshot = await getDoc(userDataDoc);

        if (docSnapshot.exists) {
            return docSnapshot.data();
        }
        else {
            console.log("No existe el docuemnto");
        }
    }
    catch (err) {
        console.error(err);
    }
}


export { getUserData };
