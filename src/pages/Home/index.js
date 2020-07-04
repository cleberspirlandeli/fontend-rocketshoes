import React, { Component } from 'react';
import { MdShoppingCart } from 'react-icons/md';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { ProductList } from './styles';
import api from './../../services/api';
import * as CartActions from './../../store/modules/cart/actions';
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

    handleAddProduct = (id) => {
        const { addToCartRequest } = this.props;
        addToCartRequest(id);
    };

    render() {
        const { products } = this.state;
        const { amount } = this.props;
        return (
            <ProductList>
                {products.map((product) => (
                    <li key={product.id}>
                        <img alt={product.title} src={product.image} />
                        <strong>{product.title}</strong>
                        <span>{product.priceFormatted}</span>

                        <button
                            type="button"
                            onClick={() => this.handleAddProduct(product.id)}
                        >
                            <div>
                                <MdShoppingCart size={16} color="#FFF" />{' '}
                                {amount[product.id] || 0}
                            </div>

                            <span>Adicionar ao carrinho</span>
                        </button>
                    </li>
                ))}
            </ProductList>
        );
    }
}

const mapStateToProps = (state) => ({
    amount: state.cart.reduce((amount, product) => {
        amount[product.id] = product.amount;
        return amount;
    }, {}),
});

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(CartActions, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
