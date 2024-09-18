

import { IoIosHome, IoIosApps, IoIosPerson, IoIosMail } from 'react-icons/io';
import DockMenuItem from "./DockMenuItem";
import {Tooltip} from "@nextui-org/tooltip";
import { useTranslations } from 'next-intl';

export default function DockMenu() {

    const t = useTranslations("DockMenu")
    const tooltipStyle = 'text-gray-100 bg-gray-900/40 backdrop-blur-lg shadow-lg px-2 rounded-lg';

    const style = "hover:animate-pulse duration-500 ease-in-out transition-all cursor-pointer";
    return (
        <div className="relative flex justify-center fade-in">

        <nav className="w-[95vw] max-w-4xl bottom-5 fixed z-50
        md:w-[80vw]
        ">
            <ul className="flex gap-5 justify-evenly items-center p-5
            rounded-full hover:shadow-2xl backdrop-blur-lg bg-gray-900/40 transition-all duration-500 text-gray-100
            ">
                <Tooltip className={`${tooltipStyle}`} content={t("home")}>    
                <DockMenuItem 
                icon={<IoIosHome size={32} />} 
                url={"/"} 
                style={`${style} active:text-cyan-700 hover:scale-125`}
                />
                </Tooltip>

                <Tooltip className={`${tooltipStyle}`} content={t("projects")}>
                <DockMenuItem 
                icon={<IoIosApps size={32} />} 
                url={"/projects"} 
                style={`${style} active:text-indigo-700 hover:scale-125`}
                />
                </Tooltip>

                <Tooltip className={`${tooltipStyle}`} content={t("about")}>
                <DockMenuItem 
                icon={<IoIosPerson size={32} />} 
                url={"/about"} 
                style={`${style} active:text-lime-700 hover:scale-125`}
                />
                </Tooltip>

                <Tooltip className={`${tooltipStyle}`} content={t("contact")}>
                <DockMenuItem 
                icon={<IoIosMail size={32} />} 
                url={"/contact"} 
                style={`${style} active:text-rose-700 hover:scale-125`}
                />
                </Tooltip>
            </ul>
        </nav>
        </div>
    )
}