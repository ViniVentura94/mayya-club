
import styled from 'styled-components';
import { useCart } from '../../context/CartContext';

const Overlay = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 999;
`;

const Modal = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    width: 350px;
    height: 100%;
    background-color: #fff;
    padding: 24px;
    box-shadow: -2px 0 8px rgba(0, 0, 0, 0.3);
    z-index: 1000;
    overflow-y: auto;
`;

const Title = styled.h2`
    margin-bottom: 16px;
`;

const ProductItem = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 12px;
    border-bottom: 1px solid #ddd;
    padding-bottom: 8px;
`;

const ProductDetails = styled.div`
    display: flex;
    flex-direction: column;
`;

const ProductName = styled.span`
    
`;

const Total = styled.p`
    margin-top: 24px;
    font-size: 18px;
    font-weight: bold;
`;

const Button = styled.button`
    margin-top: 16px;
    padding: 10px 16px;
    background-color: #FF71B5;
    color: white;
    border: none;
    border-radius: 8px;
    font-weight: bold;
    cursor: pointer;

    &:hover {
        background-color: #e35ea3;
  }
`;

interface CartModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export const CartModal = ({ isOpen, onClose }: CartModalProps) => {
    const { cart, removeFromCart } = useCart();

    if (!isOpen) return null;

    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2);

    return (
        <>
            <Overlay onClick={onClose} />
            <Modal>
                <Title>Seu Carrinho</Title>
                {cart.length === 0 ? (
                    <p>Carrinho vazio</p>
                ) : (
                    cart.map(product => (
                        <ProductItem key={product.id}>
                            <ProductDetails>
                                <ProductName>{product.name}</ProductName>
                                <span>Qtd: {product.quantity}</span>
                                <span>R$ {product.price.toFixed(2)}</span>
                            </ProductDetails>
                            <button onClick={() => removeFromCart(product.id)}>Remover</button>
                        </ProductItem>
                    ))
                )}
                {cart.length > 0 && (
                    <>
                        <Total>Total: R$ {total}</Total>
                        <Button onClick={() => alert('Compra finalizada (simulação)!')}>Finalizar Compra</Button>
                    </>
                )}
            </Modal>
        </>
    );
};
