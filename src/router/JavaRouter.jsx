import { Route, Routes } from "react-router-dom"

const JavaRouter = ()=>{
    return(
        <Routes>
            <Route path="spring" element={<h1>Spring Boot</h1>} />
            <Route path="Androidx" element={<h1>Androidx</h1>} />
        
            <Route path="*" element={<h1>404</h1>} />
        </Routes>
    )
}

export default JavaRouter;