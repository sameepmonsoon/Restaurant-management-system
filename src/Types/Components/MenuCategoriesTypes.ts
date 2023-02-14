export type MenuCategoriesTypes = {
  title: string | null;
  amount: number | null;
  onClick: () => void;
  editIcon?: React.ReactNode | null;
  deleteIcon?: React.ReactNode | null;
  clicked?: boolean;
};
