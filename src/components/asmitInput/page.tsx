"use client";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { FormEvent, useState } from "react";
import Swal from "sweetalert2";
import { checkFileType, getFileExtension } from "@/lib/utils";
import Popover from "@/components/asmitPopover/asmitPopover";
import Running from "@/components/asmitPopover/spinner";
import { PatientForm } from "@/components/asmitForm/asmitForm";

interface PatientProps {
  id: string;
  age: string;
  amount: number;
}

const Page = () => {
  const [files, setFiles] = useState<File[]>([]);
  const [isFilled, setIsFilled] = useState(false);
  const [isClosed, setIsClosed] = useState(true);
  const [userData, setUserData] = useState<PatientProps>();
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const handleFileInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = event.target.files;
    if (selectedFiles) {
      const validFiles = [];

      for (let i = 0; i < selectedFiles.length; i++) {
        if (checkFileType(selectedFiles[i])) {
          const newFile = new File(
            [selectedFiles[i]],
            `patient_0${i + 1}.${getFileExtension(selectedFiles[i].name)}`,
            {
              type: selectedFiles[i].type,
              lastModified: selectedFiles[i].lastModified,
            },
          );
          validFiles.push(newFile);
        } else {
          alert(`Invalid file type: ${selectedFiles[i].name}`);
        }
      }

      setFiles(validFiles);
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    // Prevent the default form submit behavior
    e.preventDefault();
    const formData = new FormData();

    // Append each file to the form data
    Array.from(files).forEach((file) => {
      formData.append("file", file);
    });

    try {
      Swal.fire({
        title: "Good job!",
        text: "You clicked the button!",
        icon: "success",
      }).then((result) => {
        if (result.isConfirmed) {
          router.push("/asmit/asmitInput/asmitOutput", { scroll: false });
        }
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
      });
      console.error("Error:", error);
      // Handle errors - perhaps showing an error message to the user
    }
  };

  return (
    <div className="bg-[#000D27] min-h-screen flex flex-col items-center justify-center overflow-hidden py-10 lg:py-20">
      <h1 className="text-2xl lg:text-4xl font-bold text-white text-center container">
        AI-powered male infertility diagnosis system
      </h1>
      {!isClosed && <Popover setIsClosed={setIsClosed} />}
      <div className="flex flex-col-reverse lg:flex-row items-center justify-center gap-10 lg:gap-5 w-full py-20 lg:min-h-[700px] container">
        <div className="w-full lg:w-1/2 md:pl-10">
          <div className="p-[2px] bg-gradient-to-r from-[#FF6566] via-[#AB4AA6] to-[#3625FF] rounded-3xl max-w-[700px]">
            <div className="bg-[#262626]/80 p-8 lg:p-14 rounded-3xl flex flex-col items-center">
              <p className="text-lg md:text-xl font-semibold mb-7 text-white">
                Uploud files
              </p>
              <form
                onSubmit={handleSubmit}
                encType="multipart/form-data"
                className="w-full flex flex-col"
              >
                <label className="flex justify-center w-full min-h-[200px]  px-4 transition bg-white border-2 border-gray-300 border-dashed rounded-3xl appearance-none cursor-pointer hover:border-gray-400 focus:outline-none">
                  {files.length ? (
                    <span className="flex flex-col justify-center items-center space-x-2">
                      {files.map((item: any, index: any) => (
                        <p key={index} className="font-medium text-gray-600">
                          {item.name}
                        </p>
                      ))}
                    </span>
                  ) : (
                    <span className="flex flex-col justify-center items-center space-x-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6 text-black"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                        />
                      </svg>
                      <span className="font-medium text-gray-600">
                        Drop files to Attach, or
                        <span className="text-blue-600 underline"> browse</span>
                      </span>
                      <span className="text-gray-600 font-medium">
                        Max file size: 100MB
                      </span>
                    </span>
                  )}
                  <input
                    type="file"
                    accept=".mp4, .csv"
                    multiple
                    name="file_upload"
                    className="hidden"
                    onChange={handleFileInput}
                  />
                </label>
                <Button
                  type="submit"
                  size={"default"}
                  className="text-lg py-6 font-semibold rounded-2xl w-full mt-5"
                  disabled={!isFilled}
                >
                  Start Analysis
                </Button>
              </form>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/2 px-10 text-white">
          <p className="text-2xl font-medium my-2">Patient Information</p>
          <PatientForm setIsFilled={setIsFilled} setUserData={setUserData} />
        </div>
      </div>
      {loading && <Running />}
    </div>
  );
};

export default Page;
