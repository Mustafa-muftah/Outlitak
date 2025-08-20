<template>
  <section id="contact" class="py-20 bg-background">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="text-center mb-16 animate-fade-in">
        <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary mb-6">
          تواصل معنا
        </h2>
        <p class="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
          أخبرنا عن احتياجاتك وسنقوم بالرد عليك في أقرب وقت ممكن
        </p>
      </div>

      <div class="grid lg:grid-cols-2 gap-12 items-start">
        <!-- Contact Form -->
        <div class="card card-contact p-8 animate-slide-up">
          <form @submit.prevent="handleSubmit" class="space-y-6">
            <!-- Name Field -->
            <div class="relative">
              <input
                v-model="formData.name"
                type="text"
                id="name"
                class="form-input"
                :class="{ 'border-red-500': errors.name }"
                placeholder=" "
                required
              />
              <label for="name" class="form-label">
                الاسم الكامل *
              </label>
              <div v-if="errors.name" class="form-error">
                {{ errors.name }}
              </div>
            </div>

            <!-- Email Field -->
            <div class="relative">
              <input
                v-model="formData.email"
                type="email"
                id="email"
                class="form-input"
                :class="{ 'border-red-500': errors.email }"
                placeholder=" "
                required
              />
              <label for="email" class="form-label">
                البريد الإلكتروني *
              </label>
              <div v-if="errors.email" class="form-error">
                {{ errors.email }}
              </div>
            </div>

            <!-- Phone Field -->
            <div class="relative">
              <input
                v-model="formData.phone"
                type="tel"
                id="phone"
                class="form-input"
                :class="{ 'border-red-500': errors.phone }"
                placeholder=" "
              />
              <label for="phone" class="form-label">
                رقم الهاتف (اختياري)
              </label>
              <div v-if="errors.phone" class="form-error">
                {{ errors.phone }}
              </div>
            </div>

            <!-- Message Field -->
            <div class="relative">
              <textarea
                v-model="formData.message"
                id="message"
                rows="4"
                class="form-input resize-none"
                :class="{ 'border-red-500': errors.message }"
                placeholder=" "
                required
              ></textarea>
              <label for="message" class="form-label">
                الرسالة *
              </label>
              <div v-if="errors.message" class="form-error">
                {{ errors.message }}
              </div>
            </div>

            <!-- Submit Button -->
            <button
              type="submit"
              :disabled="isSubmitting"
              class="btn btn-primary btn-lg w-full group"
            >
              <span v-if="isSubmitting" class="flex items-center justify-center">
                <div class="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                جاري الإرسال...
              </span>
              <span v-else class="flex items-center justify-center">
                إرسال الرسالة
                <Send class="mr-2 group-hover:translate-x-1 transition-transform duration-200" />
              </span>
            </button>
          </form>

          <!-- Success/Error Messages -->
          <div v-if="submitMessage" class="mt-6 p-4 rounded-lg" :class="submitMessageClass">
            {{ submitMessage }}
          </div>
        </div>

        <!-- Contact Information & Social Media -->
        <div class="space-y-8 animate-fade-in">
          <!-- Contact Information -->
          <div class="card card-default p-8">
            <h3 class="text-2xl font-bold text-text-primary mb-6">
              معلومات التواصل
            </h3>
            <div class="space-y-4">
              <div class="flex items-center space-x-4 space-x-reverse">
                <a href="mailto:outlitak@gmail.com" class="text-text-secondary flex gap-4">
                  <div class="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center pointer-events-none">
                    <Mail class="w-6 h-6 text-primary-500" />
                  </div>
                </a>
                <div>
                  <div class="font-semibold text-text-primary pointer">البريد الإلكتروني</div>
                  <a href="mailto:outlitak@gmail.com" class="text-text-secondary">outlitak@gmail.com</a>
                </div>
              </div>
              
              <div class="flex items-center space-x-4 space-x-reverse">
                <a class="flex gap-4" href="tel:+201551260272">
                  <div class="w-12 h-12 bg-secondary-100 rounded-lg flex items-center justify-center">
                    <Phone class="w-6 h-6 text-secondary-500" />
                  </div>
                  <div>
                    <div class="font-semibold text-text-primary">الهاتف</div>
                    <a href="tel:+201551260272" class="text-text-secondary">01551260272</a>
                  </div>
                </a>
              </div>
              
              <div class="flex items-center space-x-4 space-x-reverse">
                <div class="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                  <MapPin class="w-6 h-6 text-accent" />
                </div>
                <div>
                  <div class="font-semibold text-text-primary">العنوان</div>
                  <div class="text-text-secondary">السادس من أكتوبر، الجيرة، مصر</div>
                </div>
              </div>
            </div>
          </div>

          <!-- Social Media Section -->
          <div class="card card-default p-8">
            <h3 class="text-2xl font-bold text-text-primary mb-6">
              تابعنا على وسائل التواصل
            </h3>
            <div class="flex justify-center gap-6">
              <!-- Facebook -->
              <a 
                href="https://www.facebook.com/profile.php?id=61579575810854" 
                target="_blank"
                class="hover:scale-110 transition-all duration-300 group"
              >
                <svg class="w-10 h-10 text-blue-600 hover:text-blue-700" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>

              <!-- Instagram -->
              <a 
                href="https://www.instagram.com/outlitak_/" 
                target="_blank"
                class="hover:scale-110 transition-all duration-300 group"
              >
                <svg class="w-8 h-10 text-pink-500 hover:text-pink-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>

              <!-- TikTok -->
              <a 
                href="https://tiktok.com/@your-account" 
                target="_blank"
                class="hover:scale-110 transition-all duration-300 group"
              >
                <svg class="w-10 h-10 text-gray-800 hover:text-black" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-.88-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Send, Mail, Phone, MapPin } from 'lucide-vue-next'
