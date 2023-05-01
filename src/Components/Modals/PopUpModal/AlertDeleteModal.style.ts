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
export const ModalContainer: any = styled("div")`
  z-index: 11;
  top: 40%;
  left: 40%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  flex: 2 0 10rem;
  flex-wrap: nowrap;
  position: fixed;
  overflow: hidden;
  max-width: 500px;
  max-height: 600px;
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
  flex: 1;
  min-height: "40px";
  flex-wrap: wrap;
  overflow: hidden;
  align-items: center;
  justify-content: "center";
  column-gap: 10px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 17px;
  line-height: 19px;
  color: #000000;
  border-bottom: 0;
`;
export const ModalFooter = styled(ModalHeader)`
  height: auto;
  margin: auto;
  padding: 10px;
  column-gap: 30px;
`;
export const ModalBody = styled(ModalHeader)`
  height: 230px;
  background-color: red;
`;
export const ModalTitle = styled("span")`
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  padding-top: 10px;
  font-size: 15px;
  line-height: 19px;
  color: #000000;
  display: flex;
  flex: 1;
  height: 42px;
  align-items: center;
  justify-content: center;
  flex-wrap: nowrap;
  padding: 0 10px;
  white-space: nowrap;
`;

export const CancelButton = styled("button")`
  border: 1px solid rgba(0, 0, 1, 0.1);
  display: grid;
  place-items: center;
  border-radius: 4px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 15px;
  height: 25px;
  min-width: 70px;
  /* color: #717171; */
  opacity: 0.9;
  color: #313131;
  background: #fafafa;
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.15);
  &:hover {
    background-color: #e8e8e8;
    opacity: 1;
    cursor: pointer;
  }
`;
export const DeleteButton = styled(CancelButton)`
  /* background-color: rgba(243, 69, 63, 0.9); */
  /* border: 0; */
  color: #ffffff;
  border: 1px solid #9a9a9a;
  border-radius: 5px;
  background: #313131;
  &:hover {
    background-color: #313131;
    opacity: 1;
  }
`;

export const HeaderCancelButton = styled(CancelButton)`
  border-radius: 50%;
  min-width: 15px;
  height: 20px;
  box-shadow: 0;
  background-color: none;
  border: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #000000;
  font-size: 17px;
  font-weight: 500;
  &:hover {
    border: 0;
    background-color: none;
    color: #000000;
  }
`;
