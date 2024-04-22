import React from "react";
import { OptionStyled, SearchContainer, SelectStyled } from "./input.styles";

const SelectSimple: React.FC<any> = ({
  options,
  value,
  onChange,
  placeholder,
  ...props
}) => {
  return (
    <SearchContainer size="large">
    <SelectStyled value={value} onChange={(e) => onChange(e.target.value)} {...props}>
      {placeholder && <option value="">{placeholder}</option>}
      {options.map((option: any) => (
        <OptionStyled key={option.value} value={option.value} {...props}>
          {option.label}
        </OptionStyled>
      ))}
    </SelectStyled>
    </SearchContainer>
  );
};

export default SelectSimple;