import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Target, Users, Sparkles, Award } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const AboutUsPage = () => {
  const values = [
    {
      icon: Target,
      title: 'Our mission',
      description: 'To make dentist-level oral care simple, affordable, and accessible for every household.'
    },
    {
      icon: Sparkles,
      title: 'Quality first',
      description: 'Every CERAG product is formulated with clinically tested ingredients and manufactured under strict quality standards.'
    },
    {
      icon: Users,
      title: 'Patient-centered',
      description: 'We design products based on real patient needs — not trends — ensuring practical benefits in daily use.'
    },
    {
      icon: Award,
      title: 'Expert-backed',
      description: 'Developed by dental professionals with real clinical experience and patient insights.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>About Us - CERAG Dental Clinic & Oral Cares</title>
        <meta
          name="description"
          content="Learn about CERAG's mission to provide professional dental care products. Founded by dentists, trusted by patients across Tamil Nadu."
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
              <h1 className="text-white mb-6">About CERAG</h1>
              <p className="text-xl text-slate-200 leading-relaxed">
                Bringing professional dental expertise to your daily oral care routine
              </p>
            </motion.div>
          </div>
        </section>

        <section className="section-padding bg-background">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="mb-6">Our story</h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    CERAG Dental Clinic & Oral Cares was founded in Salem, Tamil Nadu with a clear mission — to bring professional dental care into everyday life.
                  </p>
                  <p>
                    As dental professionals, we saw a common problem: patients maintain good oral health in clinics, but struggle to continue the same care at home.
                  </p>
                  <p>
                    This gap inspired us to create CERAG — a brand built on clinical knowledge, real patient needs, and practical daily solutions.
                  </p>
                  <p>
                    Every CERAG product is carefully designed by dental experts to deliver effective, safe, and affordable oral care — helping you maintain a healthier smile every day.
                  </p>
                  <p>
                    Today, CERAG is growing across Tamil Nadu and beyond, trusted by families who believe in better oral care.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                <img
                  src="https://images.unsplash.com/photo-1685022036259-04cf91a89af1"
                  alt="Professional dental team at CERAG clinic"
                  className="w-full h-auto rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-primary/10 rounded-2xl -z-10" />
              </motion.div>
            </div>
          </div>
        </section>

        <section className="section-padding bg-background">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                <img
                  src="https://github.com/sivanagarajan18/cerag/blob/main/ChatGPT%20Image%20Mar%2019,%202026,%2001_06_24%20PM.png?raw=true"
                  alt="Professional dental team at CERAG clinic"
                  className="w-full h-auto rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-primary/10 rounded-2xl -z-10" />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="mb-6">Meet the Founder</h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    CERAG is led by dental professionals committed to improving everyday oral care.
                  </p>
                  <p>
                    With years of clinical experience, our founder understands the real challenges patients face and ensures every product is designed with care, science, and practicality.
                  </p>
                  <p>
                    "Professional dental care shouldn’t be limited to clinics — it should be part of your daily routine."
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="section-padding bg-background">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="mb-6">Clinical Leadership</h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    With extensive clinical experience in dentistry, Dr. [Name] leads the research and development of CERAG products.
                  </p>
                  <p>
                    Every formulation is carefully designed, tested, and validated to meet professional dental standards while being safe and effective for everyday use.
                  </p>
                  <p>
                    Dr. Kalaiselvi Siva ensures that CERAG bridges the gap between clinical care and daily oral hygiene.
                  </p>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                <img
                  src="https://github.com/sivanagarajan18/cerag/blob/main/ChatGPT%20Image%20Mar%2019,%202026,%2002_49_51%20PM.png?raw=true"
                  alt="Professional dental team at CERAG clinic"
                  className="w-full h-auto rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-primary/10 rounded-2xl -z-10" />
              </motion.div>
            </div>
          </div>
        </section>

        <section className="section-padding bg-muted/30">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="mb-4">Our values</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                The principles that guide everything we do
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-card rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 text-primary flex-shrink-0">
                      <value.icon className="w-7 h-7" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding bg-background">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="text-center mb-12">Our commitment to quality</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">100%</div>
                  <p className="text-muted-foreground">Dentist-approved formulations</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">2,847</div>
                  <p className="text-muted-foreground">Growing community across Tamil Nadu</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">3</div>
                  <p className="text-muted-foreground">Premium products</p>
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
              <h2 className="text-white mb-6">Experience dentist-level oral care at home</h2>
              <p className="text-xl text-primary-foreground/90 leading-relaxed mb-8">
                Start your journey towards healthier teeth and gums with CERAG.
              </p>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default AboutUsPage;