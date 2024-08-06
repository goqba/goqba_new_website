"use client";
import { useState } from "react";
import { Button } from "../ui/button";
import Swal from "sweetalert2";
import { Download } from "lucide-react";

const DownloadPdf = () => {
  const [isDownload, setIsDownload] = useState(false);
  const handleClick = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "Would you like to download report?",
      icon: "info",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Download!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Downloading",
          text: "Your file has been downloaded.",
          icon: "success",
        });
      }
    });
  };
  return (
    <div className="mb-10 mt-20">
      <Button
        type="button"
        onClick={handleClick}
        className="bg-[#2836E4] hover:bg-[#2836E4]/90 text-lg font-bold hover:text-white/65"
        size={"lg"}
      >
        <Download className="h-5 w-5 mr-2" /> Download
      </Button>
      <p className="text-sm md:text-base font-semibold text-white py-5 max-w-[400px]">
        Click <em>Download report</em> button to download analysis report data
        as pdf file.
      </p>
    </div>
  );
};

export default DownloadPdf;
