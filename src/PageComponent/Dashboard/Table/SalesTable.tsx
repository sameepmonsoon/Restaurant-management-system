import { MainDiv } from "../../../Components/TextField.Style";
import { HiChevronDown } from "react-icons/hi";
import { HiDotsVertical } from "react-icons/hi";
import { TableStatus } from "../../../Types/Components/DashbaordTable";
import {
  MainTableDiv,
  TableBody,
  TableData,
  TableHeader,
  TableHeadData,
  TableRow,
  TableDataStatus,
  TableDataAction,
  TableWithPagination,
  TableHeadDataAction,
  TableDataSnBox,
} from "./Table.styles";
import { Button } from "@mui/material";
import { HTTPMethods } from "../../../Utils/HTTPMock";
import { useDrawer } from "../../../Pages/states/Drawer.state";
import { useEffect, useState } from "react";
import { useMenu } from "../../../Components/actionPopUp/ActionPopUp.state";
import { toast } from "react-toastify";
import { left } from "@popperjs/core";
import { useFilterStore } from "../../../Pages/states/TablesFilter.state";
import { useLocation } from "react-router-dom";
import AlertModal from "../../../Components/AlertDeleteModal/AlertModal";

const SalesTable = (props: TableStatus) => {
  const { data, onDeleteSuccess } = props;
  const { menuOpen, toggleMenu } = useMenu();
  const { open, toggleDrawer, setDrawerData, drawerToEditData } = useDrawer();
  const [clickedData, setClickedData] = useState(null);
  const [val, setVal] = useState(true);
  const searchedTerm = useFilterStore((state: any) => state.searchTerm);
  const [openModal, setOpenModal] = useState(false);
  const [deleteItem, setDeleteItem] = useState(false);
  const [deleteProduct, setDeleteProduct] = useState<[] | any>();
  const location = useLocation();
  const isSales = location.pathname.includes("home");
  const openMenu = (data: any) => {
    setClickedData(data);
    toggleMenu();
  };
  const closeMenu = () => {
    setClickedData(null);
    toggleMenu();
  };
  const editSales = (data: any) => {
    console.log("edit sales ", drawerToEditData);
    setDrawerData({ data, type: "purchase" });
    toggleDrawer();
  };
  function deleteSales(product: any) {
    HTTPMethods.deleteMethod(`/new_sales/delete/`, {})
      .then(function (resp) {
        toast.success("delete successful", {
          theme: "colored",
          hideProgressBar: true,
          autoClose: 1000,
        });
        onDeleteSuccess();
        setTimeout(() => {
          setOpenModal(false);
        }, 2500);
      })

      .catch(function (err) {
        toast.success("Error in deletion", {
          hideProgressBar: true,
          autoClose: 1000,
        });
        setTimeout(() => {
          setOpenModal(false);
        }, 3000);
      });
  }
  useEffect(() => {
    if (openModal && deleteItem) {
      deleteSales(deleteProduct);
      setDeleteItem(false);
    }
  }, [openModal, deleteItem]);
  return (
    <TableWithPagination>
      <MainTableDiv>
        <TableHeader>
          <TableHeadData>
            <input type="checkbox" name="" id="" />
            id <HiChevronDown />
          </TableHeadData>
          <TableHeadData>
            date
            <HiChevronDown />
          </TableHeadData>
          <TableHeadData>
            items
            <HiChevronDown />
          </TableHeadData>
          <TableHeadData>
            quantity
            <HiChevronDown />
          </TableHeadData>
          <TableHeadData>
            per price
            <HiChevronDown />
          </TableHeadData>
          <TableHeadData>
            net price
            <HiChevronDown />
          </TableHeadData>
          <TableHeadData>
            Payment
            <HiChevronDown />
          </TableHeadData>
          {isSales && (
            <TableHeadDataAction>
              Actions
              <HiChevronDown />
            </TableHeadDataAction>
          )}
        </TableHeader>
        <TableBody>
          {data &&
            data
              .filter((product) =>
                product.item_name
                  .toLowerCase()
                  .includes(searchedTerm.toLowerCase())
              )
              .map((product, index) => (
                <TableRow>
                  <TableDataSnBox>{index + 1}</TableDataSnBox>
                  <TableData>{product.date}</TableData>
                  <TableData>{product.item_name}</TableData>
                  <TableData>
                    {product.quantity} &nbsp;
                    <span>{product.unit}</span>
                  </TableData>
                  <TableData>{product.per_piece}</TableData>
                  <TableData>{product.total_amount}</TableData>
                  <TableDataStatus status={product.status}>
                    {product.status}
                  </TableDataStatus>
                  {isSales && (
                    <TableDataAction>
                      <Button
                        type="submit"
                        variant="contained"
                        onClick={() => editSales(product)}>
                        Edit
                      </Button>
                      <Button
                        type="reset"
                        variant="contained"
                        onClick={() => {
                          setOpenModal(true);
                          setDeleteProduct(product);
                        }}>
                        Delete
                      </Button>
                    </TableDataAction>
                  )}
                </TableRow>
              ))}
        </TableBody>
      </MainTableDiv>
      {openModal && (
        <AlertModal
          title={"Are you sure you want to delete?"}
          setOpenModal={setOpenModal}
          setDeleteItem={setDeleteItem}
          deleteItem={deleteItem}
        />
      )}
    </TableWithPagination>
  );
};

export default SalesTable;
