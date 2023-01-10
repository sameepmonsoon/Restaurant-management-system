import styled from "@emotion/styled";

export const MainDiv = styled("div")`
  width: 100%;
  height: 100vh;
  background-color: white;
  padding: 0;
  margin: 0;
  display: flex;
  font-family: "Inter", sans-serif;
  overflow: hidden;
  position: absolute;
`;
export const Image = styled("image")`
  width: 1200px;
  height: 1080px;
  overflow: hidden;
  /* position: absolute; */
`;
export const Caption = styled("p")`
  position: relative;
  bottom: 350px;
  color: white;
  line-height: 52px;
  font-weight: 400;
  font-size: 31px;
  font-family: "Inter", sans-serif;
  margin-left: 15px;
  display: block;
`;
export const FormDiv = styled("div")`
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Button = styled("button")`
  border: 1.2px solid #000000;
  border-radius: 10px;
  /* width: 15.625rem; */
  /* height: 2.813rem; */
  width: 22rem;
  height: 3rem;
  background: #1e1e1e;
  color: white;
  margin-top: 0.5em;
  &:hover {
    background-color: #545454;
    cursor: pointer;
  }
`;
export const FormError = styled("p")`
  color: red;
`;
export const Title = styled("p")`
  width: 126px;
  height: 52px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 52px;
  line-height: 52px;
  /* identical to box height, or 100% */
  letter-spacing: -0.06em;
  color: #1e1e1e;
  margin-bottom: 2rem;
  font-family: "Inter", sans-serif;
`;
