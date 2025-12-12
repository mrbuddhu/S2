import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { X } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

interface ContactFormProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  defaultProjectType?: string;
}

export function ContactForm({ open, onOpenChange, defaultProjectType = "" }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    projectType: defaultProjectType || "",
    budget: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Connect to your backend API endpoint
    // Example: await fetch('/api/contact', { method: 'POST', body: JSON.stringify(formData) })
    console.log("Form submitted:", formData);
    // TODO: Show success toast and close modal
    alert("Thank you! We'll be in touch soon. (Connect this to your backend)");
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px] bg-card border-white/10 backdrop-blur-xl">
        <DialogHeader>
          <DialogTitle className="text-2xl font-display text-white">
            Start Your Project
          </DialogTitle>
          <p className="text-muted-foreground text-sm mt-2">
            Tell us about your project and we'll get back to you within 24 hours.
          </p>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6 mt-6">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-white">Name *</Label>
              <Input
                id="name"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="bg-white/5 border-white/10 text-white"
                placeholder="Your name"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email" className="text-white">Email *</Label>
              <Input
                id="email"
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="bg-white/5 border-white/10 text-white"
                placeholder="your@email.com"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="company" className="text-white">Company</Label>
              <Input
                id="company"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                className="bg-white/5 border-white/10 text-white"
                placeholder="Company name"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="budget" className="text-white">Budget Range</Label>
              <select
                id="budget"
                value={formData.budget}
                onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                className="w-full h-10 px-3 rounded-md bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option value="">Select budget</option>
                <option value="1.5k-3k">$1.5k - $3k</option>
                <option value="3k-6k">$3k - $6k</option>
                <option value="6k-15k">$6k - $15k</option>
                <option value="15k+">$15k+</option>
                <option value="retainer">Monthly Retainer</option>
              </select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="projectType" className="text-white">Project Type</Label>
            <select
              id="projectType"
              value={formData.projectType}
              onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
              className="w-full h-10 px-3 rounded-md bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <option value="">Select project type</option>
              <option value="audit">Audit & Optimization</option>
              <option value="new-build">New Product Build</option>
              <option value="rebuild">Rebuild/Redesign</option>
              <option value="branding">Branding & Design</option>
              <option value="development">Web/Mobile Development</option>
              <option value="marketing">Marketing & Growth</option>
              <option value="blockchain">Blockchain Solution</option>
              <option value="ai">AI Integration</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="message" className="text-white">Project Details *</Label>
            <Textarea
              id="message"
              required
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="bg-white/5 border-white/10 text-white min-h-[120px]"
              placeholder="Tell us about your project, goals, timeline, and any specific requirements..."
            />
          </div>

          <Button
            type="submit"
            className="w-full bg-primary hover:bg-primary/90 text-background h-12 text-base font-bold rounded-full"
          >
            Send Message
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}

