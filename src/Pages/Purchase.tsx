import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import PurchaseTable from "../PageComponent/Dashboard/Table/PurchaseTable";
import { useProductStore } from "../store/filtered";
import { productObjectType } from "../Types/Components/ProductListsType";
import { HTTPMethods } from "../Utils/HTTPMock";

export default function Purchase() {
  const [products, setProducts] = useState<productObjectType[]>([]);
  const[loading, setIsLoading] = useState(true)
  // const [ {products, loading, fetchProducts} ] = useProductStore((state: any) => [state.products, state.loading, state.fetchProducts]);
  const fetchProducts = ()=>{
    setIsLoading(true)
    HTTPMethods.get("/purchase/read?page=1&offset=10")
    .then(async (res: any) => {
      setProducts(res.data.payload.data);
      setIsLoading(false);
    })
    .catch(async (err) => {
      toast.info("Server is down to display the table data.", {
        theme: "colored",
        hideProgressBar: true,
        autoClose: 2000,
        position: "bottom-right",
        toastId: "info1",
      });
    });
  }

  useEffect(() => {
    fetchProducts()
  }, []);

  return loading ? (
    <div>Loading</div>
  ) : products? (
    <PurchaseTable data={products} onDeleteSuccess={fetchProducts}/>
  ) : (
    <div>No Data Available</div>
  );

   // if(loading){
  //   return     <div>Loading</div>

  // }else if (products && products.length){
  //   return <PurchaseTable data={products} onDeleteSuccess={fetchProducts} />
  // }else{
  //   return <div>No data Available</div>
  // }
}
