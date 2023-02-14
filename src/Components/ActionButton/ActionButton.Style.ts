import styled from "@emotion/styled";
type disableActionColorType = {
  disableColor?: boolean | undefined;
};

export const AddButtonMain = styled("div")<disableActionColorType>`
  position: relative;
  width: 178px;
  height: 90px;
  border-radius: 5px;
  /* remaining */
  background-color: ${(disableColor) => (disableColor ? "#313131" : "white")};
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.15);
  div,
  svg {
    color: ${(diableColor) => (diableColor ? "white" : "red")};
  }
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const AddCardItems = styled.div`
  width: 128px;
  height: 41px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const AddButtonIcon = styled.section`
  color: white;
`;

export const AddButtonLabel = styled.div`
  margin-top: 4px;
  color: #ffffff;
  font-family: "Inter";
  font-style: normal;
  font-size: 15px;
`;
