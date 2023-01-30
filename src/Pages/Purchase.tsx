import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import PurchaseTable from "../PageComponent/Dashboard/Table/PurchaseTable";
import { useProductStore } from "../store/filtered";
import { productObjectType } from "../Types/Components/ProductListsType";
import { HTTPMethods } from "../Utils/HTTPMock";
import FiltersReport from "../Components/FiltersReport/FiltersReport";
export default function Purchase() {
  const [products, loading, fetchProducts] = useProductStore((state: any) => [
    state.products,
    state.loading,
    state.fetchProducts,
  ]);

  useEffect(() => {
    fetchProducts();
  }, []);

  return loading ? (
    <div>Loading</div>
  ) : products && products.length ? (
    <PurchaseTable data={products} onDeleteSuccess={fetchProducts} />
  ) : (
    <>
      {/* <FiltersReport /> */}
      <div>No Data to Show</div>
    </>
  );
}
