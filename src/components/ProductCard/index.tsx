
import { Card, Image, Info, Title, Price, Button } from './styles'
import { Link } from 'react-router-dom'

type ProductCardProps = {
    image: string
    name: string
    price: number
    slug?: string
}

export function ProductCard({ image, name, price, slug }: ProductCardProps) {
    return (
        <Card>
            <Image src={image} alt={name} />
            <Info>
                <Title>{name}</Title>
                <Price>R$ {price.toFixed(2)}</Price>
                {slug && (
                    <Link to={`/produto/${slug}`}>
                        <Button>Ver mais</Button>
                    </Link>
                )}
            </Info>
        </Card>
    )
}
