import IntroLoader from "@/components/IntroLoader";
import DiningCarousel from "@/components/DiningCarousel";

const hotelHighlights = [
  {
    number: "01",
    title: "اقامت در سومیا",
    category: "۲۴ اتاق مدرن · ۱ سوئیت اختصاصی",
    image: "/soumia-stay-night.jpg",
    alt: "نمای شبانه ورودی هتل سومیا در کیانپارس اهواز",
    className: "project-1",
    gallery: true,
    images: [
      { src: "/soumia-stay-night.jpg", alt: "نمای شبانه ورودی هتل سومیا" },
      { src: "/soumia-stay-2.jpg", alt: "اتاق هتل سومیا" },
    ],
  },
  {
    number: "02",
    title: "رستوران و کافه",
    category: "طعم‌های محلی و بین‌المللی",
    image: "/soumia-dining.png",
    alt: "یکی از غذاهای رستوران هتل سومیا",
    className: "project-2",
    gallery: true,
  },
  {
    number: "03",
    title: "سالن جلسات",
    category: "ظرفیت ۲۱ نفر · نشست‌های حرفه‌ای",
    image: null,
    alt: "",
    className: "project-3 project-meeting",
    gallery: true,
    images: [
      { src: "/IMG_7592.JPG", alt: "سالن جلسات" },
    ],
  },
];

const services = [
  {
    number: "۰۷–۱۱",
    title: "صبحانه",
    text: "صبحانه هر روز از ساعت ۷ تا ۱۱ برای مهمانان هتل سرو می‌شود.",
  },
  {
    number: "۱۲–۲۴",
    title: "رستوران سومیا",
    text: "غذاهای محلی و بین‌المللی؛ سفارش روم‌سرویس رستوران از طریق داخلی ۱۱۹.",
  },
  {
    number: "۰۸–۲۴",
    title: "کافه لابی",
    text: "کافه لابی از ساعت ۸ تا ۲۴ پذیرای مهمانان است؛ سفارش با داخلی ۱۱۸.",
  },
  {
    number: "۲۱",
    title: "سالن جلسات",
    text: "فضایی برای نشست‌ها و قرارهای حرفه‌ای با ظرفیت ۲۱ نفر.",
  },
  {
    number: "۰",
    title: "لاندری و خدمات اتاق",
    text: "برای هماهنگی لاندری و خدمات مورد نیاز اتاق، با پذیرش از طریق داخلی صفر تماس بگیرید.",
  },
];