import type { ContactFormData, ContactFormErrors } from '@/types'
import { validateContactForm, formatPhoneNumber } from '@/lib/utils'
import { databases, DATABASE_ID, CONTACTS_COLLECTION_ID } from '@/lib/appwrite'
import { ID } from 'appwrite'

const formData = ref<ContactFormData>({
  name: '',
  email: '',
  phone: '',
  // serviceType: '',
  message: ''
})

const errors = ref<ContactFormErrors>({})
const isSubmitting = ref(false)
const submitMessage = ref('')
const submitMessageClass = ref('')


const handleSubmit = async () => {
  // Clear previous errors and messages
  errors.value = {}
  submitMessage.value = ''
  
  // Validate form
  const validationErrors = validateContactForm(formData.value)
  if (Object.keys(validationErrors).length > 0) {
    errors.value = validationErrors
    return
  }

  isSubmitting.value = true

  try {
    // Format phone number if provided
    const submitData = {
      name: formData.value.name,
      email: formData.value.email,
      phone: formData.value.phone ? formatPhoneNumber(formData.value.phone) : '',
      // serviceType: formData.value.serviceType,
      message: formData.value.message,
      // createdAt: new Date().toISOString()
    }

    // Submit to Appwrite
    await databases.createDocument(
      DATABASE_ID,
      CONTACTS_COLLECTION_ID,
      ID.unique(),
      submitData
    )

    // Success
    submitMessage.value = 'تم إرسال رسالتك بنجاح! سنقوم بالرد عليك قريباً.'
    submitMessageClass.value = 'bg-green-50 text-green-800 border border-green-200'
    
    // Reset form
    formData.value = {
      name: '',
      email: '',
      phone: '',
      // serviceType: '',
      message: ''
    }
  } catch (error) {
    console.error('Error submitting form:', error)
    submitMessage.value = 'حدث خطأ أثناء إرسال الرسالة. يرجى المحاولة مرة أخرى.'
    submitMessageClass.value = 'bg-red-50 text-red-800 border border-red-200'
  } finally {
    isSubmitting.value = false
  }
}
</script>