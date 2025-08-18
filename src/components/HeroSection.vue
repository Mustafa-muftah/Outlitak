<template>
  <section
    id="hero"
    class="relative mt-20 h-screen flex items-center justify-center overflow-hidden"
    style="background-color: #0c2237;"
  >
    <!-- Background Pattern -->
    <div class="absolute inset-0 opacity-10">
      <div
        class="absolute top-20 left-20 w-72 h-72 bg-amber-500 rounded-full mix-blend-multiply filter blur-xl animate-bounce-gentle"
      ></div>
      <div
        class="absolute top-40 right-20 w-72 h-72 bg-orange-500 rounded-full mix-blend-multiply filter blur-xl animate-bounce-gentle animation-delay-2000"
      ></div>
      <div
        class="absolute -bottom-8 left-40 w-72 h-72 bg-yellow-400 rounded-full mix-blend-multiply filter blur-xl animate-bounce-gentle animation-delay-4000"
      ></div>
    </div>
    
    <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div class="grid lg:grid-cols-2 gap-12 items-center h-full">
        <!-- Hero Image - Left Side -->
        <div class=" hidden lg:flex justify-center lg:justify-start animate-fade-in order-2 lg:order-1">
          <div class="relative">
            <!-- Background accent shape -->
            <div class="sm:hidden absolute -inset-3 bg-gradient-to-br from-amber-400/20 to-orange-500/20 rounded-2xl transform rotate-3 animate-pulse"></div>
            <img src="@/assets/hero.png"
                  alt="Hero Illustration"
                  class="relative w-full h-auto max-w-sm mx-auto rounded-xl shadow-xl transform hover:scale-105 transition-transform duration-500"
            />
            <!-- Decorative elements -->
            <div class="absolute -top-4 -right-4 w-8 h-8 bg-amber-400 rounded-full animate-bounce opacity-80"></div>
            <div class="absolute -bottom-3 -left-3 w-6 h-6 bg-orange-500 rounded-full animate-bounce animation-delay-1000 opacity-60"></div>
          </div>
        </div>
        
        <!-- Content - Right Side -->
        <div class="text-right space-y-6 animate-fade-in order-1 lg:order-2">
          <div class="space-y-4">
            <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
              <span class="text-amber-400 drop-shadow-lg">أوتليتك</span>
            </h1>
            <p class="text-2xl sm:text-3xl text-white font-bold leading-relaxed">
               الماركات المصرية فى مكان واحد
            </p>
            <p class="text-lg text-amber-200 font-medium sm:text-xl leading-relaxed">
              من أفضل التوكيلات بأسعار outlet
              دلوقتى تقدر تشترى بكل سهولة
            </p>
          </div>
          
          <div class="flex flex-col sm:flex-row gap-4 justify-strt">
            <button @click="handleGetStarted" class="btn-hero-primary group">
              ابدأ التسوق الآن
              <ArrowLeft
                class="mr-2 group-hover:-translate-x-1 transition-transform duration-200"
              />
            </button>
            <button @click="handleLearnMore" class="btn-hero-outline">
              تعرف على خدماتنا
            </button>
          </div>
          
          <!-- Stats -->
          <!-- <div class="grid grid-cols-3 gap-6 pt-6">
            <div class="text-center lg:text-right">
              <div class="text-3xl font-bold text-amber-400 mb-1">+1000</div>
              <div class="text-sm text-gray-300">متجر شريك</div>
            </div>
            <div class="text-center lg:text-right">
              <div class="text-3xl font-bold text-orange-400 mb-1">+50%</div>
              <div class="text-sm text-gray-300">توفير متوسط</div>
            </div>
            <div class="text-center lg:text-right">
              <div class="text-3xl font-bold text-yellow-400 mb-1">+10K</div>
              <div class="text-sm text-gray-300">عميل راضي</div>
            </div>
          </div> -->
        </div>
      </div>
    </div>
    
    <!-- Scroll Indicator -->
    <!-- <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
      <div class="w-6 h-10 border-2 border-amber-400 rounded-full flex justify-center">
        <div class="w-1 h-3 bg-amber-400 rounded-full mt-2 animate-pulse"></div>
      </div>
    </div> -->
  </section>
</template>

<script setup lang="ts">
import { ArrowLeft } from 'lucide-vue-next'
import { scrollToSection } from '@/lib/utils'

const handleGetStarted = () => {
  scrollToSection('contact')
}

const handleLearnMore = () => {
  scrollToSection('features')
}
</script>

<style scoped>
.btn-hero-primary {
  @apply bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center transform hover:scale-105;
}

.btn-hero-outline {
  @apply border-2 border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105;
}

.animation-delay-1000 {
  animation-delay: 1s;
}

.animation-delay-2000 {
  animation-delay: 2s;
}

.animation-delay-4000 {
  animation-delay: 4s;
}
</style>