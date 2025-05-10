import { Container, Logo, Nav, NavLink} from './styles'

export function Header() {

  return (
    <Container>
      <Logo to="/">Mayya Club</Logo>
      <Nav>
        <NavLink to="/catalogo">Catálogo</NavLink>
        <NavLink to="/contato">Contato</NavLink>
        <NavLink to="/sobre">Sobre</NavLink>
      </Nav>
    </Container>
  )
}
