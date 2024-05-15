import { useEffect } from "react"
import Search from "../../components/Search/Search";
import Presentation from "../../components/Presentation/Presentation";

const HomePage = ({ setBgClass }) => {

    useEffect(() => {
        setBgClass("default");
    }, [])

    return(
        <>
            <Search/>
            <Presentation/>
        </>
    )
}

export default HomePage;
