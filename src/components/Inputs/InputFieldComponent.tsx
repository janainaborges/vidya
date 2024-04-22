import React from "react";
import { InputField } from "./input.styles";

const InputFieldComponent = ({ name, ...rest }: any) => {
  return (
      <InputField id={name} {...rest} />
  );
};

export default InputFieldComponent;
