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
import { DOMToggleButtonName } from "../../Utils/DOMToggleButtonName";
import { useProductStore } from "../../store/filtered";
export default function PurchaseForm() {
  const { open, toggleDrawer, drawerToEditData ,setDrawerData} = useDrawer();
  const [render, setRender] = useState(false);

  const fetchProducts = useProductStore((state:any)=> (state.fetchProducts))

  // const [products, setProducts] = useProductStore ((state:any)=> [state.products, state.setProducts])
  let schema = yup.object().shape({
    name: yup.string().required("is required"),
    unit: yup.string().required("required"),
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
      unit:''
    },
    onSubmit: (values, action) => {
      if(Object.keys(drawerToEditData).length){
        // Edit data
         HTTPMethods.put(`/purchase/update/${drawerToEditData.data.purchase_id} `, values)
        .then(function (resp) {
          action.resetForm();
          toast.success("Purcahse edit successfully", {
            theme: "colored",
            hideProgressBar: true,
            autoClose: 1000,
          });
          fetchProducts()
          toggleDrawer();

        })
        .catch(function (err) {
          toast.success("Error in purchase creation", {
            theme: "colored",
            hideProgressBar: true,
            autoClose: 1000,
          });
        })
        .finally(function(){
          toggleDrawer();
          setDrawerData({})
        })
        return
      }

      HTTPMethods.post("/purchase/create", values)
        .then(function (resp) {
          toast.success("Product added successfully", {
            theme: "colored",
            hideProgressBar: true,
            autoClose: 1000,
          });
          fetchProducts()
          toggleDrawer();
          action.resetForm();

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
  useEffect(() => {
    const product_type=document.getElementById("input-product_type")
    const name=document.getElementById("input-name")
    // const net_price=document.getElementById("input-net_price")
    const purchased_date=document.getElementById("input-date")
    const quantity=document.getElementById("input-quantity")
    const status =document.getElementById("input-status")
    const unit=document.getElementById("input-unit")
    const per_piece=document.getElementById("input-per_piece")

    if (drawerToEditData && drawerToEditData.type === "purchase") {
      const {data}=drawerToEditData
      setValues({
        product_type: drawerToEditData.data.product_type,
        name: drawerToEditData.data.name,
        quantity: drawerToEditData.data.quantity,
        per_piece: drawerToEditData.data.per_piece,
        date: drawerToEditData.data.purchased_date,
        status: drawerToEditData.data.status,
        unit: drawerToEditData.data.unit
      });
     
      // Change the add button name to edit
      DOMToggleButtonName("Edit")
      // @ts-ignore
      product_type.value=data.product_type
      // @ts-ignore

      name.value=data.name
      // @ts-ignore

      // net_price.value=data.net_price
      // // @ts-ignore

      purchased_date.value=data.purchased_date
      // @ts-ignore

      quantity.value=data.quantity
      // @ts-ignore

      status.value=data.status
      // @ts-ignore
      unit.value=data.unit
      // @ts-ignore
      per_piece.value=data.per_piece
    }
    else{
      // @ts-ignore
      product_type.value=""
      // @ts-ignore

      name.value=""
      // @ts-ignore

      // net_price.value=data.net_price
      // // @ts-ignore

      purchased_date.value=""
      // @ts-ignore

      quantity.value=""
      // @ts-ignore

      status.value=""
      // @ts-ignore
      unit.value=""
      // @ts-ignore
      per_piece.value=""
    }
    
  }, [drawerToEditData]);
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
      <div style={{display:"flex",gap:"10px"}}>
      <TextField
        name="quantity"
        type="number"
        defaultValue=""
        placeholder="Quantity"
        onChange={handleChange}
        error={touched.quantity && errors.quantity ? errors.quantity : null}
        // @ts-ignore
        style={{width:"300px" }}
      />
      <TextField
        name="unit"
        defaultValue=""
        placeholder="unit"
        onChange={handleChange}
        error={touched.unit && errors.unit ? errors.unit : null}
        // @ts-ignore
        style={{width:"100px" }}
      />
      </div>
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
        <select name="status" onChange={handleChange} id="input-status">
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
