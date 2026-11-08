/* ==========================================================
   PORTFOLIO MAIN ENGINE - TEGAR SURYATAMA
   Interactive animations, UI controls, modals, and filtering
   ========================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Initialize AOS (Animate on Scroll)
  if (typeof AOS !== 'undefined') {
    AOS.init({
      duration: 650,
      once: true,
      easing: 'ease-out-cubic'
    });
  }

  // 2. Initialize Hero Subtitle Typewriter
  initTypewriter();

  // 3. Initialize Stats Number Counter
  initStatCounters();

  // 4. Initialize Skill Progress Bars
  initSkillBars();

  // 5. Initialize Mobile Menu Toggle
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', toggleMobileMenu);
  }
});

/* ==================== 1. SCROLL CONTROLS ==================== */
window.addEventListener('scroll', () => {
  const winScroll = document.documentElement.scrollTop || document.body.scrollTop;
  const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const scrolled = height > 0 ? (winScroll / height) * 100 : 0;

  // Update top progress bar
  const progressBar = document.getElementById('scrollProgressBar');
  if (progressBar) {
    progressBar.style.width = scrolled + '%';
  }

  // Toggle Back-to-Top button visibility
  const backBtn = document.getElementById('backToTopBtn');
  if (backBtn) {
    if (winScroll > 350) {
      backBtn.classList.add('visible');
    } else {
      backBtn.classList.remove('visible');
    }
  }
});

/* ==================== 2. TYPEWRITER EFFECT ==================== */
function initTypewriter() {
  const typedElem = document.getElementById('typed-role');
  if (!typedElem || typeof typedRoles === 'undefined' || !typedRoles.length) return;

  let roleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function typeStep() {
    const currentRole = typedRoles[roleIndex];
    if (isDeleting) {
      typedElem.innerText = currentRole.substring(0, charIndex - 1);
      charIndex--;
    } else {
      typedElem.innerText = currentRole.substring(0, charIndex + 1);
      charIndex++;
    }

    let typeSpeed = isDeleting ? 35 : 75;

    if (!isDeleting && charIndex === currentRole.length) {
      typeSpeed = 1700; // Pause at full word
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      roleIndex = (roleIndex + 1) % typedRoles.length;
      typeSpeed = 350; // Pause before new word
    }

    setTimeout(typeStep, typeSpeed);
  }

  typeStep();
}

/* ==================== 3. ANIMATED NUMBER COUNTERS ==================== */
function initStatCounters() {
  const statsSection = document.getElementById('statsSection');
  if (!statsSection) return;

  let countersAnimated = false;
  const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !countersAnimated) {
        countersAnimated = true;
        const counters = document.querySelectorAll('.counter-num');
        counters.forEach(counter => {
          const target = +counter.getAttribute('data-target');
          const duration = 1200;
          const stepTime = 20;
          const steps = duration / stepTime;
          const increment = target / steps;
          let current = 0;

          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              counter.innerText = target;
              clearInterval(timer);
            } else {
              counter.innerText = Math.ceil(current);
            }
          }, stepTime);
        });
      }
    });
  }, { threshold: 0.3 });

  statsObserver.observe(statsSection);
}

/* ==================== 4. ANIMATED SKILL BARS ==================== */
function initSkillBars() {
  const skillsSection = document.getElementById('skillsSection');
  if (!skillsSection) return;

  let skillsAnimated = false;
  const skillsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !skillsAnimated) {
        skillsAnimated = true;
        const skillBars = document.querySelectorAll('.skill-bar-fill');
        skillBars.forEach(bar => {
          const progress = bar.getAttribute('data-progress');
          bar.style.width = progress;
        });
      }
    });
  }, { threshold: 0.2 });

  skillsObserver.observe(skillsSection);
}

/* ==================== 5. MOBILE MENU HANDLER ==================== */
function toggleMobileMenu() {
  const mobileMenu = document.getElementById('mobileMenu');
  if (mobileMenu) {
    mobileMenu.classList.toggle('hidden');
  }
}

// Auto-close mobile menu on resize to desktop view
window.addEventListener('resize', () => {
  if (window.innerWidth >= 768) {
    const mobileMenu = document.getElementById('mobileMenu');
    if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
      mobileMenu.classList.add('hidden');
    }
  }
});

/* ==================== 6. TOAST FEEDBACK ==================== */
function showToast(message) {
  const toast = document.getElementById('toast');
  const toastMsg = document.getElementById('toastMessage');
  if (!toast || !toastMsg) return;

  toastMsg.innerText = message;
  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
  }, 3000);
}

/* ==================== 7. COPY TO CLIPBOARD ==================== */
function copyToClipboard(text, successMsg) {
  navigator.clipboard.writeText(text).then(() => {
    showToast(successMsg || 'Teks berhasil disalin!');
  }).catch(() => {
    showToast('Gagal menyalin teks.');
  });
}

