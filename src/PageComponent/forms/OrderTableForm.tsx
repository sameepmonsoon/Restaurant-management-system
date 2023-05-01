import { CiSquareMinus, CiSquarePlus } from "react-icons/ci";
import { HiOutlineTrash } from "react-icons/hi";
import CategoryButton from "../../Components/CategoryButton/CategoryButton";
import { CategoryButtonsContainer,OrderTableFormDiv,
    ButtonsDiv, TableDiv, RowDiv , Icons} from "../../Components/CategoryButton/CategoryButton.style";
import { Button } from "../../Components/TextField.Style";
const OrderTableForm = () => {
    return (
        <OrderTableFormDiv>
            <CategoryButtonsContainer>
                <CategoryButton label="Special Dish"
                    backgroundColor="#FFCD7C"
                    onClick={()=>{}}
                />
                <CategoryButton label="Basic Korean"
                    backgroundColor="#F99A93"
                    onClick={()=>{}}
                />
                 <CategoryButton label="Side Dish"
                    backgroundColor="#7AE2DB"
                    onClick={()=>{}}
                /> 
                <CategoryButton label="Breakfast "
                backgroundColor="#72CD8F"
                onClick={()=>{}}
                />
                 <CategoryButton label="Hard Drinks "
                    backgroundColor="#86CEF0"
                    onClick={()=>{}}
                />
                 <CategoryButton label="Soft Drinks"
                    backgroundColor="#FC9CC5"
                    onClick={()=>{}}
                />
                 <CategoryButton label="Appetizers "
                    backgroundColor="#B6B9FE"
                    onClick={()=>{}}
                />
            </CategoryButtonsContainer>
            <h6>Order List</h6>

            <TableDiv style={{width: "100%"}}>
                
                <RowDiv>
                    <th>
                        S.N
                    </th>
                    <th>Items</th>
                    <th> Qty</th>
                    <th>Rate</th>
                    <th>Amount</th>
                </RowDiv>

                <RowDiv>
                    <td>01</td>
                    <td>Pork Cutlet</td>
                    <td>  
                        <Icons><CiSquareMinus size= {20}/></Icons>   2 <Icons><CiSquarePlus size= {20} />  </Icons> 
                    </td>
                    <td>200</td>
                    <td className="amount"> 
                        <span>200</span> 
                        <Icons><HiOutlineTrash size= {19}/> </Icons> 
                    
                    </td>
                </RowDiv>

                <RowDiv>
                    <td>02</td>
                    <td>Pork Cutlet</td>
                    <td>  
                        <Icons><CiSquareMinus size= {20}/></Icons>   2 <Icons><CiSquarePlus size= {20} />  </Icons> 
                    </td>
                    <td>200</td>
                    <td className="amount"> 
                        <span>200</span> 
                        <Icons><HiOutlineTrash size= {19}/> </Icons> 
                    
                    </td>
                </RowDiv>

            </TableDiv>
            <ButtonsDiv>
                <Button>TRANSFER KOT</Button>
                <Button>ORDER SUBMIT</Button>
            </ButtonsDiv>
                


        </OrderTableFormDiv>

      );
}
 
export default OrderTableForm;