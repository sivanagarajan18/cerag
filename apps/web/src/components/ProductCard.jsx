import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle2 } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';

const ProductCard = ({ image, images, title, description, benefits, featured = false }) => {
  const productImages = images?.length ? images : [image];
  const [carouselApi, setCarouselApi] = React.useState(null);
  const [selectedImage, setSelectedImage] = React.useState(0);
  const lastWheelNavigation = React.useRef(0);

  React.useEffect(() => {
    if (!carouselApi) return;

    const updateSelectedImage = () => setSelectedImage(carouselApi.selectedScrollSnap());
    updateSelectedImage();
    carouselApi.on('select', updateSelectedImage);
    carouselApi.on('reInit', updateSelectedImage);

    return () => {
      carouselApi.off('select', updateSelectedImage);
      carouselApi.off('reInit', updateSelectedImage);
    };
  }, [carouselApi]);

  const handleTrackpadScroll = (event) => {
    if (Math.abs(event.deltaX) <= Math.abs(event.deltaY) || Math.abs(event.deltaX) < 8) return;

    event.preventDefault();
    const now = Date.now();
    if (now - lastWheelNavigation.current < 400) return;

    lastWheelNavigation.current = now;
    carouselApi?.scrollTo(carouselApi.selectedScrollSnap() + (event.deltaX > 0 ? 1 : -1));
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="h-full"
    >
      <Card className={`h-full flex flex-col overflow-hidden transition-all duration-300 ${
        featured 
          ? 'shadow-xl hover:shadow-2xl hover:-translate-y-2 ring-2 ring-primary' 
          : 'shadow-lg hover:shadow-xl hover:-translate-y-1'
      }`}>
        <div className="relative overflow-hidden bg-muted">
          {productImages.length > 1 ? (
            <Carousel opts={{ loop: true }} setApi={setCarouselApi} onWheel={handleTrackpadScroll}>
              <CarouselContent>
                {productImages.map((productImage, index) => (
                  <CarouselItem key={productImage}>
                    <img
                      src={productImage}
                      alt={`${title} view ${index + 1}`}
                      className="w-full h-full object-cover object-top"
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="flex justify-center gap-2 py-3" role="group" aria-label={`${title} images`}>
                {productImages.map((productImage, index) => (
                  <button
                    key={productImage}
                    type="button"
                    aria-label={`Show ${title} image ${index + 1}`}
                    aria-pressed={selectedImage === index}
                    onClick={() => carouselApi?.scrollTo(index)}
                    className={`h-2.5 w-2.5 rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 ${
                      selectedImage === index ? 'bg-primary' : 'bg-muted-foreground/40 hover:bg-muted-foreground/70'
                    }`}
                  />
                ))}
              </div>
            </Carousel>
          ) : (
            <img
              src={productImages[0]}
              alt={title}
              className="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-110"
            />
          )}
          {featured && (
            <Badge className="absolute top-4 right-4 bg-primary text-primary-foreground">
              Launching Soon
            </Badge>
          )}
        </div>
        <CardHeader>
          <CardTitle className="text-2xl">{title}</CardTitle>
          <CardDescription className="text-base leading-relaxed">
            {description}
          </CardDescription>
        </CardHeader>
        <CardContent className="flex-1 flex flex-col">
          {benefits && benefits.length > 0 && (
            <div className="space-y-2 mt-auto">
              <p className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
                Key benefits
              </p>
              <ul className="space-y-2">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm leading-relaxed">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ProductCard;