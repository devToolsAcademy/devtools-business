import React from "react";
import { Card, CardHeader, CardBody } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import { Button } from "@nextui-org/button";
import css from "styled-jsx/css";

export default function CardServices() {
  return (
    <Card className="py-4 bg-gray-950">
      <CardBody className="overflow-visible py-2">
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
            <Button
              className={
                "bg-[var(--greenDevtools)] text-slate-50 font-bold hover:bg-transparent hover:border-solid hover:border-2 hover:border-[var(--greenDevtools)] hover:text-[var(--greenDevtools)]"
              }
            >
              Ver mas
            </Button>
          </div>
        </div>
      </CardBody>
    </Card>
  );
}
