import styled from "@emotion/styled";

export const SiderDiv = styled.div`
    width: 270px;
    height: 936px;
    background-color: #FFFFFF;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.05);
`
export const SiderLogoDiv = styled.div`
    display: flex;
    flex-flow: row nowrap;
    padding-left:10%;
    padding-top: 5%;
    border-bottom: 2px solid white;
    line-height: 50px;
    width: 270px;
    height: 86px;   
    column-gap: 10px;
`
export const SiderIcon = styled.section`
width: 48px;
height: 48px;
margin-right: 0.6rem;
cursor: pointer;

`

export const SiderLogoName = styled('div') `
width: 80px;
height: 49px;



`;

export const  SiderLogoHeader = styled('div')`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 25px;
    line-height: 30px;
    letter-spacing: 0.04em;
    color: #000000;
    padding-top :3px ;
`;

export const  SiderLogoSubHeader = styled('div')`
    width: 80px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 13px;
    line-height: 16px;
    color: #000000; 
`

export const SiderMainDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100vh;
    padding: 23px;
    box-shadow: 0 -2px 4px -4px #333;

`

export  const SiderButtonLabel = styled.div`
    cursor: pointer;
    width: 224px;
    height: 85.91px;
    display: flex;
    flex-flow: column nowrap;
    margin-top:9%;
    gap:14px;
`

export const SiderButtonTitle =styled('div')`
text-transform: uppercase;
font-family: 'Inter';
font-style: normal;
font-weight: 600;
font-size: 14px;
line-height: 19px;
color: #1E1E1E;

`

export  const LogoutSetting = styled.div`
    width: 50%;
`

export const SettingDiv = styled.div`
    display: flex;
    flex-direction: row;
    cursor: pointer;
    
font-family: 'Inter';
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 22px;
color: #676767;

`
