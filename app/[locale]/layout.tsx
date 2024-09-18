import type { Metadata } from "next";
import { Roboto, Prosto_One } from "next/font/google";
import "./globals.css";
import LocaleSwitcher from "@/components/LocaleSwitcher";
import DockMenu from "@/components/DockMenu";
import { TanstackProvider } from "@/lib/providers/TanstackProvider"
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';

export const prostoOne = Prosto_One({ subsets: ["latin"], weight: ["400"] });
export const roboto = Roboto({ subsets: ["latin"], weight: ["400"] });

export const metadata: Metadata = {
  title: "ctrpdev's Portfolio",
  description: "A simple, minimalistic portfolio made with love",
};

export default async function LocaleLayout({
  children,
  params: { locale }
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body
        className={`${roboto.className} antialiased`}
      >
        <NextIntlClientProvider messages={messages}>
          <LocaleSwitcher />
          <TanstackProvider>
            {children}
            <DockMenu />
          </TanstackProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
