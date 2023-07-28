import React, { useEffect } from 'react';
import {useForm} from 'react-hook-form';

export const MyForm = ({lat,lng,currentZoom,makeCard}) => {
    
    
    const {register, handleSubmit,formState:{errors},setValue} = useForm();
    useEffect(() => {
        setValue('latitud',lat)
        setValue('longitud',lng)
    }, [lat,lng]);
    const onSubmit = (data) =>{
        makeCard(data);
    }

    return (
        <div className='formContainer'>
            <form onSubmit={handleSubmit(onSubmit)} className='formFormat' >
                <label htmlFor="calle"> Calle: </label>
                <input 
                    type="text"
                    id='calle'
                    {...register('calle',{
                        required:false,
                    })}
                />
                {errors.calle?.type === 'required' && (alert('Campo requerido'))}
                
                <label htmlFor="telefono"> Teléfono: </label>
                <input 
                    type='number'
                    id='telefono'
                    {...register('telefono',{
                        required:false,
                    })}
                />
                {errors.telefono?.type === 'required' && (alert('Campo requerido'))}
                <label htmlFor="pais"> País:  </label>
                <select 
                    id='pais'
                    {...register('pais',{
                        required:false
                    })}
                >
                    <option value="cl" key="cl">Chile</option>
                    <option value="ar" key="ar">Argentina</option>
                    <option value="br" key="br">Brasil</option>
                </select>
                {errors.pais?.type === 'required' && (alert('Campo requerido'))}
                <label htmlFor="zoom"> Zoom: </label>
                <input 
                    min='0' 
                    max = '20' 
                    type="range"
                    id='zoom'
                    {...register('zoom',
                    {
                        onChange:(e) => {currentZoom(e.target.value)},
                        required:false
                    })}
                />
                {errors.zoom?.type === 'required' && (alert('Campo requerido'))}
                <label htmlFor="latitud"> Latitud: </label>
                <input 
                    readOnly
                    type="text"
                    id='latitud'
                    {...register('latitud',{
                        required:true
                    })}
                />
                {errors.latitud?.type === 'required' && (alert('Campo requerido'))}

                <label htmlFor="longitud"> Longitud: </label>
                <input 
                    readOnly
                    type="text"
                    id='longitud'
                    {...register('longitud',{
                        required:true
                    })}
                />
                {errors.longitud?.type === 'required' && (alert('Campo requerido'))}
                <span className='spanContainer'>
                    <label htmlFor="tyc"> Aceptar terminos y condiciones </label>
                    <input 
                        type="checkbox"
                        id='tyc'
                        {...register('tyc',{
                            required:true
                        })}
                    />
                    {errors.check?.type === 'required' && (alert('Campo requerido'))}
                </span>
                <span className='spanContainer'>
                    <p cl>+18</p>
                    <div className='checkContainer'>
                    <label className="switch" htmlFor="mayor">
                        <input
                            type='checkbox'
                            id='mayor'
                            {...register('mayor',{
                                required:false
                            })}
                        /><span className='slider'></span>
                    </label>
                        {errors.mayor?.type === 'required' && (alert('Campo requerido'))}
                    </div>
                </span>
                <input 
                    className='submitButton' type="submit" />
            </form>
            
        </div>
    );
}


