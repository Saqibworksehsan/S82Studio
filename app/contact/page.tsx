import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function Contact() {
  const address = "saleem , India";
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-white">
        {/* Header Section */}
        <section className="bg-white py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
                Get in Touch
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Ready to start your next architectural project? We'd love to hear from you and discuss how we can bring your vision to life.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="pb-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Phone */}
              <div className="text-center p-8 bg-gray-50 rounded-lg">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gray-900 text-white rounded-lg mb-4">
                  <Phone className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Phone</h3>
                <a
                  href="tel:+919994857720"
                  className="text-gray-600 hover:text-gray-900 transition-colors duration-200"
                >
                  +91 99948 57720
                </a>
              </div>

              {/* Email */}
              <div className="text-center p-8 bg-gray-50 rounded-lg">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gray-900 text-white rounded-lg mb-4">
                  <Mail className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Email</h3>
                <a
                  href="mailto:studio@s82.in"
                  className="text-gray-600 hover:text-gray-900 transition-colors duration-200"
                >
                  studio@s82.in
                </a>
              </div>

              {/* Address */}
              <div className="text-center p-8 bg-gray-50 rounded-lg">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gray-900 text-white rounded-lg mb-4">
                  <MapPin className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Studio</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {address}
                </p>
                <a
                  href={mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-gray-900 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors duration-200"
                >
                  Open in Maps
                </a>
              </div>
            </div>

            {/* Additional Information */}
            <div className="mt-16 text-center">
              <div className="bg-gray-50 rounded-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Studio Hours
                </h3>
                <div className="space-y-2 text-gray-600">
                  <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p>Saturday: 10:00 AM - 4:00 PM</p>
                  <p>Sunday: By appointment only</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
      <WhatsAppButton />
    </>
  );
}