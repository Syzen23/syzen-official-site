export const whatsappNumber = "6282279773535";
export const whatsappText = encodeURIComponent(
  "Halo Syzen Web, saya ingin konsultasi gratis untuk kebutuhan website bisnis.",
);
export const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappText}`;

export interface NavItem {
  label: string;
  href: string;
}

export const navItems: NavItem[] = [
  { label: "About", href: "#about" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Pricing", href: "#pricing" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export const valueHighlights: string[] = [
  "Performa Website Cepat",
  "Desain Premium",
  "Harga Transparan",
  "Selesai Tepat Waktu",
];

export interface ServicePoint {
  highlight: string;
  text: string;
}

export interface ServiceItem {
  title: string;
  description: string;
  points: ServicePoint[];
}

export const services: ServiceItem[] = [
  {
    title: "Landing Page Bisnis",
    description:
      "Website satu halaman (Single-Page) dengan arsitektur konversi tinggi, dirancang khusus untuk memikat calon pelanggan dan mempercepat keputusan pembelian.",
    points: [
      {
        highlight: "Fokus Konversi Tinggi",
        text: "Menarik perhatian pengunjung sejak detik pertama dan mengarahkannya untuk segera membeli atau menghubungi Anda.",
      },
      {
        highlight: "Kecepatan Akses Tinggi",
        text: "Struktur kode bersih bebas bloat yang membuat halaman terbuka instan baik di smartphone maupun desktop.",
      },
      {
        highlight: "WhatsApp Direct CTA",
        text: "Tombol Call to Action yang terintegrasi secara cerdas untuk menghubungkan leads berkualitas langsung ke chat Anda.",
      },
    ],
  },
  {
    title: "Company Profile",
    description:
      "Website profesional multi-halaman untuk memperkuat kehadiran online, memamerkan portofolio terbaik, serta membangun kredibilitas bisnis Anda di mata klien.",
    points: [
      {
        highlight: "Kredibilitas Brand Kuat",
        text: "Presentasi visual premium yang menonjolkan profesionalisme bisnis, sejarah, visi-misi, dan keunikan jasa Anda.",
      },
      {
        highlight: "Showcase Portofolio & Layanan",
        text: "Tampilan galeri hasil kerja dan detail layanan dengan layout modern yang mempermudah klien dalam memilih.",
      },
      {
        highlight: "Struktur Ramah Google",
        text: "Pondasi coding ramah SEO agar bisnis Anda lebih mudah ditemukan oleh calon pelanggan potensial di hasil pencarian.",
      },
    ],
  },
  {
    title: "Custom Website",
    description:
      "Solusi website interaktif dengan sistem khusus seperti booking online, katalog dinamis, portal komunitas, hingga dashboard kustom untuk alur operasional Anda.",
    points: [
      {
        highlight: "Fitur & Sistem Kustom",
        text: "Pengembangan fitur unik dari nol yang sepenuhnya disesuaikan dengan alur kerja nyata operasional bisnis Anda.",
      },
      {
        highlight: "Dashboard Admin Ringan",
        text: "Panel kontrol intuitif dan berkinerja tinggi untuk memudahkan Anda mengelola data bisnis secara real-time.",
      },
      {
        highlight: "Arsitektur Siap Berkembang",
        text: "Struktur kode modular modern yang siap diskalakan dan ditambah modul baru seiring pertumbuhan pesat bisnis.",
      },
    ],
  },
];

export interface PortfolioProject {
  title: string;
  category: string;
  description: string;
  accent: string;
  image: string;
  url: string;
  filterGroup: "landing" | "company" | "custom";
}

export const portfolioProjects: PortfolioProject[] = [
  {
    title: "Website CMS",
    category: "Company Profile & Admin Dashboard",
    description:
      "Website CMS modern dengan tampilan profesional yang dirancang untuk memudahkan pengelolaan konten, data, dan informasi melalui dashboard admin yang responsif, efisien, dan user-friendly.",
    accent: "#7c3aed",
    image: "/assets/projects/project_7.png",
    url: "syzen.web/esport",
    filterGroup: "company",
  },
  {
    title: "Web Playground (Google)",
    category: "Sistem Khusus / Web App",
    description:
      "Website eksperimen interaktif yang dibuat saat mengikuti event JUARAVIBECODING, menghadirkan eksplorasi UI modern, animasi halus, serta pengalaman visual kreatif yang responsif di berbagai perangkat.",
    accent: "#7c3aed",
    image: "/assets/projects/project_8.png",
    url: "syzen.web/esport",
    filterGroup: "custom",
  },
  {
    title: "Sistem Absensi Organisasi",
    category: "Sistem Khusus / Web App",
    description:
      "Sistem manajemen kehadiran modern yang dirancang untuk melacak dan mengelola kehadiran anggota organisasi secara real-time dengan mudah.",
    accent: "#2563eb",
    image: "/assets/projects/project_1.png",
    url: "syzen.web/absensi-organisasi",
    filterGroup: "custom",
  },
  {
    title: "Remake Aplikasi Mengelola Keuangan",
    category: "Sistem Khusus / Web App",
    description:
      "Remake aplikasi pencatat keuangan pribadi yang cerdas, ditingkatkan dengan Supabase untuk manajemen data yang andal dan antarmuka pengguna yang sangat responsif.",
    accent: "#0f766e",
    image: "/assets/projects/project_2.png",
    url: "syzen.web/company-profile",
    filterGroup: "custom",
  },
  {
    title: "Sistem Input Matakuliah",
    category: "Sistem Khusus / Web App",
    description:
      "Sistem efisien untuk membantu mahasiswa dalam merencanakan dan mengelola mata kuliah yang akan diambil, lengkap dengan simulasi beban studi dan prasyarat.",
    accent: "#f59e0b",
    image: "/assets/projects/project_3.png",
    url: "syzen.web/event-page",
    filterGroup: "custom",
  },
  {
    title: "Web Hotel Profesional",
    category: "Company Profile",
    description:
    "Website hotel modern dengan tampilan elegan yang dirancang untuk meningkatkan kepercayaan pelanggan, menampilkan informasi kamar, fasilitas, serta sistem reservasi yang mudah digunakan.",
    accent: "#db2777",
    image: "/assets/projects/project_4.png",
    url: "syzen.web/creative-brand",
    filterGroup: "company",
  },
  {
    title: "Web E-Commerce",
    category: "Landing Page",
    description:
      "Platform toko online dengan desain modern yang menampilkan produk secara menarik, dilengkapi fitur katalog, detail produk, dan pengalaman belanja yang responsif.",
    accent: "#22c55e",
    image: "/assets/projects/project_5.png",
    url: "syzen.web/dashboard-absensi",
    filterGroup: "landing",
  },
  {
    title: "Web Taman Satwa",
    category: "Landing Page",
    description:
      "Website Taman Satwa profesional dengan desain modern yang menampilkan produk secara menarik, dilengkapi fitur katalog, detail produk, dan pengalaman belanja yang responsif.",
    accent: "#7c3aed",
    image: "/assets/projects/project_6.png",
    url: "syzen.web/esport",
    filterGroup: "landing",
  },
];


export interface PackageFeature {
  highlight: string;
  text: string;
}

export interface PackageItem {
  name: string;
  price: string;
  description: string;
  fit: string;
  features: (string | PackageFeature)[];
  featured: boolean;
}

export interface PackageCategory {
  id: string;
  name: string;
  packages: PackageItem[];
}

export const packageCategories: PackageCategory[] = [
{
    id: "landing",
    name: "Landing Page",
    packages: [
      {
        name: "BASIC LANDING PAGE",
        price: "Rp 850.000",
        description: "",
        fit: "Cocok untuk UMKM, jasa personal, dan promosi produk sederhana.",
        features: [
          "Hingga 5 Section Konten",
          "Desain Responsif (Mobile & Desktop)",
          "Tombol WhatsApp Direct Chat",
          "Optimasi Kecepatan Website",
          "SEO Dasar (Meta Title & Description)",
          "SSL Security",
          "2x Revisi Minor",
          "Panduan Penggunaan Website",
          "Domain Gratis 1 Tahun"
        ],
        featured: false,
      },
      {
        name: "PREMIUM LANDING PAGE",
        price: "Rp 1.750.000",
        description: "",
        fit: "Cocok untuk bisnis menengah yang ingin tampil kredibel dan terpercaya.",
        features: [
          "Beranda, Tentang Kami, Layanan,  Galeri, Kontak, Halaman Tambahan",
          "Formulir Kontak",
          "Integrasi Google Maps",
          "Animasi & Interaksi Modern",
          "SEO Setup Lengkap & Google Search Console",
          "SSL Security",
          "3x Revisi Minor & Dokumentasi Penggunaan",
          "Panduan Penggunaan Website",
          "Domain Gratis 1 Tahun"
        ],
        featured: true,
      },
      {
        name: "EXPERT LANDING PAGE",
        price: "Rp 3.500.000",
        description: "",
        fit: "Cocok untuk bisnis skala besar atau yang mengutamakan branding premium.",
        features: [
          "Desain UI/UX Premium & Custom",
          "Halaman Sesuai Kebutuhan (Multi-Page)",
          "Animasi Interaktif Premium (GSAP)",
          "Form Lead Generation",
          "Integrasi Social Media",
          "Optimasi Core Web Vitals & Advanced SEO",
          "Integrasi Google Analytics",
          "Prioritas Support & 5x Revisi Minor",
          "Panduan Penggunaan Website",
          "Domain Gratis 1 Tahun & Maintenance 1 Bulan"
        ],
        featured: false,
      }
    ],
  },
  {
    id: "pos",
    name: "Sistem POS",
    packages: [
      {
        name: "BASIC POS",
        price: "Rp 1.500.000",
        description: "",
        fit: "Cocok untuk usaha kecil yang baru mulai digitalisasi.",
        features: [
          "Dashboard Admin",
          "Kelola Produk & Kategori",
          "Sistem Stok Barang",
          "Transaksi Penjualan & Riwayat",
          "Perhitungan Kembalian Otomatis",
          "Laporan Penjualan Sederhana",
          "Responsive (Desktop & Mobile)",
          "Setup & Deployment",
          "Dokumentasi & 2x Revisi Minor"
        ],
        featured: false,
      },
      {
        name: "BUSINESS POS",
        price: "Rp 3.500.000",
        description: "",
        fit: "Cocok untuk toko yang memiliki banyak produk dan membutuhkan laporan lebih lengkap.",
        features: [
          "Semua Fitur Paket Basic",
          "Manajemen Pelanggan & Supplier",
          "Multi Satuan Produk",
          "Barcode Scanner Support & Cetak Struk",
          "Laporan Penjualan & Stok Lengkap",
          "Filter & Export Data",
          "Hak Akses Admin dan Kasir",
          "Dashboard Statistik Penjualan",
          "Dukungan Teknis Awal & 3x Revisi Minor"
        ],
        featured: true,
      },
      {
        name: "PREMIUM POS",
        price: "Rp 6.000.000",
        description: "",
        fit: "Cocok untuk bisnis yang ingin sistem lebih profesional dan scalable.",
        features: [
          "Semua Fitur Paket Business",
          "Multi Cabang & Multi Gudang",
          "Sistem Bonus / Loyalty Pelanggan",
          "Notifikasi Stok Menipis",
          "Import/Export Data Excel & PDF",
          "Dashboard Analitik Lengkap",
          "Backup Database Otomatis",
          "Prioritas Support, Maintenance 1 Bulan & 5x Revisi"
        ],
        featured: false,
      },
    ],
  },
  {
    id: "custom",
    name: "Sistem Custom",
    packages: [
      {
        name: "CUSTOM DEVELOPMENT",
        price: "Request Quote",
        description: "Solusi website dan sistem web app kompleks yang dibuat dari nol sesuai dengan alur kerja kebutuhan bisnis Anda.",
        fit: "Cocok untuk proyek unik, sistem internal, atau aplikasi web terintegrasi khusus.",
        features: [
          {
            highlight: "Fitur Sistem Eksklusif",
            text: "Pembuatan logika aplikasi kustom seperti sistem absensi, reservasi, multi-gudang, hingga bonus afiliasi."
          },
          {
            highlight: "Panel Admin Kustom",
            text: "Panel kontrol administrator dengan UI/UX yang modern namun mudah dipahami untuk operasional staf non-teknis."
          },
          {
            highlight: "Integrasi API 3rd Party",
            text: "Penghubungan dengan layanan pihak ketiga seperti Payment Gateway, WhatsApp API, atau layanan kurir logistik."
          },
          {
            highlight: "Harga Menyesuaikan",
            text: "Biaya investasi disesuaikan secara transparan berdasarkan kompleksitas fitur, tingkat kesulitan, dan waktu pengerjaan."
          }
        ],
        featured: false,
      },
    ],
  },
];

export interface TrustSignal {
  title: string;
  description: string;
}

export const trustSignals: TrustSignal[] = [
  {
    title: "Brief lebih terarah",
    description:
      "Kebutuhan website diterjemahkan menjadi struktur halaman yang jelas dan mudah dibaca.",
  },
  {
    title: "Visual terasa modern",
    description:
      "Desain dibuat bersih, premium, dan tidak terasa seperti template generik.",
  },
  {
    title: "CTA tidak membingungkan",
    description:
      "Visitor diarahkan ke langkah berikutnya dengan tombol dan pesan yang natural.",
  },
];

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Discovery (Riset & Analisis)",
    description:
      "Sesi diskusi mendalam untuk memetakan visi bisnis, target audiens, dan menyusun strategi agar tujuan website tepat sasaran.",
  },
  {
    number: "02",
    title: "Direction (Konsep & Strategi)",
    description:
      "Merancang arsitektur informasi, menyusun copywriting persuasif yang menjual, serta merumuskan visual style (moodboard) & alur CTA.",
  },
  {
    number: "03",
    title: "Build (Desain & Kode)",
    description:
      "Menulis kode bersih berkecepatan tinggi menggunakan Astro & Tailwind CSS v4, mengimplementasikan animasi mikro, serta optimasi responsif.",
  },
  {
    number: "04",
    title: "Launch (Optimasi & Handover)",
    description:
      "Pengujian performa, setup domain & SEO ramah Google, hingga sesi serah terima agar Anda bisa mengelola website secara mandiri.",
  },
];

export interface TestimonialItem {
  name: string;
  role: string;
  company: string;
  feedback: string;
  rating: number;
  initials: string;
  projectType: string;
}

export const testimonials: TestimonialItem[] = [
  {
    name: "Rian Hidayat",
    role: "Owner",
    company: "Kopi Senja",
    feedback:
      "Landing page buatan Syzen sangat cepat dan responsif! Penjualan kopi kemasan kami naik hampir 50% setelah website diluncurkan.",
    rating: 5,
    initials: "RH",
    projectType: "Landing Page",
  },
  {
    name: "Siti Rahma",
    role: "Founder",
    company: "Butik Aisyah",
    feedback:
      "Komunikasi sangat lancar dan visual web-nya benar-benar mewah. Sangat puas dengan hasil company profile butik kami.",
    rating: 5,
    initials: "SR",
    projectType: "Company Profile",
  },
  {
    name: "Budi Santoso",
    role: "CEO",
    company: "TechInovasi",
    feedback:
      "Sistem kustom dashboard absensi terintegrasi dengan sempurna. Kerja cepat, kode bersih, dan dokumentasi lengkap.",
    rating: 5,
    initials: "BS",
    projectType: "Custom Website",
  },
  {
    name: "Anita Wijaya",
    role: "Marketing Manager",
    company: "MedikaPlus Klinik",
    feedback:
      "Website profil klinik kami jadi jauh lebih kredibel. Desain modern dan alur pendaftaran pasien jadi sangat mudah.",
    rating: 5,
    initials: "AW",
    projectType: "Company Profile",
  },
];
