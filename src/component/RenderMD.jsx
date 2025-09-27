import ReactMarkdown from "react-markdown";
import content from "./../content/java.md?raw";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";

const RenderMD = ()=>{
    return(
        <>
            <div>
                <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={rehypeRaw}>
                    {content}
                </ReactMarkdown>
            </div>
        </>
    )
}

export default RenderMD;