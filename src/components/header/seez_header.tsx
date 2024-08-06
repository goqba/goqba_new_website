import React from "react";
import Logo from "../ui/logo/logo";
import Link from "next/link";
import { Button } from "../ui/button";
import { ArrowLeft } from "lucide-react";

const Seez_Header = () => {
  return (
    <header className="flex items-center justify-between py-4 lg:py-5 container">
      <Logo variant="seez" />
      <Link href={"/"}>
        <Button
          variant={"outline"}
          size={"lg"}
          className="hidden lg:flex items-center bg-transparent"
        >
          {" "}
          <ArrowLeft className="w-5 h-5 mr-2" /> Home
        </Button>
        <Button
          variant={"outline"}
          className="flex items-center lg:hidden bg-transparent"
        >
          <ArrowLeft className="w-5 h-5 mr-2" /> Home
        </Button>
      </Link>
    </header>
  );
};

export default Seez_Header;
