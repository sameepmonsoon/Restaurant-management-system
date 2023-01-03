import React, { useEffect, useState } from 'react'
import Table from '../PageComponent/Dashboard/Table/Table'
import { productObjectType } from '../Types/Components/ProductListsType'
import { HTTPMethods } from '../Utils/HTTPMock'

export default function Purchase() {
    const [products, setProducts] = useState<productObjectType[]>([])
    useEffect(()=>{
          HTTPMethods.get('/purchase/read?page=1&offset=10')
          .then(async (res:any) => {
              setProducts(res.data)
          })
          .catch(async (err) => {
              console.log(err)
          })
      },[])
  return (
    <Table  data={products}/>
  )
}
