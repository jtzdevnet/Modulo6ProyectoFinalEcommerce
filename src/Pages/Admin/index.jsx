import { useState, useEffect } from 'react';
import { getUserService } from "../../Services/userServices";
import { Link, useNavigate } from "react-router-dom";
import { useAuthContext } from '../../Hook/useAuthContext';
import { createItemService } from "../../Services/itemServices";
import { useForm } from "react-hook-form";
import "./index.scss";

const Admin = () => {

  const [userData,setUserData] = useState([]);
  const token = localStorage.getItem('token');
  let navigate = useNavigate();
  const { userPayload } = useAuthContext();

  const {register, handleSubmit, formState:{errors} } = useForm();

  const onSubmit = async (data) => {
      try{
          const response = await createItemService(data, token);
          if (response.status === 201){
              console.log("Producto creado exitosamente");
          }
      }catch(error){
          console.log('Ocurrio un error en creacion producto', error);
      }
  }

  useEffect(() => {
    if(userPayload){
      console.log(userPayload);
      if(userPayload.role != 'ADMIN'){
        navigate("/");
      }
    }
  }, [userPayload])

  return (
    <div className="page-container admin-page">
      <Link to="/">Volver</Link>
      <h1>Admin</h1>
      <ul className="nav nav-tabs" id="myTab" role="tablist">
        <li className="nav-item" role="presentation">
          <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Home</button>
        </li>
        <li className="nav-item" role="presentation">
          <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Agregar produto</button>
        </li>
        
      </ul>
      <div className="tab-content">
        <div className="tab-pane active" id="home" role="tabpanel" aria-labelledby="home-tab" tabIndex="0"><p>Bienvenido al panel de administrador</p></div>
        <div className="tab-pane" id="profile" role="tabpanel" aria-labelledby="profile-tab" tabIndex="0">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label htmlFor="productName">Product Name</label>
                <input
                type="text"
                name="product_name"
                placeholder="Product Name"
                id="productName"
                {...register("product_name")}
                />
            </div>
            <div>
                <label htmlFor="description">Description</label>
                <input
                type="text"
                name="description"
                placeholder="Description..."
                id="description"
                {...register("description")}
                />
            </div>
            
            <div>
                <label htmlFor="category">Category</label>
                <input
                type="text"
                name="category"
                placeholder="Category..."
                id="category"
                {...register("category")}
                />
            </div>
            <div>
                <label htmlFor="brand">Brand</label>
                <input 
                type="text" 
                name="brand"
                placeholder="Brand..."
                id="brand" 
                {...register('brand')}
                />
            </div>
            <div>
                <label htmlFor="sku">sku</label>
                <input
                type="text"
                name="sku"
                placeholder="SKU number..."
                id="sku"
                {...register('sku')}
                />
            </div>
            <div>
                <label htmlFor="price">Price</label>
                <input type="number" placeholder="999.99" name="price" id="price" {...register('price')} />
            </div>
            <div>
                <label htmlFor="image">Image URL</label>
                <input type="text" placeholder="https://image.com/img.jpg" name="image" id="image" {...register('image')} />
            </div>
            <button type="submit">Agregar producto</button>
        </form>
        </div>
        
      </div>
    </div>
  )
}

export default Admin