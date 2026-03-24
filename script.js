document.addEventListener("DOMContentLoaded", () => {
  const scrollContainer = document.getElementById("services-scroll");
  const leftBtn = document.querySelector(".scroll-btn.left");
  const rightBtn = document.querySelector(".scroll-btn.right");

  if (scrollContainer && leftBtn && rightBtn) {
    leftBtn.addEventListener("click", () => {
      scrollContainer.scrollBy({ left: -350, behavior: "smooth" });
    });

    rightBtn.addEventListener("click", () => {
      scrollContainer.scrollBy({ left: 350, behavior: "smooth" });
    });
  }
});

// Language System

const translations = {
  en: {
    site_name: "Alishan Events",
    tagline: "We Crave Perfection",
    explore_services: "Explore Services",

    our_services: "Our Services",
    wedding_events: "Wedding Events",
    wedding_description:
      "Luxury wedding planning with premium decoration and lighting.",
    corporate_events: "Corporate Events",
    corporate_description:
      "Professional conferences and corporate event management.",
    birthday_events: "Birthday Events",
    birthday_description:
      "Stylish and fun birthday celebrations with custom themes, decoration, and entertainment.",
    boro_somabesh: "Large Gatherings",
    boro_somabesh_description:
      "Expert management of large-scale gatherings, social events, and community programs with seamless execution.",
    concert_and_parties: "Concert & Parties",
    concert_and_parties_description:
      "Energetic concerts and unforgettable celebrations.",
    view_details: "View Details",

    book_your_event: "Book Your Event",
    book_now: "Book Now",

    some_of_our_works: "Some of Our Works",
    explore_more: "Explore More",

    about_alishan_events_description:
      "We craft luxury weddings, corporate events, concerts, and unforgettable celebrations with perfection.",

    quick_links: "Quick Links",
    home: "Home",
    services: "Services",
    gallery: "Gallery",
    contact: "Contact",

    footer_credit:
      "© 2026 Alishan Events. All Rights Reserved. Developed by RAMS Tech.",

    wedding_events_description:
      "Exquisite wedding planning with premium décor, lighting, and bespoke event design",
    service_decor: "Decor & Theme",
    decor_theme: "Decor & Theme",
    decor_desc: "Custom luxury decor and theme design for your dream wedding.",
    service_catering: "Catering & Cuisine",
    catering_cuisine: "Catering & Cuisine",
    catering_desc: "Premium multi-cuisine catering to impress your guests.",
    service_photography: "Photography & Videography",
    photography_videography: "Photography & Videography",
    photography_desc:
      "Capture every magical moment with professional photography.",
    service_entertainment: "Entertainment",
    entertainment: "Entertainment",
    entertainment_desc:
      "Live music, DJs, and performers for an unforgettable celebration.",
    wedding_gallery: "Wedding Gallery",
    corporate_events: "Corporate Events",
    corporate_events_description:
      "Professional corporate event planning with premium decor, audiovisual solutions, and seamless coordination.",
    event_design: "Event Design & Theme",
    event_design_desc:
      "Customized corporate event concepts with premium staging and decor.",
    catering: "Catering & Hospitality",
    catering_desc:
      "Professional catering services for conferences, meetings, and gala dinners.",
    audiovisual: "Audiovisual Solutions",
    audiovisual_desc:
      "High-quality sound, lighting, and visual production for a flawless event.",
    entertainment_corp: "Entertainment & Networking",
    entertainment_corp_desc:
      "Live performances and team-building activities for corporate engagement.",
    corporate_gallery: "Corporate Event Gallery",
    back: "← Back",
    birthday_events: "Birthday Events",
    birthday_events_description:
      "Memorable birthday celebrations with themed decor, custom cakes, and full entertainment packages.",
    our_services: "Our Services",
    birthday_theme: "Birthday Theme & Decor",
    birthday_theme_desc:
      "Customized party themes with luxurious decor for an unforgettable birthday.",
    birthday_cake: "Custom Cakes & Catering",
    birthday_cake_desc:
      "Delicious birthday cakes and premium catering to delight your guests.",
    birthday_photography: "Photography & Videography",
    birthday_photography_desc:
      "Professional photography to capture every joyful moment.",
    birthday_entertainment: "Entertainment",
    birthday_entertainment_desc:
      "Live music, performers, and fun activities for guests of all ages.",
    birthday_gallery: "Birthday Event Gallery",
    large_gatherings: "Large Gatherings",
    large_gatherings_description:
      "Seamless planning for large-scale events with premium decor, logistics, and full entertainment coordination.",
    our_services: "Our Services",
    venue_setup: "Venue Setup & Decor",
    venue_setup_desc:
      "Spacious venue arrangements with elegant decor tailored for large crowds.",
    catering_large: "Catering & Hospitality",
    catering_large_desc:
      "High-quality catering solutions for hundreds of guests with diverse menus.",
    audio_lighting: "Audio & Lighting",
    audio_lighting_desc:
      "Professional sound, lighting, and stage management for large events.",
    event_entertainment: "Entertainment & Activities",
    event_entertainment_desc:
      "Live performances, interactive activities, and crowd engagement for unforgettable experiences.",
    large_gatherings_gallery: "Large Gatherings Gallery",

    concert_events: "Concerts & Parties",
    concert_events_description:
      "Exciting concerts and vibrant parties with full-scale production, lighting, and entertainment services.",
    our_services: "Our Services",
    concert_production: "Event Production",
    concert_production_desc:
      "Professional production setup including stage, sound, and lighting for concerts and parties.",
    concert_catering: "Catering & VIP Services",
    concert_catering_desc:
      "Exclusive catering and VIP arrangements for attendees and performers.",
    concert_photography: "Photography & Videography",
    concert_photography_desc:
      "Capture every high-energy moment with professional photography and videography.",
    concert_entertainment: "Entertainment Coordination",
    concert_entertainment_desc:
      "Live performances, DJs, and entertainment planning for memorable events.",
    concert_gallery: "Concert & Party Gallery",
    booking_page: "Book Your Event",
    booking_description:
      "Share your details below and we will help plan your perfect celebration with our premium services.",
    start_journey: "Start Your Journey With Us",
    booking_instructions:
      "Fill out the form and we’ll contact you to discuss your event details, availability, and ideas.",
    full_name: "Full Name",
    email_address: "Email Address",
    phone_number: "Phone Number",
    preferred_date: "Preferred Date",
    event_location: "Event Location",
    estimated_budget: "Estimated Budget",
    choose_budget: "Choose Your Budget Range",
    event_vision: "Tell Us About Your Vision",
  },

  bn: {
    site_name: "আলিশান ইভেন্টস",
    tagline: "আমরা নিখুঁততাকে ভালোবাসি",
    explore_services: "সার্ভিস দেখুন",

    our_services: "আমাদের সেবাসমূহ",
    wedding_events: "বিয়ের আয়োজন",
    wedding_description: "প্রিমিয়াম ডেকোরেশন ও লাইটিংসহ বিলাসবহুল বিয়ের আয়োজন।",
    corporate_events: "কর্পোরেট ইভেন্ট",
    corporate_description: "পেশাদার কনফারেন্স ও কর্পোরেট ইভেন্ট ব্যবস্থাপনা।",
    birthday_events: "জন্মদিনের আয়োজন",
    birthday_description: "থিম, ডেকোরেশন ও বিনোদনসহ আকর্ষণীয় জন্মদিনের আয়োজন।",
    boro_somabesh: "বড় সমাবেশ",
    boro_somabesh_description:
      "বড় আকারের সমাবেশ, সামাজিক অনুষ্ঠান ও প্রোগ্রামের দক্ষ ব্যবস্থাপনা।",
    concert_and_parties: "কনসার্ট ও পার্টি",
    concert_and_parties_description: "উদ্দীপনাময় কনসার্ট ও স্মরণীয় আয়োজন।",
    view_details: "বিস্তারিত দেখুন",

    book_your_event: "আপনার ইভেন্ট বুক করুন",
    book_now: "এখনই বুক করুন",

    some_of_our_works: "আমাদের কিছু কাজ",
    explore_more: "আরও দেখুন",

    about_alishan_events_description:
      "আমরা বিলাসবহুল বিয়ে, কর্পোরেট ইভেন্ট, কনসার্ট ও স্মরণীয় আয়োজন তৈরি করি।",

    quick_links: "দ্রুত লিংক",
    home: "হোম",
    services: "সার্ভিস",
    gallery: "গ্যালারি",
    contact: "যোগাযোগ",

    footer_credit: "© ২০২৬ আলিশান ইভেন্টস | বিলাসবহুল অভিজ্ঞতার জন্য তৈরি",

    wedding_events_description:
      "প্রিমিয়াম সাজসজ্জা, আলো এবং ব্যক্তিগতভাবে পরিকল্পিত ইভেন্ট ডিজাইনের মাধ্যমে অভিজাত বিয়ের আয়োজন",
    decor_theme: "সাজসজ্জা ও থিম",
    decor_desc:
      "আপনার স্বপ্নের বিয়ের জন্য কাস্টম লাক্সারি সাজসজ্জা এবং থিম ডিজাইন।",
    service_catering: "খাবার ও রন্ধনপ্রণালী",
    catering_cuisine: "খাবার ও রন্ধনপ্রণালী",
    catering_desc:
      "অতিথিদের মুগ্ধ করার জন্য প্রিমিয়াম মাল্টি-রান্নার ক্যাটারিং।",
    service_photography: "ফটোগ্রাফি ও ভিডিওগ্রাফি",
    photography_videography: "ফটোগ্রাফি ও ভিডিওগ্রাফি",
    photography_desc:
      "পেশাদার ফটোগ্রাফির মাধ্যমে প্রতিটি জাদুকরী মুহূর্ত ক্যাপচার করুন।",
    service_entertainment: "বিনোদন",
    entertainment: "বিনোদন",
    entertainment_desc:
      "স্মরণীয় উদযাপনের জন্য লাইভ মিউজিক, ডি.জে. এবং পারফর্মার।",
    wedding_gallery: "বিয়ের গ্যালারি",
    corporate_events: "কর্পোরেট অনুষ্ঠান",
    corporate_events_description:
      "প্রিমিয়াম সাজসজ্জা, অডিওভিজ্যুয়াল সমাধান এবং নিখুঁত সমন্বয়ের মাধ্যমে পেশাদার কর্পোরেট ইভেন্ট আয়োজন।",
    event_design: "ইভেন্ট ডিজাইন ও থিম",
    event_design_desc:
      "প্রিমিয়াম স্টেজিং এবং সাজসজ্জার মাধ্যমে কাস্টম কর্পোরেট ইভেন্ট পরিকল্পনা।",
    catering: "ক্যাটারিং ও আতিথেয়তা",
    catering_desc: "কনফারেন্স, মিটিং এবং গালা ডিনারের জন্য পেশাদার ক্যাটারিং।",
    audiovisual: "অডিওভিজ্যুয়াল সমাধান",
    audiovisual_desc:
      "নিখুঁত ইভেন্টের জন্য উচ্চমানের সাউন্ড, লাইটিং ও ভিজ্যুয়াল প্রোডাকশন।",
    entertainment_corp: "বিনোদন ও নেটওয়ার্কিং",
    entertainment_corp_desc:
      "কর্পোরেট এনগেজমেন্টের জন্য লাইভ পারফর্মেন্স ও টিম-বিল্ডিং কার্যক্রম।",
    corporate_gallery: "কর্পোরেট ইভেন্ট গ্যালারি",
    back: "← ফিরে যান",
    birthday_events: "জন্মদিনের অনুষ্ঠান",
    birthday_events_description:
      "থিমযুক্ত সাজসজ্জা, কাস্টম কেক এবং সম্পূর্ণ বিনোদন প্যাকেজের মাধ্যমে স্মরণীয় জন্মদিন উদযাপন।",
    our_services: "আমাদের সেবা",
    birthday_theme: "জন্মদিনের থিম ও সাজসজ্জা",
    birthday_theme_desc:
      "অভিজাত সাজসজ্জা সহ কাস্টম পার্টি থিম, যা একটি স্মরণীয় জন্মদিন নিশ্চিত করে।",
    birthday_cake: "কাস্টম কেক ও ক্যাটারিং",
    birthday_cake_desc:
      "সুস্বাদু জন্মদিনের কেক এবং প্রিমিয়াম ক্যাটারিং যা অতিথিদের মুগ্ধ করবে।",
    birthday_photography: "ফটোগ্রাফি ও ভিডিওগ্রাফি",
    birthday_photography_desc:
      "প্রফেশনাল ফটোগ্রাফি প্রতিটি আনন্দময় মুহূর্ত ক্যাপচার করে।",
    birthday_entertainment: "বিনোদন",
    birthday_entertainment_desc:
      "লাইভ মিউজিক, পারফর্মার এবং সমস্ত বয়সের অতিথিদের জন্য মজার কার্যক্রম।",
    birthday_gallery: "জন্মদিনের গ্যালারি",
    large_gatherings: "বড় সমাবেশ",
    large_gatherings_description:
      "প্রিমিয়াম সাজসজ্জা, লগিস্টিক এবং সম্পূর্ণ বিনোদন সমন্বয়ের মাধ্যমে বৃহৎ আকারের ইভেন্টের জন্য নির্বিঘ্ন পরিকল্পনা।",
    our_services: "আমাদের সেবা",
    venue_setup: "ভেন্যু সেটআপ ও সাজসজ্জা",
    venue_setup_desc:
      "বৃহৎ জনসমাবেশের জন্য কাস্টমাইজড অভিজাত সাজসজ্জা সহ বিস্তৃত ভেন্যু ব্যবস্থা।",
    catering_large: "ক্যাটারিং ও আতিথেয়তা",
    catering_large_desc:
      "বিভিন্ন মেনু সহ শতাধিক অতিথির জন্য উচ্চমানের ক্যাটারিং সমাধান।",
    audio_lighting: "অডিও ও লাইটিং",
    audio_lighting_desc:
      "বৃহৎ ইভেন্টের জন্য পেশাদার সাউন্ড, লাইটিং এবং স্টেজ ম্যানেজমেন্ট।",
    event_entertainment: "বিনোদন ও কার্যক্রম",
    event_entertainment_desc:
      "লাইভ পারফর্মেন্স, ইন্টারঅ্যাকটিভ কার্যক্রম এবং অতিথিদের অংশগ্রহণের মাধ্যমে স্মরণীয় অভিজ্ঞতা।",
    large_gatherings_gallery: "বড় সমাবেশ গ্যালারি",

    concert_events: "কনসার্ট ও পার্টি",
    concert_events_description:
      "সম্পূর্ণ প্রোডাকশন, লাইটিং এবং বিনোদন সেবা সহ উত্তেজনাপূর্ণ কনসার্ট এবং জীবন্ত পার্টি।",
    our_services: "আমাদের সেবা",
    concert_production: "ইভেন্ট প্রোডাকশন",
    concert_production_desc:
      "কনসার্ট ও পার্টির জন্য স্টেজ, সাউন্ড এবং লাইটিং সহ পেশাদার প্রোডাকশন সেটআপ।",
    concert_catering: "ক্যাটারিং ও ভিআইপি সেবা",
    concert_catering_desc:
      "উপস্থিতি এবং পারফর্মারের জন্য একচেটিয়া ক্যাটারিং এবং ভিআইপি ব্যবস্থা।",
    concert_photography: "ফটোগ্রাফি ও ভিডিওগ্রাফি",
    concert_photography_desc:
      "প্রফেশনাল ফটোগ্রাফি এবং ভিডিওগ্রাফি দিয়ে প্রতিটি উত্তেজনাপূর্ণ মুহূর্ত ক্যাপচার করুন।",
    concert_entertainment: "বিনোদন সমন্বয়",
    concert_entertainment_desc:
      "লাইভ পারফর্মেন্স, ডিজে এবং বিনোদন পরিকল্পনা যাতে স্মরণীয় ইভেন্ট হয়।",
    concert_gallery: "কনসার্ট ও পার্টি গ্যালারি",
    booking_page: "আপনার ইভেন্ট বুক করুন",
    booking_description:
      "নীচে আপনার তথ্য দিন এবং আমরা প্রিমিয়াম সেবার মাধ্যমে আপনার নিখুঁত উদযাপন পরিকল্পনা করতে সাহায্য করব।",
    start_journey: "আমাদের সঙ্গে আপনার যাত্রা শুরু করুন",
    booking_instructions:
      "ফর্মটি পূরণ করুন এবং আমরা আপনার ইভেন্টের বিবরণ, উপলভ্যতা এবং আইডিয়াস নিয়ে যোগাযোগ করব।",
    full_name: "পূর্ণ নাম",
    email_address: "ইমেইল ঠিকানা",
    phone_number: "ফোন নম্বর",
    preferred_date: "পছন্দসই তারিখ",
    event_location: "ইভেন্টের স্থান",
    estimated_budget: "অনুমানিত বাজেট",
    choose_budget: "আপনার বাজেট সীমা নির্বাচন করুন",
    event_vision: "আপনার ধারণা আমাদের জানান",
  },
  ar: {
    site_name: "أليشان إيفنتس",
    tagline: "نحن نسعى للكمال",
    explore_services: "استكشف الخدمات",

    our_services: "خدماتنا",
    wedding_events: "حفلات الزفاف",
    wedding_description: "تخطيط حفلات زفاف فاخرة مع ديكورات وإضاءة متميزة.",
    corporate_events: "الفعاليات المؤسسية",
    corporate_description: "إدارة احترافية للمؤتمرات والفعاليات المؤسسية.",
    birthday_events: "حفلات أعياد الميلاد",
    birthday_description:
      "احتفالات أعياد ميلاد أنيقة وممتعة مع ديكورات مخصصة وترفيه مميز.",
    boro_somabesh: "التجمعات الكبيرة",
    boro_somabesh_description:
      "إدارة احترافية للتجمعات الكبيرة والفعاليات الاجتماعية مع تنفيذ سلس.",
    concert_and_parties: "الحفلات الموسيقية والاحتفالات",
    concert_and_parties_description:
      "حفلات موسيقية مليئة بالطاقة واحتفالات لا تُنسى.",
    view_details: "عرض التفاصيل",

    book_your_event: "احجز فعاليتك",
    book_now: "احجز الآن",

    some_of_our_works: "بعض من أعمالنا",
    explore_more: "استكشف المزيد",

    about_alishan_events_description:
      "نصنع حفلات زفاف فاخرة وفعاليات مؤسسية وحفلات موسيقية واحتفالات لا تُنسى بإتقان.",

    quick_links: "روابط سريعة",
    home: "الرئيسية",
    services: "الخدمات",
    gallery: "المعرض",
    contact: "اتصل بنا",

    footer_credit:
      "© 2026 أليشان إيفنتس. جميع الحقوق محفوظة. تم التطوير بواسطة RAMS Tech.",

    wedding_events_description:
      "تخطيط حفلات زفاف راقية مع ديكورات فاخرة وإضاءة وتصميم مخصص",
    service_decor: "الديكور والتصميم",
    decor_theme: "الديكور والتصميم",
    decor_desc: "تصميم ديكورات فاخرة مخصصة لتحقيق حفل زفاف أحلامك.",
    service_catering: "الضيافة والمأكولات",
    catering_cuisine: "الضيافة والمأكولات",
    catering_desc: "خدمات طعام متعددة الأصناف لإبهار ضيوفك.",
    service_photography: "التصوير والفيديو",
    photography_videography: "التصوير والفيديو",
    photography_desc: "توثيق كل لحظة مميزة من خلال تصوير احترافي.",
    service_entertainment: "الترفيه",
    entertainment: "الترفيه",
    entertainment_desc: "موسيقى حية ومنسقو أغاني وفنانون لاحتفال لا يُنسى.",
    wedding_gallery: "معرض حفلات الزفاف",

    corporate_events_description:
      "تخطيط احترافي للفعاليات المؤسسية مع ديكور متميز وحلول صوتية وبصرية متكاملة.",
    event_design: "تصميم الفعاليات",
    event_design_desc:
      "مفاهيم مخصصة للفعاليات المؤسسية مع تجهيزات وديكور راقي.",
    catering: "الضيافة",
    catering_desc: "خدمات طعام احترافية للمؤتمرات والاجتماعات وحفلات العشاء.",
    audiovisual: "الحلول السمعية والبصرية",
    audiovisual_desc: "أنظمة صوت وإضاءة وإنتاج مرئي عالي الجودة.",
    entertainment_corp: "الترفيه والتواصل",
    entertainment_corp_desc: "عروض حية وأنشطة لتعزيز التفاعل المؤسسي.",
    corporate_gallery: "معرض الفعاليات المؤسسية",

    back: "رجوع",

    birthday_events_description:
      "احتفالات أعياد ميلاد مميزة مع ديكورات مخصصة وكعك فاخر وبرامج ترفيهية متكاملة.",
    birthday_theme: "ديكور وموضوع الحفل",
    birthday_theme_desc:
      "تصاميم حفلات مخصصة بديكورات فاخرة لعيد ميلاد لا يُنسى.",
    birthday_cake: "الكعك والضيافة",
    birthday_cake_desc: "كعك لذيذ وخدمات ضيافة متميزة لإسعاد ضيوفك.",
    birthday_photography: "التصوير والفيديو",
    birthday_photography_desc: "تصوير احترافي لتوثيق كل لحظة سعيدة.",
    birthday_entertainment: "الترفيه",
    birthday_entertainment_desc: "موسيقى حية وأنشطة ممتعة لجميع الأعمار.",
    birthday_gallery: "معرض حفلات أعياد الميلاد",

    large_gatherings: "التجمعات الكبيرة",
    large_gatherings_description:
      "تنظيم احترافي للفعاليات الكبيرة مع ديكور فاخر وإدارة متكاملة.",
    venue_setup: "تجهيز المكان",
    venue_setup_desc: "تنظيم مواقع واسعة بديكورات أنيقة تناسب الحشود الكبيرة.",
    catering_large: "الضيافة",
    catering_large_desc: "حلول ضيافة عالية الجودة لمئات الضيوف.",
    audio_lighting: "الصوت والإضاءة",
    audio_lighting_desc: "إدارة احترافية للصوت والإضاءة للمناسبات الكبيرة.",
    event_entertainment: "الترفيه والأنشطة",
    event_entertainment_desc: "عروض حية وأنشطة تفاعلية لخلق تجربة لا تُنسى.",
    large_gatherings_gallery: "معرض التجمعات الكبيرة",

    concert_events: "الحفلات الموسيقية والاحتفالات",
    concert_events_description:
      "حفلات موسيقية نابضة بالحياة مع إنتاج متكامل وإضاءة وترفيه.",
    concert_production: "إنتاج الفعاليات",
    concert_production_desc: "إعداد احترافي للمسرح والصوت والإضاءة.",
    concert_catering: "الضيافة وخدمات VIP",
    concert_catering_desc: "خدمات ضيافة حصرية وترتيبات لكبار الشخصيات.",
    concert_photography: "التصوير والفيديو",
    concert_photography_desc: "توثيق كل لحظة مميزة بجودة عالية.",
    concert_entertainment: "تنسيق الترفيه",
    concert_entertainment_desc:
      "تنظيم العروض الحية والموسيقى لفعاليات لا تُنسى.",
    concert_gallery: "معرض الحفلات",

    booking_page: "احجز فعاليتك",
    booking_description:
      "شارك تفاصيلك وسنساعدك في تخطيط احتفال مثالي بخدماتنا المميزة.",
    start_journey: "ابدأ رحلتك معنا",
    booking_instructions: "املأ النموذج وسنتواصل معك لمناقشة تفاصيل الحدث.",
    full_name: "الاسم الكامل",
    email_address: "البريد الإلكتروني",
    phone_number: "رقم الهاتف",
    preferred_date: "التاريخ المفضل",
    event_location: "موقع الحدث",
    estimated_budget: "الميزانية التقديرية",
    choose_budget: "اختر نطاق الميزانية",
    event_vision: "أخبرنا عن رؤيتك للحدث",
  },

  ur: {
    site_name: "علیشان ایونٹس",
    tagline: "ہم کمال کے متلاشی ہیں",
    explore_services: "خدمات دریافت کریں",

    our_services: "ہماری خدمات",
    wedding_events: "شادی کی تقریبات",
    wedding_description:
      "پُرتعیش شادیوں کی منصوبہ بندی شاندار سجاوٹ اور روشنی کے ساتھ۔",
    corporate_events: "کارپوریٹ ایونٹس",
    corporate_description:
      "کانفرنسز اور کارپوریٹ تقریبات کی پیشہ ورانہ مینجمنٹ۔",
    birthday_events: "سالگرہ کی تقریبات",
    birthday_description:
      "دلکش اور تفریحی سالگرہ کی تقریبات جدید تھیم، سجاوٹ اور انٹرٹینمنٹ کے ساتھ۔",
    boro_somabesh: "بڑے اجتماعات",
    boro_somabesh_description:
      "بڑے پیمانے پر اجتماعات اور سماجی پروگرامز کی ماہرانہ مینجمنٹ۔",
    concert_and_parties: "کنسرٹس اور پارٹیز",
    concert_and_parties_description: "پُرجوش کنسرٹس اور یادگار تقریبات۔",
    view_details: "تفصیلات دیکھیں",

    book_your_event: "اپنا ایونٹ بک کریں",
    book_now: "ابھی بک کریں",

    some_of_our_works: "ہمارے کچھ کام",
    explore_more: "مزید دیکھیں",

    about_alishan_events_description:
      "ہم شاندار شادیوں، کارپوریٹ ایونٹس، کنسرٹس اور ناقابلِ فراموش تقریبات کو کمال کے ساتھ ترتیب دیتے ہیں۔",

    quick_links: "فوری لنکس",
    home: "ہوم",
    services: "خدمات",
    gallery: "گیلری",
    contact: "رابطہ کریں",

    footer_credit:
      "© 2026 علیشان ایونٹس۔ جملہ حقوق محفوظ ہیں۔ تیار کردہ از RAMS Tech۔",

    wedding_events_description:
      "شاندار شادیوں کی منصوبہ بندی پریمیم سجاوٹ، روشنی اور منفرد ڈیزائن کے ساتھ",
    service_decor: "سجاوٹ اور تھیم",
    decor_theme: "سجاوٹ اور تھیم",
    decor_desc: "آپ کے خوابوں کی شادی کے لیے پُرتعیش اور منفرد سجاوٹ۔",
    service_catering: "کیٹرنگ اور کھانے",
    catering_cuisine: "کیٹرنگ اور کھانے",
    catering_desc: "مہمانوں کو متاثر کرنے کے لیے اعلیٰ معیار کی کیٹرنگ۔",
    service_photography: "فوٹوگرافی اور ویڈیوگرافی",
    photography_videography: "فوٹوگرافی اور ویڈیوگرافی",
    photography_desc: "ہر خوبصورت لمحے کو پیشہ ورانہ انداز میں محفوظ کریں۔",
    service_entertainment: "تفریح",
    entertainment: "تفریح",
    entertainment_desc: "لائیو میوزک، ڈی جے اور فنکاروں کے ساتھ یادگار تقریب۔",
    wedding_gallery: "شادی کی گیلری",

    corporate_events_description:
      "کارپوریٹ ایونٹس کی پیشہ ورانہ منصوبہ بندی جدید سجاوٹ اور آڈیو ویژول سہولیات کے ساتھ۔",
    event_design: "ایونٹ ڈیزائن",
    event_design_desc: "کارپوریٹ تقریبات کے لیے منفرد اور پریمیم ڈیزائن۔",
    catering: "کیٹرنگ",
    catering_desc: "کانفرنسز اور میٹنگز کے لیے اعلیٰ معیار کی کیٹرنگ سروسز۔",
    audiovisual: "آڈیو ویژول سلوشنز",
    audiovisual_desc: "اعلیٰ معیار کی آواز، روشنی اور ویژول پروڈکشن۔",
    entertainment_corp: "تفریح اور نیٹ ورکنگ",
    entertainment_corp_desc:
      "کارپوریٹ انگیجمنٹ کے لیے لائیو پرفارمنس اور سرگرمیاں۔",
    corporate_gallery: "کارپوریٹ ایونٹ گیلری",

    back: "← واپس",

    birthday_events_description:
      "یادگار سالگرہ کی تقریبات منفرد تھیم، کیک اور مکمل انٹرٹینمنٹ کے ساتھ۔",
    birthday_theme: "تھیم اور سجاوٹ",
    birthday_theme_desc: "منفرد تھیم اور پُرتعیش سجاوٹ کے ساتھ شاندار سالگرہ۔",
    birthday_cake: "کیک اور کیٹرنگ",
    birthday_cake_desc: "مزیدار کیک اور اعلیٰ معیار کی کیٹرنگ۔",
    birthday_photography: "فوٹوگرافی اور ویڈیوگرافی",
    birthday_photography_desc:
      "ہر خوشگوار لمحے کو محفوظ کرنے کے لیے پیشہ ورانہ فوٹوگرافی۔",
    birthday_entertainment: "تفریح",
    birthday_entertainment_desc: "تمام عمر کے افراد کے لیے تفریحی سرگرمیاں۔",
    birthday_gallery: "سالگرہ گیلری",

    large_gatherings: "بڑے اجتماعات",
    large_gatherings_description:
      "بڑے ایونٹس کے لیے مکمل منصوبہ بندی، سجاوٹ اور انتظام۔",
    venue_setup: "وینیو سیٹ اپ",
    venue_setup_desc: "کشادہ مقامات پر خوبصورت سجاوٹ کے ساتھ انتظام۔",
    catering_large: "کیٹرنگ",
    catering_large_desc: "سینکڑوں مہمانوں کے لیے اعلیٰ معیار کی کیٹرنگ۔",
    audio_lighting: "آڈیو اور لائٹنگ",
    audio_lighting_desc: "بڑے ایونٹس کے لیے پروفیشنل آواز اور روشنی۔",
    event_entertainment: "تفریح اور سرگرمیاں",
    event_entertainment_desc: "لائیو پرفارمنس اور دلچسپ سرگرمیاں۔",
    large_gatherings_gallery: "بڑے اجتماعات گیلری",

    concert_events: "کنسرٹس اور پارٹیز",
    concert_events_description:
      "پُرجوش کنسرٹس اور پارٹیز مکمل پروڈکشن اور انٹرٹینمنٹ کے ساتھ۔",
    concert_production: "ایونٹ پروڈکشن",
    concert_production_desc: "اسٹیج، ساؤنڈ اور لائٹنگ کا مکمل انتظام۔",
    concert_catering: "کیٹرنگ اور VIP سروسز",
    concert_catering_desc: "مہمانوں اور فنکاروں کے لیے خصوصی انتظامات۔",
    concert_photography: "فوٹوگرافی اور ویڈیوگرافی",
    concert_photography_desc: "ہر لمحے کو اعلیٰ معیار میں محفوظ کریں۔",
    concert_entertainment: "انٹرٹینمنٹ مینجمنٹ",
    concert_entertainment_desc: "لائیو میوزک اور شاندار تفریحی انتظام۔",
    concert_gallery: "کنسرٹ گیلری",

    booking_page: "اپنا ایونٹ بک کریں",
    booking_description:
      "اپنی تفصیلات فراہم کریں، ہم آپ کے ایونٹ کو بہترین انداز میں ترتیب دیں گے۔",
    start_journey: "ہمارے ساتھ اپنی شروعات کریں",
    booking_instructions: "فارم پُر کریں، ہم آپ سے رابطہ کریں گے۔",
    full_name: "پورا نام",
    email_address: "ای میل ایڈریس",
    phone_number: "فون نمبر",
    preferred_date: "پسندیدہ تاریخ",
    event_location: "ایونٹ کا مقام",
    estimated_budget: "متوقع بجٹ",
    choose_budget: "بجٹ منتخب کریں",
    event_vision: "اپنے ایونٹ کے بارے میں بتائیں",
  },

  hi: {
    site_name: "अलीशान इवेंट्स",
    tagline: "हम पूर्णता के लिए प्रयास करते हैं",
    explore_services: "सेवाएं देखें",

    our_services: "हमारी सेवाएं",
    wedding_events: "शादी के आयोजन",
    wedding_description:
      "प्रीमियम सजावट और लाइटिंग के साथ शानदार शादी की योजना।",
    corporate_events: "कॉर्पोरेट इवेंट्स",
    corporate_description: "कॉन्फ्रेंस और कॉर्पोरेट इवेंट्स का पेशेवर प्रबंधन।",
    birthday_events: "जन्मदिन समारोह",
    birthday_description:
      "कस्टम थीम, सजावट और मनोरंजन के साथ शानदार जन्मदिन समारोह।",
    boro_somabesh: "बड़े आयोजन",
    boro_somabesh_description:
      "बड़े स्तर के आयोजनों और सामाजिक कार्यक्रमों का विशेषज्ञ प्रबंधन।",
    concert_and_parties: "कॉन्सर्ट और पार्टियां",
    concert_and_parties_description: "ऊर्जावान कॉन्सर्ट और यादगार पार्टियां।",
    view_details: "विवरण देखें",

    book_your_event: "अपना इवेंट बुक करें",
    book_now: "अभी बुक करें",

    some_of_our_works: "हमारे कुछ काम",
    explore_more: "और देखें",

    about_alishan_events_description:
      "हम शानदार शादियां, कॉर्पोरेट इवेंट्स और यादगार समारोहों को पूर्णता के साथ तैयार करते हैं।",

    quick_links: "त्वरित लिंक",
    home: "होम",
    services: "सेवाएं",
    gallery: "गैलरी",
    contact: "संपर्क करें",

    footer_credit:
      "© 2026 अलीशान इवेंट्स। सर्वाधिकार सुरक्षित। विकसित किया गया RAMS Tech द्वारा।",

    wedding_events_description:
      "प्रीमियम सजावट, लाइटिंग और कस्टम डिजाइन के साथ शानदार शादी योजना",
    service_decor: "सजावट और थीम",
    decor_theme: "सजावट और थीम",
    decor_desc: "आपके सपनों की शादी के लिए कस्टम लक्ज़री सजावट।",
    service_catering: "कैटरिंग और भोजन",
    catering_cuisine: "कैटरिंग और भोजन",
    catering_desc: "आपके मेहमानों को प्रभावित करने के लिए प्रीमियम कैटरिंग।",
    service_photography: "फोटोग्राफी और वीडियोग्राफी",
    photography_videography: "फोटोग्राफी और वीडियोग्राफी",
    photography_desc: "हर खास पल को प्रोफेशनल तरीके से कैद करें।",
    service_entertainment: "मनोरंजन",
    entertainment: "मनोरंजन",
    entertainment_desc: "लाइव म्यूजिक, डीजे और कलाकारों के साथ शानदार अनुभव।",
    wedding_gallery: "शादी गैलरी",

    corporate_events_description:
      "प्रीमियम सजावट और ऑडियो-विजुअल समाधान के साथ कॉर्पोरेट इवेंट्स की योजना।",
    event_design: "इवेंट डिजाइन",
    event_design_desc: "कॉर्पोरेट इवेंट्स के लिए कस्टम डिजाइन और स्टेजिंग।",
    catering: "कैटरिंग",
    catering_desc: "मीटिंग्स और कॉन्फ्रेंस के लिए प्रोफेशनल कैटरिंग।",
    audiovisual: "ऑडियो-विजुअल समाधान",
    audiovisual_desc: "उच्च गुणवत्ता वाली साउंड, लाइट और विजुअल प्रोडक्शन।",
    entertainment_corp: "मनोरंजन और नेटवर्किंग",
    entertainment_corp_desc: "कॉर्पोरेट एंगेजमेंट के लिए लाइव गतिविधियां।",
    corporate_gallery: "कॉर्पोरेट गैलरी",

    back: "← वापस",

    birthday_events_description:
      "थीम आधारित सजावट और मनोरंजन के साथ यादगार जन्मदिन समारोह।",
    birthday_theme: "थीम और सजावट",
    birthday_theme_desc: "लक्ज़री सजावट के साथ कस्टम थीम।",
    birthday_cake: "केक और कैटरिंग",
    birthday_cake_desc: "स्वादिष्ट केक और प्रीमियम कैटरिंग।",
    birthday_photography: "फोटोग्राफी और वीडियोग्राफी",
    birthday_photography_desc: "हर खुशी के पल को कैद करें।",
    birthday_entertainment: "मनोरंजन",
    birthday_entertainment_desc: "हर उम्र के लिए मजेदार गतिविधियां।",
    birthday_gallery: "जन्मदिन गैलरी",

    large_gatherings: "बड़े आयोजन",
    large_gatherings_description: "बड़े आयोजनों के लिए पूर्ण योजना और प्रबंधन।",
    venue_setup: "वेन्यू सेटअप",
    venue_setup_desc: "बड़े स्थानों पर शानदार सजावट।",
    catering_large: "कैटरिंग",
    catering_large_desc: "सैकड़ों मेहमानों के लिए उच्च गुणवत्ता कैटरिंग।",
    audio_lighting: "ऑडियो और लाइटिंग",
    audio_lighting_desc: "पेशेवर साउंड और लाइटिंग सेटअप।",
    event_entertainment: "मनोरंजन और गतिविधियां",
    event_entertainment_desc: "लाइव प्रदर्शन और मजेदार अनुभव।",
    large_gatherings_gallery: "बड़े आयोजन गैलरी",

    concert_events: "कॉन्सर्ट और पार्टियां",
    concert_events_description:
      "फुल प्रोडक्शन के साथ शानदार कॉन्सर्ट और पार्टियां।",
    concert_production: "इवेंट प्रोडक्शन",
    concert_production_desc: "स्टेज, साउंड और लाइटिंग सेटअप।",
    concert_catering: "कैटरिंग और VIP सेवाएं",
    concert_catering_desc: "विशेष अतिथि और कलाकारों के लिए सेवाएं।",
    concert_photography: "फोटोग्राफी और वीडियोग्राफी",
    concert_photography_desc: "हर पल को कैद करें।",
    concert_entertainment: "मनोरंजन प्रबंधन",
    concert_entertainment_desc: "लाइव शो और म्यूजिक प्लानिंग।",
    concert_gallery: "कॉन्सर्ट गैलरी",

    booking_page: "अपना इवेंट बुक करें",
    booking_description:
      "अपनी जानकारी साझा करें और हम आपके लिए परफेक्ट इवेंट तैयार करेंगे।",
    start_journey: "हमारे साथ शुरुआत करें",
    booking_instructions: "फॉर्म भरें और हम आपसे संपर्क करेंगे।",
    full_name: "पूरा नाम",
    email_address: "ईमेल पता",
    phone_number: "फोन नंबर",
    preferred_date: "पसंदीदा तारीख",
    event_location: "इवेंट स्थान",
    estimated_budget: "अनुमानित बजट",
    choose_budget: "बजट चुनें",
    event_vision: "अपने इवेंट के बारे में बताएं",
  },

  zh: {
    site_name: "阿里山 活动策划",
    tagline: "我们追求完美",
    explore_services: "探索服务",

    our_services: "我们的服务",
    wedding_events: "婚礼策划",
    wedding_description: "提供高端婚礼策划，配备精致装饰和灯光设计。",
    corporate_events: "企业活动",
    corporate_description: "专业的会议和企业活动管理服务。",
    birthday_events: "生日派对",
    birthday_description: "提供主题定制、装饰和娱乐的精致生日庆典。",
    boro_somabesh: "大型活动",
    boro_somabesh_description: "专业管理大型活动和社交聚会，执行顺畅。",
    concert_and_parties: "音乐会与派对",
    concert_and_parties_description: "充满活力的音乐会和难忘的派对。",
    view_details: "查看详情",

    book_your_event: "预订您的活动",
    book_now: "立即预订",

    some_of_our_works: "我们的部分作品",
    explore_more: "查看更多",

    about_alishan_events_description:
      "我们打造高端婚礼、企业活动、音乐会和难忘的庆典体验。",

    quick_links: "快速链接",
    home: "首页",
    services: "服务",
    gallery: "画廊",
    contact: "联系我们",

    footer_credit: "© 2026 Alishan 活动策划。版权所有。由 RAMS Tech 开发。",

    wedding_events_description: "高端婚礼策划，配备精致装饰、灯光和定制设计",
    service_decor: "装饰与主题",
    decor_theme: "装饰与主题",
    decor_desc: "为您的梦想婚礼提供定制豪华装饰设计。",
    service_catering: "餐饮服务",
    catering_cuisine: "餐饮服务",
    catering_desc: "提供多样高端餐饮服务，让宾客满意。",
    service_photography: "摄影与摄像",
    photography_videography: "摄影与摄像",
    photography_desc: "用专业摄影记录每一个美好瞬间。",
    service_entertainment: "娱乐",
    entertainment: "娱乐",
    entertainment_desc: "现场音乐、DJ和表演带来难忘体验。",
    wedding_gallery: "婚礼画廊",

    corporate_events_description: "提供高端装饰和视听解决方案的企业活动策划。",
    event_design: "活动设计",
    event_design_desc: "为企业活动提供定制设计和布置。",
    catering: "餐饮",
    catering_desc: "为会议和晚宴提供专业餐饮服务。",
    audiovisual: "视听解决方案",
    audiovisual_desc: "高质量音响、灯光和视觉制作。",
    entertainment_corp: "娱乐与交流",
    entertainment_corp_desc: "通过活动提升企业互动体验。",
    corporate_gallery: "企业活动画廊",

    back: "← 返回",

    birthday_events_description: "提供主题装饰、蛋糕和娱乐的一站式生日庆典。",
    birthday_theme: "主题与装饰",
    birthday_theme_desc: "定制主题与豪华装饰。",
    birthday_cake: "蛋糕与餐饮",
    birthday_cake_desc: "美味蛋糕和高端餐饮服务。",
    birthday_photography: "摄影与摄像",
    birthday_photography_desc: "记录每一个快乐瞬间。",
    birthday_entertainment: "娱乐",
    birthday_entertainment_desc: "适合所有年龄的娱乐活动。",
    birthday_gallery: "生日画廊",

    large_gatherings: "大型活动",
    large_gatherings_description: "提供高端装饰和全面管理的大型活动策划。",
    venue_setup: "场地布置",
    venue_setup_desc: "为大型活动提供精致场地布置。",
    catering_large: "餐饮服务",
    catering_large_desc: "为大量宾客提供优质餐饮。",
    audio_lighting: "音响与灯光",
    audio_lighting_desc: "专业音响和灯光管理。",
    event_entertainment: "娱乐与活动",
    event_entertainment_desc: "互动活动和精彩表演。",
    large_gatherings_gallery: "大型活动画廊",

    concert_events: "音乐会与派对",
    concert_events_description: "提供完整制作的音乐会和派对服务。",
    concert_production: "活动制作",
    concert_production_desc: "舞台、音响和灯光全套服务。",
    concert_catering: "餐饮与VIP服务",
    concert_catering_desc: "为嘉宾和表演者提供专属服务。",
    concert_photography: "摄影与摄像",
    concert_photography_desc: "记录每一个精彩瞬间。",
    concert_entertainment: "娱乐协调",
    concert_entertainment_desc: "现场表演和娱乐策划。",
    concert_gallery: "音乐会画廊",

    booking_page: "预订活动",
    booking_description: "填写信息，我们将帮助您打造完美活动。",
    start_journey: "与我们一起开始",
    booking_instructions: "填写表格，我们会联系您。",
    full_name: "姓名",
    email_address: "电子邮件",
    phone_number: "电话号码",
    preferred_date: "首选日期",
    event_location: "活动地点",
    estimated_budget: "预算",
    choose_budget: "选择预算范围",
    event_vision: "告诉我们您的想法",
  },

  es: {
    site_name: "Alishan Eventos",
    tagline: "Buscamos la perfección",
    explore_services: "Explorar servicios",

    our_services: "Nuestros servicios",
    wedding_events: "Eventos de boda",
    wedding_description:
      "Planificación de bodas de lujo con decoración e iluminación premium.",
    corporate_events: "Eventos corporativos",
    corporate_description:
      "Gestión profesional de conferencias y eventos empresariales.",
    birthday_events: "Eventos de cumpleaños",
    birthday_description:
      "Celebraciones elegantes con temas personalizados y entretenimiento.",
    boro_somabesh: "Grandes eventos",
    boro_somabesh_description:
      "Gestión experta de eventos a gran escala con ejecución impecable.",
    concert_and_parties: "Conciertos y fiestas",
    concert_and_parties_description:
      "Conciertos energéticos y celebraciones inolvidables.",
    view_details: "Ver detalles",

    book_your_event: "Reserva tu evento",
    book_now: "Reservar ahora",

    some_of_our_works: "Algunos de nuestros trabajos",
    explore_more: "Explorar más",

    about_alishan_events_description:
      "Creamos bodas de lujo, eventos corporativos y celebraciones inolvidables.",

    quick_links: "Enlaces rápidos",
    home: "Inicio",
    services: "Servicios",
    gallery: "Galería",
    contact: "Contacto",

    footer_credit:
      "© 2026 Alishan Eventos. Todos los derechos reservados. Desarrollado por RAMS Tech.",

    wedding_events_description:
      "Planificación de bodas de lujo con decoración y diseño personalizado",
    service_decor: "Decoración y tema",
    decor_theme: "Decoración y tema",
    decor_desc: "Decoración de lujo personalizada para tu boda soñada.",
    service_catering: "Catering",
    catering_cuisine: "Catering",
    catering_desc:
      "Servicio de catering premium para impresionar a tus invitados.",
    service_photography: "Fotografía y video",
    photography_videography: "Fotografía y video",
    photography_desc: "Captura cada momento especial con profesionales.",
    service_entertainment: "Entretenimiento",
    entertainment: "Entretenimiento",
    entertainment_desc:
      "Música en vivo, DJs y artistas para un evento inolvidable.",
    wedding_gallery: "Galería de bodas",

    corporate_events_description:
      "Planificación profesional de eventos corporativos con soluciones audiovisuales.",
    event_design: "Diseño de eventos",
    event_design_desc: "Conceptos personalizados para eventos empresariales.",
    catering: "Catering",
    catering_desc: "Servicio profesional para reuniones y conferencias.",
    audiovisual: "Soluciones audiovisuales",
    audiovisual_desc: "Sonido, iluminación y producción de alta calidad.",
    entertainment_corp: "Entretenimiento y networking",
    entertainment_corp_desc:
      "Actividades para mejorar la interacción empresarial.",
    corporate_gallery: "Galería corporativa",

    back: "← Volver",

    birthday_events_description:
      "Celebraciones memorables con decoración temática y entretenimiento.",
    birthday_theme: "Tema y decoración",
    birthday_theme_desc: "Decoración personalizada y elegante.",
    birthday_cake: "Pasteles y catering",
    birthday_cake_desc: "Pasteles deliciosos y catering premium.",
    birthday_photography: "Fotografía y video",
    birthday_photography_desc: "Captura cada momento especial.",
    birthday_entertainment: "Entretenimiento",
    birthday_entertainment_desc: "Diversión para todas las edades.",
    birthday_gallery: "Galería de cumpleaños",

    large_gatherings: "Grandes eventos",
    large_gatherings_description:
      "Planificación completa para eventos a gran escala.",
    venue_setup: "Montaje del lugar",
    venue_setup_desc: "Configuración elegante para grandes espacios.",
    catering_large: "Catering",
    catering_large_desc: "Soluciones para grandes cantidades de invitados.",
    audio_lighting: "Audio e iluminación",
    audio_lighting_desc: "Sistemas profesionales de sonido y luz.",
    event_entertainment: "Entretenimiento",
    event_entertainment_desc: "Actividades interactivas y actuaciones en vivo.",
    large_gatherings_gallery: "Galería de grandes eventos",

    concert_events: "Conciertos y fiestas",
    concert_events_description:
      "Producción completa para conciertos y fiestas.",
    concert_production: "Producción de eventos",
    concert_production_desc: "Escenario, sonido e iluminación.",
    concert_catering: "Catering y servicios VIP",
    concert_catering_desc: "Servicios exclusivos para invitados y artistas.",
    concert_photography: "Fotografía y video",
    concert_photography_desc: "Captura cada momento.",
    concert_entertainment: "Gestión de entretenimiento",
    concert_entertainment_desc: "Planificación de shows en vivo.",
    concert_gallery: "Galería de conciertos",

    booking_page: "Reserva tu evento",
    booking_description:
      "Comparte tus detalles y planificaremos el evento perfecto.",
    start_journey: "Comienza con nosotros",
    booking_instructions: "Completa el formulario y te contactaremos.",
    full_name: "Nombre completo",
    email_address: "Correo electrónico",
    phone_number: "Número de teléfono",
    preferred_date: "Fecha preferida",
    event_location: "Ubicación",
    estimated_budget: "Presupuesto estimado",
    choose_budget: "Selecciona presupuesto",
    event_vision: "Cuéntanos tu idea",
  },

  de: {
    site_name: "Alishan Events",
    tagline: "Wir streben nach Perfektion",
    explore_services: "Services entdecken",

    our_services: "Unsere Services",
    wedding_events: "Hochzeitsveranstaltungen",
    wedding_description:
      "Luxuriöse Hochzeitsplanung mit hochwertiger Dekoration und Beleuchtung.",
    corporate_events: "Firmenevents",
    corporate_description:
      "Professionelle Planung von Konferenzen und Unternehmensveranstaltungen.",
    birthday_events: "Geburtstagsfeiern",
    birthday_description:
      "Stilvolle Geburtstagsfeiern mit individuellen Themen, Dekoration und Unterhaltung.",
    boro_somabesh: "Großveranstaltungen",
    boro_somabesh_description:
      "Professionelle Organisation großer Events und sozialer Veranstaltungen.",
    concert_and_parties: "Konzerte & Partys",
    concert_and_parties_description:
      "Energiegeladene Konzerte und unvergessliche Feiern.",
    view_details: "Details anzeigen",

    book_your_event: "Event buchen",
    book_now: "Jetzt buchen",

    some_of_our_works: "Einige unserer Arbeiten",
    explore_more: "Mehr entdecken",

    about_alishan_events_description:
      "Wir gestalten luxuriöse Hochzeiten, Firmenevents, Konzerte und unvergessliche Feiern mit Perfektion.",

    quick_links: "Schnellzugriffe",
    home: "Startseite",
    services: "Services",
    gallery: "Galerie",
    contact: "Kontakt",

    footer_credit:
      "© 2026 Alishan Events. Alle Rechte vorbehalten. Entwickelt von RAMS Tech.",

    wedding_events_description:
      "Exklusive Hochzeitsplanung mit Premium-Dekor, Beleuchtung und individuellem Design",
    service_decor: "Dekor & Thema",
    decor_theme: "Dekor & Thema",
    decor_desc: "Individuelles Luxus-Dekor für Ihre Traumhochzeit.",
    service_catering: "Catering & Küche",
    catering_cuisine: "Catering & Küche",
    catering_desc: "Hochwertiges Catering, das Ihre Gäste begeistert.",
    service_photography: "Fotografie & Videografie",
    photography_videography: "Fotografie & Videografie",
    photography_desc: "Jeden besonderen Moment professionell festhalten.",
    service_entertainment: "Unterhaltung",
    entertainment: "Unterhaltung",
    entertainment_desc:
      "Live-Musik, DJs und Künstler für ein unvergessliches Erlebnis.",
    wedding_gallery: "Hochzeitsgalerie",

    corporate_events_description:
      "Professionelle Firmenevents mit Premium-Dekor und audiovisuellen Lösungen.",
    event_design: "Eventdesign",
    event_design_desc:
      "Individuelle Konzepte und hochwertiges Design für Firmenevents.",
    catering: "Catering",
    catering_desc: "Professionelles Catering für Meetings und Konferenzen.",
    audiovisual: "Audiovisuelle Lösungen",
    audiovisual_desc: "Hochwertiger Sound, Licht und visuelle Produktion.",
    entertainment_corp: "Unterhaltung & Networking",
    entertainment_corp_desc: "Aktivitäten und Shows für bessere Interaktion.",
    corporate_gallery: "Firmen-Galerie",

    back: "← Zurück",

    birthday_events_description:
      "Unvergessliche Geburtstagsfeiern mit individuellen Themen und Unterhaltung.",
    birthday_theme: "Thema & Dekor",
    birthday_theme_desc: "Individuelle Designs mit luxuriöser Dekoration.",
    birthday_cake: "Kuchen & Catering",
    birthday_cake_desc: "Leckere Kuchen und hochwertiges Catering.",
    birthday_photography: "Fotografie & Videografie",
    birthday_photography_desc: "Alle besonderen Momente festhalten.",
    birthday_entertainment: "Unterhaltung",
    birthday_entertainment_desc: "Spaß für alle Altersgruppen.",
    birthday_gallery: "Geburtstagsgalerie",

    large_gatherings: "Großveranstaltungen",
    large_gatherings_description:
      "Komplette Planung für große Events mit perfekter Organisation.",
    venue_setup: "Location-Setup",
    venue_setup_desc: "Elegante Einrichtung für große Veranstaltungsorte.",
    catering_large: "Catering",
    catering_large_desc: "Hochwertiges Catering für viele Gäste.",
    audio_lighting: "Audio & Beleuchtung",
    audio_lighting_desc: "Professionelle Technik für große Events.",
    event_entertainment: "Unterhaltung & Aktivitäten",
    event_entertainment_desc: "Live-Shows und interaktive Erlebnisse.",
    large_gatherings_gallery: "Galerie großer Events",

    concert_events: "Konzerte & Partys",
    concert_events_description:
      "Spannende Konzerte und Partys mit kompletter Produktion.",
    concert_production: "Eventproduktion",
    concert_production_desc: "Bühne, Sound und Licht komplett organisiert.",
    concert_catering: "Catering & VIP-Services",
    concert_catering_desc: "Exklusive Services für Gäste und Künstler.",
    concert_photography: "Fotografie & Videografie",
    concert_photography_desc: "Alle Momente professionell festhalten.",
    concert_entertainment: "Entertainment-Management",
    concert_entertainment_desc: "Planung von Shows und Live-Auftritten.",
    concert_gallery: "Konzert-Galerie",

    booking_page: "Event buchen",
    booking_description:
      "Teilen Sie Ihre Details mit uns und wir planen Ihr perfektes Event.",
    start_journey: "Starten Sie mit uns",
    booking_instructions:
      "Füllen Sie das Formular aus und wir kontaktieren Sie.",
    full_name: "Vollständiger Name",
    email_address: "E-Mail-Adresse",
    phone_number: "Telefonnummer",
    preferred_date: "Bevorzugtes Datum",
    event_location: "Veranstaltungsort",
    estimated_budget: "Geschätztes Budget",
    choose_budget: "Budget auswählen",
    event_vision: "Erzählen Sie uns von Ihrer Idee",
  },
};

