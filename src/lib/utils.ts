import type { ContactFormData, ContactFormErrors } from '@/types';

export const validateContactForm = (data: ContactFormData): ContactFormErrors => {
  const errors: ContactFormErrors = {};

  if (!data.name.trim()) {
    errors.name = 'الاسم مطلوب';
  }

  if (!data.email.trim()) {
    errors.email = 'البريد الإلكتروني مطلوب';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = 'البريد الإلكتروني غير صحيح';
  }

  if (data.phone && !/^[\+]?[0-9\s\-\(\)]{8,}$/.test(data.phone)) {
    errors.phone = 'رقم الهاتف غير صحيح';
  }

  if (!data.message.trim()) {
    errors.message = 'الرسالة مطلوبة';
  }

  return errors;
};

export const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId)
  if (element) {
    // Dynamically get the header height
    const header = document.querySelector('header')
    const headerHeight = header ? header.offsetHeight : 80
    
    // Calculate the position to scroll to
    const elementPosition = element.offsetTop
    const offsetPosition = elementPosition - headerHeight - 20 // Adding 20px extra padding
    
    // Smooth scroll to the calculated position
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    })
  }
}



export const formatPhoneNumber = (phone: string): string => {
  // Remove all non-digit characters
  const cleaned = phone.replace(/\D/g, '');
  
  // Format based on length
  if (cleaned.length === 10) {
    return `+966${cleaned}`;
  } else if (cleaned.length === 12 && cleaned.startsWith('966')) {
    return `+${cleaned}`;
  } else if (cleaned.length === 13 && cleaned.startsWith('966')) {
    return `+${cleaned}`;
  }
  
  return phone;
};

export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  wait: number
): ((...args: Parameters<T>) => void) => {
  let timeout: ReturnType<typeof setTimeout>;
  
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
}; 