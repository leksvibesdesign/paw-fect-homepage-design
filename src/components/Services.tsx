
import { Card } from '@/components/ui/card';
import { 
  Heart, 
  Syringe, 
  Hospital, 
  Dog,
  Cat 
} from 'lucide-react';

const Services = () => {
  const mainServices = [
    {
      icon: Heart,
      title: 'Preventative Healthcare',
      description: 'Vaccinations, flea & worm treatments to keep your pet healthy'
    },
    {
      icon: Syringe,
      title: 'Pet Wellness Checks',
      description: 'Comprehensive health screenings and regular check-ups'
    },
    {
      icon: Hospital,
      title: 'Veterinary Surgery',
      description: 'Routine and advanced surgical procedures with expert care'
    },
    {
      icon: Dog,
      title: 'Emergency Services',
      description: 'Urgent care available when your pet needs it most'
    }
  ];

  const allServices = [
    'Vaccinations', 'Check ups and Wellness Exams', 'Spay and Neuter', 'Dental Care',
    'Parasite Prevention', 'Microchipping', 'Emergency Care', 'Surgery',
    'Diagnostic Testing', 'Nutrition', 'End of Life Care', 'Hospitalisation',
    'Pet Pharmacy', 'Pet Insurance', 'Nurse Consults', 'Laser Therapy',
    'Cardiology', 'Dermatology', 'Ophthalmology', 'Orthopaedics',
    'Preventative Wellness Plans', 'Weight Management', 'Senior Pet Care', 'Pet Travel',
    'Anaesthesia and Analgesia', 'Internal Medicine', 'Radiology'
  ];

  return (
    <section id="services" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-vet-primary mb-4">
            Comprehensive Veterinary Services in London
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            At Poplar Vets and Wood Wharf Vets, we provide expert veterinary care for dogs, cats, 
            and small animals. Our experienced veterinary team ensures that every pet receives 
            personalized treatment in a calm and friendly environment.
          </p>
        </div>

        {/* Main Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {mainServices.map((service, index) => (
            <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow duration-300 border-0 bg-vet-light">
              <div className="w-16 h-16 bg-gradient-to-br from-vet-primary to-vet-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <service.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-vet-primary mb-2">{service.title}</h3>
              <p className="text-gray-600 text-sm">{service.description}</p>
            </Card>
          ))}
        </div>

        {/* Services List */}
        <Card className="p-8 bg-gradient-to-r from-vet-light to-white border-l-4 border-l-vet-primary">
          <h3 className="text-2xl font-bold text-vet-primary mb-6">Our Veterinary Services Include:</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              '✔ Preventative healthcare (vaccinations, flea & worm treatments)',
              '✔ Pet wellness checks and health screenings',
              '✔ Routine and advanced veterinary surgery',
              '✔ Dental care to keep your pet\'s teeth healthy',
              '✔ Nutritional advice and weight management',
              '✔ Emergency vet services for urgent care needs',
              '✔ Pet travel certificates & microchipping for safe and legal travel'
            ].map((service, index) => (
              <div key={index} className="flex items-start gap-2">
                <span className="text-green-600 font-medium">{service}</span>
              </div>
            ))}
          </div>
          <p className="mt-6 text-gray-700 text-lg">
            We are committed to your pet's health, happiness, and longevity. Whether you need a trusted 
            local vet for routine check-ups or advanced medical care, our team is here to support you 
            and your pet every step of the way.
          </p>
        </Card>

        {/* Complete Services List */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold text-vet-primary mb-6 text-center">Complete Range of Services</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {allServices.map((service, index) => (
              <div key={index} className="bg-vet-light p-3 rounded-lg text-center hover:bg-vet-purple-50 transition-colors duration-200">
                <span className="text-gray-700 text-sm font-medium">{service}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
