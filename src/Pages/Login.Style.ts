import styled from "@emotion/styled";
import { Link } from "react-router-dom";

//main container for both image and form
export const MainLoginDiv = styled("div")`
  width: 100vw;
  height: 100vh;
  position: fixed;
  padding: 0;
  margin: 0;

  display: flex;
  flex-flow: row nowrap;
  font-family: "Inter", sans-serif;
  input {
    padding-left: 5%;
    padding-right: 13%;
    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    line-height: 10px;
    color: #515151;
  }
    @media screen and (max-width: 1100px) {
      flex-flow: column wrap;
    }
  `;

//image container
export const Image = styled("div")`
  order: 1;
  flex: 1;
  background-image: url("/assets/KBLimage.jpg");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-flow: column wrap;
  h1 {
    order: 1;
    font-weight: 600;
    width: 100%;
    height: 52px;
    font-size: 35px;
    line-height: 52px;
    color: #ffffff;
  }
  h2 {
    order: 2;
    content: "";
    width: 154px;
    height: 1px;
    background-color: #ffffff;
  }
  h3 {
    order: 3;
    width: 358px;
    height: 52px;
    font-weight: 500;
    font-size: 26px;
    line-height: 52px;
    letter-spacing: -0.01em;
    color: #ffffff;
  }

  @media screen and (max-width: 1100px) {
    justify-content: center;
    align-items: center;
    /* width: 100%;
    height: 500px; */
    margin: 0;
  }
`;
//div for image title
export const ImageTitleDiv = styled("div")`
  position: relative;
  top: 270px;
  left: 50px;
  display: flex;
  flex-flow: column wrap;
  gap: 10px;
`;

//container div for form
export const FormDiv = styled("form")`
  order: 2;
  display: flex;
  margin-right: 10px;
  flex-flow: column nowrap;
  align-items: flex-start;
  justify-content: center;
  row-gap: 10px;

  @media screen and (max-width: 1100px) {
    justify-content: flex-end;
    align-items: center;
    padding-bottom: 10px;
    margin-right: 0;
  }
`;

// login title inside form div
export const Title = styled("p")`
  width: 150px;
  height: 52px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 52px;
  line-height: 52px;
  letter-spacing: 0.01em;
  color: #1e1e1e;
  margin-bottom: 2rem;
  font-family: "Inter", sans-serif;
`;

// password field div
export const PasswordField = styled("div")`
  display: flex;
  align-items: flex-start;
  margin-bottom: 10px;
  flex-flow: row;
  width: 370px;
  height: 50px;
  column-gap: 6em;
  justify-content: start;
  color: #000000;
`;

// for remember me ----- forget password div
export const RemembermeDiv = styled("span")`
  display: flex;
  align-items: center;
  column-gap: 5px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 20px;
  text-align: center;
  order: 1;
  &:hover {
    color: #545454;
    cursor: pointer;
  }
`;

//passing react-router-dom as styld component
export const ForgetPassword = styled(Link)`
  order: 2;
  text-decoration: none;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 19px;
  text-align: center;
  color: #000000;
  &:hover {
    color: #545454;
    cursor: pointer;
  }
`;

// export  const Link= styled('link')`
// text-decoration: none;
// `

export const FormError = styled("span")`
  color: #b00300;
  margin-bottom: 15px;
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
export const EmailContainer = styled("span")`
  height: 84px;
`;

// for password field and toggle icon
export const PasswordContainer = styled("span")`
  height: 84px;
  margin-top: 0.9rem;
`;

// for eye on and off toggle icon
export const ToggleIcon = styled("span")`
  position: relative;
  left: 310px;
  top: -61px;
  color: #515151;
`;
