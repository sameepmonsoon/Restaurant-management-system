export type MenuSubCategoryItemTypes = {
  subcatParentId: string | null;
  itemName?: string | null;
  clickedSubCat?: string | null;
  subCatItemList?: Array<{
    subCatItem: String;
    active: boolean;
    id: number;
  }> | null;
  subCatItemImage?: string;
};
