import React, { useState, useEffect } from 'react';
import { Shield, Lock, Eye, Users, AlertTriangle, CheckCircle, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Tip {
  id: number;
  icon: React.ReactNode;
  title: string;
  description: string;
  action: string;
  color: 'primary' | 'secondary' | 'accent' | 'info';
}

const tips: Tip[] = [
  {
    id: 1,
    icon: <Shield className="w-8 h-8" />,
    title: 'Never Click Unknown Links',
    description: 'Hover over links to see the real destination before clicking. Be especially cautious with shortened URLs.',
    action: 'Always verify the sender and URL before clicking any links in emails or messages.',
    color: 'primary'
  },
  {
    id: 2,
    icon: <Eye className="w-8 h-8" />,
    title: 'Verify Before You Trust',
    description: 'When someone requests sensitive information, always verify their identity through official channels.',
    action: 'Call the organization directly using their official phone number, not the one provided in the message.',
    color: 'secondary'
  },
  {
    id: 3,
    icon: <Lock className="w-8 h-8" />,
    title: 'Use Multi-Factor Authentication',
    description: 'MFA adds an extra layer of security even if your password is compromised.',
    action: 'Enable 2FA on all your important accounts: email, banking, social media, and work accounts.',
    color: 'accent'
  },
  {
    id: 4,
    icon: <Users className="w-8 h-8" />,
    title: 'Be Wary of Social Engineering',
    description: 'Attackers often use psychological manipulation to trick you into revealing information.',
    action: 'Question urgent requests and verify the identity of anyone asking for sensitive information.',
    color: 'info'
  },
  {
    id: 5,
    icon: <AlertTriangle className="w-8 h-8" />,
    title: 'Think Before You Share',
    description: 'Personal information on social media can be used to craft convincing phishing attacks.',
    action: 'Review your privacy settings and limit the personal information visible to strangers.',
    color: 'primary'
  },
  {
    id: 6,
    icon: <CheckCircle className="w-8 h-8" />,
    title: 'Keep Software Updated',
    description: 'Security patches protect against known vulnerabilities that attackers exploit.',
    action: 'Enable automatic updates for your operating system, browsers, and security software.',
    color: 'secondary'
  }
];

const PreventionTips = () => {
  const [currentTip, setCurrentTip] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentTip((prev) => (prev + 1) % tips.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToNext = () => {
    setCurrentTip((prev) => (prev + 1) % tips.length);
    setIsAutoPlaying(false);
  };

  const goToPrevious = () => {
    setCurrentTip((prev) => (prev - 1 + tips.length) % tips.length);
    setIsAutoPlaying(false);
  };

  const goToTip = (index: number) => {
    setCurrentTip(index);
    setIsAutoPlaying(false);
  };

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'primary':
        return 'bg-primary/20 text-primary border-primary/20';
      case 'secondary':
        return 'bg-secondary/20 text-secondary border-secondary/20';
      case 'accent':
        return 'bg-accent/20 text-accent border-accent/20';
      case 'info':
        return 'bg-info/20 text-info border-info/20';
      default:
        return 'bg-primary/20 text-primary border-primary/20';
    }
  };

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-background to-muted/20">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
            Protect Yourself
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Essential security tips to keep you safe from social engineering attacks
          </p>
        </div>

        {/* Main Carousel */}
        <div className="relative">
          {/* Current Tip Display */}
          <div className="cyber-card min-h-[400px] mb-8 relative overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentTip * 100}%)` }}
            >
              {tips.map((tip, index) => (
                <div
                  key={tip.id}
                  className="w-full flex-shrink-0 p-8 flex items-center justify-between"
                >
                  <div className="flex-1 max-w-2xl">
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-6 ${getColorClasses(tip.color)} pulse-glow`}>
                      {tip.icon}
                    </div>
                    
                    <h3 className="text-2xl md:text-3xl font-bold mb-4">
                      {tip.title}
                    </h3>
                    
                    <p className="text-lg text-muted-foreground mb-6">
                      {tip.description}
                    </p>
                    
                    <div className="bg-muted/20 border-l-4 border-secondary p-4 rounded">
                      <p className="text-sm font-medium">
                        <strong>Action Step:</strong> {tip.action}
                      </p>
                    </div>
                  </div>

                  {/* Tip number indicator */}
                  <div className="hidden lg:flex items-center justify-center">
                    <div className={`w-24 h-24 rounded-full border-4 ${getColorClasses(tip.color)} flex items-center justify-center text-2xl font-bold`}>
                      {tip.id}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Arrows */}
            <Button
              onClick={goToPrevious}
              variant="outline"
              size="icon"
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-background/80 hover:bg-background"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
            
            <Button
              onClick={goToNext}
              variant="outline"
              size="icon"
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-background/80 hover:bg-background"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>

          {/* Tip Indicators */}
          <div className="flex justify-center space-x-2 mb-8">
            {tips.map((_, index) => (
              <button
                key={index}
                onClick={() => goToTip(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentTip 
                    ? 'bg-accent scale-125' 
                    : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                }`}
              />
            ))}
          </div>

          {/* Auto-play control */}
          <div className="text-center">
            <Button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              variant="outline"
              className="text-sm"
            >
              {isAutoPlaying ? 'Pause' : 'Resume'} Auto-play
            </Button>
          </div>
        </div>

        {/* Quick Tips Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
          <div className="cyber-card text-center">
            <Shield className="w-8 h-8 text-secondary mx-auto mb-3" />
            <h4 className="font-semibold mb-2">Stay Informed</h4>
            <p className="text-sm text-muted-foreground">
              Keep up with the latest security threats and best practices
            </p>
          </div>
          
          <div className="cyber-card text-center">
            <Lock className="w-8 h-8 text-accent mx-auto mb-3" />
            <h4 className="font-semibold mb-2">Trust Your Instincts</h4>
            <p className="text-sm text-muted-foreground">
              If something feels wrong or too good to be true, it probably is
            </p>
          </div>
          
          <div className="cyber-card text-center">
            <Users className="w-8 h-8 text-primary mx-auto mb-3" />
            <h4 className="font-semibold mb-2">Educate Others</h4>
            <p className="text-sm text-muted-foreground">
              Share your knowledge to help protect your friends and family
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PreventionTips;