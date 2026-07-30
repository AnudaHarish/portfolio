import { Mail, Map, Phone, Send } from "lucide-react";
import { cn } from "../libs/utils";

export default function ContactSection(){
  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary">Touch</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Thank you for visiting my portfolio. If you're looking for a dedicated Software Engineer to join your team or collaborate on a project, don't hesitate to contact me. I look forward to connecting with you.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h3 className="text-2xl font-semi-bold mb-6">
              Contact Information
            </h3>
            <div className="space-y-6 justify-center">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary"/>{" "}
                </div>
                <div>
                  <h4 className="font-medium">Email</h4>
                  <a href="mailto:anudadamsith@gmail.com"
                  className="text-muted-foreground hover:text-primary transition-colors">
                    anudadamsith@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone className="h-6 w-6 text-primary"/>{" "}
                </div>
                <div>
                  <h4 className="font-medium">Phone</h4>
                  <a href="tel:(+94)717459838"
                  className="text-muted-foreground hover:text-primary transition-colors">
                    (+94)717459838
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Map className="h-6 w-6 text-primary"/>{" "}
                </div>
                <div>
                  <h4 className="font-medium">Location</h4>
                  <a
                  className="text-muted-foreground hover:text-primary transition-colors">
                    Colombo, Sri Lanka
                  </a>
                </div>
              </div>
            </div>
            <div className="pt-8">
              <h4 className="font-medium mb-4">Connect With Me</h4>
              <div className="flex space-x-4 justify-center">
                <a
                  href="https://www.linkedin.com/in/anuda-harishchandra-10503221a"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className="bg-violet-400"
                    src="/linkedin.png"
                    alt="linkedin"
                    width="40"
                  />
                </a>
                <a
                  href="https://www.facebook.com/anuda.harishchandra?rdid=Vt5n7Qtf7BiQMO2a&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F162hC2fnDbo%2F%3Fref%3D1#"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className="bg-violet-400"
                    src="/facebook.png"
                    alt="facebook"
                    width="40"
                  />
                </a>
                <a
                  href="https://www.instagram.com/anuda_harish?igsh=Z2g2bWpocTdtdm00"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className="bg-violet-400"
                    src="/instagram.png"
                    alt="facebook"
                    width="40"
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="bg-card p-8 rounded-lg shadow-xs">
            <h3 className="text-2xl font-semibold mb-6">Send a message</h3>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">Your Name</label>
                <input 
                type="text" 
                id="name" 
                name="name" 
                required 
                autoFocus 
                autoComplete="on"
                className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                placeholder="Joe Wilson"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">Your Email</label>
                <input 
                type="email" 
                id="email" 
                name="email" 
                required 
                autoComplete="on"
                className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                placeholder="joe@gmail.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">Your Message</label>
                <textarea 
                id="message" 
                name="message" 
                required 
                autoComplete="on"
                className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none"
                placeholder="Your Message"
                />
              </div>
              <button 
              type="submit"
              disabled
              className={cn("cosmic-button w-full flex items-center justify-center gap-2")}
              >
                Send Message
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}