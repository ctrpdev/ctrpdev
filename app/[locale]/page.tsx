"use client"

import logo from "@/assets/img/logo.png";
import Image from "next/image";
import { useTranslations } from 'next-intl';
import { useState } from "react";

export default function Home() {
  const t = useTranslations("HomePage");
  const [isMouseOver, setIsMouseOver] = useState(false);

  return (
    <main className={`${isMouseOver ? "bg-cyan-800" : "bg-cyan-700"} w-screen h-screen grid justify-center items-center roboto
    p-14 transition-all duration-500 ease-in-out
    `}>
      <div className="lg:grid lg:grid-cols-2 2xl:p-44 slide-down">
        <Image src={logo} alt="logo"
          className={`mx-auto ${isMouseOver ? "spinning" : ""} transition-all duration-500`}
          onMouseOver={()=>setIsMouseOver(true)}
          onMouseOut={()=>setIsMouseOver(false)}
        />
        <section className="text-gray-100 text-center grid gap-2 md:gap-5
          lg:flex lg:flex-col lg:justify-center transition-all ease-in-out duration-200
          ">
          <p className="lg:text-lg xl:text-xl 2xl:text-4xl select-none">{isMouseOver ? t("helloHidden") : t("hello")} <span className={`prosto_one font-bold ${isMouseOver ? "hidden" : "visible"}`}>ctrp<span className="text-ctrpdev">dev</span></span></p>
          <h1 className="text-lg md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-7xl font-bold select-none">{isMouseOver ? "" : t("welcome")}</h1>
          <p className="text-sm lg:text-lg 2xl:text-2xl select-none">
            {isMouseOver ? t("mySelfHidden") : t("mySelf")}
          </p>
        </section>
      </div>
    </main>
  );
}
