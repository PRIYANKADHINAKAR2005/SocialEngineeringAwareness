import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown, Shield, AlertTriangle, Users } from 'lucide-react';

const HeroSection = () => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const attacks = ['Phishing...', 'Baiting...', 'Tailgating...', 'Pretexting...', 'Quid Pro Quo...'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % attacks.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setCurrentText('');
    let i = 0;
    const typeInterval = setInterval(() => {
      if (i < attacks[currentIndex].length) {
        setCurrentText(attacks[currentIndex].slice(0, i + 1));
        i++;
      } else {
        clearInterval(typeInterval);
      }
    }, 100);

    return () => clearInterval(typeInterval);
  }, [currentIndex]);

  const scrollToAttacks = () => {
    document.getElementById('attacks')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-background overflow-hidden">
      {/* Animated background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(189,255,233,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(189,255,233,0.03)_1px,transparent_1px)] bg-[size:100px_100px] opacity-20" />
      
      {/* Main content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        {/* Animated fishing hook */}
        <div className="relative mb-8">
          <div className="hook-animation inline-block">
            <div className="relative">
              <AlertTriangle size={80} className="text-primary mx-auto mb-4 animate-pulse-glow" />
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-1 h-20 bg-gradient-to-b from-muted to-transparent" />
            </div>
          </div>
        </div>

        {/* Main headline */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
          Don't Get Caught
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-8">
          Learn the tricks before they trick you!
        </p>

        {/* Animated typing effect */}
        <div className="h-16 flex items-center justify-center mb-8">
          <span className="text-2xl md:text-3xl font-mono text-accent">
            {currentText}
            <span className="animate-blink text-accent">|</span>
          </span>
        </div>

        {/* CTA Button */}
        <Button 
          onClick={scrollToAttacks}
          className="btn-cyber text-lg px-8 py-4 mb-8 group"
        >
          Explore Now
          <ArrowDown className="ml-2 w-5 h-5 group-hover:animate-bounce" />
        </Button>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <div className="cyber-card text-center">
            <Shield className="mx-auto mb-2 text-secondary" size={32} />
            <div className="text-2xl font-bold text-secondary">95%</div>
            <div className="text-sm text-muted-foreground">of attacks start with phishing</div>
          </div>
          <div className="cyber-card text-center">
            <AlertTriangle className="mx-auto mb-2 text-primary" size={32} />
            <div className="text-2xl font-bold text-primary">$4.45M</div>
            <div className="text-sm text-muted-foreground">average cost of a data breach</div>
          </div>
          <div className="cyber-card text-center">
            <Users className="mx-auto mb-2 text-accent" size={32} />
            <div className="text-2xl font-bold text-accent">88%</div>
            <div className="text-sm text-muted-foreground">of breaches involve human error</div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="text-muted-foreground" size={24} />
      </div>
    </section>
  );
};

export default HeroSection;