// بيانات الخدمات
const services = [
  {
    id: 1,
    name: 'استشارة',
    description: 'استشارة طبية لتقييم حالة الأسنان.',
    image: 'https://via.placeholder.com/300x180?text=استشارة',
    duration: '30 دقيقة',
    benefits: 'تشخيص دقيق، خطة علاج مخصصة.',
    moreInfo: 'استشارة مع أطباء متخصصين.',
    details: 'نقدم استشارات شاملة مع أطباء متخصصين لتحديد أفضل خطة علاجية لكل مريض.',
    video: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    images: [
      'https://via.placeholder.com/300x200?text=استشارة+1',
      'https://via.placeholder.com/300x200?text=استشارة+2',
      'https://via.placeholder.com/300x200?text=استشارة+3'
    ]
  },
  {
    id: 2,
    name: 'تنظيف الأسنان',
    description: 'إزالة الجير والبقع للحفاظ على صحة الأسنان.',
    image: 'https://i.ibb.co/bgJkP6YJ/Screenshot-2025-08-24-034929.png',
    duration: '30 دقيقة',
    benefits: 'منع التسوس، تحسين صحة اللثة.',
    moreInfo: 'تنظيف بالموجات فوق الصوتية.',
    details: 'تنظيف عميق باستخدام الموجات فوق الصوتية لإزالة الجير والبقع بأمان.',
    video: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    images: [
      'https://via.placeholder.com/300x200?text=تنظيف+1',
      'https://via.placeholder.com/300x200?text=تنظيف+2',
      'https://via.placeholder.com/300x200?text=تنظيف+3'
    ]
  },
  {
    id: 3,
    name: 'تبييض الأسنان',
    description: 'تبييض الأسنان بأمان وسرعة.',
    image: 'https://via.placeholder.com/300x180?text=تبييض+الأسنان',
    duration: '1 ساعة',
    benefits: 'ابتسامة مشرقة، تحسين الثقة بالنفس.',
    moreInfo: 'استخدام ليزر آمن ومواد عالية الجودة.',
    details: 'تبييض الأسنان باستخدام ليزر آمن ومواد معتمدة عالميًا، مع نتائج فورية.',
    video: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    images: [
      'https://via.placeholder.com/300x200?text=تبييض+1',
      'https://via.placeholder.com/300x200?text=تبييض+2',
      'https://via.placeholder.com/300x200?text=تبييض+3'
    ]
  },
  {
    id: 4,
    name: 'توريد اللثة',
    description: 'علاج تصبغ اللثة لتحسين المظهر.',
    image: 'https://via.placeholder.com/300x180?text=توريد+اللثة',
    duration: '1 ساعة',
    benefits: 'لثة صحية ومظهر جمالي.',
    moreInfo: 'علاج بالليزر لتصحيح لون اللثة.',
    details: 'توريد اللثة باستخدام تقنيات ليزر متقدمة للحصول على لثة صحية ومظهر طبيعي.',
    video: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    images: [
      'https://via.placeholder.com/300x200?text=توريد+1',
      'https://via.placeholder.com/300x200?text=توريد+2',
      'https://via.placeholder.com/300x200?text=توريد+3'
    ]
  },
  {
    id: 5,
    name: 'حشو عادي',
    description: 'حشوات لعلاج التسوس بمواد آمنة.',
    image: 'https://via.placeholder.com/300x180?text=حشو+عادي',
    duration: '45 دقيقة',
    benefits: 'إصلاح التسوس، حماية الأسنان.',
    moreInfo: 'حشوات متينة وآمنة.',
    details: 'حشوات عادية باستخدام مواد عالية الجودة لعلاج التسوس وحماية الأسنان.',
    video: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    images: [
      'https://via.placeholder.com/300x200?text=حشو+عادي+1',
      'https://via.placeholder.com/300x200?text=حشو+عادي+2',
      'https://via.placeholder.com/300x200?text=حشو+عادي+3'
    ]
  },
  {
    id: 6,
    name: 'حشو تجميلي أمامي',
    description: 'حشوات تجميلية للأسنان الأمامية.',
    image: 'https://via.placeholder.com/300x180?text=حشو+تجميلي+أمامي',
    duration: '1 ساعة',
    benefits: 'مظهر طبيعي، تحسين الابتسامة.',
    moreInfo: 'حشوات مطابقة للون الأسنان.',
    details: 'حشوات تجميلية أمامية بمواد مطابقة للون الأسنان لتحسين المظهر.',
    video: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    images: [
      'https://via.placeholder.com/300x200?text=حشو+أمامي+1',
      'https://via.placeholder.com/300x200?text=حشو+أمامي+2',
      'https://via.placeholder.com/300x200?text=حشو+أمامي+3'
    ]
  },
  {
    id: 7,
    name: 'حشو تجميلي خلفي',
    description: 'حشوات تجميلية للأسنان الخلفية.',
    image: 'https://via.placeholder.com/300x180?text=حشو+تجميلي+خلفي',
    duration: '1 ساعة',
    benefits: 'متانة ومظهر طبيعي.',
    moreInfo: 'حشوات بيضاء متينة.',
    details: 'حشوات تجميلية خلفية بمواد متينة لضمان المظهر والوظيفة.',
    video: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    images: [
      'https://via.placeholder.com/300x200?text=حشو+خلفي+1',
      'https://via.placeholder.com/300x200?text=حشو+خلفي+2',
      'https://via.placeholder.com/300x200?text=حشو+خلفي+3'
    ]
  },
  {
    id: 8,
    name: 'زراعة الأسنان',
    description: 'زراعة أسنان دائمة بجودة عالية.',
    image: 'https://via.placeholder.com/300x180?text=زراعة+الأسنان',
    duration: '3-6 أشهر',
    benefits: 'استعادة وظيفة الأسنان، مظهر طبيعي.',
    moreInfo: 'زراعة بتقنية 3D لضمان الدقة.',
    details: 'زراعة الأسنان باستخدام تقنية 3D لضمان الدقة والراحة، مع ضمان لمدة 5 سنوات.',
    video: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    images: [
      'https://via.placeholder.com/300x200?text=زراعة+1',
      'https://via.placeholder.com/300x200?text=زراعة+2',
      'https://via.placeholder.com/300x200?text=زراعة+3'
    ]
  },
  {
    id: 9,
    name: 'تركيبات ثابتة',
    description: 'تركيبات أسنان دائمة لتحسين الوظيفة.',
    image: 'https://via.placeholder.com/300x180?text=تركيبات+ثابتة',
    duration: '2-4 أسابيع',
    benefits: 'متانة، مظهر طبيعي.',
    moreInfo: 'تركيبات زيركون وبورسلين.',
    details: 'تركيبات ثابتة باستخدام زيركون أو بورسلين لضمان المتانة والمظهر الطبيعي.',
    video: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    images: [
      'https://via.placeholder.com/300x200?text=تركيبات+ثابتة+1',
      'https://via.placeholder.com/300x200?text=تركيبات+ثابتة+2',
      'https://via.placeholder.com/300x200?text=تركيبات+ثابتة+3'
    ]
  },
  {
    id: 10,
    name: 'تركيبات متحركة',
    description: 'تركيبات أسنان قابلة للإزالة.',
    image: 'https://via.placeholder.com/300x180?text=تركيبات+متحركة',
    duration: '1-2 أسابيع',
    benefits: 'راحة، سهولة الاستخدام.',
    moreInfo: 'تركيبات مرنة ومتينة.',
    details: 'تركيبات متحركة مريحة وسهلة الاستخدام، مصممة حسب احتياجات المريض.',
    video: 'https://www.pinterest.com/pin/6192518232116165',
    images: [
      'https://via.placeholder.com/300x200?text=تركيبات+متحركة+1',
      'https://via.placeholder.com/300x200?text=تركيبات+متحركة+2',
      'https://via.placeholder.com/300x200?text=تركيبات+متحركة+3'
    ]
  },
  {
    id: 11,
    name: 'علاج عصب',
    description: 'علاج قنوات العصب بدقة عالية.',
    image: 'https://via.placeholder.com/300x180?text=علاج+عصب',
    duration: '1-2 ساعة',
    benefits: 'إزالة الألم، الحفاظ على السن.',
    moreInfo: 'علاج باستخدام أحدث الأجهزة.',
    details: 'علاج قنوات العصب باستخدام أجهزة متطورة لضمان الراحة وإزالة الألم.',
    video: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    images: [
      'https://via.placeholder.com/300x200?text=عصب+1',
      'https://via.placeholder.com/300x200?text=عصب+2',
      'https://via.placeholder.com/300x200?text=عصب+3'
    ]
  },
  {
    id: 12,
    name: 'إعادة حشو عصب',
    description: 'إعادة علاج قنوات العصب للحالات السابقة.',
    image: 'https://via.placeholder.com/300x180?text=إعادة+حشو+عصب',
    duration: '1-2 ساعة',
    benefits: 'إصلاح العلاج السابق، الحفاظ على السن.',
    moreInfo: 'علاج دقيق بتقنيات متقدمة.',
    details: 'إعادة حشو قنوات العصب باستخدام تقنيات متقدمة لضمان نجاح العلاج.',
    video: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    images: [
      'https://via.placeholder.com/300x200?text=إعادة+عصب+1',
      'https://via.placeholder.com/300x200?text=إعادة+عصب+2',
      'https://via.placeholder.com/300x200?text=إعادة+عصب+3'
    ]
  },
  {
    id: 13,
    name: 'علاج الجذور',
    description: 'علاج جذور الأسنان بدقة عالية.',
    image: 'https://via.placeholder.com/300x180?text=علاج+الجذور',
    duration: '1-2 ساعة',
    benefits: 'إزالة الألم، الحفاظ على السن.',
    moreInfo: 'علاج باستخدام أحدث الأجهزة.',
    details: 'علاج جذور الأسنان باستخدام أجهزة متطورة لضمان الراحة وإزالة الألم.',
    video: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    images: [
      'https://via.placeholder.com/300x200?text=جذور+1',
      'https://via.placeholder.com/300x200?text=جذور+2',
      'https://via.placeholder.com/300x200?text=جذور+3'
    ]
  },
  {
    id: 14,
    name: 'خلع عادي',
    description: 'خلع الأسنان بسهولة وأمان.',
    image: 'https://i.ibb.co/CRfFgfw/Screenshot-2025-08-24-194754.png',
    duration: '30 دقيقة',
    benefits: 'إزالة الأسنان التالفة، راحة فورية.',
    moreInfo: 'خلع بأقل ألم ممكن.',
    details: 'خلع الأسنان باستخدام تقنيات حديثة لضمان الراحة وتقليل الألم.',
    video: 'https://www.youtube.com/embed/RIhr32Ko-uY?si=vRkwgMqzMhWLS1bH',
    images: [
      'https://i.ibb.co/CRfFgfw/Screenshot-2025-08-24-194754.png',
      'https://via.placeholder.com/300x200?text=خلع+عادي+2',
      'https://via.placeholder.com/300x200?text=خلع+عادي+3'
    ]
  },
  {
    id: 15,
    name: 'خلع جراحي',
    description: 'خلع الأسنان المعقدة بإجراءات جراحية.',
    image: 'https://i.ibb.co/BVqf97Vz/Screenshot-2025-08-24-195954.png',
    duration: '1 ساعة',
    benefits: 'حل المشكلات المعقدة، راحة سريعة.',
    moreInfo: 'إجراءات جراحية دقيقة.',
    details: 'خلع جراحي باستخدام تقنيات متقدمة لضمان الدقة والراحة.',
    video: 'https://www.youtube.com/embed/FDS5v5nsN4U?si=Hayu9axZOXVILlh9',
    images: [
      'https://i.ibb.co/BVqf97Vz/Screenshot-2025-08-24-195954.png',
      'https://via.placeholder.com/300x200?text=خلع+جراحي+2',
      'https://via.placeholder.com/300x200?text=خلع+جراحي+3'
    ]
  },
  {
    id: 16,
    name: 'خلع ضرس العقل',
    description: 'خلع ضرس العقل بأمان.',
    image: 'https://i.ibb.co/CRfFgfw/Screenshot-2025-08-24-194754.png',
    duration: '1 ساعة',
    benefits: 'إزالة الألم، منع المضاعفات.',
    moreInfo: 'إجراءات دقيقة لخلع ضرس العقل.',
    details: 'خلع ضرس العقل باستخدام تقنيات متقدمة لتقليل الألم والمضاعفات.',
    video: 'https://www.youtube.com/embed/fm208EgQUoU?si=QGsQU9mHPoEqVRoj',
    images: [
      'https://i.ibb.co/CRfFgfw/Screenshot-2025-08-24-194754.png',
      'https://i.ibb.co/LdtWRxFQ/Screenshot-2025-08-24-194722.png',
      'https://i.ibb.co/mrkxwfh8/Screenshot-2025-08-24-194901.png'
    ]
  },
  {
    id: 17,
    name: 'خلع ضرس العقل المدفون',
    description: 'خلع ضرس العقل المدفون بإجراءات جراحية.',
    image: 'https://i.ibb.co/BVqf97Vz/Screenshot-2025-08-24-195954.png',
    duration: '1-2 ساعة',
    benefits: 'إزالة الألم، منع المضاعفات.',
    moreInfo: 'جراحة دقيقة لضرس العقل المدفون.',
    details: 'خلع ضرس العقل المدفون باستخدام تقنيات جراحية متقدمة لضمان الراحة.',
    video: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    images: [
      'https://i.ibb.co/d4JT20qy/1502.jpg',
      'https://i.ibb.co/BVqf97Vz/Screenshot-2025-08-24-195954.png',
      'https://i.ibb.co/20VTSXy7/1150-842.jpg'
    ]
  },
  {
    id: 18,
    name: 'جراحة الأسنان',
    description: 'إجراءات جراحية لعلاج مشكلات الأسنان المعقدة.',
    image: 'https://i.ibb.co/TBX7cjC2/istockphoto-1321154056-612x612-1.jpg',
    duration: '1-3 ساعات',
    benefits: 'حل المشكلات المعقدة، تحسين الصحة الفموية.',
    moreInfo: 'جراحات دقيقة بأحدث التقنيات.',
    details: 'إجراءات جراحية متقدمة لعلاج مشكلات الأسنان المعقدة بأعلى معايير الجودة.',
    video: 'https://www.youtube.com/embed/jhi4lQJlvhw?si=QVosMPxqZUllHshK',
    images: [
      'https://i.ibb.co/YBQrydqy/maxillofacial.png',
      'https://i.ibb.co/TBX7cjC2/istockphoto-1321154056-612x612-1.jpg',
      'https://i.ibb.co/cXXqGQ5W/images.jpg'
    ]
  }
];

