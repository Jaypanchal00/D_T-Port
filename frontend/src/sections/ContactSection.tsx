import { SiGithub, SiLinkedin, SiX } from 'react-icons/si';
import { Mail, MapPin, Phone } from 'lucide-react';
import Section from '../components/common/Section';
import Reveal from '../components/motion/Reveal';
import GlassCard from '../components/common/GlassCard';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import useContactForm from '../hooks/useContactForm';

const socialLinks = [
  { icon: SiGithub, href: 'https://github.com', label: 'GitHub', color: '#fff' },
  { icon: SiLinkedin, href: 'https://linkedin.com', label: 'LinkedIn', color: '#0A66C2' },
  { icon: SiX, href: 'https://x.com', label: 'X (Twitter)', color: '#fff' },
];

const contactInfo = [
  { icon: Mail, label: 'Email', value: 'john.doe@example.com' },
  { icon: Phone, label: 'Phone', value: '+1 (555) 123-4567' },
  { icon: MapPin, label: 'Location', value: 'San Francisco, CA' },
];

export default function ContactSection() {
  const { formData, errors, isSubmitting, isSuccess, handleChange, handleSubmit } = useContactForm();

  return (
    <Section id="contact" className="bg-gradient-to-b from-transparent to-dark/50">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-center mb-4">
            Get In <span className="bg-gradient-to-r from-neon-cyan to-neon-purple bg-clip-text text-transparent">Touch</span>
          </h2>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="text-center text-muted-foreground text-lg mb-16 max-w-2xl mx-auto">
            Have a project in mind? Let's work together to create something amazing
          </p>
        </Reveal>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <Reveal direction="left" delay={0.3}>
              <h3 className="text-2xl font-bold mb-6">Let's Connect</h3>
            </Reveal>

            {contactInfo.map((info, index) => (
              <Reveal key={info.label} direction="left" delay={0.4 + index * 0.1}>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-neon-cyan to-electric-blue p-[2px]">
                    <div className="w-full h-full rounded-xl bg-dark flex items-center justify-center">
                      <info.icon className="w-5 h-5 text-neon-cyan" />
                    </div>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{info.label}</p>
                    <p className="font-medium">{info.value}</p>
                  </div>
                </div>
              </Reveal>
            ))}

            <Reveal direction="left" delay={0.7}>
              <div className="pt-8">
                <h4 className="text-lg font-semibold mb-4">Follow Me</h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:border-neon-cyan/50 hover:shadow-neon-glow hover:-translate-y-1 transition-all duration-300 group"
                    >
                      <social.icon className="w-5 h-5 group-hover:text-neon-cyan transition-colors" />
                    </a>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>

          {/* Contact Form */}
          <Reveal direction="right" delay={0.3}>
            <GlassCard hover={false}>
              {isSuccess ? (
                <div className="text-center py-12 animate-scale-in">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-neon-cyan to-electric-blue p-[2px] mx-auto mb-6">
                    <div className="w-full h-full rounded-full bg-dark flex items-center justify-center">
                      <svg
                        className="w-10 h-10 text-neon-cyan"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                  <p className="text-muted-foreground">Thank you for reaching out. I'll get back to you soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-sm font-medium">
                      Name
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className="bg-white/5 border-white/10 focus:border-neon-cyan focus:ring-2 focus:ring-neon-cyan/20 transition-all"
                    />
                    {errors.name && <p className="text-sm text-red-400">{errors.name}</p>}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-sm font-medium">
                      Email
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com"
                      className="bg-white/5 border-white/10 focus:border-neon-cyan focus:ring-2 focus:ring-neon-cyan/20 transition-all"
                    />
                    {errors.email && <p className="text-sm text-red-400">{errors.email}</p>}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-sm font-medium">
                      Message
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project..."
                      rows={5}
                      className="bg-white/5 border-white/10 focus:border-neon-cyan focus:ring-2 focus:ring-neon-cyan/20 transition-all resize-none"
                    />
                    {errors.message && <p className="text-sm text-red-400">{errors.message}</p>}
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-neon-cyan to-electric-blue text-dark font-semibold py-6 rounded-xl hover:shadow-neon-glow transition-all duration-300 disabled:opacity-50"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>
              )}
            </GlassCard>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
