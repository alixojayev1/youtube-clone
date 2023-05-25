import { BsList } from 'react-icons/bs'
import { AiOutlineVideoCameraAdd } from 'react-icons/ai'
import { BsSearch } from 'react-icons/bs'
import { BsBellFill } from 'react-icons/bs'
import { MdDarkMode } from 'react-icons/md'
import navicon from '../../assets/youtubeicon.svg'
import navImg from '../../assets/imge/navUserpic.png'
import '../Navigation/Navigation.css'
import { createContext, useContext, useState } from 'react'
import { MyContext } from '../Context/Context'
import { Link } from 'react-router-dom'






const Navigation = () => {

    const { togle, setTogle, setSearch } = useContext(MyContext)

    const togleFun = () => {
        setTogle(!togle)

    }


    return (

        <div className="sitciy ">
            <div className="container  ">
                <div className="">
                    <div className=" flex items-center justify-between bg-white   
           ">
                        <div className="flex items-center ">
                            <BsList onClick={togleFun} className='hidden sm:block text-4xl' />

                            <img className=' sm:px-5 pe-5  ' src={navicon} alt="icon" />
                            <div className="relative">
                                <input onChange={(e) => setSearch(e.target.value)} className='   input   mx-70px ' type="text" placeholder='search' />
                                <BsSearch className=' search  absolute  md:block hidden ' />

                            </div>


                        </div>
                        <div className="flex items-center ">
                            <AiOutlineVideoCameraAdd className=' hidden md:block text-3xl  ' />
                          
                            <MdDarkMode  className='text-3xl mx-3  sm:block hidden' />
                            <BsBellFill className='text-3xl me-5  hidden md:block' />
                            <Link to='/register'> <img className='' src={navImg} alt="png" /></Link>
                        </div>
                    </div>

                </div>



            </div>
        </div>

    )
}

export default Navigation