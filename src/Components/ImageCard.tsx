import Image from "next/image";
import React from "react";

const ImageCard = ({ imageSrc, title }: any) => {
  return (
    <div className="shadow-md bg-transparent rounded-lg overflow-hidden border-2 border-[#A239CA] p-3 md:p-5 hover:border-[#4717F6] transition-colors duration-300">
      <div className="flex flex-col items-center space-y-3">
        <div className="w-full h-16 md:h-24 relative flex items-center justify-center">
          <Image
            src={imageSrc}
            alt={title}
            width={500}
            height={500}
            className="w-auto h-full object-contain"
          />
        </div>
        <h2 className="text-sm md:text-base font-medium text-center text-[#E7DFDD]">
          {title}
        </h2>
      </div>
    </div>
  );
};

export default ImageCard;
