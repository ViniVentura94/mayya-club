
import { Container, Title, Paragraph, Section } from './styles'
import { SectionTitle } from '../../components/SectionTitle'

export function About() {
    return (
        <Container>
            <SectionTitle text="Sobre a Mayya Club" />

            <Section>
                <Title>Nossa História</Title>
                <Paragraph>
                    A Mayya Club nasceu da paixão por estilo e autenticidade. Fundada por Laisa T. dos Santos da Silveira,
                    a marca foi criada com o propósito de oferecer óculos que unem elegância, atitude e acessibilidade.
                </Paragraph>
            </Section>

            <Section>
                <Title>Missão e Propósito</Title>
                <Paragraph>
                    Proporcionar uma experiência de estilo única, com produtos que refletem a identidade de quem usa.
                </Paragraph>
            </Section>

            <Section>
                <Title>Por que escolher a Mayya Club?</Title>
                <Paragraph>
                    Porque acreditamos que estilo é mais do que aparência — é expressão. E cada detalhe importa.
                </Paragraph>
            </Section>
        </Container>
    )
}
