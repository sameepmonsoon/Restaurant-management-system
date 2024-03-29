import { useFormik } from "formik";
import React from "react";
import { TextField } from "../Components/TextField";
import * as yup from "yup";
import InventoryCard from "../Components/InventoryCard/InventoryCard";
import { MdAdd, MdOutlineShoppingCart } from "react-icons/md";
import SiderButton from "../Components/SiderButton/SiderButton";
import { FaBeer } from "react-icons/fa";
import {RiArrowDropDownLine} from "react-icons/ri";

import { DashboardComponents } from "./Components.styles";
import ActionButton from "../Components/ActionButton/ActionButton";
import {
  Children,
  ChildrenItem,
} from "../Components/SiderButton/SiderButton.Style";

export default function Components() {
  let schema = yup.object().shape({
    name: yup.string().required("is required"),
    email: yup.string().required(),
  });

  const { values, handleSubmit, handleChange, errors } = useFormik({
    initialValues: { name: "", email: "" },
    onSubmit: (values) => {
      console.log("values", values);
    },
    validationSchema: schema,
  });
  function onSumbit(e: any) {
    e.preventDefault();
    console.log("submitted", errors);
  }
  return (
    <>
      <div>Components</div>

      <DashboardComponents>
        <TextField
          name="name"
          onChange={handleChange}
          error={errors.name}
          prefix={"name"}
          suffix={"suffix"}
        />

        <InventoryCard
          title={"purchase"}
          icon={<MdOutlineShoppingCart size={30} />}
          amount={"10,000"}
          cardType="purchase"
          active={true}
        />

        <ActionButton
          icon={<MdAdd fontSize="1.4em" />}
          label={"ADD PURCHASE"}
          onClick={(e: React.MouseEvent<HTMLElement>) => console.log("Clicked")}
        />
         <SiderButton titleIcon={<FaBeer />} title="Icon" childrenIcon={<RiArrowDropDownLine/>}>
        <Children>
          <ChildrenItem>Purchase</ChildrenItem>
          <ChildrenItem>Sales</ChildrenItem>
          <ChildrenItem>Stock</ChildrenItem>
        </Children>
      </SiderButton>
      </DashboardComponents>
     
    </>
  );
}
