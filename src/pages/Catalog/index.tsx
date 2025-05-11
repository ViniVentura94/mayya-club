
import { SectionTitle } from '../../components/SectionTitle'
import { ProductCard } from '../../components/ProductCard'
import { Container, Section } from './styles'
import produtos from '../../data/products'

export function Catalog() {
    return (
        <Section>
            <SectionTitle text="Catálogo completo" />
            <Container>
                {produtos.map((product, i) => (
                    <ProductCard
                        key={i}
                        name={product.name}
                        image={product.images[0]}
                        price={product.price}
                        slug={product.slug}
                    />
                ))}
            </Container>
        </Section>
    )
}
