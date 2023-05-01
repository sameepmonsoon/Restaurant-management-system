import styled from "@emotion/styled";

type Sider = {
  openSider: boolean;
};

export const DashboardMainDiv = styled("div")`
  display: flex;
  flex-flow: row nowrap;
  /*during transition --a horizontal scroll bar appears */
  overflow: hidden;
  background: #fafafa;
`;

export const LayoutContainerDiv = styled("div")<Sider>`
  max-width: 100%;
  width: ${({ openSider }) => (openSider === true ? "100rem" : "100%")};
  position: relative;
  left: ${({ openSider }) => (openSider === true ? "260px" : "0")};
  transition: left 0.8s ease;
  background: #fafafa;

  @media screen and (min-width: 300px) and (max-width: 1480px) {
    overflow-x: hidden;
    width: ${({ openSider }) => (openSider === true ? "100vw" : "100vw")};
  }
  @media screen and (min-width: 1480px) and (max-width: 2000px) {
    overflow-x: hidden;
    width: ${({ openSider }) => (openSider === true ? "100vw" : "100vw")};
  }
`;

export const InventoryCardContainerDiv = styled("div")<Sider>`
  display: flex;
  flex-flow: row wrap;
  margin-top: 45px;
  max-width: ${({ openSider }) => (openSider === true ? "78%" : "100%")};
  /* inventory filters not aligned vertically if sider is hidden*/
  margin-left: ${({ openSider }) => (openSider === true ? "60px" : "50px")};
  margin-bottom: 50px;
  row-gap: 50px;
  transition: all 200ms ease;
  column-gap: ${({ openSider }) => (openSider === true ? "40px" : "120px")};
  align-items: center;
  @media screen and (min-width: 1550px) and (max-width: 2000px) {
    flex-wrap: wrap;
    column-gap: ${({ openSider }) => (openSider === true ? "80px" : "200px")};
  }
  @media screen and (min-width: 1285px) and (max-width: 1550px) {
    column-gap: ${({ openSider }) => (openSider === true ? "50px" : "100px")};
  }
  @media screen and (min-width: 300px) and (max-width: 1285px) {
    column-gap: 100px;
    width: ${({ openSider }) => (openSider === true ? "68%" : "100%")};
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
