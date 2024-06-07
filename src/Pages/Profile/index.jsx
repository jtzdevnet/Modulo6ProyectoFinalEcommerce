import React from 'react'
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import Header from "../../Layout/Header";
import Footer from "../../Layout/Footer";
import { getUserService } from "../../Services/userServices";
import "./index.scss";

const Profile = () => {
    const [userData,setUserData] = useState([]);
  const token = localStorage.getItem('token');

  useEffect(() => {
    const fetchUserData = async () =>{
      try{
        const response = await getUserService(token);
        if(response.status === 200){
          setUserData(response.data)
        }
      }catch(error){
        console.log('Ocurrio un error en dashboard');
      }
    }

    fetchUserData()
  }, [token])

  return (
    <div className='page-wrapper profile-page'>
        <Header/>
        <main>
          <div className="page-container">
            <h1>Mi Perfil</h1>
            <hr/>
            <h3>Nombre</h3>
            {userData?.first_name && <p>{userData.first_name} {userData.last_name}</p>} 
            <h3>Genero</h3>
            {userData?.gender && <p>{userData.gender}</p>}
            <h3>Email</h3>
            {userData?.email && <p>{userData.email}</p>}
            <h3>Edad</h3>
            {userData?.age && <p>{userData.age}</p>}
            <h3>Rol</h3>
            {userData?.role && <p>{userData.role}</p>}
          </div>
        </main>
        <Footer />
    </div>
  )
}

export default Profile