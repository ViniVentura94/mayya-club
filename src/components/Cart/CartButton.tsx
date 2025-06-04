
import { useCart } from '../../context/CartContext';
import { FaShoppingCart } from 'react-icons/fa';
import styled from 'styled-components';

const Button = styled.button`
    position: relative;
    background: none;
    border: none;
    cursor: pointer;
    color: #080808;
`;

const Counter = styled.span`
    position: absolute;
    top: -8px;
    right: -8px;
    background-color: red;
    color: #050505;
    border-radius: 50%;
    padding: 2px 6px;
    font-size: 12px;
`;

export const CartButton = () => {
    const { cart } = useCart();
    const quantity = cart.reduce((sum, item) => sum + item.quantity, 0);

    return (
        <Button>
            <FaShoppingCart size={24} />
            {quantity > 0 && <Counter>{quantity}</Counter>}
        </Button>
    );
};
