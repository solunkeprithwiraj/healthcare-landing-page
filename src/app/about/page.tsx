'use client'
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Heart, Users, Award, Shield, Star, MapPin, Phone, Mail } from "lucide-react";
import { useState, useEffect } from "react";

export default function AboutPage() {
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

  const teamMembers = [
    {
      name: "Dr. Aarti Sharma",
      role: "Chief Gynecologist",
      specialization: "High-risk pregnancies & Women's health",
      experience: "15+ years",
      icon: <Heart className="w-6 h-6 text-pink-500" />
    },
    {
      name: "Dr. Priya Mehta",
      role: "Pediatrician",
      specialization: "Newborn care & Child development",
      experience: "12+ years",
      icon: <Users className="w-6 h-6 text-blue-500" />
    },
    {
      name: "Dr. Rohan Patel",
      role: "IVF Specialist",
      specialization: "Fertility treatments & Reproductive health",
      experience: "10+ years",
      icon: <Award className="w-6 h-6 text-purple-500" />
    },
    {
      name: "Ms. Neha Singh",
      role: "Dietician",
      specialization: "Prenatal & postnatal nutrition",
      experience: "8+ years",
      icon: <Shield className="w-6 h-6 text-green-500" />
    },
    {
      name: "Ms. Kavita Rao",
      role: "Lactation Consultant",
      specialization: "Breastfeeding support & counseling",
      experience: "7+ years",
      icon: <Star className="w-6 h-6 text-yellow-500" />
    }
  ];

  const values = [
    {
      title: "Compassionate Care",
      description: "Every woman deserves personalized attention and empathetic support throughout her journey.",
      icon: <Heart className="w-8 h-8 text-pink-500" />
    },
    {
      title: "Evidence-Based Medicine",
      description: "We combine the latest medical research with proven traditional practices for optimal outcomes.",
      icon: <Award className="w-8 h-8 text-blue-500" />
    },
    {
      title: "Holistic Approach",
      description: "Addressing physical, emotional, and mental well-being for complete maternal health.",
      icon: <Shield className="w-8 h-8 text-purple-500" />
    },
    {
      title: "24/7 Support",
      description: "Round-the-clock availability for emergencies and continuous care throughout your journey.",
      icon: <Users className="w-8 h-8 text-green-500" />
    }
  ];

  return (
    <div className="bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 min-h-screen w-full">
      {/* Hero Section with improved animations */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 via-purple-500/10 to-blue-500/10"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 left-10 w-20 h-20 bg-pink-300/30 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute top-32 right-20 w-32 h-32 bg-purple-300/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 left-1/3 w-24 h-24 bg-blue-300/25 rounded-full blur-xl animate-pulse delay-2000"></div>
          {/* Additional decorative elements */}
          <div className="absolute top-40 left-1/4 w-16 h-16 bg-blue-200/20 rounded-full blur-lg animate-pulse delay-700"></div>
          <div className="absolute bottom-40 right-1/4 w-28 h-28 bg-pink-200/15 rounded-full blur-xl animate-pulse delay-1500"></div>
        </div>
        
        <div className={`relative flex flex-col items-center justify-center text-center py-28 px-4 sm:px-8 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="mb-6 p-4 bg-white/30 backdrop-blur-sm rounded-full border border-white/40 shadow-lg hover:shadow-pink-200/30 transition-all duration-500">
            <Heart className="w-14 h-14 text-pink-500 animate-pulse" />
          </div>
          <h1 className="text-5xl sm:text-7xl font-bold bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 bg-clip-text text-transparent mb-8 tracking-tight">
            About PregaCoach
          </h1>
          <p className="text-xl sm:text-2xl text-gray-700 mb-10 max-w-3xl mx-auto leading-relaxed">
            Empowering women with expert care, guidance, and support throughout their motherhood journey.
          </p>
          <div className="flex items-center gap-3 text-gray-600 bg-white/50 backdrop-blur-sm px-6 py-3 rounded-full shadow-sm">
            <MapPin className="w-5 h-5 text-pink-500" />
            <span>Trusted by 10,000+ families across India</span>
          </div>
        </div>
      </section>

      {/* Mission Section with enhanced card design */}
      <section className="py-20 px-4 sm:px-8 max-w-6xl mx-auto">
        <Card className="scroll-animate bg-white/80 backdrop-blur-sm border border-white/60 shadow-2xl mb-16 overflow-hidden hover:shadow-3xl transition-all duration-500 rounded-3xl">
          <div className="absolute inset-0 bg-gradient-to-r from-pink-500/5 to-purple-500/5"></div>
          <CardHeader className="relative p-8">
            <div className="flex items-center gap-5 mb-4">
              <div className="p-4 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full shadow-lg">
                <Award className="w-10 h-10 text-white" />
              </div>
              <CardTitle className="text-4xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                Our Mission
              </CardTitle>
            </div>
          </CardHeader>
          <CardContent className="relative px-8 pb-8">
            <p className="text-xl text-gray-700 leading-relaxed">
              To provide comprehensive, compassionate, and evidence-based care for women at every stage of life, 
              blending tradition with modern science for the best outcomes. We believe every woman deserves 
              personalized attention, expert guidance, and unwavering support throughout her unique journey.
            </p>
          </CardContent>
        </Card>

        {/* Values Section with improved card interaction */}
        <div className="mb-20 scroll-animate">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <Card 
                key={index} 
                className={`bg-white/70 backdrop-blur-sm border border-white/60 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer ${activeCard === index ? 'ring-2 ring-pink-300' : ''}`}
                onMouseEnter={() => setActiveCard(index)}
                onMouseLeave={() => setActiveCard(null)}
              >
                <CardContent className="p-8">
                  <div className="flex items-start gap-5">
                    <div className="p-4 bg-gradient-to-r from-pink-100 to-purple-100 rounded-full shadow-md">
                      {value.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-800 mb-3">{value.title}</h3>
                      <p className="text-gray-600 leading-relaxed text-lg">{value.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Team Section with enhanced member cards */}
        <Card className="scroll-animate bg-white/80 backdrop-blur-sm border border-white/60 shadow-2xl overflow-hidden rounded-3xl">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5"></div>
          <CardHeader className="relative p-8">
            <div className="flex items-center gap-5 mb-4">
              <div className="p-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full shadow-lg">
                <Users className="w-10 h-10 text-white" />
              </div>
              <CardTitle className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Meet Our Expert Team
              </CardTitle>
            </div>
          </CardHeader>
          <CardContent className="relative px-8 pb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {teamMembers.map((member, index) => (
                <div 
                  key={index} 
                  className="group p-6 bg-gradient-to-r from-white/90 to-white/70 backdrop-blur-sm rounded-2xl border border-white/60 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-gradient-to-r from-pink-100 to-purple-100 rounded-full shadow-md group-hover:scale-110 transition-transform duration-300">
                      {member.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-800 mb-1">{member.name}</h3>
                      <p className="text-pink-600 font-semibold mb-2">{member.role}</p>
                      <p className="text-gray-600 text-sm mb-2">{member.specialization}</p>
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <Award className="w-4 h-4" />
                        <span>{member.experience}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Contact CTA Section with improved buttons */}
      <section className="py-20 px-4 sm:px-8 bg-gradient-to-r from-pink-500/15 to-purple-500/15 mt-16 scroll-animate">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl text-gray-700 mb-10 max-w-2xl mx-auto">
            Connect with our expert team today and experience personalized care that puts you first.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
            <button className="group px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-full font-semibold hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex items-center gap-3">
              <Phone className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              Book Consultation
            </button>
            <button className="px-8 py-4 bg-white/90 backdrop-blur-sm border border-white/60 text-gray-700 rounded-full font-semibold hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex items-center gap-3">
              <Mail className="w-5 h-5" />
              Contact Us
            </button>
          </div>
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