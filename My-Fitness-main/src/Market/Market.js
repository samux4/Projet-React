import React from 'react'
import "./Market.css"
import { useEffect } from 'react'
import p1 from "../img/61YLhWH1a9L._AC_SL1000_.jpg"
import p2 from "../img/71BYWnePQwL._AC_SL1500_.jpg"
import p3 from "../img/81mBweeuS7L._AC_SL1500_.jpg"
import p4 from "../img/61D3o3I9kCL._AC_SX679_.jpg"
import p5 from "../img/61jwgeTudYL._AC_SL1200_.jpg"
import p6 from "../img/51945yBlJuL._AC_.jpg"
import p7 from "../img/ae793a5f-0337-4c3b-a502-b8aa0a24fb02._SR285_285_-removebg-preview.png"
import p8 from "../img/images.jpg"
import p9 from "../img/whey-2000-milk-chocko.jpg"
import p10 from "../img/prd_1213421-MuscleBlaze-80-Raw-Whey-Protein-Supplement-Powder-4.webp"
import p11 from "../img/1_a0ae1ed0-54e6-4672-842a-284ce7898496_grande.webp"
import { useState } from 'react'
export const Market = () => { 
  const [hidden,setHidden] = useState(false)
  useEffect(() => {
    window.scrollTo({ top: document.getElementById('formxx').offsetTop, behavior: 'smooth' })
  }, [hidden])
  function handleChange(event) {
    if (event.target.value.length > 16) {
      event.target.value = event.target.value.substring(0, 16);
    }
  }
  function cvcChange(event) {
    if (event.target.value.length > 3) {
      event.target.value = event.target.value.substring(0, 3);
    }
  }
  function mmChange(event) {
    if (event.target.value.length > 4) {
      event.target.value = event.target.value.substring(0, 4);
    }
  }
  return (
    <div class="row justify-content-center mt-5">
        <div class="col-lg-4">   
                    <div class="card">
                    <div className="row">
                        <div className="col-lg-6 w-100">
                      <img src={p2} class="card-img-top first-item w-100" alt="#"/>
                      </div>
                      <div className="col-lg-6"></div>
                      <div class="card-body">
                        <h5 class="card-title">FLYBIRD</h5>
                        <p class="card-text">FLYBIRD Weight Bench, Adjustable Strength Training Bench for Full Body Workout with Fast Folding-New Version</p>     
                        <div className="prices">          
                        <button className='btn btn-outline-warning login' onClick={() => { setHidden(!hidden) }}>BUY THIS ITEM</button>
                        
                        <p class="price">370$</p>
                      <p class="pre-price"> 600$</p>
                        </div>
                    
                      </div>
                    </div>
        </div>
        </div>
        <div class="col-lg-2">
          <div class="card">
            <img src={p1} class="card-img-top"  alt="#"/>
            <div class="card-body">
              <h5 class="card-title">EnterSports Abs</h5>
              <p class="card-text">Wheel Kit, Exercise Wheel Core Strength Training Abdominal Roller Set with Push Up Bars, Resistance Bands.</p>
              <div className="prices">          
              <div className="rqaq">

                        <button className='btn btn-outline-warning login' onClick={() => { setHidden(!hidden) }}>BUY THIS ITEM</button>
                        </div>
                        <p class="price">200$</p>
                      <p class="pre-price"> 400$</p>
                        </div>
            </div>
          </div>
        </div>
        <div class="col-lg-2">
          <div class="card">
            <img src={p3} class="card-img-top" alt="#"/>
            <div class="card-body">
              <h5 class="card-title">WOWCOR Nordic</h5>
              <p class="card-text">Hamstring Curl Strap Machine, Sit Up Exercise Equipment, Leg Stretcher Workout Straps</p>
              <div className="prices">  
              <div className="rqaq">
     
                        <button className='btn btn-outline-warning login' onClick={() => { setHidden(!hidden) }}>BUY THIS ITEM</button>
                        </div>
                        <p class="price">90$</p>
                      <p class="pre-price"> 150$</p>
                        </div>
                 </div>
          </div>
        </div>
        <div class="col-lg-2">
          <div class="card">
            <img src={p4} class="card-img-top"  alt="#"/>
            <div class="card-body">
              <h5 class="card-title">C4 Pre-Workout</h5>
              <p class="card-text">Powder Fruit Punch | NSF Certified for Sport + Sugar Free Preworkout Energy Supplement for Men & Women</p>
              <div className="prices">         
              <div className="rqaq">
 
                        <button className='btn btn-outline-warning login' onClick={() => { setHidden(!hidden) }}>BUY THIS ITEM</button>
                       </div>
                        <p class="price">100$</p>
                      <p class="pre-price"> 200$</p>
                        </div>
            </div>
          </div>
        </div>
        <div class="col-lg-10 mt-5"> 
            <div class="card">
            <div className="row m-auto w-100">
                <div className='card '>        
              </div>
              <div className="col-lg-12 m-auto">
                <div className="row card-items">
                  <div className="col-lg-4 card-items">
                  <img src={p5} class=" second-item" alt="#"/>
                  </div>
                  <div className="col-lg-4 card-items">
                  <img src={p6} class=" second-item" alt="#"/>
                  </div>
                  <div className="col-lg-4 card-items">
                  <img src={p7} class=" second-item" alt="#"/>
                  </div>
                </div>
              
              
                   
              </div>
              <div class="card-body">
                <h5 class="card-title">Sole Fitness F85 Folding Treadmill</h5>
                <p class="card-text">Treadmill offers an industry-leading warranty and a proprietary Cushion Flex Whisper Deck, shown in a study to reduce impact on your joints by up to 40% compared to running on asphalt Includes the following manufacturer's warranties against defects in materials and workmanship: lifetime on frame, motor, and deck; five years on electronics; and two years on labor
</p>
                <div className="prices">          
                        <button className='btn btn-outline-warning login' onClick={() => { setHidden(!hidden) }}>BUY THIS ITEM</button>
                        <p class="price">1000$</p>
                      <p class="pre-price">1500$</p>
                        </div>
              </div>
 

            </div>       

        </div>
        <div className="row">
        <div class="col-lg-3 mt-5">
          <div class="card">
            <img src={p8} class="card-img-top"  alt="#"/>
            <div class="card-body">
              <h5 class="card-title">Optimum Nutrition</h5>
              <p class="card-text">Gold Standard 100% Whey Protein Powder, Double Rich Chocolate 2 Pound Packaging May Vary Packaging may vary - New look.</p>
              <div className="prices">  
              <div className="moyen">           
                        <button className='btn btn-outline-warning login' onClick={() => { setHidden(!hidden) }}>BUY THIS ITEM</button>
                        </div>
                        <p class="price">300$</p>
                      <p class="pre-price"> 400$</p>
                        </div>
            </div>
          </div>
        </div>
        <div class="col-lg-3 mt-5">
          <div class="card">
            <img src={p9} class="card-img-top"  alt="#"/>
            <div class="card-body">
              <h5 class="card-title">Naked Whey</h5>
              <p class="card-text">Chocolate Protein - All Natural Grass Fed Whey Protein Powder, Organic Chocolate, and Coconut Sugar 5lb Bulk.</p>
              <div className="prices"> 
              <div className="moyen">     
                        <button className='btn btn-outline-warning login' onClick={() => { setHidden(!hidden) }}>BUY THIS ITEM</button>
                        </div>
                        <p class="price">70$</p>
                      <p class="pre-price"> 120$</p>
                        </div>
            </div>
          </div>
        </div>
        <div class="col-lg-3 mt-5">
          <div class="card">
            <img src={p10} class="card-img-top"  alt="#"/>
            <div class="card-body">
              <h5 class="card-title">CLevels Grass Fed</h5>
              <p class="card-text">Nutra BioGenesis Whey Protein Isolate - Muscle Protein - 2,268 Kg Chocolate 2 Pound Packaging May Vary it the Gold Standard</p>
              <div className="prices"> 
              <div className="moyen">       
                        <button className='btn btn-outline-warning login' onClick={() => { setHidden(!hidden) }}>BUY THIS ITEM</button>
                        </div>  
                        <p class="price">80$</p>
                      <p class="pre-price"> 120$</p>
                        </div>
            </div>
          </div>
        </div>
        <div class="col-lg-3 mt-5">
          <div class="card">
            <img src={p11} class="card-img-top"  alt="#"/>
            <div class="card-body">
              <h5 class="card-title">Weight Gainer</h5>
              <p class="card-text">Weight Gainer Protein Powder, Vitamin C, Zinc and Vitamin D for Immune Support, Chocolate, 6 Pound Packaging May Vary</p>
              <div className="prices">   
              <div className="moyen">     
                        <button className='btn btn-outline-warning login' onClick={() => { setHidden(!hidden) }}>BUY THIS ITEM</button>
                        </div>  
                        <p class="price">40$</p>
                      <p class="pre-price"> 70$</p>
                        </div>
              
            </div>
          </div>
        </div>
        
        </div>
        
    </div>
    

    <div className={hidden ? "payement": "hidden-payement"} id="formxx">
    <form id="checkout-form">
      <div className="payement-side">
        <div className="hidden-btn">
          <button type="button" class="btn-close" aria-label="Close" onClick={()=>{setHidden(!hidden)}}></button>
        </div >
       <ul><li class="lii">
       <h1>Enter your Card Details</h1></li></ul> 
       
     
       <div class="form-row">
    <label for="name">Name :</label>
    <input type="text" id="name" name="name" placeholder='Your Name' required/>
  </div>
  <div class="form-row">
    <label for="email">Email :</label>
    <input type="email" id="email" name="email" placeholder='Example@gmail.com' required/>
  </div>
  <div class="form-row">
    <label for="address">Address :</label>
    <input type="text" id="address" name="address"placeholder='Your Adress' required/>
  </div>
  <div class="form-row">
    <label for="card-number">Card number :</label>
    <input type="number" id="card-number" name="card-number" placeholder='0000 0000 0000 0000' onChange={handleChange}  required/>
  </div>
  <div class="form-row">
    <label for="expiration">Exp date :</label>
    <input type="number" id="expiration" name="expiration" placeholder='MM/YY' onChange={mmChange} required/>
  </div>
  <div class="form-row">
    <label for="cvv">CVV :</label>
    <input type="number" id="cvv" name="cvv" placeholder='CVV' onChange={cvcChange} required/>
  </div>
  <button type="submit">Place order</button>
        </div>
      </form>
      </div>
    </div>
    
  
    
  )
}
