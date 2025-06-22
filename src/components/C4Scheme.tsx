
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Heart, Scissors } from 'lucide-react';

const C4Scheme = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <Card className="max-w-4xl mx-auto p-8 border-l-4 border-l-vet-primary bg-gradient-to-r from-vet-light to-white">
          <div className="flex items-start gap-4 mb-6">
            <div className="w-12 h-12 bg-vet-primary rounded-full flex items-center justify-center flex-shrink-0">
              <Heart className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-vet-primary mb-2">
                Affordable Cat Neutering & Microchipping – C4 Scheme
              </h2>
              <p className="text-lg text-gray-700">
                at Poplar & Wood Wharf Vets
              </p>
            </div>
          </div>
          
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              Poplar Vets and Wood Wharf Vets are proud to support the <strong>C4 Cat Neutering Scheme</strong>, 
              offering low-cost neutering and microchipping for eligible cat owners in Greater London.
            </p>
            
            <div className="bg-white p-6 rounded-lg border-2 border-vet-primary/20">
              <div className="flex items-center gap-3 mb-3">
                <Scissors className="w-6 h-6 text-vet-primary" />
                <h3 className="text-xl font-semibold text-vet-primary">Special Offer: Just £10!</h3>
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
              <Button className="bg-vet-primary hover:bg-vet-purple-600 text-white font-semibold px-8 py-3 rounded-full text-lg">
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
