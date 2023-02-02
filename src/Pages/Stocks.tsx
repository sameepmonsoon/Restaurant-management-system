import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import StocksTable from "../PageComponent/Dashboard/Table/StocksTable";
import { productObjectType } from "../Types/Components/ProductListsType";
import { HTTPMethods } from "../Utils/HTTPMock";

export default function Stocks() {
  const [products, setProducts] = useState<productObjectType[]>([]);

  const fetchStocks = () => {
    HTTPMethods.get("/stock/read")
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
  };
  useEffect(() => {
    fetchStocks();
  }, []);
  return products.length ? (
    <StocksTable data={products} onDeleteSuccess={fetchStocks} />
  ) : (
    <div>Loading</div>
  );
}