// مواعيد الأسبوع
const weekSchedule = {
  'الأحد': ['04:00 م', '05:00 م', '06:00 م', '07:00 م', '08:00 م', '09:00 م', '10:00 م', '11:00 م'],
  'الإثنين': ['04:00 م', '05:00 م', '06:00 م', '07:00 م', '08:00 م', '09:00 م', '10:00 م', '11:00 م'],
  'الثلاثاء': ['04:00 م', '05:00 م', '06:00 م', '07:00 م', '08:00 م', '09:00 م', '10:00 م', '11:00 م'],
  'الأربعاء': ['04:00 م', '05:00 م', '06:00 م', '07:00 م', '08:00 م', '09:00 م', '10:00 م', '11:00 م'],
  'الخميس': ['04:00 م', '05:00 م', '06:00 م', '07:00 م', '08:00 م', '09:00 م', '10:00 م', '11:00 م'],
  'الجمعة': ['04:00 م', '05:00 م', '06:00 م', '07:00 م', '08:00 م', '09:00 م', '10:00 م', '11:00 م'],
  'السبت': ['04:00 م', '05:00 م', '06:00 م', '07:00 م', '08:00 م', '09:00 م', '10:00 م', '11:00 م'],
};

// مواعيد محجوزة (مثال)
const bookedSlots = [
  { day: 'الأحد', time: '09:00 ص' },
  { day: 'الإثنين', time: '11:00 ص' },
];

