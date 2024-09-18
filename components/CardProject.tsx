"use client"

import Link from "next/link";
import { Zoom } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import {useTranslations} from 'next-intl';
import { useState } from "react";
import Image from "next/image";

type CardProjectProps = {
    title: string;
    description: string;
    url: string;
    technologies: string[];
    images: string[];
}

export default function CardProject({ title, description, url, technologies, images }: CardProjectProps) {
    const t = useTranslations("ProjectsPage");
    const [isMouseHover, setIsMouseHover] = useState(false);
    return (
        <div className={`sm:w-full max-w-64 min-w-64 max-h-96 min-h-96 rounded-2xl md:rounded-3xl overflow-hidden hover:shadow-2xl transition-all ease-in-out duration-500
            z-20 flex flex-col justify-between hover:z-30 hover:scale-105 hover:rotate-1 hover:-translate-y-5 bg-gray-100 blur-0`}
            onMouseOver={()=>setIsMouseHover(true)}
            onMouseOut={()=>setIsMouseHover(false)}
            >
                <div className="p-3">
                    <div className="slide-container rounded-3xl">
                        <Zoom 
                        arrows={true}
                        duration={1000}
                        scale={0.4}>
                            {
                                images.map((each, index) => <Image alt="project"
                                    key={index}
                                    src={each}
                                    width={232}
                                    height={169}
                                    className="rounded-2xl" />
                                )
                            }
                            </Zoom>
                    </div>
                    <div className="font-bold text-sm text-center mt-2 text-gray-700 select-none h-7">
                        {title}
                    </div>
                    <p className="text-gray-700 text-[12px] select-none">
                        {description}
                    </p>
                </div>
                <div className="flex flex-wrap gap-1 px-3 mb-2">
                    {
                        technologies.map((tech, index) => (
                            <span className={`bg-orange-500 rounded-lg px-3 text-[12px] font-light text-gray-50 select-none`}
                                key={index}
                            >
                                {tech}
                            </span>
                        ))
                    }
    
                </div>
                <div className={`w-full h-auto flex justify-center ${isMouseHover ? "bg-indigo-700" : "bg-orange-500"} transition-all ease-in-out duration-500`}>
                    <Link
                        href={url}
                        className={`text-sm font-bold text-gray-100 p-2 transition-all duration-500 ease-in-out text text-center w-full select-none`}
                        target="_blank"
                    >
                        {t("visit")}
                    </Link>
                </div>
    
        </div>
    )
}