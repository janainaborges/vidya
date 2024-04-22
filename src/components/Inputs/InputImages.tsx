import React from "react";
import { InputImage } from "./input.styles";
import { FaRegImage } from "react-icons/fa";
import ButtonCart from "../Buttons/ButtonCart";

const InputImages = ({ name, ...rest }: any) => {
  return (
    <>
      <InputImage>
        <input id={name} {...rest} />
        <ButtonCart
          filter={false}
          icon={FaRegImage}
          text={"Faca o upload da foto"}
          size="large"
        />
      </InputImage>
    </>
  );
};

export default InputImages;
