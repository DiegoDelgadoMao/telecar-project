import React from 'react'
import '../styles/loader.css'

export const Loading = () => {
    return (
        <div className='w-full grid place-items-center bg-fourth h-screen'>
            <span className="loader"></span>
        </div>
    )
}
