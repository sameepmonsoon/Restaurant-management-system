import create from "zustand";

type drawerStateType = {
  open: boolean;
  toggleDrawer: () => void;
  drawerToEditData: any;
  setDrawerData: (data: any) => void;
};

export const useDrawer = create<drawerStateType>((set) => ({
  open: false,
  drawerToEditData: {},
  toggleDrawer: () => set((state: any) => ({ open: !state.open })),
  setDrawerData: (data: any) =>
    set((state: any) => ({
      drawerToEditData: data,
    })),
}));
