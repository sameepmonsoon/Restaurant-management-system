import React from "react";
import { AlertDeleteModalTypes } from "../../../Types/Components/ModalTypes";
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
} from "./AlertDeleteModal.style";

const AlertDeleteModal = (props: AlertDeleteModalTypes) => {
  const { title, description, setOpenModal, setDeleteItem } = props;
  setTimeout(() => {
    setOpenModal(false);
  }, 60000);
  return (
    <>
      <ModalBackground
        onClick={() => {
          setTimeout(() => {
            setOpenModal(false);
          }, 50);
        }}></ModalBackground>
      <ModalContainer>
        <ModalHeader>
          <ModalTitle>{title}</ModalTitle>
        </ModalHeader>
        <ModalFooter>
          <CancelButton
            onClick={() => {
              setTimeout(() => {
                setOpenModal(false);
              }, 50);
            }}>
            Cancel
          </CancelButton>
          <DeleteButton
            onClick={() => {
              setDeleteItem(true);
            }}>
            Delete
          </DeleteButton>
        </ModalFooter>
      </ModalContainer>
    </>
  );
};

export default AlertDeleteModal;

// <PopUpModal>
//  <Wrapper>
//   <edit></edit>
//   <delete></delete>
//  </Wrapper>
// </PopUpModal>

// <PopUpModal>
//   <Content/>
// </PopUpModal>
