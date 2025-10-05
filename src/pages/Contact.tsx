import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Visit Us',
      details: ['Plot 123, Admiralty Way', 'Lekki Phase 1, Lagos', 'Nigeria']
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: ['+234 (0) 803 456 7890', '+234 (0) 901 234 5678']
    },
    {
      icon: Mail,
      title: 'Email Us',
      details: ['hello@latiile.com', 'info@latiile.com']
    },
    {
      icon: Clock,
      title: 'Working Hours',
      details: ['Monday - Friday: 9AM - 6PM', 'Saturday: 10AM - 4PM', 'Sunday: Closed']
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[50vh] bg-gray-900">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Contact Us"
            className="w-full h-full object-cover opacity-40"
          />
        </div>
        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
          <div className="text-white">
            <p className="text-sm tracking-widest mb-4 text-emerald-300">GET IN TOUCH</p>
            <h1 className="text-5xl md:text-6xl font-light leading-tight">
              Let's Create<br />
              <span className="font-normal">Something Beautiful</span>
            </h1>
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-1">
              <h2 className="text-3xl font-light text-gray-900 mb-8">
                Contact <span className="font-normal">Information</span>
              </h2>
              <div className="space-y-8">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <div key={index} className="flex gap-4">
                      <div className="w-12 h-12 bg-emerald-700 flex items-center justify-center flex-shrink-0">
                        <Icon className="text-white" size={20} />
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-900 mb-2">{info.title}</h3>
                        {info.details.map((detail, idx) => (
                          <p key={idx} className="text-gray-600 text-sm">
                            {detail}
                          </p>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-12">
                <h3 className="font-medium text-gray-900 mb-4">Follow Us</h3>
                <div className="flex gap-4">
                  <a
                    href="#"
                    className="w-10 h-10 bg-gray-100 hover:bg-emerald-700 hover:text-white flex items-center justify-center transition-colors"
                  >
                    <span className="sr-only">Instagram</span>
                    IG
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 bg-gray-100 hover:bg-emerald-700 hover:text-white flex items-center justify-center transition-colors"
                  >
                    <span className="sr-only">Facebook</span>
                    FB
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 bg-gray-100 hover:bg-emerald-700 hover:text-white flex items-center justify-center transition-colors"
                  >
                    <span className="sr-only">Twitter</span>
                    TW
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 bg-gray-100 hover:bg-emerald-700 hover:text-white flex items-center justify-center transition-colors"
                  >
                    <span className="sr-only">LinkedIn</span>
                    LI
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-light text-gray-900 mb-8">
                Send Us a <span className="font-normal">Message</span>
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 focus:border-emerald-700 focus:outline-none focus:ring-1 focus:ring-emerald-700 transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 focus:border-emerald-700 focus:outline-none focus:ring-1 focus:ring-emerald-700 transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 focus:border-emerald-700 focus:outline-none focus:ring-1 focus:ring-emerald-700 transition-colors"
                      placeholder="+234"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 focus:border-emerald-700 focus:outline-none focus:ring-1 focus:ring-emerald-700 transition-colors"
                    >
                      <option value="">Select a subject</option>
                      <option value="residential">Residential Design</option>
                      <option value="commercial">Commercial Design</option>
                      <option value="hospitality">Hospitality Design</option>
                      <option value="consultation">General Consultation</option>
                      <option value="other">Other Inquiry</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 focus:border-emerald-700 focus:outline-none focus:ring-1 focus:ring-emerald-700 transition-colors resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-emerald-700 text-white hover:bg-emerald-800 transition-colors group"
                >
                  <Send size={20} />
                  SEND MESSAGE
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-[500px] bg-gray-200">
        <div className="w-full h-full flex items-center justify-center text-gray-500">
          <div className="text-center">
            <MapPin size={48} className="mx-auto mb-4" />
            <p className="text-lg">Map integration placeholder</p>
            <p className="text-sm">Plot 123, Admiralty Way, Lekki Phase 1, Lagos</p>
          </div>
        </div>
      </section>

      {/* Additional CTA */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center text-white">
            <div>
              <h3 className="text-2xl font-light mb-2">Schedule a Visit</h3>
              <p className="text-gray-400 text-sm">Book an appointment to visit our showroom</p>
            </div>
            <div>
              <h3 className="text-2xl font-light mb-2">Request a Quote</h3>
              <p className="text-gray-400 text-sm">Get a detailed estimate for your project</p>
            </div>
            <div>
              <h3 className="text-2xl font-light mb-2">Portfolio Review</h3>
              <p className="text-gray-400 text-sm">Explore our complete portfolio in person</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
