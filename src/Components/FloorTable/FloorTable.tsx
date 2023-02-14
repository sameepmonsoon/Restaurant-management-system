import React from "react";
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
  const { tableNames, karaokeList, selected, image, ...rest } = props;

  return (
    <>
      {location.pathname === "/tables/floorFirst" ? (
        <>
          {tableNames.map((table) => (
            <>
              <TableContainer {...rest}>
                <Tables select={selected}>
                  <TableImage src={dinningTableImage} />
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
