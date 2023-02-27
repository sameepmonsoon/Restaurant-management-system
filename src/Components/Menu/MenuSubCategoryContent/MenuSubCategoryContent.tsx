import React, { useEffect, useState } from "react";
import { HiOutlinePencil } from "react-icons/hi";
import { MdAdd, MdDeleteOutline } from "react-icons/md";
import { useParams } from "react-router-dom";
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
  const [category, setCategory] = useState<any>([]);
  const { drawerSubCatId, setDrawerSubCatId } = useSubCategoryIdStore();
  const [mapSubcatId, setMapSubcatId] = useState<number | any>(1);
  const [subCatItemVisible, setSubCatItemVisible] = useState(false);
  const [subCategoryName, setSubCategoryName] = useState<string | any>("");
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 700);
    HTTPMethods.getMenu(`/menu/readsubcatgory/${drawerSubCatId}`)
      .then(async (res: any) => {
        if (res.data.payload.subcategory.length === 0) {
          setCategory([]);
        } else {
          setCategory(res.data.payload.subcategory);
        }
      })
      .catch(async (err) => {
        toast.error("cannot fetch subcategory item.", {
          theme: "colored",
          hideProgressBar: true,
          autoClose: 2000,
          position: "bottom-right",
          toastId: "info1",
        });
        setCategory([]);
      });
  }, [id]);
  // @ts-ignore

  let filteredCat = [];
  let data = category.map((item: any) =>
    item.subcategory_name.toLocaleLowerCase()
  );
  filteredCat = category
    .filter((item: any, idx: any) => category.indexOf(item) === idx)
    .sort(function (a: any, b: any) {
      let x = a.subcategory_name.toLowerCase();
      let y = b.subcategory_name.toLowerCase();
      if (x < y) {
        return -1;
      }
      if (x > y) {
        return 1;
      }
      return 0;
    });
  console.log(subCatItemVisible, drawerSubCatId);
  return (
    <MenuSubCategoryContentMain>
      {loading ? (
        <h1>Loading.....</h1>
      ) : (
        <MenuSubCategoryContentDiv>
          {category.map((subcat: any, index: any) => (
            <MenuSubCategories
              title={subcat.subcategory_name}
              amount={subcat.id}
              deleteIcon={<MdDeleteOutline size={25} />}
              editIcon={<HiOutlinePencil size={25} />}
              onClick={() => {
                // set for click event selects the subcat
                setMapSubcatId(index);
                setSubCatItemVisible(true);
                setSubCategoryName(subcat.subcategory_name);
              }}
              clicked={mapSubcatId}
              subcatId={index}
              // @ts-ignore
              categoryList={filteredCat}
              active={subcat.active}
              key={subcat.id}
              subCatImage={`http://backend1.kpop.com.np/public/SubCategory_Images/${subcat.subcategory_image}`}
              subCatIdforItem={subcat.subcategory_id}
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

      {subCatItemVisible && (
        <MenuSubCategoryItem subcatParentId={mapSubcatId} />
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
