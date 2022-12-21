import styled from "@emotion/styled";

export const MainLoginDiv=styled('div') `
width: 100%;
height: 100vh;
background-color:white ;
padding: 0;
margin: 0;
display: flex;
/* font-family: 'Inter', sans-serif; */
overflow: hidden;
`
export const Image =styled('image')`
width: 1200px;
height: 1080px;
overflow: hidden;
/* position: absolute; */

`
export const FormDiv = styled('div')`
display: flex;
align-items: center;
justify-content: center;

`
export const Title= styled('p')`
width: 126px;
height: 52px;
font-family: 'Inter';
font-style: normal;
font-weight: 700;
font-size: 52px;
line-height: 52px;
/* identical to box height, or 100% */
letter-spacing: -0.06em;
color: #1E1E1E;
margin-bottom: 2rem;
font-family: 'Inter', sans-serif;
`
export const PasswordField = styled('div')`
display: flex;
justify-content: space-between;
`
// export  const Link= styled('link')`
// text-decoration: none;
// `

export const FormError = styled('p')`
color: red;
`