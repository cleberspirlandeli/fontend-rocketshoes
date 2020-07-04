import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RiShoppingBagLine } from 'react-icons/ri';

import logo from './../../assets/images/logo.svg';
import { Container, Cart } from './styles';

export default function Header() {
    const cartSize = useSelector((state) => state.cart.length);

    return (
        <Container>
            <Link to="/">
                <img src={logo} alt="Rocketshoes" />
            </Link>

            <Cart to="/cart">
                <div>
                    <strong>Meu carrinho</strong>
                    {cartSize < 2 && <span>{cartSize} item</span>}
                    {cartSize > 1 && <span>{cartSize} itens</span>}
                </div>
                <RiShoppingBagLine size={36} color="#FFF" />
            </Cart>
        </Container>
    );
}
