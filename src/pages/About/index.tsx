
import { Container, Title, Paragraph, Section } from './styles'
import { SectionTitle } from '../../components/SectionTitle'

export function About() {
    return (
        <Container>
            <SectionTitle text="Sobre a Mayya Club" />

            <Section>
                <Title>Nossa História</Title>
                <Paragraph>
                    A Mayya Club nasceu da sua paixão por estilo e autenticidade. Ao observar o mercado, ela percebeu que muitos óculos eram genéricos e sem personalidade. Foi então que surgiu a ideia: criar algo que fosse além de proteger os olhos, que revelasse identidade. <br />
                    A Mayya Club existe para valorizar a beleza única de cada mulher e exaltar sua atitude. Porque estilo é expressão. E cada detalhe importa.
                </Paragraph>
            </Section>

            <Section>
                <Title>Significado do nome</Title>
                <Paragraph>
                    Escolhemos o nome <strong>“Mayya”</strong> por sua sonoridade única e exótica, que representa o equilíbrio entre modernidade e mistério.
                    Já <strong>“Club”</strong> simboliza comunidade, queremos que nossas clientes se sintam parte de um estilo de vida, e não apenas de uma loja.
                </Paragraph>
            </Section>

            <Section>
                <Title>Missão e Propósito</Title>
                <Paragraph>
                    Com design contemporâneo e materiais de alta qualidade, nossos óculos combinam elegância e atitude.
                    Cada coleção é pensada para quem deseja se destacar com autenticidade. <br />
                    Nossa missão é empoderar mulheres a se expressarem com confiança, por meio de óculos que unem estilo, atitude e autenticidade.
                </Paragraph>
            </Section>
        </Container>
    )
}
