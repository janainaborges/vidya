import colors from "@/utils/color";
import styled from "styled-components";

export const Box = styled.div`
  justify-content: center;
  margin-top: 10px;
  gap: 1.5rem;
  display: flex;
  flex-wrap: wrap;
  
`;
export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  border: 1px solid;
  width: 317px;
  padding: 8px;
  gap: 10px;
`;
export const CardText = styled.div`
  display: flex;
  width: 40px;
  height: 40px;
  place-content: center;
  place-items: center;
  background-color: #72adf3;
  color: white;
  border-radius: 30%;
  font-weight: 700;
  font-size: 20px;
`;

export const Subtitle = styled.h2`
  display: flex;
  gap: 1rem;
  align-items: center;
  font-weight: 200;
  font-size: 16px;
  color: ${colors.dark};
`;

export const BoxCenter = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
export const Title = styled.h1`
  font-size: 18px;
  font-weight: 500;
  color: ${colors.dark};
`;
