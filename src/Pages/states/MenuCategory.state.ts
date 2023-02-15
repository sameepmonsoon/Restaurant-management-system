import create from "zustand";

type menuCategoryStateType = {
  categoryData: any;
  setCategoryData: (data: any) => void;
};

export const useMenuCategory = create<menuCategoryStateType>((set) => ({
  categoryData: {},
  setCategoryData: (data: any) => set((state: any) => ({ categoryData: data })),
}));
