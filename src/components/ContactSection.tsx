
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter, Instagram } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Message sent successfully! I\'ll get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactMethods = [
    {
      icon: Mail,
      title: 'Email',
      value: 'yashdaksh620@gmail.com',
      href: 'mailto:yashdaksh620@gmail.com',
      iconClass: 'email',
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+91 7455094390',
      href: 'tel:+91 7455094390',
      iconClass: 'phone',
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Moradabad, Uttar Pradesh',
      href: 'https://maps.google.com',
      iconClass: 'location',
    },
  ];

  const socialLinks = [
    { icon: Github, href: 'https://github.com/yashdaksh09' },
    { icon: Linkedin, href: 'hhttps://www.linkedin.com/in/yash-daksh09/' },
  ];

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="section-title">
          <h2>Let's Work Together</h2>
          <p>Have a project in mind? I'd love to hear about it. Let's discuss how we can bring your ideas to life.</p>
        </div>

        <div className="contact-grid">
          {/* Contact Info */}
          <div className="contact-info">
            <h3>Get In Touch</h3>

            <div className="contact-methods">
              {contactMethods.map((method, index) => {
                const Icon = method.icon;
                return (
                  <a key={index} href={method.href} className="contact-method">
                    <div className={`contact-icon ${method.iconClass}`}>
                      <Icon size={24} />
                    </div>
                    <div className="contact-method-info">
                      <h4>{method.title}</h4>
                      <p>{method.value}</p>
                    </div>
                  </a>
                );
              })}
            </div>

            {/* Social Links */}
            <div className="social-section">
              <h4>Follow Me</h4>
              <div className="social-links">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a key={index} href={social.href} className="social-link">
                      <Icon size={20} />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form">
            <h3>Send Message</h3>
            <form onSubmit={handleSubmit}>
              <div className="form-grid">
                <div className="form-group">
                  <label>Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="form-input"
                    placeholder="Your name"
                  />
                </div>
                <div className="form-group">
                  <label>Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="form-input"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="form-group">
                <label>Subject *</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="form-input"
                  placeholder="What's this about?"
                />
              </div>

              <div className="form-group">
                <label>Message *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="form-textarea"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button type="submit" className="form-submit">
                <Send size={20} />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
