import instagram from "../../../public/assets/images/instagram.svg";
import facebook from "../../../public/assets/images/facebook.svg";
import twitter from "../../../public/assets/images/twitter.svg";
import youtube from "../../../public/assets/images/youtube.svg";
import Link from "next/link";
import Image from "next/image";
import Logo from "../ui/logo/logo";

const Footer = () => {
  return (
    <footer className="w-screen flex flex-col md:flex-row  justify-center bg-[#111111] py-20 lg:py-28">
      <div className="w-full container flex flex-col md:flex-row  justify-between items-center gap-14 px-5 lg:px-10">
        <div className="flex flex-col items-center md:items-start justify-between gap-4 h-full">
          <Logo variant="main" />

          <Link href="/policy">
            <p className="text-xs md:text-base text-white text-center">
              &copy; 2024 GoQba Technology | Security | Privacy | Terms
            </p>
          </Link>
        </div>
        <div className="flex flex-row gap-16">
          <div className="flex flex-col text-white gap-2 md:gap-4 lg:gap-5">
            <NavLinks address={"/"} text="Home" />
            <NavLinks address={"#solutions"} text="Solutions" />
            <NavLinks address={"/aboutus"} text="About Us" />
            <NavLinks address={"/news"} text="News" />
            <NavLinks address={"#contact"} text="Contact" />
          </div>
          <div className="flex flex-col text-white gap-2 md:gap-4 lg:gap-5">
            <NavLinks address={"/customer"} text="Customers" />
            <NavLinks address={"#services"} text="Services" />
            <NavLinks address={"/media"} text="Media" />
            <NavLinks address={"#partners"} text="Partners" />
          </div>
        </div>
        <div className="flex flex-col justify-center text-white gap-2 md:gap-4 lg:gap-5">
          <MediaLinks address={"youtube"} text="Youtube" iconImage={youtube} />
          <MediaLinks
            address={"/facebook"}
            text="Facebook"
            iconImage={facebook}
          />
          <MediaLinks address={"/twitter"} text="Twitter" iconImage={twitter} />
          <MediaLinks
            address={"/instagram"}
            text="Instagram"
            iconImage={instagram}
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;

export const NavLinks = ({
  address,
  text,
}: {
  address: String;
  text: String;
}) => (
  <Link
    href={`${address}`}
    className="text-md font-semibold tracking-wider hover:opacity-75 hover:scale-105 duration-150"
  >
    {text}
  </Link>
);

export const MediaLinks = ({
  address,
  text,
  iconImage,
}: {
  address: string;
  text: string;
  iconImage: string;
}) => (
  <a
    href={`${address}`}
    className="text-md font-semibold  tracking-wider hover:opacity-70 flex items-center"
  >
    <Image
      className="pt-1 mr-4 block"
      src={iconImage}
      width={30}
      alt="social media link"
    />
    {text}
  </a>
);
