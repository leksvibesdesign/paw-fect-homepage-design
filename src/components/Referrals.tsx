
import { Card } from '@/components/ui/card';
import { CheckCircle, Users, Heart, Stethoscope } from 'lucide-react';

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
    <section className="py-16 bg-vet-light">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Stethoscope className="w-8 h-8 text-vet-primary" />
              <h2 className="text-3xl font-bold text-vet-primary">London Pet Referral Services</h2>
            </div>
            <p className="text-lg text-gray-600">
              Comprehensive referral services to ensure your pet receives the highest standard of care
            </p>
          </div>

          <Card className="p-8 mb-8 bg-white border-0 shadow-lg">
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              At our Poplar Vets clinic, we offer comprehensive referral services to ensure your pet 
              receives the highest standard of care. Our clinics are supported by a network of advanced 
              practitioners, specialists, and certificate holders who visit us regularly, providing access 
              to cutting-edge treatments and expertise.
            </p>
          </Card>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="p-6 text-center bg-white border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-vet-primary to-vet-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-vet-primary mb-2">{benefit.title}</h3>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </Card>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-6 bg-white border-l-4 border-l-vet-primary">
              <h3 className="text-xl font-bold text-vet-primary mb-4">When Might Your Pet Need a Referral?</h3>
              <p className="text-gray-700 leading-relaxed">
                If your pet requires advanced diagnostics, complex surgeries, or specialized treatments 
                beyond general veterinary care, our team will guide you through the referral process. 
                Whether it's a heart condition, joint issue, or soft tissue injury, we're here to connect 
                you with the right experts.
              </p>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-vet-primary to-vet-purple-600 text-white">
              <h3 className="text-xl font-bold mb-4">Committed to Your Pet's Wellbeing</h3>
              <p className="leading-relaxed">
                At vet.co.uk, we believe every pet deserves access to the best possible care. 
                Our referral services are just one way we go above and beyond to support your pet's 
                health and happiness.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Referrals;
