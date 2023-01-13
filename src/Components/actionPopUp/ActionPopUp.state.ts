import create from "zustand";

type drawerStateType = {
  menuOpen: boolean;
  toggleMenu: () => void;
};

export const useMenu = create<drawerStateType>((set) => ({
  menuOpen: false,
  toggleMenu: () => set((state: any) => ({ menuOpen: !state.menuOpen })),
}));
