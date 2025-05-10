
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

import { Container, ImageBox, Title, Price, Wrapper, Button } from './styles'

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

export function ProductCarousel() {
    return (
        <Wrapper>
            <Swiper
                modules={[Autoplay, Pagination]}
                autoplay={{ delay: 4000, disableOnInteraction: false }}
                pagination={{ clickable: true }}
                spaceBetween={16}
                slidesPerView={1}
                loop={true}
                breakpoints={{
                    768: {
                        slidesPerView: 1
                    },
                    1024: {
                        slidesPerView: 2
                    },
                    1200: {
                        slidesPerView: 3
                    }
                }}
            >
                {products.map((product, index) => (
                    <SwiperSlide key={index}>
                        <Container>
                            <ImageBox src={product.image} alt={product.name} />
                            <Title>{product.name}</Title>
                            <Price>R$ {product.price.toFixed(2)}</Price>
                            <Button href={`/produto/${product.slug}`}>Ver mais</Button>
                        </Container>
                    </SwiperSlide>
                ))}
            </Swiper>
        </Wrapper>
    )
}
