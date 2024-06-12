import React, { useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

const AddProduct = () => {
    const [datas,changeData]=useState(
        {
            "name":"", 
            "productid":"",
            "price":"",
            "description":"",
            "suppliername":"",
            "image":""
            
        }
    )
    const inputHandler=(event)=>{
        changeData({...datas,[event.target.name]:event.target.value})
    }
    const readValue=()=>{
        console.log(datas)
        axios.post(" http://localhost:8087/add",datas).then(
            (response)=>{
                console.log(response.data)
                if (response.data.status=="success") {
                    alert("success")
                } else {
                    alert("error")
                }
            }
        ).catch()
    }
  return (
    <div>
        <Navbar/>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">image</label>
                           <input type="file" name="image" value={datas.image} onChange={inputHandler} id="" className="form-control" />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Name</label>
                            <input type="text" className="form-control" name='name' value={datas.name} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">PRODUCT ID</label>
                            <input type="text" className="form-control" name='productid' value={datas.productid} onChange={inputHandler} />
                        </div>
                        
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">PRICE</label>
                            <input type="date" name="price" value={datas.price} id="" onChange={inputHandler} className="form-control" />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">DESCRIPTION</label>
                            <input type="email" name="description" value={datas.description} onChange={inputHandler} id="" className="form-control" />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">SUPPLIERNAME</label>
                            <input type="text" className="form-control" name='suppliername' value={datas.suppliername} onChange={inputHandler} />
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
        
                            <button className="btn btn-primary" onClick={readValue}>Register</button>
                       
    </div>
  )
}

export default AddProduct