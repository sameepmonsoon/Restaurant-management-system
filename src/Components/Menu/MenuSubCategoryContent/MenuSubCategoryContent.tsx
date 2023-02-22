import React, { useEffect, useState } from "react";
import { HiOutlinePencil } from "react-icons/hi";
import { MdAdd, MdDeleteOutline } from "react-icons/md";
import { useLocation, useParams } from "react-router-dom";
import { HTTPMethods } from "../../../Utils/HTTPMock";
import ActionButton from "../../ActionButton/ActionButton";
import MenuSubCategories from "../MenuSubCategories/MenuSubCategories";
import MenuSubCategoryItem from "../MenuSubCategoryItem/MenuSubCategoryItem";
import { useSubCategoryIdStore } from "../../../Pages/states/MenuCategory.state";
import {
  MenuSubCategoryContentMain,
  MenuSubCategoryContentDiv,
} from "./MenuSubCategoryContent.style";
import { toast } from "react-toastify";
import image from "../../../../public/assets/KBLimage.jpg";
export default function MenuSubCategoryContent() {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [category, setCategory] = useState([]);
  const { drawerSubCatId, setDrawerSubCatId } = useSubCategoryIdStore();
  // const [subCatList, setSubCatList] = useState(subCategoryList);
  const [mapSubcatId, setMapSubcatId] = useState<number | any>(1);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);

    HTTPMethods.getMenu(`/menu/readsubcatgory/${drawerSubCatId}`)
      .then(async (res: any) => {
        console.log("data received from subcat", res.data.payload);
        setCategory(res.data.payload.dish);
        console.log("getting sub category", category);
        setDrawerSubCatId(null);
      })
      .catch(async (err) => {
        toast.info("Server is down to display the table data.", {
          theme: "colored",
          hideProgressBar: true,
          autoClose: 2000,
          position: "bottom-right",
          toastId: "info1",
        });
      })
      .finally(function () {
        setDrawerSubCatId("");
        console.log("drawer data from menu", drawerSubCatId);
      });
  }, [id]);
  // @ts-ignore

  let filteredCat = [];
  // @ts-ignore
  let data = category.map((item) => item.subcategory_name.toLocaleLowerCase());
  filteredCat = category
    .filter((item, idx) => category.indexOf(item) === idx)
    .sort(function (a, b) {
      // @ts-ignore
      let x = a.subcategory_name.toLowerCase();
      // @ts-ignore
      let y = b.subcategory_name.toLowerCase();
      if (x < y) {
        return -1;
      }
      if (x > y) {
        return 1;
      }
      return 0;
    });

  return (
    <MenuSubCategoryContentMain>
      {loading ? (
        <h1>Loading.....</h1>
      ) : (
        <MenuSubCategoryContentDiv>
          {category.map((subcat, index) => (
            <MenuSubCategories
              // @ts-ignore
              title={subcat.subcategory_name}
              // @ts-ignore
              amount={subcat.id}
              deleteIcon={<MdDeleteOutline size={25} />}
              editIcon={<HiOutlinePencil size={25} />}
              onClick={() => {
                // @ts-ignore
                setMapSubcatId(index);
                // @ts-ignore

                // setSelectSubCategory(!selectSubCategory);
              }}
              clicked={mapSubcatId}
              // @ts-ignore
              subcatId={index}
              // @ts-ignore

              categoryList={filteredCat}
              // @ts-ignore
              active={subcat.active}
              // @ts-ignore
              key={subcat.id}
              // @ts-ignore
              subCatImage={`http://backend1.kpop.com.np/public/SubCategory_Images/${subcat.subcategory_image}`}
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
      {mapSubcatId.length != 0 && (
        <MenuSubCategoryItem
          subcatParentId={mapSubcatId}
          itemName={`Spicy Ramen ${mapSubcatId}`}
          subCatItemList={subCatItemList}
          subCatItemImage={image}
        />
      )}
    </MenuSubCategoryContentMain>
  );
}

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
