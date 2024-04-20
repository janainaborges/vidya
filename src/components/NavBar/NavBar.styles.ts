import colors from "@/utils/color";
import styled from "styled-components";

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 10px 50px;
  align-items: center;
  height: 4rem;
  background-color: white;
  border-bottom: 1px solid ${colors.gray};
`;
export const Center = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 4%;
`;

export const Division = styled.div`
  border-left: 1px solid ${colors.gray};
  height: 25px;
`;