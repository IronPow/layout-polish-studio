import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Upload, QrCode, Users } from "lucide-react";
const Index = () => {
  return <div className="min-h-screen font-opensans bg-[#FAFAFA]">
      {/* Hero Section */}
      <section className="bg-white py-20 px-4 md:px-6 lg:px-8 border-b">
        <div className="max-w-7xl mx-auto">
          <nav className="flex justify-between items-center mb-16">
            <div className="text-2xl font-bold text-gray-800 font-assistant">MenuCraft</div>
            <div className="space-x-4">
              <Button variant="ghost" className="hover:text-primary">Login</Button>
              <Button variant="default" className="bg-[#F97316] hover:bg-[#F97316]/90">Try Free for 14 Days</Button>
            </div>
          </nav>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <motion.h1 className="text-4xl md:text-6xl font-bold leading-tight font-assistant" initial={{
              opacity: 0,
              y: 20
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.8
            }}>
                Update Your Menu from Anywhere,
                <span className="block text-[#F97316]">with One Click!</span>
              </motion.h1>
              <motion.p className="text-lg text-gray-600 max-w-xl" initial={{
              opacity: 0,
              y: 20
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.8,
              delay: 0.2
            }}>
                Keep your menu up-to-date effortlessly. Change prices, add specials, or update items instantly - all from your phone or computer.
              </motion.p>
              <motion.div initial={{
              opacity: 0,
              y: 20
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.8,
              delay: 0.4
            }} className="flex gap-4 items-center">
                <Button className="bg-[#F97316] hover:bg-[#F97316]/90 text-white px-8 py-6 text-lg">
                  Try Free for 14 Days
                </Button>
                <span className="text-gray-500">with no obligation!</span>
              </motion.div>
            </div>
            <motion.div className="float-animation" initial={{
            opacity: 0,
            scale: 0.8
          }} animate={{
            opacity: 1,
            scale: 1
          }} transition={{
            duration: 0.8
          }}>
              <img src="/lovable-uploads/9915b5e5-fdde-447c-971f-77389c58f3eb.png" alt="Menu Update Demo" className="w-full max-w-lg mx-auto rounded-lg shadow-lg" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 px-4 md:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-assistant text-gray-800">How It Works</h2>
            <p className="text-gray-600">Three simple steps to modernize your menu</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <Upload className="w-12 h-12 mb-6 text-[#F97316]" />
              <h3 className="text-xl font-semibold mb-2 font-assistant text-gray-800">Upload Your Menu</h3>
              <p className="text-gray-600">
                Import your existing menu in minutes. No complex setup required.
              </p>
            </Card>

            <Card className="p-8 border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <QrCode className="w-12 h-12 mb-6 text-[#F97316]" />
              <h3 className="text-xl font-semibold mb-2 font-assistant text-gray-800">Get Your QR Code</h3>
              <p className="text-gray-600">
                Receive a unique QR code for your digital menu instantly.
              </p>
            </Card>

            <Card className="p-8 border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <Users className="w-12 h-12 mb-6 text-[#F97316]" />
              <h3 className="text-xl font-semibold mb-2 font-assistant text-gray-800">Start Serving</h3>
              <p className="text-gray-600">
                Let customers scan and browse your digital menu seamlessly.
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
          <p className="text-gray-600 mb-8">Join us to be more efficient!</p>
          <Button className="bg-[#F97316] hover:bg-[#F97316]/90 text-white px-8 py-6 text-lg">Try Free for 14 Days</Button>
        </div>
      </section>
    </div>;
};
export default Index;