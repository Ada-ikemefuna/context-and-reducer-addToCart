import React from 'react'
import Product from '../components/Product'

const Store = () => {
    const products = [
        {
            id:'1',
            head: "Bag",
            title: "The new Unified Harness shoulder straps are crazy comfortable making it that much easier to walk across the city with your laptop.",
            price: 110.96,
            image: "https://m.media-amazon.com/images/I/41l6VFfhYAL.jpg",
        },
        {
            id:'2',
            head: "Shoes",
            title: "The new Unified Harness shoulder straps are crazy comfortable making it that much easier to walk across the city with your laptop.",
            price: 299.8,
            image: "https://media.gettyimages.com/photos/canvas-shoes-picture-id171224469?k=20&m=171224469&s=612x612&w=0&h=-gCNzSsAb9abkuq2ZH3Dwr9uT-FV2AcCDGK7Q1qJ41E=",
        },
        {
            id:'3',
            head: "Bonnet",
            title: "The new Unified Harness shoulder straps are crazy comfortable making it that much easier to walk across the city with your laptop.",
            price: 34.96,
            image: "https://media.gettyimages.com/photos/closeup-of-cloth-bonnet-picture-id57612718?k=20&m=57612718&s=612x612&w=0&h=ii6La4tYYjpORlo0R20rRPacl_jaCIImqtJw6hy_q94=",
        },
    ]


  return (
    <div>
        {products.map(product => (
            <Product key={product.id} product={product}/>
        ))}
    </div>
  )
}

export default Store