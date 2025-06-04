
import { BrowserRouter } from 'react-router-dom';
import { GlobalStyle } from './styles/GlobalStyle'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { AppRoutes } from './routes'
import { ContactButton } from './components/ContactButton'
import { CartProvider } from './context/CartContext'

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <GlobalStyle />
        <Header />
        <AppRoutes />
        <Footer />
        <ContactButton />
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
