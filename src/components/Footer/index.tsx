
import { Container, Info, Links } from './styles'

export function Footer() {
  return (
    <Container>
      <Info>© {new Date().getFullYear()} Mayya Club — Estilo em cada detalhe.</Info>
      <Links>
        <a href="https://www.instagram.com/mayyaclub/" target="_blank">Instagram</a>
        <a href="https://wa.me/5521988035501" target="_blank">WhatsApp</a>
        <a href="#" target="_blank">Política de Privacidade</a>
      </Links>
    </Container>
  )
}
