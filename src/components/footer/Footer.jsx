import './Footer.css';
import * as React from 'react';
import { FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <>
            <div className='Footer1'>
                <div className='textFooter'> Seguí a VapeLife en <div className='margenIg'><FaInstagram /></div> <div className='margenTw'><FaTwitter /></div> </div>
                <div className='centerAll'>
                    
                </div>
                <span className='derechos'>Todos los derechos reservados</span>
            </div>
        </>
    )
}

export default Footer; 