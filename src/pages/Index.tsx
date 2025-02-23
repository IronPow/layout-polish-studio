import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Upload, QrCode, Users, Clock, Shield, Smartphone } from "lucide-react";
const Index = () => {
  return <div className="min-h-screen font-heebo bg-[#FAFAFA]" dir="rtl">
      {/* Hero Section */}
      <section className="bg-white py-20 px-4 md:px-6 lg:px-8 border-b">
        <div className="max-w-7xl mx-auto">
          <nav className="flex justify-between items-center mb-16">
            <motion.img alt="MenuCraft לוגו" initial={{
            opacity: 0,
            y: -20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.5
          }} src="/lovable-uploads/551229bb-b3ab-4126-9058-380840d9f105.png" className="h-500 w-auto" />
            <div className="space-x-4 flex flex-row-reverse">
              <Button variant="ghost" className="hover:text-primary mr-4 transition-colors duration-300">התחברות</Button>
              <Button variant="default" className="bg-[#F97316] hover:bg-[#F97316]/90 transform hover:scale-105 transition-all duration-300">
                נסה חינם ל-14 ימים
              </Button>
            </div>
          </nav>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <motion.h1 className="text-4xl md:text-6xl font-bold leading-tight font-rubik" initial={{
              opacity: 0,
              y: 20
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.8
            }}>
                עדכן את התפריט שלך מכל מקום,
                <span className="block text-[#F97316]">בלחיצה אחת!</span>
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
                שמור על התפריט שלך מעודכן בקלות. שנה מחירים, הוסף מבצעים או עדכן פריטים באופן מיידי - הכל מהטלפון או מהמחשב שלך. מושלם למסעדות שרוצות להישאר זריזות ומגיבות לשינויים בשוק.
              </motion.p>
              <motion.div className="space-y-4" initial={{
              opacity: 0,
              y: 20
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.8,
              delay: 0.4
            }}>
                <div className="flex gap-4 items-center">
                  <Button className="bg-[#F97316] hover:bg-[#F97316]/90 text-white px-8 py-6 text-lg">
                    נסה חינם ל-14 ימים
                  </Button>
                  <span className="text-gray-500">ללא התחייבות!</span>
                </div>
                <p className="text-sm text-gray-500">
              </p>
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
              <img src="/lovable-uploads/9915b5e5-fdde-447c-971f-77389c58f3eb.png" alt="הדגמת עדכון תפריט" className="w-full max-w-lg mx-auto rounded-lg shadow-lg" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 md:px-6 lg:px-8 bg-[#FAFAFA]">
        <div className="max-w-7xl mx-auto">
          <motion.div className="text-center mb-16" initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6
        }}>
            <h2 className="text-3xl font-bold mb-4 font-rubik text-gray-800 md:text-5xl">למה לבחור ב-MenuCraft?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">חווה את העתיד של ניהול תפריטים עם תכונות שתוכננו להקל על חייך ולייעל את העסק שלך.</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6,
            delay: 0.2
          }}>
              <Card className="p-8 border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <Clock className="w-12 h-12 mb-6 text-[#F97316]" />
                <h3 className="text-xl font-semibold mb-2 font-rubik text-gray-800">עדכונים בזמן אמת</h3>
                <p className="text-gray-600">
                  עדכן את התפריט שלך מיידית, בכל זמן. השינויים משתקפים מיד בכל התפריטים הדיגיטליים שלך.
                </p>
              </Card>
            </motion.div>

            <motion.div initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6,
            delay: 0.4
          }}>
              <Card className="p-8 border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <Shield className="w-12 h-12 mb-6 text-[#F97316]" />
                <h3 className="text-xl font-semibold mb-2 font-rubik text-gray-800">פלטפורמה מאובטחת</h3>
                <p className="text-gray-600">
                  נתוני התפריט שלך מוגנים באבטחה ברמה עסקית. תוכל לנוח בשקט בידיעה שהמידע שלך בטוח.
                </p>
              </Card>
            </motion.div>

            <motion.div initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6,
            delay: 0.6
          }}>
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
      <section className="py-20 px-4 md:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div className="text-center mb-16" initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6
        }}>
            <h2 className="text-3xl font-bold mb-4 font-rubik text-gray-800 md:text-5xl">איך זה עובד</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">התחל להשתמש במניוקראפט בשלושה שלבים פשוטים. התהליך המייעל שלנו מבטיח שתוכל להעלות את התפריט הדיגיטלי שלך תוך דקות.</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div className="p-8 border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <Upload className="w-12 h-12 mb-6 text-[#F97316]" />
              <h3 className="text-xl font-semibold mb-2 font-rubik text-gray-800">העלה את התפריט שלך</h3>
              <p className="text-gray-600">
                פשוט העלה את התפריט הקיים שלך או צור חדש באמצעות העורך האינטואיטיבי שלנו. ייבא מ-PDF, Word, או התחל מאפס - הבחירה שלך.
              </p>
            </motion.div>

            <motion.div className="p-8 border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <QrCode className="w-12 h-12 mb-6 text-[#F97316]" />
              <h3 className="text-xl font-semibold mb-2 font-rubik text-gray-800">קבל את קוד ה-QR שלך</h3>
              <p className="text-gray-600">
                קבל קוד QR מותאם אישית באופן מיידי. הדפס אותו על כרטיסי שולחן, הוסף אותו לתפריט הקיים שלך, או הצג אותו בכל מקום במסעדה.
              </p>
            </motion.div>

            <motion.div className="p-8 border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
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
      <section className="bg-gray-50 py-20 px-4 md:px-6 lg:px-8">
        <motion.div className="max-w-4xl mx-auto text-center" initial={{
        opacity: 0,
        scale: 0.95
      }} whileInView={{
        opacity: 1,
        scale: 1
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.6
      }}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-rubik text-gray-800">
            מוכן לחדש את התפריט שלך?
          </h2>
          <p className="text-gray-600 mb-8">הצטרף ל-MenuCraft ותוכל לייעל את הפעילות שלך ולשפר את חוויית הלקוח בקלות ובמהירות!</p>
          <motion.div whileHover={{
          scale: 1.05
        }} whileTap={{
          scale: 0.95
        }}>
            <Button className="bg-[#F97316] hover:bg-[#F97316]/90 text-white px-8 py-6 text-lg">נסה חינם ל-14 ימים</Button>
          </motion.div>
          <p className="mt-4 text-sm text-gray-500">לא נדרש כרטיס אשראי • ניתן לבטל בכל עת</p>
        </motion.div>
      </section>
    </div>;
};
export default Index;