// إخفاء الـ loader وإشعار ترحيبي
window.addEventListener('load', () => {
  const loader = document.getElementById('loader');
  loader.style.opacity = '0';
  setTimeout(() => {
    loader.style.display = 'none';
  }, 500);

  Swal.fire({
    title: 'مرحبًا بكم في مركز ريفولي!',
    text: 'نقدم خدمات طب الأسنان بأحدث التقنيات، احجز موعدك الآن.',
    icon: 'info',
    confirmButtonText: 'موافق',
    confirmButtonColor: '#4FC3F7'
  });

  // تحميل الوضع من localStorage
  if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
    document.getElementById('theme-toggle').innerHTML = '<i class="fas fa-sun"></i>';
  }
});

// قائمة الهامبرغر
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
});

document.querySelectorAll('.nav-menu a').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
  });
});

// تبديل الوضع النهاري/الليلي
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  if (document.body.classList.contains('dark-mode')) {
    themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    localStorage.setItem('theme', 'dark');
  } else {
    themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    localStorage.setItem('theme', 'light');
  }
});

// عرض الخدمات ديناميكيًا
const servicesContainer = document.getElementById('services-container');
const serviceSelect = document.getElementById('service-select');

function displayServices() {
  if (!services || services.length === 0) {
    console.error('خطأ: قائمة الخدمات فارغة أو غير معرفة');
    servicesContainer.innerHTML = '<p style="text-align: center; color: #D32F2F;">عذرًا، لا توجد خدمات متاحة حاليًا.</p>';
    return;
  }

  servicesContainer.innerHTML = ''; // تنظيف الحاوية
  services.forEach(service => {
    const serviceCard = document.createElement('div');
    serviceCard.classList.add('service-card');
    serviceCard.innerHTML = `
      <img src="${service.image}" alt="${service.name}" loading="lazy">
      <h3>${service.name}</h3>
      <div class="details">
        <p>${service.description}</p>
        <p><strong>المدة:</strong> ${service.duration}</p>
        <p><strong>الفوائد:</strong> ${service.benefits}</p>
        <a href="#" class="more-info" onclick="showServiceDetails(${service.id})">المزيد من المعلومات</a>
      </div>
    `;
    servicesContainer.appendChild(serviceCard);

    const option = document.createElement('option');
    option.value = service.id;
    option.textContent = service.name;
    serviceSelect.appendChild(option);
  });
}

