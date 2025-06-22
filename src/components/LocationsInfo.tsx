
import { Card } from '@/components/ui/card';
import { MapPin, Phone, Clock, Heart } from 'lucide-react';

const LocationsInfo = () => {
  const locations = [
    {
      name: 'CTvets Chelsea Clinic',
      phone: '020 7376 7987',
      address: 'Kings Road, Chelsea, London, SW3 4LY',
      hours: {
        weekdays: 'Mon – Fri 8am – 7pm',
        saturday: 'Sat – 9am – 5pm',
        sunday: 'Sun – 10am – 4pm'
      }
    },
    {
      name: 'London Home Visits',
      phone: '07469 877 179',
      address: 'Covering all London zones',
      hours: {
        weekdays: 'Mon – Fri 8am – 8pm',
        saturday: 'Sat – 9am – 6pm',
        sunday: 'Sun – Emergency only'
      }
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          {/* Pet Images */}
          <div className="flex justify-center gap-4 mb-6">
            <img
              src="https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?q=80&w=200&auto=format&fit=crop"
              alt="Happy kitten"
              className="w-20 h-20 rounded-full object-cover shadow-lg"
            />
            <img
              src="https://images.unsplash.com/photo-1582562124811-c09040d0a901?q=80&w=200&auto=format&fit=crop"
              alt="Orange cat"
              className="w-20 h-20 rounded-full object-cover shadow-lg"
            />
          </div>
          <h2 className="text-3xl font-bold ctvets-primary-text mb-4">Our Locations</h2>
          <p className="text-lg text-gray-600">Expert care at our Chelsea clinic and in your home</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {locations.map((location, index) => (
            <Card key={index} className="p-8 bg-white border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-12 h-12 ${index === 0 ? 'ctvets-primary' : 'ctvets-pink'} rounded-full flex items-center justify-center`}>
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold ctvets-primary-text">{location.name}</h3>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 ctvets-pink-text mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-gray-900">Tel: {location.phone}</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 ctvets-primary-text mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-gray-900">Address:</p>
                    <p className="text-gray-700">{location.address}</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 ctvets-pink-text mt-1 flex-shrink-0" />
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
