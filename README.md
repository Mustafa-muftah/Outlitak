# أوتليتك - منصة التسوق الذكي

## نظرة عامة
أوتليتك هي منصة تسوق ذكية تقدم أفضل العروض والخصومات من المتاجر المحلية. تم تطوير هذه الصفحة باستخدام Vue.js 3 و Tailwind CSS.

## المميزات
- 🛍️ **تسوق ذكي**: اكتشف أفضل العروض والخصومات
- 🚚 **توصيل سريع**: خدمة توصيل آمنة لجميع المناطق
- 💬 **دعم ممتاز**: فريق دعم متخصص متاح على مدار الساعة
- 💰 **أسعار تنافسية**: أفضل قيمة مقابل المال

## التقنيات المستخدمة
- **Vue.js 3** - إطار العمل الأمامي
- **TypeScript** - لكتابة كود آمن ومنظم
- **Tailwind CSS** - لإطار عمل CSS
- **Firebase** - لقاعدة البيانات والخدمات الخلفية
- **Lucide Vue** - لأيقونات جميلة ومتجاوبة
- **Vite** - لأداة البناء السريعة

## المتطلبات الأساسية
- Node.js (الإصدار 18 أو أحدث)
- npm أو yarn

## التثبيت والإعداد

### 1. تثبيت التبعيات
```bash
npm install
```

### 2. إعداد Firebase
1. اذهب إلى [Firebase Console](https://console.firebase.google.com/)
2. أنشئ مشروعاً جديداً
3. فعّل Firestore Database
4. احصل على بيانات التكوين
5. أنشئ ملف `.env.local` في مجلد المشروع وأضف:

```env
VITE_FIREBASE_API_KEY=your-api-key
VITE_FIREBASE_AUTH_DOMAIN=your-domain.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your-project-id
VITE_FIREBASE_STORAGE_BUCKET=your-bucket.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your-sender-id
VITE_FIREBASE_APP_ID=your-app-id
```

### 3. تشغيل المشروع
```bash
npm run dev
```

### 4. بناء المشروع للإنتاج
```bash
npm run build
```

## هيكل المشروع
```
src/
├── components/          # مكونات Vue
│   ├── Header.vue      # رأس الصفحة
│   ├── HeroSection.vue # القسم الرئيسي
│   ├── FeaturesSection.vue # قسم المميزات
│   └── ContactSection.vue  # نموذج الاتصال
├── lib/                # مكتبات مساعدة
│   ├── firebase.ts     # تكوين Firebase
│   └── utils.ts        # دوال مساعدة
├── types/              # أنواع TypeScript
│   └── index.ts        # تعريفات الأنواع
├── assets/             # الأصول
│   └── main.css        # ملف CSS الرئيسي
├── App.vue             # المكون الرئيسي
└── main.ts             # نقطة الدخول
```

## التخصيص

### الألوان
يمكنك تخصيص الألوان من خلال ملف `tailwind.config.js`:

```javascript
colors: {
  primary: {
    500: '#1e3a5f',    // اللون الأساسي
  },
  secondary: {
    500: '#f59e0b',    // اللون الثانوي
  },
  // ... المزيد من الألوان
}
```

### الخطوط
المشروع يستخدم خط Cairo العربي. يمكنك تغييره من خلال ملف `tailwind.config.js`.

### الرسوم المتحركة
تم تعريف الرسوم المتحركة المخصصة في `tailwind.config.js`:
- `fade-in`: ظهور تدريجي
- `slide-up`: انزلاق للأعلى
- `bounce-gentle`: نطاط لطيف

## النقاط الفاصلة المتجاوبة
- **Mobile**: أقل من 640px
- **Tablet**: 640px - 1024px
- **Desktop**: أكثر من 1024px

## النصوص العربية
المشروع يدعم النصوص العربية والاتجاه من اليمين إلى اليسار (RTL) بشكل كامل.

## النشر
يمكن نشر المشروع على أي منصة تدعم المواقع الثابتة:
- Vercel
- Netlify
- GitHub Pages
- Firebase Hosting

## الدعم
إذا واجهت أي مشاكل أو لديك أسئلة، يرجى التواصل معنا عبر:
- البريد الإلكتروني: info@outlitak.com
- الهاتف: +966 50 123 4567

## الترخيص
هذا المشروع مرخص تحت رخصة MIT.
