import React from 'react';
import { MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
const WhatsAppButton = ({
  phoneNumber = '+919629044797',
  className = ''
}) => {
  const handleWhatsAppClick = () => {
    const formattedNumber = phoneNumber.replace(/[^0-9]/g, '');
    const message = encodeURIComponent('Hi, I would like to know more about CERAG dental products.');
    window.open(`https://wa.me/${formattedNumber}?text=${message}`, '_blank');
  };
  return <Button onClick={handleWhatsAppClick} className={`bg-[#25D366] hover:bg-[#20BA5A] text-white transition-all duration-200 active:scale-[0.98] ${className}`}>
      <MessageCircle className="w-5 h-5 mr-2" />
      Get Oral Care Advice
    </Button>;
};
export default WhatsAppButton;