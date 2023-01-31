import create from "zustand/react";
type ButtonStatus = {
  clickButton: boolean;
  buttonClosed: boolean;
  setClickButton: () => void;
};

export const siderButtonStatus = create<ButtonStatus>((set) => ({
  clickButton: true,
  buttonClosed: false,
  setClickButton: () =>
    set((state: any) => ({ clickButton: !state.clickButton })),
}));
