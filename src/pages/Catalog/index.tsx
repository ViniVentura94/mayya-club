
import { SectionTitle } from '../../components/SectionTitle'
import { ProductCard } from '../../components/ProductCard'
import { Container, Section } from './styles'

import gatinho from '../../assets/products/gatinho/OculosGatinho.webp'
import quadrado from '../../assets/products/quadrado/OculosQuadrado.webp'
import hexagonal from '../../assets/products/hexagonal/OculosHexagonal.webp'
import classico from '../../assets/products/classico/OculosClassico.webp'
import blogueira from '../../assets/products/blogueira/OculosBlogueira.webp'

const products = [
    {
        name: 'Óculos Gatinho',
        image: gatinho,
        price: 229.9,
        slug: 'oculos-gatinho'
    },
    {
        name: 'Óculos Quadrado',
        image: quadrado,
        price: 199.9,
        slug: 'oculos-quadrado'
    },
    {
        name: 'Óculos Hexagonal',
        image: hexagonal,
        price: 249.9,
        slug: 'oculos-hexagonal'
    },
    {
        name: 'Óculos Classico',
        image: classico,
        price: 299.9,
        slug: 'oculos-classico'
    },
    {
        name: 'Óculos Blogueira',
        image: blogueira,
        price: 279.9,
        slug: 'oculos-blogueira'
    }
]

export function Catalog() {
    return (
        <Section>
            <SectionTitle text="Catálogo completo" />
            <Container>
                {products.map((product, i) => (
                    <ProductCard
                        key={i}
                        name={product.name}
                        image={product.image}
                        price={product.price}
                        slug={product.slug}
                    />
                ))}
            </Container>
        </Section>
    )
}
