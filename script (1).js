// بيانات الخدمات
const services = [
  {
    id: 1,
    name: 'تقويم الأسنان',
    description: 'تصحيح محاذاة الأسنان بأحدث التقنيات.',
    price: 5000,
    image: '/images/orthodontics.jpg',
    duration: '6-24 شهرًا',
    benefits: 'تحسين المظهر، تصحيح العضة، سهولة التنظيف.',
    moreInfo: 'تقويم معدني أو شفاف حسب الحالة.'
  },
  {
    id: 2,
    name: 'زراعة الأسنان',
    description: 'زراعة أسنان دائمة بجودة عالية.',
    price: 10000,
    image: '/images/implant.jpg',
    duration: '3-6 أشهر',
    benefits: 'استعادة وظيفة الأسنان، مظهر طبيعي.',
    moreInfo: 'زراعة بتقنية 3D لضمان الدقة.'
  },
  {
    id: 3,
    name: 'تبييض الأسنان',
    description: 'تبييض الأسنان بأمان وسرعة.',
    price: 2000,
    image: '/images/whitening.jpg',
    duration: '1 ساعة',
    benefits: 'ابتسامة مشرقة، تحسين الثقة بالنفس.',
    moreInfo: 'استخدام ليزر آمن ومواد عالية الجودة.'
  },
  {
    id: 4,
    name: 'تنظيف الأسنان',
    description: 'إزالة الجير والبقع للحفاظ على صحة الأسنان.',
    price: 500,
    image: '/images/cleaning.jpg',
    duration: '30 دقيقة',
    benefits: 'منع التسوس، تحسين صحة اللثة.',
    moreInfo: 'تنظيف بالموجات فوق الصوتية.'
  },
  {
    id: 5,
    name: 'حشوات الأسنان',
    description: 'حشوات تجميلية وعملية للأسنان.',
    price: 1500,
    image: '/images/filling.jpg',
    duration: '1 ساعة',
    benefits: 'إصلاح التسوس، حماية الأسنان.',
    moreInfo: 'حشوات بيضاء مطابقة للون الأسنان.'
  },
  {
    id: 6,
    name: 'علاج الجذور',
    description: 'علاج قنوات الجذر بدقة عالية.',
    price: 3000,
    image: '/images/root-canal.jpg',
    duration: '1-2 ساعة',
    benefits: 'إزالة الألم، الحفاظ على السن.',
    moreInfo: 'علاج باستخدام أحدث الأجهزة.'
  },
];

// مواعيد الأطباء (محددة يدويًا)
const doctorSchedules = {
  d1: [
    { title: 'متاح', start: '2025-08-25T09:00:00', end: '2025-08-25T10:00:00', backgroundColor: 'green' },
    { title: 'متاح', start: '2025-08-25T11:00:00', end: '2025-08-25T12:00:00', backgroundColor: 'green' },
    { title: 'متاح', start: '2025-08-26T09:00:00', end: '2025-08-26T10:00:00', backgroundColor: 'green' },
  ],
  d2: [
    { title: 'متاح', start: '2025-08-25T14:00:00', end: '2025-08-25T15:00:00', backgroundColor: 'blue' },
    { title: 'متاح', start: '2025-08-25T16:00:00', end: '2025-08-25T17:00:00', backgroundColor: 'blue' },
    { title: 'متاح', start: '2025-08-26T14:00:00', end: '2025-08-26T15:00:00', backgroundColor: 'blue' },
  ],
};

