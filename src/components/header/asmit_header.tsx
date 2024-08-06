import React from "react";
import Logo from "../ui/logo/logo";
import Link from "next/link";
import { Button } from "../ui/button";
import { ArrowLeft } from "lucide-react";

const Asmit_Header = () => {
  return (
    <header className="flex items-center justify-between py-5 container">
      <Logo variant="asmit" />
      <Link href={"/"}>
        <Button
          variant={"outline"}
          size={"lg"}
          className="hidden lg:flex items-center border-none font-bold tracking-wider rounded-3xl bg-gradient-to-r from-[#FF6566] via-[#AB4AA6] to-[#3625FF]"
        >
          {" "}
          <ArrowLeft className="w-5 h-5 mr-2" /> Home
        </Button>
        <Button
          variant={"outline"}
          className="flex items-center lg:hidden border-none font-bold tracking-wider rounded-3xl bg-gradient-to-r from-[#FF6566] via-[#AB4AA6] to-[#3625FF]"
        >
          <ArrowLeft className="w-5 h-5 mr-1" /> Home{" "}
        </Button>
      </Link>
    </header>
  );
};

export default Asmit_Header;
