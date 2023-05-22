import { useContext } from "react"
import { MyContext } from "../Context/Context"
import { Link } from "react-router-dom"
import '../article/Article.css'

const Article = () => {
  const { data, search } = useContext(MyContext)
  const firtered = data.filter((value) => {

    if (search === '') {
      return value;
    } else if (value.snippet.channelTitle.toLowerCase().includes(search)) {
      return value;
    }
  }).slice(0,20).map((Element, index) => {
    return (
      <div key={index} className="container">

        <Link to={`/${Element.snippet.title}`}><img className="img" src={Element.snippet.thumbnails.default.url} alt="png" width={250} /></Link>
        <h1 className="pt-2 text-1xl font-bold">{
          Element.snippet.title
        }</h1>
        <h2>{Element.snippet.publishTime.slice(0, 10)}</h2>

      </div>)
  });
  return (
    <div className=" ">
        <div className="mb-24 gap-10">
          {firtered}
        </div>

    </div>
  )
}

export default Article