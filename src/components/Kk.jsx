import React from 'react'
import "./style.css"
import Header from "./header/Header.jsx"

function Kk(props) {

  return (
    <>
    
    <Header/>
    
    <div className='container main-cont' >
      
    <div className='img-box'>
    <img src={props.value} className="team_img img-fluid" />
    </div>

   <div className='text-box'>
       <h1>{props.title}</h1>
    <p className='text'>
        {props.text}
    </p>
   </div>

    </div>

    </>
  )
}

export default Kk
