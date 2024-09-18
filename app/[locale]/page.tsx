import logo from "@/assets/img/logo.png";
import Image from "next/image";
import { useTranslations } from 'next-intl';

export default function Home() {
  const t = useTranslations("HomePage")

  return (
    <main className="bg-cyan-700 w-screen h-screen grid justify-center items-center roboto
    p-14
    ">
      <div className="lg:grid lg:grid-cols-2 2xl:p-24 slide-down">
        <Image src={logo} alt="logo"
          className="mx-auto"
        />
        <section className="text-gray-100 text-center grid gap-2 md:gap-5
          lg:flex lg:flex-col lg:justify-center transition-all ease-in-out duration-200
          ">
          <p className="lg:text-lg xl:text-xl 2xl:text-4xl select-none">{t("hello")} <span className="prosto_one font-bold">ctrp<span className="text-ctrpdev">dev</span></span></p>
          <h1 className="text-lg md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-7xl font-bold select-none">{t("welcome")}</h1>
          <p className="text-sm lg:text-lg 2xl:text-2xl select-none">
            {t("mySelf")}
            <br />
            {t("thisSite")}
          </p>
        </section>
      </div>
    </main>
  );
}
