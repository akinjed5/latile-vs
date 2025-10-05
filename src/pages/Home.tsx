import { Link } from 'react-router-dom';
import { ArrowRight, Award, Users, Building2, Sparkles } from 'lucide-react';

export default function Home() {
  const services = [
    {
      icon: Building2,
      title: 'Interior Design',
      description: 'Transform your indoor spaces with sophisticated Nigerian-inspired aesthetics and modern comfort.'
    },
    {
      icon: Sparkles,
      title: 'Space Planning',
      description: 'Optimize your space layout for functionality, flow, and visual harmony in residential and commercial settings.'
    },
    {
      icon: Award,
      title: 'Luxury Furnishing',
      description: 'Curated selection of premium furniture and decor pieces that blend contemporary and African heritage.'
    }
  ];

  const projects = [
    {
      id: 1,
      location: 'Victoria Island, Lagos',
      title: 'Modern Luxury Apartment',
      image: 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 2,
      location: 'Ikoyi, Lagos',
      title: 'Executive Office Suite',
      image: 'https://images.pexels.com/photos/2883049/pexels-photo-2883049.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 3,
      location: 'Lekki, Lagos',
      title: 'Coastal Villa Residence',
      image: 'https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 4,
      location: 'Abuja',
      title: 'Boutique Hotel Lobby',
      image: 'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ];

  const testimonials = [
    {
      name: 'Adebayo Okonkwo',
      role: 'CEO, Tech Innovation Hub',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
      quote: 'Latiile transformed our office space into a vibrant environment that reflects our innovative culture.'
    },
    {
      name: 'Chioma Nwosu',
      role: 'Homeowner, Victoria Island',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400',
      quote: 'Working with Latiile was an absolute pleasure. They brought my vision to life beautifully.'
    },
    {
      name: 'Ibrahim Musa',
      role: 'Restaurant Owner',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400',
      quote: 'The design exceeded all expectations. Our guests constantly compliment the ambiance.'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen pt-20">
        <div className="absolute inset-0">
          <img
            src="/images/portfolio/landing.jpg"
            alt="Latiile Interior Design"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30"></div>
        </div>

        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
          <div className="max-w-6xl mx-auto text-center text-white">
            {/* <p className="text-sm tracking-widest mb-4 text-emerald-300">NIGERIAN INTERIOR EXCELLENCE</p> */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
              We Design Your Space
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl mx-auto leading-relaxed">
              Latiile brings contemporary African aesthetics to life through thoughtful interior design that celebrates Nigerian culture and modern sophistication.
            </p>
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 px-8 py-4 bg-emerald-700 text-white hover:bg-emerald-800 transition-all group"
            >
              SEE OUR PROJECTS
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-white/50 rounded-full animate-bounce"></div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="About Latiile"
                className="w-full h-[600px] object-cover"
              />
            </div>
            <div>
              <div className="inline-block px-6 py-3 bg-emerald-700 text-white mb-6">
                <p className="text-4xl font-light">15+</p>
                <p className="text-sm tracking-wider">YEARS OF EXPERIENCE</p>
              </div>
              <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
                Crafting Spaces That<br />
                <span className="font-normal">Tell Your Story</span>
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                For over 15 years, Latiile has been at the forefront of interior design in Nigeria, creating spaces that seamlessly blend contemporary aesthetics with rich African heritage. Our award-winning team of designers and artisans work closely with each client to bring their vision to life.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <Award className="text-emerald-700 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700">Award-winning design excellence recognized across West Africa</span>
                </li>
                <li className="flex items-start gap-3">
                  <Users className="text-emerald-700 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700">Trusted by over 500+ satisfied residential and commercial clients</span>
                </li>
                <li className="flex items-start gap-3">
                  <Building2 className="text-emerald-700 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700">Portfolio spanning luxury residences, offices, and hospitality venues</span>
                </li>
              </ul>
              <Link
                to="/about"
                className="inline-block px-8 py-4 bg-gray-900 text-white hover:bg-gray-800 transition-colors"
              >
                ABOUT US
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm tracking-widest text-emerald-700 mb-4">WHAT WE OFFER</p>
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
              Make Your Dream<br />
              <span className="font-normal">With Us</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="bg-white p-8 hover:shadow-xl transition-all group"
                >
                  <div className="w-16 h-16 bg-emerald-700 flex items-center justify-center mb-6 group-hover:bg-emerald-800 transition-colors">
                    <Icon className="text-white" size={32} />
                  </div>
                  <h3 className="text-2xl font-light text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">{service.description}</p>
                  <Link
                    to="/services"
                    className="inline-flex items-center gap-2 text-emerald-700 hover:text-emerald-800 transition-colors group/link"
                  >
                    Learn More
                    <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm tracking-widest text-emerald-700 mb-4">OUR PORTFOLIO</p>
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
              Our Latest <span className="font-normal">Projects</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <Link
                key={project.id}
                to={`/projects/${project.id}`}
                className="group bg-white overflow-hidden hover:shadow-xl transition-all"
              >
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <div className="p-6">
                  <p className="text-xs tracking-widest text-emerald-700 mb-2">{project.location}</p>
                  <h3 className="text-2xl font-light text-gray-900 mb-4">{project.title}</h3>
                  <span className="inline-flex items-center gap-2 text-emerald-700 group-hover:text-emerald-800">
                    View More
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/projects"
              className="inline-block px-8 py-4 border-2 border-emerald-700 text-emerald-700 hover:bg-emerald-700 hover:text-white transition-all"
            >
              VIEW ALL PROJECTS
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm tracking-widest text-emerald-700 mb-4">CLIENT EXPERIENCES</p>
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
              What Our <span className="font-normal">Clients Say</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8">
                <p className="text-gray-700 leading-relaxed mb-6 italic">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-medium text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-emerald-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-light text-white mb-6">
            Ready to Transform<br />
            <span className="font-normal">Your Space?</span>
          </h2>
          <p className="text-xl text-emerald-100 mb-8">
            Let's discuss your interior design project and bring your vision to life.
          </p>
          <Link
            to="/contact"
            className="inline-block px-8 py-4 bg-white text-emerald-700 hover:bg-gray-100 transition-colors"
          >
            GET IN TOUCH
          </Link>
        </div>
      </section>
    </div>
  );
}
