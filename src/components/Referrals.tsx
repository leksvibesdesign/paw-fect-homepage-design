
import { Card } from '@/components/ui/card';
import { CheckCircle, Users, Heart, Stethoscope, PawPrint } from 'lucide-react';

const Referrals = () => {
  const benefits = [
    {
      icon: CheckCircle,
      title: 'Cost-Effective & Convenient',
      description: 'Our in-house referrals save you time and money while ensuring specialized care'
    },
    {
      icon: Users,
      title: 'Wide Range of Specialties',
      description: 'Orthopaedic care, cardiology, advanced surgery, and soft tissue surgery'
    },
    {
      icon: Heart,
      title: 'Seamless Coordination',
      description: 'Smooth, stress-free experience from diagnosis to treatment'
    }
  ];

  return (
    <section className="py-16 ctvets-soft-gradient">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            {/* Pet Image */}
            <img
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=600&auto=format&fit=crop"
              alt="Veterinarian with pet"
              className="w-32 h-32 rounded-full object-cover mx-auto mb-6 shadow-lg"
            />
            <div className="flex items-center justify-center gap-3 mb-4">
              <PawPrint className="w-8 h-8 ctvets-pink-text" />
              <h2 className="text-3xl font-bold ctvets-primary-text">London Pet Referral Services</h2>
              <Stethoscope className="w-8 h-8 ctvets-primary-text" />
            </div>
            <p className="text-lg text-gray-600">
              Comprehensive referral services to ensure your pet receives the highest standard of care
            </p>
          </div>

          <Card className="p-8 mb-8 bg-white border-0 shadow-lg">
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              At CTvets, we offer comprehensive referral services to ensure your pet 
              receives the highest standard of care. Our clinic is supported by a network of advanced 
              practitioners, specialists, and certificate holders who visit us regularly, providing access 
              to cutting-edge treatments and expertise.
            </p>
          </Card>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="p-6 text-center bg-white border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className={`w-12 h-12 ${index === 1 ? 'ctvets-pink' : 'ctvets-primary'} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <benefit.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold ctvets-primary-text mb-2">{benefit.title}</h3>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </Card>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-6 bg-white border-l-4 border-l-ctvets-primary">
              <h3 className="text-xl font-bold ctvets-primary-text mb-4">When Might Your Pet Need a Referral?</h3>
              <p className="text-gray-700 leading-relaxed">
                If your pet requires advanced diagnostics, complex surgeries, or specialized treatments 
                beyond general veterinary care, our team will guide you through the referral process. 
                Whether it's a heart condition, joint issue, or soft tissue injury, we're here to connect 
                you with the right experts.
              </p>
            </Card>

            <Card className="p-6 ctvets-gradient text-white">
              <h3 className="text-xl font-bold mb-4">Committed to Your Pet's Wellbeing</h3>
              <p className="leading-relaxed">
                At CTvets, we believe every pet deserves access to the best possible care. 
                Our referral services are just one way we go above and beyond to support your pet's 
                health and happiness with our family-run approach to veterinary medicine.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Referrals;
