import axios from "axios"

import React from 'react'
import { useEffect } from "react"
import { useState } from "react"

export default function App() {
const url="http://localhost:8000/"
  const [data,setdata]=useState([{"1":""}])
 
    useEffect(()=>{
      axios.get(url).then(res=>{

        setdata(res.data)
      })
    },[])
  
  
  return (
    <div>
    
      <div>{data.map(d=>{
        return(<h1>
          <span>{d["Prod_name"]}</span><br/>
          <span>{d["Trans_id"]}</span><br/>
          <span>{d["Disp_date"]}</span>
        </h1>)
      })}</div>
    
   
    </div>
  )
}