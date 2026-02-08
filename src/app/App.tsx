import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { ServicesPage } from './pages/ServicesPage';
import { CatalogMainPage } from './pages/CatalogMainPage';
import { TemperedGlassPage } from './pages/TemperedGlassPage';
import { TriplexPage } from './pages/TriplexPage';
import { GlassDoorsPage } from './pages/GlassDoorsPage';
import { Doors6mmPage } from './pages/Doors6mmPage';
import { Doors8mmPage } from './pages/Doors8mmPage';
import { DoorsHamonPage } from './pages/DoorsHamonPage';
import { AccessoriesPage } from './pages/AccessoriesPage';
import { AboutPage } from './pages/AboutPage';
import { ContactsPage } from './pages/ContactsPage';
import { PortfolioPage } from './pages/PortfolioPage';
import { PartnersPage } from './pages/PartnersPage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="services" element={<ServicesPage />} />
          <Route path="catalog" element={<CatalogMainPage />} />
          <Route path="catalog/tempered-glass" element={<TemperedGlassPage />} />
          <Route path="catalog/triplex" element={<TriplexPage />} />
          <Route path="catalog/glass-doors" element={<GlassDoorsPage />} />
          <Route path="catalog/glass-doors/6mm" element={<Doors6mmPage />} />
          <Route path="catalog/glass-doors/8mm" element={<Doors8mmPage />} />
          <Route path="catalog/glass-doors/hamon" element={<DoorsHamonPage />} />
          <Route path="catalog/accessories" element={<AccessoriesPage />} />
          <Route path="portfolio" element={<PortfolioPage />} />
          <Route path="partners" element={<PartnersPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="contacts" element={<ContactsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}