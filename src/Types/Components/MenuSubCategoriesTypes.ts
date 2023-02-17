export type MenuSubCategoriesTypes = {
  title: string | null;
  amount: number | null;
  onClick?: () => void;
  editIcon?: React.ReactNode | null;
  deleteIcon?: React.ReactNode | null;
  clicked?: boolean;
  visible?: boolean | any;
  categoryList: Array<{
    category: String;
    subcategory: String;
    active: boolean;
    id: number;
  }>;
};
