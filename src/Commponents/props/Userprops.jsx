import { useContext, useState } from "react";
import { MyContext } from "../Context/Context";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { AiFillLike } from 'react-icons/ai'
import { AiFillDislike } from 'react-icons/ai'
import { IoIosShareAlt } from 'react-icons/io'
import Article from "../article/Article";
import '../props/Userprops.css'


const Userprops = () => {
  const { title } = useParams()
  const [count, setCount] = useState(1000);
  const [sumbmit, setSubmit] = useState(false)

  const mySubmit = () => {
    setSubmit(!sumbmit)
  }

  const myCountplus = () => {
    setCount(count + 1);
  }
  const myCountminus = () => {
    setCount(count - 1);
  }
  const { data, search } = useContext(MyContext)
  const firtered = data.filter((value) => {

    if (search === '') {
      return value;
    } else if (value.snippet.channelTitle.toLowerCase().includes(search)) {
      return value;
    }
  }).slice(0, 20).map((Element, index) => {
    return (
      <div key={index} className="">

        <Link to={`/${Element.snippet.title}`}><img className="  img" src={Element.snippet.thumbnails.default.url} alt="png" width={250} /></Link>
        <h1 className="pt-2 text-1xl font-bold">{
          Element.snippet.title
        }</h1>
        <h2>{Element.snippet.publishTime.slice(0, 10)}</h2>

      </div>)
  });

  return (
    <div className="container ">
      <div className=" card_user    ">
        <div className=" useparam-card    "  >
          {data.filter((Element) => Element?.snippet.title === title).slice(0,10).map((Element, index) =>
          (
            <div className="user-card  " >
              <div key={index} className="card_img"  >
                <iframe className="ifrem gap-2 " src={`https://www.youtube.com/embed/${Element.id.videoId}`} title="YouTube video player"   ></iframe>
                <div className="flex   items-center pt-4 mb-4   ">
                  <h1 className=" hidden md:block text-1xl font-bold">{Element.snippet.title}</h1>
                  <div className="flex items-center ml-12  ">
                    <div className="flex items-center">
                      <AiFillLike onClick={myCountplus} className="text-2xl" />
                      {count}
                    </div>
                    <div className="px-8">
                      <AiFillDislike onClick={myCountminus} className="text-2xl " />
                    </div>
                    <div className="flex items-center ">
                      <IoIosShareAlt className="text-2xl" />
                      <p >Ulashish</p>
                    </div>
                  </div>
                </div>

                <div className=" flex   mt-4">
                  <img className=" img-card" src={Element.snippet.thumbnails.default.url} alt="png" />
                  
                  <div className=" pl-2">
                  <h1 className=" card-text text-2xl font-medium" >{Element.snippet.channelTitle}</h1>
                    <span>349K подписчик</span>
                  </div>
                  <div className="mt-4 ml-14  ">
                    <button className="btn-card  " onClick={mySubmit}>{sumbmit ? 'Obuna' : 'Obunasiz'}</button>
                  </div>
                </div>


              </div>
            </div>
          )
          )

          }
        </div>

        <div className="card_ flex  justify-end     ms-16">
          <div className="caard xl:block hidden">
            {firtered}
          </div>
        </div>
      </div>

    </div>
  );

}




export default Userprops;