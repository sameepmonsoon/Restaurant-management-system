export type TableType = {
  tableNames: Array<{
    table_name: String;
    table_id: React.SetStateAction<string>;
  }>;
  karaokeList?: string[] | null;
  selected: boolean;
  image?: String;
  onClick: (e: React.MouseEvent<HTMLElement>) => void;
};
