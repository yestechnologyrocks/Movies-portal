
import React from 'react'
import AddToCart from '../AddToCart'
import styles from './ProductCard.module.css'

const ProductCard = () => {
    return (
        <div className={styles.card}>
            ProductCard
            <div > <AddToCart /></div>
        </div>
    )
}

export default ProductCard
