import styled from "styled-components";

interface imagesI {
  bg: any;
}
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
export const RowList = styled.div`
  width: 100%;
  display: flex;
  padding: 10px 0;
  flex-direction: column;
  justify-content: space-between;
`;

export const Box = styled.div<imagesI>`
  background: url(${(props: imagesI) => props.bg});
  border: 1px solid;
  background-repeat: no-repeat;
  background-position: top;
  background-size: 100%;
  width: 500px;
  height: 300px;
  display: flex;
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

export const Title = styled.h1`
  padding-top: 10px;
  font-size: 28px;
  font-weight: 800;
  color: black;
`;

export const TitleValue = styled.h1`
  padding-top: 10px;
  font-size: 18px;
  font-weight: 300;
  color: black;
`;
export const TitleDescription = styled.h1`
  padding-top: 10px;
  font-size: 12px;
  font-weight: 200;
  color: black;
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

export const RowProduct = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  padding-left: 2rem;
  place-items: center;
`;

export const ListOrden = styled.div`
  width: 100%;
  justify-content: space-between;
  align-items: flex-start;
  display: flex;
`;

export const ListOrdeOne = styled.div`
  width: 50%;
`;

export const ListOrdeTwo = styled.div`
  width: 50%;
  
`;