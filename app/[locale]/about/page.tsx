"use client"

import { useState } from "react"
import { useTranslations } from 'next-intl';
import listening from "@/assets/img/activelistening.jpg";
import agile from "@/assets/img/agile.jpg";
import teamwork from "@/assets/img/teamwork.jpg";
import creative from "@/assets/img/creative.jpg";
import Image from "next/image";

export default function About() {
  const [isMouseHover, setIsMouseHover] = useState(false);
  const [isMouseHover1, setIsMouseHover1] = useState(false);
  const [isMouseHover2, setIsMouseHover2] = useState(false);
  const [isMouseHover3, setIsMouseHover3] = useState(false);
  const [isMouseHover4, setIsMouseHover4] = useState(false);
  const t = useTranslations("AboutPage");

  return (
    <main className={`${isMouseHover ? "bg-sky-700" : "bg-lime-700"} 
    ${isMouseHover1 ? "bg-purple-900" : "bg-lime-700"}
    ${isMouseHover2 ? "bg-sky-500" : "bg-lime-700"}
    ${isMouseHover3 ? "bg-slate-300" : "bg-lime-700"}
    ${isMouseHover4 ? "bg-amber-500" : "bg-lime-700"}
        w-screen h-full p-14 lg:relative lg:place-content-center lg:place-items-center lg:h-screen
        grid roboto
        transition-all duration-500 ease-in-out
        `}>
      <h1 className={`text-gray-100
            text-2xl font-semibold mb-10 lg:absolute lg:animate-pulse
            xl:text-center xl:text-5xl
            transition-all duration-500 ease-in-out fade-in-up
            ${isMouseHover ? "lg:hidden" : "visible"}
            `}
        onTouchStart={() => setIsMouseHover(true)}
        onMouseOver={() => setIsMouseHover(true)}
      >
        {t("title")}
      </h1>
      <div className={`mb-16 grid gap-5 lg:grid-cols-2 lg:grid-rows-2 ${isMouseHover ? "lg:absolute lg:inset-0 lg:p-14" : "lg:hidden"}`}>

        <section className={`fade-in-left bg-gray-100 p-10 md:p-24 lg:p-3 rounded-2xl hover:shadow-xl hover:-rotate-2 hover:scale-110 transition-all duration-500 ease-in-out hover:z-50
              grid place-content-center
              `}
              onTouchStart={() => setIsMouseHover1(true)}
              onMouseOver={() => setIsMouseHover1(true)}
              onTouchEnd={() => setIsMouseHover1(false)}
              onMouseOut={() => setIsMouseHover1(false)}
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

        <section className={`fade-in-down bg-gray-100 p-10 md:p-24 lg:p-3 rounded-2xl hover:shadow-xl hover:rotate-2 hover:scale-110 transition-all duration-500 ease-in-out hover:z-50
              grid place-content-center
              `}
              onTouchStart={() => setIsMouseHover2(true)}
              onMouseOver={() => setIsMouseHover2(true)}
              onTouchEnd={() => setIsMouseHover2(false)}
              onMouseOut={() => setIsMouseHover2(false)}
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

        <section className={`fade-in-up bg-gray-100 p-10 md:p-24 lg:p-3 rounded-2xl hover:shadow-xl hover:-rotate-2 hover:scale-110 transition-all duration-500 ease-in-out hover:z-50
              grid place-content-center
              `}
              onTouchStart={() => setIsMouseHover3(true)}
              onMouseOver={() => setIsMouseHover3(true)}
              onTouchEnd={() => setIsMouseHover3(false)}
              onMouseOut={() => setIsMouseHover3(false)}
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

        <section className={`fade-in-right bg-gray-100 p-10 md:p-24 lg:p-3 rounded-2xl hover:shadow-xl hover:rotate-2 hover:scale-110 transition-all duration-500 ease-in-out hover:z-50
              grid place-content-center
              `}
              onTouchStart={() => setIsMouseHover4(true)}
              onMouseOver={() => setIsMouseHover4(true)}
              onTouchEnd={() => setIsMouseHover4(false)}
              onMouseOut={() => setIsMouseHover4(false)}
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
