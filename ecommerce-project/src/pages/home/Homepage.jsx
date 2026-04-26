import axios from 'axios';
import { useEffect, useState } from 'react';
import './Homepage.css'
import { Header } from '../../components/Header';
import { ProductGrid } from './ProductGrid';

export function HomePage({cart}) {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('/api/products').
            then((response) => {
                setProducts(response.data);
            })
    }, []);

    return (
        <>
            <Header cart={cart} />
            <title>E-Commerce</title>

            <div className="home-page">
                <ProductGrid products={products}/>
            </div>
        </>
    );
}