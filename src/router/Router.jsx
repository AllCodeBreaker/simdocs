import {Routes, Route } from "react-router-dom"


import Home from "../component/Home.jsx"
import PythonRouter from "./PythonRouter.jsx";
import JavaRouter from "./JavaRouter.jsx";


const Router = ()=>{
    return(
<Routes>
            <Route path="/" element={<Home />} />
            {/* Python handler */}
            <Route path="py/*" element={<PythonRouter />} />

            <Route path="java/*" element={<JavaRouter />} />


            <Route path="*" element={<h1>404</h1>} />
        
        </Routes>
    
    )
        }

export default Router;