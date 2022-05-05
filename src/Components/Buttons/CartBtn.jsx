import React from 'react'
import {NavLink} from 'react-router-dom'
import { useSelector } from 'react-redux'

const CartBtn = () => {
  // we get a state of addItems
  const state = useSelector((state)=> state.addItem)
  return (
   <>
   <NavLink to="/cart" className="btn btn-outline-dark ms-2">
     <span className="fa fa-shopping-cart me-1"></span> Cart(0)
   </NavLink>
   </>
  )
}

export default CartBtn