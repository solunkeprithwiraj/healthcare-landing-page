'use client'
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";

const services = [
  {
    id: "gynaecology",
    title: "Gynaecology",
    desc: "Comprehensive exams, consultations, and treatment for women's health.",
    icon: (
      <svg className="w-12 h-12 text-pink-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="8" r="4"/><path d="M12 12v8m-4 0h8"/></svg>
    ),
    badge: "Women's Health",
    badgeColor: "pink",
    details: "Our gynecologists provide expert care for all stages of womanhood, from adolescence to menopause, including preventive screenings and personalized treatment plans."
  },
  {
    id: "garbha-sanskar",
    title: "Garbha Sanskar",
    desc: "Holistic prenatal program blending tradition and science.",
    icon: (
      <svg className="w-12 h-12 text-purple-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 2C7 2 2 7 2 12s5 10 10 10 10-5 10-10S17 2 12 2z"/><path d="M12 6v6l4 2"/></svg>
    ),
    badge: "Prenatal Care",
    badgeColor: "purple",
    details: "Experience the benefits of Garbha Sanskar, a unique blend of ancient wisdom and modern science to nurture your baby's development from the womb."
  },
  {
    id: "lactation",
    title: "Lactation",
    desc: "Expert consultants for breastfeeding support.",
    icon: (
      <svg className="w-12 h-12 text-blue-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M8 15s1.5-2 4-2 4 2 4 2"/></svg>
    ),
    badge: "Breastfeeding",
    badgeColor: "blue",
    details: "Our lactation consultants help new mothers with breastfeeding techniques, overcoming challenges, and ensuring optimal nutrition for your baby."
  },
  {
    id: "paediatrician",
    title: "Paediatrician",
    desc: "Partnering with parents for child health.",
    icon: (
      <svg className="w-12 h-12 text-green-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="8" r="4"/><path d="M6 20v-2a4 4 0 018 0v2"/></svg>
    ),
    badge: "Child Health",
    badgeColor: "green",
    details: "Our pediatricians provide comprehensive care for your child's growth, development, and well-being from birth through adolescence."
  },
  {
    id: "ivf",
    title: "IVF",
    desc: "Advanced IVF treatments with personalized care.",
    icon: (
      <svg className="w-12 h-12 text-purple-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M15 9h.01M9 15h.01"/></svg>
    ),
    badge: "Fertility",
    badgeColor: "purple",
    details: "State-of-the-art IVF treatments tailored to your needs, with compassionate support every step of the way."
  },
  {
    id: "dietician",
    title: "Dietician",
    badge: "Diet Care",
    desc: "Personalized nutrition plans for mom and baby.",
    icon: (
      <svg className="w-12 h-12 text-yellow-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M8 12h8"/></svg>
    ),
    badgeColor: "yellow",
    details: "Our dieticians create customized nutrition plans to support a healthy pregnancy, postpartum recovery, and infant growth."
  },
];

export default function ServicesPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCard, setActiveCard] = useState<number | null>(null);

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
        
        <div className={`relative flex flex-col items-center justify-center text-center py-28 px-4 sm:px-8 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="mb-6 p-4 bg-white/30 backdrop-blur-sm rounded-full border border-white/40 shadow-lg hover:shadow-pink-200/30 transition-all duration-500">
            <svg className="w-14 h-14 text-pink-500 animate-pulse" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
            </svg>
          </div>
          <h1 className="text-5xl sm:text-7xl font-bold bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 bg-clip-text text-transparent mb-8 tracking-tight">
            Our Services
          </h1>
          <p className="text-xl sm:text-2xl text-gray-700 mb-10 max-w-3xl mx-auto leading-relaxed">
            Explore our comprehensive range of services designed to support you at every stage of your motherhood journey.
          </p>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="py-20 px-4 sm:px-8 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 scroll-animate">
          {services.map((service, index) => (
            <Card
              key={service.id}
              id={service.id}
              className={`bg-white/70 backdrop-blur-sm border border-white/60 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 rounded-3xl overflow-visible ${activeCard === index ? 'ring-2 ring-pink-300' : ''}`}
              onMouseEnter={() => setActiveCard(index)}
              onMouseLeave={() => setActiveCard(null)}
            >
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <Badge className={`bg-${service.badgeColor}-500/20 text-${service.badgeColor}-700 border border-${service.badgeColor}-200 px-4 py-1.5 text-sm font-medium shadow-md rounded-full backdrop-blur-sm`}>
                  {service.badge}
                </Badge>
              </div>
              <CardHeader className="pt-10 flex flex-col items-center">
                <div className="p-4 bg-gradient-to-r from-pink-100 to-purple-100 rounded-full shadow-md mb-4">
                  {service.icon}
                </div>
                <CardTitle className="text-2xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center px-6 pb-6">
                <p className="text-gray-700 mb-4 font-medium">{service.desc}</p>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">{service.details}</p>
                <Button className="group bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white rounded-full shadow-md hover:shadow-lg transition-all duration-300">
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-8 bg-gradient-to-r from-pink-500/15 to-purple-500/15 mt-16 scroll-animate">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
            Need Personalized Guidance?
          </h2>
          <p className="text-xl text-gray-700 mb-10 max-w-2xl mx-auto">
            Our team of experts is ready to create a customized care plan tailored to your unique needs.
          </p>
          <Button className="px-8 py-6 bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white text-lg rounded-full font-semibold hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            Schedule a Consultation
          </Button>
        </div>
      </section>

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