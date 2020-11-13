
import React, { Component } from 'react'
import { globalHistory } from "@reach/router"


class Header extends Component {
    render() {
       const HeaderInfo = [
            {path:"/", 
            title: "Integrating Electricity", 
            description: (<div>
                <p>We are a solution based company providing our customers with the knowledge and expertise to meet their requirements for Electric Vehicle Charging.</p> 
                <p className="second-fp">Whether it’s a basic charger for your home, or a network of Direct-current Fast Charger (DCFC), we have the resources to provide you with a product and service that suits your needs.</p>
                </div>),
            class: "HomeHeader"},
        
            {path:"/Products", 
            title: "All Products", 
            description: null,
            class: "ProductsHeader"},
        
            {path:"/FAQ", 
            title: "Discover More", 
            description: <p>You may be new to Electrical Vehicles or are looking to make the transition from traditional vehicles. ECS’s team of experts would be happy to answer any questions or concerns you may have.</p>,
            class: "faqHeader"},
        
            {path:"/Contact", 
            title: "Get in touch", 
            description: <p>Arrange to meet with our in-house specialists for an onsite consultation or to answer your electrical vehicle inquiries</p>,
            class: "contactHeader"},
        
            {path:"/EVIncentives", 
            title: "Reap the benefits", 
            description: <p>Electric Vehicles have major functional benefits to both you and the environment. To top everything off, different organisations provide programs to make it even more worth your while.</p>,
            class: "eviHeader"}
        ] 
        const pathName = globalHistory.location.pathname
        const content = HeaderInfo.filter(path => path.path === pathName)[0]
        return (
            (content.path != "/Products")?(
            <div className="headerComponent">
                <div className={`${content.class} box-container`}>
                    <div className="box">
                        <div className="top"></div>
                        <div className="medium"><h1>{content.title}</h1><hr></hr></div>
                        <div className="bottom">
                            <div className="contentDesktop">
                                {content.description}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="contentPhone">
                    {content.description}
                </div>
            </div>
            ):(
                <div className="headerComponent">
                <div className={`${content.class} box-container`}>
                    <div className="box">
                        <h1>{content.title}</h1>
                    </div>
                </div>

            </div>
            )
        )
    }
}

export default Header