import { CategoryButtonType } from "../../Types/Components/CategoryButtonType";
import { CategoryButtonDiv } from "./CategoryButton.style";

const CategoryButton = (props: CategoryButtonType) => {
    const {label, backgroundColor} = props;
    return ( 
        <>
            <CategoryButtonDiv style={{backgroundColor}}>
                {label}
            </CategoryButtonDiv>
        </>
     );
}
 
export default CategoryButton;