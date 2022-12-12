import React from 'react'
import { RiCloseLine, RiMessage2Fill } from "react-icons/ri";

export const ModalInfo = ({ product, dispatch }) => {
    const closeModal = ()=>{
        dispatch({type: 'CLOSE_MODAL'})
    }
    return (
        <div className='w-full h-screen fixed grid place-items-center bg-[#00000085] z-[3] top-0 left-0 '>
            <div className='relative w-4/5 m-w-xl h-4/5 max-h-96 bg-fourth rounded-lg grid grid-cols-1 grid-rows-[1fr_15%]'>
                <div className='overflow-y-scroll w-full h-full '>
                    < RiCloseLine onClick={closeModal} className='absolute top-1 left-1 text-fifth w-6 h-6' />
                    <div className='h-40 w-full grid place-items-center mt-6'>
                        <img src={product.img} alt="" className='w-36 h-36 object-contain' />
                    </div>
                    <div className='w-4/5 mx-auto flex flex-col gap-2'>
                        <h1 className='txt-3xl font-extrabold'>{product.name}</h1>
                        <h2 className='txt-sm font-thin'>{product.marca}</h2>
                        <p className='txt-xs leading-5 font-ligth'>{product.description}</p>
                        <div>
                            <h3 className='txt-2xl font-semibold mt-4 mb-1'>Caracteristicas:</h3>
                            <p className='txt-xs leading-5 font-ligth'>
                                {product.feature}x
                            </p>
                        </div>
                        <div className='mb-4'>
                            <h3 className='txt-2xl font-semibold mt-4 mb-1'>Beneficios:</h3>
                            <p className='txt-xs leading-5 font-ligth'>
                                {product.beneficial}
                            </p>
                        </div>
                    </div>

                </div>
                <div className='grid place-items-center'>
                    <button className='w-11/12 max-w-xs bg-second text-fourth flex justify-center gap-4 items-center h-[78%] rounded-lg font-semibold txt-lg'>
                        Cotizar
                        <RiMessage2Fill className='w-8 h-8' />
                    </button>
                </div>
            </div>
        </div >
    )
}
