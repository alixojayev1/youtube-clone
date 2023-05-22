
import '../Footer/Footer.css'
import { AiOutlineHome } from 'react-icons/ai'
import { AiFillFire } from 'react-icons/ai'
import { MdSubscriptions } from 'react-icons/md'
import { VscFolderLibrary } from 'react-icons/vsc'
import { Link } from "react-router-dom"

const Footer = () => {
  return (
   <div className="container">
     <div className='  card  sm:hidden block '>
        <div className=" bg-white   flex itmes-center  mt-10 gap-10">
           <div className="">
           <Link to='/'><AiOutlineHome className='text-4xl'/></Link>
           <Link to='/'><p>Home</p></Link>
           </div>
           <div className="">
           <AiFillFire className='text-4xl'/>
           <p>Shorts</p>
           </div>
            <div className="">
            <MdSubscriptions className='text-4xl'/>
            <p>Obuna</p>
            </div>
           <div className="">
           <VscFolderLibrary className='text-4xl'/>
            Library
           </div>

         </div>
    </div>
   </div>
  )
}

export default Footer