import React, { useState, useEffect } from "react";
import { HiOutlinePencil } from "react-icons/hi";
import { MdAdd, MdDeleteOutline } from "react-icons/md";
import { toast } from "react-toastify";
import { MenuSubCategoryItemTypes } from "../../../Types/Components/MenuSubCategoryItemTypes";
import { HTTPMethods } from "../../../Utils/HTTPMock";
import ActionButton from "../../ActionButton/ActionButton";
import MenuSubCategories from "../MenuSubCategories/MenuSubCategories";
import {
  MenuSubCatItemDiv,
  ItemTitle,
  ItemContentDivContainer,
} from "./MenuSubCategoryItem.style";

const MenuSubCategoryItem = (props: MenuSubCategoryItemTypes) => {
  const { subcatParentId, itemName, subCatItemList, subCatItemImage } = props;
  const [category, setCategory] = useState<any>([]);
  const [hoveredIndex, setHoveredIndex] = useState();
  useEffect(() => {
    HTTPMethods.getMenu(
      `/menu/readdishwithsubcategory/f576bcb4-ca75-490b-a83b-3c12862bf3fb`
    )
      .then(async (res: any) => {
        setCategory(res.data.payload.dish);
      })
      .catch(async (err: any) => {
        toast.error("error", {});
      });
  }, []);
  console.log("subcategory item", category);
  return (
    <>
      <MenuSubCatItemDiv>
        <ItemTitle>Items</ItemTitle>
        <ItemContentDivContainer>
          <>
            {category.map((item: any, index: any) => {
              <MenuSubCategories
                title={item.dish_name}
                amount={1}
                deleteIcon={<MdDeleteOutline size={25} />}
                editIcon={<HiOutlinePencil size={25} />}
                onClick={() => {
                  console.log(category);
                }}
                clicked={true}
                subcatId={""}
                categoryList={[]}
                key={subcatParentId}
                subCatImage={subCatItemImage}
              />;
            })}

            <ActionButton
              icon={<MdAdd size={25} />}
              label={"Add ITEM"}
              onClick={() => {}}
              forMenuSubcat={true}
            />
          </>
        </ItemContentDivContainer>
      </MenuSubCatItemDiv>
    </>
  );
};

export default MenuSubCategoryItem;
