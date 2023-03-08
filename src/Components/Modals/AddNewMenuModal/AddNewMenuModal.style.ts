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
  display: grid;
  place-items: center;
`;
export const ModalContainer: any = styled("div")`
  z-index: 11;
  overflow: hidden;
  display: flex;
  flex-flow: column nowrap;
  min-width: 530px;
  min-height: 323px;
  max-width: 600px;
  max-height: 800px;
  background: #ffffff;
  box-shadow: 0px 5px 25px 3px rgba(0, 0, 0, 0.15);
  border-radius: 8px;
  position: fixed;
  /* margin: auto; */
  left: 32%;
  top: 15%;
  transition: all 100ms ease;
  animation: fadeIn 700ms 1 ease;
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
  min-height: 68px;
  width: 90%;
  margin: auto;
  flex-flow: row wrap;
  overflow: hidden;
  align-items: center;
  justify-content: space-between;
  column-gap: 10px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 19px;
  text-transform: uppercase;
  color: #000000;
  border-bottom: 1px solid rgba(0, 0, 0, 0.07); ;
`;
export const ModalFooter = styled(ModalHeader)`
  padding: 10px;
  justify-content: space-evenly;
  column-gap: 30px;
  border-bottom: 0;
  & button {
    width: 185px;
    height: 45px;
    border: 1px solid #9a9a9a;
    border-radius: 5px;
  }
  & button[type="reset"] {
    color: #313131;
    background: #fafafa;
  }
  & button[type="submit"] {
    background: #313131;
  }
`;
export const ModalBody = styled(ModalHeader)`
  min-height: 260px;
  max-height: 70vh;
  height: auto;
  flex: 1;
  min-width: 530px;
  border-bottom: 0;
  /* margin: auto; */
  padding: 30px;
  align-items: flex-end;
  justify-content: flex-start;
  flex-flow: column nowrap;
  position: relative;
  overflow-x: hidden;
  overflow-y: auto;
  scroll-snap-type: y mandatory;
  gap: 100px;

  ::-webkit-scrollbar {
    width: 4px;
  }
  ::-webkit-scrollbar-button {
    height: 5px;
  }
  ::-webkit-scrollbar-track {
    background-color: #fafafa;
  }
  ::-webkit-scrollbar-thumb {
    background: #9a9e9a;
    border-radius: 5px;
  }

  &::after {
    transform: rotate(45deg);
  }
  &::before {
    transform: rotate(-45deg);
  }

  & button {
    margin: 30px 20px;
    width: 185px;
    height: 45px;
    border: 1px solid #9a9e9a;
    border-radius: 5px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    color: white;
    &:hover {
      background-color: #545454;
      cursor: pointer;
      opacity: 0.9;
    }
  }
  && button[type="reset"] {
    color: #313131;
    background: rgba(255, 255, 255, 0.1);

    &&:hover {
      background: #fafafa;
    }
  }
  && button[type="submit"] {
    color: #fafafa;
    background: #1e1e1e;
  }

  /* for image preview image postion relative cause overflow */
  .imageContainer {
    position: relative;
  }
  & img {
    padding: 0;
    margin: 0;
    position: absolute;
    width: 472px;
    height: 105px;
    top: 30px;
    z-index: 2;
    border: 1px solid transparent;
    border-radius: 5px;
    object-fit: scale-down;
    cursor: pointer;
  }

  & label {
    padding-bottom: 10px;
    text-transform: capitalize;
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 18px;
  }
  & input {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 18px;
    border: 0;
    overflow: hidden;
    width: 472px;
    border: 1px solid #b5b5b5;
    border-radius: 5px;
    background: #fafafa;
    padding: 0 10px;
  }
  & input[type="text"] {
    height: 42px;
    background: #fafafa;
  }
  & input[type="text"]:focus {
  }
  & input[type="file"] {
    height: 109px;
    background: none;
    border: 1px dashed #b5b5b5;
    position: relative;
    padding: 0;
    /* z-index: 1; */
  }
  & input[type="file"]::before {
    display: block;
    /* z-index: 2; */
    content: "Upload Image";
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    text-align: center;
    color: #5e5e5e;
    position: absolute;
    border: 0;
    background: #fafafa;
    width: 472px;
    height: 109px;
    display: flex;
    flex-flow: column;
    align-items: center;
    padding-top: 55px;
    justify-content: center;
  }
`;
export const ModalTitle = styled("span")`
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  padding-top: 10px;
  font-size: 18px;
  line-height: 19px;
  color: #000000;
  white-space: nowrap;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 5px;
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
  background-color: transparent;
  height: 25px;
  min-width: 10px;
  border: 0px;
  box-shadow: 0px 0px 0px rgba(0, 0, 0, 0);
  opacity: 0.3;
  &:hover {
    background-color: transparent;
    color: #313131;
    opacity: 1;
  }
  position: relative;
  &::after,
  &::before {
    position: absolute;
    left: 1px;
    top: 0;
    content: " ";
    height: 20px;
    width: 2px;
    background-color: #333;
  }
  &::after {
    transform: rotate(45deg);
  }
  &::before {
    transform: rotate(-45deg);
  }
`;
