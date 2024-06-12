import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

const View = () => {
    const [datas,changedata]=useState(
        [
          
        ]
           
    )
    const fetchData=()=>{
      axios.post("http://localhost:8087/view").then(
          (response)=>{
              changedata(response.data)
              console.log(response.data)
          }
      ).catch(
          (error)=>{
              console.log(error.message)
          }
      )
  }
  useEffect(()=>{fetchData()},[])
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
      <th>image</th>
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
                <td>{value.image}</td>
               
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