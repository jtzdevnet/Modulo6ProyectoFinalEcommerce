import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { loginUserService } from '../../Services/userServices'
import { useAuthContext } from '../../Hook/useAuthContext'
import "./index.scss"

const Login = () => {

  const { register, handleSubmit, formState:{ errors } } = useForm();
  const navigate = useNavigate()
  const { login } = useAuthContext()

  const onSubmit = async (data) =>  {
    //enviar mi formulario de signup
    try {
      const response = await loginUserService(data)
      if (response.status === 200){
        navigate('/')
        console.log('Usuario autenticado exitosamente')
        login(response.data.token) // utilizar login del contexto y decodificar el token en el navegador
      }
    }catch(error) {
      console.log('Ocurrio un error en Login', error)
    }
  }


  return (
    <main>
        <div className="login">
            <h1>Login</h1>
                <div className="login-container">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div>
                            <label htmlFor="email">Email</label>
                            <input
                            type="text"
                            name="email"
                            placeholder="correo@mail.com"
                            id="simple-email"
                            {...register('email')}
                            />
                        </div>
                        <div>
                            <label htmlFor="password">Password</label>
                            <input 
                            type="password" 
                            name="password" 
                            id="simple-password" 
                            {...register('password')}
                            />
                        </div>
                        <button type="submit">Iniciar Sesion</button>
                    </form>
                </div>
        </div>
    </main>
  )
}

export default Login