export default function Home() {
  return (
    <main>
      <IntroLoader />
      <header className="site-header">
        <nav className="desktop-nav" aria-label="منوی اصلی">
          <a href="#about">هتل</a>
          <a href="#rooms">اقامت</a>
          <a href="#experience">خدمات</a>
        </nav>

        <a className="brand-logo-center" href="#home" aria-hidden="true">
          <img className="brand-logo" src="/soumia-logo-transparent.png" alt="لوگوی سومیا" />
        </a>

        <a className="brand" href="#home" aria-label="هتل سومیا، صفحه اصلی">
          <span>SOUMIA HOTEL</span>
        </a>
      </header>

      <section className="hero" id="home" aria-labelledby="hero-title">
        <div className="hero-image" aria-hidden="true" />
        <div className="hero-shade" aria-hidden="true" />
        <div className="hero-orb orb-one" aria-hidden="true" />
        <div className="hero-orb orb-two" aria-hidden="true" />

        <div className="hero-content">
          <div className="eyebrow reveal-up">
            <span>24 ROOMS · 1 SUITE</span>
            <i />
            <span>AHVAZ · KIANPARS</span>
          </div>
          <h1 id="hero-title" className="reveal-up delay-one">
            سومیا؛
            <span>یک میزبانی شایان</span>
          </h1>
          <p className="hero-copy reveal-up delay-two">
            هتل سومیا با ۲۴ اتاق مدرن و یک سوئیت اختصاصی، فضایی آرام و صمیمی
            برای سفرهای کاری و خانوادگی در یکی از بهترین نقاط اهواز است.
          </p>
          <div className="hero-actions reveal-up delay-three">
            <a
              className="button button-gold"
              href="https://www.eghamat24.com/AhvazHotels/SoumiaHotel.html"
              target="_blank"
              rel="noreferrer"
            >
              <span>رزرو مستقیم</span>
              <span aria-hidden="true">↙</span>
            </a>
            <a className="text-link" href="#about">
              معرفی هتل
              <span aria-hidden="true">←</span>
            </a>
          </div>
        </div>

        <div className="scroll-note" aria-hidden="true">
          <span>DISCOVER SOUMIA</span>
          <i />
        </div>
      </section>

      <div className="signature-strip" aria-label="مشخصات هتل سومیا">
        <span>24 ROOMS</span>
        <b>✦</b>
        <span>1 EXCLUSIVE SUITE</span>
        <b>✦</b>
        <span>RESTAURANT</span>
        <b>✦</b>
        <span>LOBBY CAFE</span>
      </div>

      <section className="about section-shell" id="about" aria-labelledby="about-title">
        <div className="section-kicker">
          <span>01</span>
          <i />
          <span>معرفی هتل</span>
        </div>

        <div className="about-grid">
          <div className="about-portrait">
            <img src="/soumia-about.jpg" alt="نمای ورودی هتل سومیا در اهواز" />
            <div className="portrait-frame" aria-hidden="true" />
            <span className="portrait-caption">SOUMIA HOTEL EXTERIOR</span>
            <div className="location-badge glass-panel">
              <span>AHVAZ</span>
              <strong>کیانپارس · سیزدهم شرقی</strong>
              <span>IRAN</span>
            </div>
          </div>

          <div className="about-copy">
            <p className="english-overline">A CALM STAY IN KIANPARS</p>
            <h2 id="about-title">
              آسایش و آرامش،
              <span>در قلب کیانپارس؛</span>
              نزدیک به جریان شهر.
            </h2>
            <p className="about-lead">
              هتل سومیا با استانداردهای روز و نگاهی نو به میزبانی طراحی شده
              است. ۲۴ اتاق مدرن، یک سوئیت اختصاصی و سالن جلسات ۲۱ نفره،
              محیطی آرام برای استراحت و قرارهای حرفه‌ای فراهم می‌کنند. موقعیت
              هتل در کیانپارس، دسترسی به مراکز تجاری، خرید و رستوران‌های شناخته‌شده
              اهواز را آسان می‌سازد.
            </p>
            <div className="about-note glass-panel">
              <span className="quote-mark">“</span>
              <p>سفر، فرصتی برای تجربه لحظاتی است که تا همیشه در یاد می‌مانند.</p>
              <span className="note-signature">هتل سومیا</span>
            </div>
          </div>
        </div>
      </section>

      <section className="work section-shell" id="rooms" aria-labelledby="rooms-title">
        <div className="section-heading">
          <div>
            <div className="section-kicker light">
              <span>02</span>
              <i />
              <span>سومیا در یک نگاه</span>
            </div>
            <h2 id="rooms-title">Stay &amp; Taste</h2>
          </div>
          <p>
            اقامت، پذیرایی و جزئیات کوچک مهمان‌نوازی؛ همه برای تجربه‌ای آرام و
            به‌یادماندنی در اهواز.
          </p>
        </div>

        <div className="projects-grid">
          {hotelHighlights.map((item) => (
            <article className={`project-card ${item.className}`} key={item.number}>
              {item.gallery ? (
                <DiningCarousel slides={item.images} />
              ) : item.image ? (
                <DiningCarousel slides={[{ src: item.image, alt: item.alt }]} />
              ) : (
                <div className="meeting-visual" aria-hidden="true">
                  <span>۲۱</span>
                  <small>MEETING ROOM</small>
                </div>
              )}
              <div className="project-overlay" />
              <div className="project-number">{item.number}</div>
              <div className="project-content">
                <span>{item.category}</span>
                <h3>{item.title}</h3>
              </div>
              <a className="project-arrow" href="#reservation" aria-label="تماس برای رزرو">
                ↙
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="services section-shell" id="experience" aria-labelledby="experience-title">
        <div className="services-intro">
          <div className="section-kicker">
            <span>03</span>
            <i />
            <span>خدمات و ساعات فعالیت</span>
          </div>
          <h2 id="experience-title">
            پذیرایی گرم،
            <span>با زمان‌بندی روشن.</span>
          </h2>
          <p>
            ساعات و شماره‌های داخلی این بخش مستقیماً از راهنمای اقامتی هتل
            سومیا درج شده‌اند تا مهمانان سریع‌تر به خدمات مورد نیاز خود دسترسی
            داشته باشند.
          </p>
        </div>

        <div className="service-list">
          {services.map((service) => (
            <article className="service-item" key={service.title}>
              <span className="service-number">{service.number}</span>
              <div>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </div>
              <span className="service-icon" aria-hidden="true">✦</span>
            </article>
          ))}
        </div>
      </section>

      <section className="contact" id="reservation" aria-labelledby="reservation-title">
        <div className="contact-image" aria-hidden="true" />
        <div className="contact-overlay" aria-hidden="true" />
        <div className="contact-glow" aria-hidden="true" />
        <div className="contact-content glass-panel">
          <span className="contact-overline">DIRECT BOOKING · SOUMIA HOTEL</span>
          <h2 id="reservation-title">
             در
          سومیا 
            منتظر شما هستیم 
          </h2>
          <p>
            برای اطلاع از ظرفیت اتاق‌ها و ثبت رزرو مستقیم، از طریق سایت های درج شده اقدام فرمایید در غیر این صورت با هتل تماس بگیرید
          </p>
          <div className="contact-actions">
            <a className="button button-gold contact-button" href="tel:+989991142225">
              <span>۰۹۹۹۱۱۴۲۲۲۵</span>
              <span aria-hidden="true">↙</span>
            </a>
            <a
              className="button button-gold"
              href="https://www.eghamat24.com/AhvazHotels/SoumiaHotel.html"
              target="_blank"
              rel="noreferrer"
            >
              <span>رزرو مستقیم</span>
              <span aria-hidden="true">↙</span>
            </a>
            <a className="text-link" href="tel:+986133919632">
              تلفن ثابت: ۰۶۱۳۳۹۱۹۶۳۲
              <span aria-hidden="true">←</span>
            </a>
          </div>
          <div className="contact-location">
            <span>SOUMIA HOTEL</span>
            <i />
            <span>اهواز، کیانپارس، خیابان سیزدهم شرقی</span>
          </div>
        </div>
      </section>

    </main>
  );
}
