
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

import { Container, ImageBox, Title, Price, Wrapper, Button } from './styles'
import produtos from '../../data/products'

const destaque = produtos.filter((product) => product.highlight)



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
                {destaque.map((product, index) => (
                    <SwiperSlide key={index}>
                        <Container>
                            <ImageBox src={product.images[0]} alt={product.name} />
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
