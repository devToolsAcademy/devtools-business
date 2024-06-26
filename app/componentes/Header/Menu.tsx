"use client";
import React, {useState} from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Button,
} from "@nextui-org/react";

export default function Menu({showStartSesion=false}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = ["Inicio", "Sobre nosotros", "Nuestros servicios"];

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          {/* <AcmeLogo /> */}
          <p className="text-xl md:text-2xl xl:text-3xl text-[var(--greenDevtools)] font-bold">devTools</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link
            className="text-[var(--bluePrimary)] font-bold hover:text-[var(--greenDevtools)]"
            href="#"
            aria-current="page"
          >
            Inicio
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            className="text-[var(--bluePrimary)] font-bold hover:text-[var(--greenDevtools)]"
            href="#home-aboutus"
            aria-current="page"
          >
            Sobre nosotros
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            className="text-[var(--bluePrimary)] font-bold hover:text-[var(--greenDevtools)]"
            href="#home-services"
          >
            Nuestros servicios
          </Link>
        </NavbarItem>
      </NavbarContent>
      {showStartSesion && <NavbarContent justify="end">
        <NavbarItem>
          <Button
            as={Link}
            className="text-[var(--white)] bg-[var(--greenDevtools)]"
            href="#"
            variant="flat"
          >
            Iniciar sesión
          </Button>
        </NavbarItem>
      </NavbarContent>
      }
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={
                index === 2
                  ? "primary"
                  : index === menuItems.length - 1
                  ? "danger"
                  : "foreground"
              }
              className="w-full"
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
