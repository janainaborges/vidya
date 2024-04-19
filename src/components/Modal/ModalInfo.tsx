import colors from "@/utils/color";
import React from "react";
import { IoMdClose } from "react-icons/io";
import styled from "styled-components";

const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContainer = styled.div`
  background-color: white;
  border-radius: 5px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const Header = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #ccc;
  padding: 20px;
`;
const CloseButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
`;
const Modal = styled.button`
  width: 1068px;
  height: 401px;
  display: flex;
  flex-direction: column;
`;
export const Title = styled.h1`
  font-size: 18px;
  font-weight: 500;
  color: ${colors.dark};
`;

const ModalInfo = ({ isOpen, onClose, children }: any) => {
  if (!isOpen) return null;

  return (
    <ModalBackdrop onClick={onClose}>
      <ModalContainer onClick={(e) => e.stopPropagation()}>
        <Modal>
          <Header>
            <Title>cadastro cliente</Title>

            <CloseButton onClick={onClose}>
              <IoMdClose fontSize={"24px"}/>
            </CloseButton>
          </Header>
          
          {children}
        </Modal>
      </ModalContainer>
    </ModalBackdrop>
  );
};

export default ModalInfo;
