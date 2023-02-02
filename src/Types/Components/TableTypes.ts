export type TableType = {
  tableNames: string[];
  karaokeList?: string[] | null;
  selected: boolean;
  image?: String;
  onClick: () => void;
};