/* ==================== 8. HRD MODAL & CONFETTI ==================== */
function openHrdModal() {
  const modal = document.getElementById('hrdModal');
  if (modal) modal.classList.remove('hidden');
}

function closeHrdModal() {
  const modal = document.getElementById('hrdModal');
  if (modal) modal.classList.add('hidden');
}

function triggerConfetti() {
  if (typeof confetti !== 'undefined') {
    confetti({
      particleCount: 70,
      spread: 60,
      origin: { y: 0.85 }
    });
  }
}

/* ==================== 9. PROJECT DETAILS MODAL & CUSTOM ILLUSTRATIONS ==================== */

// Generator Ilustrasi Visual Khusus Sesuai Nama & Karakteristik Setiap Aplikasi
function generateProjectIllustration(key, data) {
  switch (key) {
    case 'kartu-stok':
      return `
        <div class="w-full bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-950 p-4 sm:p-5 text-white select-none">
          <div class="flex items-center justify-between border-b border-slate-700/80 pb-2.5 mb-3">
            <div class="flex items-center gap-2">
              <span class="w-2.5 h-2.5 rounded-full bg-rose-500 inline-block"></span>
              <span class="w-2.5 h-2.5 rounded-full bg-amber-500 inline-block"></span>
              <span class="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block"></span>
              <span class="text-xs font-mono font-bold tracking-wider text-emerald-400 ml-1.5">KARTU STOK DIGITAL • GUDANG KWP RU III</span>
            </div>
            <span class="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 text-[10px] font-mono font-bold border border-emerald-500/30">SYSTEM ONLINE</span>
          </div>
          <div class="grid grid-cols-3 gap-2 mb-3 text-center">
            <div class="bg-slate-800/80 p-2 rounded-lg border border-slate-700">
              <div class="text-[10px] text-slate-400">Total SKU Barang</div>
              <div class="text-base sm:text-lg font-bold font-mono text-emerald-400">148 SKU</div>
            </div>
            <div class="bg-slate-800/80 p-2 rounded-lg border border-slate-700">
              <div class="text-[10px] text-slate-400">Status Buffer Stock</div>
              <div class="text-base sm:text-lg font-bold font-mono text-emerald-400">98% AMAN</div>
            </div>
            <div class="bg-slate-800/80 p-2 rounded-lg border border-slate-700">
              <div class="text-[10px] text-slate-400">Audit Fisik Opname</div>
              <div class="text-base sm:text-lg font-bold font-mono text-emerald-400">SINKRON</div>
            </div>
          </div>
          <div class="bg-slate-950/70 rounded-lg p-2.5 border border-slate-800 font-mono text-[11px] space-y-1.5">
            <div class="flex justify-between text-slate-400 border-b border-slate-800 pb-1 text-[10px]">
              <span>TANGGAL & TRANSAKSI</span>
              <span>MUTASI MASUK / KELUAR</span>
              <span>SISA FISIK</span>
            </div>
            <div class="flex justify-between text-slate-200">
              <span class="truncate pr-2">Beras Premium RU III (Nota #104)</span>
              <span class="text-emerald-400 font-bold">+250 Kg</span>
              <span class="font-bold text-white">450 Kg</span>
            </div>
            <div class="flex justify-between text-slate-200">
              <span class="truncate pr-2">Pengeluaran Dapur KWP Shift Pagi</span>
              <span class="text-rose-400 font-bold">-120 Kg</span>
              <span class="font-bold text-white">330 Kg</span>
            </div>
            <div class="flex justify-between text-slate-200">
              <span class="truncate pr-2">Susu Extrapuding RU III (Nota #098)</span>
              <span class="text-emerald-400 font-bold">+100 Box</span>
              <span class="font-bold text-white">185 Box</span>
            </div>
          </div>
        </div>
      `;

    case 'dapur-kwp':
      return `
        <div class="w-full bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 p-4 sm:p-5 text-white select-none">
          <div class="flex items-center justify-between border-b border-slate-700/80 pb-2.5 mb-3">
            <div class="flex items-center gap-2">
              <span class="w-2.5 h-2.5 rounded-full bg-rose-500 inline-block"></span>
              <span class="w-2.5 h-2.5 rounded-full bg-amber-500 inline-block"></span>
              <span class="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block"></span>
              <span class="text-xs font-mono font-bold tracking-wider text-indigo-400 ml-1.5">SYSTEM OPERATIONAL DAPUR KWP • RU III</span>
            </div>
            <span class="px-2 py-0.5 rounded bg-indigo-500/20 text-indigo-300 text-[10px] font-mono font-bold border border-indigo-500/30">KATERING AKTIF</span>
          </div>
          <div class="grid grid-cols-3 gap-2 mb-3 text-center">
            <div class="bg-slate-800/80 p-2 rounded-lg border border-slate-700">
              <div class="text-[10px] text-slate-400">Porsi Siang Kilang</div>
              <div class="text-base sm:text-lg font-bold font-mono text-indigo-300">450 Porsi</div>
            </div>
            <div class="bg-slate-800/80 p-2 rounded-lg border border-slate-700">
              <div class="text-[10px] text-slate-400">Porsi Malam Kilang</div>
              <div class="text-base sm:text-lg font-bold font-mono text-indigo-300">320 Porsi</div>
            </div>
            <div class="bg-slate-800/80 p-2 rounded-lg border border-slate-700">
              <div class="text-[10px] text-slate-400">Shift Lembur Kilang</div>
              <div class="text-base sm:text-lg font-bold font-mono text-indigo-300">180 Porsi</div>
            </div>
          </div>
          <div class="bg-slate-950/70 rounded-lg p-2.5 border border-slate-800 text-[11px] space-y-1.5">
            <div class="flex items-center justify-between">
              <span class="text-slate-400">Siklus Menu Hari Ini:</span>
              <span class="font-bold text-white">Ayam Bakar Madu + Sayur Sop Sehat + Buah Segar</span>
            </div>
            <div class="flex items-center justify-between text-[10px] text-slate-300">
              <span>✓ Kontrol Suhu & K3 Sanitasi Makanan: <strong>Terpenuhi (Sesuai SOP)</strong></span>
              <span class="text-emerald-400 font-bold">100% Siap Kirim</span>
            </div>
          </div>
        </div>
      `;

    case 'pkh':
      return `
        <div class="w-full bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 p-4 sm:p-5 text-white select-none">
          <div class="flex items-center justify-between border-b border-slate-700/80 pb-2.5 mb-3">
            <div class="flex items-center gap-2">
              <span class="w-2.5 h-2.5 rounded-full bg-rose-500 inline-block"></span>
              <span class="w-2.5 h-2.5 rounded-full bg-amber-500 inline-block"></span>
              <span class="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block"></span>
              <span class="text-xs font-mono font-bold tracking-wider text-blue-400 ml-1.5">SPK PENERIMA PKH • METODE SAW</span>
            </div>
            <span class="px-2 py-0.5 rounded bg-blue-500/20 text-blue-300 text-[10px] font-mono font-bold border border-blue-500/30">MATRIKS TERNORMALISASI</span>
          </div>
          <div class="grid grid-cols-4 gap-1.5 mb-2.5 text-center text-[10px] font-mono">
            <div class="bg-slate-800/80 p-1.5 rounded border border-slate-700">C1: Penghasilan (30%)</div>
            <div class="bg-slate-800/80 p-1.5 rounded border border-slate-700">C2: Tanggungan (25%)</div>
            <div class="bg-slate-800/80 p-1.5 rounded border border-slate-700">C3: Rumah (25%)</div>
            <div class="bg-slate-800/80 p-1.5 rounded border border-slate-700">C4: Aset (20%)</div>
          </div>
          <div class="bg-slate-950/70 rounded-lg p-2.5 border border-slate-800 font-mono text-[11px] space-y-1">
            <div class="flex justify-between text-slate-400 text-[10px] border-b border-slate-800 pb-1">
              <span>PERINGKAT KELAYAKAN CALON</span>
              <span>SKOR PREFERENSI (V)</span>
              <span>STATUS KELULUSAN</span>
            </div>
            <div class="flex justify-between text-slate-200">
              <span>#1 Keluarga Rusdi H.</span>
              <span class="text-blue-300 font-bold">V = 0.942</span>
              <span class="text-emerald-400 font-bold">DITETAPKAN PKH</span>
            </div>
            <div class="flex justify-between text-slate-200">
              <span>#2 Keluarga M. Hasan</span>
              <span class="text-blue-300 font-bold">V = 0.908</span>
              <span class="text-emerald-400 font-bold">DITETAPKAN PKH</span>
            </div>
          </div>
        </div>
      `;

    case 'beasiswa':
      return `
        <div class="w-full bg-gradient-to-br from-slate-950 via-slate-900 to-amber-950 p-4 sm:p-5 text-white select-none">
          <div class="flex items-center justify-between border-b border-slate-700/80 pb-2.5 mb-3">
            <div class="flex items-center gap-2">
              <span class="w-2.5 h-2.5 rounded-full bg-rose-500 inline-block"></span>
              <span class="w-2.5 h-2.5 rounded-full bg-amber-500 inline-block"></span>
              <span class="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block"></span>
              <span class="text-xs font-mono font-bold tracking-wider text-amber-400 ml-1.5">PORTAL SELEKSI BEASISWA • METODE SMART</span>
            </div>
            <span class="px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 text-[10px] font-mono font-bold border border-amber-500/30">UTILITY CALCULATION</span>
          </div>
          <div class="grid grid-cols-3 gap-2 mb-2.5 text-center">
            <div class="bg-slate-800/80 p-2 rounded-lg border border-slate-700">
              <div class="text-[10px] text-slate-400">Total Pendaftar</div>
              <div class="text-base sm:text-lg font-bold font-mono text-amber-400">120 Berkas</div>
            </div>
            <div class="bg-slate-800/80 p-2 rounded-lg border border-slate-700">
              <div class="text-[10px] text-slate-400">Kuota Beasiswa</div>
              <div class="text-base sm:text-lg font-bold font-mono text-amber-400">25 Siswa</div>
            </div>
            <div class="bg-slate-800/80 p-2 rounded-lg border border-slate-700">
              <div class="text-[10px] text-slate-400">Verifikasi Panitia</div>
              <div class="text-base sm:text-lg font-bold font-mono text-amber-400">100% VALID</div>
            </div>
          </div>
          <div class="bg-slate-950/70 rounded-lg p-2.5 border border-slate-800 font-mono text-[11px] space-y-1">
            <div class="flex justify-between text-slate-400 text-[10px] border-b border-slate-800 pb-1">
              <span>NAMA PESERTA</span>
              <span>BOBOT NILAI UTILITY</span>
              <span>HASIL AKHIR</span>
            </div>
            <div class="flex justify-between text-slate-200">
              <span>1. Ahmad Farhan (IPK 3.88)</span>
              <span class="text-amber-300 font-bold">Skor: 96.40</span>
              <span class="text-emerald-400 font-bold">LOLOS BEASISWA</span>
            </div>
            <div class="flex justify-between text-slate-200">
              <span>2. Siti Nurhaliza (IPK 3.82)</span>
              <span class="text-amber-300 font-bold">Skor: 93.10</span>
              <span class="text-emerald-400 font-bold">LOLOS BEASISWA</span>
            </div>
          </div>
        </div>
      `;

    case 'checklist-it':
      return `
        <div class="w-full bg-gradient-to-br from-slate-950 via-slate-900 to-cyan-950 p-4 sm:p-5 text-white select-none">
          <div class="flex items-center justify-between border-b border-slate-700/80 pb-2.5 mb-3">
            <div class="flex items-center gap-2">
              <span class="w-2.5 h-2.5 rounded-full bg-rose-500 inline-block"></span>
              <span class="w-2.5 h-2.5 rounded-full bg-amber-500 inline-block"></span>
              <span class="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block"></span>
              <span class="text-xs font-mono font-bold tracking-wider text-cyan-400 ml-1.5">IT ASSET CHECKLIST & PREVENTIVE MAINTENANCE</span>
            </div>
            <span class="px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300 text-[10px] font-mono font-bold border border-cyan-500/30">AUDIT SYSTEM</span>
          </div>
          <div class="grid grid-cols-2 gap-2 mb-2.5 text-xs font-mono">
            <div class="bg-slate-800/80 p-2 rounded border border-slate-700">
              <div class="text-[10px] text-slate-400">Workstation PC Operasional</div>
              <div class="text-emerald-400 font-bold text-[11px]">✓ OS Up to Date • Antivirus OK</div>
            </div>
            <div class="bg-slate-800/80 p-2 rounded border border-slate-700">
              <div class="text-[10px] text-slate-400">Jaringan & Server Lokal</div>
              <div class="text-emerald-400 font-bold text-[11px]">✓ Uptime 99.98% • Latency 2ms</div>
            </div>
          </div>
          <div class="bg-slate-950/70 rounded-lg p-2.5 border border-slate-800 text-[11px] space-y-1">
            <div class="flex justify-between text-slate-300">
              <span>Jadwal Audit: <strong>Mingguan & Bulanan</strong></span>
              <span>Auditor: <strong>Tegar Suryatama</strong></span>
            </div>
            <div class="text-[10px] text-emerald-400">✓ Seluruh Aset Terinventarisasi dengan Tag Nomor Seri Resmi</div>
          </div>
        </div>
      `;

    case 'spb':
      return `
        <div class="w-full bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 p-4 sm:p-5 text-white select-none">
          <div class="flex items-center justify-between border-b border-slate-700/80 pb-2.5 mb-3">
            <div class="flex items-center gap-2">
              <span class="w-2.5 h-2.5 rounded-full bg-rose-500 inline-block"></span>
              <span class="w-2.5 h-2.5 rounded-full bg-amber-500 inline-block"></span>
              <span class="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block"></span>
              <span class="text-xs font-mono font-bold tracking-wider text-blue-400 ml-1.5">VERIFIKASI SURAT PEMBAYARAN BARANG (SPB)</span>
            </div>
            <span class="px-2 py-0.5 rounded bg-blue-500/20 text-blue-300 text-[10px] font-mono font-bold border border-blue-500/30">APPROVAL FLOW</span>
          </div>
          <div class="bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 mb-2.5 font-mono text-[11px]">
            <div class="flex justify-between border-b border-slate-700 pb-1.5 mb-1.5">
              <span>Nomor Dokumen: <strong>#SPB-2026-X-044</strong></span>
              <span class="text-emerald-400 font-bold">VERIFIED & APPROVED</span>
            </div>
            <div class="flex items-center justify-between text-[10px] text-slate-300">
              <span>[1. Input Gudang ✓]</span>
              <span>➔</span>
              <span>[2. Verifikasi Faktur ✓]</span>
              <span>➔</span>
              <span>[3. Approval Pimpinan ✓]</span>
            </div>
          </div>
          <div class="bg-slate-950/70 rounded-lg p-2 border border-slate-800 text-[10px] text-slate-300 flex justify-between">
            <span>Kesesuaian Dokumen: <strong>Faktur Supplier Klop 100%</strong></span>
            <span class="text-emerald-400 font-bold">Siap Pembayaran</span>
          </div>
        </div>
      `;

    case 'aksara-ulu':
      return `
        <div class="w-full bg-gradient-to-br from-stone-950 via-stone-900 to-amber-950 p-4 sm:p-5 text-white select-none">
          <div class="flex items-center justify-between border-b border-stone-700/80 pb-2.5 mb-3">
            <div class="flex items-center gap-2">
              <span class="w-2.5 h-2.5 rounded-full bg-rose-500 inline-block"></span>
              <span class="w-2.5 h-2.5 rounded-full bg-amber-500 inline-block"></span>
              <span class="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block"></span>
              <span class="text-xs font-mono font-bold tracking-wider text-amber-400 ml-1.5">KAMUS & TRANSLITERASI AKSARA ULU KAGANGA</span>
            </div>
            <span class="px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 text-[10px] font-mono font-bold border border-amber-500/30">100% OFFLINE</span>
          </div>
          <div class="grid grid-cols-2 gap-2 mb-2.5">
            <div class="bg-stone-900/90 p-2.5 rounded-lg border border-stone-800">
              <div class="text-[10px] text-stone-400 font-mono">Input Teks Latin</div>
              <div class="text-sm font-bold text-white mt-1">Palembang Darussalam</div>
            </div>
            <div class="bg-stone-900/90 p-2.5 rounded-lg border border-stone-800">
              <div class="text-[10px] text-stone-400 font-mono">Hasil Karakter Aksara Ulu</div>
              <div class="text-base font-bold text-amber-300 mt-1 font-serif tracking-wider">ꤶꤸꥋꤸ꥓ꤷꤲ꥓ ꤴꤽꥋꤼ꥓ꤼꤸ꥓</div>
            </div>
          </div>
          <div class="bg-stone-950/80 rounded-lg p-2 border border-stone-800 text-[10px] text-stone-300 flex justify-between font-mono">
            <span>Database: <strong>Lokal JSON NoSQL</strong></span>
            <span>Platform: <strong>Web PWA • Android APK • EXE Windows</strong></span>
          </div>
        </div>
      `;

    case 'camat':
      return `
        <div class="w-full bg-gradient-to-br from-slate-950 via-slate-900 to-teal-950 p-4 sm:p-5 text-white select-none">
          <div class="flex items-center justify-between border-b border-slate-700/80 pb-2.5 mb-3">
            <div class="flex items-center gap-2">
              <span class="w-2.5 h-2.5 rounded-full bg-rose-500 inline-block"></span>
              <span class="w-2.5 h-2.5 rounded-full bg-amber-500 inline-block"></span>
              <span class="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block"></span>
              <span class="text-xs font-mono font-bold tracking-wider text-teal-400 ml-1.5">E-GOVERNMENT • KANTOR CAMAT BANYUASIN I</span>
            </div>
            <span class="px-2 py-0.5 rounded bg-teal-500/20 text-teal-300 text-[10px] font-mono font-bold border border-teal-500/30">PELAYANAN PUBLIK</span>
          </div>
          <div class="bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 mb-2.5 font-mono text-[11px]">
            <div class="flex justify-between border-b border-slate-700 pb-1.5 mb-1.5">
              <span>No. Tiket: <strong>#CMT-BANYUASIN-8891</strong></span>
              <span class="text-emerald-400 font-bold">STATUS: DIVERIFIKASI</span>
            </div>
            <div class="flex justify-between text-[10px] text-slate-300">
              <span>Pengajuan: <strong>Surat Keterangan Usaha & Domisili</strong></span>
              <span>Berkas: <strong>KTP & KK Lengkap ✓</strong></span>
            </div>
          </div>
          <div class="bg-slate-950/70 rounded-lg p-2 border border-slate-800 text-[10px] text-slate-300 flex justify-between">
            <span>Pemohon: Warga Banyuasin I</span>
            <span class="text-teal-300 font-bold">Draft Surat Resmi Siap Dicetak</span>
          </div>
        </div>
      `;

    case 'excel-analytics':
      return `
        <div class="w-full bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-950 p-4 sm:p-5 text-white select-none">
          <div class="flex items-center justify-between border-b border-slate-700/80 pb-2.5 mb-3">
            <div class="flex items-center gap-2">
              <span class="w-2.5 h-2.5 rounded-full bg-rose-500 inline-block"></span>
              <span class="w-2.5 h-2.5 rounded-full bg-amber-500 inline-block"></span>
              <span class="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block"></span>
              <span class="text-xs font-mono font-bold tracking-wider text-emerald-400 ml-1.5">MS EXCEL DATA ANALYTICS & PIVOT AUTOMATION</span>
            </div>
            <span class="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 text-[10px] font-mono font-bold border border-emerald-500/30">FORMULA DASHBOARD</span>
          </div>
          <div class="bg-slate-800/80 p-2 rounded border border-slate-700 mb-2 font-mono text-[11px] text-emerald-300">
            fx = XLOOKUP(D5, Master_Stok!A:B, Master_Stok!C:C, "Tidak Ditemukan")
          </div>
          <div class="bg-slate-950/70 rounded-lg p-2.5 border border-slate-800 font-mono text-[11px] space-y-1">
            <div class="flex justify-between text-slate-400 text-[10px] border-b border-slate-800 pb-1">
              <span>KATEGORI BAHAN</span>
              <span>MASUK / KELUAR</span>
              <span>SISA FISIK</span>
            </div>
            <div class="flex justify-between text-slate-200">
              <span>Bahan Kering Gudang</span>
              <span>+2,450 / -1,920 Kg</span>
              <span class="text-emerald-400 font-bold">530 Kg</span>
            </div>
            <div class="flex justify-between text-slate-200">
              <span>Bahan Basah & Segar Dapur</span>
              <span>+1,180 / -1,120 Kg</span>
              <span class="text-emerald-400 font-bold">60 Kg</span>
            </div>
          </div>
        </div>
      `;

    case 'administrasi-office':
      return `
        <div class="w-full bg-gradient-to-br from-slate-950 via-slate-900 to-sky-950 p-4 sm:p-5 text-white select-none">
          <div class="flex items-center justify-between border-b border-slate-700/80 pb-2.5 mb-3">
            <div class="flex items-center gap-2">
              <span class="w-2.5 h-2.5 rounded-full bg-rose-500 inline-block"></span>
              <span class="w-2.5 h-2.5 rounded-full bg-amber-500 inline-block"></span>
              <span class="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block"></span>
              <span class="text-xs font-mono font-bold tracking-wider text-sky-400 ml-1.5">OFFICE ADMINISTRATION & CLOUD FILING SYSTEM</span>
            </div>
            <span class="px-2 py-0.5 rounded bg-sky-500/20 text-sky-300 text-[10px] font-mono font-bold border border-sky-500/30">DRIVE CLOUD SYNC</span>
          </div>
          <div class="bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 mb-2 font-mono text-[11px] space-y-1">
            <div class="text-sky-300 font-bold">📁 Koperasi Wanita Petra RU III / Arsip 2026</div>
            <div class="text-slate-300 pl-3">├── 📁 Faktur Pembelian & SPB Gudang [Terverifikasi]</div>
            <div class="text-slate-300 pl-3">└── 📁 Laporan Rekonsiliasi Zahir & Stock Opname [Synced]</div>
          </div>
          <div class="bg-slate-950/70 rounded-lg p-2 border border-slate-800 text-[10px] text-slate-300 flex justify-between">
            <span>SOP Tata Kelola Dokumen: <strong>Terstandarisasi</strong></span>
            <span class="text-emerald-400 font-bold">Backup Ganda Terjamin</span>
          </div>
        </div>
      `;

    case 'desain-canva':
      return `
        <div class="w-full bg-gradient-to-br from-slate-950 via-slate-900 to-pink-950 p-4 sm:p-5 text-white select-none">
          <div class="flex items-center justify-between border-b border-slate-700/80 pb-2.5 mb-3">
            <div class="flex items-center gap-2">
              <span class="w-2.5 h-2.5 rounded-full bg-rose-500 inline-block"></span>
              <span class="w-2.5 h-2.5 rounded-full bg-amber-500 inline-block"></span>
              <span class="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block"></span>
              <span class="text-xs font-mono font-bold tracking-wider text-pink-400 ml-1.5">CANVA VISUAL DESIGN & CREATIVE MEDIA STUDIO</span>
            </div>
            <span class="px-2 py-0.5 rounded bg-pink-500/20 text-pink-300 text-[10px] font-mono font-bold border border-pink-500/30">PRINT & WEB READY</span>
          </div>
          <div class="grid grid-cols-3 gap-2 mb-2 text-center text-[10px]">
            <div class="bg-slate-800/80 p-2 rounded border border-slate-700 font-medium">
              <div class="text-pink-300 font-bold">Infografis Data</div>
              <div class="text-slate-400 mt-0.5">Alur Gudang & Katering</div>
            </div>
            <div class="bg-slate-800/80 p-2 rounded border border-slate-700 font-medium">
              <div class="text-pink-300 font-bold">Slide Pitch Deck</div>
              <div class="text-slate-400 mt-0.5">Presentasi Korporat</div>
            </div>
            <div class="bg-slate-800/80 p-2 rounded border border-slate-700 font-medium">
              <div class="text-pink-300 font-bold">Banner Media</div>
              <div class="text-slate-400 mt-0.5">Branding & Promosi</div>
            </div>
          </div>
          <div class="bg-slate-950/70 rounded-lg p-2 border border-slate-800 text-[10px] text-slate-300 flex justify-between font-mono">
            <span>Resolusi Desain: <strong>Vector / 300 DPI Print</strong></span>
            <span class="text-pink-400 font-bold">Tipografi & Hierarki Rapi</span>
          </div>
        </div>
      `;

    case 'starmoon-labs':
      return `
        <div class="w-full bg-gradient-to-br from-slate-950 via-slate-900 to-purple-950 p-4 sm:p-5 text-white select-none">
          <div class="flex items-center justify-between border-b border-slate-700/80 pb-2.5 mb-3">
            <div class="flex items-center gap-2">
              <span class="w-2.5 h-2.5 rounded-full bg-rose-500 inline-block"></span>
              <span class="w-2.5 h-2.5 rounded-full bg-amber-500 inline-block"></span>
              <span class="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block"></span>
              <span class="text-xs font-mono font-bold tracking-wider text-purple-400 ml-1.5">STARMOON LABS • DIGITAL FREELANCE SERVICES</span>
            </div>
            <span class="px-2 py-0.5 rounded bg-purple-500/20 text-purple-300 text-[10px] font-mono font-bold border border-purple-500/30">CLIENT SATISFACTION 100%</span>
          </div>
          <div class="grid grid-cols-2 gap-2 mb-2 font-mono text-[11px]">
            <div class="bg-slate-800/80 p-2 rounded border border-slate-700">
              <div class="text-[10px] text-slate-400">CV ATS Optimization</div>
              <div class="text-emerald-400 font-bold">Skor Lolos ATS 98/100</div>
            </div>
            <div class="bg-slate-800/80 p-2 rounded border border-slate-700">
              <div class="text-[10px] text-slate-400">Pembuatan Web & Landing</div>
              <div class="text-purple-300 font-bold">Modern, Cepat & Responsif</div>
            </div>
          </div>
          <div class="bg-slate-950/70 rounded-lg p-2 border border-slate-800 text-[10px] text-slate-300 flex justify-between">
            <span>Rating Klien: <strong>★★★★★ 5.0 (40+ Klien)</strong></span>
            <span class="text-purple-300 font-bold">Garansi Kualitas & Tepat Waktu</span>
          </div>
        </div>
      `;

    default:
      return `
        <div class="w-full bg-slate-900 p-5 text-white font-mono text-center">
          <div class="text-sm font-bold text-slate-200">${data.title}</div>
          <div class="text-xs text-slate-400 mt-1">${data.category}</div>
        </div>
      `;
  }
}

