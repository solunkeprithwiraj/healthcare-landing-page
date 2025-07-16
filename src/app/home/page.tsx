'use client'
import Image from "next/image";
import { useState, useEffect } from "react";
import { Heart, Users, Award, Shield, Star, MapPin, Phone, Mail, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    title: "Gynaecology",
    desc: "Comprehensive exams, consultations, and treatment.",
    icon: <Heart className="w-12 h-12 text-pink-500" />,
    color: "pink"
  },
  {
    title: "Garbha Sanskar",
    desc: "Holistic prenatal program blending tradition and science.",
    icon: <Award className="w-12 h-12 text-purple-500" />,
    color: "purple"
  },
  {
    title: "Lactation",
    desc: "Expert consultants for breastfeeding support.",
    icon: <Star className="w-12 h-12 text-blue-500" />,
    color: "blue"
  },
  {
    title: "Paediatrician",
    desc: "Partnering with parents for child health.",
    icon: <Users className="w-12 h-12 text-green-500" />,
    color: "green"
  },
  {
    title: "IVF",
    desc: "Advanced IVF treatments with personalized care.",
    icon: <Shield className="w-12 h-12 text-purple-500" />,
    color: "purple"
  },
  {
    title: "Dietician",
    desc: "Personalized nutrition plans for mom and baby.",
    icon: <Star className="w-12 h-12 text-yellow-500" />,
    color: "yellow"
  },
];

