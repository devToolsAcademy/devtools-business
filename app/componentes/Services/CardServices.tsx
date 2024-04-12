import React from "react";
import { Card, CardBody } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import { Button } from "@nextui-org/button";
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
    <Card className="py-4 m-5 sm:w-[90%] lg:w-[80%] bg-transparent">
      <CardBody className="overflow-visible py-2 h-[100%] flex justify-between">
        <Image
          isZoomed
          alt="Card background"
          className="h-24 w-full object-cover"
          src={`${image}`}
          width={280}          
        />
        <div className="pb-0 pt-2 px-4">
          <h4 className="font-bold text-small text-center h-[3.5rem] text-green-l">
            {title}
          </h4>
          <p className="text-slate-100 text-small text-center h-[9rem]">
            {description}
          </p>
          <div className="flex justify-center my-4 ">
            <a
              href="https://web.whatsapp.com/573116978993"
              target="_blank"
              className={
                "py-2 px-4 bg-[var(--bluePrimary)] text-slate-50 font-bold hover:bg-transparent hover:border-solid hover:border-2 hover:border-[var(--greenDevtools)] hover:text-[var(--greenDevtools)] rounded-full"
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
