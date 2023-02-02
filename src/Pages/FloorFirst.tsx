import Table from "../Components/Table/Table";
import { tabelState } from "./states/Table.state";
const FloorFirst = () => {
  const { select, onSelect } = tabelState();

  return (
    <>
      <Table
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
        onClick={onSelect}
      />
    </>
  );
};

export default FloorFirst;
