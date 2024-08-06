import Image from "next/image";
import { Card, CardContent } from "../ui/card";

const ClassImage = ({
  url,
  alt,
  text,
}: {
  url: string;
  alt: string;
  text: string;
}) => {
  return (
    <Card className="w-auto p-2">
      <Image
        className="w-full rounded-md max-h-[250px]"
        src={url}
        alt={alt}
        width={250}
        height={250}
      />
      <CardContent className="mt-4">
        <p className="text-center w-full capitalize text-xl md:text-2xl font-semibold text-black">
          {text}
        </p>
      </CardContent>
    </Card>
  );
};

export default ClassImage;
