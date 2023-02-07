import React from "react";
import { TextField } from "../../Components/TextField";
import { Button } from "../../Components/TextField.Style";
import { DrawerButtonDiv } from "../Dashboard/Drawer/Drawer.styles";
import { useFormik } from "formik";
import * as yup from "yup";
const FloorTableForm = () => {
  //   let schema = yup.object().shape({
  // table_name:yup.string().required("Table Name"),
  // table_image:yup.mixed().required("Please Upload a file")

  //   })
  //   const { handleSubmit, handleChange, errors,touched } = useFormik({
  //     initialValues:{
  //       table_name:""
  //       table_image:""
  //     },
  //     validationSchema:schema

  //   });
  //
  return (
    <>
      <form>
        <TextField
          type="text"
          label="Table name"
          name="table_name"
          // error={errors}
          // onChange={handleChange}
        />
        <TextField type="file" label="Image" name="table_image" />
        <Button>Add</Button>
        <br />
        <Button>Clear</Button>
      </form>
    </>
  );
};

export default FloorTableForm;
