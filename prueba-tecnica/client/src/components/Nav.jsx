import React from 'react';
import { useNavigate,Link } from 'react-router-dom';

const Nav = () => {
    const navigate = useNavigate()
    return (
        <div className='barraNav'>
            <Link to='/logout' style={{textDecoration:'none'}}>
                <p>Cerrar sesión</p>
            </Link>
        </div>
    );
}

export default Nav;
