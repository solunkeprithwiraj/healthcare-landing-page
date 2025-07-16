'use client'

import { useState, useEffect } from "react";
import Image from "next/image";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Video, Apple, Users, ChevronLeft, ChevronRight, Star } from "lucide-react";

import hero from "@/assets/images/hero.jpg";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFeature, setActiveFeature] = useState<number | null>(null);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

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

  // Features data
  const features = [
    {
      title: "Week-by-week Pregnancy Tracker",
      description: "Follow your baby's development with detailed insights and personalized milestones for each week of your pregnancy journey.",
      icon: <Calendar className="w-12 h-12 text-pink-500" />,
      color: "pink"
    },
    {
      title: "Doctor Video Consultations",
      description: "Connect with certified obstetricians, gynecologists, and pediatricians through secure video calls from the comfort of your home.",
      icon: <Video className="w-12 h-12 text-blue-500" />,
      color: "blue"
    },
    {
      title: "Nutrition & Exercise Tips",
      description: "Receive customized nutrition plans and safe exercise routines tailored to your specific trimester and health needs.",
      icon: <Apple className="w-12 h-12 text-purple-500" />,
      color: "purple"
    },
    {
      title: "Community Forums",
      description: "Join a supportive community of expectant mothers sharing experiences, advice, and emotional support throughout your pregnancy.",
      icon: <Users className="w-12 h-12 text-yellow-500" />,
      color: "yellow"
    }
  ];

  // Testimonials data
  const testimonials = [
    {
      quote: "PregaCoach has been my pregnancy companion from day one. The weekly updates and doctor consultations gave me confidence during my first pregnancy.",
      name: "Sarah Johnson",
      role: "First-time mom",
      image: "/testimonial-1.jpg" // Placeholder image
    },
    {
      quote: "The nutrition plans helped me manage my gestational diabetes, and the community forums made me feel less alone during difficult times.",
      name: "Maya Patel",
      role: "Mom of twins",
      image: "/testimonial-2.jpg" // Placeholder image
    },
    {
      quote: "As someone with a high-risk pregnancy, having quick access to specialists through video calls was a game-changer. I felt supported every step of the way.",
      name: "Jennifer Williams",
      role: "Mom of three",
      image: "/testimonial-3.jpg" // Placeholder image
    }
  ];

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

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
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="flex flex-col md:flex-row items-center">
            <div className={`md:w-1/2 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 bg-clip-text text-transparent mb-6 leading-tight">
                Your Companion Through Every Step of Motherhood
              </h1>
              <p className="text-lg sm:text-xl text-gray-700 mb-8 max-w-lg">
                Track your pregnancy, get expert advice, and join a community of moms-to-be.
              </p>
              <Button className="px-8 py-6 bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white text-lg rounded-full font-semibold hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex items-center gap-2">
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
           
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 scroll-animate">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent mb-4">
              Features Designed for Your Journey
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Everything you need to navigate your pregnancy with confidence and joy.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card 
                key={index}
                className={`bg-white/70 backdrop-blur-sm border border-white/60 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 ${activeFeature === index ? 'ring-2 ring-pink-300' : ''}`}
                onMouseEnter={() => setActiveFeature(index)}
                onMouseLeave={() => setActiveFeature(null)}
              >
                <CardContent className="p-8 text-center">
                  <div className={`mx-auto p-4 bg-${feature.color}-100 rounded-full shadow-md mb-6 w-20 h-20 flex items-center justify-center`}>
                    {feature.icon}
                  </div>
                  <CardTitle className="text-xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent mb-4">
                    {feature.title}
                  </CardTitle>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-pink-500/5 to-purple-500/5 scroll-animate">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent mb-4">
              What Our Community Says
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Real stories from mothers who found support through PregaCoach.
            </p>
          </div>
          
          <div className="relative">
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-in-out" 
                style={{ transform: `translateX(-${activeTestimonial * 100}%)` }}
              >
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="w-full flex-shrink-0 px-4">
                    <Card className="bg-white/80 backdrop-blur-sm border border-white/60 rounded-3xl shadow-xl p-8 md:p-10">
                      <CardContent className="p-0">
                        <div className="flex flex-col md:flex-row items-center gap-8">
                          <div className="md:w-1/4 flex-shrink-0">
                            <div className="relative w-24 h-24 md:w-32 md:h-32 mx-auto">
                              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-pink-300 to-purple-300 blur-md"></div>
                              <div className="absolute inset-1 rounded-full overflow-hidden">
                                <Image
                                  src={testimonial.image}
                                  alt={testimonial.name}
                                  fill
                                  style={{ objectFit: 'cover' }}
                                />
                              </div>
                            </div>
                          </div>
                          <div className="md:w-3/4">
                            <div className="flex mb-6">
                              {[...Array(5)].map((_, i) => (
                                <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                              ))}
                            </div>
                            <p className="text-lg text-gray-700 italic mb-6">"{testimonial.quote}"</p>
                            <div>
                              <h4 className="text-xl font-bold text-gray-800">{testimonial.name}</h4>
                              <p className="text-pink-500">{testimonial.role}</p>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="flex justify-center mt-8 gap-4">
              <button 
                onClick={prevTestimonial}
                className="p-3 rounded-full bg-white/80 border border-white/60 shadow-md hover:shadow-lg transition-all"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-6 h-6 text-pink-500" />
              </button>
              <div className="flex gap-2 items-center">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      activeTestimonial === index ? 'bg-pink-500 w-8' : 'bg-pink-300'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
              <button 
                onClick={nextTestimonial}
                className="p-3 rounded-full bg-white/80 border border-white/60 shadow-md hover:shadow-lg transition-all"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-6 h-6 text-pink-500" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 scroll-animate">
        <div className="container mx-auto max-w-4xl">
          <Card className="bg-white/80 backdrop-blur-sm border border-white/60 rounded-3xl shadow-2xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-pink-500/5 to-purple-500/5"></div>
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-pink-300/20 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-blue-300/20 rounded-full blur-3xl"></div>
            
            <CardContent className="p-8 md:p-12 text-center relative">
              <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent mb-6">
                Begin Your Motherhood Journey Today
              </h2>
              <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
                Join thousands of expectant mothers who have found support, guidance, and community with PregaCoach.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="px-8 py-6 bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white text-lg rounded-full font-semibold hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  Get Started for Free
                </Button>
                <Button variant="outline" className="px-8 py-6 border-pink-300 text-pink-600 hover:bg-pink-50 text-lg rounded-full font-semibold hover:shadow-lg transition-all duration-300">
                  Learn More
                </Button>
              </div>
            </CardContent>
          </Card>
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
