import React from 'react';
import Card from '../Card/Card';
import "./FeaturedProducts.scss";

const FeaturedProducts = ({ type }) => {

    const data = [
        {
            id: 1,
            img: "https://images.pexels.com/photos/1972115/pexels-photo-1972115.jpeg?auto=compress&cs=tinysrgb&w=1600",
            img2: "https://images.pexels.com/photos/1163194/pexels-photo-1163194.jpeg?auto=compress&cs=tinysrgb&w=1600",
            title: "long Sleeve Grapgic T-shirt",
            iSNew: true,
            oldPrice: 19,
            price: 12,
        },
        {
            id: 2,
            img: "https://images.pexels.com/photos/1457983/pexels-photo-1457983.jpeg?auto=compress&cs=tinysrgb&w=1600",
            title: "Skirt",
            iSNew: true,
            oldPrice: 19,
            price: 12,
        },
        {
            id: 3,
            img: "https://images.pexels.com/photos/1972115/pexels-photo-1972115.jpeg?auto=compress&cs=tinysrgb&w=1600",
            title: "Hat",
            iSNew: false,
            oldPrice: 19,
            price: 12,
        },
        {
            id: 4,
            img: "https://images.pexels.com/photos/2065200/pexels-photo-2065200.jpeg?auto=compress&cs=tinysrgb&w=1600",
            title: "Coat",
            iSNew: false,
            oldPrice: 19,
            price: 12,
        }
    ]



    return (
        <div className='featuredProducts'>
            <div className="top">
                <h1>{type} Products</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat laudantium laboriosam officiis quis reiciendis non. Ex in illo id ad magni dolorem quo numquam, repellat cum provident voluptatibus corporis corrupti reiciendis possimus atque vel suscipit aliquam debitis saepe quos a animi! Maiores eum odit voluptas id cumque iure esse ea?
                </p>
            </div>
            <div className="bottom">
            {data.map(item => (
                <Card item={item} key={item.id} />
            ))}
            </div>
        </div>
    )
}

export default FeaturedProducts