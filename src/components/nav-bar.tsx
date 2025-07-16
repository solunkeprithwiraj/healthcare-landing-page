import React from "react";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuTrigger,
  NavigationMenuContent,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { Calendar, Video, Apple, Users } from "lucide-react";

const features = [
  { 
    name: "Pregnancy Tracker", 
    href: "/features/tracker",
    icon: <Calendar className="w-4 h-4 text-pink-500" />
  },
  { 
    name: "Video Consultations", 
    href: "/features/consultations",
    icon: <Video className="w-4 h-4 text-blue-500" />
  },
  { 
    name: "Nutrition & Exercise", 
    href: "/features/nutrition",
    icon: <Apple className="w-4 h-4 text-purple-500" />
  },
  { 
    name: "Community Forums", 
    href: "/features/community",
    icon: <Users className="w-4 h-4 text-yellow-500" />
  },
];

const NavBar: React.FC = () => {
  return (
    <nav className="w-full bg-white/70 backdrop-blur-xl border-b border-pink-100 sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo/Brand */}
        <Link
          href="/"
          className="text-2xl font-bold flex items-center gap-2"
        >
          <div className="relative w-8 h-8 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 flex items-center justify-center">
            <span className="text-white font-bold text-sm">P</span>
          </div>
          <div className="text-2xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">PregaCoach</div>
        </Link>
        
        {/* Navigation Menu */}
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href="/">
                <NavigationMenuLink className="px-3 py-2 text-gray-700 hover:text-pink-600 transition-colors">
                  Home
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="px-3 py-2 text-gray-700 hover:text-pink-600 transition-colors">
                Features
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="bg-white/90 backdrop-blur-md min-w-[220px] p-2 rounded-xl border border-pink-100 shadow-lg">
                  {features.map((feature) => (
                    <li key={feature.name}>
                      <Link href={feature.href}>
                        <NavigationMenuLink className="flex items-center gap-2 px-4 py-2 hover:bg-pink-50 rounded-lg transition text-gray-700 hover:text-pink-600 text-sm font-medium">
                          {feature.icon}
                          {feature.name}
                        </NavigationMenuLink>
                      </Link>
                    </li>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/about">
                <NavigationMenuLink className="px-3 py-2 text-gray-700 hover:text-pink-600 transition-colors">
                  About
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/blog">
                <NavigationMenuLink className="px-3 py-2 text-gray-700 hover:text-pink-600 transition-colors">
                  Blog
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/contact">
                <NavigationMenuLink className="px-3 py-2 text-gray-700 hover:text-pink-600 transition-colors">
                  Contact
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        
        {/* CTA Button */}
        <Link href="#get-started">
          <Button className="ml-4 hidden sm:inline-flex bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white border-none shadow-md hover:shadow-lg transition-all duration-300">
            Get Started
          </Button>
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
