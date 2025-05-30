
import { Container, Title, Message, Button } from './styles';

export const SuccessPage = () => {
    return (
        <Container>
            <Title>Pedido Confirmado! 💖</Title>
            <Message>
                Obrigado por comprar com a Mayya Club.<br />
                Seu pedido está sendo processado e em breve será enviado com carinho!
            </Message>
            <Button href="/">Voltar à loja</Button>
        </Container>
    );
};
