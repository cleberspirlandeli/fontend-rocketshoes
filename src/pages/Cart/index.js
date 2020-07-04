import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as CartActions from './../../store/modules/cart/actions';
import {
    MdRemoveCircleOutline,
    MdAddCircleOutline,
    MdDelete,
    MdMoodBad,
} from 'react-icons/md';
import { Container, ProductTable, Total } from './styles';
import { formatPrice } from './../../util/format';

export default function Cart() {
    const dispatch = useDispatch();

    const cart = useSelector((state) =>
        state.cart.map((product) => ({
            ...product,
            subtotal: formatPrice(product.price * product.amount),
        }))
    );
    const total = useSelector((state) =>
        formatPrice(
            state.cart.reduce((sumTotal, product) => {
                return sumTotal + product.price * product.amount;
            }, 0)
        )
    );

    function incremente(product) {
        dispatch(
            CartActions.updateAmountRequest(product.id, product.amount + 1)
        );
    }
    function decremente(product) {
        dispatch(
            CartActions.updateAmountRequest(product.id, product.amount - 1)
        );
    }
    function removeToCart(product) {
        dispatch(CartActions.removeTocart(product));
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
                                                removeToCart(product)
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
