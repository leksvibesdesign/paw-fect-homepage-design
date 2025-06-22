
import { Button } from '@/components/ui/button';
import { Heart, Phone, PawPrint, Home } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden ctvets-soft-gradient">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1582562124811-c09040d0a901?q=80&w=1000&auto=format&fit=crop"
          alt="Happy cat with vet"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-white/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-5xl mx-auto">
          {/* Logo/Brand Area */}
          <div className="flex items-center justify-center mb-8">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 ctvets-pink rounded-full flex items-center justify-center">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <div className="text-left">
                <h2 className="text-2xl font-bold ctvets-primary-text">CTvets</h2>
                <p className="text-sm text-gray-600">Chelsea Veterinary Clinic & London Home Visits</p>
              </div>
            </div>
          </div>
          
          {/* Main Headline */}
          <div className="flex items-center justify-center gap-2 mb-6">
            <PawPrint className="w-8 h-8 ctvets-pink-text" />
            <h1 className="text-4xl md:text-6xl font-bold leading-tight ctvets-primary-text">
              Trusted Care, Right Where Your Pet Feels Best
            </h1>
            <Heart className="w-8 h-8 ctvets-pink-text" />
          </div>
          
          <h2 className="text-2xl md:text-3xl font-semibold mb-8 ctvets-primary-text">
            At Home or In Our Chelsea Clinic
          </h2>
          
          {/* Subheadline */}
          <p className="text-lg md:text-xl mb-10 max-w-4xl mx-auto leading-relaxed text-gray-700">
            Since 2015, over 8,000 Londoners have trusted CTvets for gentle, expert veterinary care 
            at home and in our state-of-the-art Chelsea clinic. We're a family-run team dedicated to 
            compassion, comfort, and quality care.
          </p>

          {/* Call-to-Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button 
              size="lg" 
              className="ctvets-primary hover:opacity-90 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Home className="w-5 h-5 mr-2" />
              Book a Home Visit
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-ctvets-primary ctvets-primary-text hover:ctvets-primary hover:text-white px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300"
            >
              <PawPrint className="w-5 h-5 mr-2" />
              Register Your Pet
            </Button>
            
            <Button 
              size="lg"
              className="ctvets-pink hover:opacity-90 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call Us – 07469 877 179
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center text-center">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 ctvets-pink rounded-full flex items-center justify-center">
                <Heart className="w-5 h-5 text-white" />
              </div>
              <div className="text-left">
                <p className="font-semibold ctvets-primary-text">8,000+</p>
                <p className="text-sm text-gray-600">Happy Families</p>
              </div>
            </div>
            
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 ctvets-primary rounded-full flex items-center justify-center">
                <Home className="w-5 h-5 text-white" />
              </div>
              <div className="text-left">
                <p className="font-semibold ctvets-primary-text">Family-Run</p>
                <p className="text-sm text-gray-600">Since 2015</p>
              </div>
            </div>
            
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 ctvets-pink rounded-full flex items-center justify-center">
                <PawPrint className="w-5 h-5 text-white" />
              </div>
              <div className="text-left">
                <p className="font-semibold ctvets-primary-text">Expert Care</p>
                <p className="text-sm text-gray-600">Home & Clinic</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
