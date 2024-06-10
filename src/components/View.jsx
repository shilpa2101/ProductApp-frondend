import React, { useState } from 'react'
import Navbar from './Navbar'

const View = () => {
    const [datas,changedata]=useState(
        [
           {
            "name":"Phone", 
            "productid":12,
            "price":12563,
            "description":"64gb storage",
            "suppliername":"Shilpa"
           },
           {
            "name":"Dress", 
            "productid":21,
            "price":1256,
            "description":"cotton wear",
            "suppliername":"Harshitha"
           }
        ]
           
    )
  return (
    <div>
    <Navbar/>
         <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <table class="table">
  <thead>
    <tr>
        <th>Serial no</th>
      <th scope="col">product Name</th>
      <th scope="col">product id</th>
      <th scope="col">price</th>
      <th scope="col">description</th>
      <th scope="col">SUPPLIERNAME</th>
    </tr>
  </thead>
  {datas.map(
    (value,index)=>{
        return <tbody>
                <tr>
                  <td>{index+1}</td>
                <td>{value.name}</td>
                <td>{value.productid}</td>
                <td>{value.price}</td>
                <td>{value.description}</td>
                <td>{value.suppliername}</td>
                </tr>
            
            </tbody>
    }
  )}
  
</table>
                </div>
            </div>
        </div>
    </div>
  )
}

export default View