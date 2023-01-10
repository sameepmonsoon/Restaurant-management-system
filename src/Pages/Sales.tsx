import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import SalesTable from "../PageComponent/Dashboard/Table/SalesTable";
import { productObjectType } from "../Types/Components/ProductListsType";
import { HTTPMethods } from "../Utils/HTTPMock";

export default function Sales() {
  const [products, setProducts] = useState<productObjectType[]>([]);
  useEffect(() => {
    HTTPMethods.get("/new_sales/read?page=1&offset=10")
      .then(async (res: any) => {
        setProducts(res.data.payload.data);
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
  }, []);
  return products.length ? <SalesTable data={products} /> : <div>Loading</div>;
}
