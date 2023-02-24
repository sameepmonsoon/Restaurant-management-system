import create from "zustand";
import { toast } from "react-toastify";
import { productObjectType } from "../../Types/Components/ProductListsType";
import { HTTPMethods } from "../../Utils/HTTPMock";
import { number, string } from "yup";
import { InventoryDataType } from "../../Types/Components/InventoryDataTpes";

export const useFilterStore = create((set) => ({
  searchTerm: "",
  setSearchTerm: (value: string) =>
    set((state: any) => ({ ...state, searchTerm: value })),
}));

export const useTotalAmountStore = create((set) => ({
  totalAmounts: {},
  loading: false,
  fetchTotalAmounts: () => {
    set((state: any) => ({ loading: true }));
    HTTPMethods.get("/total/readTotal")
      .then(async (res: any) => {
        set((state: any) => ({ totalAmounts: res.data, loading: false }));
      })
      .catch(async (err) => {
        toast.info("Server is down to display the data.", {
          theme: "colored",
          hideProgressBar: true,
          autoClose: 2000,
          toastId: "info1",
        });
      });
  },
  // setAmounts: (totalAmounts: InventoryDataType) => set((state:any)=>({...state, totalAmounts}))
}));

export const useProductStore = create((set) => ({
  products: [],
  loading: false,
  fetchProducts: () => {
    set((state: any) => ({ loading: true }));
    HTTPMethods.get("/purchase/read?page=1&offset=10")
      .then(async (res: any) => {
        set((state: any) => ({
          products: res.data.payload.data,
          loading: false,
        }));
      })
      .catch(async (err) => {
        set((state: any) => ({ loading: false }));
        toast.info("Server is down to display the table data.", {
          theme: "colored",
          hideProgressBar: true,
          autoClose: 2000,
          position: "bottom-right",
          toastId: "info1",
        });
      });
  },

  // setProducts: (products: productObjectType[]) => set((state:any)=> ({...state, products}))
}));

export const useSalesStore = create((set) => ({
  salesProducts: [],
  loading: false,
  fetchSales: () => {
    set((state: any) => ({ loading: true }));
    HTTPMethods.get("/new_sales/read?page=1&offset=20")
      .then(async (res: any) => {
        set((state: any) => ({
          salesProducts: res.data.payload.data,
          loading: false,
        }));
      })
      .catch(async (err) => {
        set((state: any) => ({ loading: false }));
        toast.info("Server is down to display the table data.", {
          theme: "colored",
          hideProgressBar: true,
          autoClose: 2000,
          position: "bottom-right",
          toastId: "info1",
        });
      });
  },
  setSales: (salesProducts: productObjectType[]) => (state: any) => ({
    ...state,
    salesProducts,
  }),
}));

export const useStatusPaymentStore = create((set) => ({
  date: "",
  status: "",
  payment: "",
  setDate: () => set((state: any) => ({ ...state, date: state.date })),
  setStatus: (status: string) =>
    set((state: any) => ({ ...state, status: status })),
  setPayment: (payment: string) =>
    set((state: any) => ({ ...state, payment: payment })),
}));
