
import styled from 'styled-components'
import { breakpoints } from '../../styles/breakpoints'

export const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    gap: 3rem;
    padding: 2rem 2rem;
    max-width: 1500px;
    margin: 0 auto;

    @media (max-width: ${breakpoints.tablet}) {
        height:85vh;
        grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    }
    
    @media (max-width: ${breakpoints.mobile}) {
        height:auto;
    }
`

export const Section = styled.section`
    padding: 3rem 2rem;
`