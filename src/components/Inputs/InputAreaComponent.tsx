import React from "react";
import { InputAreas } from "./input.styles";

const InputAreaCompoment = ({ name, ...rest }: any) => {
  return (
      <InputAreas id={name} {...rest} />
  );
};

export default InputAreaCompoment;
