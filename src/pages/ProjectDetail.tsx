import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, MapPin, User, Share2 } from 'lucide-react';

const projectsData = {
  '1': {
    location: 'Victoria Island, Lagos',
    title: 'Modern Luxury Apartment',
    description: 'A sophisticated blend of contemporary design and African heritage, featuring custom furniture and traditional Adire textiles.',
    client: 'Private Residence',
    date: 'March 2024',
    area: '2,500 sq ft',
    category: 'Residential Design',
    challenge: 'The client desired a space that would reflect their Nigerian heritage while maintaining a contemporary, minimalist aesthetic. The challenge was to balance traditional elements with modern design without compromising either style.',
    solution: 'We incorporated custom-designed furniture featuring Adire textile patterns, used locally-sourced materials, and created a color palette inspired by Nigerian landscapes. The result is a harmonious blend of contemporary luxury and cultural authenticity.',
    features: [
      'Custom Adire textile upholstery',
      'Handcrafted Nigerian wood furniture',
      'Statement lighting from local artisans',
      'Open-plan living and dining areas',
      'Integrated smart home technology'
    ],
    images: [
      'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg?auto=compress&cs=tinysrgb&w=800'
    ]
  },
  '2': {
    location: 'Ikoyi, Lagos',
    title: 'Executive Office Suite',
    description: 'Professional workspace designed with natural materials and earth tones, creating a calming yet productive environment.',
    client: 'Tech Innovation Hub',
    date: 'January 2024',
    area: '4,200 sq ft',
    category: 'Commercial Design',
    challenge: 'Creating a workspace that promotes productivity and collaboration while maintaining a calm, professional atmosphere. The space needed to accommodate both focused work and team meetings.',
    solution: 'We designed flexible workspaces with acoustic solutions, natural materials, and abundant natural light. Collaboration zones were integrated seamlessly with private work areas, all unified by a sophisticated earth-tone palette.',
    features: [
      'Ergonomic workstations',
      'Acoustic panel installations',
      'Collaborative meeting spaces',
      'Biophilic design elements',
      'Advanced audio-visual systems'
    ],
    images: [
      'https://images.pexels.com/photos/2883049/pexels-photo-2883049.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1170686/pexels-photo-1170686.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1579253/pexels-photo-1579253.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=800'
    ]
  },
  '3': {
    location: 'Lekki, Lagos',
    title: 'Coastal Villa Residence',
    description: 'Open-plan living spaces with floor-to-ceiling windows, embracing natural light and ocean views with Nigerian artisan craftsmanship.',
    client: 'Private Residence',
    date: 'November 2023',
    area: '5,800 sq ft',
    category: 'Residential Design',
    challenge: 'Maximizing the stunning ocean views while creating distinct living zones in an open-plan layout. The design needed to withstand coastal conditions while maintaining elegance.',
    solution: 'Floor-to-ceiling windows frame the ocean views, while thoughtful furniture placement defines different zones. We used durable materials suited to coastal environments and incorporated natural textures that complement the seaside setting.',
    features: [
      'Panoramic ocean views',
      'Indoor-outdoor living integration',
      'Weather-resistant luxury materials',
      'Infinity edge pool design',
      'Custom outdoor kitchen'
    ],
    images: [
      'https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1918291/pexels-photo-1918291.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=800'
    ]
  }
};

export default function ProjectDetail() {
  const { id } = useParams<{ id: string }>();
  const project = id ? projectsData[id as keyof typeof projectsData] : null;

  if (!project) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-light text-gray-900 mb-4">Project Not Found</h1>
          <Link to="/projects" className="text-emerald-700 hover:text-emerald-800">
            View All Projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-20">
      {/* Hero Image */}
      <section className="relative h-[70vh]">
        <img
          src={project.images[0]}
          alt={project.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="max-w-7xl mx-auto">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 text-white hover:text-emerald-300 transition-colors mb-6"
            >
              <ArrowLeft size={20} />
              Back to Projects
            </Link>
            <p className="text-sm tracking-widest text-emerald-300 mb-2">{project.location}</p>
            <h1 className="text-5xl md:text-6xl font-light text-white">{project.title}</h1>
          </div>
        </div>
      </section>

      {/* Project Info */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 text-emerald-700 mb-2">
                <User size={20} />
                <span className="text-sm font-medium">CLIENT</span>
              </div>
              <p className="text-gray-900">{project.client}</p>
            </div>
            <div>
              <div className="flex items-center gap-2 text-emerald-700 mb-2">
                <Calendar size={20} />
                <span className="text-sm font-medium">COMPLETED</span>
              </div>
              <p className="text-gray-900">{project.date}</p>
            </div>
            <div>
              <div className="flex items-center gap-2 text-emerald-700 mb-2">
                <MapPin size={20} />
                <span className="text-sm font-medium">AREA</span>
              </div>
              <p className="text-gray-900">{project.area}</p>
            </div>
            <div>
              <div className="flex items-center gap-2 text-emerald-700 mb-2">
                <Share2 size={20} />
                <span className="text-sm font-medium">CATEGORY</span>
              </div>
              <p className="text-gray-900">{project.category}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-light text-gray-900 mb-6">
                Project <span className="font-normal">Overview</span>
              </h2>
              <p className="text-gray-600 leading-relaxed mb-8 text-lg">
                {project.description}
              </p>

              <h3 className="text-2xl font-light text-gray-900 mb-4">The Challenge</h3>
              <p className="text-gray-600 leading-relaxed mb-8">
                {project.challenge}
              </p>

              <h3 className="text-2xl font-light text-gray-900 mb-4">Our Solution</h3>
              <p className="text-gray-600 leading-relaxed">
                {project.solution}
              </p>
            </div>

            <div>
              <div className="bg-gray-50 p-8">
                <h3 className="text-xl font-medium text-gray-900 mb-6">Key Features</h3>
                <ul className="space-y-3">
                  {project.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-emerald-700 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 bg-emerald-700 p-8 text-white">
                <h3 className="text-xl font-light mb-4">Interested in a Similar Project?</h3>
                <p className="text-emerald-100 mb-6 text-sm">
                  Let's discuss how we can bring your vision to life.
                </p>
                <Link
                  to="/contact"
                  className="inline-block w-full px-6 py-3 bg-white text-emerald-700 text-center hover:bg-gray-100 transition-colors"
                >
                  GET IN TOUCH
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-light text-gray-900 mb-12 text-center">
            Project <span className="font-normal">Gallery</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {project.images.map((image, index) => (
              <div key={index} className="relative h-96 overflow-hidden group">
                <img
                  src={image}
                  alt={`${project.title} - Image ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Projects */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-light text-gray-900">
              More <span className="font-normal">Projects</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {['1', '2', '3'].filter(projId => projId !== id).slice(0, 3).map((projId) => {
              const relatedProject = projectsData[projId as keyof typeof projectsData];
              return (
                <Link
                  key={projId}
                  to={`/projects/${projId}`}
                  className="group"
                >
                  <div className="relative h-64 overflow-hidden mb-4">
                    <img
                      src={relatedProject.images[0]}
                      alt={relatedProject.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <p className="text-xs tracking-widest text-emerald-700 mb-2">{relatedProject.location}</p>
                  <h3 className="text-xl font-light text-gray-900 group-hover:text-emerald-700 transition-colors">
                    {relatedProject.title}
                  </h3>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
