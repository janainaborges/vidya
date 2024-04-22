"use client";
import React, { useState } from "react";

import { Center, Nav } from "./NavBar.styles";
import ButtonCart from "../Buttons/ButtonCart";
import colors from "@/utils/color";
import { MdOutlinePeopleAlt } from "react-icons/md";
import { usePathname, useRouter } from "next/navigation";

const NavBar = () => {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <Nav>
      <Center>
        <div>
          <ButtonCart
            text={"Cliente"}
            icon={MdOutlinePeopleAlt}
            size={"28px"}
            filter={false}
            backgroundColor={
              pathname === "/client" ? `${colors.blueLight}` : "none"
            }
            color={pathname === "/client" ? `${colors.primary}` : "none"}
            onClick={() => router.push("/client")}
            border="12px"
          />
        </div>
        <div>
          {" "}
          <ButtonCart
            text={"Pedidos"}
            icon={MdOutlinePeopleAlt}
            size={"28px"}
            filter={false}
            backgroundColor={
              pathname === "/order" ? `${colors.blueLight}` : "none"
            }
            color={pathname === "/order" ? `${colors.primary}` : "none"}
            onClick={() => router.push("/order")}
          />
        </div>
        <div>
          <ButtonCart
            text={"Produto"}
            icon={MdOutlinePeopleAlt}
            size={"28px"}
            filter={false}
            backgroundColor={
              pathname === "/product" ? `${colors.blueLight}` : "none"
            }
            color={pathname === "/product" ? `${colors.primary}` : "none"}
            onClick={() => router.push("/product")}
          />
        </div>
      </Center>
    </Nav>
  );
};

export default NavBar;
