"use client";
import Link from "next/link";
import styles from "./Header.module.css";
import { Button } from "@nextui-org/button";

export const Header = () => {
  const itemsMenu = [
    {
      title: "Inicio",
    },
    {
      title: "Sobre nosotros",
    },
    {
      title: "Nuestros servicios",
    },
  ];
  return (
    <>
      <div className={styles["content-header"]}>
        {itemsMenu.map((item, index) => (
          <Link key={index} href={item.title} className={styles['items-menu']}>
            {item.title}
          </Link>
        ))}
        <Button className={styles['button-header']}>Inicia Sesion</Button>
      </div>
    </>
  );
};
