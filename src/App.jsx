import { BrowserRouter } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import "./App.css";

function App() {
    return (
        <BrowserRouter>
            <LandingPage />
        </BrowserRouter>
    );
}

export default App;
