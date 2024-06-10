import React, { useState } from 'react'
import Navbar from './Navbar'

const Search = () => {
    const [datas,changedata]=useState(
        {
            "name":""
        }
    )
    const inputHandler =(event)=>{
        changedata({...datas,[event.target.name]:event.target.value})
    }
    const readValue=()=>{
        console.log(datas)
    }
  return (
    <div>
        <Navbar/>
         <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label htmlFor="" className="form-label">Name</label>
                    <input type="text" className="form-control" name='name' value={datas.name} onChange={inputHandler} />
                </div>
            </div>
        </div>
        <button className="btn btn-success" onClick={readValue}>Search</button>
    </div>
  )
}

export default Search