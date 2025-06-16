import Image from "next/image";
import React from "react";
import { MdVerified } from "react-icons/md";
import { FcPicture } from "react-icons/fc";
import { GrWorkshop } from "react-icons/gr";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const dataCard = [
  {
    id: 1,
    username: "Watanyu Onnum",
    image: [
      "/photoGallery1_rsu111.jpg",
      "/photoGallery2_rsu111.jpg",
      "/photoGallery_rsu111.jpg",
    ],
    description: "Photograhp Gallery (ตึก 8)",
    icon: <FcPicture />,
    time: "1 ชม",
  },
  {
    id: 2,
    username: "Watanyu Onnum",
    image: ["/workspace1_rsu111.jpg", "/workspace_rsu111.jpg"],
    description: "Co-working Space",
    icon: <GrWorkshop className="text-blue-400" />,
    time: "1 ชม",
  },
];
const image1 = "/photoGallery1_rsu111.jpg";
const description = "Photograhp Gallery (ตึก 8)";

const Collections = () => {
  return (
    <>
      {dataCard.map((item) => (
        <div
          key={item.id}
          className="md:mx-[150px] lg:mx-[300px] xl:mx-[400px] mx-4 my-4 py-2 px-4 bg-gray-800 rounded-lg shadow-lg"
        >
          <div className="mb-4 mt-2 flex items-center text-white text-lg">
            {item.username}
            <MdVerified className="text-blue-400 ml-2" />
          </div>
          <Carousel>
            <CarouselContent>
              {item.image.map((img, index) => (
                <CarouselItem key={index} className="w-full h-full">
                  <Image
                    src={img}
                    alt={`Image ${index + 1}`}
                    width={500}
                    height={300}
                    className="object-cover w-full h-full rounded-lg"
                  />
                  <div className="flex justify-center items-center text-gray-400 w-full text-sm mt-2">
                    Slide {index + 1} of {item.image.length}
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
          <div className="text-lg text-white mt-4 flex justify-center items-center gap-2">
            <p>{item.description}</p>
            <p>{item.icon}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default Collections;
