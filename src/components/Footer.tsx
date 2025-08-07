import React from 'react';
import { Shield, Mail, Github, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative bg-background border-t border-border overflow-hidden">
      {/* Animated wave background */}
      <div className="absolute inset-0 opacity-30">
        <svg
          className="absolute bottom-0 w-[200%] h-32 wave-animation"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,60 C150,100 350,0 600,60 C850,120 1050,20 1200,60 L1200,120 L0,120 Z"
            fill="url(#wave-gradient)"
          />
          <defs>
            <linearGradient id="wave-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="hsl(var(--accent))" stopOpacity="0.3" />
              <stop offset="50%" stopColor="hsl(var(--primary))" stopOpacity="0.5" />
              <stop offset="100%" stopColor="hsl(var(--secondary))" stopOpacity="0.3" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="p-2 bg-gradient-to-br from-primary to-accent rounded-lg">
                <Shield className="w-8 h-8 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-xl font-bold">CyberGuard Awareness</h3>
                <p className="text-sm text-muted-foreground">Stay Alert. Stay Safe.</p>
              </div>
            </div>
            <p className="text-muted-foreground max-w-md mb-6">
              Empowering individuals and organizations with the knowledge to recognize and defend against social engineering attacks.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="p-2 bg-muted/20 hover:bg-primary/20 rounded-lg transition-colors group"
                aria-label="Email"
              >
                <Mail className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
              <a
                href="#"
                className="p-2 bg-muted/20 hover:bg-accent/20 rounded-lg transition-colors group"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5 text-muted-foreground group-hover:text-accent transition-colors" />
              </a>
              <a
                href="#"
                className="p-2 bg-muted/20 hover:bg-info/20 rounded-lg transition-colors group"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5 text-muted-foreground group-hover:text-info transition-colors" />
              </a>
              <a
                href="#"
                className="p-2 bg-muted/20 hover:bg-secondary/20 rounded-lg transition-colors group"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-muted-foreground group-hover:text-secondary transition-colors" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Learn More</h4>
            <ul className="space-y-3">
              <li>
                <a href="#attacks" className="text-muted-foreground hover:text-accent transition-colors">
                  Attack Types
                </a>
              </li>
              <li>
                <a href="#demo" className="text-muted-foreground hover:text-accent transition-colors">
                  Phishing Demo
                </a>
              </li>
              <li>
                <a href="#tips" className="text-muted-foreground hover:text-accent transition-colors">
                  Prevention Tips
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
                  Resources
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Resources</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
                  Security Guidelines
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
                  Incident Reporting
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
                  Training Materials
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
                  Contact Support
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Alert Banner */}
        <div className="cyber-card mb-8 bg-gradient-to-r from-primary/10 to-destructive/10 border-primary/20">
          <div className="flex items-center space-x-4">
            <div className="p-2 bg-primary/20 rounded-lg">
              <Shield className="w-6 h-6 text-primary pulse-glow" />
            </div>
            <div>
              <h4 className="font-semibold text-primary">Security Alert</h4>
              <p className="text-sm text-muted-foreground">
                95% of successful cyber attacks start with social engineering. Stay vigilant!
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm mb-4 md:mb-0">
            © 2024 CyberGuard Awareness. Built for educational purposes.
          </p>
          <div className="flex items-center space-x-6 text-sm">
            <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
              Terms of Use
            </a>
            <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
              Accessibility
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;