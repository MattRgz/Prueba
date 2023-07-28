import React, { useEffect } from 'react';
import { MyForm } from '../components/Form';
import MyMap from '../components/MyMap';
import { useState } from 'react';
import CardSection from '../components/CardSection';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Nav from '../components/Nav';



export default function Main(){

    const [lat, setLat] = useState()
    const [lng, setLng] = useState()
    const [zoom, setZoom] = useState(10)
    const [cards, setCards] = useState([])
    const [actionValidation, setActionValidation] = useState(true)
    const navigate = useNavigate()

    
    const login = () =>{
        axios.get("http://localhost:8080/api/users/ingreso", {withCredentials:true})
            .then(res=>{
                console.log('Usuario valido');
            }).catch(err=>{
                console.log('Usuario invalido');
                    navigate('/login')
                }
            )
    }

    useEffect(() => {
        login()
        
        },[actionValidation])


    const currentZoom = (value) =>{
        setZoom(parseInt(value))
        setActionValidation(!actionValidation)
    }

    const setUbi = (lat,lng) =>{
        setLat(lat)
        setLng(lng)
        setActionValidation(!actionValidation)
    }

    const makeCard = (obj) =>{
        const newCard = [...cards, obj]
        setCards(newCard)
        console.log(cards)
        setActionValidation(!actionValidation)
    }

    return (
        <>
            <Nav/>
            <div>
                <h1 style={{color:'white'}}>Prueba Técnica</h1>
                <p>Para enviar el formulario, se debe activar los terminos y condiciones. Para seleccionar 
                    Latitud y Longitud, se debe hacer click en el mapa.
                    Una vez enviado el formulario, se listaran hacia abajo los datos entregados.
                </p>
            </div>
            <div className='main'>
                <div className='subcontainer1'>
                    <MyForm makeCard ={makeCard} lat = {lat} lng={lng} currentZoom={currentZoom}/>
                    <MyMap setUbi = {setUbi} zoom={zoom}/>
                </div>
                <div className='subcontainer2'>
                    <CardSection cardsArray={cards}/>
                </div>
            </div>
        </>
    );
}

