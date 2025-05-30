import { Routes, Route } from 'react-router-dom'
import { Home } from '../pages/Home'
import { Catalog } from '../pages/Catalog'
import { Product } from '../pages/Product'
import { Contact } from '../pages/Contact'
import { About } from '../pages/About'
import { CheckoutPage } from '../pages/Checkout'

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/catalogo" element={<Catalog />} />
      <Route path="/produto/:slug" element={<Product />} />
      <Route path="/contato" element={<Contact />} />
      <Route path="/sobre" element={<About />} />
      <Route path="/checkout" element={<CheckoutPage />} />
    </Routes>
  )
}
