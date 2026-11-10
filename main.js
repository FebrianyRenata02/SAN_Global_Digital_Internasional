// Kode Final Global: app.js dengan Perubahan "Kualitas Tanpa Kompromi" menjadi "Kualitas Terpercaya"
const translations = {
    en: {
        nav: {
            topBanner: "Kami San Global adalah Perusahaan Digital profesional terpercaya, mari bekerja sama dengan Kami",
            logoText: "San Global Digital",
            logoSub: "https://sanglobaldigital.my.id/",
            links: [{
                    name: "Services",
                    href: "#services"
                },
                {
                    name: "Portfolio",
                    href: "#portfolio"
                },
                {
                    name: "About Us",
                    href: "#about"
                },
                {
                    name: "Pricing",
                    href: "#pricing"
                },
                {
                    name: "Contact",
                    href: "#contact"
                }
            ],
            startBtn: "Start Project"
        },
        hero: {
            badge: "INTERNATIONAL-GRADE DIGITAL AGENCY",
            title: 'Buka Potensi <span class="gradient-text"><br>Digital Anda</span>',
            desc: "Start a Partnership & Build Your Career With Us. Elevate your business performance through digital channels such as Websites, Google, Facebook, Instagram, YouTube, and more.",
            primaryBtn: "Launch Your Project",
            secondaryBtn: "Explore Portfolio",
            stats: [{
                    num: "150+",
                    label: "Projects Delivered"
                },
                {
                    num: "99.98%",
                    label: "Uptime SLA"
                },
                {
                    num: "15+",
                    label: "Enterprise Clients"
                },
                {
                    num: "24/7",
                    label: "Expert Support"
                }
            ]
        },
        divisions: {
            badge: "DIGITAL DIVISIONS",
            title: "Professional Digital Divisions",
            subtitle: "Specialized multidisciplinary solutions engineered for scale, speed, visual aesthetics and Trusted.",
            cards: [{
                    title: "Graphic Design & Branding",
                    desc: "Enterprise-grade brand identities, creative direction, high-converting marketing collateral, and full-scale digital asset design systems.",
                    link: "Explore Services"
                },
                {
                    title: "UI/UX & Web Design",
                    desc: "Immersive web platforms, high-fidelity wireframes, interaction design systems, and data-driven UX research for engagement.",
                    link: "Explore Services"
                },
                {
                    title: "Full-Stack Development",
                    desc: "Scalable web applications built with robust stacks, high-speed modular architecture, cloud-native APIs, and strict performance standards.",
                    link: "Explore Services"
                },
                {
                    title: "System Engineering & Cloud",
                    desc: "Complex enterprise cloud infrastructure, microservices architecture, serverless pipelines, high-security data mesh, and DevOps automation.",
                    link: "Explore Services"
                }
            ]
        },
        techStack: {
            badge: "TECH STACK",
            title: "Enterprise Tech Stack",
            subtitle: "Powered by industry-standard frameworks and robust cloud infrastructure.",
            icons: ["Next.js", "React", "Node.js", "AWS Cloud", "Docker / K8s", "PostgreSQL"]
        },
        about: {
            badge: "WHO WE ARE & WHY US",
            title: "Bridging Creativity & Heavy Systems Engineering",
            desc: "We are a digital agency that helps enhance your business performance through branding, design, and modern technology. Web Agency provides professional website and design services for business needs such as company profiles and your personal portfolio, starting from SEO, marketing, etc.",
            features: [
                "Trusted Quality: Delivered via strict code reviews and automated continuous delivery pipelines.",
                "Modular & Scalable Architecture: Built to expand effortlessly as your business scales globally."
            ],
            visionTitle: "Our Vision",
            visionDesc: "Menjadi komunitas digital terpercaya yang berkontribusi dan berperan aktif dalam pengembangan serta berkomitmen dalam dunia pendidikan melalui inovasi teknologi, kreativitas, dan solusi digital yang berdampak positif bagi masyarakat.",
            missionTitle: "Our Mission",
            missionItems: [
                "Menyediakan layanan digital berkualitas tinggi untuk mendukung lembaga pendidikan, pelajar, dan tenaga pengajar dalam menghadapi era transformasi digital.",
                "Mengembangkan solusi kreatif dan edukatif berbasis teknologi yang relevan dengan kebutuhan pembelajaran modern.",
                "Mendorong kolaborasi antara dunia pendidikan dan industri digital, menciptakan ekosistem pembelajaran yang adaptif serta berkelanjutan.",
                "Meningkatkan literasi digital masyarakat melalui pelatihan, konten edukatif, dan program berbasis teknologi.",
                "Menjaga profesionalisme, integritas, dan inovasi sebagai landasan utama dalam memberikan layanan kepada setiap mitra dan klien."
            ]
        },
        pricing: {
            badge: "AGENCY PRICE INDEX",
            title: "Transparent Agency Pricing",
            subtitle: "Predictable engagement models tailored for startups and global enterprises.",
            plans: [{
                    name: "Starter Node",
                    desc: "Ideal for fast-scaling startups seeking rapid mvp development.",
                    price: "$499",
                    period: "/ project",
                    features: ["1 Multi-Page High-End UI", "Mobile-First Responsive Layout", "Basic SEO Setup", "7-Day Standard Delivery"],
                    btn: "Start Trial",
                    popular: false
                },
                {
                    name: "Professional Agency",
                    desc: "Comprehensive engineering ecosystem for growth-phase enterprises.",
                    price: "$1,499",
                    period: "/ project",
                    features: ["Full-Stack + Custom Backend", "Advanced Security & Rate Limit", "Cloud Native & DevOps Tooling", "14-Day Priority Delivery"],
                    btn: "Launch Full Ecosystem",
                    popular: true
                },
                {
                    name: "Enterprise Cloud",
                    desc: "Customized architecture and dedicated elite engineering task force.",
                    price: "Custom",
                    period: "/ mo",
                    features: ["Dedicated Enterprise Architecture", "Sub-Millisecond Mission-Critical Uptime", "24/7 Dedicated Engineer on Tier-3", "SLA-Backed Enterprise Support"],
                    btn: "Contact Us Directly",
                    popular: false
                }
            ]
        },
        contact: {
            badge: "ON-DEMAND INQUIRY",
            title: "Start Your Project Inquiry",
            subtitle: "Fill out the form below and let's structure the engineering roadmap for your next digital evolution.",
            placeholders: {
                name: "Full Name",
                email: "Work Email",
                service: "Select Service Domain",
                message: "Tell us about your project, timeline, and goals...",
                submit: "🚀 Send Project Inquiry"
            }
        },
        footer: {
            copyright: "© 2026 San Global Digital. All rights reserved. International-Grade Agency.",
            links: ["Privacy", "Protocol", "Security", "SLA", "Careers"]
        }
    },
    id: {
        nav: {
            topBanner: "Kami San Global adalah Perusahaan Digital profesional terpercaya, mari bekerja sama dengan Kami",
            logoText: "San Global Digital",
            logoSub: "SANGLOBALDIGITAL.MY.ID",
            links: [{
                    name: "Layanan",
                    href: "#services"
                },
                {
                    name: "Portofolio",
                    href: "#portfolio"
                },
                {
                    name: "Tentang Kami",
                    href: "#about"
                },
                {
                    name: "Harga",
                    href: "#pricing"
                },
                {
                    name: "Kontak",
                    href: "#contact"
                }
            ],
            startBtn: "Mulai Proyek"
        },
        hero: {
            badge: "AGENSI DIGITAL BERSTANDAR INTERNASIONAL",
            title: 'Buka Potensi <span class="gradient-text"><br>Digital Anda</span>',
            desc: "Mulai Kemitraan & Bangun Karier Bersama Kami. Tingkatkan performa bisnis Anda melalui saluran digital seperti Website, Google, Facebook, Instagram, YouTube, dan lainnya.",
            primaryBtn: "Luncurkan Proyek Anda",
            secondaryBtn: "Jelajahi Portofolio",
            stats: [{
                    num: "150+",
                    label: "Proyek Selesai"
                },
                {
                    num: "99.98%",
                    label: "Uptime SLA"
                },
                {
                    num: "15+",
                    label: "Klien Enterprise"
                },
                {
                    num: "24/7",
                    label: "Dukungan Ahli"
                }
            ]
        },
        divisions: {
            badge: "DIVISI DIGITAL",
            title: "Divisi Digital Profesional",
            subtitle: "Solusi multidisiplin khusus yang dirancang untuk skala, kecepatan, estetika visual dan Terpercaya.",
            cards: [{
                    title: "Desain Grafis & Branding",
                    desc: "Identitas merek tingkat enterprise, arahan kreatif, materi pemasaran konversi tinggi, dan sistem desain aset digital berskala penuh.",
                    link: "Jelajahi Layanan"
                },
                {
                    title: "UI/UX & Desain Web",
                    desc: "Platform web imersif, wireframe dengan tingkat ketelitian tinggi, sistem desain interaksi, dan riset UX berbasis data untuk keterlibatan.",
                    link: "Jelajahi Layanan"
                },
                {
                    title: "Pengembangan Full-Stack",
                    desc: "Aplikasi web berskala yang dibangun dengan tumpukan teknologi kokoh, arsitektur modular berkecepatan tinggi, API cloud-native, dan standar performa ketat.",
                    link: "Jelajahi Layanan"
                },
                {
                    title: "Teknik Sistem & Cloud",
                    desc: "Infrastruktur cloud enterprise kompleks, arsitektur microservices, pipeline serverless, data mesh keamanan tinggi, dan otomatisasi DevOps.",
                    link: "Jelajahi Layanan"
                }
            ]
        },
        techStack: {
            badge: "TEKNOLOGI",
            title: "Tech Stack Enterprise",
            subtitle: "Didukung oleh kerangka kerja standar industri dan infrastruktur cloud yang kuat.",
            icons: ["Next.js", "React", "Node.js", "AWS Cloud", "Docker / K8s", "PostgreSQL"]
        },
        about: {
            badge: "SIAPA KAMI & MENGAPA KAMI",
            title: "Menghubungkan Kreativitas & Teknik Sistem Berat",
            desc: "Kami adalah agensi digital yang membantu meningkatkan performa bisnis Anda melalui branding, desain, dan teknologi modern. Web Agency menyediakan layanan website dan desain profesional untuk kebutuhan bisnis seperti profil perusahaan dan portofolio pribadi, mulai dari SEO, pemasaran, dll.",
            features: [
                "Kualitas Terpercaya: Disampaikan melalui tinjauan kode yang ketat dan pipeline pengiriman berkelanjutan otomatis.",
                "Arsitektur Modular & Skalabel: Dibangun untuk berkembang dengan mudah seiring skala bisnis Anda secara global."
            ],
            visionTitle: "Visi Kami",
            visionDesc: "Menjadi komunitas digital terpercaya yang berkontribusi dan berperan aktif dalam pengembangan serta berkomitmen dalam dunia pendidikan melalui inovasi teknologi, kreativitas, dan solusi digital yang berdampak positif bagi masyarakat.",
            missionTitle: "Misi Kami",
            missionItems: [
                "Menyediakan layanan digital berkualitas tinggi untuk mendukung lembaga pendidikan, pelajar, dan tenaga pengajar dalam menghadapi era transformasi digital.",
                "Mengembangkan solusi kreatif dan edukatif berbasis teknologi yang relevan dengan kebutuhan pembelajaran modern.",
                "Mendorong kolaborasi antara dunia pendidikan dan industri digital, menciptakan ekosistem pembelajaran yang adaptif serta berkelanjutan.",
                "Meningkatkan literasi digital masyarakat melalui pelatihan, konten edukatif, dan program berbasis teknologi.",
                "Menjaga profesionalisme, integritas, dan inovasi sebagai landasan utama dalam memberikan layanan kepada setiap mitra dan klien."
            ]
        },
        pricing: {
            badge: "INDEKS HARGA AGENSI",
            title: "Harga Agensi Transparan",
            subtitle: "Model kerja sama yang terprediksi dan disesuaikan untuk startup maupun enterprise global.",
            plans: [{
                    name: "Starter Node",
                    desc: "Ideal untuk startup yang berkembang cepat dan membutuhkan pengembangan MVP kilat.",
                    price: "$499",
                    period: "/ proyek",
                    features: ["1 UI High-End Multi-Halaman", "Tata Letak Responsif Mobile-First", "Pengaturan SEO Dasar", "Pengiriman Standar 7 Hari"],
                    btn: "Mulai Uji Coba",
                    popular: false
                },
                {
                    name: "Professional Agency",
                    desc: "Ekosistem teknik komprehensif untuk enterprise pada fase pertumbuhan.",
                    price: "$1,499",
                    period: "/ proyek",
                    features: ["Full-Stack + Backend Kustom", "Keamanan Tingkat Lanjut & Rate Limit", "Tooling Cloud Native & DevOps", "Pengiriman Prioritas 14 Hari"],
                    btn: "Luncurkan Ekosistem Penuh",
                    popular: true
                },
                {
                    name: "Enterprise Cloud",
                    desc: "Arsitektur yang disesuaikan dan tim teknik elit berdedikasi khusus.",
                    price: "Kustom",
                    period: "/ bln",
                    features: ["Arsitektur Enterprise Khusus", "Uptime Kritis Sub-Milidetik", "Insinyur Khusus 24/7 di Tier-3", "Dukungan Enterprise Didukung SLA"],
                    btn: "Hubungi Kami Langsung",
                    popular: false
                }
            ]
        },
        contact: {
            badge: "PERMINTAAN KHUSUS",
            title: "Mulai Permintaan Proyek Anda",
            subtitle: "Isi formulir di bawah ini dan mari susun roadmap teknik untuk evolusi digital Anda berikutnya.",
            placeholders: {
                name: "Nama Lengkap",
                email: "Email Pekerjaan",
                service: "Pilih Domain Layanan",
                message: "Ceritakan tentang proyek, timeline, dan tujuan Anda...",
                submit: "🚀 Kirim Permintaan Proyek"
            }
        },
        footer: {
            copyright: "© 2026 San Global Digital. Hak cipta dilindungi. Agensi Berstandar Internasional.",
            links: ["Privasi", "Protokol", "Keamanan", "SLA", "Karier"]
        }
    }
};

