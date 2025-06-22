
import { Card } from '@/components/ui/card';
import { MapPin, Phone, Clock } from 'lucide-react';

const LocationsInfo = () => {
  const locations = [
    {
      name: 'Poplar Vets',
      phone: '020 7515 2505',
      address: '20 Morris Road, Poplar, London, E14 6FF',
      hours: {
        weekdays: 'Mon – Fri 8am – 8pm',
        saturday: 'Sat – 9am – 6pm',
        sunday: 'Sun – Closed'
      }
    },
    {
      name: 'Wood Wharf Vets',
      phone: '020 3026 2003',
      address: '55 Harbord Square, Wood Wharf, London, E14 9QH',
      hours: {
        weekdays: 'Mon – Fri 9am – 6pm',
        saturday: 'Sat – Closed',
        sunday: 'Sun – Closed'
      }
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-vet-primary mb-4">Our Locations</h2>
          <p className="text-lg text-gray-600">Two convenient locations to serve you better</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {locations.map((location, index) => (
            <Card key={index} className="p-8 bg-white border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-bold text-vet-primary mb-6">{location.name}</h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-vet-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-gray-900">Tel: {location.phone}</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-vet-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-gray-900">Address:</p>
                    <p className="text-gray-700">{location.address}</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-vet-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-gray-900">Hours:</p>
                    <div className="text-gray-700 space-y-1">
                      <p>{location.hours.weekdays}</p>
                      <p>{location.hours.saturday}</p>
                      <p>{location.hours.sunday}</p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LocationsInfo;
