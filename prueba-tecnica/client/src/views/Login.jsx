import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {useForm} from 'react-hook-form';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';



const Login = () => {
    const {register, handleSubmit,formState:{errors}} = useForm();
    const navigate = useNavigate();
    const onSubmit = (data) =>{
        axios
            .post('http://localhost:8080/api/users/login',data, {withCredentials:true})
                .then(res=>{
                    alert('Bienvenido!')
                    navigate("/")
                })
                .catch(err=>{
                    alert(`Mensaje desde el backEnd:
                    ${err.message}`)
                    console.log('Acceso denegado')
                    console.log(err)
                })
    }
    return (
        <div className='loginContainer'>
            <form onSubmit={handleSubmit(onSubmit)} className='formFormat'>
                <label htmlFor="email">Email:</label>
                <input 
                type="text"
                id="email" 
                {...register('email',{
                    required:true
                })}
                />
                {errors.email?.type === 'required' && (alert('Campo requerido'))}
                <label htmlFor="password">Contraseña:</label>
                <input 
                type="password"
                id="password" 
                {...register('password',{
                    required:true
                })}
                />
                {errors.password?.type === 'required' && (alert('Campo requerido'))}
                <input type="submit" className='submitButton'/>
            </form>
            <Link to={'/register'}>
                <button className='submitButton'>
                    Registrarse
                </button>
            </Link>
            
        </div>
    );
}

export default Login;