const appData = {
    logoImg: "SAN_International.png",
    socials: [{
            name: "Instagram",
            href: "https://www.instagram.com/san_global_digital/",
            icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>`
        },
        {
            name: "GitHub",
            href: "https://github.com/SansDev-Comunity",
            icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>`
        },
        {
            name: "WhatsApp",
            href: "https://api.whatsapp.com/send/?phone=6282113683120&text&type=phone_number&app_absent=0",
            icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>`
        },
        {
            name: "YouTube",
            href: "https://www.youtube.com/@SunsetBrew",
            icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"></path><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="currentColor"></polygon></svg>`
        }
    ]
};

let currentLang = 'en';

function setLanguage(lang) {
    currentLang = lang;
    renderWebsite();
}

function renderWebsite() {
    const t = translations[currentLang];
    const data = appData;

    document.body.innerHTML = `
        <!-- Top Announcement Bar -->
        <div class="top-announcement-bar" style="background: linear-gradient(135deg, #7c3aed, #ec4899); color: #ffffff; text-align: center; padding: 10px 16px; font-size: 0.9rem; font-weight: 500; letter-spacing: 0.3px;">
            ${t.nav.topBanner}
        </div>

        <!-- Navbar -->
        <header class="navbar">
            <div class="nav-container" style="display: flex; align-items: center;">
                <div class="logo" onclick="window.location.href='index.html'" style="display: flex; align-items: center; gap: 12px; cursor: pointer;">
                    <img src="${data.logoImg}" alt="San Global Digital Logo" class="logo-img" style="height: 64px; width: auto; object-fit: contain; filter: drop-shadow(0 0 8px rgba(168, 85, 247, 0.4));">
                    <div class="logo-text">
                        <strong>${t.nav.logoText}</strong>
                        <small>${t.nav.logoSub}</small>
                    </div>
                </div>
                <nav class="nav-links">
                    ${t.nav.links.map(l => `<a href="${l.href}">${l.name}</a>`).join('')}
                </nav>
                <div class="nav-right">
                    <div class="lang-switch" style="display: flex; background: #121019; border: 1px solid rgba(168, 85, 247, 0.3); border-radius: 30px; padding: 3px; gap: 2px;">
                        <button onclick="setLanguage('en')" style="cursor: pointer; padding: 6px 14px; border-radius: 20px; border: none; background: ${currentLang === 'en' ? '#8b5cf6' : 'transparent'}; color: ${currentLang === 'en' ? '#ffffff' : '#9ca3af'}; font-weight: 700; font-size: 0.85rem; transition: all 0.3s ease;">EN</button>
                        <button onclick="setLanguage('id')" style="cursor: pointer; padding: 6px 14px; border-radius: 20px; border: none; background: ${currentLang === 'id' ? '#8b5cf6' : 'transparent'}; color: ${currentLang === 'id' ? '#ffffff' : '#9ca3af'}; font-weight: 700; font-size: 0.85rem; transition: all 0.3s ease;">ID</button>
                    </div>
                    <a href="#contact" class="btn-start">${t.nav.startBtn}</a>
                </div>
            </div>
        </header>

        <!-- Hero Section -->
        <section class="hero-section" id="services">
            <div class="hero-container">
                <div class="hero-badge">${t.hero.badge}</div>
                <h1>${t.hero.title}</h1>
                <p class="hero-desc">${t.hero.desc}</p>
                <div class="hero-buttons">
                    <a href="#contact" class="btn-primary">${t.hero.primaryBtn}</a>
                    <a href="#portfolio" class="btn-secondary">${t.hero.secondaryBtn}</a>
                </div>
                <div class="stats-grid">
                    ${t.hero.stats.map(s => `
                        <div class="stat-card">
                            <h2>${s.num}</h2>
                            <p>${s.label}</p>
                        </div>
                    `).join('')}
                </div>
                <div class="hero-socials" style="display: flex; justify-content: center; gap: 20px; margin-top: 40px;">
                    ${data.socials.map(soc => `
                        <a href="${soc.href}" target="_blank" aria-label="${soc.name}" style="display: flex; align-items: center; justify-content: center; width: 56px; height: 56px; border-radius: 50%; border: 2px solid #a855f7; color: #ec4899; background: rgba(124, 58, 237, 0.05); transition: all 0.3s ease; box-shadow: 0 0 12px rgba(168, 85, 247, 0.2);" onmouseover="this.style.background='linear-gradient(135deg, #7c3aed, #ec4899)'; this.style.color='#ffffff'; this.style.transform='translateY(-3px)';" onmouseout="this.style.background='rgba(124, 58, 237, 0.05)'; this.style.color='#ec4899'; this.style.transform='translateY(0)';">
                            ${soc.icon}
                        </a>
                    `).join('')}
                </div>
            </div>
        </section>

        <!-- Professional Digital Divisions -->
        <section class="divisions-section">
            <div class="container">
                <div class="section-header">
                    <span class="sub-badge">${t.divisions.badge}</span>
                    <h2>${t.divisions.title}</h2>
                    <p>${t.divisions.subtitle}</p>
                </div>
                <div class="divisions-grid">
                    ${t.divisions.cards.map(c => `
                        <div class="division-card">
                            <div class="card-icon">⚡</div>
                            <h3>${c.title}</h3>
                            <p>${c.desc}</p>
                            <a href="#contact" class="card-link">${c.link} &rarr;</a>
                        </div>
                    `).join('')}
                </div>
            </div>
        </section>

        <!-- Enterprise Tech Stack Section -->
        <section class="tech-stack-section" id="portfolio">
            <div class="container">
                <div class="section-header">
                    <span class="sub-badge">${t.techStack.badge}</span>
                    <h2>${t.techStack.title}</h2>
                    <p>${t.techStack.subtitle}</p>
                </div>
                <div class="tech-icons-grid">
                    ${t.techStack.icons.map(icon => `<div class="tech-pill">${icon}</div>`).join('')}
                </div>
            </div>
        </section>

        <!-- About & Vision/Mission Section -->
        <section class="about-section" id="about" style="margin-top: 0; padding-top: 2rem;">
            <div class="container about-grid" style="display: grid; grid-template-columns: 1fr 1fr; gap: 40px; align-items: start;">
                <div class="about-content" style="margin-top: 0; padding-top: 0;">
                    <span class="sub-badge">${t.about.badge}</span>
                    <h2>${t.about.title}</h2>
                    <p>${t.about.desc}</p>
                    <ul class="about-checks">
                        ${t.about.features.map(f => `<li><span class="check-icon">✓</span> ${f}</li>`).join('')}
                    </ul>
                </div>
                <div class="about-right-col" style="display: flex; flex-direction: column; gap: 20px; margin-top: 0;">
                    <div class="mission-box">
                        <h3>${t.about.visionTitle}</h3>
                        <p>${t.about.visionDesc}</p>
                    </div>
                    <div class="mission-box">
                        <h3>${t.about.missionTitle}</h3>
                        <ol style="padding-left: 20px; margin: 0; display: flex; flex-direction: column; gap: 10px; color: #d1d5db; font-size: 0.95rem; line-height: 1.6;">
                            ${t.about.missionItems.map(item => `<li>${item}</li>`).join('')}
                        </ol>
                    </div>
                </div>
            </div>
        </section>

        <!-- Pricing Section -->
        <section class="pricing-section" id="pricing">
            <div class="container">
                <div class="section-header">
                    <span class="sub-badge">${t.pricing.badge}</span>
                    <h2>${t.pricing.title}</h2>
                    <p>${t.pricing.subtitle}</p>
                </div>
                <div class="pricing-grid">
                    ${t.pricing.plans.map(p => `
                        <div class="pricing-card ${p.popular ? 'popular' : ''}">
                            ${p.popular ? '<span class="popular-badge">MOST POPULAR</span>' : ''}
                            <h3>${p.name}</h3>
                            <p class="plan-desc">${p.desc}</p>
                            <div class="plan-price">
                                <span class="price-val">${p.price}</span>
                                <span class="price-period">${p.period}</span>
                            </div>
                            <ul class="plan-features">
                                ${p.features.map(f => `<li>✓ ${f}</li>`).join('')}
                            </ul>
                            <a href="#contact" class="btn-pricing ${p.popular ? 'active' : ''}">${p.btn}</a>
                        </div>
                    `).join('')}
                </div>
            </div>
        </section>

        <!-- Contact Section -->
        <section class="contact-section" id="contact">
            <div class="container contact-container">
                <div class="section-header">
                    <span class="sub-badge">${t.contact.badge}</span>
                    <h2>${t.contact.title}</h2>
                    <p>${t.contact.subtitle}</p>
                </div>
                <form class="contact-form" id="inquiryForm">
                    <div class="form-row">
                        <input type="text" placeholder="${t.contact.placeholders.name}" required>
                        <input type="email" placeholder="${t.contact.placeholders.email}" required>
                    </div>
                    <div class="form-row">
                        <select required>
                            <option value="" disabled selected>${t.contact.placeholders.service}</option>
                            <option value="ui">UI/UX & Web Design</option>
                            <option value="fullstack">Full-Stack Development</option>
                            <option value="cloud">System Engineering & Cloud</option>
                        </select>
                    </div>
                    <div class="form-row">
                        <textarea rows="4" placeholder="${t.contact.placeholders.message}" required></textarea>
                    </div>
                    <button type="submit" class="btn-submit">${t.contact.placeholders.submit}</button>
                </form>
            </div>
        </section>

        <!-- Footer -->
        <footer class="footer">
            <div class="container footer-container">
                <p>${t.footer.copyright}</p>
                <div class="footer-links">
                    ${t.footer.links.map(l => `<a href="#">${l}</a>`).join('')}
                </div>
            </div>
        </footer>
    `;

    attachGlobalEvents();
}

function attachGlobalEvents() {
    window.addEventListener('scroll', () => {
        const navbar = document.querySelector('.navbar');
        if (navbar) {
            if (window.scrollY > 30) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        }
    });

    const form = document.getElementById('inquiryForm');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            alert(currentLang === 'en' ? "Thank you! Your project inquiry has been successfully transmitted to San Global Digital." : "Terima kasih! Permintaan proyek Anda telah berhasil dikirimkan ke San Global Digital.");
            form.reset();
        });
    }
}

// Injeksi Scrollbar Ungu Dinamis
const scrollbarStyle = document.createElement('style');
scrollbarStyle.innerHTML = `
    ::-webkit-scrollbar {
        width: 8px;
    }
    ::-webkit-scrollbar-track {
        background: #09090b;
    }
    ::-webkit-scrollbar-thumb {
        background: #8b5cf6;
        border-radius: 4px;
    }
    ::-webkit-scrollbar-thumb:hover {
        background: #7c3aed;
    }
`;
document.head.appendChild(scrollbarStyle);

document.addEventListener('DOMContentLoaded', () => {
    renderWebsite();
});