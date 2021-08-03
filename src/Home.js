import React from 'react'
import './Home.css'
import Product from './Product'
function Home() {
    return (
        <div className="home">
            <div className="home_container">
                <img src="https://media-assets-01.thedrum.com/cache/images/thedrum-prod/s3-news-tmp-140656-untitled_design_79--2x1--940.jpg" />
            </div>
            <div className="home_row">
                <Product
                    tittle="

Fashionable Women's Jacquard Gowns* Fabric"
                    price={4999}
                    rating={3}
                    image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLkpyevQIavnXVw9wvXRzgTFiqoWVLgPlk7g&usqp=CAU" />
                <Product
                    tittle="Dress Women Sleeveless V Neck Sequined, Evening Slim Maxi fashion new Dress women"
                    price={5999}
                    rating={3}
                    image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjPgOErkZ_rcndHRDNoaGjZzy5Mvz5r6Wg4Q&usqp=CAU" />

                <Product
                    tittle="Fashions Red Gown Women's Wedding Elegant Party Dress"
                    price={10999}
                    rating={3}
                    image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_C6vS0tw1kxXW0KzXGCBXguqOaRslCGDvIw&usqp=CAU" />

            </div>
            <div className="home_row">
                <Product
                    id="40"
                    tittle="White with flowered design gown Wedding Elegant Party wear for women"
                    price={599}
                    rating={3}
                    image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsYYkTzr0Z5-Ea5Calzr_BConTG-sV7k2IKw&usqp=CAU" />

                <Product
                    id="23"
                    tittle="White suit with long duppatta"
                    price={8999}
                    rating={3}
                    image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5qQwanMNh81KMIi7mfdF-De_I9Li41u4-QQ&usqp=CAU"
                />

            </div>
            <div className="home_row">

                <Product
                    id="24"
                    tittle="Long one piece gown with black color"
                    price={300}
                    rating={5}
                    image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8sFmEpVfbdBhMtqG0yBEreuzTLl1nbQ7YBA&usqp=CAU" />

            </div>
        </div>
    )
}

export default Home
