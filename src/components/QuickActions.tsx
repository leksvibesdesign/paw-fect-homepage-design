
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ShoppingCart, UserPlus, Heart, Home } from 'lucide-react';

const QuickActions = () => {
  return (
    <section className="py-16 ctvets-soft-gradient">
      <div className="container mx-auto px-4">
        {/* Pet Image */}
        <div className="text-center mb-12">
          <img
            src="https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?q=80&w=800&auto=format&fit=crop"
            alt="Happy kitten"
            className="w-32 h-32 rounded-full object-cover mx-auto mb-6 shadow-lg"
          />
          <h2 className="text-3xl font-bold ctvets-primary-text mb-4">Quick Actions</h2>
          <p className="text-lg text-gray-600">Everything you need for your pet's care</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="p-8 text-center hover:shadow-lg transition-shadow duration-300 border-0 bg-white">
            <div className="w-16 h-16 ctvets-gradient rounded-full flex items-center justify-center mx-auto mb-6">
              <ShoppingCart className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-4 ctvets-primary-text">ONLINE PET PHARMACY</h3>
            <p className="text-gray-600 mb-6">VETERINARY MEDICINES & SUPPLIES</p>
            <Button className="bg-ctvets-primary hover:bg-ctvets-primaryLight text-white font-semibold px-6 py-3 rounded-full">
              SHOP OUR PET PHARMACY NOW
            </Button>
          </Card>

          <Card className="p-8 text-center hover:shadow-lg transition-shadow duration-300 border-0 bg-white">
            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <UserPlus className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-4 ctvets-primary-text">Register & Book</h3>
            <p className="text-gray-600 mb-6">Register in Just 2 Minutes & Keep Your Pet Healthy!</p>
            <Button className="bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-full">
              Click Here
            </Button>
          </Card>

          <Card className="p-8 text-center hover:shadow-lg transition-shadow duration-300 border-0 bg-white">
            <div className="w-16 h-16 ctvets-pink rounded-full flex items-center justify-center mx-auto mb-6">
              <Heart className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-4 ctvets-primary-text">Home Visit Care</h3>
            <p className="text-gray-600 mb-6">Comfortable veterinary care in your own home!</p>
            <Button className="bg-ctvets-pink hover:bg-ctvets-pinkLight text-white font-semibold px-6 py-3 rounded-full">
              <Home className="w-4 h-4 mr-2" />
              Book Home Visit
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default QuickActions;
