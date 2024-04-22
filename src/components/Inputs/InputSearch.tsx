import { IInputSearch } from "@/types/input.types";
import React from "react";
import { Icon, IconEnd, Input, SearchContainer } from "./input.styles";

const InputSearch = ({
  startIcon,
  endIcon,
  inputValue,
  onChange,
  placeholder,
  size,
  ...props
}: IInputSearch) => {
  return (
    <SearchContainer size={size}>
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
        {...props}
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