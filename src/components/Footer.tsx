
import { MapPin, Phone, Heart } from 'lucide-react';

const Footer = () => {
  const footerLinks = {
    'Pet Services': [
      'Vet Services',
      'Healthy Pet Plan',
      'Pet Insurance',
      'Carefree Credit'
    ],
    'Support': [
      'Meet the team',
      'Contact us',
      'Pricelist'
    ],
    'Information': [
      'Privacy Policy',
      'Terms of business',
      'Sitemap'
    ]
  };

  return (
    <footer className="bg-vet-primary text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                <span className="text-vet-primary font-bold">VET</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">vet.co.uk</h3>
                <p className="text-vet-purple-100 text-sm">@vetcouk</p>
              </div>
            </div>
            <div className="flex items-start gap-2 mb-4">
              <Heart className="w-5 h-5 text-pink-300 mt-1 flex-shrink-0" />
              <p className="text-vet-purple-100 text-sm leading-relaxed">
                Independent Veterinary Clinic in London 🐶🐱🩺 Services: Health Check-ups, 
                Vaccinations, Dentistry, Travel Certificates, Surgeries, X-Rays & Ultrasounds.
              </p>
            </div>
          </div>

          {/* Locations */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Locations</h4>
            <div className="space-y-4">
              <div>
                <h5 className="font-medium text-white mb-2">Poplar Vets</h5>
                <div className="space-y-1 text-vet-purple-100 text-sm">
                  <div className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                    <span>20 Morris Road, London, E14 3PP</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 flex-shrink-0" />
                    <span>020 7515 2505</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h5 className="font-medium text-white mb-2">Wood Wharf Vets</h5>
                <div className="space-y-1 text-vet-purple-100 text-sm">
                  <div className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                    <span>55 Harbord Square, London, E14 9QH</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 flex-shrink-0" />
                    <span>020 3026 2003</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-lg font-semibold mb-4">{category}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-vet-purple-100 hover:text-white transition-colors duration-200 text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-vet-purple-400 mt-8 pt-8 text-center">
          <p className="text-vet-purple-100 text-sm">
            Copyright © 2011–2025 vet.co.uk
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
