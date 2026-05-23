import { useState, useEffect, useRef } from "react";
import { Github, Linkedin, Menu, X, Sun, Moon } from "lucide-react";
import "./App.css";

const NAV = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

const TECH_TICKER = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "Python",
  "MySQL",
  "MongoDB",
  "Firebase",
  "Django",
  "React Native",
  "Git",
  "REST API",
  "Tailwind CSS",
  "Docker",
];

const FACTS = [
  { key: "Location", val: "Colombo, Sri Lanka", ok: false },
  { key: "Status", val: "Available immediately", ok: true },
  { key: "Focus", val: "Full Stack Development", ok: false },
  { key: "Graduation", val: " 2026", ok: false },
  { key: "Languages", val: "English, Sinhala", ok: false },
  { key: "Role Seeking", val: "Junior / Intern Developer", ok: false },
];

const SKILLS = [
  {
    num: "01",
    icon: "⚡",
    title: "Frontend",
    warm: true,
    stack: [
      "React & Next.js",
      "JavaScript",
      "React Native",
      "React js",
      "Tailwind CSS",
      "HTML & CSS",
      "Figma / UI Design",
    ],
  },
  {
    num: "02",
    icon: "🛠",
    title: "Backend",
    warm: false,
    stack: [
      "Node.js & Express",
      "Python & Django",
      "REST APIs",
      "PHP & Laravel",
      "WebSockets",
    ],
  },
  {
    num: "03",
    icon: "🗄",
    title: "Database",
    warm: true,
    stack: ["MySQL & PostgreSQL", "MongoDB", "Firebase"],
  },
  {
    num: "04",
    icon: "🔧",
    title: "Tools",
    warm: false,
    stack: ["Git & GitHub", "Linux / CLI", "Vercel & Netlify", "VS Code"],
  },
];

const PROJECTS = [
  {
    num: "01",
    tag: "Featured",
    tagWarm: true,
    year: "2026",
    title: "Saloon Yehansa Management System",
    summary:
      "Full-stack web application for managing salon appointments, customers, services, and staff with role-based access control.",
    detail:
      "Developed a complete salon management system for Saloon Yehansa. Implemented JWT-based authentication with role-based access for admin and staff. Built RESTful APIs using Node.js and Express, and developed a responsive React frontend with MongoDB as the database. The system supports appointment booking, service management, and customer record tracking.",
    stack: ["React", "Node.js", "MongoDB", "Express", "JWT"],
    links: [
      { label: "Live Demo", href: "https://your-salon-demo-link.com" },
      {
        label: "Frontend GitHub",
        href: "https://github.com/thushaniwanigasinghe/Saloon-Yehansa-Frontend/tree/main#",
      },
      {
        label: "Backend GitHub",
        href: "https://github.com/thushaniwanigasinghe/Saloon-Yehansa-Backend/tree/main",
      },
    ],
  },
  {
    num: "02",
    tag: "Featured",
    tagWarm: true,
    year: "2025",
    title: "Staff Management System",
    summary:
      "Full-stack web app for managing teachers records, attendance, and relief with role-based access control.",
    detail:
      "Built for a school staff managemnet system .JWT-authenticated roles for admin, teacher. Express + Node js REST API, deployed it.",
    stack: ["React", "Node.js", "MongoDB", "Express", "JWT"],
    links: [
      { label: "Live Demo", href: " https://teachgrid-fe.netlify.app" },
      {
        label: "Frontend GitHub",
        href: "https://github.com/thushaniwanigasinghe/Teachgrid-Teacher-Management-System-Frontend",
      },
      {
        label: "Backend GitHub",
        href: "https://github.com/thushaniwanigasinghe/Teachgrid-Teacher-Management-System-Backend",
      },
    ],
  },
  {
    num: "03",
    tag: "Academic",
    tagWarm: true,
    year: "2025",
    title: "Virtual-Memory-Simulation",
    summary:
      "An interactive web application built to simulate core Operating System concepts, specifically demonstrating paging mechanisms and page fault handling through a logical-to-physical address mapping interface.",
    detail:
      "Developed using a client-server architecture with a React frontend and Node.js backend to simulate an 8-page logical memory system, mapping addresses up to 8191 bytes into 4 physical frames with 1KB page sizing",
    stack: ["React", "Node.js", "Express.js"],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/thushaniwanigasinghe/Virtual-Memory-Simulation.git",
      },
    ],
  },
  {
    num: "04",
    tag: "Featured",
    tagWarm: false,
    year: "2024",
    title: "Car Rental Mobile App",
    summary: "Cross-platform mobile car rental app ",
    detail: "Firebase push notifications.advanced search and filtering.",
    stack: ["React Native", "Firebase", "PostgreSQL"],
    links: [
      { label: "Case Study", href: "#" },
      {
        label: "GitHub",
        href: "https://github.com/thushaniwanigasinghe/Car-Rental-Android-app.git",
      },
    ],
  },
  {
    num: "05",
    tag: null,
    year: "2025",
    title: "react.js-calculator",
    summary:
      "A responsive web-based calculator application built with React.js that provides a seamless user experience for performing basic arithmetic operations with real-time state updates.",
    detail:
      "The application utilizes React Hooks for efficient state management and features a clean, mobile-friendly interface with input validation to handle complex mathematical expressions accurately.",
    stack: ["Tailwind", "react"],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/thushaniwanigasinghe/react.js-calculator.git",
      },
    ],
  },
];

