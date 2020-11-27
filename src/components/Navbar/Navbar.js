
import React, { useState } from 'react';
import { Link } from 'gatsby';
import Logo from '../../images/Logo.png';
import Clock from '../../icons/clock.png';
import Email from '../../icons/email.png';
import { businessInfo } from '../../theme/bussinesInfo';
import Togglebutton from './Togglebutton';
import Sidebar from './Sidebar';

 const Navbar = () => {

    const [sidebar,setSidebar] =useState(false);


    const handleEvent = () =>{
        setSidebar(!sidebar);
    }

    return (
        
        <header>
        
        <div className="top-bar">
        <div className="logo">
           <Link to="/"><img className="logo" src={Logo} alt=""/></Link>   
        </div>
        <div className="items">
        <ul className="info">
                <li className="item"><a href=""><img className="icon clock" src={Clock} alt="icon"/>{businessInfo.phone}</a></li>
                <li className="item"><a href=""><img className="icon email" src={Email} alt="icon"/>{businessInfo. email}</a></li>
         </ul>
        </div>
         </div>
        
        <div className="main">
            <div className="icon">
            <Togglebutton click={handleEvent}/>
            </div>
            <nav className="items">
                <ul className="menu">
                    <li className="item" ><Link  to="/"  activeClassName="active first">Home </Link></li>
                    <li className="item" ><Link to="/Products"  activeClassName="active">Products</Link></li>
                    <li className="item"><Link to="/Shop" activeClassName="active">Shop</Link></li>
                    <li className="item"><Link to="/FAQ" activeClassName="active"> Faq</Link></li>
                    <li className="item"><Link to="/EVIncentives" activeClassName="active"> Incentive Programs</Link></li>
                    <li className="item"><Link to="/Contact" activeClassName="active">Contact us</Link></li>
                </ul>
            </nav>
            <div className="logo">
                <Link to="/"><img className="logo" src={Logo} alt=""/></Link>   
           </div>
        </div>
        {sidebar? <Sidebar />:null}
       
    </header>
   
  
    )
}


export default Navbar;