import React from "react";
import { Card, CardBody } from "@nextui-org/card";
import { Image } from "@nextui-org/image";

export default function CardTeam() {
    return (
        <Card className="py-4 bg-[var(--bluePrimary)] m-5 w-[18rem]">
        <CardBody className="overflow-visible py-2  ">
          <Image
            isZoomed
            alt="Card background"
            className="object-cover rounded-xl"
            src="https://cdn.pixabay.com/photo/2015/05/28/14/53/ux-788002_1280.jpg"
            width={270}
          />
          <div className="pb-0 pt-2 px-4 flex-col items-start">

            <h4 className="font-bold text-large text-slate-100">
              Frontend Radio
            </h4>
            <p className="text-slate-100 uppercase font-bold">Daily Mix</p>
            <div className="flex justify-end">
            </div>
          </div>
        </CardBody>
      </Card>
    )
}