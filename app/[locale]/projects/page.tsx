"use client"

import CardProject from "@/components/CardProject";
import { useEffect, useRef, useState } from "react";
import "./style.css";
import { useTranslations } from 'next-intl';
import { FirebaseApp } from "@/lib/utils/firebase";
import { ProjectAPI } from "@/api/projectAPI";
import { useQuery } from "@tanstack/react-query";
import { useLocale } from 'next-intl';
import Skeleton from "@/components/Skeleton";

type ApiProject = {
  id?: string;
  title: string;
  description: Record<string, string>;
  url: string;
  technologies: string[];
  images: string[];
};

type Locale = 'en' | 'es';

export default function Projects() {
  const t = useTranslations("ProjectsPage");
  const [isMouseHover, setIsMouseHover] = useState(false);
  const [isMouseHoverButtonL, setIsMouseHoverButtonL] = useState(false);
  const [isMouseHoverButtonR, setIsMouseHoverButtonR] = useState(false);
  const locale = useLocale() as Locale;
  const sliderRef = useRef<HTMLDivElement | null>(null);

  const { data: projects, isFetching } = useQuery<ApiProject[]>({
    queryKey: ["projects"],
    queryFn: () => ProjectAPI.getProjects(),
    refetchOnMount: false,
    staleTime: 10000,
  });

  const handlePrevClick = () => {
    if (sliderRef.current) {
      if (sliderRef.current) {
        sliderRef.current.scrollBy({ left: -300, behavior: 'smooth' });
      }
    }
  };

  const handleNextClick = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    FirebaseApp.init();
  }, []);
  return (
    <main className={`${isMouseHover ? "bg-gray-100" : "bg-indigo-700"} 
        w-full xl:h-screen p-14 roboto
        xl:grid xl:grid-cols-3
        xl:justify-center xl:items-center
        transition-all duration-500 ease-in-out
        `}>

      <h1 className={`${isMouseHover ? "text-indigo-700" : "text-gray-100"}
        text-2xl font-semibold mb-10
        xl:text-center xl:text-5xl
        transition-all duration-500 ease-in-out fade-in-right select-none
        `}>
        {t("title")}
      </h1>

      <div className="relative xl:col-span-2 fade-in-right">
        <div className="mb-16 min-h-max
          grid gap-5 rounded-3xl
          md:grid-cols-2 place-items-center
          lg:grid-cols-3
          xl:place-content-start xl:mb-0
          xl:flex xl:flex-nowrap xl:p-14 xl:overflow-x-auto 
          xl:bg-gray-100
          justify-evenly no-scrollbar
          "
          onMouseOver={() => setIsMouseHover(true)}
          onMouseOut={() => setIsMouseHover(false)}
          ref={sliderRef}
        >
          {
            isFetching ? (
              <div className="relative md:w-full">

                <div className="flex flex-col gap-5 md:w-screen 
          md:grid md:grid-cols-2 md:mx-auto
          lg:grid-cols-3
          xl:flex xl:flex-row xl:flex-nowrap xl:overflow-x-auto justify-start no-scrollbar
          ">

                  {Array(6).fill(null).map((_, i) => <Skeleton key={i} />)}
                </div>
              </div>
            ) : ""

          }
          {
            projects?.map((project: ApiProject) => (
              <CardProject
                key={project.id}
                title={project.title}
                description={project.description[locale]}
                technologies={project.technologies}
                images={project.images}
                url={project.url}
              />
            ))
          }
        </div>
        <button
          className={`invisible xl:visible absolute left-0 top-1/2 transform -translate-y-1/2 ${isMouseHoverButtonL ? "bg-orange-500" : "bg-indigo-700"} text-transparent md:text-white p-2 rounded-r-lg z-50 transition-all ease-in-out duration-500 hover:shadow-xl`}
          onClick={handlePrevClick}
          onMouseEnter={() => setIsMouseHoverButtonL(true)}
          onMouseLeave={() => setIsMouseHoverButtonL(false)}
          onMouseOver={() => setIsMouseHover(true)}
          onMouseOut={() => setIsMouseHover(false)}
        >
          &lt;
        </button>
        <button
          className={`invisible xl:visible absolute right-0 top-1/2 transform -translate-y-1/2 ${isMouseHoverButtonR ? "bg-orange-500" : "bg-indigo-700"} text-transparent md:text-white p-2 rounded-l-lg z-50 transition-all ease-in-out duration-500 hover:shadow-xl`}
          onClick={handleNextClick}
          onMouseEnter={() => setIsMouseHoverButtonR(true)}
          onMouseLeave={() => setIsMouseHoverButtonR(false)}
          onMouseOver={() => setIsMouseHover(true)}
          onMouseOut={() => setIsMouseHover(false)}
        >
          &gt;
        </button>
      </div>
    </main>
  )
}