import React from 'react'
import { useState } from 'react'
import "./Home.css"
import bg from "../img/Fitness_1920x1080.jpg"

export const Home = () => {
 const [hidden,setHidden] = useState(false)
  return (
    <div className='container text-center'><h1>Move your Body</h1>
    <div className="row">
        <div className="col-lg-6">
            <img src={bg} alt="#" />
        </div>
        <div className="col-lg-6 items">
            <a href="#" className='btn btn-success p-3'>BUILD YOUR<br></br> DREAM BODY</a>
            <br></br>
            <a href="#" className='btn btn-success p-3'>STAY SAFE & <br></br> HEALTHY</a>
            <br></br>
            <a href="#" className='btn btn-success p-3'>TRAIN BOTH <br></br> BODY & MIND</a>
        </div>
    </div>
   
    </div>
    
   
    
  )
}
