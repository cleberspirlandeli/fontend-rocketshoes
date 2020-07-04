import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as CartActions from './../../store/modules/cart/actions';
import {
    MdRemoveCircleOutline,
    MdAddCircleOutline,
    MdDelete,
    MdMoodBad,
} from 'react-icons/md';
import { Container, ProductTable, Total } from './styles';
import { formatPrice } from './../../util/format';

function Cart({ cart, total, removeTocart, updateAmount }) {
    function incremente(product) {
        updateAmount(product.id, product.amount + 1);
    }
    function decremente(product) {
        updateAmount(product.id, product.amount - 1);
    }

    return (
        <div>
            {!cart.length && (
                <Container>
                    <MdMoodBad size={20} color="#7159c1" /> Está vázio.
                    <p>Adicione um item ao carrinho</p>
                </Container>
            )}

            {cart.length && (
                <Container>
                    <ProductTable>
                        <thead>
                            <tr>
                                <th />
                                <th>PRODUTO</th>
                                <th>QUANTIDADE</th>
                                <th>SUBTOTAL</th>
                                <th />
                            </tr>
                        </thead>
                        <tbody>
                            {cart.map((product) => (
                                <tr key={product.id}>
                                    <td>
                                        <img
                                            src={product.image}
                                            alt={product.title}
                                        />
                                    </td>
                                    <td>
                                        <strong>{product.title}</strong>
                                        <span>{product.priceFormatted} </span>
                                    </td>
                                    <td>
                                        <div>
                                            <button
                                                type="button"
                                                onClick={() =>
                                                    decremente(product)
                                                }
                                            >
                                                <MdRemoveCircleOutline
                                                    size={20}
                                                    color="#7159c1"
                                                />
                                            </button>
                                            <input
                                                type="number"
                                                readOnly
                                                value={product.amount}
                                            />
                                            <button
                                                type="button"
                                                onClick={() =>
                                                    incremente(product)
                                                }
                                            >
                                                <MdAddCircleOutline
                                                    size={20}
                                                    color="#7159c1"
                                                />
                                            </button>
                                        </div>
                                    </td>
                                    <td>
                                        <strong>{product.subtotal}</strong>
                                    </td>
                                    <td>
                                        <button
                                            type="button"
                                            onClick={() =>
                                                removeTocart(product)
                                            }
                                        >
                                            <MdDelete
                                                size={20}
                                                color="#7159c1"
                                            />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </ProductTable>

                    <footer>
                        <Total>
                            <span>TOTAL</span>
                            <strong>{total}</strong>
                        </Total>
                        <button type="button">Finalizar pedido</button>
                    </footer>
                </Container>
            )}
        </div>
    );
}

const mapStateToProps = (state) => ({
    cart: state.cart.map((product) => ({
        ...product,
        subtotal: formatPrice(product.price * product.amount),
    })),
    total: formatPrice(
        state.cart.reduce((total, product) => {
            return total + product.price * product.amount;
        }, 0)
    ),
});

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(CartActions, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
