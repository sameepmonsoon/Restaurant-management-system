export type TableType = {
  tableNames: Array<{
    table_name: String;
    table_id: React.SetStateAction<string>;
  }>;
  karaokeList?: string[] | null;
  selected: boolean;
  fetchTable?: React.SetStateAction<any>;
  image?: String;
  onClick: (e: React.MouseEvent<HTMLElement>) => void;
};
