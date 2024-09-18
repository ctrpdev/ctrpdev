

import { IoIosHome, IoIosApps, IoIosPerson, IoIosMail } from 'react-icons/io';
import DockMenuItem from "./DockMenuItem";

export default function DockMenu() {

    const style = "hover:animate-pulse duration-500 ease-in-out transition-all cursor-pointer";
    return (
        <div className="relative flex justify-center fade-in">

        <nav className="w-[95vw] max-w-4xl bottom-5 fixed z-50
        md:w-[80vw]
        ">
            <ul className="flex gap-5 justify-evenly items-center p-5
            rounded-full border border-white/20 hover:border-transparent hover:shadow-lg backdrop-blur-lg hover:bg-gray-100/20 transition-all duration-500 text-gray-100 hover:text-white
            ">
                <DockMenuItem 
                icon={<IoIosHome size={32} />} 
                url={"/"} 
                style={`${style} active:text-cyan-700 hover:scale-125`}
                />
                <DockMenuItem 
                icon={<IoIosApps size={32} />} 
                url={"/projects"} 
                style={`${style} active:text-indigo-700 hover:scale-125`}
                />
                <DockMenuItem 
                icon={<IoIosPerson size={32} />} 
                url={"/about"} 
                style={`${style} active:text-lime-700 hover:scale-125`}
                />
                <DockMenuItem 
                icon={<IoIosMail size={32} />} 
                url={"/contact"} 
                style={`${style} active:text-rose-700 hover:scale-125`}
                />
            </ul>
        </nav>
        </div>
    )
}