// Handler Pembukaan Modal Detail Proyek
function openProjectModal(key) {
  if (typeof projectDetails === 'undefined') return;
  const data = projectDetails[key];
  if (!data) return;

  const illustrationHtml = generateProjectIllustration(key, data);

  const featureItemsHtml = data.features.map(f => `
    <div class="flex items-start gap-2 bg-slate-50 p-2.5 rounded-lg border border-slate-200/70">
      <i class="fa-solid fa-circle-check text-emerald-600 text-xs mt-0.5 shrink-0"></i>
      <span class="text-[11px] leading-snug text-slate-700">${f}</span>
    </div>
  `).join('');

  const techBadgesHtml = data.tech.split(',').map(t => 
    `<span class="px-2.5 py-1 rounded bg-slate-100 text-slate-800 font-mono text-[11px] font-semibold border border-slate-200">${t.trim()}</span>`
  ).join('');

  const driveButtonHtml = data.driveLink ? `
    <a href="${data.driveLink}" target="_blank" rel="noopener noreferrer" class="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs rounded-lg transition flex items-center gap-2 shadow-sm">
      <i class="fa-brands fa-google-drive text-amber-400"></i> Buka Berkas Google Drive
    </a>
  ` : '';

  const content = `
    <div class="space-y-4">
      
      <!-- Custom Illustrative App Mockup Banner -->
      <div class="rounded-xl overflow-hidden border border-slate-200/80 shadow-sm bg-slate-950">
        ${illustrationHtml}
      </div>

      <!-- App Header Title & Category -->
      <div>
        <span class="text-[11px] font-mono text-primary-700 bg-primary-50 px-2.5 py-0.5 rounded font-semibold uppercase border border-primary-200">
          ${data.category}
        </span>
        <h3 class="text-lg sm:text-xl font-bold text-slate-900 mt-1.5 leading-snug">
          ${data.title}
        </h3>
      </div>

      <!-- Tugas & Tanggung Jawab Tegar -->
      <div class="bg-primary-50/70 p-3.5 rounded-xl border border-primary-200/80 space-y-1">
        <div class="flex items-center gap-1.5 text-primary-900 font-bold text-xs uppercase tracking-wider">
          <i class="fa-solid fa-user-gear text-primary-700"></i>
          <span>Tugas & Tanggung Jawab Tegar:</span>
        </div>
        <p class="text-xs text-primary-950 font-medium leading-relaxed">
          ${data.role}
        </p>
      </div>

      <!-- Tujuan & Dampak Sistem -->
      <div class="bg-slate-50 p-3.5 rounded-xl border border-slate-200 space-y-1">
        <div class="flex items-center gap-1.5 text-slate-800 font-bold text-xs uppercase tracking-wider">
          <i class="fa-solid fa-bullseye text-emerald-600"></i>
          <span>Tujuan & Manfaat Sistem:</span>
        </div>
        <p class="text-xs text-slate-600 leading-relaxed text-justify">
          ${data.goal}
        </p>
      </div>

      <!-- Modul & Fitur Utama Aplikasi -->
      <div>
        <div class="flex items-center gap-1.5 text-slate-800 font-bold text-xs uppercase tracking-wider mb-2">
          <i class="fa-solid fa-list-check text-slate-700"></i>
          <span>Modul & Fitur-Fitur Utama yang Dibangun:</span>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
          ${featureItemsHtml}
        </div>
      </div>

      <!-- Teknologi yang Digunakan -->
      <div>
        <div class="flex items-center gap-1.5 text-slate-800 font-bold text-xs uppercase tracking-wider mb-1.5">
          <i class="fa-solid fa-microchip text-slate-600"></i>
          <span>Teknologi & Lingkungan Kerja:</span>
        </div>
        <div class="flex flex-wrap gap-1.5">
          ${techBadgesHtml}
        </div>
      </div>

      <!-- Modal Footer Action Buttons -->
      <div class="pt-3 border-t border-slate-200 flex flex-wrap items-center justify-between gap-2">
        ${driveButtonHtml}
        <button onclick="closeProjectModal()" class="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs rounded-lg transition ml-auto">
          Tutup
        </button>
      </div>

    </div>
  `;

  const container = document.getElementById('projectModalContent');
  const modal = document.getElementById('projectModal');
  if (container && modal) {
    container.innerHTML = content;
    modal.classList.remove('hidden');
  }
}

