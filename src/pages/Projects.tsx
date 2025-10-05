import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const projects = [
  {
    id: 1,
    location: 'VICTORIA ISLAND, LAGOS',
    title: 'Modern Luxury Apartment',
    description: 'A sophisticated blend of contemporary design and African heritage, featuring custom furniture and traditional Adire textiles.',
    image: 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'residential'
  },
  {
    id: 2,
    location: 'IKOYI, LAGOS',
    title: 'Executive Office Suite',
    description: 'Professional workspace designed with natural materials and earth tones, creating a calming yet productive environment.',
    image: 'https://images.pexels.com/photos/2883049/pexels-photo-2883049.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'commercial'
  },
  {
    id: 3,
    location: 'LEKKI, LAGOS',
    title: 'Coastal Villa Residence',
    description: 'Open-plan living spaces with floor-to-ceiling windows, embracing natural light and ocean views with Nigerian artisan craftsmanship.',
    image: 'https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'residential'
  },
  {
    id: 4,
    location: 'ABUJA',
    title: 'Boutique Hotel Lobby',
    description: 'Welcoming entrance featuring locally-sourced materials, statement lighting, and contemporary Nigerian art pieces.',
    image: 'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'hospitality'
  },
  {
    id: 5,
    location: 'IKEJA, LAGOS',
    title: 'Fine Dining Restaurant',
    description: 'Elegant dining space celebrating Nigerian cuisine through warm color palettes and traditional-inspired decor elements.',
    image: 'https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'hospitality'
  },
  {
    id: 6,
    location: 'BANANA ISLAND, LAGOS',
    title: 'Penthouse Living Room',
    description: 'Luxurious entertaining space with bespoke furniture, imported marble, and curated African contemporary art collection.',
    image: 'https://images.pexels.com/photos/1918291/pexels-photo-1918291.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'residential'
  },
  {
    id: 7,
    location: 'PORT HARCOURT',
    title: 'Corporate Headquarters',
    description: 'Multi-floor office design featuring collaborative workspaces, private offices, and impressive reception area.',
    image: 'https://images.pexels.com/photos/1170686/pexels-photo-1170686.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'commercial'
  },
  {
    id: 8,
    location: 'LAGOS ISLAND',
    title: 'Art Gallery & Cafe',
    description: 'Creative space combining exhibition areas with a cozy cafe, showcasing Nigerian contemporary artists.',
    image: 'https://images.pexels.com/photos/1579253/pexels-photo-1579253.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'commercial'
  },
  {
    id: 9,
    location: 'ABUJA',
    title: 'Luxury Villa Estate',
    description: 'Expansive family home with multiple living areas, home cinema, and beautifully landscaped outdoor spaces.',
    image: 'https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'residential'
  }
];

const categories = ['all', 'residential', 'commercial', 'hospitality'];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredProjects = activeCategory === 'all'
    ? projects
    : projects.filter(project => project.category === activeCategory);

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[60vh] bg-gray-900">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Our Projects"
            className="w-full h-full object-cover opacity-40"
          />
        </div>
        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
          <div className="text-white">
            <p className="text-sm tracking-widest mb-4 text-emerald-300">OUR PORTFOLIO</p>
            <h1 className="text-5xl md:text-6xl font-light leading-tight">
              Featured<br />
              <span className="font-normal">Projects</span>
            </h1>
          </div>
        </div>
      </section>

      {/* Projects Gallery */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Explore our collection of thoughtfully designed spaces across Nigeria, where contemporary style meets cultural authenticity.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2.5 text-sm tracking-wider uppercase transition-all ${
                  activeCategory === category
                    ? 'bg-emerald-700 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <Link
                key={project.id}
                to={`/projects/${project.id}`}
                className="group bg-white overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-72 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                <div className="p-6">
                  <p className="text-xs tracking-widest text-emerald-700 mb-2">{project.location}</p>
                  <h3 className="text-xl font-light text-gray-900 mb-3">{project.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>
                  <span className="inline-flex items-center gap-2 text-sm tracking-wide text-emerald-700 hover:text-emerald-800 group-hover/btn">
                    VIEW MORE
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </Link>
            ))}
          </div>

          {/* Pagination Info */}
          <div className="text-center mt-12">
            <p className="text-gray-600 mb-6">
              Showing {filteredProjects.length} of {projects.length} projects
            </p>
            <button className="px-8 py-4 border-2 border-emerald-700 text-emerald-700 hover:bg-emerald-700 hover:text-white transition-all text-sm tracking-wider">
              LOAD MORE PROJECTS
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
            Have a Project<br />
            <span className="font-normal">In Mind?</span>
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Let's collaborate to create a space that tells your unique story.
          </p>
          <Link
            to="/contact"
            className="inline-block px-8 py-4 bg-emerald-700 text-white hover:bg-emerald-800 transition-colors"
          >
            START YOUR PROJECT
          </Link>
        </div>
      </section>
    </div>
  );
}
