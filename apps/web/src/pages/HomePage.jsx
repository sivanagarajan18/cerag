import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Shield, Award, Heart, Phone, Mail, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import WhatsAppButton from '@/components/WhatsAppButton';
const HomePage = () => {
  const products = [{
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
    }];
  const features = [{
    icon: Shield,
    title: 'Dentist-approved quality',
    description: 'Every product is developed and tested by dental professionals to ensure safety and effectiveness.'
  }, {
    icon: Award,
    title: 'Premium ingredients',
    description: 'We use only the finest materials and formulations backed by dental research.'
  }, {
    icon: Heart,
    title: 'Affordable care',
    description: 'Professional-grade dental products at prices that make daily care accessible to everyone.'
  }];
  return <>
      <Helmet>
        <title>CERAG Dental Clinic & Oral Cares - Professional Dental Products</title>
        <meta name="description" content="CERAG offers dentist-designed toothbrushes, toothpaste, and gingival gel for superior oral health. Professional dental care for your daily routine." />
      </Helmet>

      <Header />

      <main className="pt-20">
        <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img src="https://images.unsplash.com/photo-1616391182219-e080b4d1043a" alt="Professional dental care environment" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-br from-slate-950/90 via-slate-950/70 to-slate-950/90" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(8,145,178,0.15),transparent_50%)]" />
          </div>

          <div className="container-custom relative z-10 text-center">
            <motion.div initial={{
            opacity: 0,
            y: 30
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.8
          }}>
              <h1 className="text-white mb-6">
                Clinical-grade oral care for everyday life
              </h1>
              <p className="text-xl md:text-2xl text-slate-200 mb-8 max-w-3xl mx-auto leading-relaxed">
                Dentist-developed products designed for healthier smiles, every day.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground text-base transition-all duration-200 active:scale-[0.98]">
                  <Link to="/products">
                    Explore products
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
                <WhatsAppButton className="text-base" />
              </div>
            </motion.div>
          </div>
        </section>

        <section className="section-padding bg-background">
          <div className="container-custom">
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6
          }} className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="mb-6">About CERAG</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                CERAG Oral Cares is built on a simple idea — bringing professional dental care into everyday routines. Developed with clinical insight and practical design, our products deliver safe, effective, and affordable oral care for everyone.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="section-padding bg-muted/30">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="mb-4">Our products</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Each product is carefully formulated to address specific oral health needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              {products.slice(0, 2).map((product, index) => <ProductCard key={index} {...product} />)}
            </div>
            <div className="max-w-2xl mx-auto">
              <ProductCard {...products[2]} />
            </div>

            <div className="text-center mt-12">
              <Button asChild size="lg" variant="outline" className="transition-all duration-200 active:scale-[0.98]">
                <Link to="/products">
                  View all products
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="section-padding bg-background">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="mb-4">Why choose CERAG</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                We're committed to making professional dental care accessible to everyone
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.map((feature, index) => <motion.div key={index} initial={{
              opacity: 0,
              y: 20
            }} whileInView={{
              opacity: 1,
              y: 0
            }} viewport={{
              once: true
            }} transition={{
              duration: 0.5,
              delay: index * 0.1
            }} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 text-primary mb-6">
                    <feature.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>)}
            </div>
          </div>
        </section>

        <section className="section-padding bg-slate-950 text-white">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div initial={{
              opacity: 0,
              x: -20
            }} whileInView={{
              opacity: 1,
              x: 0
            }} viewport={{
              once: true
            }} transition={{
              duration: 0.6
            }}>
                <h2 className="text-white mb-6">Get in touch</h2>
                <p className="text-slate-300 text-lg leading-relaxed mb-8">
                  Have questions about our products? Our team is here to help you choose the right dental care solutions.
                </p>

                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-400">Phone</p>
                      <a href="tel:+919629044797" className="text-white hover:text-primary transition-colors duration-200">
                        +91 96290 44797
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-400">Email</p>
                      <a href="mailto:support@ceragcare.com" className="text-white hover:text-primary transition-colors duration-200">
                        support@ceragcare.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary flex-shrink-0">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-400">Location</p>
                      <p className="text-white leading-relaxed">
                        #3.490B, Akkamapettai, Sankari<br />
                        Salem, Tamil Nadu, India
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <WhatsAppButton />
                </div>
              </motion.div>

              <motion.div initial={{
              opacity: 0,
              x: 20
            }} whileInView={{
              opacity: 1,
              x: 0
            }} viewport={{
              once: true
            }} transition={{
              duration: 0.6
            }} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                <h3 className="text-2xl font-semibold text-white mb-6">Send us a message</h3>
                <Button asChild size="lg" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground transition-all duration-200 active:scale-[0.98]">
                  <Link to="/contact">
                    Go to contact page
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>;
};
export default HomePage;