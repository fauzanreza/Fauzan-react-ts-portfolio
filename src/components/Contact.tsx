
import React, { useState } from "react";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { cn } from "@/lib/utils";
import { DialogTitle, DialogDescription } from "@/components/ui/dialog";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      console.log("Form submitted:", formData);
      setIsSubmitting(false);
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
      alert("Message sent successfully!");
    }, 1500);
  };

  return (
    <div id="contact" className="py-6">
      <DialogTitle className="mb-2 text-2xl font-bold text-center">Get In Touch</DialogTitle>
      <DialogDescription className="text-center mb-6">
        I'm always open to new opportunities and collaborations
      </DialogDescription>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-6">
        <div className="bg-card p-6 rounded-lg border border-border/40 shadow-sm">
          <h3 className="text-xl font-bold mb-6">Contact Information</h3>
          
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-3 rounded-full text-primary">
                <Mail size={20} />
              </div>
              <div>
                <h4 className="font-medium mb-1">Email</h4>
                <p className="text-muted-foreground">
                  <a
                    href="mailto:fauzan.rez@gmail.com"
                    className="text-primary hover:underline"
                  >
                    fauzan.rez@gmail.com
                  </a>
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-3 rounded-full text-primary">
                <Phone size={20} />
              </div>
              <div>
                <h4 className="font-medium mb-1">Phone</h4>
                <p className="text-muted-foreground">+6282118452010</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-3 rounded-full text-primary">
                <MapPin size={20} />
              </div>
              <div>
                <h4 className="font-medium mb-1">Location</h4>
                <p className="text-muted-foreground">Bandung, Indonesia</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-card p-6 rounded-lg border border-border/40 shadow-sm">
          <h3 className="text-xl font-bold mb-6">Send Message</h3>
          <img
                src={"../../public/qr-wa.jpeg"}
                alt="QR WA"
                className="w-64 h-64"
              />
          
        </div>
      </div>
    </div>
  );
};

export default Contact;
