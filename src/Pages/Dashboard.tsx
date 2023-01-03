import DashboardLayout from '../Layout/DashboardLayout'
import Navbar from '../PageComponent/Dashboard/Navbar/Navbar'
import { HTTPMethods } from "../Utils/HTTPMock";
import Table from '../PageComponent/Dashboard/Table/Table';
import { useEffect, useState } from 'react';
import { productObjectType } from '../Types/Components/ProductListsType';

function Dashboard() {
  const [products, setProducts] = useState<productObjectType[]>([])

  useEffect(()=>{
    // let route = "";
    // let url='/purchase/read?page=1&offset=10'
    // if(route==="/sales"){
    //   url=""
    // }
    // if(url==="/puchase"){
    //   url=""
    // }
      HTTPMethods.get('/purchase/read?page=1&offset=10')
      .then(async (res:any) => {
          setProducts(res.data)
      })
      .catch(async (err) => {
          console.log(err)
      })
  },[])

  return (
  <DashboardLayout
    renderActions={
      // Please make a button as a component which can be reusable in future  inside a Component directory which accepts Icon,Title and and OnClick props
      // And place it over here by replacing below code 
        <div>


        </div>
    }
    renderFilters={
      <div>Filters</div>
    }
  >

    
{
  //if products are there then only display the data fetched from apiendpoints
   products && <Table  data={products}/>
}
    
  </DashboardLayout>
)
}

export default Dashboard;
