import { useParams } from "react-router-dom";

const _lang = {
    py: "python",
    js: "JavaScript"
}

const ListModules = ()=>{
const {lang} = useParams();
    return(
        <>
            <h1>List of all available modules in {_lang[lang]}</h1>
        </>
    )
}

export default ListModules;