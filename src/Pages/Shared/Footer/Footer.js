import React from 'react';
import './Footer.css'

const Footer = () => {
    const d = new Date();
     const date = d.getFullYear();
    return (
       <footer className='footer mt-5'  bg="primary" >
        <p className='text-center mt-3' ><small>Copyright @ {date}</small></p>
       </footer>
    );
};

export default Footer;