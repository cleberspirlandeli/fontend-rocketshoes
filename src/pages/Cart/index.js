import React from 'react';
import {
    MdRemoveCircleOutline,
    MdAddCircleOutline,
    MdDelete,
} from 'react-icons/md';
import { Container, ProductTable, Total } from './styles';

export default function Cart() {
    return (
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
                    <tr>
                        <td>
                            <img
                                src="https://static.netshoes.com.br/produtos/tenis-nike-air-max-impact-masculino/20/HZM-3110-120/HZM-3110-120_zoom2.jpg?ts=1585313318&ims=326x"
                                alt="Tênis"
                            />
                        </td>
                        <td>
                            <strong>Tênis legal</strong>
                            <span>R$129,90</span>
                        </td>
                        <td>
                            <div>
                                <button type="button">
                                    <MdRemoveCircleOutline
                                        size={20}
                                        color="#7159c1"
                                    />
                                </button>
                                <input type="number" readOnly value={1} />
                                <button type="button">
                                    <MdAddCircleOutline
                                        size={20}
                                        color="#7159c1"
                                    />
                                </button>
                            </div>
                        </td>
                        <td>
                            <strong>R$258,80</strong>
                        </td>
                        <td>
                            <button type="button">
                                <MdDelete size={20} color="#7159c1" />
                            </button>
                        </td>
                    </tr>
                </tbody>
            </ProductTable>

            <footer>
                <Total>
                    <span>TOTAL</span>
                    <strong>R$1920,28</strong>
                </Total>
                <button type="button">Finalizar pedido</button>
            </footer>
        </Container>
    );
}
