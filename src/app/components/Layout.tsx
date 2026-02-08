import { Outlet } from 'react-router-dom';
import { Header } from '@/app/components/Header';
import { Footer } from '@/app/components/Footer';
import { ContactButton } from '@/app/components/ContactButton';
import { BestPriceButton } from '@/app/components/BestPriceButton';

export function Layout() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
      <ContactButton />
      <BestPriceButton />
    </div>
  );
}