import { Container, Logo, Nav, NavLink} from './styles'
import { CartButton } from '../Cart/CartButton'

export function Header() {

  return (
    <Container>
      <Logo to="/">Mayya Club</Logo>
      <Nav>
        <NavLink to="/catalogo">Catálogo</NavLink>
        <NavLink to="/contato">Contato</NavLink>
        <NavLink to="/sobre">Sobre</NavLink>
        <CartButton />
      </Nav>
    </Container>
  )
}
