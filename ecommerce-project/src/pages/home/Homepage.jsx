import axios from 'axios';
import { useEffect, useState } from 'react';
import './Homepage.css'
import { Header } from '../../components/Header';
import { ProductGrid } from './ProductGrid';

export function HomePage({ cart }) {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const getHomeData = async () => {
            const response = await axios.get('/api/products')
            setProducts(response.data);
        }
        getHomeData();
    }, []);

    return (
        <>
            <Header cart={cart} />
            <title>E-Commerce</title>

            <div className="home-page">
                <ProductGrid products={products} />
            </div>
        </>
    );
}