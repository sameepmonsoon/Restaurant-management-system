import React from "react";
import { AlertModalTypes } from "../../Types/Components/AlertModalTypes";
import {
  CancelButton,
  DeleteButton,
  ModalFooter,
  ModalContainer,
  ModalHeader,
  ModalTitle,
  ModalBackground,
  HeaderCancelButton,
} from "./AlertModal.style";

const AlertModal = (props: AlertModalTypes) => {
  const { title, description, setOpenModal, setDeleteItem, deleteItem } = props;
  setTimeout(() => {
    // @ts-ignore
    setOpenModal(false);
  }, 60000);
  return (
    <>
      <ModalBackground
        onClick={() =>
          // @ts-ignore
          setOpenModal(false)
        }></ModalBackground>
      <ModalContainer>
        <ModalHeader>
          <ModalTitle>{title}</ModalTitle>
          {/* <HeaderCancelButton
            onClick={() => {
              // @ts-ignore
              setOpenModal(false);
            }}>
            X
          </HeaderCancelButton> */}
        </ModalHeader>
        <ModalFooter>
          <CancelButton
            onClick={() =>
              // @ts-ignore
              setOpenModal(false)
            }>
            Cancel
          </CancelButton>
          <DeleteButton
            onClick={() => {
              // @ts-ignore
              setDeleteItem(true);
              // @ts-ignore
              // setDeleteItem();
            }}>
            Delete
          </DeleteButton>
        </ModalFooter>
      </ModalContainer>
    </>
  );
};

export default AlertModal;
