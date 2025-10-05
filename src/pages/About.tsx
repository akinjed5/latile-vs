import { Award, Users, Target, Heart, Briefcase, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function About() {
  const values = [
    {
      icon: Heart,
      title: 'Passion for Design',
      description: 'Every project is approached with genuine enthusiasm and dedication to excellence.'
    },
    {
      icon: Target,
      title: 'Client-Focused',
      description: 'Your vision drives our process. We listen, understand, and deliver beyond expectations.'
    },
    {
      icon: Award,
      title: 'Quality Craftsmanship',
      description: 'We partner with skilled Nigerian artisans to ensure the highest standards.'
    },
    {
      icon: TrendingUp,
      title: 'Innovation',
      description: 'Blending traditional techniques with contemporary design trends and technology.'
    }
  ];

  const team = [
    {
      name: 'Oluwaseun Adeleke',
      role: 'Founder & Creative Director',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'Amara Okafor',
      role: 'Lead Interior Designer',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'Chidi Eze',
      role: 'Project Manager',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'Fatima Bello',
      role: 'Space Planning Specialist',
      image: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[60vh] bg-gray-900">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="About Latiile"
            className="w-full h-full object-cover opacity-40"
          />
        </div>
        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
          <div className="text-white">
            <p className="text-sm tracking-widest mb-4 text-emerald-300">ABOUT US</p>
            <h1 className="text-5xl md:text-6xl font-light leading-tight">
              Transforming Spaces<br />
              <span className="font-normal">Since 2008</span>
            </h1>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
                Our <span className="font-normal">Story</span>
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Founded in 2008 by visionary designer Oluwaseun Adeleke, Latiile began with a simple mission: to create interior spaces that celebrate Nigerian culture while embracing modern design principles. What started as a small studio in Lagos has grown into one of West Africa's most respected interior design firms.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Over the past 15 years, we've had the privilege of transforming hundreds of spaces across Nigeria, from intimate family homes to grand commercial developments. Our work has been featured in leading design publications and recognized with numerous industry awards.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Today, our team of talented designers, artisans, and project managers continues to push boundaries, creating spaces that tell stories and inspire emotions. We believe that great design should be both beautiful and functional, timeless yet contemporary, luxurious yet approachable.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Latiile workspace"
                className="w-full h-64 object-cover"
              />
              <img
                src="https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Design process"
                className="w-full h-64 object-cover mt-8"
              />
              <img
                src="https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Completed project"
                className="w-full h-64 object-cover"
              />
              <img
                src="https://images.pexels.com/photos/2883049/pexels-photo-2883049.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Team collaboration"
                className="w-full h-64 object-cover mt-8"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-emerald-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-5xl font-light text-white mb-2">500+</p>
              <p className="text-emerald-100 text-sm tracking-wider">COMPLETED PROJECTS</p>
            </div>
            <div>
              <p className="text-5xl font-light text-white mb-2">15+</p>
              <p className="text-emerald-100 text-sm tracking-wider">YEARS EXPERIENCE</p>
            </div>
            <div>
              <p className="text-5xl font-light text-white mb-2">20+</p>
              <p className="text-emerald-100 text-sm tracking-wider">DESIGN AWARDS</p>
            </div>
            <div>
              <p className="text-5xl font-light text-white mb-2">98%</p>
              <p className="text-emerald-100 text-sm tracking-wider">CLIENT SATISFACTION</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm tracking-widest text-emerald-700 mb-4">WHAT DRIVES US</p>
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
              Our Core <span className="font-normal">Values</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="bg-white p-8 text-center hover:shadow-lg transition-shadow">
                  <div className="w-16 h-16 bg-emerald-700 flex items-center justify-center mx-auto mb-6">
                    <Icon className="text-white" size={32} />
                  </div>
                  <h3 className="text-xl font-medium text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm tracking-widest text-emerald-700 mb-4">MEET THE TEAM</p>
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
              The Creative Minds<br />
              <span className="font-normal">Behind Latiile</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="group">
                <div className="relative overflow-hidden mb-4">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <h3 className="text-xl font-medium text-gray-900 mb-1">{member.name}</h3>
                <p className="text-sm text-emerald-700">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-light text-white mb-6">
            Let's Create Something<br />
            <span className="font-normal">Beautiful Together</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Ready to start your interior design journey with us?
          </p>
          <Link
            to="/contact"
            className="inline-block px-8 py-4 bg-emerald-700 text-white hover:bg-emerald-800 transition-colors"
          >
            GET STARTED
          </Link>
        </div>
      </section>
    </div>
  );
}
