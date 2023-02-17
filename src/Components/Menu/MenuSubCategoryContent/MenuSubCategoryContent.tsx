import React, { useEffect, useState } from "react";
import { HiOutlinePencil } from "react-icons/hi";
import { MdDeleteOutline } from "react-icons/md";
import { useLocation, useParams } from "react-router-dom";
import MenuSubCategories from "../MenuSubCategories/MenuSubCategories";
import { MenuSubCategoryContentDiv } from "./MenuSubCategoryContent.style";

export default function MenuSubCategoryContent() {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [subCatList, setSubCatList] = useState(subCategoryList);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, [id]);
  return (
    <div>
      {loading ? (
        <h1>Loading.....</h1>
      ) : (
        <MenuSubCategoryContentDiv>
          {subCatList.map((subcat) => (
            <MenuSubCategories
              title={subcat.subcategory}
              amount={subcat.id}
              deleteIcon={<MdDeleteOutline size={25} />}
              editIcon={<HiOutlinePencil size={25} />}
              onClick={() => {
                console.log("fas");
                // setSelectSubCategory(!selectSubCategory);
              }}
              clicked={subcat.active}
              visible={subcat.id}
              categoryList={subCatList}
            />
          ))}
        </MenuSubCategoryContentDiv>
      )}
    </div>
  );
}
const subCategoryList = [
  { category: "Special Dish", subcategory: "ramyen", active: true, id: 1 },
  { category: "Basic Korean", subcategory: "dosa", active: false, id: 2 },
  { category: "Side Dish", subcategory: "daal vaat", active: false, id: 3 },
  { category: "Breakfast", subcategory: "ramyen", active: false, id: 4 },
  { category: "Appetizers", subcategory: "gimbap", active: false, id: 5 },
  { category: "Hard Drinks", subcategory: "noodles", active: false, id: 6 },
  { category: "Soft Drinks", subcategory: "chowmein", active: false, id: 7 },
  { category: "japanese", subcategory: "soba", active: false, id: 8 },
  { category: "JAPANESE", subcategory: "wine", active: false, id: 9 },
  { category: "CHINESE", subcategory: "eggs", active: false, id: 10 },
];
