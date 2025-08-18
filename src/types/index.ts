export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  serviceType: string;
  message: string;
}

export interface ContactFormErrors {
  name?: string;
  email?: string;
  phone?: string;
  serviceType?: string;
  message?: string;
}

export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface ServiceType {
  value: string;
  label: string;
}

export interface ApiResponse {
  success: boolean;
  message: string;
} 