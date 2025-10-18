import { Route, Routes } from "react-router-dom"
import RenderMD from "../component/RenderMD";
import Java from "./../cheatsheet/java.md?raw"

const CheatSheet = () => {
    return (
        <Routes>
            <Route path="java" element={<RenderMD content={Java} />} />
            <Route path="Androidx" element={<h1>Cheatsheet</h1>} />
            <Route path="*" element={<h1>404</h1>} />
        </Routes>
    )
}

export default CheatSheet;