const packages = [
  {
    name: "Pre-Conception",
    price: "₹ 7,999",
    features: [
      "2 Gynecologist Consultations",
      "1 IVF Consultation",
      "Diet & Exercise Plans",
      "Webinar & Seminar Access",
    ],
    color: "pink",
  },
  {
    name: "Post-Conception",
    price: "₹ 10,999",
    features: [
      "2 Gynecologist Consultations",
      "Dietician & Physiotherapy Sessions",
      "Antenatal Class, Garbh Sanskar",
      "Lactation Consultation",
    ],
    color: "purple",
  },
  {
    name: "Postpartum",
    price: "₹ 13,499",
    features: [
      "2 Postpartum Gynecologist Consultations",
      "Lactation & Pediatrician Consultations",
      "Physiotherapy & Dietician Sessions",
      "Dermatologist Consultation",
    ],
    color: "blue",
  },
  {
    name: "Annual",
    price: "₹ 18,999",
    features: [
      "9 Gynecologist Consultations",
      "IVF, Dietician, Physiotherapy, Pediatrician",
      "Antenatal Class, Garbh Sanskar, Dermatologist",
      "Webinars & Seminars",
    ],
    color: "yellow",
  },
];

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const [activePackage, setActivePackage] = useState<number | null>(null);

  useEffect(() => {
    setIsVisible(true);
    
    // Add scroll animation effect
    const handleScroll = () => {
      const elements = document.querySelectorAll('.scroll-animate');
      elements.forEach((el) => {
        const rect = (el as HTMLElement).getBoundingClientRect();
        const isInView = rect.top <= window.innerHeight * 0.8;
        if (isInView) {
          (el as HTMLElement).classList.add('animate-in');
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 min-h-screen w-full">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 via-purple-500/10 to-blue-500/10"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 left-10 w-20 h-20 bg-pink-300/30 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute top-32 right-20 w-32 h-32 bg-purple-300/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 left-1/3 w-24 h-24 bg-blue-300/25 rounded-full blur-xl animate-pulse delay-2000"></div>
          <div className="absolute top-40 left-1/4 w-16 h-16 bg-blue-200/20 rounded-full blur-lg animate-pulse delay-700"></div>
          <div className="absolute bottom-40 right-1/4 w-28 h-28 bg-pink-200/15 rounded-full blur-xl animate-pulse delay-1500"></div>
        </div>
        
        <div className={`relative flex flex-col items-center justify-center text-center py-32 px-4 sm:px-8 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="mb-6 p-4 bg-white/30 backdrop-blur-sm rounded-full border border-white/40 shadow-lg hover:shadow-pink-200/30 transition-all duration-500">
            <Heart className="w-14 h-14 text-pink-500 animate-pulse" />
          </div>
          <h1 className="text-5xl sm:text-7xl font-bold bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 bg-clip-text text-transparent mb-8 tracking-tight">
            Step Into Motherhood with Confidence
          </h1>
          <p className="text-xl sm:text-2xl text-gray-700 mb-10 max-w-3xl mx-auto leading-relaxed">
            PregaCoach supports and guides you through pregnancy, postpartum, and parenthood with expert care and personalized attention.
          </p>
          <Button className="px-8 py-7 bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white text-lg rounded-full font-semibold hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex items-center gap-2">
            Book a Consultation
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 sm:px-8 max-w-6xl mx-auto scroll-animate">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
          Our Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={service.title} 
              className={`bg-white/70 backdrop-blur-sm border border-white/60 rounded-3xl shadow-xl p-8 flex flex-col items-center text-center hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 ${activeCard === index ? 'ring-2 ring-pink-300' : ''}`}
              onMouseEnter={() => setActiveCard(index)}
              onMouseLeave={() => setActiveCard(null)}
            >
              <div className={`p-4 bg-${service.color}-100 rounded-full shadow-md mb-4`}>
                {service.icon}
              </div>
              <h3 className="mt-4 text-2xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                {service.title}
              </h3>
              <p className="mt-3 text-gray-600">{service.desc}</p>
              <Button variant="ghost" className="mt-4 text-pink-500 hover:text-pink-700 hover:bg-pink-50 flex items-center gap-1">
                Learn More <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          ))}
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-20 px-4 sm:px-8 bg-gradient-to-r from-pink-500/5 to-purple-500/5 scroll-animate">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
          Our Packages
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {packages.map((pkg, index) => (
            <div 
              key={pkg.name} 
              className={`bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-8 flex flex-col items-center border-t-4 border-${pkg.color}-500 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 ${activePackage === index ? 'ring-2 ring-pink-300' : ''}`}
              onMouseEnter={() => setActivePackage(index)}
              onMouseLeave={() => setActivePackage(null)}
            >
              <h3 className={`text-2xl font-bold text-${pkg.color}-600 mb-2`}>{pkg.name}</h3>
              <div className={`text-3xl font-extrabold bg-gradient-to-r from-${pkg.color}-600 to-purple-600 bg-clip-text text-transparent mb-4`}>
                {pkg.price}
              </div>
              <ul className="text-gray-600 mb-6 space-y-3">
                {pkg.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2">
                    <div className={`w-1.5 h-1.5 rounded-full bg-${pkg.color}-500`}></div>
                    {feature}
                  </li>
                ))}
              </ul>
              <Button className={`mt-auto w-full bg-gradient-to-r from-${pkg.color}-500 to-purple-500 hover:from-${pkg.color}-600 hover:to-purple-600 text-white rounded-full shadow-md hover:shadow-lg transition-all duration-300`}>
                Buy Now
              </Button>
            </div>
          ))}
        </div>
      </section>

      {/* Success/Stats Section */}
      <section className="py-20 px-4 sm:px-8 max-w-5xl mx-auto text-center scroll-animate">
        <h2 className="text-4xl font-bold mb-12 bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
          Our Success
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
          <div className="bg-white/70 backdrop-blur-sm border border-white/60 rounded-3xl shadow-lg p-6 hover:shadow-xl transition-all duration-300">
            <div className="text-5xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">10,000+</div>
            <div className="text-gray-600 mt-2">Families Served</div>
          </div>
          <div className="bg-white/70 backdrop-blur-sm border border-white/60 rounded-3xl shadow-lg p-6 hover:shadow-xl transition-all duration-300">
            <div className="text-5xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">98%</div>
            <div className="text-gray-600 mt-2">Happy Outcomes</div>
          </div>
          <div className="bg-white/70 backdrop-blur-sm border border-white/60 rounded-3xl shadow-lg p-6 hover:shadow-xl transition-all duration-300">
            <div className="text-5xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">100+</div>
            <div className="text-gray-600 mt-2">Healthcare Partners</div>
          </div>
          <div className="bg-white/70 backdrop-blur-sm border border-white/60 rounded-3xl shadow-lg p-6 hover:shadow-xl transition-all duration-300">
            <div className="text-5xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">20+</div>
            <div className="text-gray-600 mt-2">Years Experience</div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-8 bg-gradient-to-r from-pink-500/5 to-purple-500/5 scroll-animate">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
          Why Choose PregaCoach?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-white/70 backdrop-blur-sm border border-white/60 rounded-3xl shadow-lg p-8 flex flex-col items-center text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="p-4 bg-pink-100 rounded-full shadow-md mb-4">
              <Heart className="w-12 h-12 text-pink-500" />
            </div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent mb-3">
              Personalized Guidance
            </h3>
            <p className="text-gray-600">Expert doctors and specialists for every stage of your journey.</p>
          </div>
          <div className="bg-white/70 backdrop-blur-sm border border-white/60 rounded-3xl shadow-lg p-8 flex flex-col items-center text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="p-4 bg-purple-100 rounded-full shadow-md mb-4">
              <Shield className="w-12 h-12 text-purple-500" />
            </div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent mb-3">
              Comprehensive Support
            </h3>
            <p className="text-gray-600">From preconception to postpartum, we're with you every step.</p>
          </div>
          <div className="bg-white/70 backdrop-blur-sm border border-white/60 rounded-3xl shadow-lg p-8 flex flex-col items-center text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="p-4 bg-blue-100 rounded-full shadow-md mb-4">
              <Users className="w-12 h-12 text-blue-500" />
            </div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent mb-3">
              Virtual & In-Person
            </h3>
            <p className="text-gray-600">Consult from anywhere, anytime, with flexible options.</p>
          </div>
        </div>
      </section>

      {/* Blog/Resources Preview */}
      <section className="py-20 px-4 sm:px-8 max-w-5xl mx-auto text-center scroll-animate">
        <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
          Informative Blogs for New Mothers
        </h2>
        <p className="text-xl text-gray-700 mb-10 max-w-3xl mx-auto">
          Guidance on newborn care, postpartum recovery, and emotional well-being. Evidence-based advice and community support for every new mom.
        </p>
        <Button className="px-8 py-6 bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white text-lg rounded-full font-semibold hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex items-center gap-2 mx-auto">
          Read More Blogs
          <ArrowRight className="ml-2 w-5 h-5" />
        </Button>
      </section>

      {/* Contact/Book Now Section */}
      <section id="contact" className="py-20 px-4 sm:px-8 bg-gradient-to-r from-pink-500/15 to-purple-500/15 scroll-animate">
        <div className="max-w-xl mx-auto">
          <div className="bg-white/80 backdrop-blur-sm border border-white/60 rounded-3xl shadow-xl p-8 sm:p-10">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent mb-4">
                Ready to Get Started?
              </h2>
              <p className="text-gray-600 mb-6">
                Have questions or need expert advice? Book an appointment for personalized guidance and support. Your journey to parenthood starts here!
              </p>
            </div>
            <form className="flex flex-col gap-5">
              <div>
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-pink-400 focus:ring-2 focus:ring-pink-200 transition-all duration-200 bg-white/70" 
                  required 
                />
              </div>
              <div>
                <input 
                  type="email" 
                  placeholder="Your Email" 
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-pink-400 focus:ring-2 focus:ring-pink-200 transition-all duration-200 bg-white/70" 
                  required 
                />
              </div>
              <div>
                <textarea 
                  placeholder="How can we help you?" 
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-pink-400 focus:ring-2 focus:ring-pink-200 transition-all duration-200 resize-none bg-white/70" 
                  rows={4} 
                  required 
                />
              </div>
              <Button className="w-full bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white font-semibold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2">
                <Phone className="w-5 h-5" />
                Book Now
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-8 bg-gradient-to-r from-pink-600 to-purple-600 text-white text-center mt-8">
        <div className="max-w-6xl mx-auto">
          <div className="mb-4 font-bold text-2xl">PregaCoach Private Limited</div>
          <div className="mb-4 max-w-2xl mx-auto">Row House No. 2, Ujwal Greens, B-Society, Lane Number 20A, Pune, Maharashtra - 411041</div>
          <div className="mb-4">&copy; {new Date().getFullYear()} PregaCoach. All Rights Reserved.</div>
          <div className="flex justify-center gap-6 mt-4">
            <a href="#" className="hover:underline transition-colors">Terms & Conditions</a>
            <a href="#" className="hover:underline transition-colors">Privacy Policy</a>
            <a href="#" className="hover:underline transition-colors">Contact Us</a>
          </div>
        </div>
      </footer>

      {/* Add CSS for scroll animations */}
      <style jsx global>{`
        .scroll-animate {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.8s ease, transform 0.8s ease;
        }
        
        .animate-in {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </div>
  );
}
