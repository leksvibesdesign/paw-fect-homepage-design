
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import QuickActions from '@/components/QuickActions';
import C4Scheme from '@/components/C4Scheme';
import LocationsInfo from '@/components/LocationsInfo';
import Services from '@/components/Services';
import Referrals from '@/components/Referrals';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <QuickActions />
      <C4Scheme />
      <LocationsInfo />
      <Services />
      <Referrals />
      <Footer />
    </div>
  );
};

export default Index;
