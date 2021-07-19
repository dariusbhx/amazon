import React from 'react'
import Product from './Product'

const ProductFeed = ({products}) => {
    return (
        <div className ="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:-mt-52 mx-autp">
            
            {products
            .slice(0,4)
            .map(({id,title,price,description, category,image}) =>(
                <Product
                    id ={id}
                    description ={description}
                    image ={image}
                    title={title}
                    price={price}
                    category={category}
                />
            ))}

            <img src="https://links.papareact.com/dyz" className= "md:col-span-full" alt="" />

            <div className="md:col-span-2">
            {products
            .slice(4,5)
            .map(({id,title,price,description, category,image}) =>(
                <Product
                    id ={id}
                    description ={description}
                    image ={image}
                    title={title}
                    price={price}
                    category={category}
                />
            ))}

            </div>
            {products
            .slice(5,products.length)
            .map(({id,title,price,description, category,image}) =>(
                <Product
                    id ={id}
                    description ={description}
                    image ={image}
                    title={title}
                    price={price}
                    category={category}
                />
            ))}

        </div>
    )
}

export default ProductFeed
