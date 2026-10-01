import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle2 } from 'lucide-react';

const ProductCard = ({ image, title, description, benefits, featured = false }) => {
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
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-110"
          />
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