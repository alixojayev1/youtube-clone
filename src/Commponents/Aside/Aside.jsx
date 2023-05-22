import { useContext } from "react"
import { MyContext } from "../Context/Context"
import '../Aside/Aside.css'
const Aside = () => {
  const { data } = useContext(MyContext)
   console.log(data);
  return (
    <div className="container">
      <div className="  grid grid-rows-3 justify-center lg:grid-cols-3 xl:grid-cols-4 sm:grid-cols-2  md:grid-cols-2   grid-cols-1 gap-4 cart pt-10">

        {

          data.slice(0, 20).map((el, index) => (
            <div key={index} className=" ">
              <iframe width="260" height="250" className="gap-2" src={`https://www.youtube.com/embed/${el.id.videoId}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            
            </div>
          ))

        }
      </div>
    </div>
  )
}

export default Aside