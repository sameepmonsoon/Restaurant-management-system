import  create from "zustand"

export const useFilterStore = create (set => ({
    searchTerm: "",
    setSearchTerm: (value: string) => set((state: any) => ({...state, searchTerm: value}))
}))


export const useStatusPaymentStore = create(set =>({
    date:"",
    status: "",
    payment:"",
    setDate: () => set((state:any)=> ({...state, date: state.date})),
    setStatus: (status: string) => set((state:any) => ({...state, status: status })),
    setPayment: (payment: string) => set((state:any)=> ({...state, payment: payment}))
}))