const EDUCATION = [
  {
    period: "2022 — 2026",
    icon: "🎓",
    degree: "BSE (Hons) Software Engineering",
    institution: "Open University of Sri Lanka",
    warm: true,
  },

  {
    period: "2025",
    icon: "📉",
    degree: "Cost of Software Quality",
    institution: "EdApp",
    detail:
      "Focuses on software quality management and cost-efficiency strategies.",
    link: "https://drive.google.com/file/d/1-aJ35re7jitKrq78S1aES4Rf5G3-dfly/view?usp=drive_link",
    warm: false,
  },
  {
    period: "2025",
    icon: "🔍",
    degree: "Web Element Locator Strategies",
    institution: "Applitools",
    detail:
      "Mastering advanced selectors and strategies for robust UI automation.",
    link: "https://drive.google.com/file/d/1Gk67V_MB1il83Y1moYVeKz9kAICYwLrI/view?usp=drive_link",
    warm: false,
  },
  {
    period: "2025",
    icon: "🤝",
    degree: "The Whole Team Approach to Continuous Testing",
    institution: "Applitools",
    detail: "Integrating testing across the entire development lifecycle.",
    link: "https://drive.google.com/file/d/1kfJY1CHRAKWoDzH1SHsdWCw9wgd56L6W/view?usp=drive_link",
    warm: false,
  },
  {
    period: "2025",
    icon: "🏗️",
    degree: "Setting a Foundation for Successful Test Automation",
    institution: "Applitools",
    detail: "Designing scalable and maintainable test automation frameworks.",
    link: "https://drive.google.com/file/d/1E0ZJ4fUUOJM7w8prhwiEsvXBM1aJGEeh/view?usp=drive_link",
    warm: false,
  },
  {
    period: "2025",
    icon: "🧪",
    degree: "Codeless Test Automation with Selenium IDE",
    institution: "Applitools",
    detail: "Automating browser testing using record-and-playback techniques.",
    link: "https://drive.google.com/file/d/1nXR05-55eu6Gaz_LiMIPH1o9MyFf0mrG/view?usp=drive_link",
    warm: false,
  },
  {
    period: "2025",
    icon: "🚀",
    degree: "API Test Automation With Postman",
    institution: "Applitools",
    detail:
      "Automating API testing, environment variables, and script-based validation.",
    link: "https://drive.google.com/file/d/1YkTdHzY92pfCNO7msD7AG1dlmMUp0xZp/view?usp=drive_link",
    warm: false,
  },
  {
    period: "2025",
    icon: "🐍",
    degree: "Python Data Structures",
    institution: "Sololearn",
    detail: "Advanced manipulation of Lists, Tuples, Sets, and Dictionaries.",
    link: "https://drive.google.com/file/d/1XvEibqHoM5IqAeomnLbmPJHJjGkxWlPw/view?usp=drive_link",
    warm: false,
  },
  {
    period: "2025",
    icon: "🗄️",
    degree: "Introduction to SQL",
    institution: "Sololearn",
    detail: "Mastering database queries, filtering, and table management.",
    link: "https://drive.google.com/file/d/1WUbD1luKzOS0I3vOJRpbL6XIh7_xGSYR/view?usp=drive_link",
    warm: false,
  },
  {
    period: "2025",
    icon: "☕",
    degree: "Introduction to Java",
    institution: "Sololearn",
    detail: "Core Java programming and object-oriented concepts.",
    link: "https://drive.google.com/file/d/16i0SQJK0XNF0FjKUegth3PpJ7jXr1jco/view?usp=drive_link",
    warm: false,
  },
  {
    period: "2025",
    icon: "💻",
    degree: "Introduction to Programming Using Python",
    institution: "Sololearn",
    detail: "Foundational programming logic and Python syntax.",
    link: "https://drive.google.com/file/d/1q9-7aSBGRlKTH87JHmm9E-8kSP5H8m3m/view?usp=drive_link",
    warm: false,
  },
  {
    period: "2025 — Ongoing",
    icon: "☁️",
    degree: "AWS Certified Cloud Practitioner",
    institution: "Amazon Web Services",
    detail: "CLF-C02 · In Progress",
    link: "",
    warm: true,
  },
  {
    period: "2024-Ongoing",
    icon: "💻",
    degree: "Full Stack Web Development",
    institution: "STEM Link-Engineering",
    detail: "In Progress",
    link: "",
    warm: true,
  },
];

const CONTACT_LINKS = [
  {
    icon: "✉",
    label: "Email",
    value: "thushanimalsha42@gmail.com",
    warm: true,
  },
  {
    icon: "in",
    label: "LinkedIn",
    value: "linkedin.com/in/thushani-wanigasinghe-9364b4337",
    href: "https://linkedin.com/in/thushani-wanigasinghe-9364b4337",
    warm: false,
  },
  {
    icon: "gh",
    label: "GitHub",
    value: "github.com/thushaniwanigasinghe",
    href: "https://github.com/thushaniwanigasinghe",
    warm: true,
  },
];
import MY_PHOTO from "./assets/Photo.png";
// HOOKS
function useActiveSection() {
  const [active, setActive] = useState("hero");
  useEffect(() => {
    const h = () => {
      let cur = "hero";
      NAV.forEach(({ id }) => {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 130) cur = id;
      });
      setActive(cur);
    };
    window.addEventListener("scroll", h, { passive: true });
    return () => window.removeEventListener("scroll", h);
  }, []);
  return active;
}

function useInView(t = 0.06) {
  const ref = useRef(null);
  const [vis, setVis] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setVis(true);
          obs.disconnect();
        }
      },
      { threshold: t },
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [t]);
  return [ref, vis];
}

