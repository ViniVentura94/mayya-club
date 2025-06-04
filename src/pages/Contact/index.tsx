
import { Container, Text, ButtonsWrapper, SmallText } from './styles'
import { SectionTitle } from '../../components/SectionTitle'

export function Contact() {
    return (
        <Container id="contato">
            <SectionTitle text="Fale com a gente" />

            <Text>
                Tem dúvidas ou precisa de ajuda? Você pode falar com a gente pelo WhatsApp ou Instagram.
                Responderemos o mais rápido possível 💖
            </Text>

            <ButtonsWrapper>
                <a
                    href="https://wa.me/5521988035501"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    WhatsApp
                </a>
                <a
                    href="https://instagram.com/mayyaclub"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Instagram
                </a>
            </ButtonsWrapper>

            <SmallText>
                Atendimento: Segunda a Sexta, das 9h às 18h
            </SmallText>
        </Container>
    )
}
