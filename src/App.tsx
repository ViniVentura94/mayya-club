
import { BrowserRouter } from 'react-router-dom';
import { GlobalStyle } from './styles/GlobalStyle'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { AppRoutes } from './routes'
import { ContactButton } from './components/ContactButton'

function App() {
  return (
      <BrowserRouter>
        <GlobalStyle />
        <Header />
        <AppRoutes />
        <Footer />
        <ContactButton />
      </BrowserRouter>
  );
}

export default App;
