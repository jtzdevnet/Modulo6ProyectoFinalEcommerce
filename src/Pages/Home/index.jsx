import { useState, useEffect } from "react";
import Header from "../../Layout/Header";
import Footer from "../../Layout/Footer";
import CategoryBar from '../../Layout/CategoryBar';
import ItemList from '../../Components/ItemList';
import "./index.scss"
import { Link } from "react-router-dom";

const Home = () => {

  return (
    <div className='page-wrapper home-page'>
        <Header/>
        <main>
          <div className="page-container">
            <h1>Bienvenido a nuestra tienda!</h1>
            <div className="page-content">
              <CategoryBar/>
              <ItemList/>
            </div>
            {
              localStorage.getItem("currentShoppingCart") && JSON.parse(localStorage.getItem("currentShoppingCart")).length > 0 ? <Link to="/my-cart" className="home-shoping-cart"><i className="fa-solid fa-cart-shopping"></i></Link> : ''
            }
            {/* <Link to="/my-cart" className="buy-button">Comprar</Link> */}
          </div>
          <div className="toast position-fixed align-items-center text-bg-success border-0 p-3 bottom-0 start-50 translate-middle-x" role="alert" aria-live="assertive" aria-atomic="true" id="liveToast">
            <div className="d-flex">
              <div className="toast-body">
                Producto agregado al carrito
              </div>
              <button type="button" className="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
            </div>
          </div>
        </main>
        <Footer/>
    </div>
  )
}

export default Home