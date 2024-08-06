import Image from "next/image";
import seezMain from "../../../../../../public/assets/images/SeezImg4-4.png";
import seezSection2Image from "../../../../../../public/assets/images/img_reality.svg";
import seezPattern from "../../../../../../public/assets/images/seezPattern.svg";
// import seezVideo from '../../../../../..//public/assets/seez_video.mp4';

import Seez_Header from "@/components/header/seez_header";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import Link from "next/link";
import { unstable_setRequestLocale } from "next-intl/server";

const Page = ({ params: { locale } }: { params: { locale: string } }) => {
  unstable_setRequestLocale(locale);
  return (
    <div className="bg-[#0B0C1C]">
      {/* Section 1 */}
      <section className="bg-gradient-to-b from-[#3C2078] to-[#3C2078]/0">
        <Seez_Header />
        {/* Hero */}
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-center min-h-[90vh]">
          <Image
            src={seezMain}
            width={1000}
            height={800}
            alt="Seez"
            className="animate-slidein opacity-0 [--slidein-delay:300ms] w-full md:w-3/5 h-full mb-10 md:mb-0"
            priority
          />
          <div className="w-full md:w-2/5 flex flex-col items-center md:items-start">
            <h1 className="animate-slidein opacity-0 [--slidein-delay:500ms] text-4xl md:text-5xl lg:text-6xl font-semibold uppercase leading-[1.3]">
              Play for real <br />{" "}
              <span className="bg-gradient-to-r from-[#2836E4] to-[#E11EFC] inline-block text-transparent bg-clip-text">
                unplug and
              </span>
            </h1>
            <span className="animate-slidein opacity-0 [--slidein-delay:700ms] text-base mt-4">
              An immersive way to get healthier.
            </span>
            <div className="animate-slidein opacity-0 [--slidein-delay:900ms] mt-10 flex items-center gap-6">
              <Button
                variant={"default"}
                size={"lg"}
                className="font-semibold bg-gradient-to-r from-[#2836E4] to-[#E11EFC] hover:from-[#E11EFC] hover:to-[#2836E4]"
              >
                Learn more
              </Button>
              <Link href={"#video"}>
                <Button
                  variant={"outline"}
                  size={"lg"}
                  className="bg-transparent font-semibold"
                >
                  <Play className="w-4 h-4 mr-2" /> Watch demo
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 */}

      <section className="py-10 md:py-20 flex items-center justify-center flex-col">
        <h2 className="animate-slidein opacity-0 [--slidein-delay:500ms] text-4xl md:text-5xl font-bold text-center">
          Why SeeZ?
        </h2>
        <div className="container flex flex-wrap justify-center gap-10 mt-10 md:mt-20 mx-auto">
          <div className="w-[350px] h-[260px] flex gap-4 cursor-pointer bg-[#1B1541] hover:bg-[#3C2078] px-5 py-10 rounded-md transition-colors duration-200">
            <div className="w-[60px] h-10 bg-red-600"></div>
            <div className="flex flex-col justify-between">
              <p className="text-xl font-bold mb-3">
                Tailored Training in Complex Reality:
              </p>
              <p className="text-sm leading-relaxed overflow-clip">
                Seez utilizes state-of-the-art Mixed Reality (MR) technology,
                offering three-dimensional and active content for a truly
                immersive rehabilitation experience.
              </p>
            </div>
          </div>

          <div className="w-[350px] h-[260px] flex gap-4 cursor-pointer bg-[#1B1541] hover:bg-[#3C2078] px-5 py-10 rounded-md transition-colors duration-200">
            <div className="w-[60px] h-10 bg-red-600"></div>
            <div className="flex flex-col justify-between">
              <p className="text-xl font-bold mb-3">
                Self-Training Empowerment
              </p>
              <p className="text-sm leading-relaxed overflow-clip">
                Take control of your rehabilitation journey with Seez. Our
                platform empowers users to self-train through the practice of
                everyday life activities. Frequent and enjoyable movement
                practices make the process not only effective but also fun.
              </p>
            </div>
          </div>

          <div className="w-[350px] h-[260px] flex gap-4 cursor-pointer bg-[#1B1541] hover:bg-[#3C2078] px-5 py-10 rounded-md transition-colors duration-200">
            <div className="w-[60px] h-10 bg-red-600"></div>
            <div className="flex flex-col justify-between">
              <p className="text-xl font-bold mb-3">Focused on Fun</p>
              <p className="text-sm leading-relaxed  overflow-clip">
                We believe that effective rehabilitation does not have to be
                dull. Seez injects an element of enjoyment into upper extremity
                exercises, making the process engaging and motivating..
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 */}

      <section className="py-20 md:py-40">
        <div className="container flex flex-col-reverse gap-y-2 md:flex-row items-center z-30">
          <div className="w-full md:w-1/2 flex flex-col items-center md:items-start relative">
            <Image
              className="absolute -top-16 -left-20 w-[300px] h-auto opacity-25"
              src={seezPattern}
              height={300}
              width={300}
              alt="pattern"
            />
            <h2 className="text-4xl md:text-5xl font-bold text-center md:text-left leading-[1.3] mt-10 md:mt-10 mb-5 text-white">
              Join the SeeZ <br /> Revolution
            </h2>
            <p className="text-sm font-semibold max-w-[500px] text-center md:text-start mb-4">
              Embark on a transformative rehabilitation experience with Seez.
              Our mission is to bring joy, effectiveness, and innovation to
              upper limb rehabilitation. Take the first step towards a stronger,
              more functional future.
            </p>
            <p className="text-sm font-semibold text-center">
              Ready to revolutionize your rehabilitation journey?
            </p>

            <Button className="border-0 rounded-lg mt-10 py-6 px-1 bg-gradient-to-r from-[#2836E4] to-[#E11EFC]">
              <span className="w-fit rounded-md bg-[#0B0C1C] text-sm px-6 py-3 font-bold text-white">
                Expore SeeZ today!
              </span>
            </Button>
          </div>
          <Image
            className="w-full max-h-[400px] md:h-full md:w-1/2"
            src={seezSection2Image}
            width={500}
            height={500}
            alt="Girl wearing VR gear"
          />
        </div>
      </section>

      {/*  Section 4 */}

      <section id="video" className="py-16 md:py-28 relative">
        <Image
          className="absolute top-28 left-28 h-auto w-[200px]"
          src={seezPattern}
          height={200}
          width={200}
          alt="pattern"
        />
        <Image
          className="absolute bottom-28 right-28 h-auto w-[200px]"
          src={seezPattern}
          height={200}
          width={200}
          alt="pattern"
        />
        <div className="container flex flex-col gap-20 items-center">
          <h2 className="text-4xl md:text-5xl font-bold">How SeeZ works?</h2>
          <div className="p-2 bg-gradient-to-r from-[#2836E4] to-[#E11EFC] rounded-md drop-shadow-2xl">
            <video
              width="1000"
              height="500"
              controls
              loop
              muted
              autoPlay
              preload="none"
              className="rounded-md"
            >
              <source src={"/assets/seez_video.mp4"} type="video/mp4" />
            </video>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Page;
