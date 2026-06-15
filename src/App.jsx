import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/home";
import Teste from "./Pages/paginaTeste";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/hello" element={<Teste />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
