
import styled from 'styled-components'

export const Card = styled.div`
    width: 100%;
    max-width: 320px;
    background-color: #fff;
    border: 1px solid #eee;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 4px 8px rgba(0,0,0,0.05);
    display: flex;
    flex-direction: column;
    transition: transform 0.2s;

    &:hover {
        transform: translateY(-5px);
    }
`

export const Image = styled.img`
    width: 100%;
    height: 320px;
    object-fit: cover;
    object-position: top;
`

export const Info = styled.div`
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
`

export const Title = styled.h2`
    font-size: 1rem;
    color: #000;
`

export const Price = styled.p`
    font-weight: bold;
    color: #FF71B5;
    font-size: 1rem;
`

export const Button = styled.button`
    margin-top: 0.5rem;
    padding: 0.5rem 1rem;
    background-color: #FF71B5;
    border: none;
    border-radius: 8px;
    color: #fff;
    font-weight: bold;
    cursor: pointer;
    transition: background 0.3s;

    &:hover {
        background-color: #e85ba5;
    }
`
