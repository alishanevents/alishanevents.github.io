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
    reviews_title: "What Our Customers Say",
    review1_text: "Alishan Events made my wedding unforgettable! Highly recommend.",
    review1_rating: "⭐⭐⭐⭐⭐",
    review2_text: "Professional, timely, and creative. The event went smoothly thanks to them.",
    review2_rating: "⭐⭐⭐⭐⭐",
    review3_text: "Amazing decorations and excellent customer service. Will use again!",
    review3_rating: "⭐⭐⭐⭐⭐",
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
    reviews_title: "আমাদের গ্রাহকদের মতামত",
    review1_text: "আলিশান ইভেন্টস আমার বিয়েটিকে অসাধারণ করে তুলেছে! অত্যন্ত সুপারিশ করছি।",
    review1_rating: "⭐⭐⭐⭐⭐",
    review2_text: "পেশাদার, সময়মত এবং সৃজনশীল। ইভেন্টটি তাদের কারণে সুন্দরভাবে সম্পন্ন হয়েছে।",
    review2_rating: "⭐⭐⭐⭐⭐",
    review3_text: "দারুন সজ্জা এবং চমৎকার গ্রাহক সেবা। আবার ব্যবহার করব!",
    review3_rating: "⭐⭐⭐⭐⭐",
  },
};

const languageSelect = document.getElementById("languageSelect");

function setLang(lang) {

  localStorage.setItem("lang", lang);

  document.body.classList.remove("en", "bn");
  document.body.classList.add(lang);

  const elements = document.querySelectorAll("[data-key]");

  // Animate OUT
  elements.forEach(el => {
    el.style.opacity = "0";
    el.style.transform = "translateY(20px)";
  });

  setTimeout(() => {

    // Change text
    elements.forEach((element) => {
      const key = element.getAttribute("data-key");

      if (translations[lang][key]) {
        element.innerText = translations[lang][key];
      }
    });

    // Animate IN with stagger
    elements.forEach((el, index) => {
      setTimeout(() => {
        el.style.opacity = "1";
        el.style.transform = "translateY(0)";
      }, index * 40);
    });

  }, 200);

  // Button highlight
  document.getElementById("en").style.opacity = lang === "en" ? "1" : "0.5";
  document.getElementById("bn").style.opacity = lang === "bn" ? "1" : "0.5";
}

document.addEventListener("DOMContentLoaded", () => {

  const savedLang = localStorage.getItem("lang") || "en";

  const elements = document.querySelectorAll("[data-key]");

  elements.forEach(el => el.classList.add("fade-slide"));

  setLang(savedLang);

});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, index) => {
    if (entry.isIntersecting) {

      const elements = entry.target.querySelectorAll(".reveal");

      elements.forEach((el, i) => {
        setTimeout(() => {
          el.classList.add("active");
        }, i * 80); // stagger per section
      });

    }
  });
}, {
  threshold: 0.2
});

// Observe each section
document.querySelectorAll("section").forEach(section => {
  observer.observe(section);
});

document.addEventListener("DOMContentLoaded", () => {

  const overlay = document.getElementById("page-transition");

  // Fade IN when page loads
  document.body.classList.add("fade-in");

  // Handle link clicks
  document.querySelectorAll("a").forEach(link => {

    link.addEventListener("click", function (e) {

      const href = this.getAttribute("href");

      // Ignore external / anchor links
      if (!href || href.startsWith("#") || this.target === "_blank") return;

      e.preventDefault();

      // Animate OUT
      document.body.classList.remove("fade-in");
      document.body.classList.add("fade-out");

      overlay.classList.add("active");

      // Navigate after animation
      setTimeout(() => {
        window.location.href = href;
      }, 500);
    });

  });

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
