
import styled from 'styled-components'

export const Container = styled.section`
    padding: 4rem 2rem;
    height: 100vh;
    max-width: 800px;
    margin: 0 auto;
    text-align: center;
`

export const Text = styled.p`
    font-size: 1.1rem;
    color: #333;
    margin-top: 1.5rem;
    line-height: 1.6;
`

export const ButtonsWrapper = styled.div`
    display: flex;
    gap: 1.5rem;
    justify-content: center;
    margin-top: 2.5rem;
    flex-wrap: wrap;

    a {
        padding: 0.75rem 2rem;
        background-color: #FF71B5;
        color: #fff;
        border-radius: 8px;
        font-weight: bold;
        text-decoration: none;
        transition: background 0.3s ease-in-out;

    &:hover {
        background-color: #e85ba5;
    }
  }
`

export const SmallText = styled.p`
    font-size: 0.9rem;
    color: #777;
    margin-top: 2rem;
`
