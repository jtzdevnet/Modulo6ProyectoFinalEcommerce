import { useForm } from 'react-hook-form'
import { registerUserService } from '../../Services/userServices'
import { useNavigate } from 'react-router-dom'
import "./index.scss"

const SignUp = () => {

    const {register, handleSubmit, formState:{errors} } = useForm();
    const navigate = useNavigate();

    const onSubmit = async (data) => {
        try{
            const response = await registerUserService(data);
            if (response.status === 201){
                navigate('/login');
                console.log("Usuario creado exitosamente");
            }
        }catch(error){
            console.log('Ocurrio un error en SignUp', error);
        }
    }

  return (
   <main>
        <div className="sign-up">
            <h1>Sign Up</h1>
            <div className="signup-container">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <label htmlFor="firstName">First Name</label>
                        <input
                        type="text"
                        name="first_name"
                        placeholder="First Name"
                        id="firstName"
                        {...register("first_name")}
                        />
                    </div>
                    <div>
                        <label htmlFor="lastName">Last Name</label>
                        <input
                        type="text"
                        name="last_name"
                        placeholder="Last Name"
                        id="lastName"
                        {...register("last_name")}
                        />
                    </div>
                    
                    <div>
                        <label htmlFor="email">Email</label>
                        <input
                        type="text"
                        name="email"
                        placeholder="correo@mail.com"
                        id="simple-email"
                        {...register("email")}
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
                    <div>
                        <label htmlFor="age">Age</label>
                        <input
                        type="number"
                        name="age"
                        placeholder="Edad"
                        id="age"
                        {...register('age')}
                        />
                    </div>
                    <div>
                        <label htmlFor="lastName">Gender</label>
                        <select name="gender" id="gender" 
                        {...register('gender')}>
                            <option value="">Choose an option...</option>
                            <option value="M">Male</option>
                            <option value="F">Female</option>
                        </select>
                    </div>
                    <button type="submit">Registrarse</button>
                </form>
            </div>
        </div>
    </main>
  )
}

export default SignUp