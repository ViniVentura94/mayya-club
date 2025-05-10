import styled from 'styled-components'

export const Wrapper = styled.div`
    padding: 2rem 1rem;
    max-width: 1400px;
    margin: 0 auto;

    .swiper-pagination-bullet {
        background-color: #FF71B5;
        opacity: 0.7;
    }

    .swiper-pagination-bullet-active {
        opacity: 1;
    }
`

export const Container = styled.div`
    background-color: #fff;
    padding: 1rem;
    border-radius: 12px;
    text-align: center;
    box-shadow: 0 0 15px rgba(0,0,0,0.05);
    transition: transform 0.3s  ease-in-out, box-shadow 0.3s ease-in-out;
    cursor: pointer;

    &:hover {
        transform: scale(1.05);
        box-shadow: 0 6px 15px rgba(0,0,0,0.1);
    }

`

export const ImageBox = styled.img`
    width: 100%;
    height: 420px;
    object-fit: cover;
    border-radius: 8px;
    margin-bottom: 1rem;

    
`

export const Title = styled.h3`
    margin-bottom: 0.5rem;
    font-size: 1.1rem;
    font-weight: bold;
    color: #000;
`

export const Price = styled.p`
    margin-bottom: 1rem;
    font-size: 1rem;
    color: #FF71B5;
    font-weight: bold;
`

export const Button = styled.a`
    margin-bottom: 1.5rem;
    display: inline-block;
    padding: 0.5rem 1.25rem;
    border-radius: 8px;
    background-color: #FF71B5;
    color: white;
    font-weight: bold;
    text-decoration: none;
    transition: background 0.3s ease;

    &:hover {
        background-color: #e85ba5;
    }
    `

