import React, { useEffect, useState } from "react";
import { BiChevronDown } from "react-icons/bi";
import dropdown1 from '../../assets/imge/drapdown1.png'
import dropdown2 from '../../assets/imge/drapdown2.png'
import dropdown3 from '../../assets/imge/drapdown3.png'
import dropdown4 from '../../assets/imge/drapdown4.png'
import dropdown5 from '../../assets/imge/drapdown5.png'
import dropdown6 from '../../assets/imge/drapdown5.png'
import { AiFillSetting } from 'react-icons/ai'
import '../Accordion/Accordion.css'
const Accordion = () => {
    const [selected, setSelected] = useState("");
    const [open, setOpen] = useState(false);


    return (
        <div className="w-72 font-medium h-80 ">
            <div onClick={() => setOpen(!open)} className={`bg-white w-full p-2 flex items-center  rounded ${!selected && "text-gray-700"}`}>
                Show more
                <BiChevronDown size={20} className={`${open && "rotate-180"}`} />
            </div>
            <div className={`bg-white mt-2 overflow-y-auto ${open ? "max-h-60" : "max-h-0"} `}>
                <div className="flex">
                    <img className="pr-2" src={dropdown1} alt="png" />
                    <p>Gussie Singleton</p>
                </div>
                <div className="flex pt-4">
                    <img className="pr-2" src={dropdown2} alt="png" />
                    <p>Nora Francis</p>
                </div>
                <div className="flex pt-4">
                    <img className="pr-2" src={dropdown3} alt="png" />
                    <p>Belle Briggs</p>
                </div>
                <div className="flex pt-4">
                    <img className="pr-2" src={dropdown4} alt="png" />
                    <p>Eunice Cortez</p>
                </div>
                <div className="flex pt-4">
                    <img className="pr-2" src={dropdown5} alt="png" />
                    <p>Emma Hanson</p>
                </div>
                <div className="flex pt-4">
                    <img className="pr-2" src={dropdown6} alt="png" />
                    <p>Leah Berry</p>
                </div>

            </div>
            <div className=" flex items-center mt-10">
                <AiFillSetting className='text-2xl' />
                <p className='pl-3'>Setting</p>
            </div>
        </div>
    );
};

export default Accordion;








