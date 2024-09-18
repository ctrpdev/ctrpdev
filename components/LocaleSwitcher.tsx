"use client"

import { useRouter, usePathname } from '@/navigation';
import { useLocale } from 'next-intl';

export default function LocaleSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const currentLocale = useLocale();

  const handleChange = () => {
    if (currentLocale === "en") {
      router.push(pathname, { locale: "es" });
    } else {
      router.push(pathname, { locale: "en" })
    }
  };

    return (
        <div className="right-3 top-3 fixed fade-in z-50">
           <button type="button" 
            onClick={handleChange}
            className="flex justify-evenly items-center p-3
            rounded-full hover:shadow-2xl backdrop-blur-lg bg-gray-900/40 transition-all duration-500 text-gray-100"
            >{currentLocale.toLocaleUpperCase()}</button>
        </div>
    )
}
