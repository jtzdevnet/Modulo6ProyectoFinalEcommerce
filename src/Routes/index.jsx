import React from 'react'
import { Routes, Route } from "react-router-dom";
import { Home,Admin,ShoppingCart,Profile,Login,SignUp,ItemDetails,NotFound } from "../Pages";

const RoutesIndex = () => {

  return (
    <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/search/:query' element={<Home/>}></Route>
        <Route path='/category/:category' element={<Home/>}></Route>
        <Route path='/my-cart' element={<ShoppingCart/>}></Route>
        <Route path='/profile' element={<Profile/>}></Route>
        <Route path='/admin' element={<Admin/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/signup' element={<SignUp/>}></Route>
        <Route path='/item/:productId' element={<ItemDetails/>}></Route>
        <Route path='*' element={<NotFound/>}></Route>
    </Routes>
  )
}

export default RoutesIndex