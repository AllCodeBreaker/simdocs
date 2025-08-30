import { useParams } from "react-router-dom"

const CheatSheet = ()=>{
    const {lang, module} = useParams();
    return(
        <>
            {module} CheatSheet of {lang} language
        </>
    )
}
export default CheatSheet;