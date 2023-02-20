export type MenuSubCategoriesTypes = {
  title: string | null;
  amount: number | null;
  onClick?: () => void;
  editIcon?: React.ReactNode | null;
  deleteIcon?: React.ReactNode | null;
  active?: boolean;
  clicked?: boolean;
  subcatId?: boolean | any;
  categoryList: Array<{
    category: String;
    subcategory: String;
    active: boolean;
    id: number;
  }>;
};
