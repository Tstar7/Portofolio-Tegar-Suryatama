/* ==========================================================
   PORTFOLIO DATA - TEGAR SURYATAMA
   Data dictionary for Projects & System Specifications
   Real Screenshots & Application Details Synchronized
   ========================================================== */

// Complete Project Details Dictionary (All 11 Active Projects)
const projectDetails = {
  'dapur-kwp': {
    title: 'System Operational Management Dapur KWP',
    category: 'Web Application • Manajemen Operasional & Katering Kilang',
    role: 'AI-Assisted Software Engineer & Koordinator Administrasi Operasional Dapur',
    goal: 'Mendigitalisasi tata kelola operasional katering Koperasi Wanita Petra RU III Plaju dalam penyediaan ribuan porsi makanan karyawan kilang Pertamina, monitoring ketersediaan bahan baku dapur harian, kartu kendali stok gudang, dan rekapitulasi distribusi porsi makanan secara tepat waktu dan akurat.',
    img: 'images/System Operational Management Dapur KWP.png',
    imgCaption: 'Tangkapan Layar: System Operational Management Dapur KWP',
    features: [
      'Dashboard Ringkasan Operasional & Monitoring Status Buffer Stock Gudang',
      'Kartu Kendali Stok Digital Otomatis per Barang (Saldo Awal, Masuk, Keluar, Saldo Akhir)',
      'Pencatatan Transaksi Barang Masuk Supplier & Pengeluaran Bahan Baku ke Dapur',
      'Monitoring Checklist Higiene Kebersihan Dapur, Sanitasi & Kontrol K3',
      'Pencatatan Suhu Penyimpanan Dingin (Chiller / Freezer) & Suhu Ruangan Masak',
      'Modul Pengajuan Lembur Kru Masak & Persetujuan Cuti Staf Operasional',
      'Pencatatan Operasional Kendaraan Distribusi Konsumsi Kilang',
      'Laporan Rekapitulasi Mutasi Stok & Distribusi Format Standar Siap Cetak'
    ],
    tech: 'PHP Native, MySQL (db_kartu_stok_digital), Tailwind CSS, JavaScript, Responsive UI, AI-Assisted Development',
    driveLink: 'https://drive.google.com/file/d/1g9KgEF-WXP1a4RKgUx3bv9Mx5RAMcCRS/view?usp=sharing'
  },
  'checklist-it': {
    title: 'Aplikasi Checklist Perangkat IT Berbasis Web',
    category: 'IT Support & Asset Management • PT Kereta Api Indonesia (Persero)',
    role: 'AI-Assisted Software Developer & IT Support Administrator',
    goal: 'Mempermudah audit dan pemantauan berkala kondisi infrastruktur hardware, jaringan, dan software komputer kantor di PT Kereta Api Indonesia (Persero) Divre III Palembang guna menekan risiko downtime operasional dan mendokumentasikan riwayat preventive maintenance secara terstruktur.',
    img: 'images/Aplikasi Checklist Perangkat IT Berbasis Web.png',
    imgCaption: 'Tangkapan Layar: Aplikasi Checklist Perangkat IT Berbasis Web',
    features: [
      'Dashboard Status Kesehatan Perangkat IT (Workstation, PC, Server, Printer, Jaringan)',
      'Pendataan Inventaris Aset IT Lengkap dengan Nomor Seri, Tag Aset, & Lokasi Ruangan',
      'Formulir Digital Checklist Pemeriksaan Fisik, Kondisi OS, Disk Space, & Antivirus',
      'Sistem Registrasi & Konfirmasi Pengguna Baru (Pending User Approval Flow)',
      'Riwayat Pemeliharaan Preventif (Preventive Maintenance History) per Unit Aset',
      'Pusat Notifikasi & Alert Status Perangkat yang Membutuhkan Penanganan Cepat',
      'Cetak Laporan Checklist & Riwayat Maintenance Format PDF Standar KAI',
      'Penyaringan Riwayat Pemeriksaan Berdasarkan Unit Kerja, Ruangan, atau Tanggal Audit'
    ],
    tech: 'PHP Native, MySQL (checklist_kai), Tailwind CSS, JavaScript, Dompdf, Composer, AI-Assisted Development',
    driveLink: 'https://drive.google.com/file/d/1J62c39A1Syz38ezwFKkduCW8rWxNQKOG/view?usp=sharing'
  },
  'beasiswa': {
    title: 'Aplikasi Penerimaan Beasiswa (Metode SMART)',
    category: 'Sistem Pendukung Keputusan (SPK) • Algoritma SMART',
    role: 'AI-Assisted Full Stack Developer & Algorithmic Designer',
    goal: 'Menyediakan platform seleksi pendaftaran beasiswa online berbasis Simple Multi-Attribute Rating Technique (SMART) untuk menyaring pendaftar secara adil berdasarkan multi-kriteria akademik dan sosio-ekonomi secara otomatis.',
    img: 'images/Aplikasi Penerimaan Beasiswa (Metode SMART).png',
    imgCaption: 'Tangkapan Layar: Aplikasi Penerimaan Beasiswa (Metode SMART)',
    features: [
      'Portal Publik Pendaftaran Mandiri Calon Penerima Beasiswa & Pengisian Berkas',
      'Modul Upload Berkas Persyaratan (Transkrip Nilai, KTP, SKTM, Sertifikat Prestasi)',
      'Multi-Role Access Control: Panel Admin, Pimpinan Pengesahan, dan Mahasiswa/User',
      'Konfigurasi Kriteria Penilaian, Parameter Bobot, dan Normalisasi Nilai Utility',
      'Kalkulasi Otomatis Algoritma SMART Menghasilkan Nilai Akhir & Leaderboard Ranking',
      'Panel Verifikasi Validitas Dokumen Persyaratan oleh Panitia Seleksi',
      'Dashboard Ringkasan Statistik Penerima & Riwayat Pengajuan per Periode',
      'Cetak Bukti Kelulusan & Laporan Rekapitulasi Hasil Seleksi Format PDF'
    ],
    tech: 'PHP Native, MySQL (beasiswa_smart), Tailwind CSS, JavaScript, Responsive Web, Algorithm Modeling, AI-Assisted Dev',
    driveLink: 'https://drive.google.com/file/d/1GxCH4r9Z1vabYZu68lDnuOG9iudjogZf/view?usp=sharing'
  },
  'pkh': {
    title: 'Aplikasi Pengelola Bantuan PKH (Metode SAW)',
    category: 'Sistem Pendukung Keputusan (SPK) • Algoritma SAW',
    role: 'AI-Assisted System Analyst & Web Developer (Algoritma SAW)',
    goal: 'Membangun sistem seleksi dan penetapan keluarga penerima Program Keluarga Harapan (PKH) menggunakan algoritma Simple Additive Weighting (SAW) di Kantor Camat Sungai Keruh agar penentuan kelayakan bantuan sosial berlangsung objektif, adil, transparan, dan berbasis data terukur.',
    img: 'images/Aplikasi Pengelola Bantuan PKH (Metode SAW).png',
    imgCaption: 'Tangkapan Layar: Aplikasi Pengelola Bantuan PKH (Metode SAW)',
    features: [
      'Dashboard Statistik Pengajuan Bantuan, Kuota Penerima, & Persebaran Data Desa',
      'Pengelolaan Biodata Calon Keluarga Penerima Manfaat (KPM) & Dokumen Pendukung',
      'Pengaturan Bobot Kriteria Dinamis (Penghasilan, Tanggungan, Kondisi Rumah, Listrik)',
      'Matriks Keputusan & Normalisasi Matriks Otomatis Berdasarkan Tipe Kriteria Benefit/Cost',
      'Perhitungan Nilai Preferensi (V) SAW & Perangkingan Kelayakan Instan',
      'Multi-Role Authorization: Administrator Sistem, Petugas Lapangan, dan Pimpinan Camat',
      'Riwayat Penetapan Penyaluran Bantuan Sosial per Periode Anggaran',
      'Cetak Berita Acara Seleksi & SK Penetapan Penerima Bantuan Format Resmi PDF (mPDF)'
    ],
    tech: 'PHP Native, MySQL (data_pkh), Tailwind CSS, JavaScript, mPDF Library, Composer, AI-Assisted Dev',
    driveLink: 'https://drive.google.com/file/d/1LnAzHiqZo4SOE07dfXj6QPGHTqqjk_lv/view?usp=sharing'
  },
  'spb': {
    title: 'Aplikasi Verifikasi Surat Pembayaran Barang (SPB)',
    category: 'Sistem Administrasi Logistik & Verifikasi Faktur Rekanan',
    role: 'AI-Assisted Web Developer & Perancang Alur Verifikasi Logistik',
    goal: 'Mempercepat alur verifikasi keabsahan dokumen pengeluaran dan pemesanan logistik kantor pada PT PLN (Persero) UID S2JB, memastikan kesesuaian antara pesanan barang dan faktur supplier rekanan, serta mencegah duplikasi berkas melalui sistem pencatatan digital.',
    img: 'images/Aplikasi Verifikasi Surat Pembayaran Barang (SPB).png',
    imgCaption: 'Tangkapan Layar: Aplikasi Verifikasi Surat Pembayaran Barang (SPB)',
    features: [
      'Manajemen Berkas Dokumen Surat Pembayaran Barang (SPB) Vendor Terpusat',
      'Formulir Input Pemesanan Barang, Surat Jalan, dan Rincian Faktur Supplier Rekanan',
      'Alur Approval Berjenjang (Staff Logistik -> Petugas Verifikasi -> Pimpinan PLN)',
      'Pelacakan Real-Time Status Dokumen (Menunggu Verifikasi, Disetujui, Ditolak)',
      'Validasi Kelengkapan Lampiran Dokumen (Nota Asli, Kwitansi, BAP Serah Terima)',
      'Modul Master Data Rekanan Vendor, Data Barang, dan Anggota Tim Kerja',
      'Pencatatan Audit Trail Tanggal, Waktu, & Identitas Petugas Approval',
      'Cetak Dokumen SPB Format Standar Perusahaan Siap Tanda Tangan Resmi'
    ],
    tech: 'PHP Native, MySQL (dbverif), Bootstrap 5, AdminLTE, JavaScript, FPDF/mPDF, AI-Assisted Dev',
    driveLink: 'https://drive.google.com/file/d/1i237pZo9Qu3Y_HsUMS8_TxQs8JkU17AV/view?usp=sharing'
  },
  'aksara-ulu': {
    title: 'Kamus & Transliterasi Aksara Ulu',
    category: 'PWA Multiplatform • Aksara Kuno Kaganga & Basis Data Offline',
    role: 'AI-Assisted Frontend & Offline Application Developer (Starmoon Labs)',
    goal: 'Mengembangkan aplikasi pelestarian warisan budaya daerah dan transliterasi otomatis teks alfabet Latin ke Aksara Ulu Kaganga (Sumatera Selatan), yang dapat dijalankan 100% offline tanpa koneksi internet di HP Android, PC Windows, dan Browser.',
    img: 'images/Kamus & Transliterasi Aksara Ulu.png',
    imgCaption: 'Tangkapan Layar: Kamus & Transliterasi Aksara Ulu',
    features: [
      'Transliterasi Instan Real-Time dari Teks Alfabet Latin ke Huruf Kuno Aksara Ulu',
      'Pustaka Pengenalan Huruf Induk (Surat Bebasa), Anak Surat (Vokalisasi), & Tanda Pemati',
      'Kamus Digital Bahasa Daerah Pasemah Lengkap dengan Arti & Contoh Pemakaian',
      'Penyimpanan Basis Data Lokal JSON NoSQL (100% Berjalan Offline Tanpa Kuota Data)',
      'Dukungan Multiplatform: Website PWA Responsif, Android APK, dan Desktop Windows (.exe)',
      'Fitur Salin Hasil Transliterasi ke Clipboard & Unduh Gambar Teks Aksara Ulu',
      'Panduan Interaktif Kaidah Membaca & Menulis Aksara Ulu Tradisional',
      'Performa Cepat dan Ringan dengan Cache Service Worker Modern'
    ],
    tech: 'JavaScript Native, JSON Local Database, HTML5, CSS3, Progressive Web App (PWA), AI-Assisted Dev',
    driveLink: 'https://drive.google.com/file/d/1rpwVzB7l5nbMFC2-OmmNiSaifL9s313R/view?usp=sharing'
  },
  'camat': {
    title: 'Layanan Administrasi Kantor Camat',
    category: 'E-Government • Sistem Layanan Surat Kependudukan Online (SILADU)',
    role: 'AI-Assisted Web Developer & Perancang Antarmuka Pelayanan Masyarakat',
    goal: 'Membangun portal layanan permohonan surat administrasi online (SILADU) bagi warga Kecamatan Banyuasin I untuk memangkas waktu antre di kantor kecamatan, mempermudah upload berkas persyaratan, dan menyediakan tracking status surat yang transparan.',
    img: 'images/Layanan Administrasi Kantor Camat.png',
    imgCaption: 'Tangkapan Layar: Layanan Administrasi Kantor Camat',
    features: [
      'Portal Publik Pengajuan Surat Administrasi Warga (Keterangan Usaha, Domisili, Nikah, dll)',
      'Modul Unggah Dokumen Persyaratan Digital (Foto KTP, Kartu Keluarga, Pengantar RT)',
      'Sistem Pelacakan Real-Time Progres Berkas Menggunakan Nomor Tiket Registrasi',
      'Verifikasi Dokumen Keabsahan Menggunakan QR Code Keamanan Digital',
      'Multi-Role Workflow: Warga Pemohon, Operator Pelayanan, Kasi, dan Camat',
      'Otomatisasi Draft Naskah Dinas Surat Resmi dengan Nomor Baku Kecamatan',
      'Pemberitahuan Waktu Pengambilan Dokumen Asli di Loket Kantor Camat',
      'Rekapitulasi Laporan Bulanan Jumlah Pengajuan per Desa / Kelurahan'
    ],
    tech: 'PHP Native, MySQL (siladu_camat), Tailwind CSS, JavaScript, Responsive Web, AI-Assisted Dev',
    driveLink: 'https://drive.google.com/file/d/1g9KgEF-WXP1a4RKgUx3bv9Mx5RAMcCRS/view?usp=sharing'
  },
  'excel-analytics': {
    title: 'Pengelolaan Data & Dashboard Excel Lanjutan',
    category: 'Data Analytics • Spreadsheet Automation & Reporting',
    role: 'Data Specialist & Pengelola Administrasi Persediaan',
    goal: 'Membangun template spreadsheet otomatis untuk pengolahan data persediaan gudang, rekonsiliasi faktur pembelian, dan dashboard visual ringkas guna mempercepat pelaporan pimpinan dan menekan risiko selisih data pembukuan.',
    img: 'images/Excel.png',
    imgCaption: 'Visualisasi Spreadsheet & Dashboard Analisis Data Excel',
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
    img: 'images/administrasi-office.png',
    imgCaption: 'Arsip Dokumen Perkantoran & Administrasi Terintegrasi',
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
    img: 'images/desain canva.png',
    imgCaption: 'Portofolio Desain Visual, Media Publikasi & Branding Canva',
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
    category: 'Digital Freelance Studio • CV ATS, Web Development & AI Solutions',
    role: 'Founder & Lead Digital Specialist (Starmoon Labs)',
    goal: 'Mengelola studio layanan digital mandiri yang telah melayani puluhan klien mahasiswa, job seeker, dan profesional dalam pembuatan CV berstandar ATS internasional, pembuatan aplikasi berbasis web dibantu AI, dan perapian dokumen formal dengan jaminan kualitas tinggi.',
    img: 'images/Starmoonlabs.png',
    imgCaption: 'Starmoon Labs - Digital Freelance Studio & AI Solutions',
    features: [
      'Layanan Drafting & Redesain CV Berstandar ATS (Applicant Tracking System) Format Internasional',
      'Jasa Pembuatan Aplikasi Web Sistem Informasi Tugas Akhir & Bisnis dengan Dukungan AI',
      'Pembuatan Website Portofolio Interaktif, Modern, Cepat, dan Responsif Lintas Perangkat',
      'Layanan Penataan Tata Letak (Layouting) Skripsi, Karya Ilmiah, & Laporan Kerja Praktik',
      'Alur Komunikasi Langsung Klien via WhatsApp, Konsultasi Kebutuhan, & Garansi Revisi Cepat',
      'Track Record Terpercaya: Puluhan Klien Puas dengan Pengerjaan Tepat Waktu dan Berkualitas'
    ],
    tech: 'AI Prompting, CV ATS Drafting, Web Development, Document Formatting, Client Relationship',
    driveLink: 'https://drive.google.com/file/d/1fnmvvMGzC9ct-QCiynPV_PcHJL65pyfk/view?usp=sharing'
  }
};
