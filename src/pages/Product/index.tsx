
import { useParams } from 'react-router-dom'
import { Container, Info, Title, Price, Description } from './styles'
import { ProductGallery } from '../../components/ProductGallery'
import produtos from '../../data/products'
import { ActionButton } from '../../components/ActionButton'

export function Product() {
    const { slug } = useParams()
    const product = produtos.find((item) => item.slug === slug)

    if (!product) {
        return <p>Produto não encontrado.</p>
    }

    return (
        <Container>
            <ProductGallery images={product.images} />
            <Info>
                <Title>{product.name}</Title>
                <Price>R$ {product.price.toFixed(2)}</Price>
                <Description>{product.description}</Description>
                <ActionButton
                    href={`https://wa.me/5521988035501?text=Olá,%20vi%20o%20*${encodeURIComponent(product.name)}*%20no%20site%20da%20Mayya%20Club...`}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Quero este modelo
                </ActionButton>

            </Info>
        </Container>
    )
}
