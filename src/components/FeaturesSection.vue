<template>
  <section id="features" class="py-20 bg-background-alt">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="text-center mb-16 animate-fade-in">
        <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary mb-6">
          لماذا تختار <span class="text-primary-500">أوتليتك</span>؟
        </h2>
        <p class="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
          نقدم لك تجربة تسوق فريدة تجمع بين الراحة والجودة والأسعار المنافسة
        </p>
      </div>

      <!-- Features Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
        <div
          v-for="(feature, index) in features"
          :key="feature.id"
          class="card card-feature p-8 text-center group hover:scale-105 transition-transform duration-300"
          :style="{ animationDelay: `${index * 100}ms` }"
        >
          <div class="mb-6">
            <div class="w-20 h-20 bg-gradient-to-br from-primary-50 to-secondary-50 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
              <component :is="getIcon(feature.icon)" class="w-12 h-12" :class="getIconColor(feature.icon)" />
            </div>
          </div>
          
          <h3 class="text-xl font-bold text-text-primary mb-4 group-hover:text-primary-500 transition-colors duration-300">
            {{ feature.title }}
          </h3>
          
          <p class="text-text-secondary leading-relaxed">
            {{ feature.description }}
          </p>
        </div>
      </div>

      <!-- Brands Carousel -->
      <div id="partner" class="brands-carousel-container ">
        <div class="text-center mb-12">
          <h3 class="text-2xl font-bold text-text-primary mb-4">
            شركاؤنا من أفضل الماركات
          </h3>
          <p class="text-text-secondary">
نتعاون مع أكثر البراندات المصرية نجاحا ونجعلها متاحة لك           </p>
        </div>

        <!-- Horizontal Carousel using vue3-carousel -->
        <Carousel 
          :items-to-show="5"
          :items-to-scroll="1"
          :wrap-around="true"
          :autoplay="3000"
          :transition="500"
          :pause-autoplay-on-hover="true"
          :breakpoints="{
            320: { itemsToShow: 2, itemsToScroll: 1 },
            640: { itemsToShow: 3, itemsToScroll: 1 },
            768: { itemsToShow: 4, itemsToScroll: 1 },
            1024: { itemsToShow: 5, itemsToScroll: 1 },
            1280: { itemsToShow: 6, itemsToScroll: 1 }
          }"
        >
          <Slide v-for="(brand, index) in brandLogos" :key="`brand-${index}`">
            <div class="brand-item">
              <div class="brand-logo">
                <img
                  :src="brand.logo"
                  :alt="brand.name"
                  class="w-full h-full object-contain grayscale hover:grayscale-0 transition-all duration-300"
                  loading="lazy"
                />
              </div>
            </div>
          </Slide>
        </Carousel>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Carousel, Slide } from 'vue3-carousel'
import { ShoppingBag, Truck, Headphones, TrendingUp } from 'lucide-vue-next'
import 'vue3-carousel/dist/carousel.css'
import type { Feature } from '@/types'

const features: Feature[] = [
  {
    id: '1',
    title: 'عروض حصرية',
    description: 'احصل على أفضل العروض والخصومات الحصرية من المتاجر الشريكة معنا',
    icon: 'shopping-bag'
  },
  {
    id: '2',
    title: 'توصيل سريع',
    description: 'خدمة توصيل سريعة وآمنة لجميع المناطق مع تتبع مباشر للطلبات',
    icon: 'truck'
  },
  {
    id: '3',
    title: 'خدمة عملاء ممتازة',
    description: 'فريق دعم متخصص متاح على مدار الساعة لمساعدتك في أي استفسار',
    icon: 'headphones'
  },
  {
    id: '4',
    title: 'أسعار تنافسية',
    description: 'أسعار منافسة وشفافة مع ضمان أفضل قيمة مقابل المال',
    icon: 'trending-up'
  }
]

const brandLogos = [
  { name: 'Brand 1', logo: 'https://via.placeholder.com/120x60/e5e5e5/666?text=Brand+1' },
  { name: 'Brand 2', logo: 'https://via.placeholder.com/120x60/e5e5e5/666?text=Brand+2' },
  { name: 'Brand 3', logo: 'https://via.placeholder.com/120x60/e5e5e5/666?text=Brand+3' },
  { name: 'Brand 4', logo: 'https://via.placeholder.com/120x60/e5e5e5/666?text=Brand+4' },
  { name: 'Brand 5', logo: 'https://via.placeholder.com/120x60/e5e5e5/666?text=Brand+5' },
  { name: 'Brand 6', logo: 'https://via.placeholder.com/120x60/e5e5e5/666?text=Brand+6' },
]

const getIcon = (iconName: string) => {
  switch (iconName) {
    case 'shopping-bag':
      return ShoppingBag
    case 'truck':
      return Truck
    case 'headphones':
      return Headphones
    case 'trending-up':
      return TrendingUp
    default:
      return ShoppingBag
  }
}

const getIconColor = (iconName: string) => {
  switch (iconName) {
    case 'shopping-bag':
      return 'text-secondary-500'
    case 'truck':
      return 'text-accent'
    case 'headphones':
      return 'text-primary-500'
    case 'trending-up':
      return 'text-secondary-500'
    default:
      return 'text-primary-500'
  }
}
</script>

<style scoped>
.brands-carousel-container {
  @apply bg-white rounded-2xl p-8 shadow-lg border border-gray-100;
}

.brand-item {
  @apply px-4 py-2;
}

.brand-logo {
  @apply w-32 h-16 mx-auto flex items-center justify-center p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors duration-300;
}

.card {
  @apply bg-white rounded-xl shadow-md border border-gray-100;
}

.card-feature {
  @apply hover:shadow-lg;
}
</style>

<!-- Installation required: npm install vue3-carousel -->