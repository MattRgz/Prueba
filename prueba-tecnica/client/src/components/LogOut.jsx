import React,{ useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const LoginOut = () => {
    const navigate = useNavigate();
    useEffect(() => {
        axios
            .get('http://localhost:8080/api/users/logout', {withCredentials:true})
                .then(res=>{
                    alert('Sesión cerrada con éxito!')
                    navigate("/login")
                })
                .catch(err=>{
                    alert(`Mensaje desde el backEnd:
                    ${err.response.data.msg}:
                    ${err.response.data.error}`)
                    console.log('Debe loguearse nuevamente')
                    console.log(err)
                    navigate("/login")
                })
    }, []);
    return (
        <div className='logout'>
            Cerrando sesión...
        </div>
    );
}

export default LoginOut;