// PRIMITIVES
const goTo = (id) =>
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

function Reveal({ children, delay = 0 }) {
  const [ref, vis] = useInView();
  return (
    <div
      ref={ref}
      style={{
        transition: `opacity .65s ease ${delay}ms, transform .65s cubic-bezier(.16,1,.3,1) ${delay}ms`,
        opacity: vis ? 1 : 0,
        transform: vis ? "none" : "translateY(20px)",
      }}
    >
      {children}
    </div>
  );
}

function Eyebrow({ label, warm = true }) {
  return (
    <p
      className={`f-mono flex items-center gap-2.5 mb-3 text-[10px] tracking-[.26em] uppercase opacity-65
        ${warm ? "text-[var(--warm2)]" : "text-[var(--cool2)]"}`}
    >
      <span
        className={`inline-block w-4 h-px ${warm ? "bg-[var(--warm2)]" : "bg-[var(--cool2)]"}`}
      />
      {label}
    </p>
  );
}

function SectionTitle({ children }) {
  return (
    <h2
      className="f-br font-bold text-[var(--ink)] mb-14 leading-[1.04]"
      style={{ fontSize: "clamp(28px,3.6vw,48px)", letterSpacing: "-.025em" }}
    >
      {children}
    </h2>
  );
}

function BtnPrimary({ onClick, children }) {
  return (
    <button
      onClick={onClick}
      className="btn-primary a-pulse-btn group flex items-center gap-2.5 px-7 py-3.5 rounded-2xl border-none cursor-pointer font-semibold text-[14px]
          transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_36px_rgba(212,168,71,.4)]"
      style={{ background: "var(--btn)", color: "#090c12" }}
    >
      {children}
    </button>
  );
}

function BtnSecondary({ onClick, children }) {
  return (
    <button
      onClick={onClick}
      className="glass-btn flex items-center gap-2.5 px-7 py-3.5 rounded-2xl cursor-pointer font-semibold text-[14px]
          border transition-all duration-300 hover:-translate-y-0.5 hover:bg-[var(--btnlh)]"
      style={{ color: "var(--btn2)", borderColor: "rgba(212,168,71,.3)" }}
    >
      {children}
    </button>
  );
}

function AccW({ children }) {
  return <span className="gt-w">{children}</span>;
}
function AccC({ children }) {
  return <span className="gt-c">{children}</span>;
}
function AccBtn({ children }) {
  return <span className="gt-btn">{children}</span>;
}

function Chip({ label, warm = true }) {
  return (
    <span
      className={`f-mono inline-block text-[10px] tracking-wide px-2.5 py-0.5 rounded-md border
        ${
          warm
            ? "bg-[var(--wl)] border-[rgba(87,106,143,.22)] text-[var(--warm3)]"
            : "bg-[var(--cl)] border-[rgba(123,150,178,.22)] text-[var(--cool2)]"
        }`}
    >
      {label}
    </span>
  );
}

function StackTag({ label }) {
  return (
    <span
      className="f-mono text-[10px] tracking-wide px-2.5 py-0.5 rounded-md
        bg-[var(--s3)] border border-[var(--xf)] text-[var(--ink3)]"
    >
      {label}
    </span>
  );
}

