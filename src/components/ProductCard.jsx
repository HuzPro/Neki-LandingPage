import React from 'react'
import { star } from '../assets/icons';
import { Link } from 'react-router-dom';

const ProductCard = ({ imgURL, id, name, description, price, rating }) => {
  return (
    <Link to={`/products/${id}`}>
    <div className='flex flex-1 flex-col w-full max-sm:w-full bg-white py-4 px-4 rounded-2xl shadow-3xl
    transition ease-in-out duration-300 hover:-translate-y-1' id={name}>
        
        <img src={imgURL} alt={name} className='w-[280px] h-[280]' />
        <div className='mt-8 flex justify-start gap-2.5'>
            <img src={star} alt='rating star' width={24} height={24} />
            <p className='font-montserrat text-xl leading-normal text-slate-gray'> {rating} </p>
        </div>
        <h3 className='mt-2 text-2xl leading-normal font-semibold font-palanquin'>{name}</h3>
        <p className='mt-2 font-semibold font-montserrat text-coral-red text-2xl leading-normal'>{price}</p>
    </div>
    </Link>
  )
}

export default ProductCard;
