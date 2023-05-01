import styled from "@emotion/styled";
export const AllItemsDiv = styled("span")`
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
  gap: 7px;
  padding: 0;
  color: #676767;
  width: 50%;
`;

export const Title = styled("span")`
  order: 1;
  text-transform: uppercase;
  font-weight: 500;
  font-size: 15px;
  line-height: 19px;
  color: #676767;
`;
export const TotalItemDiv = styled("span")`
  background: #ffffff;
  order: 2;
  color: #676767;
  min-width: 50px;
  max-width: 300px;
  overflow: hidden;
  height: 30px;
  display: flex;
  padding: 0px 5px;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  padding-left: 5px;
`;
