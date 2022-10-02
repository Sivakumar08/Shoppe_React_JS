import React from 'react'
import './Products.css'
import Productcard from './ui/Productcard'

function Products(props) {
  const {handleClick}=props;
  return (
    <div className='Products'>
        <h3>
            Products
            
        </h3>
        <Productcard handleClick={handleClick}/>
    </div>
  )
}

export default Products