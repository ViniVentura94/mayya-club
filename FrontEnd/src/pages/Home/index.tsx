
import { Hero, Section } from './styles'
import { SectionTitle } from '../../components/SectionTitle'
import { ProductCarousel } from '../../components/ProductCarousel'
import heroBackground from '../../assets/banners/BannerMayyaClubDiaNamorados.jpg'


export function Home() {

    return (
        <>
            <Hero>
                <img src={heroBackground} alt="Promoção Mayya Club - Dia dos Namorados" />
            </Hero>

            <Section id="catalogo">
                <SectionTitle text="Destaques" />
                <ProductCarousel />
            </Section>
        </>
    )
}
