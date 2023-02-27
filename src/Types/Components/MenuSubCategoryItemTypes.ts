export type MenuSubCategoryItemTypes = {
  subcatParentId: number;
  itemName: string;
  subCatItemList: Array<{ subCatItem: String; active: boolean; id: number }>;
  subCatItemImage?: string;
};
