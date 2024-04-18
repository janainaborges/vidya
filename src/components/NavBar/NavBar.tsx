"use client";
import React, { useState } from "react";

import { Center, Nav } from "./NavBar.styles";
import ButtonCart from "../Buttons/ButtonCart";
import colors from "@/utils/color";
import { MdOutlinePeopleAlt } from "react-icons/md";
import { useRouter } from "next/navigation";

const NavBar = () => {

    const [bgColor, setBgColor] = useState(""); 

    const router = useRouter();

    const handleButtonClick = (route: string, color: string) => {
      router.push(route); 
      setBgColor(color); 
    };
  return (
    <Nav>
      <Center>
        <div>
          <ButtonCart
            text={"Cliente"}
            icon={MdOutlinePeopleAlt}
            size={"28px"}
            filter={false}
          
            backgroundColor={bgColor || "none"}
            color={ "#ccc"}
            onClick={() => handleButtonClick("/client", "pink")}
          />
        </div>
        <div>oie</div>
        <div>oie</div>
      </Center>
    </Nav>
  );
};

export default NavBar;
