import React from 'react'
import "./Royal.css"
import onearrow from "../assets/onearrow.png"
import twoarrow from "../assets/twoarrow.png"
import threearrow from "../assets/threearrow.png"
const Royal = () => {
  return (
    <div className='container'>
      <h1 className='earn_money'  style={{color:"#3D2C56"}} >Earn money while we protect <br /> <span style={{ textAlign:"center" }}>your rights and royalties</span> </h1>
      <div className="row mt-5">
        <div className="col-md-6 col-sm-12 "> 
        <div className='Digital_music'>
        <p>
           <span style={{ fontWeight:"bold", color:"#3D2C56" }}> Digital Music Distribution + Content ID</span> allows us to generate and collect your Master Generated Royalties: Our partnership with over digital music stores ensures you get royalties 
            </p>
        </div>
       
        </div>
        <div className="col-md-6 col-sm-12">
            <div className='onearrow'>
                <img src={onearrow} alt="onearrow" />
            </div>
        </div>

        <div className="col-md-6 col-sm-12">
            <div className='twoarrow'>
                <img src={twoarrow} alt="twoarrow" />
            </div>
        </div>

        <div className="col-md-6 col-sm-12 "> 
        <div className='Publishing'>
        <p>
       <span style={{ fontWeight:"bold" , color:"#3D2C56" }}> Music Publishing Administration service</span> allows us to collect your Publishing Royalties: Our partnership with ASCAP, BMI and Soundexchange allows Record Labels and artistes
            </p>
        </div>
       
        </div>

        <div className="col-md-6 col-sm-12 "> 
        <div className='artistes'>
        <p style={{ marginTop:"25px" }}>
       <span style={{ fontWeight:"bold", color:"#3D2C56"   }}>Sync:</span>  We help Labels and artistes register their songs on digital music libraries, which allow their work to be made available for commercial use. To register for sync
            </p>
        </div>
       
        </div>

        <div className="col-md-6 col-sm-12">
            <div className='threearrow'>
                <img src={threearrow} alt="threearrow" />
            </div>
        </div>


        <div className="col-md-6 col-sm-12"></div>
        <div className="col-md-6 col-sm-12 "> 
        <div className='artistes'>
        <p style={{ marginTop:"25px" }}>
      <span style={{ fontWeight:"bold", color:"#3D2C56"   }}>Digital Music Analytics:</span>   As a result of musical works being spread worldwide like mustard seeds, it’s important to know where the seed fell, whether is germinated or died and why it died.
            </p>
        </div>
       
        </div>
      </div>
    </div>
  )
}

export default Royal
