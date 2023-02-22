import create from "zustand";

type menuSetSubcatType = {
  drawerSubCatId: string;
  setDrawerSubCatId: (data: any) => void;
};

export const useSubCategoryIdStore = create<menuSetSubcatType>((set) => ({
  drawerSubCatId: "",
  setDrawerSubCatId: (data: any) =>
    set((state: any) => ({
      drawerSubCatId: data,
    })),
}));
