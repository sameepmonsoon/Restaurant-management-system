import React from "react";
import { AddNewModalTypes } from "../../../Types/Components/ModalTypes";
import { TextField } from "../../TextField";
import { Button } from "../../TextField.Style";
import {
  CancelButton,
  DeleteButton,
  ModalFooter,
  ModalContainer,
  ModalHeader,
  ModalTitle,
  ModalBackground,
  HeaderCancelButton,
  ModalBody,
} from "./AddNewMenuModal.style";

const AddNewMenuModal = (props: AddNewModalTypes) => {
  const {
    title,
    content,
    footerButtons,
    setAddMenuModal,
    setNewItem,
    edit,
    children,
  } = props;
  // setTimeout(() => {
  //   setOpenModal(false);
  // }, 60000);
  return (
    <>
      <ModalBackground
        onClick={() => {
          setTimeout(() => {
            setAddMenuModal(false);
          }, 50);
        }}></ModalBackground>
      <ModalContainer>
        <ModalHeader>
          <ModalTitle>{title}</ModalTitle>
          <HeaderCancelButton onClick={() => setAddMenuModal(false)} />
        </ModalHeader>
        <ModalBody>{children}</ModalBody>
        {/* <ModalFooter>{footerButtons}</ModalFooter> */}
      </ModalContainer>
    </>
  );
};

export default AddNewMenuModal;

// <PopUpModal>
//  <Wrapper>
//   <edit></edit>
//   <delete></delete>
//  </Wrapper>
// </PopUpModal>

// <PopUpModal>
//   <Content/>
// </PopUpModal>
