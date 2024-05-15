import { useNavigate } from "react-router-dom";

const Test = () => {
    const navigate = useNavigate()
    const unaFuncion = () => {
        console.log('VAMOS A REDIRECCIONAR');
        navigate('/testeo')
    }
    return(
        <button onClick={unaFuncion}>TEST</button>
    )
}

export default Test