import axios from 'axios';
import { useEffect, useState } from 'react';
import './Homepage.css'
import { Header } from '../../components/Header';
import { ProductGrid } from './ProductGrid';
import { useSearchParams } from 'react-router';

export function HomePage({ cart, loadCart }) {
    const [products, setProducts] = useState([]);
    const [searchParams] = useSearchParams();

    const search = searchParams.get('search');

    useEffect(() => {
        const getHomeData = async () => {
            const url = search ? `/api/products?search=${search}` : '/api/products';
            const response = await axios.get(url)
            setProducts(response.data);
        }
        getHomeData();
    }, [search]);

    return (
        <>
            <Header cart={cart} />
            <title>E-Commerce</title>

            <div className="home-page">
                <ProductGrid products={products} loadCart={loadCart} />
            </div>
        </>
    );
}