<template>
  <header
    :class="[
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
      isScrolled
        ? 'backdrop-blur-md shadow-lg border-b'
        : 'backdrop-blur-sm'
    ]"
    style="background-color: rgba(12, 34, 55, 0.95); border-bottom-color: rgba(12, 34, 55, 0.3);"
  >
    <div class="max-w-7xl mx-auto lg:px-4 sm:pl-4 sm:pr-0 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-[5rem] ">
        <!-- Logo -->
        <div class="flex items-center">
          <div class="relative">
            <img 
              src="@/assets/logo.png" 
              alt="أوتليتك" 
              class="h-[10rem] lg:h-[10rem] w-auto object-contain transition-all duration-300 hover:scale-105 cursor-pointer"
            />
          </div>
        </div>

        <!-- Desktop Navigation -->
        <nav class="hidden md:flex items-center space-x-8 space-x-reverse">
          <button
            v-for="item in navigationItems"
            :key="item.id"
            @click="handleNavClick(item.id)"
            class="font-medium transition-colors duration-200 text-lg text-white hover:text-amber-400"
          >
            {{ item.label }}
          </button>
          <button
            @click="handleNavClick('contact')"
            class="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white px-6 py-2 rounded-lg font-medium shadow-lg hover:shadow-xl transition-all duration-200"
          >
            اتصل بنا
          </button>
        </nav>

        <!-- Mobile Menu Button -->
        <button
          class="md:hidden p-4 rounded-lg text-white transition-all duration-200"
          style="hover:background-color: rgba(12, 34, 55, 0.7);"
          @click="isMenuOpen = !isMenuOpen"
        >
          <X v-if="isMenuOpen" class="w-6 h-6" />
          <Menu v-else class="w-6 h-6" />
        </button>
      </div>

      <!-- Mobile Navigation -->
      <transition
        enter-active-class="transition duration-200 ease-out"
        enter-from-class="opacity-0 -translate-y-2"
        enter-to-class="opacity-100 translate-y-0"
        leave-active-class="transition duration-150 ease-in"
        leave-from-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 -translate-y-2"
      >
        <div v-if="isMenuOpen" class="md:hidden">
          <div 
            class="px-2 pt-2 pb-3 space-y-1 backdrop-blur-md border-t rounded-b-lg shadow-lg"
            style="background-color: rgba(12, 34, 55, 0.95); border-top-color: rgba(12, 34, 55, 0.3);"
          >
            <button
              v-for="item in navigationItems"
              :key="item.id"
              @click="handleNavClick(item.id)"
              class="block w-full text-right px-4 py-3 text-white hover:text-amber-400 rounded-lg transition-all duration-200 font-medium"
              style="hover:background-color: rgba(12, 34, 55, 0.7);"
            >
              {{ item.label }}
            </button>
            <div class="pt-2 px-2">
              <button
                @click="handleNavClick('contact')"
                class="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white px-6 py-2 rounded-lg font-medium shadow-lg hover:shadow-xl transition-all duration-200 w-full"
              >
                اتصل بنا 
              </button>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { Menu, X } from 'lucide-vue-next'
import { scrollToSection } from '@/lib/utils'

const isMenuOpen = ref(false)
const isScrolled = ref(false)

const navigationItems = [
  { id: 'hero', label: 'الرئيسية' },
  { id: 'features', label: 'الخدمات' },
   {id:'partner', label: 'شركاؤنا'},
]
const handleScroll = () => {
  isScrolled.value = window.scrollY > 10
}

const handleNavClick = (sectionId: string) => {
  scrollToSection(sectionId)
  isMenuOpen.value = false
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.btn {
  @apply px-4 py-2 rounded-lg font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2;
}

.btn-primary {
  @apply bg-primary-500 hover:bg-primary-600 text-white focus:ring-primary-500;
}

.btn-sm {
  @apply px-3 py-1.5 text-sm;
}
</style>