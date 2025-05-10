import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const MainImage = styled.img`
    width: 100%;
    max-width: 480px;
    border-radius: 10px;
    object-fit: cover;
`

export const Thumbnails = styled.div`
    margin-top: 1rem;
    display: flex;
    gap: 1rem;

    img {
        width: 80px;
        height: 80px;
        object-fit: cover;
        border-radius: 6px;
        cursor: pointer;
        border: 2px solid transparent;
        transition: border 0.3s ease-in-out;

        &.active {
            border: 2px solid #FF71B5;
    }
  }
`
