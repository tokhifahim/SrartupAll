
import { useState } from "react";
import NavLogo from "./NavImg/logo (1).svg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars,faTimes } from '@fortawesome/free-solid-svg-icons';
const Navbar=()=>{
const [visible, setVisible] = useState(false);
const showList = ()=>{
    setVisible(!visible)
}


let Links=[
    {name:"Home",link:"/"},
    {name:"Payment",link:"/"},
    {name:"Features",link:"/"},
 
]
return(
    <>
    <div className="shadow-md fixed top-0 left-0 w-full  bg-white z-10  ">
           
           <div className="flex  items-center  justify-between  py-2  md:px-10 px-7">
                <div className="cursor-pointer ">
                    <span className=" text-indigo-100">
                        <img src={NavLogo} className="w-44" alt="" />
                    </span>
                </div>
                <div className="hidden lg:block">
                <ul className="flex items-center sm:mr-80 justify-center gap-3 transition-all   duration-500 ease-in">
                    {Links.map((laink)=>(
                        <li key={laink.name} className="">
                            <a href={laink.link} className="text-gray-700 no-underline hover:text-gray-400 duration-500" >{laink.name}</a>
                        </li>
                    ))}
                    
                </ul>
                </div>
                <div className="flex justify-center items-center gap-2">
                    <div className="sm:flex justify-center items-center gap-2">
                         <button className=" hidden sm:block  py-2 px-6 hover:bg-indigo-400">
                        Sign In
                        </button>
                        
                        <button className="bg-indigo-600 hidden sm:block  py-2 px-6  hover:bg-indigo-400">
                            Sign Up
                        </button>
                    </div>
                   
                    <span className="block lg:hidden" onClick={showList}>
                    <FontAwesomeIcon icon={visible ? faTimes : faBars} />
                   
                    </span>
                    
                   
                    {
                        visible ?(
                            
                            <div className="relative lg:hidden">
                        <ul className="flex flex-col absolute right-0  bg-slate-400  top-8 pr-36  items-center  justify-center gap-2 transition-all duration-500 ease-in">
                        {Links.map((laink)=>(
                            <li key={laink.name} className="">
                                <a href={laink.link} className="text-gray-900  no-underline hover:text-gray-400 duration-500" >{laink.name}</a>
                            </li>
                        ))}
                        </ul>
                        
                    </div>
                        ):null
                    }
                
                </div>
            </div>
        
        </div>
    </>
)
}     
export default Navbar