import Image from "next/image";
import React from "react";

const ImageCard = ({ imageSrc, title }: any) => {
  return (
    <div className="shadow-md bg-transparent rounded-lg overflow-hidden border-2 border-[#A239CA] p-5">
      <Image
        src={imageSrc}
        alt={title}
        className="w-full h-32 object-contain"
      />
      <div className="">
        <h2 className="text-lg font-bold text-center mx-auto text-[#E7DFDD] max-w-full">
          {title}
        </h2>
      </div>
    </div>
  );
};

export default ImageCard;
