import Table from "../Components/Table/Table";
import { tabelState } from "./states/Table.state";
const FloorSecond = () => {
  const { select, onSelect } = tabelState();
  return (
    <>
      <Table
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
      />
    </>
  );
};

export default FloorSecond;
