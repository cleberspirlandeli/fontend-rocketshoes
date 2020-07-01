import React from 'react';
import { MdShoppingCart } from 'react-icons/md';

import { ProductList } from './style';

export default function Home() {
    return (
        <ProductList>
            <li>
                <img
                    alt="Tênis"
                    src="https://static.netshoes.com.br/produtos/tenis-nike-air-max-impact-masculino/20/HZM-3110-120/HZM-3110-120_zoom2.jpg?ts=1585313318&ims=326x"
                />
                <strong>Tênis gostozim no azeite</strong>
                <span>R$359,99</span>

                <button type="button">
                    <div>
                        <MdShoppingCart size={16} color="#FFF" /> 3
                    </div>

                    <span>Adicionar ao carrinho</span>
                </button>
            </li>

            <li>
                <img
                    alt="Tênis"
                    src="https://static.netshoes.com.br/produtos/tenis-nike-air-max-impact-masculino/20/HZM-3110-120/HZM-3110-120_zoom2.jpg?ts=1585313318&ims=326x"
                />
                <strong>Tênis gostozim no azeite</strong>
                <span>R$359,99</span>

                <button type="button">
                    <div>
                        <MdShoppingCart size={16} color="#FFF" /> 3
                    </div>

                    <span>Adicionar ao carrinho</span>
                </button>
            </li>
            <li>
                <img
                    alt="Tênis"
                    src="https://static.netshoes.com.br/produtos/tenis-nike-air-max-impact-masculino/20/HZM-3110-120/HZM-3110-120_zoom2.jpg?ts=1585313318&ims=326x"
                />
                <strong>Tênis gostozim no azeite</strong>
                <span>R$359,99</span>

                <button type="button">
                    <div>
                        <MdShoppingCart size={16} color="#FFF" /> 3
                    </div>

                    <span>Adicionar ao carrinho</span>
                </button>
            </li>
            <li>
                <img
                    alt="Tênis"
                    src="https://static.netshoes.com.br/produtos/tenis-nike-air-max-impact-masculino/20/HZM-3110-120/HZM-3110-120_zoom2.jpg?ts=1585313318&ims=326x"
                />
                <strong>Tênis gostozim no azeite</strong>
                <span>R$359,99</span>

                <button type="button">
                    <div>
                        <MdShoppingCart size={16} color="#FFF" /> 3
                    </div>

                    <span>Adicionar ao carrinho</span>
                </button>
            </li>
            <li>
                <img
                    alt="Tênis"
                    src="https://static.netshoes.com.br/produtos/tenis-nike-air-max-impact-masculino/20/HZM-3110-120/HZM-3110-120_zoom2.jpg?ts=1585313318&ims=326x"
                />
                <strong>Tênis gostozim no azeite</strong>
                <span>R$359,99</span>

                <button type="button">
                    <div>
                        <MdShoppingCart size={16} color="#FFF" /> 3
                    </div>

                    <span>Adicionar ao carrinho</span>
                </button>
            </li>
        </ProductList>
    );
}
