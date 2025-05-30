
import styled from 'styled-components';

export const Container = styled.div`
    max-width: 600px;
    height: 90vh;
    margin: 40px auto;
    padding: 24px;
    background-color: #fff;
    border-radius: 12px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`

export const Title = styled.h2`
    margin-bottom: 24px;
`

export const Field = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 16px;
`

export const Label = styled.label`
    margin-bottom: 6px;
`

export const Input = styled.input`
    padding: 10px;
    border-radius: 8px;
    border: 1px solid #ccc;
`

export const ErrorText = styled.p`
    color: red;
    font-size: 14px;
    margin-top: 4px;
`

export const Button = styled.button`
    padding: 12px 20px;
    background-color: #FF71B5;
    color: white;
    border: none;
    border-radius: 8px;
    font-weight: bold;
    font-size: 16px;
    cursor: pointer;

    &:hover {
        background-color: #e35ea3;
    }
`
