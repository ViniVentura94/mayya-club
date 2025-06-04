
import { Hero, Section } from './styles'
import { SectionTitle } from '../../components/SectionTitle'
import { ProductCarousel } from '../../components/ProductCarousel'
import heroBackground from '../../assets/banners/BannerMayyaClub3L.jpg'


export function Home() {

    return (
        <>
            <Hero>
                <img src={heroBackground} alt="Mayya Club - Três modelos" />
            </Hero>

            <Section id="catalogo">
                <SectionTitle text="Destaques" />
                <ProductCarousel />
            </Section>
        </>
    )
}
