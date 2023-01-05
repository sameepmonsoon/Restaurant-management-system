import create from 'zustand'

type drawerStateType={
    open:boolean,
    toggleDrawer:()=>void
}


export const useDrawer = create<drawerStateType>((set) => ({
  open: false,
  toggleDrawer: () => set((state:any) => ({ open: !state.open})),
}))