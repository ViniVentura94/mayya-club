
import styled from 'styled-components'
import { breakpoints } from '../../styles/breakpoints'

export const Hero = styled.section`
    width: 100%;
    display: flex;
    justify-content: center;
    background-color: #fff;
    margin-top: 2rem;

    img {
        width: 100%;
        height: 75vh;
        max-width: 1500px;
        object-fit: cover;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    @media (max-width: ${breakpoints.mobile}) {

        img {
            height: auto;
            border-radius: 8px;
        }
    }

    @media (min-width: ${breakpoints.tablet}) {

        img {
            height: auto;
            border-radius: 8px;
        }
    }
`


export const Overlay = styled.div`
    //background-color: rgba(0, 0, 0, 0.6); // escurece imagem de fundo
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const HeroContent = styled.div`
    text-align: start;
    color: #fff;
    margin-top: 15rem;
    padding: 2rem 3rem;
`

export const HeroTitle = styled.h1`
    font-size: 3rem;
    font-weight: bold;
    margin-bottom: 1rem;
`

export const HeroButton = styled.a`
    padding: 0.8rem 2rem;
    background-color: #FF71B5;
    color: white;
    border-radius: 8px;
    font-weight: bold;
    font-size: 1rem;
    text-decoration: none;
    transition: background 0.3s ease;

    &:hover {
        background-color: #e85ba5;
  }
`

export const Section = styled.section`
    padding: 3rem 2rem;
`

export const Text = styled.p`
    font-size: 1.1rem;
    max-width: 800px;
    line-height: 1.6;
    color: #333;
`
