import React from 'react'
import Logo from './picture.svg';
import './Loader.css';

export default function Loader() {
    return (
        <div className='loader-container'>
        <img className='loader' src={Logo} alt="loader"/>
        </div>
    )
}
