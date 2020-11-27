import React from 'react';
import Card from "./Card";
import Products from '../../icons/products.png';
import Shop from '../../icons/shop.png';
import FAQ from '../../icons/FAQ.png';


const Cards = () =>{

    const cardInfo =[
       {
            image:Products,
            title:'Products',
            description:'Looking to learn more about our chargers and accessories?',
            button:'Learn More',
            url:'/Products',
            class:'products'
        },
        {
            image:Shop,
            title:'Shop',
            description:'In need to purchase and install a charger for your home or office?',
            button:'Shop Now',
            url:'/Shop',
            class:'shop'
        },
        {
            image:FAQ,
            title:'FAQ',
            description:'New to Electric Vehicles and want to learn their benefits?',
            button:'Learn More',
            url:'FAQ',
            class:'FAQ',
        }
    ]
        
    
    return (
        <section className="cards">

        {cardInfo.map(item=>{
            return (
                <Card title={item.title}
              img={item.image}
              description={item.description}
              class={item.class}
              button={item.button}
              url={item.url}
                />
            
            )
        })}
        
        </section>
    )
}

export default Cards;