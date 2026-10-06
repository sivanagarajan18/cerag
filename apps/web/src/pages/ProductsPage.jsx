import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import WhatsAppButton from '@/components/WhatsAppButton';

const ProductsPage = () => {
  const products = [
    {
      images: ['/images/pro-clean-white.png', '/images/pro-clean-brown.png', '/images/pro-clean-green.png','/images/travel-case.png'],
      title: 'CERAG ProClean Toothbrush',
      description: 'Gentle yet effective cleaning with ultra-soft bristles designed for everyday comfort.',
      featured: false
    },
    {
      images: ['/images/gum-shield-prot.png', '/images/benefits.png', '/images/power.png'],
      title: 'CERAG Gum Shield',
      description: 'Formulated to combine established oral-care ingredients with selected herbal extracts for everyday oral hygiene.',
      featured: false
    },
    {
      image: '/images/daily-care.png',
      title: 'CERAG Daily Protect Toothpaste',
      description: 'Fluoride-enriched formula for complete oral protection and long-lasting freshness.',
      featured: true
    }
  ];

  return (
    <>
      <Helmet>
        <title>Our Products - CERAG Dental Clinic & Oral Cares</title>
        <meta
          name="description"
          content="Explore CERAG's range of professional dental products: premium toothbrushes, advanced toothpaste, and therapeutic gingival gel. Dentist-designed for superior oral health."
        />
      </Helmet>

      <Header />

      <main className="pt-20">
        <section className="section-padding bg-[linear-gradient(110deg,#172e28_0%,#3d5c3d_48%,#14131b_100%)] text-white">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto text-center"
            >
              <h1 className="text-white mb-6">Our products</h1>
              <p className="text-xl text-slate-200 leading-relaxed">
                Professional-grade dental care products designed by dentists for your daily routine
              </p>
            </motion.div>
          </div>
        </section>

        <section className="section-padding bg-background">
          <div className="container-custom">
            <div className="space-y-12">
              {products.map((product, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <ProductCard {...product} />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding bg-muted/30">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto text-center"
            >
              <h2 className="mb-6">How to use our products</h2>
              <div className="bg-card rounded-2xl p-8 shadow-lg text-left space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3">Daily routine</h3>
                  <ol className="space-y-3 text-muted-foreground">
                    <li className="flex gap-3">
                      <span className="font-semibold text-primary flex-shrink-0">1.</span>
                      <span>Brush twice daily with our Premium Toothbrush and Advanced Toothpaste for 2 minutes each time</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="font-semibold text-primary flex-shrink-0">2.</span>
                      <span>Use gentle circular motions, paying attention to the gum line and back teeth</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="font-semibold text-primary flex-shrink-0">3.</span>
                      <span>Apply Gingival Gel to sensitive areas or inflamed gums as needed, typically before bed</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="font-semibold text-primary flex-shrink-0">4.</span>
                      <span>Replace your toothbrush every 3-4 months or when bristles show wear</span>
                    </li>
                  </ol>
                </div>

                <div className="pt-4 border-t border-border">
                  <p className="text-sm text-muted-foreground">
                    For best results, combine our products with regular dental check-ups every 6 months and daily flossing.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="section-padding bg-primary text-primary-foreground">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto text-center"
            >
              <h2 className="text-white mb-6">Ready to upgrade your oral care?</h2>
              <p className="text-xl text-primary-foreground/90 leading-relaxed mb-8">
                Contact us today to learn more about our products and find the right solutions for your dental health needs.
              </p>
              <WhatsAppButton className="bg-white text-primary hover:bg-white/90" />
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default ProductsPage;