import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import StocksTable from "../PageComponent/Dashboard/Table/StocksTable";
import Pagination from "../PageComponent/Pagination/Pagination";
import { productObjectType } from "../Types/Components/ProductListsType";
import { HTTPMethods } from "../Utils/HTTPMock";

export default function Stocks() {
  // pagination states
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(7);
  //
  const [products, setProducts] = useState<productObjectType[]>([]);

  const fetchStocks = () => {
    if (products.length) {
    }
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

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = products
    .map((item, id) => {
      return { ...item, Id: id + 1 };
    })
    .slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = (pageNumber: any) => {
    setCurrentPage(pageNumber);
  };
  useEffect(() => {
    fetchStocks();
  }, []);
  return products.length ? (
    <>
      <StocksTable
        data={currentPosts}
        onDeleteSuccess={fetchStocks}
        pagination={
          <Pagination
            postsPerPage={postsPerPage}
            totalPosts={products.length}
            paginate={paginate}
          />
        }
      />
    </>
  ) : (
    <div>Loading</div>
  );
}
