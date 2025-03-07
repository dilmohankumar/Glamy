import React from 'react'
import mobshoe from "../assets/images/mobshoe.webp"
import "./OnlineAuth.css"
const OnlineAuth = () => {
  return (
    <div className='online-auth-container'>
        <div className='online-auth-image-container'>
            <img src={mobshoe} style={{ width: '-webkit-fill-available' }} alt='Online Authentication' className='online-auth-image'/>
        </div>
    </div>
  )
}

export default OnlineAuth