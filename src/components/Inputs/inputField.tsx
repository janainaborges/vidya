import React from "react";
import styled from "styled-components";

const InputField = styled.input`
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 10px;
  box-sizing: border-box;

  &:focus {
    outline: none;
    border-color: blue;
    box-shadow: 0 0 5px rgba(0, 0, 255, 0.5);
  }
`;

const InputFieldComponent = ({ name, ...rest }: any) => {
  return (
      <InputField id={name} {...rest} />
  );
};

export default InputFieldComponent;
