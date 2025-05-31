import { useState } from 'react';
import { Container, MainImage, Thumbnails } from './styles'

type ProductGalleryProps = {
    images: string[];
};

export function ProductGallery({ images }: ProductGalleryProps) {
    const [selected, setSelected] = useState(images[0]);

    return (
        <Container>
            <MainImage src={selected} alt="Imagem principal do produto" />
            <Thumbnails>
                {images.map((img, index) => (
                    <img
                        key={index}
                        src={img}
                        alt={`Miniatura ${index + 1}`}
                        onClick={() => setSelected(img)}
                        className={selected === img ? 'active' : ''}
                    />
                ))}
            </Thumbnails>
        </Container>
    )
}