
import styled from 'styled-components'

export const Button = styled.a`
    position: fixed;
    bottom: 24px;
    right: 24px;
    background-color: #25D366;
    color: white;
    padding: 0.75rem;
    border-radius: 50%;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
    z-index: 1000;
    transition: transform 0.2s, background 0.3s;

    &:hover {
        transform: scale(1.1);
        background-color: #1ebe5d;
    }

    svg {
        display: block;
    }
`
