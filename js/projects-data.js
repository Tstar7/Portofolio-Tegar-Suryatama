/* ==========================================================
   PORTFOLIO DATA - TEGAR SURYATAMA
   Data dictionary for Projects & System Specifications
   ========================================================== */

// Complete Project Details Dictionary (All 12 Projects)
const projectDetails = {
  'kartu-stok': {
    title: 'Aplikasi Kartu Stok Digital Gudang (Web-Based)',
    category: 'Web Application • Inovasi Pergudangan & Inventori',
    role: 'Perancang Sistem, Database Administrator & Full Stack Developer',
    goal: 'Menggantikan pembukuan kartu stok fisik manual di gudang Koperasi Wanita Petra RU III Plaju menjadi sistem kartu kendali digital terpusat guna mencegah selisih stok, mempermudah pelacakan mutasi barang masuk/keluar harian, dan memberikan notifikasi dini saat stok mendekati batas minimum (buffer stock).',
    features: [
      'Dashboard Ringkasan Total SKU Barang, Nilai Inventori & Status Buffer Stock Kritis',
      'Pencatatan Mutasi Barang Masuk Supplier (Nomor Faktur, Tanggal, Satuan, Qty)',
      'Pencatatan Mutasi Pengeluaran Barang ke Dapur & Divisi Lain Secara Real-Time',
      'Kartu Kendali Stok Digital Otomatis per Barang (Saldo Awal, Masuk, Keluar, Saldo Akhir)',
      'Sistem Peringatan Dini Batas Minimum Stok (Buffer Stock Alert System)',
      'Modul Audit & Rekonsiliasi Fisik untuk Mendukung Kelancaran Stock Opname Berkala',
      'Pencarian & Filter Riwayat Mutasi per Rentang Tanggal, Kategori, atau Nama Barang',
      'Ekspor dan Cetak Kartu Stok Digital Format Standar Gudang (Excel / PDF)'
    ],
    tech: 'PHP Native, MySQL, phpMyAdmin, Tailwind CSS, JavaScript, HTML5',
    driveLink: 'https://drive.google.com/file/d/17pc_ZIkJ_eR82ri72X0DBn9bK0oGVKjP/view?usp=sharing'
  },
  'dapur-kwp': {
    title: 'System Operational Management Dapur KWP',
    category: 'Web Application • Manajemen Operasional & Katering Kilang',
    role: 'Pengembang Sistem & Koordinator Administrasi Operasional Dapur',
    goal: 'Mendigitalisasi tata kelola operasional katering Koperasi Wanita Petra RU III Plaju dalam penyediaan ribuan porsi makanan karyawan kilang Pertamina, monitoring ketersediaan bahan baku dapur harian, dan rekapitulasi distribusi porsi makanan secara tepat waktu dan akurat.',
    features: [
      'Dashboard Penjadwalan Siklus Menu Makan Siang, Makan Malam & Lembur Karyawan Kilang',
      'Rekapitulasi Alokasi & Distribusi Porsi Makanan per Divisi / Unit Kerja Kilang Pertamina',
      'Monitoring Stok Bahan Baku Dapur Kering & Bahan Segar Basah secara Real-Time',
      'Kalkulasi Kebutuhan Bahan Masak Harian Berdasarkan Jumlah Porsi yang Dipesan',
      'Checklist Pengawasan Higiene Sanitasi, Kontrol Suhu Makanan & Standar K3 Dapur',
      'Pencatatan Log Kedatangan Bahan Baku dari Gudang & Penyesuaian Resep Menu',
      'Laporan Rekapitulasi Distribusi Porsi & Biaya Operasional per Periode / Bulan',
      'Pencetakan Surat Pengantar Distribusi Konsumsi ke Lapangan Kilang'
    ],
    tech: 'PHP Native, MySQL, Tailwind CSS, JavaScript, Responsive UI',
    driveLink: 'https://drive.google.com/file/d/1g9KgEF-WXP1a4RKgUx3bv9Mx5RAMcCRS/view?usp=sharing'
  },
  'pkh': {
    title: 'Aplikasi Pengelola Bantuan PKH (Metode SAW)',
    category: 'Sistem Pendukung Keputusan (SPK) • Algoritma SAW',
    role: 'System Analyst & Full Stack Web Developer (Algoritma SPK)',
    goal: 'Membangun sistem seleksi dan penetapan keluarga penerima Program Keluarga Harapan (PKH) menggunakan algoritma Simple Additive Weighting (SAW) agar penentuan kelayakan bantuan sosial berlangsung objektif, adil, transparan, dan berbasis data terukur.',
    features: [
      'Dashboard Statistik Pengajuan Bantuan, Kuota Penerima & Distribusi Skor',
      'Pengelolaan Biodata & Kondisi Ekonomi Calon Keluarga Penerima Manfaat',
      'Konfigurasi Matriks Kriteria Penilaian & Bobot Dinamis (Kriteria Benefit & Cost)',
      'Normalisasi Matriks Otomatis Menggunakan Rumus Algoritma SAW',
      'Perhitungan Nilai Preferensi (V) & Perangkingan Kelayakan Calon Penerima Instan',
      'Penyaringan Data Berdasarkan Nilai Ambang Batas Kelayakan (Threshold)',
      'Riwayat Penetapan Bantuan per Periode Penyaluran Dana PKH',
      'Cetak Berita Acara Seleksi & Surat Keputusan Penetapan Penerima Bantuan'
    ],
    tech: 'PHP Native, MySQL, Tailwind CSS, JavaScript, HTML5',
    driveLink: 'https://drive.google.com/file/d/1LnAzHiqZo4SOE07dfXj6QPGHTqqjk_lv/view?usp=sharing'
  },
  'beasiswa': {
    title: 'Aplikasi Penerimaan Beasiswa (Metode SMART)',
    category: 'Sistem Seleksi Online & Perangkingan Algoritma SMART',
    role: 'Full Stack Web Developer & Algorithmic Designer',
    goal: 'Menyediakan platform seleksi pendaftaran beasiswa online berbasis Simple Multi-Attribute Rating Technique (SMART) untuk menyaring pendaftar secara adil berdasarkan multi-kriteria akademik dan sosio-ekonomi secara otomatis.',
    features: [
      'Portal Registrasi Mandiri Calon Penerima Beasiswa & Pengisian Formulir',
      'Modul Upload Berkas Persyaratan (Transkrip Nilai, KTP, SKTM, Sertifikat Prestasi)',
      'Panel Verifikasi & Validasi Dokumen Persyaratan oleh Panitia Seleksi',
      'Konfigurasi Bobot Kriteria & Parameter Penilaian Sesuai Ketentuan Beasiswa',
      'Kalkulasi Otomatis Nilai Utility & Total Nilai Akhir Algoritma SMART',
      'Papan Peringkat (Leaderboard) Hasil Perangkingan Nilai Tertinggi secara Real-Time',
      'Fitur Pengumuman Kelulusan Online dengan Nomor Registrasi Peserta',
      'Cetak Surat Keterangan Lolos Seleksi & Ekspor Data Penerima ke Excel'
    ],
    tech: 'PHP Native, MySQL, Tailwind CSS, JavaScript, Responsive Web',
    driveLink: 'https://drive.google.com/file/d/1GxCH4r9Z1vabYZu68lDnuOG9iudjogZf/view?usp=sharing'
  },
  'checklist-it': {
    title: 'Aplikasi Checklist Perangkat IT Berbasis Web',
    category: 'IT Support Asset Management & Preventive Maintenance',
    role: 'IT Support Administrator & Web Application Developer',
    goal: 'Mempermudah audit dan pemantauan berkala kondisi infrastruktur hardware, jaringan, dan software komputer kantor guna menekan risiko downtime operasional dan mendokumentasikan riwayat preventive maintenance secara terstruktur.',
    features: [
      'Dashboard Status Kesehatan Perangkat IT Kantor (Workstation, Server, Printer, Jaringan)',
      'Pendataan Inventaris Aset IT Lengkap dengan Nomor Seri, Tag Aset, & Spesifikasi',
      'Formulir Digital Checklist Pemeriksaan Fisik, Kondisi OS, Kapasitas Disk, & Antivirus',
      'Sistem Tiket Log Insiden Kendala saat Ditemukan Kerusakan Hardware / Software',
      'Riwayat Pemeliharaan Preventif (Preventive Maintenance History) per Unit Perangkat',
      'Jadwal Pengingat Kalender Maintenance Rutin bagi Tim IT Support',
      'Penyaringan Riwayat Pemeriksaan per Divisi, Ruangan, atau Tanggal Audit',
      'Ekspor dan Cetak Laporan Rekapitulasi Audit Aset IT untuk Manajemen'
    ],
    tech: 'PHP Native, MySQL, Tailwind CSS, JavaScript, HTML5',
    driveLink: 'https://drive.google.com/file/d/1J62c39A1Syz38ezwFKkduCW8rWxNQKOG/view?usp=sharing'
  },
  'spb': {
    title: 'Aplikasi Verifikasi Surat Pembayaran Barang (SPB)',
    category: 'Administrasi Logistik & Sistem Verifikasi Dokumen',
    role: 'Web Developer & Perancang Alur Administrasi Logistik',
    goal: 'Mempercepat alur verifikasi keabsahan dokumen pengeluaran dan pemesanan logistik kantor, memastikan kesesuaian antara pesanan barang dan faktur supplier, serta mencegah duplikasi berkas melalui sistem pencatatan digital.',
    features: [
      'Manajemen Berkas Dokumen Surat Pembayaran Barang (SPB) Terpusat',
      'Form Input Pemesanan Barang, Nomor Surat Jalan & Rincian Faktur Supplier',
      'Alur Approval Berjenjang (Staff Logistik -> Petugas Verifikasi -> Pimpinan)',
      'Pelacakan Real-Time Status Dokumen (Menunggu Verifikasi, Disetujui, Ditolak, Selesai)',
      'Fitur Validasi Kelengkapan Lampiran Dokumen (Nota Asli, Kwitansi, BAP Barang)',
      'Pencatatan Log Tanggal, Waktu, & Identitas Petugas yang Melakukan Approval',
      'Filter Rekapitulasi SPB Berdasarkan Status, Rentang Tanggal, atau Nama Rekanan',
      'Cetak Dokumen SPB Format Standar Perusahaan Siap Tanda Tangan'
    ],
    tech: 'PHP Native, MySQL, Bootstrap 5, JavaScript, HTML5',
    driveLink: 'https://drive.google.com/file/d/1i237pZo9Qu3Y_HsUMS8_TxQs8JkU17AV/view?usp=sharing'
  },
  'aksara-ulu': {
    title: 'Kamus & Transliterasi Aksara Ulu (Web, APK, EXE Offline)',
    category: 'Multiplatform PWA • Basis Data Lokal NoSQL JSON',
    role: 'Frontend & Offline Application Developer (Starmoon Labs)',
    goal: 'Mengembangkan aplikasi pelestarian budaya daerah dan transliterasi otomatis teks alfabet Latin ke Aksara Ulu Kaganga (Sumatera Selatan), yang dapat dijalankan 100% offline tanpa koneksi internet di HP Android, PC Windows, dan Browser.',
    features: [
      'Transliterasi Instan Real-Time dari Teks Alfabet Latin ke Huruf Kuno Aksara Ulu',
      'Kamus Kosakata Bahasa Daerah Lengkap dengan Penjelasan Makna & Contoh Pemakaian',
      'Pustaka Pengenalan Huruf Induk (Surat Bebasa), Anak Surat (Vokalisasi), & Tanda Pemati',
      'Penyimpanan Basis Data Lokal JSON NoSQL (100% Berjalan Offline Tanpa Kuota Data)',
      'Dukungan Multiplatform: Website PWA Responsif, Android APK, dan Desktop Windows (.exe)',
      'Fitur Salin Hasil Transliterasi ke Clipboard & Unduh Gambar Teks Aksara Ulu',
      'Antarmuka Ringan, Cepat, dan Dilengkapi Panduan Belajar Membaca Aksara Ulu'
    ],
    tech: 'JavaScript Native, JSON Local NoSQL, HTML5, CSS3, Progressive Web App (PWA)',
    driveLink: 'https://drive.google.com/file/d/1rpwVzB7l5nbMFC2-OmmNiSaifL9s313R/view?usp=sharing'
  },
  'camat': {
    title: 'Layanan Administrasi Kantor Camat Banyuasin I',
    category: 'E-Government • Portal Pelayanan Administrasi Publik',
    role: 'Web Developer & Perancang Antarmuka Pelayanan Masyarakat',
    goal: 'Membangun portal layanan permohonan surat administrasi online bagi warga Kecamatan Banyuasin I untuk memangkas waktu antre di kantor kecamatan, mempermudah upload berkas persyaratan, dan menyediakan tracking status surat yang transparan.',
    features: [
      'Portal Publik Pengajuan Surat Administrasi Warga (Surat Usaha, Domisili, Keterangan Nikah, dll)',
      'Modul Unggah Dokumen Persyaratan Digital (Foto KTP, Kartu Keluarga, Surat Pengantar RT/Desa)',
      'Sistem Pelacakan Real-Time Status Dokumen Berdasarkan Nomor Tiket Permohonan Warga',
      'Dashboard Petugas Kecamatan untuk Memeriksa Kelengkapan Berkas & Verifikasi Data',
      'Otomatisasi Pembuatan Draft Surat Resmi dengan Format Penomoran Baku Kecamatan',
      'Notifikasi Pengambilan Berkas Asli di Kantor Camat setelah Surat Selesai Diproses',
      'Rekapitulasi Laporan Bulanan Jumlah Pengajuan Surat per Desa / Kelurahan'
    ],
    tech: 'PHP Native, MySQL, Tailwind CSS, JavaScript, Responsive Web',
    driveLink: 'https://drive.google.com/file/d/1g9KgEF-WXP1a4RKgUx3bv9Mx5RAMcCRS/view?usp=sharing'
  },
  'excel-analytics': {
    title: 'Pengelolaan Data & Dashboard Excel Lanjutan',
    category: 'Data Analytics • Spreadsheet Automation & Reporting',
    role: 'Data Specialist & Pengelola Administrasi Persediaan',
    goal: 'Membangun template spreadsheet otomatis untuk pengolahan data persediaan gudang, rekonsiliasi faktur pembelian, dan dashboard visual ringkas guna mempercepat pelaporan pimpinan dan menekan risiko selisih data pembukuan.',
    features: [
      'Komputasi Formula Lanjutan: XLOOKUP, VLOOKUP, INDEX MATCH, SUMIFS, COUNTIFS, Nested IF',
      'Pembuatan Pivot Table Multi-Dimensi & Dynamic Slicer untuk Analisis Data Fleksibel',
      'Dashboard Eksekutif Monitoring Kinerja Inventori, Mutasi Barang & Nilai Persediaan',
      'Penerapan Data Validation & Conditional Formatting untuk Mencegah Salah Input Data',
      'Rekonsiliasi Otomatis antara Data Fisik Stock Opname dan Data Pembukuan Software Akuntansi',
      'Visualisasi Grafik Tren Pengeluaran Barang per Bulan & Estimasi Kebutuhan Stok',
      'Template Laporan Ringkasan Keuangan & Pengeluaran Bahan Siap Cetak untuk Pimpinan'
    ],
    tech: 'Microsoft Excel, Pivot Table, XLOOKUP/VLOOKUP, Conditional Formatting, Data Visualization',
    driveLink: 'https://drive.google.com/file/d/17pc_ZIkJ_eR82ri72X0DBn9bK0oGVKjP/view?usp=sharing'
  },
  'administrasi-office': {
    title: 'Administrasi Perkantoran & Pengarsipan Digital',
    category: 'Office Administration • Cloud Archiving & Documentation',
    role: 'Staf Administrasi & Tata Kelola Dokumen Perusahaan',
    goal: 'Menstandarkan sistem administrasi surat dinas, pembuatan laporan berkala, dan pengarsipan digital terstruktur berbasis Google Drive dan Microsoft Office untuk memastikan keamanan dokumen dan kemudahan pencarian kembali berkas.',
    features: [
      'Penyusunan Korespondensi Resmi: Surat Masuk, Surat Keluar, SPB, Notulensi, dan Memo Internal',
      'Standarisasi Tata Kelola Dokumen Format Standar Perkantoran & Format Naskah Dinas',
      'Pengarsipan Cloud Storage Terstruktur di Google Drive dengan Folder Terklasifikasi Rapi',
      'Penerapan Sistem Penamaan File Standar (Standardized Naming Convention) untuk Pelacakan Berkas',
      'Kolaborasi Berkas Operasional Real-Time Antar Staf menggunakan Google Docs, Sheets, & Forms',
      'Penyusunan SOP Pengelolaan & Backup Berkas Fisik dan Digital Bebas Resiko Kehilangan Dokumen',
      'Pembuatan Formulir Online Survei & Input Kebutuhan Operasional Karyawan'
    ],
    tech: 'Microsoft Word, Microsoft Excel, Google Docs, Sheets, Forms, Google Drive Cloud Storage',
    driveLink: 'https://drive.google.com/file/d/1g9KgEF-WXP1a4RKgUx3bv9Mx5RAMcCRS/view?usp=sharing'
  },
  'desain-canva': {
    title: 'Desain Visual & Media Kreatif Canva',
    category: 'Graphic Design • Creative Branding & Media Publikasi',
    role: 'Graphic Designer & Content Creator (Starmoon Labs & Internal)',
    goal: 'Merancang konten komunikasi visual yang informatif, infografis data operasional terstruktur, slide presentasi korporat, dan media promosi usaha yang memiliki estetika tinggi serta mudah dipahami oleh pimpinan maupun audiens.',
    features: [
      'Perancangan Infografis Visual Alur Kerja Operasional Gudang & Tata Kelola Dapur Katering',
      'Desain Slide Presentasi Bisnis Profesional untuk Laporan Pertanggungjawaban dan Meeting',
      'Pembuatan Banner Promosi Produk Katering Koperasi Wanita Petra RU III Plaju',
      'Penyusunan Panduan Identitas Visual Ringkas (Palet Warna, Tipografi & Hierarki Tata Letak)',
      'Desain Materi Publikasi: Brosur Cetak, Flyer Pengumuman, dan Desain Feed/Story Media Sosial',
      'Optimasi Format Ekspor Berkualitas Tinggi untuk Kebutuhan Cetak (PDF Print) maupun Digital'
    ],
    tech: 'Canva Pro, Visual Hierarchy, Typography, Infographic Layouts, Brand Identity',
    driveLink: 'https://drive.google.com/file/d/1FzgdjJUZd58i0cOPd2axIAcBJ4mAsjjV/view?usp=sharing'
  },
  'starmoon-labs': {
    title: 'Portofolio Layanan Digital Starmoon Labs',
    category: 'Digital Freelance Studio • CV ATS, Web Development & Document Processing',
    role: 'Founder & Lead Digital Specialist (Starmoon Labs)',
    goal: 'Mengelola studio layanan digital mandiri yang telah melayani puluhan klien mahasiswa, job seeker, dan profesional dalam pembuatan CV berstandar ATS internasional, pembuatan aplikasi berbasis web, dan perapian dokumen formal dengan jaminan kualitas tinggi.',
    features: [
      'Layanan Drafting & Redesain CV Berstandar ATS (Applicant Tracking System) Format Internasional',
      'Jasa Pembuatan Aplikasi Web Sistem Informasi untuk Tugas Akhir Mahasiswa & UMKM',
      'Pembuatan Website Portofolio Pribadi yang Interaktif, Modern, & Berkecepatan Tinggi',
      'Layanan Penataan Tata Letak (Layouting) Skripsi, Karya Ilmiah, & Laporan Kerja Praktik',
      'Alur Komunikasi Langsung Klien via WhatsApp, Konsultasi Kebutuhan, & Garansi Revisi Cepat',
      'Track Record Terpercaya: Puluhan Klien Puas dengan Pengerjaan Tepat Waktu dan Berkualitas'
    ],
    tech: 'CV ATS Drafting, Web Development, Document Formatting, Client Relationship Management',
    driveLink: 'https://drive.google.com/file/d/1fnmvvMGzC9ct-QCiynPV_PcHJL65pyfk/view?usp=sharing'
  }
};
