import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../../../styles/globals.css";
import { locales } from "../../config";
import NextIntlProvider from "./NextIntlProvider";
import { unstable_setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { Provider } from "./provider";
import "aos/dist/aos.css";

const inter = Inter({ subsets: ["latin"] });

type Props = {
  children: React.ReactNode;
  params: { locale: string };
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}
export const metadata = {
  title: "GoQba",
  description: "Make you healthier",
};

export default async function RootLayout({
  children,
  params: { locale },
}: Props) {
  unstable_setRequestLocale(locale);

  let messages;
  try {
    messages = (await import(`../../../messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body
        className={`${inter.className} antialiased bg-[#26335D] text-white overflow-x-hidden`}
      >
        <Provider>
          <NextIntlProvider
            locale={locale}
            messages={messages}
            timeZone="Europe/Berlin"
            now={new Date()}
          >
            {children}
          </NextIntlProvider>
        </Provider>
      </body>
    </html>
  );
}
