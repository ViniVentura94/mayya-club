
import styled from 'styled-components'

export const Container = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 4rem 2rem;
    max-width: 800px;
    margin: 0 auto;
`

export const Image = styled.img`
    width: 100%;
    max-width: 480px;
    border-radius: 10px;
    object-fit: cover;
`

export const Info = styled.div`
    text-align: center;
    margin-top: 2rem;
`

export const Title = styled.h1`
    font-size: 2rem;
    margin-bottom: 1rem;
`

export const Price = styled.p`
    font-size: 1.5rem;
    color: #FF71B5;
    font-weight: bold;
    margin-bottom: 1rem;
`

export const Description = styled.p`
    font-size: 1rem;
    line-height: 1.6;
    color: #444;
`
