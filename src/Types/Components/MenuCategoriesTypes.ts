export type MenuCategoriesTypes = {
  title: string | null;
  amount: number | null;
  onClick?: () => void;
  editIcon?: React.ReactNode | null;
  deleteIcon?: React.ReactNode | null;
  clicked?: boolean;
  onMouseOver: () => void;
  onMouseLeave: () => void;
  visible: boolean;
  categoryList: Array<{ cat: String; subcat: String }>;
};
