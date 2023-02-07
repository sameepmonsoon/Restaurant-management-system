import React from "react";
import { MdAdd } from "react-icons/md";
import { Tables, TableNum, TableContainer, Image } from "./FloorTable.style";

import { TableType } from "../../Types/Components/TableTypes";

const FLoorTable = (props: TableType) => {
  const { tableNames, karaokeList, selected, image } = props;

  return (
    <>
      {location.pathname === "/tables/floorFirst" ? (
        <>
          {tableNames.map((table) => (
            <>
              <TableContainer>
                <Tables select={selected}>
                  <Image src="" />
                </Tables>
                <TableNum>{table}</TableNum>
              </TableContainer>
            </>
          ))}
          {karaokeList && (
            <>
              {karaokeList.map((table) => (
                <>
                  <TableContainer>
                    <Tables select={selected}>
                      <Image src="" />
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
