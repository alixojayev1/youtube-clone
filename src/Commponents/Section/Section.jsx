import { AiOutlineHome } from 'react-icons/ai'
import { AiFillFire } from 'react-icons/ai'
import { MdSubscriptions } from 'react-icons/md'
import { VscFolderLibrary } from 'react-icons/vsc'
import { FaHistory } from 'react-icons/fa'
import { MdWatchLater } from 'react-icons/md'
import { AiOutlineStar } from 'react-icons/ai'
import { FcLike } from 'react-icons/fc'
import { SiYoutubemusic } from 'react-icons/si'
import { CgGames } from 'react-icons/cg'


import '../Section/Section.css'
import Accordion from '../Accordion/Accordion'
import { useContext } from 'react'
import { MyContext } from '../Context/Context'
import { Link } from "react-router-dom"



const Section = () => {
  const { togle } = useContext(MyContext)
  return (
    <div className="container pt-5 flex-initial w-64 ">

      <div className="menu-bar">
        {!togle ? (
          <div className="section_card mt-10 ">
            <div className="   py-4">
            <Link to='/'><AiOutlineHome className='text-3xl ' /></Link>
              <Link to='/'><span className='block'>Home</span></Link>
            </div>
            <div className="   py-4 ">
              <AiFillFire className='text-3xl ' />
              <span className=''>Trending</span>
            </div>
            <div className="   py-4">
              <MdSubscriptions className='text-3xl' />
              <span className=''>Subscriptions</span>
            </div>
            <div className="   py-4">
              <VscFolderLibrary className='text-3xl' />
              <span className=''>Library</span>
            </div>
          </div>
        ) : (
          <div className=" menu mt-20  ">
            <div className="menu1">
              <div className=" mt-8 ">
                <div className="flex items-center ">
                <Link to='/'><AiOutlineHome className='text-3xl ' /></Link>
                  <span className='pl-3'>Home</span>
                </div>
                <div className="flex py-4 items-center ">
                  <AiFillFire className='text-3xl   ' />
                  <span className='pl-3'>Trending</span>
                </div>
                <div className="flex py-2 items-center">
                  <MdSubscriptions className='text-3xl' />
                  <span className='pl-3'>Subscriptions</span>
                </div>
              </div>
              <hr />
              <div className=" menu1">
                <div className="flex items-center pt-8 pb-4">
                  <VscFolderLibrary className='text-3xl' />
                  <span className='pl-3'>Library</span>
                </div>
                <div className="flex items-center py-4">
                  <FaHistory className='text-3xl' />
                  <span className='pl-3'>History</span>
                </div>
                <div className="flex items-center py-4">
                  <MdWatchLater className='text-3xl' />
                  <span className='pl-3'>Watch later</span>
                </div>
                <div className="flex items-center py-4">
                  <AiOutlineStar className='text-3xl' />
                  <span className='pl-3'>Favourites</span>
                </div>
                <div className="flex items-center py-4">
                  <FcLike className='text-3xl' />
                  <span className='pl-3'>Liked videos</span>
                </div>
                <div className="flex items-center py-4">
                  <SiYoutubemusic className='text-3xl' />
                  <span className='pl-3'>Music</span>
                </div>
                <div className="flex items-center py-4">
                  <CgGames className='text-3xl' />
                  <span className='pl-3'>Games</span>
                </div>
                <hr />


              </div>
              <Accordion />
            </div>


          </div>
        )
        }



      </div>

    </div>
  )
}

export default Section