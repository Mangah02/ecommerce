import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>An e-commerce website is an online platform for
             buying and selling of product or services over the internet
             services as a virtual marketplaces where business and individual
             shows their product, interact with customers and conduct
             transaction without the need for physical presence. E-commerce 
             website have gained immense popirality due to their conviniet
             accessibility, and the global reach </p>
             <p>
              E-commerce website typically display product or services a 
              detailed description, images, prices, and any available variables
              (eg., sizes, colors). Each product usually has its own description
              with relevant onformation.
             </p>
      </div>
    </div>
  )
}

export default DescriptionBox
