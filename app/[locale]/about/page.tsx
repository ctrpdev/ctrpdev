"use client"

import { useState } from "react"
import { useTranslations } from 'next-intl';
import listening from "@/assets/img/activelistening.jpg";
import agile from "@/assets/img/agile.jpg";
import teamwork from "@/assets/img/teamwork.jpg";
import creative from "@/assets/img/creative.jpg";
import Image from "next/image";

const colors = [
  "bg-slate-200",
  "bg-purple-900",
  "bg-sky-500",
  "bg-red-600",
  "bg-amber-500",
];

export default function About() {
  const [isMouseHover, setIsMouseHover] = useState(false);
  const [hoverIndex, setHoverIndex] = useState(0);
  const t = useTranslations("AboutPage");

  const handleOver = (index: number) => {
    setIsMouseHover(true);
    setHoverIndex(index)
  }

  return (
    <main className={`${isMouseHover ? colors[hoverIndex] : "bg-lime-700"} 

        w-screen h-full p-14 lg:relative lg:place-content-center lg:place-items-center lg:h-screen
        grid roboto
        transition-all duration-500 ease-in-out
        `}
        >
      <h1 className={`text-gray-100
            text-2xl font-semibold mb-10 lg:absolute
            xl:text-center xl:text-5xl
            transition-all duration-500 ease-in-out fade-in
            ${isMouseHover ? "lg:hidden" : "visible"}
            `}
        onTouchStart={() => setIsMouseHover(true)}
        onMouseOver={()=>handleOver(0)}
      >
        {t("title")}
      </h1>
      <div className={`mb-16 grid gap-5 lg:grid-cols-2 lg:grid-rows-2 ${isMouseHover ? "lg:absolute lg:inset-0 lg:p-14 xl:p-24 2xl:p-44" : "lg:hidden"}`}>

        <section className={`fade-in-left bg-gray-100 p-10 md:p-24 lg:p-3 rounded-2xl shadow-xl hover:-rotate-2 hover:scale-110 transition-all duration-500 ease-in-out hover:z-50
              grid place-content-center
              `}
              onTouchStart={() => setIsMouseHover(true)}
              onMouseOver={()=>handleOver(1)}
              onMouseOut={()=>handleOver(0)}
              >
          <div className="md:grid md:grid-cols-2 md:gap-4 place-content-center place-items-center">
            <article className="text-justify md:text-end">
              <h3 className="font-bold">{t("agileTitle")}</h3>
              <p>{t("agile")}</p>
            </article>
            <div className="hidden md:flex items-center justify-center">
              <Image src={agile} className={`object-cover w-[278px] h-[220px] rounded-2xl shadow-xl transition-all duration-500 ease-in-out`} alt="agile" />
            </div>
          </div>
        </section>

        <section className={`fade-in-down bg-gray-100 p-10 md:p-24 lg:p-3 rounded-2xl shadow-xl hover:rotate-2 hover:scale-110 transition-all duration-500 ease-in-out hover:z-50
              grid place-content-center
              `}
              onTouchStart={() => setIsMouseHover(true)}
              onMouseOver={()=>handleOver(2)}
              onMouseOut={()=>handleOver(0)}
              >
          <div className="md:grid md:grid-cols-2 md:gap-4 place-content-center place-items-center">
            <div className="hidden md:flex items-center justify-center">
              <Image src={teamwork} className={`object-cover w-[278px] h-[220px] rounded-2xl shadow-xl transition-all duration-500 ease-in-out`} alt="agile" />
            </div>
            <article className="text-justify md:text-start">
              <h3 className="font-bold">{t("teamworkTitle")}</h3>
              <p>{t("teamwork")}</p>
            </article>
          </div>
        </section>

        <section className={`fade-in-up bg-gray-100 p-10 md:p-24 lg:p-3 rounded-2xl shadow-xl hover:-rotate-2 hover:scale-110 transition-all duration-500 ease-in-out hover:z-50
              grid place-content-center
              `}
              onTouchStart={() => setIsMouseHover(true)}
              onMouseOver={()=>handleOver(3)}
              onMouseOut={()=>handleOver(0)}
              >
          <div className="md:grid md:grid-cols-2 md:gap-4 place-content-center place-items-center">
            <article className="text-justify md:text-end">
              <h3 className="font-bold">{t("listeningTitle")}</h3>
              <p>{t("listening")}</p>
            </article>
            <div className="hidden md:flex items-center justify-center">
              <Image src={listening} className={`object-cover w-[278px] h-[220px] rounded-2xl shadow-xl transition-all duration-500 ease-in-out`} alt="agile" />
            </div>
          </div>
        </section>

        <section className={`fade-in-right bg-gray-100 p-10 md:p-24 lg:p-3 rounded-2xl shadow-xl hover:rotate-2 hover:scale-110 transition-all duration-500 ease-in-out hover:z-50
              grid place-content-center
              `}
              onTouchStart={() => setIsMouseHover(true)}
              onMouseOver={()=>handleOver(4)}
              onMouseOut={()=>handleOver(0)}
              >
          <div className="md:grid md:grid-cols-2 md:gap-4 place-content-center place-items-center">
            <div className="hidden md:flex items-center justify-start">
              <Image src={creative} className={`object-cover w-[278px] h-[220px] rounded-2xl shadow-xl transition-all duration-500 ease-in-out`} alt="agile" />
            </div>
            <article className="text-justify md:text-start">
              <h3 className="font-bold">{t("creativeTitle")}</h3>
              <p>{t("creative")}</p>
            </article>
          </div>
        </section>

      </div>
    </main>
  )
}
