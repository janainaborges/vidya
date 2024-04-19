import styled from "styled-components";

export const Form = styled.form`
  
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  padding: 20px;

  justify-content: center;
  align-items: center;
`;
export const Row = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  
`;
export const Column = styled.div`
width: 100%;
  display: flex;
  flex-direction: column;
  place-items: start;
  padding: 10px;
  position: relative;

`;

export const Label = styled.label`
  padding-top: 10px;
  font-size: 16px;
  font-weight: 500;
  color: black;
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: space-between;
  gap: 3px;
`;
export const Footer = styled.footer`
  position: absolute;
  bottom: 10px;
  right: 0;
  display: flex;
  place-content: end;
  padding: 10px;
  border-top: 1px solid #ccc;
  width: 100%;
`;
