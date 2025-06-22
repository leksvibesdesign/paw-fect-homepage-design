
import { Button } from '@/components/ui/button';
import { Heart, Phone } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source
            src="https://videocdn.cdnpk.net/videos/1c6603fb-a986-456b-82cb-68e0736ecc61/horizontal/previews/clear/large.mp4?token=exp=1750549090~hmac=158f65007c0b9b0e5d74b68f2567552749862691bbda330b5d7c816b48bc7abd"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center mb-6">
            <Heart className="w-8 h-8 text-pink-400 mr-3" />
            <span className="text-lg font-medium">Your veterinary practice</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Expert Veterinary Care at 
            <span className="block text-pink-200">Poplar Vets & Wood Wharf Vets</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed text-gray-100">
            Welcome to your trusted small animal veterinary clinics in London. Our dedicated team provides 
            high-quality, compassionate veterinary care in a relaxed and friendly environment.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-vet-primary hover:bg-vet-purple-600 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Book an Appointment
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 px-8 py-4 text-lg font-semibold rounded-full"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
