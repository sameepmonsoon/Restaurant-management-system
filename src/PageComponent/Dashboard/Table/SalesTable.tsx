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

const SalesTable = (props: TableStatus) => {
  const { data, onDeleteSuccess } = props;
  const { menuOpen, toggleMenu } = useMenu();
  const { open, toggleDrawer, setDrawerData } = useDrawer();
  const [clickedData, setClickedData] = useState(null);
  const [val, setVal] = useState(true);
  const searchedTerm = useFilterStore((state: any) => state.searchTerm);

  const location = useLocation()
  const isSales = location.pathname.includes("home" )
  const openMenu = (data: any) => {
    setClickedData(data);
    toggleMenu();
  };
  const closeMenu = () => {
    setClickedData(null);
    toggleMenu();
  };
  const editSales = (data: any) => {
    console.log("inside");
    setDrawerData({ data, type: "purchase" });
    toggleDrawer();
  };
  function deleteSales(product: any) {
    HTTPMethods.deleteMethod(`/new_sales/delete/${product.id}`, {})
      .then(function (resp) {
        toast.success("delete successful", {
          theme: "colored",
          hideProgressBar: true,
          autoClose: 1000,
        });
        onDeleteSuccess();
      })

      .catch(function (err) {
        toast.success("Error in deletion", {
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
            {" "}
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
          {
            isSales && <TableHeadData>
            Actions
            <HiChevronDown />
          </TableHeadData>
          }
          
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
                  <TableData style={{ justifyContent: "center" }}>
                    {" "}
                    {index + 1}
                  </TableData>
                  <TableData>{product.date}</TableData>
                  <TableData>{product.item_name}</TableData>
                  <TableData>{product.quantity} <span style={{marginLeft:"3px"}}>{product.unit}</span></TableData>
                  <TableData>{product.per_piece}</TableData>
                  <TableData>{product.total_amount}</TableData>

                  <TableDataStatus status={product.status}>
                    <p>{product.status}</p>
                  </TableDataStatus>
                  {
                    isSales && <TableDataAction>
                    <Button
                      type="submit"
                      variant="contained"
                      onClick={() => editSales(product)}>
                      Edit
                    </Button>
                    <Button
                      type="reset"
                      variant="contained"
                      onClick={() => deleteSales(product)}>
                      Delete
                    </Button>
                  </TableDataAction>
                  }
                  
                </TableRow>
              ))}
        </TableBody>
      </MainTableDiv>
    </>
  );
};

export default SalesTable;
