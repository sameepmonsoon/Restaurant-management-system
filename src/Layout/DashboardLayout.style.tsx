import styled from "@emotion/styled";

type Sider = {
  openSider: boolean;
};

export const DashboardMainDiv = styled("div")`
  display: flex;
  flex-flow: row wrap;
  /*during transition --a horizontal scroll bar appears */
  overflow: hidden;
  background: #fafafa;
`;

export const LayoutContainerDiv = styled("div")<Sider>`
  width: ${({ openSider }) => (openSider === true ? "83vw" : "100vw")};
  position: relative;
  left: ${({ openSider }) => (openSider === true ? "260px" : "0")};
  transition: left 0.8s ease;
  background: #fafafa;

  @media screen and (min-width: 300px) and (max-width: 1450px) {
    overflow-x: hidden;
    width: ${({ openSider }) => (openSider === true ? "80vw" : "100vw")};
  }
`;

export const InventoryCardContainerDiv = styled("div")<Sider>`
  display: flex;
  flex-flow: row wrap;
  margin-top: 45px;
  /* inventory filters not aligned vertically if sider is hidden*/
  margin-left: ${({ openSider }) => (openSider === true ? "60px" : "50px")};
  margin-bottom: 50px;
  row-gap: 100px;
  column-gap: ${({ openSider }) => (openSider === true ? "50px" : "120px")};
  align-items: center;

  @media screen and (max-width: 1300px) and (min-width: 300px) {
    column-gap: ${({ openSider }) => (openSider === true ? "250px" : "50px")};
  }
`;

export const ChildrenDiv = styled("div")`
  display: flex;
  flex-flow: column wrap;
  gap: 10px;
  margin-top: 40px;
  margin-left: 60px;
  align-items: flex-start;

  @media screen and (max-width: 1400px) and (min-width: 300px) {
    margin-left: 50px;
  }
`;

export const FilterComponentDiv = styled("div")`
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: flex-start;
  row-gap: 40px;
  margin-top: 50px;
  margin-left: 55px;

  @media screen and (max-width: 1400px) and (min-width: 300px) {
    margin-left: 55px;
  }
`;
