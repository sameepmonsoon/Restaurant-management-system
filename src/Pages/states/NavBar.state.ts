import create from "zustand";

type navBarToggleTypes = {
  openSider: boolean;
  toggleSider: () => void;
};
export const siderToggle = create<navBarToggleTypes>((set) => ({
  openSider: true,
  toggleSider: () => set((state: any) => ({ openSider: !state.openSider })),
}));
