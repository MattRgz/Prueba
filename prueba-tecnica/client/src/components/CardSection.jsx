import React from 'react';

const CardSection = ({cardsArray}) => {
    return (
        <>
            {cardsArray.map(x=>{
                return(
                <div className='cardContainer'>
                    <ul>
                        <span>
                            <li>Calle: {x.calle}</li>
                            <li>Teléfono: {x.telefono}</li>
                            <li>País : {x.pais}</li>
                        </span>
                        <span>
                            <li>Zoom de Mapa: {x.zoom}</li>
                            <li>Latitud seleccionada: {x.latitud}</li>
                            <li>Longitud seleccionada: {x.longitud}</li>
                        </span>
                        <span>
                            <li>Terminos y Condiciones: {x.tyc? 'Aceptados' : 'Rechazados'}</li>
                            <li>Mayor de edad: {x.mayor? 'Si' : 'No'}</li>
                        </span>
                        
                    </ul>
                </div>
                )
            })}
        </>
    );
}

export default CardSection;
