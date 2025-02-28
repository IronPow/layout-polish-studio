
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Upload, QrCode, Users, Clock, Shield, Smartphone, Menu } from "lucide-react";

// Button component
const Button = ({ 
  className, 
  variant = "default", 
  size = "default", 
  asChild = false, 
  ...props 
}: React.ButtonHTMLAttributes<HTMLButtonElement> & { 
  className?: string;
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
  size?: "default" | "sm" | "lg" | "icon";
  asChild?: boolean;
}) => {
  const baseStyles = "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50";
  
  const variants = {
    default: "bg-primary text-primary-foreground hover:bg-primary/90",
    destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
    outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
    secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
    ghost: "hover:bg-accent hover:text-accent-foreground",
    link: "text-primary underline-offset-4 hover:underline",
  };
  
  const sizes = {
    default: "h-10 px-4 py-2",
    sm: "h-9 rounded-md px-3",
    lg: "h-11 rounded-md px-8",
    icon: "h-10 w-10",
  };
  
  const combinedClassName = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className || ""}`;
  
  return (
    <button
      className={combinedClassName}
      {...props}
    />
  );
};

// Card component
const Card = ({ 
  className, 
  ...props 
}: React.HTMLAttributes<HTMLDivElement> & { 
  className?: string;
}) => {
  return (
    <div
      className={`rounded-lg border bg-card text-card-foreground shadow-sm ${className || ""}`}
      {...props}
    />
  );
};

// Simple utility function to combine class names
const cn = (...inputs: (string | undefined)[]) => {
  return inputs.filter(Boolean).join(" ");
};

// Main component
const SingleFileIndex = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // Animation variants to reduce repetition
  const fadeInVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };
  
  return (
    <div dir="rtl" className="min-h-screen font-heebo bg-[#FAFAFA] py-[2px]">
      {/* Hero Section */}
      <section className="px-4 md:px-6 border-b bg-zinc-50 lg:px-[33px] mx-0 py-0 my-0">
        <div className="max-w-7xl mx-auto">
          {/* Navigation */}
          <nav className="flex justify-between items-center mb-1 px-2 sm:px-[45px] my-[21px] relative">
            <div className="flex items-center">
              <motion.img 
                alt="MenuCraft לוגו" 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="h-20 sm:h-40 w-auto object-contain" 
                src="/lovable-uploads/ef2df96d-26de-43cf-b3b1-e6c04bd44473.png" 
              />
              <h1 className="text-xl sm:text-3xl font-bold ml-2 sm:ml-4 font-rubik text-slate-950">MENUCRAFT</h1>
            </div>
            
            {/* Mobile menu button */}
            <div className="block md:hidden">
              <Button 
                variant="ghost" 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
                className="p-2"
              >
                <Menu className="h-6 w-6" />
              </Button>
            </div>
            
            {/* Desktop navigation */}
            <div className="hidden md:flex space-x-4 flex-row-reverse my-0 mx-0 px-0 py-[15px]">
              <Button 
                variant="ghost" 
                className="hover:text-[#F97316] mr-4 transition-colors duration-300 py-[22px] px-[39px]"
              >
                התחברות
              </Button>
              <Button 
                variant="default" 
                className="transform hover:scale-105 transition-all duration-300 px-[20px] py-[21px] bg-orange-500 hover:bg-orange-400"
              >
                נסה חינם ל-14 ימים
              </Button>
            </div>
            
            {/* Mobile menu dropdown */}
            {mobileMenuOpen && (
              <div className="absolute top-full right-0 w-full bg-white shadow-lg z-50 md:hidden">
                <div className="flex flex-col p-4 space-y-4">
                  <Button 
                    variant="default" 
                    className="w-full bg-orange-500 hover:bg-orange-400"
                  >
                    נסה חינם ל-14 ימים
                  </Button>
                  <Button 
                    variant="ghost" 
                    className="w-full hover:text-[#F97316]"
                  >
                    התחברות
                  </Button>
                </div>
              </div>
            )}
          </nav>

          {/* Hero Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <motion.h1 
                className="text-3xl md:text-4xl lg:text-6xl font-bold leading-tight font-rubik"
                initial={fadeInVariants.hidden}
                animate={fadeInVariants.visible}
                transition={{ duration: 0.8 }}
              >
                עדכן את התפריט שלך מכל מקום,
                <span className="block text-orange-500">בלחיצה אחת!</span>
              </motion.h1>
              
              <motion.p 
                className="text-lg text-gray-600 max-w-xl"
                initial={fadeInVariants.hidden}
                animate={fadeInVariants.visible}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                שמור על התפריט שלך מעודכן בקלות. שנה מחירים, הוסף מבצעים או עדכן פריטים באופן מיידי - הכל מהטלפון או מהמחשב שלך. מושלם למסעדות שרוצות להישאר זריזות ומגיבות לשינויים בשוק.
              </motion.p>
              
              <motion.div 
                className="space-y-4"
                initial={fadeInVariants.hidden}
                animate={fadeInVariants.visible}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <div className="flex gap-4 items-center">
                  <Button className="text-white px-8 py-6 text-lg bg-orange-500 hover:bg-orange-400">
                    נסה חינם ל-14 ימים
                  </Button>
                  <span className="text-gray-500">ללא התחייבות!</span>
                </div>
                <p className="text-sm text-gray-500"></p>
              </motion.div>
            </div>
            
            <motion.div 
              className="float-animation"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <img 
                src="/lovable-uploads/9915b5e5-fdde-447c-971f-77389c58f3eb.png" 
                alt="הדגמת עדכון תפריט" 
                className="w-full max-w-lg mx-auto rounded-lg shadow-lg" 
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="px-4 md:px-6 bg-orange-300 py-[65px] lg:px-[33px] mx-0 my-[78px]">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-4 font-rubik text-gray-800 md:text-5xl">למה לבחור ב-MenuCraft?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">חווה את העתיד של ניהול תפריטים עם תכונות שתוכננו להקל על חייך ולייעל את העסק שלך.</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Benefit Card 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="p-8 border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <Clock className="w-12 h-12 mb-6 text-[#F97316]" />
                <h3 className="text-xl font-semibold mb-2 font-rubik text-gray-800">עדכונים בזמן אמת</h3>
                <p className="text-gray-600">
                  עדכן את התפריט שלך מיידית, בכל זמן. השינויים משתקפים מיד בכל התפריטים הדיגיטליים שלך.
                </p>
              </Card>
            </motion.div>

            {/* Benefit Card 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Card className="p-8 border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <Shield className="w-12 h-12 mb-6 text-[#F97316]" />
                <h3 className="text-xl font-semibold mb-2 font-rubik text-gray-800">פלטפורמה מאובטחת</h3>
                <p className="text-gray-600">
                  נתוני התפריט שלך מוגנים באבטחה ברמה עסקית. תוכל לנוח בשקט בידיעה שהמידע שלך בטוח.
                </p>
              </Card>
            </motion.div>

            {/* Benefit Card 3 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Card className="p-8 border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <Smartphone className="w-12 h-12 mb-6 text-[#F97316]" />
                <h3 className="text-xl font-semibold mb-2 font-rubik text-gray-800">עיצוב מותאם לנייד</h3>
                <p className="text-gray-600">
                  נהל את התפריט שלך מכל מכשיר. הפלטפורמה שלנו מותאמת לשימוש הן במחשב והן בנייד.
                </p>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="px-4 md:px-6 lg:px-8 bg-neutral-50 py-0">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-4 font-rubik text-gray-800 md:text-5xl">איך זה עובד</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">התחל להשתמש במניוקראפט בשלושה שלבים פשוטים. התהליך המייעל שלנו מבטיח שתוכל להעלות את התפריט הדיגיטלי שלך תוך דקות.</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <motion.div className="p-8 border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-gray-400 hover:bg-gray-300">
              <Upload className="w-12 h-12 mb-6 text-[#F97316]" />
              <h3 className="text-xl font-semibold mb-2 font-rubik text-gray-800">העלה את התפריט שלך</h3>
              <p className="text-gray-600">
                פשוט העלה את התפריט הקיים שלך או צור חדש באמצעות העורך האינטואיטיבי שלנו. ייבא מ-PDF, Word, או התחל מאפס - הבחירה שלך.
              </p>
            </motion.div>

            {/* Step 2 */}
            <motion.div className="p-8 border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-gray-400 hover:bg-gray-300">
              <QrCode className="w-12 h-12 mb-6 text-[#F97316]" />
              <h3 className="text-xl font-semibold mb-2 font-rubik text-gray-800">קבל את קוד ה-QR שלך</h3>
              <p className="text-gray-600">
                קבל קוד QR מותאם אישית באופן מיידי. הדפס אותו על כרטיסי שולחן, הוסף אותו לתפריט הקיים שלך, או הצג אותו בכל מקום במסעדה.
              </p>
            </motion.div>

            {/* Step 3 */}
            <motion.div className="p-8 border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-gray-400 hover:bg-gray-300">
              <Users className="w-12 h-12 mb-6 text-[#F97316]" />
              <h3 className="text-xl font-semibold mb-2 font-rubik text-gray-800">התחל לשרת</h3>
              <p className="text-gray-600">
                צפה כיצד לקוחות גולשים בקלות בתפריט הדיגיטלי שלך. עקוב אחר צפיות, פריטים פופולריים, ועדכן בזמן אמת לפי הצורך.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 md:px-6 lg:px-8 bg-orange-300 my-[90px]">
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-rubik text-gray-800">
            מוכן לחדש את התפריט שלך?
          </h2>
          <p className="text-gray-600 mb-8">הצטרף ל-MenuCraft ותוכל לייעל את הפעילות שלך ולשפר את חוויית הלקוח בקלות ובמהירות!</p>
          
          <motion.div 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button className="text-white px-8 py-6 text-lg bg-[#F97316] hover:bg-orange-400">
              נסה חינם ל-14 ימים
            </Button>
          </motion.div>
          
          <p className="mt-4 text-sm text-gray-500">לא נדרש כרטיס אשראי • ניתן לבטל בכל עת</p>
        </motion.div>
      </section>
      
      {/* CSS for animations */}
      <style>
        {`
          @keyframes float {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-20px); }
            100% { transform: translateY(0px); }
          }

          .float-animation {
            animation: float 6s ease-in-out infinite;
          }

          .fade-in {
            opacity: 0;
            animation: fadeIn 0.8s ease-out forwards;
          }

          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `}
      </style>
    </div>
  );
};

export default SingleFileIndex;