// إخفاء الـ loader بعد التحميل
window.addEventListener('load', () => {
  const loader = document.getElementById('loader');
  loader.style.opacity = '0';
  setTimeout(() => {
    loader.style.display = 'none';
  }, 500);
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

// عرض الخدمات ديناميكيًا
const servicesContainer = document.getElementById('services-container');
const serviceSelect = document.getElementById('service-select');

function displayServices() {
  if (!services || services.length === 0) {
    console.error('خطأ: قائمة الخدمات فارغة أو غير معرفة');
    servicesContainer.innerHTML = '<p style="text-align: center; color: red;">عذرًا، لا توجد خدمات متاحة حاليًا.</p>';
    return;
  }

  servicesContainer.innerHTML = ''; // تنظيف الحاوية
  services.forEach((service, index) => {
    const serviceCard = document.createElement('div');
    serviceCard.classList.add('service-card');
    serviceCard.style.opacity = '0'; // لضمان تأثير GSAP
    serviceCard.innerHTML = `
      <img src="${service.image}" alt="${service.name}" loading="lazy" onerror="this.src='/images/placeholder.jpg'">
      <h3>${service.name}</h3>
      <div class="details">
        <p>${service.description}</p>
        <p><strong>السعر:</strong> ${service.price} ج.م</p>
        <p><strong>المدة:</strong> ${service.duration}</p>
        <p><strong>الفوائد:</strong> ${service.benefits}</p>
        <a href="#" class="more-info" onclick="Swal.fire('${service.name}', '${service.moreInfo}', 'info')">المزيد من المعلومات</a>
      </div>
    `;
    servicesContainer.appendChild(serviceCard);

    // تأثيرات GSAP
    gsap.from(serviceCard, {
      duration: 1,
      x: index % 2 === 0 ? -50 : 50,
      opacity: 0,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: serviceCard,
        start: 'top 85%',
      },
    });

    const option = document.createElement('option');
    option.value = service.id;
    option.textContent = `${service.name} - ${service.price} ج.م`;
    serviceSelect.appendChild(option);
  });
}

// تقويم الحجز
document.addEventListener('DOMContentLoaded', () => {
  try {
    displayServices();
  } catch (error) {
    console.error('خطأ في عرض الخدمات:', error);
    servicesContainer.innerHTML = '<p style="text-align: center; color: red;">خطأ في تحميل الخدمات، يرجى المحاولة لاحقًا.</p>';
  }

  const doctorSelect = document.getElementById('doctor-select');
  const calendarEl = document.getElementById('calendar');
  const confirmButton = document.getElementById('confirm-booking');
  const patientName = document.getElementById('patient-name');
  const patientPhone = document.getElementById('patient-phone');
  let calendar;
  let selectedEvent = null;

  function initializeCalendar(doctorId) {
    if (!doctorSchedules[doctorId]) {
      console.error('خطأ: لا توجد مواعيد متاحة لهذا الطبيب');
      Swal.fire('خطأ', 'لا توجد مواعيد متاحة لهذا الطبيب', 'error');
      return;
    }

    calendarEl.innerHTML = ''; // تنظيف التقويم
    calendar = new FullCalendar.Calendar(calendarEl, {
      plugins: ['dayGrid', 'timeGrid', 'interaction'],
      initialView: 'timeGridWeek',
      selectable: true,
      events: doctorSchedules[doctorId],
      select: (info) => {
        const serviceId = serviceSelect.value;
        if (!serviceId) {
          Swal.fire('خطأ', 'يرجى اختيار الخدمة', 'error');
          return;
        }
        const service = services.find(s => s.id == serviceId);
        selectedEvent = {
          title: service.name,
          start: info.startStr,
          end: info.endStr,
          backgroundColor: 'red',
        };
        document.getElementById('total-price').textContent = `السعر الإجمالي: ${service.price} ج.م`;
        confirmButton.disabled = false;
        Swal.fire('تم الاختيار', `لقد اخترت موعدًا يوم ${new Date(info.startStr).toLocaleDateString('ar-EG')} الساعة ${new Date(info.startStr).toLocaleTimeString('ar-EG')}`, 'info');
      },
      eventClick: (info) => {
        if (info.event.backgroundColor === 'red') {
          Swal.fire('خطأ', 'هذا الموعد محجوز بالفعل', 'error');
          return;
        }
      },
      slotMinTime: '09:00:00',
      slotMaxTime: '21:00:00',
      headerToolbar: {
        left: 'prev,next today',
        center: 'title',
        right: 'timeGridWeek,timeGridDay'
      },
    });
    calendar.render();
  }

  // إظهار التقويم عند اختيار الطبيب والخدمة
  doctorSelect.addEventListener('change', () => {
    if (doctorSelect.value && serviceSelect.value) {
      calendarEl.style.display = 'block';
      initializeCalendar(doctorSelect.value);
      Swal.fire('اختر موعدًا', 'يرجى اختيار اليوم والساعة من التقويم', 'info');
    } else {
      calendarEl.style.display = 'none';
      confirmButton.disabled = true;
    }
  });

  serviceSelect.addEventListener('change', () => {
    if (doctorSelect.value && serviceSelect.value) {
      calendarEl.style.display = 'block';
      initializeCalendar(doctorSelect.value);
      Swal.fire('اختر موعدًا', 'يرجى اختيار اليوم والساعة من التقويم', 'info');
    } else {
      calendarEl.style.display = 'none';
      confirmButton.disabled = true;
    }
  });

  // تأكيد الحجز وإرسال إلى واتساب
  confirmButton.addEventListener('click', () => {
    const serviceId = serviceSelect.value;
    const doctorId = doctorSelect.value;
    const name = patientName.value.trim();
    const phone = patientPhone.value.trim();

    if (!name || !phone || !serviceId || !doctorId || !selectedEvent) {
      Swal.fire('خطأ', 'يرجى إدخال جميع البيانات واختيار موعد', 'error');
      return;
    }

    if (!/^\d{11}$/.test(phone)) {
      Swal.fire('خطأ', 'يرجى إدخال رقم هاتف صحيح (11 رقم)', 'error');
      return;
    }

    const service = services.find(s => s.id == serviceId);
    const message = encodeURIComponent(
      `حجز جديد:\n` +
      `الاسم: ${name}\n` +
      `رقم الهاتف: ${phone}\n` +
      `الخدمة: ${service.name}\n` +
      `الطبيب: ${doctorId === 'd1' ? 'د. أحمد محمد' : 'د. سارة علي'}\n` +
      `الموعد: ${new Date(selectedEvent.start).toLocaleString('ar-EG')}\n` +
      `السعر: ${service.price} ج.م`
    );

    calendar.addEvent(selectedEvent);
    Swal.fire({
      title: 'تم الحجز!',
      text: 'سيتم توجيهك إلى واتساب لتأكيد الحجز.',
      icon: 'success',
      confirmButtonText: 'موافق',
    }).then(() => {
      window.location.href = `https://wa.me/+201234567890?text=${message}`;
    });
  });
});

// خريطة Google
function initMap() {
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

// دعم اللمس
document.querySelectorAll('.service-card').forEach(card => {
  card.addEventListener('touchstart', () => {
    card.style.transform = 'scale(1.05)';
  });
  card.addEventListener('touchend', () => {
    card.style.transform = 'scale(1)';
  });
});