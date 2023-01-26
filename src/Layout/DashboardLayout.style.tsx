import styled from "@emotion/styled";

type Sider = {
  openSider: boolean;
};

export const DashboardMainDiv = styled("div")`
  display: flex;
  flex-flow: row nowrap;
`;

export const LayoutContainerDiv = styled("div")<Sider>`
  width: ${({ openSider }) => (openSider === true ? "82vw" : "100vw")};
  position: ${({ openSider }) =>
    openSider === true ? "absolute" : "relative"};
  left: ${({ openSider }) => (openSider === true ? "260px" : "0")};
  transition: left 0.8s ease;
`;

export const InventoryCardContainerDiv = styled("div")<Sider>`
  display: flex;
  flex-direction: row;
  gap: ${({ openSider }) => (openSider === true ? "3.5%" : "8.6%")};
  transition: gap 0.8s ease;
  margin-top: 3%;
  margin-left: 5%;
  margin-bottom: 4%;
  align-items: center;

  @media screen and (max-width: 1300px) and (min-width: 700px) {
    gap: 4%;
    margin-left: 10px;
  }
`;

export const ChildrenDiv = styled("div")`
  display: flex;
  flex-flow: column wrap;
  gap: 10px;
  margin-top: 3%;
  margin-left: 5%;
  align-items: flex-start;

  @media screen and (max-width: 1300px) and (min-width: 700px) {
    margin-left: 10px;
  }
`;

export const FilterComponentDiv = styled("div")`
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: flex-start;
  row-gap: 40px;
  margin-top: 3%;
  margin-left: 5%;

  @media screen and (max-width: 1300px) and (min-width: 700px) {
    margin-left: 10px;
  }
`;
