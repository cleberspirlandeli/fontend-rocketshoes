import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
    background: #fff;
    padding: 30px;
    border-radius: 4px;

    footer {
        margin-top: 30px;
        display: flex;
        justify-content: space-between;
        align-items: center;

        button {
            background: #7159c1;
            padding: 12px 20px;
            border: 1px solid ${darken(0.05, '#7159c1')};
            border-radius: 4px;
            color: #fff;
            text-transform: uppercase;
            font-weight: bold;
            transition: background 0.2s;
            box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16),
                0 3px 6px rgba(0, 0, 0, 0.23);

            &:hover {
                background: ${darken(0.03, '#7159c1')};
            }
        }
    }
`;

export const ProductTable = styled.table`
    width: 100%;

    thead th {
        text-align: left;
        color: #999;
        padding: 12px;
    }

    tbody td {
        padding: 12px;
        border-bottom: 1px solid #eee;
    }

    img {
        height: 100px;
    }

    strong {
        color: #333;
        display: block;
    }

    span {
        display: block;
        margin-top: 5px;
        font-size: 18px;
        font-weight: bold;
    }

    div {
        display: flex;
        align-items: center;

        input {
            border: 1px solid #ddd;
            border-radius: 4px;
            color: #666;
            padding: 6px;
            width: 50px;
        }
    }

    button {
        background: none;
        border: 0px;
        padding: 6px;
    }
`;

export const Total = styled.div`
    display: flex;
    align-items: baseline;

    span {
        color: #999;
        font-weight: bold;
    }

    strong {
        font-size: 28px;
        margin-left: 5px;
    }
`;
