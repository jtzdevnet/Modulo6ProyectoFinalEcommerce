import './index.scss'
import { Link } from "react-router-dom";
import { useAuthContext } from "../../Hook/useAuthContext";
import userPic from '../../assets/user-placeholder.png';
import userAuthPic from '../../assets/user.jpg';

function ProfileButton() {

  const { logout, login, isAuth, userPayload } = useAuthContext()

  return (
    <div className='header-profile'>
        <Link to="/my-cart" className="user-shopping-cart"><i className="fa-solid fa-cart-shopping"></i></Link>
        <div className="dropdown">
         
          <Link href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" className="user-profile-pic dropdown-toggle"><img src={isAuth ? userAuthPic : userPic} alt="" /></Link>

          <ul className="dropdown-menu">
            {isAuth ?
              <>
              <li><Link className="dropdown-item" to="/profile">Mi perfil</Link></li>
              <li><Link className="dropdown-item" to="/" onClick={logout}>Log Out</Link></li>
              </>
            : 
              <>
              <li><Link className="dropdown-item" to="/login">Log In</Link></li>
              <li><Link className="dropdown-item" to="/signup">Crear Cuenta</Link></li>
              </>
            }
            {isAuth && userPayload.role === 'ADMIN' && <li><Link className="dropdown-item" to="/admin">Admin</Link></li>}
          </ul>
        </div>
        
    </div>
  )
}

export default ProfileButton