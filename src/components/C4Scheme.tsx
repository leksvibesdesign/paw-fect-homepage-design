
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Heart, Scissors, PawPrint } from 'lucide-react';

const C4Scheme = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Pet Image Header */}
        <div className="text-center mb-8">
          <img
            src="https://images.unsplash.com/photo-1582562124811-c09040d0a901?q=80&w=600&auto=format&fit=crop"
            alt="Beautiful orange cat"
            className="w-40 h-40 rounded-full object-cover mx-auto mb-4 shadow-lg"
          />
        </div>
        
        <Card className="max-w-4xl mx-auto p-8 border-l-4 border-l-ctvets-pink ctvets-soft-gradient">
          <div className="flex items-start gap-4 mb-6">
            <div className="w-12 h-12 ctvets-pink rounded-full flex items-center justify-center flex-shrink-0">
              <Heart className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-bold ctvets-primary-text mb-2">
                Affordable Cat Neutering & Microchipping – C4 Scheme
              </h2>
              <p className="text-lg text-gray-700">
                at CTvets Chelsea Clinic
              </p>
            </div>
          </div>
          
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              CTvets Chelsea Veterinary Clinic is proud to support the <strong>C4 Cat Neutering Scheme</strong>, 
              offering low-cost neutering and microchipping for eligible cat owners in Greater London.
            </p>
            
            <div className="bg-white p-6 rounded-lg border-2 border-ctvets-pink/20">
              <div className="flex items-center gap-3 mb-3">
                <PawPrint className="w-6 h-6 ctvets-pink-text" />
                <Scissors className="w-6 h-6 ctvets-primary-text" />
                <h3 className="text-xl font-semibold ctvets-primary-text">Special Offer: Just £10!</h3>
              </div>
              <p className="text-gray-700">
                If you receive means-tested benefits or have a household income below £25,000, you may qualify 
                to have your cat neutered and microchipped for just £10.
              </p>
            </div>
            
            <p>
              We have received a limited number of vouchers, so don't miss out! New clients must book a 
              <strong> FREE pre-neutering / general health check</strong> with our veterinary nurse first.
            </p>
            
            <div className="pt-4">
              <Button className="ctvets-primary hover:bg-ctvets-primaryLight text-white font-semibold px-8 py-3 rounded-full text-lg">
                Register online and book today!
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default C4Scheme;
