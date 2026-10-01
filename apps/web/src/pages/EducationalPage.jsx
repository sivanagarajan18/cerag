import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { ShieldCheck, HeartPulse, Smile, ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

const Educationalpage = () => {
  const problems = [
    {
      icon: HeartPulse,
      title: 'Bleeding gums',
      description:
        'Bleeding while brushing may indicate gum inflammation and poor gum health.',
    },
    {
      icon: ShieldCheck,
      title: 'Swollen gums',
      description:
        'Swelling and irritation can cause discomfort and affect your oral hygiene.',
    },
    {
      icon: Smile,
      title: 'Bad breath',
      description:
        'Gum-related bacteria are one of the major causes of persistent bad breath.',
    },
  ];

  const benefits = [
    'Supports healthier gums',
    'Helps reduce gum irritation',
    'Freshens breath effectively',
    'Suitable for daily oral care',
    'Professional-grade formulation',
  ];

  return (
    <>
      <Helmet>
        <title>Educational page | CERAG Oral Cares</title>
        <meta
          name="description"
          content="Professional gum care solutions by CERAG for healthier gums and better oral hygiene."
        />
      </Helmet>

      <Header />

      <main className="pt-20 bg-background text-foreground">
        {/* HERO SECTION */}
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1616391182219-e080b4d1043a?q=80&w=2070&auto=format&fit=crop"
              alt="Dental gum care"
              className="w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-slate-950/85" />

            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(16,185,129,0.18),transparent_50%)]" />
          </div>

          <div className="container-custom relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <h1 className="text-white mb-6 max-w-4xl mx-auto">
                Healthy gums are the foundation of a healthy smile
              </h1>

              <p className="text-slate-300 text-xl max-w-3xl mx-auto leading-relaxed mb-8">
                Professional gum care solutions designed to reduce irritation,
                improve oral hygiene, and support healthier gums every day.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                  Explore Gum Care
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>

                <WhatsAppButton />
              </div>
            </motion.div>
          </div>
        </section>

        {/* COMMON GUM PROBLEMS */}
        <section className="section-padding bg-background">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="mb-4">Common gum problems</h2>

              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Ignoring gum health can lead to discomfort and long-term oral
                health issues.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {problems.map((problem, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-card border border-border rounded-2xl p-8 text-center shadow-sm"
                >
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mx-auto mb-6">
                    <problem.icon className="w-8 h-8" />
                  </div>

                  <h3 className="text-2xl font-semibold mb-4">
                    {problem.title}
                  </h3>

                  <p className="text-muted-foreground leading-relaxed">
                    {problem.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* PRODUCT SHOWCASE */}
        {/* <section className="section-padding bg-muted/30">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <img
                  src="https://raw.githubusercontent.com/sivanagarajan18/cerag/939d9228167873a8722f5d75e290d675f18f7ce8/ChatGPT%20Image%20Mar%2019%2C%202026%2C%2012_30_45%20PM.png"
                  alt="CERAG Gum Care Gel"
                  className="w-full rounded-3xl shadow-2xl"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <span className="text-primary font-semibold uppercase tracking-wider">
                  CERAG Gum Care Gel
                </span>

                <h2 className="mt-4 mb-6">
                  Advanced care for healthier gums
                </h2>

                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  Developed with professional dental insight, CERAG Gum Care
                  Gel is designed to support daily gum health and improve oral
                  comfort with consistent use.
                </p>

                <div className="space-y-4 mb-8">
                  {benefits.map((benefit, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3"
                    >
                      <CheckCircle className="w-5 h-5 text-primary" />

                      <span className="text-base">{benefit}</span>
                    </div>
                  ))}
                </div>

                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                  Contact us
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </motion.div>
            </div>
          </div>
        </section> */}

        {/* HOW TO BRUSH SECTION */}
<section className="section-padding bg-background">
  <div className="container-custom">

    <div className="text-center mb-16">
      <h2 className="mb-4">
        Proper brushing technique
      </h2>

      <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
        Following the correct brushing method helps maintain healthier gums and cleaner teeth.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

      {/* STEP 1 */}
      <div className="bg-card rounded-2xl overflow-hidden border border-border shadow-sm">
        <img
          src="/images/brush-step-1.jpg"
          alt="Step 1 brushing"
          className="w-full h-52 object-cover"
        />

        <div className="p-6">
          <span className="text-primary font-semibold">
            Step 1
          </span>

          <h3 className="text-xl font-semibold mt-2 mb-3">
            Hold at 45°
          </h3>

          <p className="text-muted-foreground leading-relaxed">
            Position the toothbrush at a 45-degree angle towards the gumline.
          </p>
        </div>
      </div>

      {/* STEP 2 */}
      <div className="bg-card rounded-2xl overflow-hidden border border-border shadow-sm">
        <img
          src="/images/brush-step-2.jpg"
          alt="Step 2 brushing"
          className="w-full h-52 object-cover"
        />

        <div className="p-6">
          <span className="text-primary font-semibold">
            Step 2
          </span>

          <h3 className="text-xl font-semibold mt-2 mb-3">
            Gentle circular motion
          </h3>

          <p className="text-muted-foreground leading-relaxed">
            Brush using small circular motions instead of hard back-and-forth movements.
          </p>
        </div>
      </div>

      {/* STEP 3 */}
      <div className="bg-card rounded-2xl overflow-hidden border border-border shadow-sm">
        <img
          src="/images/brush-step-3.jpg"
          alt="Step 3 brushing"
          className="w-full h-52 object-cover"
        />

        <div className="p-6">
          <span className="text-primary font-semibold">
            Step 3
          </span>

          <h3 className="text-xl font-semibold mt-2 mb-3">
            Clean inner surfaces
          </h3>

          <p className="text-muted-foreground leading-relaxed">
            Brush the inner surfaces of teeth carefully to remove hidden plaque buildup.
          </p>
        </div>
      </div>

      {/* STEP 4 */}
      <div className="bg-card rounded-2xl overflow-hidden border border-border shadow-sm">
        <img
          src="/images/brush-step-4.jpg"
          alt="Step 4 brushing"
          className="w-full h-52 object-cover"
        />

        <div className="p-6">
          <span className="text-primary font-semibold">
            Step 4
          </span>

          <h3 className="text-xl font-semibold mt-2 mb-3">
            Brush your tongue
          </h3>

          <p className="text-muted-foreground leading-relaxed">
            Gently clean the tongue to reduce bacteria and improve breath freshness.
          </p>
        </div>
      </div>

    </div>
  </div>
</section>

        {/* WHY GUM HEALTH MATTERS */}
        <section className="section-padding bg-background">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="mb-4">Why gum health matters</h2>

              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Healthy gums are essential for maintaining strong teeth and
                overall oral wellness.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-card rounded-2xl p-8 border border-border">
                <h3 className="text-4xl font-bold text-primary mb-4">90%</h3>

                <p className="text-muted-foreground leading-relaxed">
                  Oral health problems begin with poor gum care and plaque
                  buildup.
                </p>
              </div>

              <div className="bg-card rounded-2xl p-8 border border-border">
                <h3 className="text-4xl font-bold text-primary mb-4">Daily</h3>

                <p className="text-muted-foreground leading-relaxed">
                  Consistent gum care improves comfort, freshness, and smile
                  confidence.
                </p>
              </div>

              <div className="bg-card rounded-2xl p-8 border border-border">
                <h3 className="text-4xl font-bold text-primary mb-4">Early</h3>

                <p className="text-muted-foreground leading-relaxed">
                  Early gum care helps prevent future oral complications and
                  discomfort.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* GUM CARE TIPS */}
        <section className="section-padding bg-muted/30">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="mb-4">Daily gum care tips</h2>

              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Simple daily habits can greatly improve gum health and prevent future oral problems.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

              <div className="bg-card rounded-2xl border border-border p-8">
                <h3 className="text-xl font-semibold mb-4">
                  Brush gently twice daily
                </h3>

                <p className="text-muted-foreground leading-relaxed">
                  Aggressive brushing can damage gums. Use a soft-bristle toothbrush and gentle circular motions.
                </p>
              </div>

              <div className="bg-card rounded-2xl border border-border p-8">
                <h3 className="text-xl font-semibold mb-4">
                  Floss regularly
                </h3>

                <p className="text-muted-foreground leading-relaxed">
                  Flossing removes plaque and food particles between teeth where brushing cannot reach.
                </p>
              </div>

              <div className="bg-card rounded-2xl border border-border p-8">
                <h3 className="text-xl font-semibold mb-4">
                  Stay hydrated
                </h3>

                <p className="text-muted-foreground leading-relaxed">
                  Drinking water helps wash away bacteria and supports a healthier oral environment.
                </p>
              </div>

              <div className="bg-card rounded-2xl border border-border p-8">
                <h3 className="text-xl font-semibold mb-4">
                  Avoid tobacco products
                </h3>

                <p className="text-muted-foreground leading-relaxed">
                  Smoking and tobacco use increase the risk of gum disease and slow healing.
                </p>
              </div>

              <div className="bg-card rounded-2xl border border-border p-8">
                <h3 className="text-xl font-semibold mb-4">
                  Clean your tongue
                </h3>

                <p className="text-muted-foreground leading-relaxed">
                  Tongue cleaning reduces bacteria buildup and helps improve breath freshness.
                </p>
              </div>

              <div className="bg-card rounded-2xl border border-border p-8">
                <h3 className="text-xl font-semibold mb-4">
                  Visit your dentist regularly
                </h3>

                <p className="text-muted-foreground leading-relaxed">
                  Regular dental checkups help detect gum issues early before they become severe.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-slate-950 text-white">
          <div className="container-custom text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-white mb-6">
                Start your gum care journey today
              </h2>

              <p className="text-slate-300 text-lg max-w-2xl mx-auto mb-8">
                Discover professional oral care products designed for healthier
                gums and confident smiles.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <WhatsAppButton />

                {/* <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground text-base transition-all duration-200 active:scale-[0.98]">
                  <Link to="/products">
                    Explore products
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button> */}

                {/* <Button
                  size="lg"
                  variant="outline"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground"
                > */}
                  {/* <Link to="/contact">
                    Contact CERAG
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>  */}
                  
                {/* </Button> */}

                {/* <Button asChild size="lg" variant="outline" className="transition-all duration-200 active:scale-[0.98]"> */}
                {/* <Link to="/products">
                  
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link> */}
                {/* View all products
              </Button> */}
                
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Educationalpage;