// عرض تفاصيل الخدمة في نافذة منبثقة
function showServiceDetails(serviceId) {
  const service = services.find(s => s.id === serviceId);
  const sliderId = `swiper-${service.id}`;
  Swal.fire({
    title: service.name,
    html: `
      <p>${service.details}</p>
      <iframe src="${service.video}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      <div class="swiper" id="${sliderId}">
        <div class="swiper-wrapper">
          ${service.images.map(img => `<div class="swiper-slide"><img src="${img}" alt="${service.name}"></div>`).join('')}
        </div>
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
        <div class="swiper-pagination"></div>
      </div>
      <a href="#booking" class="cta-button">احجز الآن</a>
    `,
    showConfirmButton: false,
    showCloseButton: true,
    width: '800px',
    didOpen: () => {
      new Swiper(`#${sliderId}`, {
        slidesPerView: 1,
        spaceBetween: 10,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        loop: true,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
      });
    },
    customClass: {
      popup: 'swal2-service-details'
    }
  });
}

// سلايدر معرض الصور
document.addEventListener('DOMContentLoaded', () => {
  try {
    displayServices();
    displaySchedule();
    new Swiper('.gallery-swiper', {
      slidesPerView: 3,
      spaceBetween: 20,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      loop: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      breakpoints: {
        768: {
          slidesPerView: 1,
          spaceBetween: 10,
        }
      }
    });
  } catch (error) {
    console.error('خطأ في عرض الخدمات، الجدول، أو السلايدر:', error);
    servicesContainer.innerHTML = '<p style="text-align: center; color: #D32F2F;">خطأ في تحميل الخدمات، يرجى المحاولة لاحقًا.</p>';
  }

  const confirmButton = document.getElementById('confirm-booking');
  const patientName = document.getElementById('patient-name');
  const patientPhone = document.getElementById('patient-phone');
  const serviceSelect = document.getElementById('service-select');
  let selectedSlot = null;

  function displaySchedule() {
  const scheduleBody = document.getElementById('schedule-body');
  scheduleBody.innerHTML = '';

  const times = ['04:00 م', '05:00 م', '06:00 م', '07:00 م', '08:00 م', '09:00 م', '10:00 م', '11:00 م'];
  times.forEach(time => {
    const row = document.createElement('tr');
    ['الأحد', 'الإثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة', 'السبت'].forEach(day => {
      const isBooked = bookedSlots.some(slot => slot.day === day && slot.time === time);
      const button = document.createElement('button');
      button.textContent = time;
      button.classList.add(isBooked ? 'booked' : 'available');
      if (isBooked) button.disabled = true;
      button.addEventListener('click', () => selectSlot(day, time, button));
      const td = document.createElement('td');
      td.appendChild(button);
      row.appendChild(td);
    });
    scheduleBody.appendChild(row);
  });
}

  function selectSlot(day, time, button) {
    if (!serviceSelect.value) {
      Swal.fire('خطأ', 'يرجى اختيار الخدمة أولاً', 'error');
      return;
    }

    // إزالة التحديد السابق
    document.querySelectorAll('.schedule-table button.selected').forEach(btn => {
      btn.classList.remove('selected');
      btn.classList.add('available');
    });

    // تحديد الموعد الجديد
    button.classList.remove('available');
    button.classList.add('selected');
    selectedSlot = { day, time };
    confirmButton.disabled = false;

    Swal.fire({
      title: 'تم اختيار الموعد',
      text: `لقد اخترت يوم ${day} الساعة ${time}`,
      icon: 'info',
      confirmButtonText: 'موافق',
      confirmButtonColor: '#4FC3F7'
    });
  }

  // تأكيد الحجز وإرسال إلى واتساب
  confirmButton.addEventListener('click', () => {
    const serviceId = serviceSelect.value;
    const name = patientName.value.trim();
    const phone = patientPhone.value.trim();

    if (!name || !phone || !serviceId || !selectedSlot) {
      Swal.fire('خطأ', 'يرجى إدخال جميع البيانات واختيار موعد', 'error');
      return;
    }

    if (!/^\d{11}$/.test(phone)) {
      Swal.fire('خطأ', 'يرجى إدخال رقم هاتف صحيح (11 رقم)', 'error');
      return;
    }

    const service = services.find(s => s.id == serviceId);
    const bookingDate = new Date();
    bookingDate.setDate(bookingDate.getDate() + 7); // الحجز بعد أسبوع
    const formattedDate = bookingDate.toLocaleDateString('ar-EG');

    const message = encodeURIComponent(
      `حجز جديد:\n` +
      `الاسم: ${name}\n` +
      `رقم الهاتف: ${phone}\n` +
      `الخدمة: ${service.name}\n` +
      `اليوم: ${selectedSlot.day}\n` +
      `الساعة: ${selectedSlot.time}\n` +
      `التاريخ: ${formattedDate}\n` +
      `رابط المركز: https://revoli-dental.com`
    );

    console.log('رسالة واتساب:', decodeURIComponent(message)); // تسجيل الرسالة للتحقق

    Swal.fire({
      title: 'ملخص الحجز',
      html: `
        <p><strong>الاسم:</strong> ${name}</p>
        <p><strong>رقم الهاتف:</strong> ${phone}</p>
        <p><strong>الخدمة:</strong> ${service.name}</p>
        <p><strong>اليوم:</strong> ${selectedSlot.day}</p>
        <p><strong>الساعة:</strong> ${selectedSlot.time}</p>
        <p><strong>التاريخ:</strong> ${formattedDate}</p>
      `,
      icon: 'success',
      confirmButtonText: 'تأكيد وإرسال إلى واتساب',
      cancelButtonText: 'إلغاء',
      showCancelButton: true,
      confirmButtonColor: '#4FC3F7',
      cancelButtonColor: '#D32F2F'
    }).then(result => {
      if (result.isConfirmed) {
        bookedSlots.push(selectedSlot);
        displaySchedule();
        patientName.value = '';
        patientPhone.value = '';
        serviceSelect.value = '';
        document.getElementById('schedule-table').style.display = 'none';
        confirmButton.disabled = true;
        window.location.href = `https://wa.me/+201030956097?text=${message}`;
      }
    });
  });

  // إظهار الجدول عند اختيار الخدمة
  serviceSelect.addEventListener('change', () => {
    if (serviceSelect.value) {
      document.getElementById('schedule-table').style.display = 'block';
      Swal.fire('اختر موعدًا', 'يرجى اختيار اليوم والساعة من الجدول', 'info');
    } else {
      document.getElementById('schedule-table').style.display = 'none';
      confirmButton.disabled = true;
    }
  });
});

// خريطة Google
function initMap() {
  try {
    const revoliLocation = { lat: 30.0511, lng: 31.2357 };
    const map = new google.maps.Map(document.getElementById('map'), {
      zoom: 15,
      center: revoliLocation,
    });
    new google.maps.Marker({
      position: revoliLocation,
      map,
      title: 'مركز ريفولي لطب الأسنان',
    });
  } catch (error) {
    console.error('خطأ في تحميل الخريطة:', error);
    document.getElementById('map').innerHTML = '<p style="text-align: center; color: #D32F2F;">فشل تحميل الخريطة، يرجى المحاولة لاحقًا.</p>';
  }
}

// زر العودة للأعلى
const backToTop = document.getElementById('back-to-top');
window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    backToTop.classList.add('show');
  } else {
    backToTop.classList.remove('show');
  }
});

backToTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// دعم اللغة الافتراضية
document.documentElement.lang = navigator.language || 'ar';









