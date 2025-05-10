
import { Button } from './styles'
import { FaWhatsapp } from 'react-icons/fa'

export function ContactButton() {
    const phone = '5521988035501'
    const message = encodeURIComponent('Olá, gostaria de saber mais sobre os óculos da Mayya Club!')

    return (
        <Button
            href={`https://wa.me/${phone}?text=${message}`}
            target="_blank"
            rel="noopener noreferrer"
        >
            <FaWhatsapp size={24} />
        </Button>
    )
}
