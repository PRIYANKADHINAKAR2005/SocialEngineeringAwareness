import React, { useState } from 'react';
import { Mail, Download, Phone, DoorOpen, Handshake, X, AlertTriangle } from 'lucide-react';

interface Attack {
  id: string;
  title: string;
  icon: React.ReactNode;
  description: string;
  example: string;
  warning: string;
  color: 'danger' | 'warning' | 'info';
}

const attacks: Attack[] = [
  {
    id: 'phishing',
    title: 'Phishing',
    icon: <Mail className="w-8 h-8" />,
    description: 'Fraudulent attempts to obtain sensitive information by disguising as trustworthy entities in electronic communications.',
    example: 'Fake emails from "banks" asking you to verify your account details by clicking a suspicious link.',
    warning: 'Always verify sender authenticity before clicking links or downloading attachments.',
    color: 'danger'
  },
  {
    id: 'baiting',
    title: 'Baiting',
    icon: <Download className="w-8 h-8" />,
    description: 'Tempting victims with false promises to pique curiosity or greed, often using infected physical media.',
    example: 'USB drives labeled "Confidential" left in parking lots, containing malware when plugged in.',
    warning: 'Never use unknown USB devices or download suspicious files, even if they seem legitimate.',
    color: 'warning'
  },
  {
    id: 'pretexting',
    title: 'Pretexting',
    icon: <Phone className="w-8 h-8" />,
    description: 'Creating fake scenarios to gain trust and extract information from victims through deception.',
    example: 'Caller pretending to be IT support requesting your login credentials to "fix" your account.',
    warning: 'Always verify identity through official channels before sharing any information.',
    color: 'info'
  },
  {
    id: 'tailgating',
    title: 'Tailgating',
    icon: <DoorOpen className="w-8 h-8" />,
    description: 'Following authorized personnel into restricted areas without proper authentication.',
    example: 'Someone following you through a secure door while carrying coffee, appearing to be an employee.',
    warning: 'Always ensure doors close behind you and verify that everyone has proper access.',
    color: 'danger'
  },
  {
    id: 'quid-pro-quo',
    title: 'Quid Pro Quo',
    icon: <Handshake className="w-8 h-8" />,
    description: 'Offering a service or benefit in exchange for information or access to systems.',
    example: 'Fake tech support offering to "fix" your computer in exchange for remote access.',
    warning: 'Be suspicious of unsolicited offers, especially those requiring system access.',
    color: 'warning'
  }
];

const AttackTypesSection = () => {
  const [selectedAttack, setSelectedAttack] = useState<Attack | null>(null);

  return (
    <section id="attacks" className="py-20 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Know the Enemy
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Understanding different types of social engineering attacks is your first line of defense
          </p>
        </div>

        {/* Attack Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {attacks.map((attack, index) => (
            <div
              key={attack.id}
              className={`attack-card cursor-pointer slide-up ${
                attack.color === 'danger' ? 'danger-card' :
                attack.color === 'warning' ? 'bg-gradient-to-br from-orange-500/20 to-yellow-500/20' :
                'bg-gradient-to-br from-blue-500/20 to-cyan-500/20'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => setSelectedAttack(attack)}
            >
              {/* Card Front */}
              <div className="text-center">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 ${
                  attack.color === 'danger' ? 'bg-primary/20 text-primary' :
                  attack.color === 'warning' ? 'bg-orange-500/20 text-orange-500' :
                  'bg-info/20 text-info'
                } pulse-glow`}>
                  {attack.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{attack.title}</h3>
                <p className="text-muted-foreground mb-4 text-sm">
                  {attack.description.substring(0, 100)}...
                </p>
                <div className="text-accent text-sm font-semibold">
                  Click to learn more →
                </div>
              </div>

              {/* Hover effect indicator */}
              <div className="absolute top-4 right-4">
                <AlertTriangle 
                  className={`w-5 h-5 ${
                    attack.color === 'danger' ? 'text-primary' :
                    attack.color === 'warning' ? 'text-orange-500' :
                    'text-info'
                  } animate-pulse`} 
                />
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedAttack && (
          <div className="modal-backdrop" onClick={() => setSelectedAttack(null)}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center space-x-4">
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full ${
                    selectedAttack.color === 'danger' ? 'bg-primary/20 text-primary' :
                    selectedAttack.color === 'warning' ? 'bg-orange-500/20 text-orange-500' :
                    'bg-info/20 text-info'
                  }`}>
                    {selectedAttack.icon}
                  </div>
                  <h3 className="text-2xl font-bold">{selectedAttack.title}</h3>
                </div>
                <button
                  onClick={() => setSelectedAttack(null)}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <X size={24} />
                </button>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold mb-2">What is it?</h4>
                  <p className="text-muted-foreground">{selectedAttack.description}</p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold mb-2">Real-world Example</h4>
                  <div className="bg-muted/20 border-l-4 border-primary p-4 rounded">
                    <p className="text-sm">{selectedAttack.example}</p>
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-semibold mb-2">How to Protect Yourself</h4>
                  <div className="bg-secondary/20 border-l-4 border-secondary p-4 rounded">
                    <p className="text-sm">{selectedAttack.warning}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default AttackTypesSection;