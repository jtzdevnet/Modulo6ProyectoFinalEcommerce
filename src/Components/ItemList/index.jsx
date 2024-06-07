import React from 'react'
import { useState, useEffect } from "react";
import { getAllItemsService } from "../../Services/itemServices";
import ItemCard from "../ItemCard";
import { useParams } from "react-router-dom";
import "./index.scss";

const ItemList = () => {

    const [itemList, setItemList] = useState([]);
    let { query,category } = useParams();
    console.log(query,category);

    useEffect(() => {
        const fetchItemsData = async () => {
            try {
            const response = await getAllItemsService();
            if (response.status === 200) {
                
                if (query){
                    setItemList(response.data.filter(product => product.product_name.toLowerCase().includes(query.toLowerCase())));
                    console.log(itemList);
                }
                else if (category){
                    setItemList(response.data.filter(product => product.category.toLowerCase().includes(category.toLowerCase())));
                    console.log(itemList);
                }
                else{
                    setItemList(response.data);
                }

            }
            } catch (error) {
            console.log('Ocurrio un error en Home',error);
            }
        }
        fetchItemsData();
        
    }, [])

  return (
    <div className="items-list">
        {query ? <h3>Resultados para: {query}</h3> : category ? <h3>Resultados para: {category}</h3> : ''}
        {itemList && itemList.map(product =>
            <ItemCard product={product} key={product.id} />
        )}
    </div>
  )
}

export default ItemList