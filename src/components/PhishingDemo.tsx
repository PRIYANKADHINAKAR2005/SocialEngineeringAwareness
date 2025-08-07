import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Eye, EyeOff, AlertTriangle, CheckCircle, Lock, Wifi } from 'lucide-react';

const PhishingDemo = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isRevealed, setIsRevealed] = useState(false);
  const [showHints, setShowHints] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsRevealed(true);
  };

  const resetDemo = () => {
    setEmail('');
    setPassword('');
    setIsRevealed(false);
    setShowHints(false);
  };

  const toggleHints = () => {
    setShowHints(!showHints);
  };

  if (isRevealed) {
    return (
      <section className="py-20 px-6 bg-gradient-to-br from-primary/10 to-destructive/10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="zoom-in">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/20 rounded-full mb-6">
              <AlertTriangle className="w-12 h-12 text-primary animate-pulse" />
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
              🎣 You've Been Caught!
            </h2>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              This was a demonstration of a phishing attempt. In a real scenario, your credentials would now be compromised.
            </p>

            <div className="bg-card/50 backdrop-blur-sm border border-primary/20 rounded-lg p-6 mb-8 max-w-2xl mx-auto">
              <h3 className="text-xl font-semibold mb-4 text-primary">Red Flags You Might Have Missed:</h3>
              <ul className="text-left space-y-3 text-muted-foreground">
                <li className="flex items-start space-x-3">
                  <AlertTriangle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>The URL was suspicious (not the real bank domain)</span>
                </li>
                <li className="flex items-start space-x-3">
                  <AlertTriangle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>No HTTPS security indicator was present</span>
                </li>
                <li className="flex items-start space-x-3">
                  <AlertTriangle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Generic greeting instead of personalized message</span>
                </li>
                <li className="flex items-start space-x-3">
                  <AlertTriangle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Urgent language pressuring immediate action</span>
                </li>
              </ul>
            </div>

            <Button onClick={resetDemo} className="btn-safe">
              Try Again with Security Awareness
            </Button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-destructive bg-clip-text text-transparent">
            The Phishing Simulation
          </h2>
          <p className="text-xl text-muted-foreground mb-6">
            Can you spot what's wrong with this "bank" login page?
          </p>
          <Button onClick={toggleHints} variant="outline" className="mb-8">
            {showHints ? 'Hide' : 'Show'} Security Hints
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Fake Login Form */}
          <div className="cyber-card">
            {/* Fake browser bar */}
            <div className="bg-muted/30 rounded-t-lg p-3 mb-0 border-b border-border">
              <div className="flex items-center space-x-2 mb-2">
                <div className="flex space-x-1">
                  <div className="w-3 h-3 bg-destructive rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-secondary rounded-full"></div>
                </div>
              </div>
              <div className="flex items-center space-x-2 bg-background/50 rounded px-3 py-1 text-sm font-mono">
                <Wifi className="w-4 h-4 text-destructive" />
                <span className="text-destructive">http://</span>
                <span className="text-muted-foreground">secure-bank-login.malicious-site.com</span>
              </div>
            </div>

            {/* Fake content */}
            <div className="p-6">
              <div className="text-center mb-6">
                <div className="inline-flex items-center space-x-2 mb-4">
                  <div className="w-8 h-8 bg-primary rounded"></div>
                  <span className="text-xl font-bold">SecureBank</span>
                </div>
                <h3 className="text-lg font-semibold text-destructive mb-2">
                  ⚠️ URGENT: Account Verification Required
                </h3>
                <p className="text-sm text-muted-foreground">
                  Your account has been temporarily suspended. Please verify your credentials immediately to restore access.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Email Address</label>
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Password</label>
                  <div className="relative">
                    <Input
                      type={showPassword ? 'text' : 'password'}
                      placeholder="Enter your password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground"
                    >
                      {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                    </button>
                  </div>
                </div>

                <Button type="submit" className="w-full btn-danger">
                  Verify Account Now
                </Button>

                <p className="text-xs text-center text-muted-foreground">
                  If you don't verify within 24 hours, your account will be permanently deleted.
                </p>
              </form>
            </div>
          </div>

          {/* Security Hints */}
          {showHints && (
            <div className="space-y-6 slide-up">
              <div className="cyber-card">
                <h3 className="text-lg font-semibold mb-4 text-secondary flex items-center">
                  <CheckCircle className="w-5 h-5 mr-2" />
                  Security Red Flags
                </h3>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start space-x-3">
                    <AlertTriangle className="w-4 h-4 text-destructive mt-0.5 flex-shrink-0" />
                    <span>No HTTPS (secure connection) - look for the lock icon</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <AlertTriangle className="w-4 h-4 text-destructive mt-0.5 flex-shrink-0" />
                    <span>Suspicious URL - doesn't match the real bank domain</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <AlertTriangle className="w-4 h-4 text-destructive mt-0.5 flex-shrink-0" />
                    <span>Urgent/threatening language to pressure quick action</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <AlertTriangle className="w-4 h-4 text-destructive mt-0.5 flex-shrink-0" />
                    <span>Generic greeting - real banks use your name</span>
                  </li>
                </ul>
              </div>

              <div className="cyber-card">
                <h3 className="text-lg font-semibold mb-4 text-secondary flex items-center">
                  <Lock className="w-5 h-5 mr-2" />
                  What to Do Instead
                </h3>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                    <span>Navigate to your bank's website directly (don't click email links)</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                    <span>Call your bank using the official phone number</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                    <span>Always verify HTTPS and correct domain names</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                    <span>Never provide credentials through email links</span>
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default PhishingDemo;