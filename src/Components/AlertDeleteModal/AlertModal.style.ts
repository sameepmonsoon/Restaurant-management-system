import styled from "@emotion/styled";
export const ModalBackground = styled("div")`
  position: fixed;
  z-index: 10;
  height: 100%;
  width: 100%;
  top: -1px;
  right: 0;
  display: grid;
  place-items: center;
  background: rgba(0, 0, 0, 0.3);
`;
export const ModalContainer = styled("div")`
  height: 100px;
  width: 275px;
  z-index: 11;
  top: 40%;
  left: 40%;
  overflow: hidden;
  display: grid;
  place-items: center;
  position: fixed;
  background: rgb(255, 255, 255, 1);
  border: 1px solid rgba(0, 0, 0, 0.06);
  border-radius: 7px;
  transition: all 100ms ease;
  animation: fadeIn 400ms 1 ease;
  @keyframes fadeIn {
    from {
      transform: scale(0);
    }
    to {
      transform: scale(1);
    }
  }
`;
export const ModalHeader = styled("span")`
  display: flex;
  min-width: 100%;
  height: 40px;
  overflow: hidden;
  align-items: center;
  justify-content: center;
  column-gap: 10px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 17px;
  line-height: 19px;
  color: #000000;
`;
export const ModalFooter = styled(ModalHeader)`
  height: 40px;
  column-gap: 30px;
  justify-content: center;
`;
export const ModalTitle = styled("span")`
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  padding-top: 10px;
  font-size: 15px;
  line-height: 19px;
  color: #000000;
`;

export const CancelButton = styled("button")`
  border: 1px solid rgba(0, 0, 1, 0.1);
  display: grid;
  place-items: center;
  border-radius: 4px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 15px;
  height: 25px;
  min-width: 70px;
  color: #717171;
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.15);
  &:hover {
    background-color: #e8e8e8;
    cursor: pointer;
  }
`;
export const DeleteButton = styled(CancelButton)`
  background-color: rgba(243, 69, 63, 0.9);
  border: 0;
  color: #ffffff;
  &:hover {
    background-color: rgba(243, 70, 66, 1);
  }
`;

export const HeaderCancelButton = styled(CancelButton)`
  border-radius: 50%;
  width: 10px;
  background: none;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 10px;
  height: 20px;
  color: #717171;
  position: relative;
  top: -10px;
  left: 1px;
  font-size: 14px;
  font-weight: 500;
  &:hover {
    background: none;
    color: #000000;
  }
`;
