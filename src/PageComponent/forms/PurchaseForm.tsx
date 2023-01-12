import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { TextField } from "../../Components/TextField";
import * as yup from "yup";
import { DrawerButtonDiv } from "../Dashboard/Drawer/Drawer.styles";
import { Button, LabelDiv } from "../../Components/TextField.Style";
import { HTTPMethods } from "../../Utils/HTTPMock";
import { useDrawer } from "../../Pages/states/Drawer.state";
import { toast } from "react-toastify";
import { type } from "os";
export default function PurchaseForm() {
  const { open, toggleDrawer, drawerToEditData } = useDrawer();
  const [render, setRender] = useState(false);
  let schema = yup.object().shape({
    name: yup.string().required("is required"),
    product_type: yup.string().required("is required"),
    quantity: yup.number().required("is required"),
    date: yup.date().required(" is required."),
    status: yup.string().required("Status is required."),
    per_piece: yup.number().required("is required.").positive().integer(),
  });
  const {
    values,
    errors,
    handleChange,
    handleSubmit,
    handleReset,
    setValues,
    touched,
    resetForm,
  } = useFormik({
    initialValues: {
      product_type: "",
      name: "",
      quantity: "",
      per_piece: "",
      date: "",
      status: "",
    },
    onSubmit: (values, action) => {
      HTTPMethods.post("/purchase/create", values)
        .then(function (resp) {
          action.resetForm();
          toggleDrawer();
        })
        .catch(function (err) {
          toast.success("Error in purchase creation", {
            theme: "colored",
            hideProgressBar: true,
            autoClose: 1000,
          });
        });
    },
    validationSchema: schema,
  });
  console.log("dfas");
  useEffect(() => {
    if (drawerToEditData && drawerToEditData.type === "purchase") {
      console.log("fasgkhdfiugig", drawerToEditData.data);
      setValues({
        product_type: drawerToEditData.data.product_type,
        name: drawerToEditData.data.name,
        quantity: drawerToEditData.data.quantity,
        per_piece: drawerToEditData.data.per_piece,
        date: drawerToEditData.data.purchased_date,
        status: drawerToEditData.data.status,
      });
    }
  }, [drawerToEditData]);
  console.log("values are", values, drawerToEditData);
  return (
    <form onSubmit={handleSubmit}>
      <TextField
        name="product_type"
        type="text"
        defaultValue={
          drawerToEditData.data ? drawerToEditData.data.product_type : ""
        }
        placeholder="Product"
        error={
          touched.product_type && errors.product_type
            ? errors.product_type
            : null
        }
        onChange={handleChange}
        label="Product Type"
      />
      <TextField
        name="name"
        type="text"
        defaultValue=""
        placeholder="Product"
        error={touched.name && errors.name ? errors.name : null}
        onChange={handleChange}
      />
      <TextField
        name="quantity"
        type="number"
        defaultValue=""
        placeholder="Quantity"
        onChange={handleChange}
        error={touched.quantity && errors.quantity ? errors.quantity : null}
      />
      <TextField
        name="per_piece"
        type="number"
        defaultValue=""
        placeholder="1000"
        onChange={handleChange}
        error={touched.per_piece && errors.per_piece ? errors.per_piece : null}
        label="Per Price"
      />

      <TextField
        name="date"
        type="date"
        error={touched.date && errors.date ? errors.date : null}
        onChange={handleChange}
      />

      <div style={{ display: "flex", flexDirection: "column" }}>
        {touched.status && errors.status ? (
          <LabelDiv error={errors.status}>{errors.status}</LabelDiv>
        ) : (
          <LabelDiv>Status</LabelDiv>
        )}
        <select name="status" onChange={handleChange}>
          <option selected>Complete</option>
          <option>Cancelled</option>
          <option>Pending</option>
          <option>Pre-order</option>
        </select>
      </div>
      <DrawerButtonDiv>
        <Button
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            handleSubmit();
          }}>
          add
        </Button>

        {/* initially type="" was not specified. So, the clear button was not working */}
        <Button onClick={() => resetForm()} type="reset">
          clear
        </Button>
      </DrawerButtonDiv>
    </form>
  );
}
