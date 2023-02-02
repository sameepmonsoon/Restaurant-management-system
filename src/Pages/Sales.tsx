import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import SalesTable from "../PageComponent/Dashboard/Table/SalesTable";
import { useSalesStore } from "../store/filtered";
import { productObjectType } from "../Types/Components/ProductListsType";
import { HTTPMethods } from "../Utils/HTTPMock";

export default function Sales() {

  const [salesProducts, loading, fetchSales] = useSalesStore((state: any)=> ([state.salesProducts, state.loading, state.fetchSales]))
  
  useEffect(() => {
    fetchSales()
   }, []);


  return loading ? (
    <div>Loading</div>
  ) : salesProducts && salesProducts.length? (
    <SalesTable data={salesProducts} onDeleteSuccess={fetchSales}/> 
  ) : (
    <div>No Data to Show</div>
  );
  
}

// const [loading, setLoading] = useState(true)
  // const [sales, setProducts] = useState<productObjectType[]>([]);

  // const fetchSales =()=>{
  //   HTTPMethods.get("/new_sales/read?page=1&offset=10")
  //   .then(async (res: any) => {
  //     setProducts(res.data.payload.data);
  //     setLoading(false)
  //   })
  //   .catch(async (err) => {
  //     toast.info("Server is down to display the table data.", {
  //       theme: "colored",
  //       hideProgressBar: true,
  //       autoClose: 2000,
  //       position: "bottom-right",
  //       toastId: "info1",
  //     });
  //   });
  // }

  
