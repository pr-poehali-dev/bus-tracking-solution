import { useState, useEffect } from 'react';
import Navigation from '@/components/sections/Navigation';
import HeroSection from '@/components/sections/HeroSection';
import ContentSections from '@/components/sections/ContentSections';

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-accent/20">
      <Navigation scrollToSection={scrollToSection} />
      <HeroSection isVisible={isVisible} />
      <ContentSections />
    </div>
  );
};

export default Index;