// wedding.html

// ================= CHANGE LANGUAGE =================

const languageSelect = document.getElementById("languageSelect");

function setLang(lang) {
  localStorage.setItem("lang", lang);

  document.querySelectorAll("[data-key]").forEach((element) => {
    const key = element.getAttribute("data-key");

    if (translations[lang][key]) {
      element.innerText = translations[lang][key];
    }
  });

  // Active button highlight (premium feel)
  document.getElementById("en").style.opacity = lang === "en" ? "1" : "0.5";
  document.getElementById("bn").style.opacity = lang === "bn" ? "1" : "0.5";
}

languageSelect.addEventListener("change", () => {
  setLanguage(languageSelect.value);
});

function setLanguage(lang) {
  document.querySelectorAll("[data-key]").forEach((el) => {
    const key = el.getAttribute("data-key");
    el.textContent = translations[lang][key];
  });
}

function setLanguage(lang) {
  localStorage.setItem("lang", lang);

  document.querySelectorAll("[data-key]").forEach((el) => {
    const key = el.getAttribute("data-key");
    el.textContent = translations[lang][key];
  });
}

// Load saved language
const savedLang = localStorage.getItem("lang") || "en";
setLanguage(savedLang);
languageSelect.value = savedLang;

// ================= LOAD SAVED LANGUAGE =================

window.addEventListener("DOMContentLoaded", () => {
  const savedLang = localStorage.getItem("lang") || "en";
  setLang(savedLang);
});

const form = document.querySelector("form");
const result = document.getElementById("result");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const formData = new FormData(form);

  fetch("https://api.web3forms.com/submit", {
    method: "POST",
    body: formData,
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.success) {
        result.textContent =
          "Thank you! Your message has been sent.\nWe will be in touch shortly";
        form.reset();
      } else {
        result.textContent = "Something went wrong!";
      }
    })
    .catch((error) => {
      result.textContent = "Error submitting form.";
    });
});
