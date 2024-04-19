import colors from "@/utils/color";
import React from "react";
import styled from "styled-components";
const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  background: white;
  border-radius: 4px;
  padding: 2px;
  border: 1px solid ${colors.gray};
`;

const Input = styled.input`
  flex-grow: 1;
  border: none;
  background: transparent;
  border-right: 1px solid ${colors.gray};
  padding: 8px;
  &:focus {
    outline: none;
  }
`;

const Icon = styled.span`
  cursor: pointer;
  font-size: 20px;
  display: flex;
  place-items: center;
`;

const IconEnd = styled.div`
  width: 40px;
  height: 100%;
  display: flex;
  place-content: center;
`;

interface InputSearchI {
  startIcon?: any;
  endIcon?: any;
  inputValue: any;
  onChange: () => void;
  placeholder?: string;
}
const InputSearch = ({
  startIcon,
  endIcon,
  inputValue,
  onChange,
  placeholder,
}: InputSearchI) => {
  return (
    <SearchContainer>
      {startIcon && (
        <IconEnd>
          <Icon>{startIcon}</Icon>
        </IconEnd>
      )}
      <Input
        type="text"
        value={inputValue}
        onChange={onChange}
        placeholder={placeholder}
        aria-label={placeholder}
      />
      {endIcon && (
        <IconEnd>
          <Icon>{endIcon}</Icon>
        </IconEnd>
      )}
    </SearchContainer>
  );
};

export default InputSearch;