function closeProjectModal() {
  const modal = document.getElementById('projectModal');
  if (modal) modal.classList.add('hidden');
}

/* ==================== 10. CERTIFICATE PREVIEW MODAL ==================== */
function openCertModal(imgSrc, title, issuer, date) {
  const modal = document.getElementById('certModal');
  const modalImg = document.getElementById('certModalImg');
  const modalTitle = document.getElementById('certModalTitle');
  const modalMeta = document.getElementById('certModalMeta');

  if (modal && modalImg && modalTitle && modalMeta) {
    modalImg.src = imgSrc;
    modalTitle.innerText = title;
    modalMeta.innerText = `Penerbit: ${issuer} • Tanggal: ${date}`;
    modal.classList.remove('hidden');
  }
}

function closeCertModal() {
  const modal = document.getElementById('certModal');
  if (modal) modal.classList.add('hidden');
}

/* ==================== 11. PROJECT FILTER & SEARCH ==================== */
function filterProjects(category) {
  const items = document.querySelectorAll('.project-item');
  const buttons = document.querySelectorAll('.filter-btn');

  buttons.forEach(btn => {
    btn.classList.remove('bg-slate-900', 'text-white');
    btn.classList.add('bg-white', 'text-slate-700');
    if (btn.getAttribute('onclick') && btn.getAttribute('onclick').includes(`'${category}'`)) {
      btn.classList.remove('bg-white', 'text-slate-700');
      btn.classList.add('bg-slate-900', 'text-white');
    }
  });

  items.forEach(item => {
    if (category === 'all' || item.classList.contains(category)) {
      item.style.display = 'flex';
    } else {
      item.style.display = 'none';
    }
  });
}

function searchProjects() {
  const searchInput = document.getElementById('projectSearch');
  if (!searchInput) return;
  const query = searchInput.value.toLowerCase();
  const items = document.querySelectorAll('.project-item');

  items.forEach(item => {
    const title = (item.getAttribute('data-title') || '').toLowerCase();
    const tech = (item.getAttribute('data-tech') || '').toLowerCase();
    if (title.includes(query) || tech.includes(query)) {
      item.style.display = 'flex';
    } else {
      item.style.display = 'none';
    }
  });
}

/* ==================== 12. GLOBAL EVENT LISTENERS ==================== */
window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeHrdModal();
    closeProjectModal();
    closeCertModal();
  }
});

// Close modal when clicking on backdrop
document.addEventListener('click', (e) => {
  const hrdModal = document.getElementById('hrdModal');
  const projectModal = document.getElementById('projectModal');
  if (e.target === hrdModal) closeHrdModal();
  if (e.target === projectModal) closeProjectModal();
});
