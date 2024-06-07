import React from 'react'
import { useState } from 'react';
import Header from "../../Layout/Header";
import Footer from "../../Layout/Footer";
import { Link } from "react-router-dom";
import ItemList from '../../Components/ItemList';
import { removeFromCart } from "../../Services/addToCart";
import "./index.scss";

const ShoppingCart = () => {

    let subTotal = 0;
    JSON.parse(localStorage.getItem("currentShoppingCart")).map(item => subTotal += item.price);

  return (
    <div className='page-wrapper shopping-cart-page'>
        <Header/>
        <main>
          <div className="page-container">
            <h1>Mi Carrito de Compras</h1>
            {localStorage.getItem("currentShoppingCart") && JSON.parse(localStorage.getItem("currentShoppingCart")).length > 0 ?
            <div className='shopping-cart-list'>
                {JSON.parse(localStorage.getItem("currentShoppingCart")).map(item =>
                    <div className="cart-item" key={item.id} >
                        <div className="item-img">
                            <img src={item.image} alt={item.product_name} />
                        </div>
                        <div className="item-info">
                            <h3><Link to={"/item/"+item.id}>{item.product_name}</Link></h3>
                            <p>{item.description}</p>
                            <span className='item-price'>Precio: <span>${item.price}</span></span>
                        </div>
                        <a href="/my-cart" onClick={() => removeFromCart(item)} className="item-delete"><i className="fa-solid fa-xmark"></i></a>
                        
                    </div>
                )
                }
            </div> : <p>No hay productos en el carrito</p>}

            {localStorage.getItem("currentShoppingCart") && JSON.parse(localStorage.getItem("currentShoppingCart")).length > 0 ? 
                <>
                    <p className="subtotal">Total de la compra: <span>${subTotal}</span></p>
                    <button className="buy-button">Comprar ahora</button>
                </> 
            : '' }
          </div>
        </main>
        <Footer />
    </div>
  )
}

export default ShoppingCart