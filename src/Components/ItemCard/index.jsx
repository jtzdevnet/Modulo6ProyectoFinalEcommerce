import React from 'react'
import "./index.scss"
import { Link } from "react-router-dom";
import { addToCart } from "../../Services/addToCart";

const ItemCard = ({product}) => {

  return (
    <div className="item-card" key={product.id}>
        <Link to={`/item/${product.id}`} className='item-card-link'>
            <div className="item-img-wrap">
                <img src={product.image} className="card-img-top" alt={product.name} />
            </div>
            <div className="item-card-body">
                <p className="card-category">{product.category}</p>
                <h5 className="card-title">{product.product_name}</h5>
                <span className="card-price">${product.price}</span>
                <span className="card-button">Ver Producto</span>
            </div>
        </Link>
        <a onClick={() => addToCart(product)} className="card-add-to-cart">
          <i className="fa-solid fa-cart-shopping"></i>
        </a>
    </div>
  )
}

export default ItemCard