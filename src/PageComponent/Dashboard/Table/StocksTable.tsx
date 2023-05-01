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
  TableDataSnBox,
  TableHeadDataStockId,
  TableWithPagination,
} from "./Table.styles";
import { useState } from "react";
import { HTTPMethods } from "../../../Utils/HTTPMock";
import { useFilterStore } from "../../../Pages/states/TablesFilter.state";

const StocksTable = (props: TableStatus) => {
  const { data, pagination } = props;
  const searchedTerm = useFilterStore((state: any) => state.searchTerm);

  return (
    <TableWithPagination>
      <MainTableDiv>
        <TableHeader>
          <TableHeadDataStockId>
            <input type="checkbox" name="" id="" />
            id <HiChevronDown />
          </TableHeadDataStockId>
          <TableHeadData>
            items
            <HiChevronDown />
          </TableHeadData>
          <TableHeadData>
            quantity
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
                <TableRow>
                  <TableDataSnBox>{product.Id}</TableDataSnBox>
                  <TableData>{product.name}</TableData>
                  <TableData>{product.initial_quantity}</TableData>
                </TableRow>
              ))}
        </TableBody>
      </MainTableDiv>
      {pagination}
    </TableWithPagination>
  );
};

export default StocksTable;
