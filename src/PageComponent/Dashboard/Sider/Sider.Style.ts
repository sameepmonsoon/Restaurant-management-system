import styled from "@emotion/styled";
type Sider = {
  openSider: boolean;
};
export const SiderDiv = styled.div<Sider>`
  width: ${({ openSider }) => (openSider == true ? "260px" : "0px")};
  height: 100vh;
  overflow: hidden;
  position: fixed;
  z-index: 1;
  left: ${({ openSider }) => (openSider == true ? "0px" : "-500px")};
  /* top given to make the transition ease with navbar height*/
  top: ${({ openSider }) => (openSider == true ? "0px" : "15px")};
  border-right: 2px solid rgba(0, 0, 0, 0.05);
  border-bottom: 2px solid rgba(0, 0, 0, 0.05);
  transition: width 1s ease;
  transition: left 1s ease;
  background-color: #ffffff;
`;
export const SiderLogoDiv = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  padding-left: 20px;
  line-height: 50px;
  width: 270px;
  height: 80px;
  column-gap: 10px;
`;
export const SiderIcon = styled.section`
  width: 48px;
  height: 48px;
  margin-right: 0.6rem;
  cursor: pointer;
`;

export const SiderLogoName = styled("div")`
  width: 80px;
  height: 49px;
`;

export const SiderLogoHeader = styled("div")`
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 25px;
  line-height: 30px;
  letter-spacing: 0.04em;
  color: #000000;
  padding-top: 3px;
`;

export const SiderLogoSubHeader = styled("div")`
  width: 80px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  line-height: 16px;
  color: #000000;
`;

export const SiderMainDiv = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  align-items: flex-start;
  padding-left: 20px;
  height: 87vh;
  padding-top: 30px;
  overflow-y: scroll;
  overflow-x: hidden;
  scroll-behavior: smooth;
  scrollbar-color: white;
  scrollbar-width: thin !important;
  &::-webkit-scrollbar {
    width: 3px;
    background-color: white;
  }
  &::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.2);
    border-radius: 10px;
  }
  &::-webkit-scrollbar-track:hover {
    background-color: white;
    border-radius: 10px;
  }
  border-top: 1px solid rgba(0, 0, 0, 0.05);
  @media screen and (min-width: 500px) and (max-width: 1300px) {
    height: 80%;
  }
`;

export const SiderButtonLabel = styled.div`
  cursor: pointer;
  width: 224px;
  height: 100%;
  display: flex;
  flex-flow: column nowrap;
  row-gap: 14px;
`;

export const SiderButtonTitle = styled("div")`
  text-transform: uppercase;
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 19px;
  color: #1e1e1e;
`;

export const SettingDiv = styled.div`
  width: 50%;
  display: flex;
  /* flex-flow: row nowrap;
  margin-top: 150px; */
  cursor: pointer;
  gap: 10px;
  position: relative;
  top: 170px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  color: #676767;
  left: 10px;
  transition: color 100ms ease;
  transition: gap 200ms ease;
  justify-content: flex-start;
  align-items: center;
  &:hover {
    gap: 16px;
    color: #313131;
  }
  /* 
  bottom: 0;
  margin-bottom: 28px;
  
 
  
 
  */
  @media screen and (max-width: 1550px) {
    top: 170px;
  }
  @media screen and (max-width: 1350px) {
    top: 120px;
  }
  @media screen and (max-width: 1250px) {
    top: 80px;
  }
`;
