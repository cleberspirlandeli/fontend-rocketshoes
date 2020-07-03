import React, { Component } from 'react';
import { MdShoppingCart } from 'react-icons/md';
import { connect } from 'react-redux';

import { ProductList } from './styles';
import api from './../../services/api';
import { formatPrice } from './../../util/format';
class Home extends Component {
    state = {
        products: [],
    };

    async componentWillMount() {
        const response = await api.get('products');

        const data = response.data.map((product) => ({
            ...product,
            priceFormatted: formatPrice(product.price),
        }));

        this.setState({
            products: data,
        });
    }

    handleAddProduct = (product) => {
        const { dispatch } = this.props;

        dispatch({
            type: 'ADD_TO_CART',
            product,
        });
    };

    render() {
        const { products } = this.state;
        return (
            <ProductList>
                {products.map((product) => (
                    <li key={product.id}>
                        <img alt={product.title} src={product.image} />
                        <strong>{product.title}</strong>
                        <span>{product.priceFormatted}</span>

                        <button
                            type="button"
                            onClick={() => this.handleAddProduct(product)}
                        >
                            <div>
                                <MdShoppingCart size={16} color="#FFF" /> 3
                            </div>

                            <span>Adicionar ao carrinho</span>
                        </button>
                    </li>
                ))}
            </ProductList>
        );
    }
}

export default connect()(Home);
