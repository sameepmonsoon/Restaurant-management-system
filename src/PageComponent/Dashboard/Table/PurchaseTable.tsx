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
  TableDataAction,
  TableDataStatus,
} from "./Table.styles";
import { useMenu } from "../../../Components/actionPopUp/ActionPopUp.state";
import ActionPopUp from "../../../Components/actionPopUp/ActionPopUp";
import { useContext, useEffect, useState } from "react";
import { useDrawer } from "../../../Pages/states/Drawer.state";
import { Button } from "@mui/material";
import { HTTPMethods } from "../../../Utils/HTTPMock";
import { toast } from "react-toastify";
import { DOMToggleButtonName } from "../../../Utils/DOMToggleButtonName";
import { useFilterStore } from "../../../store/filtered";

const PurchaseTable = (props: TableStatus) => {
  const { data, onDeleteSuccess } = props;
  const { menuOpen, toggleMenu } = useMenu();
  const { open, toggleDrawer, setDrawerData } = useDrawer();
  const [clickedData, setClickedData] = useState(null);

  const searchedTerm = useFilterStore((state: any) => state.searchTerm);

  const openMenu = (data: any) => {
    setClickedData(data);
    toggleMenu();
  };
  const closeMenu = () => {
    setClickedData(null);
    toggleMenu();
  };
  const editPurchase = (data: any) => {
    setDrawerData({ data, type: "purchase" });
    toggleDrawer();
  };

  function deletePurchase(product: any) {
    HTTPMethods.deleteMethod(`/purchase/delete/${product.purchase_id}`, {})
      .then(function (resp) {
        toast.success("delete successful", {
          theme: "colored",
          hideProgressBar: true,
          autoClose: 1000,
        });
        onDeleteSuccess();
      })
      .catch(function (err) {
        toast.error("Error in deletion", {
          hideProgressBar: true,
          autoClose: 1000,
        });
      });
  }

  return (
    <>
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
            product
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
            status
            <HiChevronDown />
          </TableHeadData>
          <TableHeadData>
            Actions
            <HiChevronDown />
          </TableHeadData>
        </TableHeader>
        <TableBody>
          {data &&
            data
              .filter((product) =>
                product.name.toLowerCase().includes(searchedTerm.toLowerCase())
              )
              .map((product, index) => (
                <TableRow key={index}>
                  <TableData style={{ justifyContent: "center" }}>
                    {" "}
                    {index + 1}
                  </TableData>
                  <TableData>{product.purchased_date} </TableData>
                  <TableData>{product.name}</TableData>
                <TableData>{product.quantity } <span style={{marginLeft:"3px"}}>{product.unit}</span></TableData>
                  <TableData>{product.per_piece}</TableData>
                  <TableData>{product.net_price}</TableData>
                  <TableDataStatus status={product.status}>
                    <p>{product.status}</p>
                  </TableDataStatus>
                  <TableDataAction>
                    <Button
                      type="submit"
                      variant="contained"
                      onClick={() => editPurchase(product)}>
                      Edit
                    </Button>
                    <Button
                      type="reset"
                      variant="contained"
                      onClick={() => deletePurchase(product)}>
                      Delete
                    </Button>
                  </TableDataAction>
                </TableRow>
              ))}
        </TableBody>
      </MainTableDiv>
    </>
  );
};

export default PurchaseTable;
