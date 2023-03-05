import React, { useState, useEffect } from "react";
import Navbar from "../PageComponent/Dashboard/Navbar/Navbar";
import Sider from "../PageComponent/Dashboard/Sider/Sider";
import { ChildrenDiv, LayoutContainerDiv } from "./DashboardLayout.style";
import { DashboardMainDiv } from "./DashboardLayout.style";
import { siderToggle } from "../Pages/states/NavBar.state";
import DrawerC from "../PageComponent/Dashboard/Drawer/Drawer";
import { useDrawer } from "../Pages/states/Drawer.state";
import FloorTableForm from "../PageComponent/forms/FloorTableForm";
import {
  TableCheck,
  TableCheckText,
  TableDiv,
  TableMain,
} from "./TableLayout.style";
import { BsCircleFill } from "react-icons/bs";
import ActionButton from "../Components/ActionButton/ActionButton";
import { MdAdd } from "react-icons/md";
import OrderTableForm from "../PageComponent/forms/OrderTableForm";
import { Button } from "@mui/material";
import { TextField } from "../Components/TextField";
import AddNewMenuModal from "../Components/Modals/AddNewMenuModal/AddNewMenuModal";
import { useFormik } from "formik";
import * as yup from "yup";
import { HTTPMethods } from "../Utils/HTTPMock";
import { toast } from "react-toastify";
export default function TableLayout({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}) {
  // modal states -----{start
  const [openModal, setOpenModal] = useState(false);
  const [deleteItem, setDeleteItem] = useState(false);
  const [addMenuModal, setAddMenuModal] = useState(false);
  const [deleteCategoryId, setDeleteCategoryId] = useState<string>("");
  const [modalTitle, setModalTitle] = useState<string>();

  // to change the preview image based on modal value
  useEffect(() => {
    setPreview(() => {
      if (addMenuModal == false) {
        return null;
      } else return preview;
    });
  }, [addMenuModal]);
  //modal states -----end}

  // image upload and preview
  const [file, setFile] = useState<File | any>();
  const [preview, setPreview] = useState<File | any>();
  // form validation
  let schema = yup.object().shape({
    table_name: yup.string().required("is required"),
    // image: yup.mixed().required("is required"),
  });
  // formik form
  const formik = useFormik({
    initialValues: {
      table_name: "",
    },
    onSubmit: (values, action) => {
      console.log(values);
      HTTPMethods.post("/tables/create", values)
        .then(async (res) => {
          console.log(res);
          console.log(res);
          toast.success("Table added successfully", {
            theme: "colored",
            hideProgressBar: true,
            autoClose: 1000,
          });
          action.resetForm();
        })
        .catch(async (err: any) => {
          console.log(err);
          toast.success("Sorry. The table couldnot be added.", {
            theme: "colored",
            hideProgressBar: true,
            autoClose: 1000,
          });
        });
    },
    validationSchema: schema,
  });
  //
  //

  const { openSider, toggleSider } = siderToggle();
  const { open, setDrawerData, toggleDrawer } = useDrawer();
  function closeDrawer() {
    setDrawerData({});
    toggleDrawer();
  }

  function openDrawer() {
    console.log("table  drawer", open);
    toggleDrawer();
  }
  function manageForm() {
    return <OrderTableForm />;
  }

  return (
    <>
      <DashboardMainDiv>
        <Sider />
        <LayoutContainerDiv openSider={openSider}>
          <Navbar
            navTitle={"Report"}
            navbarCardName={"Purchase"}
            onClick={() => {}}
          />
          <ChildrenDiv>
            <TableMain>
              <TableCheck>
                <BsCircleFill />
                <TableCheckText>Order on Table</TableCheckText>
              </TableCheck>
              <TableDiv>
                {children}
                <ActionButton
                  icon={<MdAdd size={25} />}
                  label={"Add Table"}
                  disableColor={location.pathname.includes("tables")}
                  onClick={() => {
                    setAddMenuModal(true);
                    setModalTitle("Add New Table");
                  }}
                />
              </TableDiv>
            </TableMain>
          </ChildrenDiv>
        </LayoutContainerDiv>

        <DrawerC
          cardtitle={"New Table"}
          open={open}
          closeDrawer={() => closeDrawer()}>
          {manageForm()}
        </DrawerC>
        {addMenuModal === true ? (
          <AddNewMenuModal
            title={modalTitle}
            setAddMenuModal={setAddMenuModal}
            footerButtons={<></>}>
            <form onSubmit={formik.handleSubmit}>
              <TextField
                type="text"
                label="Table name"
                name="table_name"
                placeholder="Table 12"
                onChange={formik.handleChange}
                error={
                  formik.touched.table_name && formik.errors.table_name
                    ? formik.errors.table_name
                    : null
                }
              />
              {/* <label htmlFor="image">
                <img src={preview || "/assets/imageUpload.svg"} alt="" />
                <TextField
                  type="file"
                  label="Category Image"
                  name="image"
                  placeholder="Image"
                  // @ts-ignore
                  id="image"
                  error={
                    formik.touched.image && formik.errors.image
                      ? formik.errors.image
                      : null
                  }
                  onChange={(e: any) => {
                    const filereader = new FileReader();
                    filereader.readAsDataURL(e.target.files[0]);
                    setFile(e.target.files[0]);
                    filereader.onload = () => {
                      if (filereader.readyState === 2) {
                        formik.setFieldValue("image", e.target.files[0]);
                        setPreview(filereader.result);
                      }
                    };

                    console.log(file);
                  }}
                  accept="image/*"
                />
              </label> */}
              <Button
                onClick={() => {
                  formik.resetForm();
                  setPreview("");
                }}
                type="reset">
                Clear
              </Button>
              <Button type="submit">Add</Button>
            </form>
          </AddNewMenuModal>
        ) : (
          <></>
        )}
      </DashboardMainDiv>
    </>
  );
}
