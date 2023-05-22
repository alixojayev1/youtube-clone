import { useContext } from "react"
import { MyContext } from "./Context/Context"
import { Link } from "react-router-dom"
import '../Commponents/Card.css'
import cardImg from '../assets/imge/Oval.png'
import cardImg1 from '../assets/imge/oval2.png'
const Cards = () => {
  const { data, search } = useContext(MyContext)
  const firtered = data.filter((value) => {

    if (search === '') {
      return value;
    } else if (value.snippet.channelTitle.toLowerCase().includes(search.toLowerCase())) {
      return value;
    }
  }).map((Element, index) => {
    return (
      <div key={index} className="">

        <Link to={`/${Element.snippet.title}`}><img className="rounded  img" src={Element.snippet.thumbnails.default.url} alt="png" width={250} /></Link>
        <h1 className="pt-2 text-1xl font-bold">{
          Element.snippet.title
        }</h1>
        <h2>{Element.snippet.publishTime.slice(0, 10)}</h2>
 
      </div>)
  });
  return (
    <div className="container">
      <div className="block-card ">
        <div className="flex items-center pb-4 gap-2">
          <img className="block" src={cardImg} alt="img" />
          <h1 className="text-2xl font-bold">Dollie Blair</h1>
        </div>
        <div className="scrol flex  mb-24 gap-10">

          {firtered}
        </div>
        <h1 className="pb-4 text-2xl font-bold">Recommended</h1>
        <div className="scrol flex mb-24 gap-10">
          {firtered}
        </div>
        <div className="flex items-center pb-4 gap-2">
          <img className="block" src={cardImg1} alt="img" />
          <h1 className="text-2xl font-bold">Food & Drink</h1>
        </div>
        <div className="scrol flex mb-24 gap-10">
          {firtered}
        </div>
      </div>
    </div>
  )
}

export default Cards