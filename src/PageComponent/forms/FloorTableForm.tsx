import React, { useState } from "react";
import { TextField } from "../../Components/TextField";
import { Button } from "../../Components/TextField.Style";
import { DrawerButtonDiv } from "../Dashboard/Drawer/Drawer.styles";
import { useFormik } from "formik";
import * as yup from "yup";
import image from "../../../public/assets/iconTextFieldUploadImage.svg";
import {
  FloorTableDrawerDiv,
  FloorTableTextField,
  FloorTableButtons,
  TextFieldImageUpload,
} from "./FloorTableForm.style";
import { HTTPMethods } from "../../Utils/HTTPMock";
import { toast } from "react-toastify";
import { useDrawer } from "../../Pages/states/Drawer.state";
const FloorTableForm = () => {
  let schema = yup.object().shape({
    table_name: yup.string().required("is required"),
    table_image: yup.mixed().required("is required"),
  });

  const { open, toggleDrawer, drawerToEditData, setDrawerData } = useDrawer();

  const [file, setFile] = useState<any>([]);

  const { values, handleSubmit, handleChange, errors, touched, resetForm } =
    useFormik({
      initialValues: {
        table_name: "",
        table_image: "image",
      },
      onSubmit: (values) => {
        console.log("submitted");
        HTTPMethods.post("/tables/create", values)
          .then(function (resp) {
            toast.success("Table added successfully.", {
              theme: "colored",
              hideProgressBar: true,
              autoClose: 1000,
            });
            toggleDrawer();
          })
          .catch(function (err) {
            toast.success("Error in adding table", {
              theme: "colored",
              hideProgressBar: true,
              autoClose: 1000,
            });
          })
          .finally(function () {
            toggleDrawer();
            setDrawerData({});
          });
        return;
      },
      validationSchema: schema,
    });
  function handleChangeImage(e: any) {
    let file = e.target.files[0].name;
    console.log(file);
    setFile(file);
  }
  return (
    <>
      <FloorTableDrawerDiv>
        <form onSubmit={handleSubmit}>
          <FloorTableTextField>
            {/* <p>Table Name</p> */}
            <TextField
              type="text"
              label="Table name"
              name="table_name"
              error={
                touched.table_name && errors.table_name
                  ? errors.table_name
                  : null
              }
              onChange={handleChange}
            />
            <FloorTableButtons>
              <Button
                type="submit"
                onClick={(e) => {
                  e.preventDefault();
                  handleSubmit();
                }}>
                Add
              </Button>
              <Button
                type="reset"
                onClick={() => {
                  resetForm();
                }}>
                Clear
              </Button>
            </FloorTableButtons>

            {/* <TextFieldImageUpload>
              <p>
                <img src={file} alt="" />
              </p>
              <TextField
                type="file"
                label="Image "
                name="table_image"
                onChange={(e) => handleChangeImage(e)}
              />

              <span>
                {file.length ? (
                  file
                ) : (
                  <>
                    <img src={image} alt="Img" />
                    Upload Image
                  </>
                )}
              </span>
            </TextFieldImageUpload> */}
          </FloorTableTextField>
        </form>
      </FloorTableDrawerDiv>
    </>
  );
};

export default FloorTableForm;
