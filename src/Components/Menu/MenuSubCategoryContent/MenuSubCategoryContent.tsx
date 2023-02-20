import React, { useEffect, useState } from "react";
import { HiOutlinePencil } from "react-icons/hi";
import { MdAdd, MdDeleteOutline } from "react-icons/md";
import { useLocation, useParams } from "react-router-dom";
import ActionButton from "../../ActionButton/ActionButton";
import MenuSubCategories from "../MenuSubCategories/MenuSubCategories";
import MenuSubCategoryItem from "../MenuSubCategoryItem/MenuSubCategoryItem";
import {
  MenuSubCategoryContentMain,
  MenuSubCategoryContentDiv,
} from "./MenuSubCategoryContent.style";

export default function MenuSubCategoryContent() {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [subCatList, setSubCatList] = useState(subCategoryList);
  const [mapSubcatId, setMapSubcatId] = useState<number | any>(1);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, [id]);
  return (
    <MenuSubCategoryContentMain>
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
                setMapSubcatId(subcat.id);
                // setSelectSubCategory(!selectSubCategory);
              }}
              clicked={mapSubcatId}
              subcatId={subcat.id}
              categoryList={subCatList}
              active={subcat.active}
            />
          ))}
          <ActionButton
            icon={<MdAdd size={25} />}
            label={"Add SUBCATEGORY "}
            onClick={() => {}}
            forMenuSubcat={true}
          />
        </MenuSubCategoryContentDiv>
      )}
      {mapSubcatId && (
        <MenuSubCategoryItem
          subcatParentId={mapSubcatId}
          itemName={`Spicy Ramen ${mapSubcatId}`}
          subCatItemList={subCatItemList}
        />
      )}
    </MenuSubCategoryContentMain>
  );
}
const subCategoryList = [
  { category: "Special Dish", subcategory: "ramyen", active: false, id: 1 },
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

const subCatItemList = [
  { subCatItem: "ramyen", active: false, id: 1 },
  { subCatItem: "dosa", active: false, id: 2 },
  { subCatItem: "daal vaat", active: false, id: 3 },
  { subCatItem: "ramyen", active: false, id: 4 },
  { subCatItem: "gimbap", active: false, id: 5 },
  { subCatItem: "noodles", active: false, id: 6 },
  { subCatItem: "chowmein", active: false, id: 7 },
  { subCatItem: "soba", active: false, id: 8 },
  { subCatItem: "wine", active: false, id: 9 },
  { subCatItem: "eggs", active: false, id: 10 },
];
