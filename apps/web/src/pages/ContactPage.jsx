import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Instagram, Facebook } from 'lucide-react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';
import WhatsAppButton from '@/components/WhatsAppButton';
import { Toaster } from '@/components/ui/toaster';

// Create a custom SVG icon to avoid missing image issues with default Leaflet markers in React
const customMarkerIcon = new L.Icon({
  iconUrl: 'data:image/svg+xml;base64,' + btoa(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#0891b2" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
      <circle cx="12" cy="10" r="3"></circle>
    </svg>
  `),
  iconSize: [38, 38],
  iconAnchor: [19, 38],
  popupAnchor: [0, -38],
});

const ContactPage = () => {
  const mapCenter = [11.483192, 77.888330];

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      content: '+91 96290 44797',
      link: 'tel:+919629044797'
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'support@ceragcare.com',
      link: 'mailto:support@ceragcare.com'
    },
    {
      icon: MapPin,
      title: 'Location',
      content: '#3.490B, Akkamapettai, Sankari, Salem, Tamil Nadu, India',
      link: null
    },
    {
      icon: Clock,
      title: 'Business hours',
      content: 'Monday - Saturday: 9:00 AM - 8:00 PM',
      link: null
    },
    {
      icon: Instagram,
      title: 'Instagram',
      content: 'cerag.dental',
      link: "https://www.instagram.com/cerag.dental/"
    },
    {
      icon: Facebook,
      title: 'Facebook',
      content: 'CERAG',
      link: "https://www.facebook.com/CERAGsivanagarajan18/"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Contact Us - CERAG Dental Clinic & Oral Cares</title>
        <meta
          name="description"
          content="Get in touch with CERAG for dental product inquiries. Call +91 96290 44797 or email support@ceragcare.com. Located in Salem, Tamil Nadu."
        />
      </Helmet>

      <Header />
      <Toaster />

      <main className="pt-20">
        <section className="section-padding bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto text-center"
            >
              <h1 className="text-white mb-6">Get in touch</h1>
              <p className="text-xl text-slate-200 leading-relaxed">
                Have questions about our products? We're here to help you find the right dental care solutions
              </p>
            </motion.div>
          </div>
        </section>

        <section className="section-padding bg-background">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="mb-8">Send us a message</h2>
                <ContactForm />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="space-y-8"
              >
                <div>
                  <h2 className="mb-8">Contact information</h2>
                  <div className="space-y-6">
                    {contactInfo.map((info, index) => (
                      <div key={index} className="flex items-start gap-4">
                        <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary flex-shrink-0">
                          <info.icon className="w-6 h-6" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-muted-foreground uppercase tracking-wide mb-1">
                            {info.title}
                          </p>
                          {info.link ? (
                            <a
                              href={info.link}
                              className="text-foreground hover:text-primary transition-colors duration-200 leading-relaxed"
                            >
                              {info.content}
                            </a>
                          ) : (
                            <p className="text-foreground leading-relaxed">{info.content}</p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-muted/50 rounded-2xl p-8">
                  <h3 className="text-xl font-semibold mb-4">Prefer instant messaging?</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Connect with us on WhatsApp for quick responses to your questions about our dental products.
                  </p>
                  <WhatsAppButton className="w-full" />
                </div>

                <div className="bg-card rounded-2xl p-8 shadow-lg">
                  <h3 className="text-xl font-semibold mb-4">Visit our clinic</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Located in Sankari, Salem, our clinic is easily accessible. We welcome walk-in consultations during business hours, though appointments are recommended for product demonstrations.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="section-padding bg-muted/30 border-t border-border">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-center mb-10">
                <h2 className="mb-4">Find us here</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Visit our clinic for professional consultations and product demonstrations.
                </p>
              </div>
              
              <div className="w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-lg border border-border relative z-0 bg-card">
                <MapContainer 
                  center={mapCenter} 
                  zoom={15} 
                  scrollWheelZoom={false} 
                  className="w-full h-full"
                >
                  <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  />
                  <Marker position={mapCenter} icon={customMarkerIcon}>
                    <Popup className="custom-popup">
                      <div className="text-center">
                        <strong className="block text-base text-foreground mb-1">CERAG Dental Clinic & Oral Cares</strong>
                        <span className="text-sm text-muted-foreground leading-tight block">
                          #3.490B, Akkamapettai, Sankari,<br />
                          Salem, Tamil Nadu, India
                        </span>
                      </div>
                    </Popup>
                  </Marker>
                </MapContainer>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="section-padding bg-background">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto text-center"
            >
              <h2 className="mb-6">Frequently asked questions</h2>
              <div className="space-y-4 text-left">
                <div className="bg-card rounded-xl p-6 shadow-sm border border-border">
                  <h3 className="text-lg font-semibold mb-2">How can I purchase CERAG products?</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Contact us via phone or WhatsApp to place an order. We offer delivery across Tamil Nadu and accept multiple payment methods.
                  </p>
                </div>
                <div className="bg-card rounded-xl p-6 shadow-sm border border-border">
                  <h3 className="text-lg font-semibold mb-2">Do you offer bulk discounts?</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Yes, we provide special pricing for bulk orders and dental clinics. Contact us for a customized quote.
                  </p>
                </div>
                <div className="bg-card rounded-xl p-6 shadow-sm border border-border">
                  <h3 className="text-lg font-semibold mb-2">What is your return policy?</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    We accept returns of unopened products within 7 days of purchase. Contact our support team for assistance.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default ContactPage;