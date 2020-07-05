import styled from 'styled-components';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

export const Container = styled.html`
    height: 100%;
    width: 100%;
    left: 0;
    top: 0;
    position: absolute;
    background-color: rgba(0, 0, 0, 0.7);

    > span {
        color: #fff;
        display: flex;
        position: absolute;
        align-items: center;
        top: 50%;
        left: 50%;
    }
`;

export const Icon = styled.span``;
