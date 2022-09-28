import React from 'react'
import "./Map.css"
import mapimage from "../assets/map.png"
const Map = () => {
  return (
    <>
      <section className='section_div'>
        <div className="container">
            <h1 className='Worldwide_h1' >Worldwide Distribution</h1>
            <div className='mutul_position'>
            <div className='map_image'>
                <img src={mapimage} alt="mapimage" />
            </div>
            <div className='enim'>
                <p style={{color:"white" , fontSize:"16px", lineHeight:"24px" }}> In enim sed scelerisque diam nunc, dignissim elit non morbi. Eros, et ultrices magna tortor lacinia convallis amet id. Lacus, gravida nibh cras senectus egestas tempus purus. Sed velit ultrices faucibus sed risus.</p>
            </div>
            </div>
          
        </div>
      </section>
    </>
  )
}

export default Map
