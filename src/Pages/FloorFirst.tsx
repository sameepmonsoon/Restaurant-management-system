import { MdAdd } from "react-icons/md";
import ActionButton from "../Components/ActionButton/ActionButton";
import FloorTable from "../Components/FloorTable/FloorTable";
import DrawerC from "../PageComponent/Dashboard/Drawer/Drawer";
import FloorTableForm from "../PageComponent/forms/FloorTableForm";
import OrderTableForm from "../PageComponent/forms/OrderTableForm";
import { useDrawer } from "./states/Drawer.state";
import { floorTabelState } from "./states/FloorTable.state";
const FloorFirst = () => {
  const { open, setDrawerData, toggleDrawer } = useDrawer();
  console.log(open)
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
     return <OrderTableForm />

  }

  return (
    <>
      <FloorTable
        tableNames={[
          "Table 1",
          "Table 2",
          "Table 3",
          "Table 4",
          "Table 5",
          "Table 6",
          "Table 7",
          "Table 8",
          "Table 9",
          "Table 10",
        ]}
        image={""}
        karaokeList={["Karaoke A", "Karaoke B", "Karaoke C"]}
        selected={false}
        onClick={(e: React.MouseEvent<HTMLElement>) => {
          openDrawer()
        }}
      />

      <DrawerC
        cardtitle={"New"}
        open={open}
        closeDrawer={() => closeDrawer()}>
        {
          manageForm()
        }    
      </DrawerC> 
    </>
  );
};

export default FloorFirst;
