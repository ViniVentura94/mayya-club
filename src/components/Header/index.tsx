
import { useState } from 'react'
import { Container, Logo, Nav, NavLink } from './styles'

import { CartModal } from '../Cart/CartModal'

export function Header() {

  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <>
      <Container>
        <Logo to="/">Mayya Club</Logo>
        <Nav>
          <NavLink to="/catalogo">Catálogo</NavLink>
          <NavLink to="/contato">Contato</NavLink>
          <NavLink to="/sobre">Sobre</NavLink>
          
        </Nav>
      </Container>

      <CartModal isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
}

/*
import { CartButton } from '../Cart/CartButton'

<div onClick={() => setIsCartOpen(true)}>
            <CartButton />
          </div>
*/