// NAVBAR
function Navbar({ theme, setTheme }) {
  const active = useActiveSection();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", h, { passive: true });
    return () => window.removeEventListener("scroll", h);
  }, []);

  return (
    <header
      className="fixed inset-x-0 top-0 z-[999] h-[68px] flex items-center justify-between px-4 md:px-8 transition-all duration-400"
      style={{
        background: scrolled ? "var(--nav-bg-scroll)" : "var(--nav-bg)",
        boxShadow: scrolled ? "0 1px 0 var(--xf)" : "none",
        backdropFilter: "blur(24px)",
      }}
    >
      {/* Logo */}
      <button
        onClick={() => goTo("hero")}
        className="a-pulse-btn flex items-center gap-2.5 border-none bg-transparent p-0 cursor-pointer"
      >
        <div
          className="relative w-8 h-8 rounded-xl flex items-center justify-center"
          style={{
            background: "var(--btnl)",
            border: "1px solid rgba(212,168,71,.3)",
          }}
        >
          <span
            className="f-br font-extrabold text-[13px]"
            style={{ color: "var(--btn2)" }}
          >
            T
          </span>
          <span
            className="a-blink absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-[var(--ok)] border-2"
            style={{ borderColor: "var(--bg)" }}
          />
        </div>
        <span className="f-br font-bold text-[15px] gt-logo tracking-tight">
          Thushani
        </span>
      </button>

      {/* Nav pill */}
      <nav
        className="hidden lg:flex items-center gap-0.5 p-1 rounded-2xl"
        style={{ background: "var(--s2)", border: "1px solid var(--xf)" }}
      >
        {NAV.map(({ id, label }) => (
          <button
            key={id}
            onClick={() => goTo(id)}
            className={`px-3.5 py-1.5 rounded-xl text-[12px] font-medium border-none cursor-pointer transition-all duration-180
                ${
                  active === id
                    ? "text-[#090c12] shadow-[0_2px_12px_rgba(212,168,71,.4)]"
                    : "bg-transparent text-[var(--ink3)] hover:text-[var(--ink2)] hover:bg-[var(--s3)]"
                }`}
            style={active === id ? { background: "var(--btn)" } : {}}
          >
            {label}
          </button>
        ))}
      </nav>

      {/* CTA, Theme Toggle & Mobile Menu Toggle */}
      <div className="flex items-center gap-3">
        {/* Modern Theme Switcher */}
        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="w-9 h-9 rounded-xl flex items-center justify-center glass border border-[var(--xf)] text-[var(--ink2)] hover:text-[var(--btn)] transition-all duration-300 hover:scale-105"
          style={{ cursor: "pointer" }}
          title={theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"}
          aria-label="Toggle theme"
        >
          {theme === "dark" ? (
            <Sun size={17} className="transition-transform duration-500 hover:rotate-45" />
          ) : (
            <Moon size={17} className="transition-transform duration-500 hover:-rotate-12" />
          )}
        </button>

        <button
          onClick={() => goTo("contact")}
          className="hidden sm:flex glass-btn items-center gap-2 px-4 py-2 rounded-xl cursor-pointer text-[12px] font-semibold
              transition-all duration-200 hover:bg-[var(--btnlh)] hover:shadow-[0_4px_20px_rgba(212,168,71,.3)]"
          style={{ color: "var(--btn2)" }}
        >
          <span className="a-blink w-[5px] h-[5px] rounded-full bg-[var(--ok)] inline-block" />
          Available to hire
        </button>

        <button
          className="lg:hidden p-2 text-[var(--ink2)] cursor-pointer bg-transparent border-none outline-none hover:text-[var(--btn)] transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div 
          className="absolute top-[68px] left-0 w-full border-b border-[var(--xf)] shadow-xl lg:hidden flex flex-col p-4 gap-2 backdrop-blur-xl"
          style={{ background: "var(--nav-mobile-bg)" }}
        >
          {NAV.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => {
                goTo(id);
                setMenuOpen(false);
              }}
              className={`px-4 py-3 rounded-xl text-[14px] font-medium border-none cursor-pointer text-left transition-all duration-180
                  ${
                    active === id
                      ? "text-[#090c12] bg-[var(--btn)]"
                      : "bg-transparent text-[var(--ink3)] hover:text-[var(--ink2)] hover:bg-[var(--s3)]"
                  }`}
            >
              {label}
            </button>
          ))}
          <button
            onClick={() => {
              goTo("contact");
              setMenuOpen(false);
            }}
            className="mt-2 glass-btn flex sm:hidden items-center justify-center gap-2 px-4 py-3 rounded-xl cursor-pointer text-[13px] font-semibold transition-all duration-200"
            style={{ color: "var(--btn2)" }}
          >
            <span className="a-blink w-[5px] h-[5px] rounded-full bg-[var(--ok)] inline-block" />
            Available to hire
          </button>
        </div>
      )}
    </header>
  );
}

