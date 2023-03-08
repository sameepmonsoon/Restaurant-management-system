export type MenuSubCategoryItemTypes = {
  subcatParentId: string;
  categoryId: string;
  itemName?: string | null;
  subCatItemList?: Array<{
    subCatItem: String;
    active: boolean;
    id: number;
  }> | null;
  subCatItemImage?: string;
  amount?: number | null;
  onClick?: () => void;
  editIcon?: React.ReactNode | null;
  deleteIcon?: React.ReactNode | null;
  active?: boolean;
  clickedSubCat?: string;
  subcatId?: boolean | any;
};
