import { useState } from "react";
import { Mail, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import SocialLinks from "@/components/SocialLinks";
import EmailImage from "@/components/EmailImage";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Create mailto link as fallback for static hosting
    const subject = encodeURIComponent(`Contact from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`,
    );
    const mailtoLink = `mailto:webmaster@example.com?subject=${subject}&body=${body}`;

    window.location.href = mailtoLink;

    toast({
      title: "Opening email client...",
      description: "Your default email app will open with the message.",
    });
  };

  return (
    <div className="min-h-screen pt-24 pb-16 px-6">
      <div className="container mx-auto max-w-2xl">
        {/* Header */}
        <div className="text-center mb-12 animate-slide-up">
          <h1 className="text-3xl md:text-4xl font-display font-medium text-foreground mb-4">Get in Touch</h1>
          <p className="text-muted-foreground max-w-md mx-auto">Have a question or want to work together?</p>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="space-y-6 animate-slide-up" style={{ animationDelay: "100ms" }}>
          <div className="space-y-2">
            <Label htmlFor="name" className="text-foreground">
              Name
            </Label>
            <Input
              id="name"
              name="name"
              type="text"
              placeholder="Your name"
              value={formData.name}
              onChange={handleChange}
              required
              className="bg-card border-border text-foreground placeholder:text-muted-foreground focus:border-muted-foreground"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="text-foreground">
              Email
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="your@email.com"
              value={formData.email}
              onChange={handleChange}
              required
              className="bg-card border-border text-foreground placeholder:text-muted-foreground focus:border-muted-foreground"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="message" className="text-foreground">
              Message
            </Label>
            <Textarea
              id="message"
              name="message"
              placeholder="Your message..."
              value={formData.message}
              onChange={handleChange}
              required
              rows={6}
              className="bg-card border-border text-foreground placeholder:text-muted-foreground focus:border-muted-foreground resize-none"
            />
          </div>

          <Button type="submit" className="w-full bg-foreground text-background hover:bg-foreground/90 font-medium">
            <Send size={16} className="mr-2" />
            Send Message
          </Button>
        </form>

        {/* Alternative Contact */}
        <div
          className="mt-12 pt-8 border-t border-border text-center animate-slide-up"
          style={{ animationDelay: "200ms" }}
        >
          <p className="text-muted-foreground text-sm mb-4">Or reach out directly:</p>
          <div className="inline-flex items-center gap-2 text-foreground">
            <Mail size={18} />
            <EmailImage className="text-foreground" />
          </div>

          <div className="mt-6">
            <SocialLinks className="justify-center" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
