
import { Hero, Section } from './styles'
import { SectionTitle } from '../../components/SectionTitle'
import { ProductCarousel } from '../../components/ProductCarousel'
import heroBackground from '../../assets/banners/BannerMayyaClubLancamento.jpg'


export function Home() {

    return (
        <>
            <Hero>
                <img src={heroBackground} alt="Lançamento Mayya Club - 20/05/2025" />
            </Hero>

            <Section id="catalogo">
                <SectionTitle text="Destaques" />
                <ProductCarousel />
            </Section>
        </>
    )
}
