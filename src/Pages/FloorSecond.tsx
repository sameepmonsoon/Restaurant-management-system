import FloorTable from "../Components/FloorTable/FloorTable";
import { floorTabelState } from "./states/FloorTable.state";
const FloorSecond = () => {
  const { select, onSelect } = floorTabelState();
  return (
    <>
      {/* <FloorTable
        tableNames={[
          "Table 11",
          "Table 12",
          "Table 13",
          "Table 14",
          "Table 15",
        ]}
        karaokeList={["Karaoke A", "Karaoke B", "Karaoke C"]}
        selected={select}
        onClick={onSelect}
      /> */}
    </>
  );
};

export default FloorSecond;
