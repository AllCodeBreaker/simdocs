import { Routes , Route, UNSAFE_getTurboStreamSingleFetchDataStrategy} from "react-router-dom"


const PythonRouter = ()=>{
    return(
        <Routes>
            <Route  path="os" element={<h1>OS</h1>}/>
        
            <Route path="*" element={<h1>404</h1>} />
        </Routes>
    )
}

export default PythonRouter;