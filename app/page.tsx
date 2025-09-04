import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
            <div className="text-center">
              <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 tracking-tight">
                S82 Studio
              </h1>
              <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Architecture that speaks. Spaces that inspire. We design environments that elevate human experience through thoughtful innovation and timeless beauty.
              </p>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Defining Spaces, Creating Stories
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  At S82, we believe architecture is more than just buildings—it's about creating experiences that resonate with the human spirit. Our approach combines contemporary design thinking with sustainable practices to deliver spaces that are both beautiful and responsible.
                </p>
                <p className="text-gray-600 text-lg leading-relaxed">
                  From residential homes to commercial complexes, we bring a unique perspective to every project, ensuring that each space tells its own story while serving its intended purpose with grace and functionality.
                </p>
              </div>
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=800&q=80"
                  alt="Modern architectural design"
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Our Expertise
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                We specialize in creating architectural solutions that blend innovation with practicality.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Residential Design</h3>
                <p className="text-gray-600 leading-relaxed">
                  Custom homes that reflect your lifestyle and aspirations, designed with attention to every detail.
                </p>
              </div>
              
              <div className="text-center p-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Commercial Architecture</h3>
                <p className="text-gray-600 leading-relaxed">
                  Functional and inspiring workspaces that enhance productivity and brand identity.
                </p>
              </div>
              
              <div className="text-center p-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Urban Planning</h3>
                <p className="text-gray-600 leading-relaxed">
                  Sustainable community development that considers both environmental and social impact.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-6">
              Ready to Bring Your Vision to Life?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss how we can create something extraordinary together.
            </p>
            <a
              href="/contact"
              className="inline-block bg-white text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
            >
              Get in Touch
            </a>
          </div>
        </section>
      </main>
      
      <Footer />
      <WhatsAppButton />
    </>
  );
}