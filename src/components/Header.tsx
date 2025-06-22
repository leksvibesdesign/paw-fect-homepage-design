
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, Phone } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navigationLinks = [
    { name: 'Book an Appointment', href: '#appointment' },
    { name: 'Healthy Pet Plan', href: '#healthy-plan' },
    { name: 'Shop', href: '#shop' },
    { name: 'About', href: '#about' },
    { name: 'Offers', href: '#offers' },
    { name: 'Owner Resources', href: '#resources' },
    { name: 'Services', href: '#services' },
    { name: 'Contacts', href: '#contacts' },
  ];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      {/* Contact Bar */}
      <div className="bg-vet-primary text-white py-2">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row justify-center items-center gap-2 text-sm">
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <span>Poplar Vets: 020 7515 2505</span>
            </div>
            <span className="hidden sm:inline">|</span>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <span>Wood Wharf Vets: 020 3026 2003</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-vet-primary to-vet-purple-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">VET</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-vet-primary">Poplar Vets</h1>
              <p className="text-sm text-gray-600">Expert Veterinary Care</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            {navigationLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-700 hover:text-vet-primary transition-colors duration-200 text-sm font-medium"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Mobile Navigation */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="outline" size="icon">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col space-y-4 mt-8">
                {navigationLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-gray-700 hover:text-vet-primary transition-colors duration-200 py-2 border-b border-gray-100"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </a>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
