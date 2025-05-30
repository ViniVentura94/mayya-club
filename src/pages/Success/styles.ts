

import styled from 'styled-components';

export const Container = styled.div`
    max-width: 600px;
    height: 90vh;
    margin: 60px auto;
    text-align: center;
    padding: 32px;
    background-color: #fff;
    border-radius: 16px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.1);
`;

export const Title = styled.h1`
    color: #FF71B5;
    margin-bottom: 16px;
`;

export const Message = styled.p`
    font-size: 18px;
    color: #444;
    margin-bottom: 24px;
`;

export const Button = styled.a`
    display: inline-block;
    padding: 12px 24px;
    background-color: #FF71B5;
    color: white;
    font-weight: bold;
    border-radius: 8px;
    text-decoration: none;
    transition: background-color 0.3s;

    &:hover {
        background-color: #e35ea3;
    }
`;
