import React from 'react';
import { Link } from 'gatsby';

const Sidebar = () =>{

    return (
        <nav className="sidebar">
                <ul className="menu">
                    <li className="item" ><Link  to="/" activeClassName="active">Home</Link></li>
                    <li className="item" ><Link to="/Products"  activeClassName="active">Products</Link></li>
                    <li className="item"><Link to="/Shop" activeClassName="active">Shop</Link></li>
                    <li className="item"><Link to="/FAQ" activeClassName="active"> Faq</Link></li>
                    <li className="item"><Link to="/EVIncentives" activeClassName="active"> Incentive Programs</Link></li>
                    <li className="item"><Link to="/Contact" activeClassName="active">Contact us</Link></li>
                </ul>
       </nav>
    )
}

export default Sidebar;