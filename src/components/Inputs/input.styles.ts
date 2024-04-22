import colors from "@/utils/color";
import { css, styled } from "styled-components";

export const SearchContainer = styled.div<{ size: string }>`
  width: ${(props: any) =>
    (props.size === "small" && "4rem") ||
    (props.size === "medium" && "18rem") ||
    (props.size === "large" && "30rem")};
  height: ${(props: any) =>
    (props.size === "small" && "1rem") ||
    (props.size === "medium" && "2rem") ||
    (props.size === "large" && "3rem")};
  display: flex;
  align-items: center;
  background: white;
  border-radius: 8px;
  padding: 2px;
  border: 1px solid ${colors.dark};
`;

export const Input = styled.input`
  flex-grow: 1;
  border: none;
  background: transparent;
  padding: 8px;
  &:focus {
    outline: none;
  }
`;

export const Icon = styled.span`
  cursor: pointer;
  font-size: 20px;
  display: flex;
  place-items: center;
`;

export const IconEnd = styled.div`
  width: 40px;
  height: 100%;
  display: flex;
  place-content: center;
`;

export const InputField = styled.input`
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

export const InputAreas = styled.textarea`
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

export const InputImage = styled.div`
  display: flex;
`;

export const SelectStyled = styled.select`
  font-size: 16px;
  flex-grow: 1;
  border: none;
  background: transparent;
  padding: 8px;
  &:focus {
    outline: none;
  }
`;

export const OptionStyled = styled.option``;
