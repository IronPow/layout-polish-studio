
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Upload, QrCode, Users } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-gradient py-20 px-4 md:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <nav className="flex justify-between items-center mb-16">
            <div className="text-2xl font-bold text-primary">MenuCraftor</div>
            <div className="space-x-4">
              <Button variant="ghost" className="hover:text-primary">Login</Button>
              <Button variant="default" className="bg-primary hover:bg-primary/90">Sign Up</Button>
            </div>
          </nav>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <motion.h1 
                className="text-4xl md:text-6xl font-bold leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                Transform Your Menu
                <span className="block text-primary">Into a Digital Experience</span>
              </motion.h1>
              <motion.p 
                className="text-lg text-gray-600 max-w-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Create beautiful digital menus for your restaurant. Generate QR codes instantly and let your customers browse your menu with ease.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg">
                  Get Started
                </Button>
              </motion.div>
            </div>
            <motion.div
              className="float-animation"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <img 
                src="/placeholder.svg" 
                alt="Digital Menu" 
                className="w-full max-w-lg mx-auto"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 px-4 md:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-gray-600">Simple steps to digitize your menu</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="feature-card">
              <Upload className="feature-icon" />
              <h3 className="text-xl font-semibold mb-2">Upload Your Menu</h3>
              <p className="text-gray-600">
                Easily upload and manage your restaurant's menu items, prices, and categories.
              </p>
            </Card>

            <Card className="feature-card">
              <QrCode className="feature-icon" />
              <h3 className="text-xl font-semibold mb-2">Generate QR Code</h3>
              <p className="text-gray-600">
                Get a unique QR code for your digital menu that you can print or display.
              </p>
            </Card>

            <Card className="feature-card">
              <Users className="feature-icon" />
              <h3 className="text-xl font-semibold mb-2">Customers Scan & Order</h3>
              <p className="text-gray-600">
                Customers can easily view your menu by scanning the QR code with their phones.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary/10 py-20 px-4 md:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to modernize your restaurant?
          </h2>
          <p className="text-gray-600 mb-8">
            Join thousands of restaurants already using MenuQR to enhance their dining experience.
          </p>
          <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg">
            Start Free Trial
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;
