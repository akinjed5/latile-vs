import { Building2, Home, Hotel, Store, Palette, Ruler, Sofa, Lightbulb, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Services() {
  const mainServices = [
    {
      icon: Home,
      title: 'Residential Design',
      description: 'Transform your home into a personalized sanctuary that reflects your lifestyle and taste. From cozy apartments to sprawling estates, we create living spaces that balance comfort, functionality, and aesthetic beauty.',
      features: ['Space Planning', 'Custom Furniture Design', 'Color Consultation', 'Lighting Design', 'Art & Accessory Curation']
    },
    {
      icon: Building2,
      title: 'Commercial Spaces',
      description: 'Elevate your business environment with professional interior design that enhances productivity and impresses clients. We specialize in creating inspiring workspaces that align with your brand identity.',
      features: ['Office Design', 'Reception Areas', 'Meeting Rooms', 'Open Plan Layouts', 'Breakout Spaces']
    },
    {
      icon: Hotel,
      title: 'Hospitality Design',
      description: 'Create memorable experiences for your guests with thoughtfully designed hospitality spaces. We blend functionality with luxury to deliver environments that drive customer satisfaction and loyalty.',
      features: ['Hotel Interiors', 'Restaurant Design', 'Lobby & Common Areas', 'Guest Room Design', 'Outdoor Spaces']
    }
  ];

  const additionalServices = [
    {
      icon: Palette,
      title: 'Color Consultation',
      description: 'Expert guidance on color schemes that create the perfect mood and atmosphere for your space.'
    },
    {
      icon: Ruler,
      title: 'Space Planning',
      description: 'Optimize your layout for maximum functionality, flow, and visual appeal.'
    },
    {
      icon: Sofa,
      title: 'Furniture Selection',
      description: 'Curated furniture pieces that combine style, comfort, and quality craftsmanship.'
    },
    {
      icon: Lightbulb,
      title: 'Lighting Design',
      description: 'Strategic lighting solutions that enhance ambiance and highlight architectural features.'
    },
    {
      icon: Store,
      title: 'Retail Design',
      description: 'Create shopping experiences that engage customers and drive sales.'
    },
    {
      icon: Building2,
      title: 'Project Management',
      description: 'End-to-end project coordination ensuring timely delivery and quality results.'
    }
  ];

  const process = [
    {
      number: '01',
      title: 'Consultation',
      description: 'We begin with an in-depth discussion to understand your vision, needs, and budget.'
    },
    {
      number: '02',
      title: 'Concept Development',
      description: 'Our team creates initial design concepts, mood boards, and 3D visualizations.'
    },
    {
      number: '03',
      title: 'Design Refinement',
      description: 'We refine the design based on your feedback, selecting materials and finishes.'
    },
    {
      number: '04',
      title: 'Implementation',
      description: 'Our project managers oversee execution, coordinating with contractors and artisans.'
    },
    {
      number: '05',
      title: 'Final Reveal',
      description: 'We complete the finishing touches and present your transformed space.'
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[60vh] bg-gray-900">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/2883049/pexels-photo-2883049.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Our Services"
            className="w-full h-full object-cover opacity-40"
          />
        </div>
        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
          <div className="text-white">
            <p className="text-sm tracking-widest mb-4 text-emerald-300">WHAT WE OFFER</p>
            <h1 className="text-5xl md:text-6xl font-light leading-tight">
              Comprehensive Design<br />
              <span className="font-normal">Services</span>
            </h1>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm tracking-widest text-emerald-700 mb-4">CORE SERVICES</p>
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
              What We <span className="font-normal">Specialize In</span>
            </h2>
          </div>

          <div className="space-y-16">
            {mainServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                    index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                    <div className="w-16 h-16 bg-emerald-700 flex items-center justify-center mb-6">
                      <Icon className="text-white" size={32} />
                    </div>
                    <h3 className="text-3xl font-light text-gray-900 mb-4">{service.title}</h3>
                    <p className="text-gray-600 leading-relaxed mb-6">{service.description}</p>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-3 text-gray-700">
                          <div className="w-1.5 h-1.5 bg-emerald-700 rounded-full"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-2 text-emerald-700 hover:text-emerald-800 transition-colors group"
                    >
                      Request a Consultation
                      <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                  <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                    <img
                      src={`https://images.pexels.com/photos/${
                        index === 0 ? '1643383' : index === 1 ? '2883049' : '271624'
                      }/pexels-photo-${
                        index === 0 ? '1643383' : index === 1 ? '2883049' : '271624'
                      }.jpeg?auto=compress&cs=tinysrgb&w=800`}
                      alt={service.title}
                      className="w-full h-[500px] object-cover"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm tracking-widest text-emerald-700 mb-4">SPECIALIZED SERVICES</p>
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
              Additional <span className="font-normal">Expertise</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {additionalServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={index} className="bg-white p-8 hover:shadow-lg transition-shadow">
                  <div className="w-14 h-14 bg-emerald-700 flex items-center justify-center mb-4">
                    <Icon className="text-white" size={24} />
                  </div>
                  <h3 className="text-xl font-medium text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm tracking-widest text-emerald-700 mb-4">HOW WE WORK</p>
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
              Our Design <span className="font-normal">Process</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              From initial concept to final installation, we guide you through every step with clear communication and expert coordination.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {process.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-emerald-700 text-white flex items-center justify-center mx-auto mb-4 text-2xl font-light">
                  {step.number}
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">{step.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-emerald-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-light text-white mb-6">
            Ready to Start<br />
            <span className="font-normal">Your Project?</span>
          </h2>
          <p className="text-xl text-emerald-100 mb-8">
            Let's discuss how we can bring your vision to life with our expert design services.
          </p>
          <Link
            to="/contact"
            className="inline-block px-8 py-4 bg-white text-emerald-700 hover:bg-gray-100 transition-colors"
          >
            SCHEDULE A CONSULTATION
          </Link>
        </div>
      </section>
    </div>
  );
}
