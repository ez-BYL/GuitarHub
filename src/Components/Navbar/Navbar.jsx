import React, { useEffect, useState } from 'react'
import  './Navbar.css'
import logo from '../../assets/logo.png'
import menu from '../../assets/menu.svg'
import { Link } from 'react-scroll'


const Navbar = ( ) => {
  const [sticky,setsticky] = useState(false);

  useEffect(()=>{
       window.addEventListener('scroll',()=>{
        window.scrollY > 50 ? setsticky(true) : setsticky(false);
       })
  },[]);

  const [mobileMenu,setMobileMenu] = useState(false);
  const toggleMenu = () =>{
     mobileMenu? setMobileMenu(false) : setMobileMenu(true);
  }

  return (  
    <nav className={`container ${sticky ? 'dark-nav' : ''}`}>  
        <Link to='hero' smooth={true} offset={0} duration={500}><img src={logo} alt="" className='logo' /> </Link>
        <ul className={mobileMenu?'':'hide-mobile-menu'}>  
            <li><Link to='hero' smooth={true} offset={0} duration={500}>Home</Link></li> 
            <li><Link to='brand' smooth={true} offset={-320} duration={500}>Brand</Link></li>  
            <li><Link to='about' smooth={true} offset={-200} duration={500}>About</Link></li>  
            <li><Link to='gallery' smooth={true} offset={-320} duration={500}>Gallery</Link></li>
            <li><Link to='contact' smooth={true} offset={-320} duration={500} className='btn'>Contact Us</Link></li>
            <li><Link to='contact' smooth={true} offset={-320} duration={500} className='btn'>Login</Link></li>
        </ul>  
        <img src={menu} alt="" className='menu-icon' onClick={toggleMenu}/>
    </nav>  
);
}

export default Navbar;
