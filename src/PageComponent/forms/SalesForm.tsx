import { useFormik, Form } from "formik";
import React, { useEffect } from "react";
import { TextField } from "../../Components/TextField";
import { Button, LabelDiv } from "../../Components/TextField.Style";
import { DrawerButtonDiv } from "../Dashboard/Drawer/Drawer.styles";
import * as yup from "yup";
import { HTTPMethods } from "../../Utils/HTTPMock";
import { useDrawer } from "../../Pages/states/Drawer.state";
import { toast } from "react-toastify";
import { useRef } from "react";
import { DOMToggleButtonName } from "../../Utils/DOMToggleButtonName";
import { useSalesStore } from "../../store/filtered";
export default function SalesForm() {
  const { open, toggleDrawer,drawerToEditData ,setDrawerData } = useDrawer();

  const fetchSales = useSalesStore((state:any)=> (state.fetchSales))
  let useref = useRef();
  let schema = yup.object().shape({
    item_name: yup.string().required("is required"),
    quantity: yup.number().required("is required").positive().integer(),
    per_piece: yup.number().required("is required").positive().integer(),
    date: yup.date().required("is required"),
    status: yup.string().required("Status is required"),
    unit: yup.string().required("required"),

  });
  const {
    values,
    errors,
    handleChange,
    handleSubmit,
    handleReset,
    resetForm,
    touched,
    setValues,
  } = useFormik({
    initialValues: {
      item_name: "",
      quantity: "",
      per_piece: "",
      status: "",
      date: "",
      unit:''
    },
    onSubmit: (values, action) => {
      if(Object.keys(drawerToEditData).length){
        // Edit data
        HTTPMethods.put(`/new_sales/update/${drawerToEditData.data?.id} `, values)
        .then(function (resp) {
          toast.success("Sales edit successfully", {
            theme: "colored",
            hideProgressBar: true,
            autoClose: 1000,
          });
          fetchSales()
          action.resetForm();
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


      HTTPMethods.post("/new_sales/create", values)
        .then(function (resp) {
          toast.success("Product Added successfully", {
            theme: "colored",
            hideProgressBar: true,
            autoClose: 1000,
          });
          fetchSales()
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
  useEffect(() => {
    const item_name=document.getElementById("input-item_name")
    // const net_price=document.getElementById("input-net_price")
    const quantity=document.getElementById("input-quantity")
    const status =document.getElementById("input-status")
    const unit=document.getElementById("input-unit")
    const per_piece=document.getElementById("input-per_piece")
    const date=document.getElementById("input-date")
    if (drawerToEditData && drawerToEditData.type === "purchase") {
      const {data}=drawerToEditData
      setValues({
        item_name: drawerToEditData.data.item_name,
        quantity: drawerToEditData.data.quantity,
        per_piece: drawerToEditData.data.per_piece,
        date: drawerToEditData.data.date,
        status: drawerToEditData.data.status,
        unit: drawerToEditData.data.unit
      });
     
      // Change the add button name to edit
      DOMToggleButtonName("Edit")
      // @ts-ignore
      item_name.value=data.item_name
      // @ts-ignore


      quantity.value=data.quantity
      // @ts-ignore

      status.value=data?.status
      // @ts-ignore
      unit.value=data.unit
      // @ts-ignore
      per_piece.value=data.per_piece
            // @ts-ignore
            date.value=data.date
    }
    else{
       // @ts-ignore
       item_name.value=""
       // @ts-ignore
 
 
       quantity.value=""
       // @ts-ignore
 
       status.value=""
       // @ts-ignore
       unit.value=""
       // @ts-ignore
       per_piece.value=""
              // @ts-ignore
              date.value=""
    }
    
  }, [drawerToEditData]);
  return (
    <form onSubmit={handleSubmit}>
      <TextField
        name="item_name"
        type="text"
        defaultValue=""
        placeholder="Product"
        error={touched.item_name && errors.item_name ? errors.item_name : null}
        onChange={handleChange}
        label="Items name"
      />
       <div style={{display:"flex",gap:"10px"}}>
      <TextField
        name="quantity"
        type="number"
        defaultValue={""}
        placeholder="Quantity"
        onChange={handleChange}
        error={touched.quantity && errors.quantity ? errors.quantity : null}
        label="Quantity"
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
        defaultValue={""}
        placeholder="1000"
        onChange={handleChange}
        error={touched.per_piece && errors.per_piece ? errors.per_piece : null}
        label="Per Unit"
        
      />

      <div style={{ display: "flex", flexDirection: "column" }}>
        {touched.status && errors.status ? (
          <LabelDiv error={errors.status}>{errors.status}</LabelDiv>
        ) : (
          <LabelDiv>Status</LabelDiv>
        )}
        <select name="status" onChange={handleChange} id="input-status">
          <option selected>Card</option>
          <option>Fonepay</option>
          <option>Cash</option>
          <option>Due</option>
        </select>
      </div>
      <br />
      <TextField
        name="date"
        type="date"
        placeholder="date"
        onChange={handleChange}
        error={touched.date && errors.date ? errors.date : null}
        label="Sales date"
      />
      <DrawerButtonDiv>
        <Button
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            handleSubmit();
          }}>
          add
        </Button>
        <Button onClick={() => resetForm()} type="reset">
          clear
        </Button>
      </DrawerButtonDiv>
    </form>
  );
}
