import React from 'react'
import "./Aboutus.css"
import im from"../img/Untitled-3.png"
export const Aboutus = () => {
  return (
  <>
    <div class="col-lg-9">
      <div class="right-justified">
        <ul>
        <li>
        <h1>About us</h1>
        </li>
        </ul>
        <div className="textx">
        <p>
        Weight training is a common type of strength training for <br />  developingthe strength and size of skeletal muscles. It uses  <br />  the force of gravity in the form of weighted bars, dumbbells <br />  or weight stacks in order to oppose the force generated by muscle through concentric or eccentric contraction. Weight training uses a variety of specialized equipment to target specific muscle groups and types of movement. Sports <br />  in which weight training is used include bodybuilding, weightlifting, powerlifting, strongman, highland games.<br /> Before the Industrial Revolution, fitness was defined as the capacity to carry out the day's activities without undue<br /> fatigue or lethargy. 
        </p>
       
     
        </div>
    
        
      
      </div>
   
    </div>
    <div className="col-lg-3">
      <div class="left-justified">
      <img src={im} alt="#" />
      </div>
      
    </div>
  </>
  )
}
