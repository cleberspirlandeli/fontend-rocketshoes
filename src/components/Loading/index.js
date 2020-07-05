import React from 'react';
import { useSelector } from 'react-redux';
import Loader from 'react-loader-spinner';
import { Container } from './styles';

export default function Loading() {
    const { isLoading } = useSelector((state) => state.loading);

    return (
        <>
            {isLoading && (
                <Container>
                    <span>
                        <Loader
                            type="Oval"
                            color="#7159c1"
                            height={100}
                            width={100}
                        />
                    </span>
                </Container>
            )}
        </>
    );
}
