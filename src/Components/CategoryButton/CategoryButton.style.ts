import styled from "@emotion/styled";

export const OrderTableFormDiv=styled("div")`
    /* margin-left: 10px; */
    width: 400px;
`
export const CategoryButtonsContainer= styled("div")`
    display: grid;
    grid-template-columns: auto auto auto auto;
    height: 14vh;
    width: 100%;
    border-bottom: 1px solid rgba(0, 0, 0, 0.07);
    margin-bottom: 30px;
`

export const CategoryButtonDiv = styled("div")`
border-radius: 5px;
font-family: 'Inter';
font-style: normal;
font-weight: 500;
font-size: 13px;
display: flex;
justify-content: center;
align-items: center;
width: 93px;
height: 50px;
`
export const ButtonsDiv = styled("div")`
    display: flex;
    gap: 10px;
    justify-content: flex-end;
  
`

export const TableDiv = styled("table")`
    width: 100%;
    border-collapse: separate;
    border-spacing: 0px 7px;
    margin-bottom: 80px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 15px;

    th{
        font-size: 16px;
    }

    td{
        color: #424242;
    }
    td.amount{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    td.amount > span{

    }
    th, td{
        border-right: 1.5px solid rgba(223, 223, 223, 0.46);
        padding: 0px 10px

    }

  
`

export const RowDiv= styled("tr")`
    background-color: #F7F7F7;
    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.15);
    line-height: 45px;
`

export const Icons = styled.div`
  /* box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.15); */
  cursor: pointer;
  display: inline-block;
`
