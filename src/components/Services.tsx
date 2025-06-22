
import { Card } from '@/components/ui/card';
import { 
  Heart, 
  Syringe, 
  Hospital, 
  Shield,
  Stethoscope,
  Calendar,
  Home,
  Phone
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const Services = () => {
  const mainServices = [
    {
      icon: Heart,
      title: 'Preventative Healthcare',
      description: 'Vaccinations, flea & worm treatments to keep your pet healthy and protected',
      features: ['Annual Vaccinations', 'Parasite Prevention', 'Health Screenings']
    },
    {
      icon: Stethoscope,
      title: 'Pet Wellness Checks',
      description: 'Comprehensive health examinations and regular check-ups for optimal pet health',
      features: ['Complete Physical Exams', 'Early Disease Detection', 'Senior Pet Care']
    },
    {
      icon: Hospital,
      title: 'Veterinary Surgery',
      description: 'Routine and advanced surgical procedures performed with expert care and precision',
      features: ['Spay & Neutering', 'Dental Surgery', 'Emergency Operations']
    },
    {
      icon: Shield,
      title: 'Emergency Services',
      description: 'Urgent veterinary care available when your beloved pet needs it most',
      features: ['24/7 Emergency Line', 'Critical Care', 'Pain Management']
    }
  ];

  const quickServices = [
    'Vaccinations', 'Health Check-ups', 'Dental Care', 'Microchipping',
    'Pet Travel Certificates', 'Nutrition Advice', 'Weight Management', 'Grooming Advice',
    'Behavioral Consultation', 'Senior Pet Care', 'Puppy & Kitten Care', 'End of Life Care'
  ];

  return (
    <section id="services" className="py-20 ctvets-soft-gradient">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Heart className="w-8 h-8 ctvets-pink-text" />
            <h2 className="text-4xl md:text-5xl font-bold ctvets-primary-text">
              Expert Veterinary Care
            </h2>
            <Heart className="w-8 h-8 ctvets-pink-text" />
          </div>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Comprehensive veterinary services for dogs, cats, and small animals. 
            Our experienced team provides personalized care in a warm, welcoming environment - 
            whether at our Chelsea clinic or in the comfort of your home.
          </p>
        </div>

        {/* Main Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {mainServices.map((service, index) => (
            <Card key={index} className="group relative overflow-hidden bg-white hover:shadow-2xl transition-all duration-300 border-0 hover:-translate-y-2">
              {/* Gradient Border */}
              <div className="absolute inset-0 ctvets-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
              <div className="relative bg-white m-[2px] rounded-lg p-8 h-full">
                {/* Icon */}
                <div className="w-16 h-16 ctvets-gradient rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-bold ctvets-primary-text mb-4 text-center">{service.title}</h3>
                <p className="text-gray-600 text-center mb-6 leading-relaxed">{service.description}</p>
                
                {/* Features */}
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                      <div className="w-2 h-2 ctvets-pink rounded-full flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          ))}
        </div>

        {/* Call to Action Section */}
        <div className="bg-white rounded-2xl p-8 md:p-12 mb-16 shadow-lg border-l-8 border-l-ctvets-primary">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold ctvets-primary-text mb-4">
                Ready to Care for Your Pet?
              </h3>
              <p className="text-lg text-gray-700 mb-6">
                Book an appointment today and give your furry friend the expert care they deserve. 
                Available both at our Chelsea clinic and through home visits across London.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="ctvets-primary hover:opacity-90 text-white px-6 py-3 rounded-full">
                  <Calendar className="w-5 h-5 mr-2" />
                  Book Appointment
                </Button>
                <Button className="ctvets-pink hover:opacity-90 text-white px-6 py-3 rounded-full">
                  <Phone className="w-5 h-5 mr-2" />
                  Call 07469 877 179
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1576201836106-db1758fd1c97?q=80&w=600&auto=format&fit=crop"
                alt="Happy dog at vet clinic"
                className="rounded-2xl shadow-lg w-full h-64 object-cover"
              />
              <div className="absolute -bottom-4 -right-4 w-20 h-20 ctvets-gradient rounded-full flex items-center justify-center">
                <Heart className="w-8 h-8 text-white" />
              </div>
            </div>
          </div>
        </div>

        {/* Quick Services */}
        <div className="text-center">
          <h3 className="text-2xl font-bold ctvets-primary-text mb-8">Complete Range of Services</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {quickServices.map((service, index) => (
              <div 
                key={index} 
                className="bg-white/80 backdrop-blur-sm p-4 rounded-xl text-center hover:bg-white hover:shadow-md transition-all duration-300 border border-gray-100"
              >
                <span className="text-gray-700 font-medium">{service}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-16 text-center">
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-gray-700 leading-relaxed">
              We are committed to your pet's health, happiness, and longevity. Whether you need a trusted 
              local vet for routine check-ups or advanced medical care, our experienced team is here to 
              support you and your beloved companion every step of the way.
            </p>
            <div className="flex items-center justify-center gap-4 mt-8">
              <div className="flex items-center gap-2">
                <Home className="w-5 h-5 ctvets-primary-text" />
                <span className="text-gray-700">Home Visits Available</span>
              </div>
              <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
              <div className="flex items-center gap-2">
                <Heart className="w-5 h-5 ctvets-pink-text" />
                <span className="text-gray-700">Family-Run Practice</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
