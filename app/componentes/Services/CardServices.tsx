"use client";
import { handleWhatsappLink } from "@/utils/helper";
import React from "react";
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";

interface CardServicesInterface {
  title: string;
  description: string;
  image: string;
}

export default function CardServices({
  title,
  description,
  image,
}: CardServicesInterface) {
  return (
    <Card className="py-4 m-5 bg-transparent ">
      <CardHeader className="w-full overflow-visible py-2 flex justify-center">
        <Image
          isZoomed
          alt="Card-service"
          className="object-cover h-[7rem] w-[8rem] md:w-[12rem] xl:w-[16rem] xl:h-[12rem] 2xl:w-[18rem]"
          src={`${image}`}
        />
      </CardHeader>
      <CardBody className="overflow-visible py-2 flex-col">
        <div className="pb-0 pt-2 px-4">
          <h4 className="font-bold text-small text-center h-[3rem] text-green-l">
            {title}
          </h4>
          <p className="text-slate-100 text-xs lg:text-sm 2xl:text-base text-center h-full">
            {description}
          </p>
          <div className="flex justify-center my-4 ">
            <a
              onClick={handleWhatsappLink}
              target="_blank"
              className={
                "text-sm lg:text-base xl:text-lg py-2 px-4 bg-[var(--bluePrimary)] text-slate-50 font-bold hover:bg-transparent hover:border-solid hover:border-2 hover:border-[var(--greenDevtools)] hover:text-[var(--greenDevtools)] rounded-full"
              }
            >
              Saber más
            </a>
          </div>
        </div>
      </CardBody>
    </Card>
  );
}
