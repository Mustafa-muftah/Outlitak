# دليل إعداد Firebase لأوتليتك

## الخطوة 1: إنشاء مشروع Firebase

1. اذهب إلى [Firebase Console](https://console.firebase.google.com/)
2. انقر على "إنشاء مشروع" أو "Add project"
3. أدخل اسم المشروع: `outltiak` (أو أي اسم تريده)
4. اختر "Disable Google Analytics" إذا كنت لا تريد تحليلات Google
5. انقر على "Create project"

## الخطوة 2: تفعيل Firestore Database

1. في لوحة التحكم، انقر على "Firestore Database" من القائمة اليسرى
2. انقر على "Create database"
3. اختر "Start in test mode" (يمكنك تغيير قواعد الأمان لاحقاً)
4. اختر موقع قاعدة البيانات (يفضل اختيار أقرب موقع لموقعك)
5. انقر على "Done"

## الخطوة 3: الحصول على بيانات التكوين

1. في لوحة التحكم، انقر على "Project settings" (أيقونة الترس)
2. انتقل إلى تبويب "General"
3. ابحث عن قسم "Your apps"
4. انقر على أيقونة الويب `</>`
5. أدخل اسم التطبيق: `outltiak-web`
6. انقر على "Register app"
7. انسخ بيانات التكوين التي تظهر لك

## الخطوة 4: إعداد متغيرات البيئة

1. في مجلد المشروع `outltiak`، أنشئ ملف `.env.local`
2. أضف البيانات التالية (استبدل القيم بالقيم الحقيقية من Firebase):

```env
VITE_FIREBASE_API_KEY=your-actual-api-key
VITE_FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your-project-id
VITE_FIREBASE_STORAGE_BUCKET=your-project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=123456789
VITE_FIREBASE_APP_ID=1:123456789:web:abcdef123456
```

## الخطوة 5: تكوين قواعد الأمان (اختياري)

1. في Firestore Database، انتقل إلى تبويب "Rules"
2. استبدل القواعد الحالية بما يلي:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // السماح بكتابة البيانات في مجموعة contacts
    match /contacts/{document} {
      allow write: if true;  // السماح للجميع بالكتابة
      allow read: if false;  // منع القراءة (للأمان)
    }
    
    // يمكنك إضافة قواعد أخرى حسب احتياجاتك
  }
}
```

## الخطوة 6: اختبار الاتصال

1. تأكد من أن المشروع يعمل: `npm run dev`
2. املأ نموذج الاتصال في الصفحة
3. أرسل الرسالة
4. تحقق من Firestore Database لرؤية البيانات المرسلة

## ملاحظات مهمة

### الأمان
- في الإنتاج، يجب تكوين قواعد أمان أكثر صرامة
- يمكنك إضافة مصادقة المستخدمين إذا كنت تريد
- فكر في إضافة حماية ضد الرسائل المزعجة

### التكلفة
- Firestore يوفر طبقة مجانية سخية
- 1GB تخزين و 50,000 قراءة و 20,000 كتابة شهرياً
- للاستخدام العالي، ستكون التكلفة منخفضة جداً

### النسخ الاحتياطي
- Firebase يقوم بنسخ احتياطي تلقائي
- يمكنك تصدير البيانات يدوياً إذا أردت

## استكشاف الأخطاء

### مشكلة: "Firebase App named '[DEFAULT]' already exists"
**الحل**: تأكد من أنك لا تقوم بتهيئة Firebase أكثر من مرة

### مشكلة: "Permission denied"
**الحل**: تحقق من قواعد الأمان في Firestore

### مشكلة: "Network error"
**الحل**: تحقق من اتصال الإنترنت وإعدادات الجدار الناري

## الدعم

إذا واجهت أي مشاكل:
1. تحقق من [Firebase Documentation](https://firebase.google.com/docs)
2. راجع [Firebase Community](https://firebase.google.com/community)
3. تأكد من أن جميع المتغيرات البيئية صحيحة

## الخطوات التالية

بعد إعداد Firebase:
1. اختبر إرسال الرسائل
2. راجع البيانات في Firestore Console
3. فكر في إضافة ميزات أخرى مثل:
   - إشعارات البريد الإلكتروني
   - لوحة تحكم للمشرف
   - تتبع الرسائل 