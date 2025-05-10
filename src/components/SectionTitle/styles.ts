
import styled from 'styled-components'
import { breakpoints } from '../../styles/breakpoints'

export const Title = styled.h2`
    font-size: 2rem;
    font-weight: 600;
    color: #000;
    margin-bottom: 1.5rem;
    position: relative;
    display: inline-block;

    &::after {
        content: '';
        display: block;
        height: 4px;
        width: 60px;
        background-color: #FF71B5;
        border-radius: 4px;
    }

    @media (max-width: ${breakpoints.mobile}) {
        font-size: 1.5rem;
    }
`
