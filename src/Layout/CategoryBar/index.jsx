import { useState, useEffect } from "react";
import { getAllItemsService } from "../../Services/itemServices";
import { Link } from "react-router-dom";
import "./index.scss";

const CategoryBar = () => {

    const [itemList, setItemList] = useState([]) 

    useEffect(() => {
        const fetchItemsData = async () => {
            try {
            const response = await getAllItemsService();
            if (response.status === 200) {
                let product_array;
                product_array = response.data;
                const ids = product_array.map(({ category }) => category);
                const filtered = product_array.filter(({ category }, index) =>
                    !ids.includes(category, index + 1));
                product_array = filtered;
                setItemList(product_array);
            }
            } catch (error) {
            console.log('Ocurrio un error en Home',error);
            }
        }
        fetchItemsData();
    }, [])

    return (
        <div className='category-bar'>
            <h3>Categorias</h3>
            <ul>
                {itemList && itemList.map(product => 
                    <li key={product.id}><a href={"/category/"+product.category.toLowerCase()}>{product.category}</a></li>
                )}
            </ul>
        </div>
    )
}

export default CategoryBar