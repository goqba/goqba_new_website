"use client";
import Contact from "@/components/contact/contact";
import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";
import Hero from "@/components/hero/hero";
import Merits from "@/components/merits/merits";
import Partners from "@/components/partnerts/partners";
import Services from "@/components/services/services";
import Solutions from "@/components/solutions/solutions";
// import Team from "@/components/team/team";
import Aos from "aos";
import { unstable_setRequestLocale } from "next-intl/server";
import { useEffect } from "react";

export default function Home({
  params: { locale },
}: {
  params: { locale: string };
}) {
  // unstable_setRequestLocale(locale);
  useEffect(() => {
    Aos.init({
      duration: 800,
      once: false,
    });
  }, []);
  const heroStyle = {
    backgroundImage: `url(/assets/images/wave1.png)`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

  return (
    <main className="flex min-h-screen flex-col w-full bg-white text-black">
      <div style={heroStyle} className="w-full min-h-screen text-white">
        <Header />
        <Hero />
      </div>
      <Merits />
      <Solutions />
      <Services />
      {/* <Team /> */}
      <Partners />
      <Contact />
      <Footer />
    </main>
  );
}
