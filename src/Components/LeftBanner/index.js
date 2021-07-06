import React from 'react';
import { Container } from './styles';

const LeftBanner = ({ children, title, text }) => {
    return(
        <Container>
            <h3>{title}</h3>
            <hr />
            <p>
                {text}
            </p>
            
            {children}
        </Container>
    )
}

export default LeftBanner;