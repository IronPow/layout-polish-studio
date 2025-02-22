
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Upload, QrCode, Users, Clock, Shield, Smartphone } from "lucide-react";

const Index = () => {
  return <div className="min-h-screen font-opensans bg-[#FAFAFA]">
      {/* Hero Section */}
      <section className="bg-white py-20 px-4 md:px-6 lg:px-8 border-b">
        <div className="max-w-7xl mx-auto">
          <nav className="flex justify-between items-center mb-16">
            <div className="text-2xl font-bold text-gray-800 font-assistant">MenuCraftor</div>
            <div className="space-x-4">
              <Button variant="ghost" className="hover:text-primary">Login</Button>
              <Button variant="default" className="bg-[#F97316] hover:bg-[#F97316]/90">Try Free for 14 Days</Button>
            </div>
          </nav>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <motion.h1 className="text-4xl md:text-6xl font-bold leading-tight font-assistant" initial={{opacity: 0, y: 20}} animate={{opacity: 1, y: 0}} transition={{duration: 0.8}}>
                Update Your Menu from Anywhere,
                <span className="block text-[#F97316]">with One Click!</span>
              </motion.h1>
              <motion.p className="text-lg text-gray-600 max-w-xl" initial={{opacity: 0, y: 20}} animate={{opacity: 1, y: 0}} transition={{duration: 0.8, delay: 0.2}}>
                Keep your menu up-to-date effortlessly. Change prices, add specials, or update items instantly - all from your phone or computer. Perfect for restaurants that want to stay agile and responsive to market changes.
              </motion.p>
              <motion.div className="space-y-4" initial={{opacity: 0, y: 20}} animate={{opacity: 1, y: 0}} transition={{duration: 0.8, delay: 0.4}}>
                <div className="flex gap-4 items-center">
                  <Button className="bg-[#F97316] hover:bg-[#F97316]/90 text-white px-8 py-6 text-lg">
                    Try Free for 14 Days
                  </Button>
                  <span className="text-gray-500">with no obligation!</span>
                </div>
                <p className="text-sm text-gray-500">Join over 1,000+ restaurants already using MenuCraftor to streamline their operations.</p>
              </motion.div>
            </div>
            <motion.div className="float-animation" initial={{opacity: 0, scale: 0.8}} animate={{opacity: 1, scale: 1}} transition={{duration: 0.8}}>
              <img src="/lovable-uploads/9915b5e5-fdde-447c-971f-77389c58f3eb.png" alt="Menu Update Demo" className="w-full max-w-lg mx-auto rounded-lg shadow-lg" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 md:px-6 lg:px-8 bg-[#FAFAFA]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-assistant text-gray-800">Why Choose MenuCraftor?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Experience the future of menu management with features designed to make your life easier and your business more efficient.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 border-0 shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <Clock className="w-12 h-12 mb-6 text-[#F97316]" />
              <h3 className="text-xl font-semibold mb-2 font-assistant text-gray-800">Real-time Updates</h3>
              <p className="text-gray-600">
                Update your menu instantly, anytime. Changes reflect immediately across all your digital menus.
              </p>
            </Card>

            <Card className="p-8 border-0 shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <Shield className="w-12 h-12 mb-6 text-[#F97316]" />
              <h3 className="text-xl font-semibold mb-2 font-assistant text-gray-800">Secure Platform</h3>
              <p className="text-gray-600">
                Your menu data is protected with enterprise-grade security. Rest easy knowing your information is safe.
              </p>
            </Card>

            <Card className="p-8 border-0 shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <Smartphone className="w-12 h-12 mb-6 text-[#F97316]" />
              <h3 className="text-xl font-semibold mb-2 font-assistant text-gray-800">Mobile-First Design</h3>
              <p className="text-gray-600">
                Manage your menu from any device. Our platform is optimized for both desktop and mobile use.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 px-4 md:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-assistant text-gray-800">How It Works</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Get started with MenuCraftor in three simple steps. Our streamlined process ensures you can have your digital menu up and running in minutes.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 border-0 shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <Upload className="w-12 h-12 mb-6 text-[#F97316]" />
              <h3 className="text-xl font-semibold mb-2 font-assistant text-gray-800">Upload Your Menu</h3>
              <p className="text-gray-600">
                Simply upload your existing menu or create a new one using our intuitive editor. Import from PDF, Word, or start fresh - it's your choice.
              </p>
            </Card>

            <Card className="p-8 border-0 shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <QrCode className="w-12 h-12 mb-6 text-[#F97316]" />
              <h3 className="text-xl font-semibold mb-2 font-assistant text-gray-800">Get Your QR Code</h3>
              <p className="text-gray-600">
                Receive a custom QR code instantly. Print it on table cards, add it to your existing menu, or display it anywhere in your restaurant.
              </p>
            </Card>

            <Card className="p-8 border-0 shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <Users className="w-12 h-12 mb-6 text-[#F97316]" />
              <h3 className="text-xl font-semibold mb-2 font-assistant text-gray-800">Start Serving</h3>
              <p className="text-gray-600">
                Watch as customers seamlessly browse your digital menu. Track views, popular items, and update in real-time as needed.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-50 py-20 px-4 md:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-assistant text-gray-800">
            Ready to modernize your menu?
          </h2>
          <p className="text-gray-600 mb-8">Join thousands of restaurants already using MenuCraftor to streamline their operations and enhance customer experience.</p>
          <Button className="bg-[#F97316] hover:bg-[#F97316]/90 text-white px-8 py-6 text-lg">Try Free for 14 Days</Button>
          <p className="mt-4 text-sm text-gray-500">No credit card required • Cancel anytime</p>
        </div>
      </section>
    </div>;
};

export default Index;
