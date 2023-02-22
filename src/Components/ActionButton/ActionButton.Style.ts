import styled from "@emotion/styled";
type disableActionColorType = {
  disableColor?: boolean | undefined;
  forMenuSubcat?: boolean;
  forMenuCat?: boolean;
};

export const AddButtonMain = styled("div")<disableActionColorType>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-radius: 5px;
  border: 1px solid rgba(0, 0, 0, 0.06);
  width: ${({ forMenuSubcat, forMenuCat }) =>
    forMenuSubcat === true
      ? "161px"
      : forMenuCat === true
      ? "167px"
      : " 178px"};
  height: ${({ forMenuSubcat, forMenuCat }) =>
    forMenuSubcat === true ? "105px" : forMenuCat === true ? "71px" : " 90px"};
  /* remaining */
  background-color: ${({ forMenuSubcat, forMenuCat }) =>
    forMenuSubcat === true
      ? "#ffffff"
      : forMenuCat === true
      ? "#ffffff"
      : "#313131"};
  box-shadow: ${({ forMenuCat }) =>
    forMenuCat ? "none" : " 0px 0px 4px rgba(0, 0, 0, 0.15)"};
`;

export const AddCardItems = styled.div<disableActionColorType>`
  width: 100%;
  height: 100%;
  display: flex;
  border-radius: 5px;
  align-items: center;
  flex-flow: ${({ forMenuCat }) =>
    forMenuCat === true ? "row nowrap" : "column nowrap"};
  justify-content: ${({ forMenuCat }) =>
    forMenuCat === true ? "space-evenly" : "center"};
  gap: ${({ forMenuCat }) => (forMenuCat === true ? "5px" : "0")};
`;

export const AddButtonIcon = styled.section<disableActionColorType>`
  color: ${({ forMenuSubcat, forMenuCat }) =>
    forMenuSubcat === true
      ? "#000000"
      : forMenuCat === true
      ? "#0060B5"
      : "#ffffff"};
`;

export const AddButtonLabel = styled.div<disableActionColorType>`
  display: flex;
  align-items: center;
  margin-top: 4px;
  font-family: "Inter";
  font-style: normal;
  line-height: 22px;
  max-height: 60%;
  min-height: 22px;
  justify-content: ${({ forMenuCat }) =>
    forMenuCat ? "flex-start" : "center"};
  color: ${({ forMenuSubcat, forMenuCat }) =>
    forMenuSubcat === true
      ? "#000000"
      : forMenuCat === true
      ? "#0060B5"
      : "#ffffff"};
  font-size: ${({ forMenuSubcat }) =>
    forMenuSubcat === true ? "15px" : "14px"};
  width: ${({ forMenuCat }) => (forMenuCat === true ? "115px" : "134px")};
  letter-spacing: ${({ forMenuSubcat, forMenuCat }) =>
    forMenuSubcat === true || forMenuCat ? "-1px" : "0"};
  text-transform: uppercase;
  overflow: hidden;
`;
