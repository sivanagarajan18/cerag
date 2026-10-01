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
      image: 'https://github.com/sivanagarajan18/cerag/blob/939d9228167873a8722f5d75e290d675f18f7ce8/ChatGPT%20Image%20Mar%2019,%202026,%2012_08_06%20PM.png?raw=true',
      title: 'CERAG SoftCare Toothbrush',
      description: 'Gentle yet effective cleaning with ultra-soft bristles designed for everyday comfort.',
      featured: true
    },
    {
      image: 'https://github.com/sivanagarajan18/cerag/blob/939d9228167873a8722f5d75e290d675f18f7ce8/ChatGPT%20Image%20Mar%2019,%202026,%2012_26_07%20PM.png?raw=true',
      title: 'CERAG Daily Protect Toothpaste',
      description: 'Fluoride-enriched formula for complete oral protection and long-lasting freshness.',
      featured: true
    },
    {
      image: 'https://raw.githubusercontent.com/sivanagarajan18/cerag/939d9228167873a8722f5d75e290d675f18f7ce8/ChatGPT%20Image%20Mar%2019%2C%202026%2C%2012_30_45%20PM.png',
      title: 'CERAG Gum Care Gel',
      description: 'Targeted care for healthier gums and improved oral hygiene.',
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
        <section className="section-padding bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
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