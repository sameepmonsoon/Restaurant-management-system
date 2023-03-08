import FloorTable from "../Components/FloorTable/FloorTable";
import { useEffect, useState } from "react";
import DrawerC from "../PageComponent/Dashboard/Drawer/Drawer";
import OrderTableForm from "../PageComponent/forms/OrderTableForm";
import { useDrawer } from "./states/Drawer.state";
import { floorTabelState } from "./states/FloorTable.state";
import { HTTPMethods } from "../Utils/HTTPMock";
const FloorFirst = () => {
  const { open, setDrawerData, toggleDrawer } = useDrawer();
  const [tableList, setTableList] = useState<any>([]);
  const [fetchTable, setFetchTable] = useState<any>();
  console.log(open);
  const { select, onSelect } = floorTabelState();
  const selectTable = () => {
    if (select === false) {
      onSelect();
    }
  };

  function openDrawer() {
    console.log("inside open drawer of each table", open);
    toggleDrawer();
  }
  function closeDrawer() {
    console.log("insode close Drawer");
    setDrawerData({});
    console.log("outside Drawer");

    toggleDrawer();
  }
  function manageForm() {
    return <OrderTableForm />;
  }

  useEffect(() => {
    HTTPMethods.get("/tables/read")
      .then(async (res) => {
        console.log("inside table read api", res);
        setTableList(res.data.payload.data);
      })
      .catch(async (err) => {
        console.log(err);
      });
  }, [location]);
  return (
    <>
      <FloorTable
        tableNames={tableList}
        image={""}
        karaokeList={["Karaoke A", "Karaoke B", "Karaoke C"]}
        selected={false}
        onClick={(e: React.MouseEvent<HTMLElement>) => {
          openDrawer();
        }}
        fetchTable={setFetchTable}
      />

      <DrawerC cardtitle={"New"} open={open} closeDrawer={() => closeDrawer()}>
        {manageForm()}
      </DrawerC>
    </>
  );
};

export default FloorFirst;
