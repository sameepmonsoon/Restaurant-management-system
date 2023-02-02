import React from "react";
import { MdAdd } from "react-icons/md";
import {
  TableMain,
  TableCheckText,
  Tables,
  TableNum,
  TableContainer,
  TableDiv,
  TableCheck,
  Image,
} from "./Table.style";
import { BsCircleFill } from "react-icons/bs";
import { useDrawer } from "../../Pages/states/Drawer.state";

import ActionButton from "../ActionButton/ActionButton";
import { TableType } from "../../Types/Components/TableTypes";

const Table = (props: TableType) => {
  const { tableNames, karaokeList, selected, image } = props;

  const { open, toggleDrawer } = useDrawer();
  function openDrawer() {
    console.log("inside open drawer", open);
    toggleDrawer();
  }

  return (
    <>
      <TableMain>
        <TableCheck>
          <BsCircleFill />
          <TableCheckText>Order on Table</TableCheckText>
        </TableCheck>
        <TableDiv>
          {location.pathname === "/tables/floorFirst" ? (
            <>
              {tableNames.map((table) => (
                <>
                  <TableContainer
                    onClick={
                      selected === true
                        ? (e: React.MouseEvent<HTMLElement>) => {
                            openDrawer();
                          }
                        : (e: React.MouseEvent<HTMLElement>) => {}
                    }>
                    <Tables select={selected}>
                      <Image src="{image}" />
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
                          <Image src="{image}" />
                        </Tables>
                        <TableNum>{table}</TableNum>
                      </TableContainer>
                    </>
                  ))}
                </>
              )}

              <ActionButton
                icon={<MdAdd size={25} />}
                label={"Add Table"}
                onClick={(e: React.MouseEvent<HTMLElement>) => {
                  openDrawer();
                }}
              />
            </>
          ) : null}
        </TableDiv>
      </TableMain>
      <br />
      <br />
    </>
  );
};

export default Table;
