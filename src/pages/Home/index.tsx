
import { Hero, Section, Text } from './styles'
import { SectionTitle } from '../../components/SectionTitle'
import { ProductCarousel } from '../../components/ProductCarousel'
import heroBackground from '../../assets/BannerMayyaClub.jpg'


export function Home() {

    return (
        <>
            <Hero>
                <img src={heroBackground} alt="Pré-venda Mayya Club - Save the Date 20.05.2025" />
            </Hero>

            <Section id="catalogo">
                <SectionTitle text="Destaques" />
                <ProductCarousel />
            </Section>

            <Section id="sobre">
                <SectionTitle text="Sobre a Mayya Club" />
                <Text>
                    A Mayya Club nasceu com o propósito de oferecer óculos com estilo, qualidade e atitude.
                    Criada para pessoas que buscam elegância sem abrir mão da autenticidade.
                </Text>
            </Section>
        </>
    )
}
