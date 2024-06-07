import React from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import Header from "../../Layout/Header";
import Footer from "../../Layout/Footer";
import { getOneItemService } from "../../Services/itemServices";
import { addToCart } from "../../Services/addToCart";
import "./index.scss";

const ItemDetails = () => {

  let { productId } = useParams();
  const [ItemData, setItemData] = useState([]) 
  console.log(productId);

  useEffect(() => {
        const fetchItemsData = async () => {
            try {
              const response = await getOneItemService(productId);
              if (response.status === 200) {
                  setItemData(response.data);
                  console.log(ItemData);
              }
            } catch (error) {
              console.log('Ocurrio un error en ItemDetails',error);
            }
        }
        fetchItemsData();
    }, [])

  return (
    <div className='page-wrapper'>
        <Header/>
        <main>
          <div className="page-container">
            {ItemData ?
              <>
                <h1>{ItemData.product_name}</h1>
                <div className="item-information-container">
                  <div className="item-images">
                    <div id="carouselItem" className="carousel slide carousel-fade">
                      <div className="carousel-inner">
                        <div className="carousel-item active">
                          <img src={ItemData.image} alt="..."/>
                        </div>
                        <div className="carousel-item">
                          <img src="https://picsum.photos/id/231/750/750" alt="..."/>
                        </div>
                        <div className="carousel-item">
                          <img src="https://picsum.photos/id/233/750/750" alt="..."/>
                        </div>
                      </div>
                      <button className="carousel-control-prev" type="button" data-bs-target="#carouselItem" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                      </button>
                      <button className="carousel-control-next" type="button" data-bs-target="#carouselItem" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                      </button>
                    </div>
                  </div>
                  <div className="item-information">
                    <span className="item-category">{ItemData.category}</span>
                    <p className="item-description">{ItemData.description}</p>
                    <p className="item-price">${ItemData.price}</p>
                    <Link to={`/item/`} className="item-buy"><i className="fa-solid fa-dollar-sign"></i> Comprar Ahora</Link>
                    <a href="#" onClick={() => addToCart(ItemData)} className="item-add-to-cart card-add-to-cart"><i className="fa-solid fa-cart-shopping"></i> Agregar al carrito</a>
                  </div>
                </div>
              </>
            : 
              <>
                <h1>Oops! Ese producto no existe.</h1>
                <Link to="/">Volver</Link>
              </>
            }
            
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
        <Footer />
    </div>
  )
}

export default ItemDetails