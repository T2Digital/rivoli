// بيانات الخدمات
const services = [
  {
    id: 1,
    name: 'تقويم الأسنان',
    description: 'تصحيح محاذاة الأسنان بأحدث التقنيات.',
    image: 'https://via.placeholder.com/300x180?text=تقويم+الأسنان',
    duration: '6-24 شهرًا',
    benefits: 'تحسين المظهر، تصحيح العضة، سهولة التنظيف.',
    moreInfo: 'تقويم معدني أو شفاف حسب الحالة.',
    details: 'نقدم تقويم الأسنان باستخدام أحدث التقنيات لضمان نتائج مثالية. تشمل الخدمة استشارة مجانية ومتابعة دورية.',
    video: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    images: [
      'https://via.placeholder.com/300x200?text=تقويم+1',
      'https://via.placeholder.com/300x200?text=تقويم+2',
      'https://via.placeholder.com/300x200?text=تقويم+3'
    ]
  },
  {
    id: 2,
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
    name: 'تنظيف الأسنان',
    description: 'إزالة الجير والبقع للحفاظ على صحة الأسنان.',
    image: 'https://via.placeholder.com/300x180?text=تنظيف+الأسنان',
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
    id: 5,
    name: 'حشوات الأسنان',
    description: 'حشوات تجميلية وعملية للأسنان.',
    image: 'https://via.placeholder.com/300x180?text=حشوات+الأسنان',
    duration: '1 ساعة',
    benefits: 'إصلاح التسوس، حماية الأسنان.',
    moreInfo: 'حشوات بيضاء مطابقة للون الأسنان.',
    details: 'حشوات تجميلية مطابقة للون الأسنان، مع متانة عالية ومظهر طبيعي.',
    video: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    images: [
      'https://via.placeholder.com/300x200?text=حشوات+1',
      'https://via.placeholder.com/300x200?text=حشوات+2',
      'https://via.placeholder.com/300x200?text=حشوات+3'
    ]
  },
  {
    id: 6,
    name: 'علاج الجذور',
    description: 'علاج قنوات الجذر بدقة عالية.',
    image: 'https://via.placeholder.com/300x180?text=علاج+الجذور',
    duration: '1-2 ساعة',
    benefits: 'إزالة الألم، الحفاظ على السن.',
    moreInfo: 'علاج باستخدام أحدث الأجهزة.',
    details: 'علاج قنوات الجذر باستخدام أجهزة متطورة لضمان الراحة وإزالة الألم.',
    video: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    images: [
      'https://via.placeholder.com/300x200?text=علاج+1',
      'https://via.placeholder.com/300x200?text=علاج+2',
      'https://via.placeholder.com/300x200?text=علاج+3'
    ]
  },
];

// مواعيد الأسبوع
const weekSchedule = {
  'الأحد': ['09:00 ص', '10:00 ص', '11:00 ص', '02:00 م', '03:00 م', '04:00 م'],
  'الإثنين': ['09:00 ص', '10:00 ص', '11:00 ص', '02:00 م', '03:00 م', '04:00 م'],
  'الثلاثاء': ['09:00 ص', '10:00 ص', '11:00 ص', '02:00 م', '03:00 م', '04:00 م'],
  'الأربعاء': ['09:00 ص', '10:00 ص', '11:00 ص', '02:00 م', '03:00 م', '04:00 م'],
  'الخميس': ['09:00 ص', '10:00 ص', '11:00 ص', '02:00 م', '03:00 م', '04:00 م'],
  'الجمعة': ['09:00 ص', '10:00 ص', '11:00 ص', '02:00 م', '03:00 م', '04:00 م'],
  'السبت': ['09:00 ص', '10:00 ص', '11:00 ص', '02:00 م', '03:00 م', '04:00 م'],
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

    const times = ['09:00 ص', '10:00 ص', '11:00 ص', '02:00 م', '03:00 م', '04:00 م'];
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
