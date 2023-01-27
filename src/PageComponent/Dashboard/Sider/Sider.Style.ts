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
  /* box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.05); */
  border-top: 2px solid rgba(0, 0, 0, 0.05);
  border-right: 2px solid rgba(0, 0, 0, 0.05);
  border-bottom: 2px solid rgba(0, 0, 0, 0.05);
  transition: width 1s ease;
  transition: left 1s ease;
`;
export const SiderLogoDiv = styled.div`
  display: flex;
  flex-flow: row nowrap;
  padding-left: 10%;
  padding-top: 5%;
  /* border-bottom: 2px solid white; */
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
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  padding: 23px;
  /* box-shadow: 0 -2px 4px -4px #333; */
`;

export const SiderButtonLabel = styled.div`
  cursor: pointer;
  width: 224px;
  height: 85.91px;
  display: flex;
  flex-flow: column nowrap;
  margin-top: 9%;
  gap: 14px;
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

export const LogoutSetting = styled.div`
  width: 50%;
`;

export const SettingDiv = styled.div`
  display: flex;
  flex-direction: row;
  cursor: pointer;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  color: #676767;
  position: relative;
  bottom: 50px;
`;
