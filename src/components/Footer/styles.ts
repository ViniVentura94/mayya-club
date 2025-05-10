
import styled from 'styled-components'

export const Container = styled.footer`
    width:100%;
    background-color: #000;
    color: #fff;
    padding: 2rem 6rem 2rem 3rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
`

export const Info = styled.p`
    font-size: 0.9rem;
`

export const Links = styled.div`
    display: flex;
    gap: 1.5rem;

a {
    color: #FF71B5;
    text-decoration: none;
    font-size: 0.9rem;

&:hover {
      text-decoration: underline;
    }
}
`
