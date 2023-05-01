import styled from "@emotion/styled";

export const FloorTableDrawerDiv = styled("div")`
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  height: 60%;
  width: 100%;
`;
export const FloorTableTextField = styled("div")`
  display: flex;
  flex-flow: column nowrap;
  width: 100%;
  height: 90%;
  input[type="text"] {
    width: 397.49px;
    height: 42px;
  }
  label {
    /* display: none; */
  }
  p {
    margin: 0;
    padding: 0;
  }
`;
export const FloorTableButtons = styled("div")`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
  align-items: center;
`;
export const TextFieldImageUpload = styled("div")`
  width: 397px;
  height: 114px;
  position: relative;
  display: flex;
  flex-flow: column nowrap;
  p {
    z-index: 1;
    height: 16px;
    padding: 0;
    margin: 0;
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    text-align: start;
    color: #5e5e5e;
  }
  span {
    border: 1px dashed #b5b5b5;
    display: flex;
    border-radius: 5px;
    align-items: center;
    justify-content: center;
    text-align: center;
    flex-flow: column nowrap;
    row-gap: 10px;
    /* z-index: -1; */
    top: 28px;
    height: 86px;
    width: 397px;
    position: absolute;
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    text-align: center;
    color: #5e5e5e;
    background: #fafafa;
  }

  input[type="file"] {
    position: absolute;
    z-index: 1;
    top: 30px;
    left: 3px;
    height: 80px;
    width: 380px;
    opacity: 0;
    cursor: pointer;
  }
`;
