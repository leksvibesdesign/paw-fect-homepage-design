
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ShoppingCart, UserPlus, Heart } from 'lucide-react';

const QuickActions = () => {
  return (
    <section className="py-16 bg-vet-light">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="p-8 text-center hover:shadow-lg transition-shadow duration-300 border-0 bg-white">
            <div className="w-16 h-16 bg-gradient-to-br from-vet-primary to-vet-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <ShoppingCart className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-vet-primary">ONLINE PET PHARMACY</h3>
            <p className="text-gray-600 mb-6">VETERINARY MEDICINES & SUPPLIES</p>
            <Button className="bg-vet-primary hover:bg-vet-purple-600 text-white font-semibold px-6 py-3 rounded-full">
              SHOP OUR PET PHARMACY NOW
            </Button>
          </Card>

          <Card className="p-8 text-center hover:shadow-lg transition-shadow duration-300 border-0 bg-white">
            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <UserPlus className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-vet-primary">Register & Book</h3>
            <p className="text-gray-600 mb-6">Register in Just 2 Minutes & Keep Your Pet Healthy!</p>
            <Button className="bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-full">
              Click Here
            </Button>
          </Card>

          <Card className="p-8 text-center hover:shadow-lg transition-shadow duration-300 border-0 bg-white">
            <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <Heart className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-vet-primary">Healthy Pet Plan</h3>
            <p className="text-gray-600 mb-6">Sign Up in Just 2 Minutes & Give Your Pet the Best Care!</p>
            <Button className="bg-pink-500 hover:bg-pink-600 text-white font-semibold px-6 py-3 rounded-full">
              Click Here
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default QuickActions;
