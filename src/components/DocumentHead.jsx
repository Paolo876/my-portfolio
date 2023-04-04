import { Helmet } from "react-helmet"

//meta = [{name: "", content: ""}]
const DocumentHead = ({ title, description, keyword }) => {
  return (
    <Helmet>
        {title && <title>{title}</title>}
        {description && <meta name="description" content={description}/>}
        {keyword && <meta name="keyword" content={keyword}/>}
    </Helmet>
  )
}

export default DocumentHead