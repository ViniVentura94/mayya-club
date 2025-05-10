import { Container, Logo, Nav, NavLink, NavButton} from './styles'
import { useLocation, useNavigate } from 'react-router-dom'
import { scrollToSection } from '../../utils/scrollToSection'

export function Header() {
  const location = useLocation()
  const navigate = useNavigate()

  function handleScrollOrRedirect(target: string) {
    if (location.pathname === '/') {
      scrollToSection(target)
    } else {
      navigate('/')
      setTimeout(() => {
        scrollToSection(target)
      }, 100)
    }
  }

  return (
    <Container>
      <Logo to="/">Mayya Club</Logo>
      <Nav>
        <NavLink to="/catalogo">Catálogo</NavLink>
        <NavButton onClick={() => handleScrollOrRedirect('sobre')}>Sobre</NavButton>
        <NavLink to="/contato">Contato</NavLink>
      </Nav>
    </Container>
  )
}
