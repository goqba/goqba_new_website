import Image from "next/image";
import Link from "next/link";
import seezLogo from "../../../../public/assets/images/seezlogowhite.png";
import asmitLogo from "../../../../public/asmit.svg";
import GoQbaLogo from "../../../../public/assets/images/goqba_logo.png";

const Logo = ({ variant }: { variant?: string }) => {
  if (variant === "main") {
    return (
      <Link
        href={"/"}
        className="font-bold text-3xl tracking-wide inline-block"
      >
        <Image
          src={GoQbaLogo}
          width={200}
          height={150}
          alt="GoQba logo"
          className="w-[150px] lg:w-[200px] h-auto"
          priority
        />
      </Link>
    );
  } else if (variant === "seconday") {
    return <div>GoQba AI</div>;
  } else if (variant === "seez") {
    return (
      <Link href={"/seez"}>
        <Image
          src={seezLogo}
          width={100}
          height={80}
          alt="seez logo"
          className="h-auto w-24 lg:w-auto"
        />
      </Link>
    );
  } else if (variant === "asmit") {
    return (
      <Link className="flex items-center gap-2" href={"/asmit"}>
        <Image
          src={asmitLogo}
          width={40}
          height={40}
          alt="seez logo"
          className="w-16"
        />{" "}
        <p className="uppercase font-bold text-2xl lg:text-3xl tracking-wider text-[#01FFFA]">
          Asmit
        </p>
      </Link>
    );
  }
  return <div>QoQba AI</div>;
};

export default Logo;