// HERO — Smaller Text & Larger Image
function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col relative overflow-hidden bg-[var(--bg)]"
    >
      {/* ── Background: Network Grid ── */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-10">
        <svg
          className="absolute inset-0 w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="net-grid"
              width="80"
              height="80"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="2" cy="2" r="1" fill="var(--grid-dots)" />
              <path
                d="M2 2 L80 80 M2 80 L80 2"
                stroke="var(--grid-dots)"
                strokeWidth="0.2"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#net-grid)" />
        </svg>
      </div>

      {/* ── Main Centered Container ── */}
      <div className="flex-1 flex flex-col justify-center relative z-10 px-5 md:px-10 mt-20 lg:mt-0">
        {/* Content Row — Adjusted gaps for larger image and shifted slightly right */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-16 w-full max-w-[1500px] mx-auto lg:pl-20">
          {/* Left: Text Content (Smaller sizes) */}
          <div className="flex-1 max-w-[600px] text-center lg:text-left flex flex-col items-center lg:items-start">
            <Reveal delay={100}>
              <div className="mb-5">
                <div className="glass-btn px-3 py-1.5 rounded-full border border-[var(--xf)] inline-block">
                  <span className="f-mono text-[9px] tracking-[.18em] uppercase text-[var(--btn)]">
                    Undergraduate Software Engineer · Final Year
                  </span>
                </div>
              </div>

              {/* Smaller Headline Font Size */}
              <h1
                className="f-br font-extrabold leading-[0.95] mb-6 text-[var(--ink)] uppercase text-center lg:text-left"
                style={{
                  fontSize: "clamp(35px, 6vw, 60px)",
                  letterSpacing: "-.04em",
                }}
              >
                HI THERE,
                <br />
                <span className="gt-btn text-[var(--btn)]">I AM THUSHANI ,</span>
                <br />
                <span className="text-[var(--hero-sub)]">
                  A WEB DEVELOPER.
                </span>
              </h1>

              <p className="text-[var(--ink3)] font-light leading-[1.7] max-w-[450px] mb-8 text-[15px] text-center lg:text-left">
                I'm a Undergraduate Software Engineering student at The Open
                University of Sri Lanka, passionate about building modern web
                applications with clean, scalable code.
              </p>

              <div className="flex flex-wrap items-center gap-4 justify-center lg:justify-start">
                <BtnPrimary onClick={() => goTo("contact")}>Hire Me</BtnPrimary>
                <div className="flex gap-3">
                  <a
                    href="https://github.com/thushaniwanigasinghe"
                    target="_blank"
                    rel="noreferrer"
                    className="w-12 h-12 rounded-xl flex items-center justify-center glass border border-[var(--xf)] text-[var(--ink3)] hover:text-[var(--btn)] hover:border-[var(--btn)] transition-all shadow-xl"
                  >
                    <Github size={20} strokeWidth={1.5} />
                  </a>

                  <a
                    href="https://linkedin.com/in/thushani-wanigasinghe-9364b4337"
                    target="_blank"
                    rel="noreferrer"
                    className="w-12 h-12 rounded-xl flex items-center justify-center glass border border-[var(--xf)] text-[var(--ink3)] hover:text-[var(--btn)] hover:border-[var(--btn)] transition-all shadow-xl"
                  >
                    <Linkedin size={20} strokeWidth={1.5} />
                  </a>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right: Larger Image Container */}
          <div className="lg:w-[550px] w-full flex items-center justify-center lg:justify-start">
            <Reveal delay={300} className="w-full">
              <div className="relative flex justify-center items-center">
                {/* Enhanced Background Glow for larger photo */}
                <div className="absolute w-[130%] h-[130%] bg-emerald-500/5 blur-[120px] rounded-full" />

                <img
                  src={MY_PHOTO}
                  alt="Thushani Wanigasinghe"
                  className="w-full max-w-[320px] sm:max-w-[420px] md:max-w-[480px] h-auto object-contain shrink-0"
                  style={{
                    maxHeight: "85vh",
                    filter: "drop-shadow(0 0 35px rgba(52,211,153,0.10))",
                  }}
                />
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

// TICKER
function Ticker() {
  const items = [
    ...TECH_TICKER,
    ...TECH_TICKER,
    ...TECH_TICKER,
    ...TECH_TICKER,
  ];
  return (
    <div
      className="absolute bottom-35 left-0 right-0 overflow-hidden py-3 z-20"
      style={{
        borderTop: "1px solid var(--xf)",
        borderBottom: "1px solid var(--xf)",
        background: "var(--ticker-bg)",
        backdropFilter: "blur(10px)",
      }}
    >
      <div className="a-ticker flex w-max">
        {items.map((t, i) => (
          <div
            key={i}
            className="f-mono flex items-center gap-5 whitespace-nowrap px-6 text-[10px] tracking-[.18em] uppercase text-[var(--ink3)]"
          >
            {t}
            <span
              className="opacity-40"
              style={{ fontSize: 6, color: "var(--btn)" }}
            >
              ◆
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

// ABOUT
function About() {
  return (
    <section
      id="about"
      className="py-20 md:py-28 px-5 md:px-10"
      style={{ background: "var(--s1)" }}
    >
      <div className="max-w-[1200px] mx-auto">
        <Reveal>
          <Eyebrow label="About me" />
        </Reveal>
        <Reveal delay={80}>
          <SectionTitle>
            The person <AccBtn>behind the code</AccBtn>
          </SectionTitle>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-4">
          {/* Quote + bio — 2 cols */}
          <Reveal delay={140}>
            <div className="md:col-span-2 glass rounded-3xl p-8 card-lift h-full flex flex-col justify-between min-h-[280px]">
              <blockquote
                className="text-[var(--ink2)] font-light leading-[1.7] text-[17px] italic border-l-2 pl-5"
                style={{ borderColor: "rgba(212,168,71,.4)", margin: 0 }}
              >
                "I believe software is more than logic — it's the intersection
                of engineering and design, built to solve real human problems."
              </blockquote>
              <div className="mt-6">
                <p className="text-[15px] text-[var(--ink3)] leading-[1.9] font-light mb-3">
                  Final-year SE student who loves building products from the
                  ground up. Open source contributions, system design reading,
                  side projects — that's my after-hours.
                </p>
                <p className="f-br font-bold text-[32px] gt-btn opacity-55">
                  Thushani
                </p>
              </div>
            </div>
          </Reveal>

          {/* Quick facts */}
          <Reveal delay={200}>
            <div className="glass rounded-3xl p-6 card-lift">
              <p
                className="f-mono text-[9px] tracking-[.22em] uppercase opacity-60 mb-4"
                style={{ color: "var(--btn2)" }}
              >
                Quick facts
              </p>
              <div
                className="divide-y divide-[var(--divider-color)]"
              >
                {FACTS.map((f) => (
                  <div
                    key={f.key}
                    className="flex justify-between items-center py-3"
                    style={{ borderBottom: "1px solid var(--divider-color)" }}
                  >
                    <span className="f-mono text-[9px] tracking-wider uppercase text-[var(--ink3)]">
                      {f.key}
                    </span>
                    <span
                      className={`text-[11px] font-medium ${f.ok ? "text-[var(--ok)]" : "text-[var(--ink)]"}`}
                    >
                      {f.val}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* GPA card */}
          <Reveal delay={260}>
            <div className="glass-btn rounded-3xl p-6 card-lift">
              <p
                className="f-mono text-[9px] tracking-[.22em] uppercase mb-3 opacity-60"
                style={{ color: "var(--btn2)" }}
              >
                Currently studying
              </p>
              <p className="f-br font-bold text-[var(--ink)] text-[15px] mb-1 leading-snug">
                BSE (Hons) Software Engineer
              </p>
              <p className="text-xs text-[var(--ink3)] mb-4">
                Open University of Sri Lanka
              </p>

              <p className="f-mono text-[9px] uppercase tracking-wider text-[var(--ink3)]">
                2022 — 2026
              </p>
            </div>
          </Reveal>

          {/* Available banner */}
          <Reveal delay={310}>
            <div
              className="md:col-span-2 rounded-3xl p-7 card-lift relative overflow-hidden"
              style={{
                background:
                  "linear-gradient(135deg,rgba(212,168,71,.1),rgba(87,106,143,.08))",
                border: "1px solid rgba(212,168,71,.22)",
              }}
            >
              <div
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage:
                    "radial-gradient(circle,rgba(212,168,71,.4) 1px,transparent 1px)",
                  backgroundSize: "22px 22px",
                }}
              />
              <div className="relative z-10">
                <div className="flex items-center gap-2.5 mb-3">
                  <span className="a-blink w-2.5 h-2.5 rounded-full bg-[var(--ok)] inline-block" />
                  <span className="f-mono text-[10px] tracking-widest uppercase text-[var(--ok)]">
                    Available immediately
                  </span>
                </div>
                <p className="f-br font-bold text-[var(--ink)] text-[20px] mb-2 leading-snug">
                  Looking for my first industry role
                </p>
                <p className="text-[13px] text-[var(--ink3)] font-light leading-[1.75] mb-4 max-w-[480px]">
                  Seeking an internship or junior developer role where I can
                  contribute fast, grow meaningfully, and work with people who
                  care about craft.
                </p>
                <BtnPrimary onClick={() => goTo("contact")}>
                  Get in touch →
                </BtnPrimary>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
// SKILLS
function Skills() {
  return (
    <section
      id="skills"
      className="py-20 md:py-28 px-5 md:px-10"
      style={{ background: "var(--bg)" }}
    >
      <div className="max-w-[1200px] mx-auto">
        <Reveal>
          <Eyebrow label="Expertise" warm={false} />
        </Reveal>
        <Reveal delay={80}>
          <SectionTitle>
            Skills &amp; <AccBtn>technologies</AccBtn>
          </SectionTitle>
        </Reveal>
        <Reveal delay={150}>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {SKILLS.map((s) => (
              <div
                key={s.num}
                className={`has-hline relative rounded-3xl p-6 card-lift cursor-default overflow-hidden transition-colors duration-250
                    ${s.warm ? "glass-w" : "glass-c"}`}
              >
                <div className={`hline ${s.warm ? "hline-w" : "hline-c"}`} />
                <div className="flex justify-between items-start mb-5">
                  <span className="num-tag">{s.num} / 04</span>
                  <div className="w-8 h-8 rounded-xl flex items-center justify-center text-base glass">
                    {s.icon}
                  </div>
                </div>
                <p
                  className={`f-br font-bold text-[15px] mb-4 ${s.warm ? "gt-w" : "gt-c"}`}
                >
                  {s.title}
                </p>
                <ul className="space-y-2 list-none p-0 m-0">
                  {s.stack.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2 text-[11px] text-[var(--ink3)]"
                    >
                      <span
                        className={`w-[3px] h-[3px] rounded-full flex-shrink-0
                          ${s.warm ? "bg-[var(--warm2)]" : "bg-[var(--cool2)]"}`}
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
// PROJECTS
function Projects() {
  const [open, setOpen] = useState(null);
  return (
    <section
      id="projects"
      className="py-20 md:py-28 px-5 md:px-10"
      style={{ background: "var(--s1)" }}
    >
      <div className="max-w-[1200px] mx-auto">
        <Reveal>
          <Eyebrow label="Selected work" />
        </Reveal>
        <Reveal delay={80}>
          <SectionTitle>
            Projects I've <AccBtn>built &amp; shipped</AccBtn>
          </SectionTitle>
        </Reveal>
        <Reveal delay={150}>
          <div
            className="rounded-3xl overflow-hidden"
            style={{ border: "1px solid var(--xf)" }}
          >
            {PROJECTS.map((p, idx) => {
              const isOpen = open === p.num;
              return (
                <div
                  key={p.num}
                  className={`prow ${isOpen ? "open" : ""} cursor-pointer`}
                  style={{
                    background: "var(--s1)",
                    borderBottom:
                      idx < PROJECTS.length - 1
                        ? "1px solid var(--xf)"
                        : "none",
                  }}
                  onClick={() => setOpen(isOpen ? null : p.num)}
                >
                  <div
                    className="grid px-8 py-6 gap-6 items-start"
                    style={{ gridTemplateColumns: "48px 1fr 32px" }}
                  >
                    <div>
                      <p className="num-tag">{p.num}</p>
                      <p className="f-mono text-[10px] text-[var(--ink3)] mt-1 opacity-55">
                        {p.year}
                      </p>
                    </div>

                    <div>
                      <div className="flex items-center gap-2.5 mb-2 flex-wrap">
                        <h3
                          className="f-br font-bold text-[var(--ink)] tracking-tight"
                          style={{ fontSize: "clamp(16px,1.8vw,21px)" }}
                        >
                          {p.title}
                        </h3>
                        {p.tag && (
                          <Chip label={p.tag} warm={p.tagWarm ?? true} />
                        )}
                      </div>
                      <p className="text-[13px] text-[var(--ink3)] leading-[1.75] font-light mb-3 max-w-[560px]">
                        {p.summary}
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {p.stack.map((s) => (
                          <StackTag key={s} label={s} />
                        ))}
                      </div>

                      <div className={`detail-panel ${isOpen ? "show" : ""}`}>
                        <div
                          className="pt-5 mt-4"
                          style={{ borderTop: "1px solid var(--xf)" }}
                        >
                          <p className="text-[13px] text-[var(--ink2)] leading-[1.8] font-light mb-4 max-w-[560px]">
                            {p.detail}
                          </p>
                          <div className="flex gap-3">
                            {p.links.map((l) => (
                              <a
                                key={l.label}
                                href={l.href}
                                className="glass-btn inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold no-underline transition-all duration-200
                                    hover:bg-[var(--btnlh)] hover:shadow-[0_4px_16px_rgba(212,168,71,.3)]"
                                style={{ color: "var(--btn2)" }}
                                onClick={(e) => e.stopPropagation()}
                              >
                                {l.label} ↗
                              </a>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-end pt-1">
                      <div
                        className={`w-7 h-7 rounded-xl flex items-center justify-center text-[var(--ink3)] transition-all duration-300 glass
                          ${isOpen ? "rotate-45" : ""}`}
                        style={
                          isOpen
                            ? {
                                color: "var(--btn2)",
                                borderColor: "rgba(212,168,71,.3)",
                              }
                            : {}
                        }
                      >
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                        >
                          <line x1="12" y1="5" x2="12" y2="19" />
                          <line x1="5" y1="12" x2="19" y2="12" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <p className="f-mono text-[10px] text-[var(--ink3)] tracking-wider mt-3.5 text-right opacity-45">
            Click any row to expand details
          </p>
        </Reveal>
      </div>
    </section>
  );
}

// EDUCATION
function Education() {
  return (
    <section
      id="education"
      className="py-20 md:py-28 px-5 md:px-10"
      style={{ background: "var(--s1)" }}
    >
      <div className="max-w-[1200px] mx-auto">
        <Reveal>
          <Eyebrow label="Education" />
        </Reveal>
        <Reveal delay={80}>
          <SectionTitle>
            Academic <AccBtn>background</AccBtn>
          </SectionTitle>
        </Reveal>
        <Reveal delay={150}>
          <div className="grid md:grid-cols-3 gap-4">
            {EDUCATION.map((e) => (
              <div
                key={e.degree}
                className={`has-tline relative rounded-3xl p-7 card-lift overflow-hidden cursor-default flex flex-col justify-between
                    ${e.warm ? "glass-w" : "glass-c"}`}
              >
                <div className={`tline ${e.warm ? "hline-w" : "hline-c"}`} />

                <div>
                  <div className="flex items-start justify-between mb-5">
                    <span className="text-3xl">{e.icon}</span>
                    <span className="f-mono text-[10px] tracking-wider text-[var(--ink3)] opacity-65">
                      {e.period}
                    </span>
                  </div>
                  <p className="f-br font-bold text-[15px] text-[var(--ink)] mb-1.5 leading-snug">
                    {e.degree}
                  </p>
                  <p className="text-xs text-[var(--ink3)] mb-4">
                    {e.institution}
                  </p>
                  <span
                    className={`f-mono inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] border tracking-wide
                      ${
                        e.warm
                          ? "bg-[var(--wl)] border-[rgba(87,106,143,.3)] text-[var(--warm2)]"
                          : "bg-[var(--cl)] border-[rgba(123,150,178,.3)] text-[var(--cool2)]"
                      }`}
                  >
                    {e.detail}
                  </span>
                </div>
                {e.link && (
                  <div className="mt-5 border-t border-[var(--xf)] pt-4">
                    <a
                      href={e.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="f-mono text-[11px] text-emerald-600 dark:text-green-400 hover:opacity-80 transition-opacity flex items-center gap-1"
                    >
                      View Certificate <span className="text-[14px]">↗</span>
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

// CONTACT
function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [status, setStatus] = useState(null);

  const onChange = (e) =>
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      alert("Please fill in all required fields.");
      return;
    }

    setStatus("sending");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY,
          name: form.name,
          email: form.email,
          company: form.company,
          message: form.message,
        }),
      });

      const result = await response.json();
      if (result.success) {
        setStatus("done");
        setForm({ name: "", email: "", company: "", message: "" });
      } else {
        console.error("Web3Forms Error:", result);
        alert(
          "Error sending message. Please make sure your Web3Forms Access Key is set in .env",
        );
        setStatus(null);
      }
    } catch (error) {
      console.error("Fetch Error:", error);
      alert("Error sending message. Please try again later.");
      setStatus(null);
    }
  };

  const inputCls = `w-full px-4 py-3.5 rounded-2xl text-sm font-body outline-none transition-all duration-200
    placeholder:text-[var(--ink3)] text-[var(--ink)]
    glass border border-[var(--xf)] focus:border-[var(--btn)]`;

  return (
    <section
      id="contact"
      className="py-20 md:py-28 px-5 md:px-10"
      style={{ background: "var(--bg)" }}
    >
      <div className="max-w-[1200px] mx-auto">
        <Reveal>
          <Eyebrow label="Get in touch" warm={false} />
        </Reveal>
        <Reveal delay={80}>
          <SectionTitle>
            Let's build something <AccBtn>great together</AccBtn>
          </SectionTitle>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          <Reveal delay={150}>
            <div>
              <p className="text-[15px] text-[var(--ink3)] font-light leading-[1.85] mb-8">
                Looking for an internship, junior role, or freelance
                opportunity? I'm available immediately and excited to join a
                great team.
              </p>

              <div className="grid grid-cols-2 gap-3">
                {CONTACT_LINKS.map((c) => (
                  <a
                    key={c.label}
                    href={c.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group flex items-center gap-3 p-4 rounded-2xl no-underline card-lift transition-all duration-300
                        ${c.warm ? "glass-w hover:border-[var(--warm2)]" : "glass-c hover:border-[var(--cool2)]"} border border-transparent`}
                  >
                    <div
                      className={`w-9 h-9 rounded-xl flex items-center justify-center text-sm font-bold f-mono flex-shrink-0 glass
                        transition-all duration-300 group-hover:scale-110 group-hover:bg-[rgba(255,255,255,0.05)]
                        ${c.warm ? "text-[var(--warm2)]" : "text-[var(--cool2)]"}`}
                    >
                      {c.icon}
                    </div>
                    <div className="overflow-hidden">
                      <p className="f-mono text-[9px] tracking-widest uppercase text-[var(--ink3)] mb-0.5">
                        {c.label}
                      </p>
                      <p
                        className={`text-[11px] font-medium truncate ${c.warm ? "text-[var(--warm3)]" : "text-[var(--cool2)]"}`}
                      >
                        {c.label === "Linkedin" ? "Thushani W. ↗" : c.value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={240}>
            {status === "done" ? (
              <div className="glass rounded-3xl p-12 text-center card-lift border border-[var(--btn)] border-opacity-20">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5 text-3xl glass-btn text-[var(--btn)]"
                  style={{ border: "1px solid rgba(212,168,71,.3)" }}
                >
                  ✦
                </div>
                <h3 className="f-br font-bold text-[22px] text-[var(--ink)] mb-2">
                  Message received!
                </h3>
                <p className="text-sm text-[var(--ink3)] mb-6">
                  I'll reply within 24 hours. Thank you!
                </p>
                <button
                  onClick={() => setStatus(null)}
                  className="f-mono text-xs border-none bg-transparent cursor-pointer tracking-wider underline hover:opacity-70 transition-opacity"
                  style={{ color: "var(--btn2)" }}
                >
                  Send another →
                </button>
              </div>
            ) : (
              <form
                onSubmit={onSubmit}
                className="glass rounded-3xl p-7 space-y-4 border border-[var(--xf)]"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    {
                      lbl: "Name",
                      name: "name",
                      type: "text",
                      ph: "Your full name",
                    },
                    {
                      lbl: "Email",
                      name: "email",
                      type: "email",
                      ph: "your@email.com",
                    },
                  ].map((f) => (
                    <div key={f.name}>
                      <label className="f-mono text-[10px] tracking-[.16em] uppercase text-[var(--ink3)] block mb-2">
                        {f.lbl}
                      </label>
                      <input
                        required
                        type={f.type}
                        name={f.name}
                        value={form[f.name]}
                        onChange={onChange}
                        placeholder={f.ph}
                        className={inputCls}
                      />
                    </div>
                  ))}
                </div>
                <div>
                  <label className="f-mono text-[10px] tracking-[.16em] uppercase text-[var(--ink3)] block mb-2">
                    Company / University
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={form.company}
                    onChange={onChange}
                    placeholder="Where are you from?"
                    className={inputCls}
                  />
                </div>
                <div>
                  <label className="f-mono text-[10px] tracking-[.16em] uppercase text-[var(--ink3)] block mb-2">
                    Message
                  </label>
                  <textarea
                    required
                    name="message"
                    value={form.message}
                    onChange={onChange}
                    rows={5}
                    placeholder="I'm looking for an intern / junior developer…"
                    className={`${inputCls} resize-none`}
                  />
                </div>
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="btn-primary w-full py-4 rounded-2xl border-none cursor-pointer text-[14px] font-bold
                    transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_32px_rgba(212,168,71,.4)]
                    disabled:opacity-60 disabled:cursor-not-allowed"
                  style={{ background: "var(--btn)", color: "#090c12" }}
                >
                  {status === "sending" ? "Sending…" : "Send message →"}
                </button>
              </form>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
// FOOTER
function Footer() {
  return (
    <footer
      className="px-5 md:px-10 py-6 flex flex-col md:flex-row items-center justify-between flex-wrap gap-4 text-center md:text-left"
      style={{ background: "var(--s1)", borderTop: "1px solid var(--xf)" }}
    >
      <div className="flex items-center gap-2.5">
        <div
          className="w-7 h-7 rounded-xl flex items-center justify-center"
          style={{
            background: "var(--btnl)",
            border: "1px solid rgba(212,168,71,.3)",
          }}
        >
          <span
            className="f-br font-extrabold text-[11px]"
            style={{ color: "var(--btn2)" }}
          >
            T
          </span>
        </div>
        <span className="f-br font-bold text-[13px] text-[var(--ink2)]">
          ThushaniWanigasinghe · 2026
        </span>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="f-mono text-[10px] tracking-widest uppercase text-[var(--ink3)]">
          © 2026 All rights reserved
        </p>
      </div>

      <div className="flex gap-5">
        {[
          {
            label: "GitHub",
            warm: true,
            href: "https://github.com/thushaniwanigasinghe",
          },
          {
            label: "LinkedIn",
            warm: false,
            href: "https://linkedin.com/in/thushani-wanigasinghe-9364b4337",
          },
        ].map((l) => (
          <a
            key={l.label}
            href={l.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`f-mono text-[10px] tracking-widest uppercase text-[var(--ink3)] no-underline transition-colors duration-200
          ${l.warm ? "hover:text-[var(--warm2)]" : "hover:text-[var(--cool2)]"}`}
          >
            {l.label}
          </a>
        ))}
      </div>
    </footer>
  );
}
// ROOT
export default function Portfolio() {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("theme");
      if (saved) return saved;
    }
    return "dark"; // Default to dark mode for this premium look
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === "light") {
      root.classList.add("light");
      root.classList.remove("dark");
    } else {
      root.classList.add("dark");
      root.classList.remove("light");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <>
      <div
        className="min-h-screen overflow-x-hidden"
        style={{ background: "var(--bg)", color: "var(--ink)" }}
      >
        <Navbar theme={theme} setTheme={setTheme} />
        <Hero />
        <Ticker />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Contact />
        <Footer />
      </div>
    </>
  );
}
