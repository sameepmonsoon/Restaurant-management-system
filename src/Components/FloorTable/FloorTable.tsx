import React, { useState } from "react";
import { MdAdd } from "react-icons/md";
import {
  Tables,
  TableNum,
  TableContainer,
  TableImage,
  KaraokeImage,
} from "./FloorTable.style";
import dinningTableImage from "../../../public/assets/dinningTable.svg";
import iconKaraoke from "../../../public/assets/iconKaraoke.svg";

import { TableType } from "../../Types/Components/TableTypes";

const FLoorTable = (props: TableType) => {
  const { tableNames, karaokeList, selected, fetchTable, image, ...rest } =
    props;
  console.log("inside table names", tableNames);
  return (
    <>
      {location.pathname === "/tables/floorFirst" ? (
        <>
          {tableNames.map((table) => (
            <>
              <TableContainer {...rest}>
                <Tables select={table.table_id != " "}>
                  <TableImage src={dinningTableImage} />
                </Tables>
                <TableNum>{table.table_name}</TableNum>
              </TableContainer>
            </>
          ))}
          {karaokeList && (
            <>
              {karaokeList.map((table) => (
                <>
                  <TableContainer>
                    <Tables select={selected}>
                      <KaraokeImage src={iconKaraoke} alt="" />
                    </Tables>
                    <TableNum>{table}</TableNum>
                  </TableContainer>
                </>
              ))}
            </>
          )}
        </>
      ) : null}
    </>
  );
};

export default FLoorTable;
