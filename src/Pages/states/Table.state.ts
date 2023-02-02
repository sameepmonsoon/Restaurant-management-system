import create from "zustand";

type tabelType = {
  select: boolean;
  onSelect: () => void;
};
export const tabelState = create<tabelType>((set) => ({
  select: false,
  onSelect: () => set((state: any) => ({ select: !state.select })),
}));
