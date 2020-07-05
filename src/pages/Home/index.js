import React, { useState, useEffect } from 'react';
import { MdShoppingCart } from 'react-icons/md';
import { useSelector, useDispatch } from 'react-redux';
import Loader from 'react-loader-spinner';

import { ProductList } from './styles';
import api from './../../services/api';
import * as CartActions from './../../store/modules/cart/actions';
import { formatPrice } from './../../util/format';

export default function Home() {
    const dispatch = useDispatch();
    const [products, setProducts] = useState([]);
    const amount = useSelector((state) =>
        state.cart.reduce((sumAmount, product) => {
            sumAmount[product.id] = product.amount;
            return sumAmount;
        }, {})
    );
    const loading = useSelector((state) => state.loading);
    const { isLoading } = loading;
    console.log('x', loading, isLoading);

    useEffect(() => {
        async function loadProducts() {
            const response = await api.get('products');

            const data = response.data.map((product) => ({
                ...product,
                priceFormatted: formatPrice(product.price),
            }));

            setProducts(data);
        }

        loadProducts();
    }, []);

    function handleAddProduct(id) {
        dispatch(CartActions.addToCartRequest(id));
    }

    return (
        <ProductList>
            {products.map((product) => (
                <li key={product.id}>
                    <img alt={product.title} src={product.image} />
                    <strong>{product.title}</strong>
                    <span>{product.priceFormatted}</span>

                    <button
                        type="button"
                        onClick={() => handleAddProduct(product.id)}
                    >
                        <div>
                            <MdShoppingCart size={16} color="#FFF" />{' '}
                            {amount[product.id] || 0}
                        </div>

                        {!isLoading && <span>Adicionar ao carrinho</span>}
                        {isLoading && <span>Aguarde...</span>}
                    </button>
                </li>
            ))}
        </ProductList>
    );
}
