import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import SalesTable from "../PageComponent/Dashboard/Table/SalesTable";
import { useSalesStore } from "./states/TablesFilter.state";
import { productObjectType } from "../Types/Components/ProductListsType";
import { HTTPMethods } from "../Utils/HTTPMock";
import Pagination from "../PageComponent/Pagination/Pagination";

export default function Sales() {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);
  const [salesProducts, loading, fetchSales] = useSalesStore((state: any) => [
    state.salesProducts,
    state.loading,
    state.fetchSales,
  ]);

  useEffect(() => {
    fetchSales();
  }, []);
  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = salesProducts.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = (pageNumber: any) => {
    setCurrentPage(pageNumber);
  };
  return loading ? (
    <div>Loading</div>
  ) : salesProducts && salesProducts.length ? (
    <>
      <SalesTable data={currentPosts} onDeleteSuccess={fetchSales} />
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
        paginate={paginate}
      />
    </>
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
