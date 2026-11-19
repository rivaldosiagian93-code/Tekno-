const productsSeed = [
    { id: 1, name: "Cabai keriting merah", category: "Bumbu", location: "Brebes", seller: "Poktan Subur Jaya", price: 38000, stock: 120, unit: "kg", image: "https://images.unsplash.com/photo-1588252303782-cb80119abd6d?auto=format&fit=crop&w=850&q=80", description: "Cabai keriting merah segar hasil panen petani lokal. Dipetik saat matang dan dikemas untuk menjaga kualitas selama pengiriman." },
    { id: 2, name: "Bawang merah pilihan", category: "Bumbu", location: "Brebes", seller: "Kelompok Tani Balijaya", price: 32000, stock: 250, unit: "kg", image: "https://images.unsplash.com/photo-1508747703725-719777637510?auto=format&fit=crop&w=850&q=80", description: "Bawang merah lokal yang disortir, cocok untuk kebutuhan dapur rumah makan maupun usaha kuliner." },
    { id: 3, name: "Tomat segar", category: "Sayuran", location: "Bandung", seller: "Tani Lembang Sejahtera", price: 18000, stock: 90, unit: "kg", image: "https://images.unsplash.com/photo-1546094096-0df4bcaaa337?auto=format&fit=crop&w=850&q=80", description: "Tomat segar dari kebun Lembang, dipanen berkala agar pasokan tetap segar dan terjaga." },
    { id: 4, name: "Sayuran hijau pilihan", category: "Sayuran", location: "Malang", seller: "Koperasi Tani Makmur", price: 14000, stock: 75, unit: "ikat", image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=850&q=80", description: "Aneka sayuran hijau lokal yang dipanen segar. Tanyakan jenis sayuran yang tersedia minggu ini." },
    { id: 5, name: "Beras pandan wangi", category: "Beras", location: "Cianjur", seller: "Koperasi Tani Cianjur", price: 16500, stock: 500, unit: "kg", image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=850&q=80", description: "Beras pandan wangi dari petani Cianjur, tersedia untuk pembelian partai kecil maupun pasokan rutin." },
    { id: 6, name: "Sayuran panen kebun", category: "Sayuran", location: "Bandung", seller: "Tani Lembang Sejahtera", price: 16000, stock: 60, unit: "kg", image: "https://images.unsplash.com/photo-1518843875459-f738682238a6?auto=format&fit=crop&w=850&q=80", description: "Hasil kebun lokal yang berubah mengikuti musim. Hubungi pemasok untuk menanyakan daftar panen terbaru." }
];

const css = `
    :root {
        color-scheme: light;
        --green-950: #123b2b;
        --green-900: #174c35;
        --green-800: #216442;
        --green-700: #2d754c;
        --green-600: #43885a;
        --green-100: #e8f0e5;
        --green-50: #f3f6ef;
        --cream: #f8f8f3;
        --ink: #1d3025;
        --muted: #788378;
        --line: #e5e9e1;
        --white: #fff;
        --gold: #f2b344;
        --shadow: 0 16px 44px rgba(27, 55, 37, .08);
    }
    * { box-sizing: border-box; }
    html { scroll-behavior: smooth; }
    body {
        margin: 0;
        color: var(--ink);
        background: var(--cream);
        font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
        font-size: 14px;
        line-height: 1.55;
    }
    button, input, select, textarea { font: inherit; }
    button, a { -webkit-tap-highlight-color: transparent; }
    a { color: inherit; text-decoration: none; }
    button { cursor: pointer; }
    .shell { width: min(1120px, calc(100% - 48px)); margin: 0 auto; }
    .site-header { position: sticky; top: 0; z-index: 20; background: rgba(255,255,255,.97); border-bottom: 1px solid var(--line); backdrop-filter: blur(12px); }
    .nav { min-height: 68px; display: flex; align-items: center; justify-content: space-between; gap: 24px; }
    .brand { display: inline-flex; align-items: center; gap: 9px; font-weight: 800; letter-spacing: -.04em; }
    .brand-mark { width: 31px; height: 31px; display: grid; place-items: center; color: var(--green-900); background: var(--green-100); border-radius: 10px; font-size: 18px; }
    .brand-name { font-size: 17px; }
    .brand-name span { color: var(--green-700); }
    .nav-links { display: flex; align-items: center; gap: 27px; color: #536258; font-size: 12px; font-weight: 650; }
    .nav-links a:hover, .nav-links a.active { color: var(--green-800); }
    .nav-actions { display: flex; align-items: center; gap: 10px; }
    .menu-toggle { display: none; width: 38px; height: 38px; border: 1px solid var(--line); background: white; border-radius: 9px; color: var(--green-900); font-size: 18px; }
    .button { min-height: 39px; display: inline-flex; align-items: center; justify-content: center; gap: 8px; padding: 9px 16px; border: 1px solid transparent; border-radius: 7px; background: var(--green-800); color: white; font-size: 12px; font-weight: 700; transition: background .2s, transform .2s, border-color .2s; }
    .button:hover { background: var(--green-950); transform: translateY(-1px); }
    .button:disabled { opacity: .5; cursor: not-allowed; transform: none; }
    .button-outline { color: var(--green-800); background: white; border-color: #dce5d8; }
    .button-outline:hover { color: white; border-color: var(--green-800); }
    .button-small { min-height: 32px; padding: 6px 11px; font-size: 11px; }
    .view { display: none; min-height: calc(100vh - 68px); }
    .view.active { display: block; }
    .eyebrow { margin: 0 0 10px; color: var(--green-700); font-size: 10px; font-weight: 800; letter-spacing: .13em; text-transform: uppercase; }
    h1, h2, h3, p { margin-top: 0; }
    h1, h2, h3 { color: var(--green-950); letter-spacing: -.035em; line-height: 1.22; }
    h1 { margin-bottom: 15px; font-size: clamp(36px, 4.2vw, 55px); }
    h2 { margin-bottom: 9px; font-size: clamp(24px, 3vw, 32px); }
    h3 { margin-bottom: 6px; font-size: 17px; }
    .muted { color: var(--muted); }
    .hero { padding: 46px 0 34px; }
    .hero-grid { display: grid; grid-template-columns: 1fr .95fr; align-items: center; gap: 48px; }
    .hero-copy { max-width: 485px; }
    .hero h1 span { color: var(--green-700); }
    .hero-copy > p:not(.eyebrow) { max-width: 420px; margin-bottom: 23px; color: #657166; font-size: 14px; }
    .hero-actions { display: flex; flex-wrap: wrap; gap: 9px; }
    .hero-image { position: relative; min-height: 320px; overflow: hidden; border-radius: 13px; background: #dce9d2 url("https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=85") center 48% / cover; }
    .hero-image::after { position: absolute; inset: 45% 0 0; content: ""; background: linear-gradient(transparent, rgba(10,36,23,.46)); }
    .image-note { position: absolute; z-index: 1; right: 15px; bottom: 14px; left: 15px; padding: 13px 15px; border-radius: 8px; background: rgba(255,255,255,.94); box-shadow: var(--shadow); }
    .image-note strong { display: block; color: var(--green-950); font-size: 12px; }
    .image-note span { color: var(--muted); font-size: 10px; }
    .search-band { padding: 20px 0; border-top: 1px solid var(--line); border-bottom: 1px solid var(--line); background: white; }
    .search-band h3 { margin: 0 0 10px; font-size: 14px; }
    .search-form { display: grid; grid-template-columns: 1.2fr 1fr 1fr auto; gap: 9px; }
    .field { width: 100%; min-height: 39px; padding: 9px 11px; color: var(--ink); background: white; border: 1px solid #dfe5dc; border-radius: 6px; outline: none; }
    .field:focus { border-color: var(--green-600); box-shadow: 0 0 0 3px rgba(67,136,90,.12); }
    textarea.field { min-height: 85px; resize: vertical; }
    .products-section { padding: 35px 0 40px; }
    .section-heading { display: flex; align-items: end; justify-content: space-between; gap: 16px; margin-bottom: 16px; }
    .section-heading h2 { margin: 0; font-size: 22px; }
    .section-heading p { margin: 5px 0 0; color: var(--muted); font-size: 11px; }
    .text-link { color: var(--green-700); font-size: 11px; font-weight: 750; }
    .product-grid { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 13px; }
    .product-card { overflow: hidden; border: 1px solid var(--line); border-radius: 9px; background: white; transition: box-shadow .2s, transform .2s; }
    .product-card:hover { transform: translateY(-3px); box-shadow: var(--shadow); }
    .product-photo { width: 100%; height: 142px; display: block; object-fit: cover; background: var(--green-100); }
    .product-info { padding: 12px; }
    .product-meta { display: flex; justify-content: space-between; gap: 8px; margin: 5px 0 9px; color: var(--muted); font-size: 10px; }
    .product-price { color: var(--green-800); font-size: 13px; font-weight: 800; }
    .product-price small { color: var(--muted); font-size: 10px; font-weight: 500; }
    .product-info .button { width: 100%; margin-top: 11px; }
    .tag { display: inline-block; padding: 3px 7px; color: var(--green-800); background: var(--green-50); border-radius: 4px; font-size: 9px; font-weight: 700; }
    .steps-section, .faq-section { padding: 31px 0 40px; background: #f0f3eb; }
    .faq-section { background: white; }
    .steps-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 30px; margin-top: 19px; }
    .step { display: flex; gap: 11px; }
    .step-number { flex: 0 0 28px; color: var(--green-700); font-size: 12px; font-weight: 850; }
    .step h3 { margin: 0 0 4px; font-size: 13px; }
    .step p { margin: 0; color: var(--muted); font-size: 10px; }
    .faq-grid { display: grid; grid-template-columns: .8fr 1.2fr; gap: 35px; align-items: start; }
    .faq-list { display: grid; gap: 9px; }
    .faq-list details { padding: 12px 14px; border: 1px solid var(--line); border-radius: 7px; background: var(--cream); }
    .faq-list summary { color: var(--green-950); font-size: 11px; font-weight: 750; cursor: pointer; }
    .faq-list p { margin: 9px 0 0; color: var(--muted); font-size: 10px; }
    .cta-band { padding: 26px 0; color: white; background: var(--green-950); }
    .cta-inner { display: flex; align-items: center; justify-content: space-between; gap: 25px; }
    .cta-band h2 { margin: 0; color: white; font-size: 21px; }
    .cta-band p { margin: 4px 0 0; color: #c2d4c6; font-size: 11px; }
    .button-gold { color: #1f3726; background: var(--gold); }
    .button-gold:hover { background: #ffc55b; }
    .site-footer { padding: 21px 0; color: #b7c8bb; background: var(--green-950); border-top: 1px solid rgba(255,255,255,.1); }
    .footer-inner { display: flex; align-items: center; justify-content: space-between; gap: 20px; font-size: 10px; }
    .footer-brand { color: white; font-size: 14px; font-weight: 800; }
    .page-main { padding: 34px 0 55px; }
    .page-top { margin-bottom: 22px; }
    .page-top h1 { margin: 0; font-size: 30px; }
    .page-top p { margin: 7px 0 0; color: var(--muted); font-size: 12px; }
    .catalog-layout { display: grid; grid-template-columns: 210px 1fr; gap: 22px; align-items: start; }
    .filter-panel, .panel { padding: 17px; border: 1px solid var(--line); border-radius: 9px; background: white; }
    .filter-panel h3 { font-size: 13px; }
    .filter-panel label { display: block; margin: 15px 0 6px; color: #5e6d61; font-size: 10px; font-weight: 700; }
    .catalog-toolbar { display: flex; align-items: center; justify-content: space-between; gap: 12px; margin-bottom: 12px; }
    .catalog-toolbar .field { max-width: 310px; }
    .catalog-list { display: grid; gap: 10px; }
    .catalog-row { display: grid; grid-template-columns: 150px 1fr auto; align-items: center; gap: 14px; padding: 10px; border: 1px solid var(--line); border-radius: 8px; background: white; }
    .catalog-row img { width: 150px; height: 93px; object-fit: cover; border-radius: 6px; }
    .catalog-row h3 { margin: 4px 0; font-size: 14px; }
    .catalog-row p { margin: 0; color: var(--muted); font-size: 10px; }
    .detail-grid { display: grid; grid-template-columns: 1.15fr .85fr; gap: 22px; align-items: start; }
    .detail-photo { width: 100%; height: 285px; object-fit: cover; border-radius: 8px; background: var(--green-100); }
    .detail-content { padding: 18px 0 0; }
    .detail-content h1 { margin: 8px 0; font-size: 27px; }
    .detail-content > p { color: #657166; font-size: 12px; }
    .specs { display: grid; grid-template-columns: repeat(3, 1fr); gap: 9px; margin: 18px 0; }
    .spec { padding: 10px; background: #f2f5ee; border-radius: 6px; }
    .spec span { display: block; color: var(--muted); font-size: 9px; }
    .spec strong { color: var(--green-900); font-size: 12px; }
    .purchase-panel h3 { font-size: 15px; }
    .purchase-panel .field, .form-stack .field { margin-bottom: 10px; }
    .purchase-panel .button, .form-stack .button { width: 100%; }
    .seller-line { display: flex; align-items: center; gap: 9px; margin: 15px 0; padding: 11px; background: var(--green-50); border-radius: 7px; }
    .seller-avatar { width: 31px; height: 31px; display: grid; place-items: center; color: white; background: var(--green-700); border-radius: 50%; font-size: 12px; }
    .seller-line strong, .seller-line span { display: block; }
    .seller-line strong { font-size: 11px; }
    .seller-line span { color: var(--muted); font-size: 9px; }
    .form-layout { display: grid; grid-template-columns: 1fr 280px; gap: 22px; align-items: start; }
    .form-card { padding: 22px; border: 1px solid var(--line); border-radius: 9px; background: white; }
    .form-card h2 { margin-bottom: 5px; font-size: 20px; }
    .form-card > p { margin-bottom: 18px; color: var(--muted); font-size: 11px; }
    .form-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 0 12px; }
    .form-stack label { display: block; margin: 0 0 5px; color: #59695d; font-size: 10px; font-weight: 700; }
    .form-stack .field { display: block; }
    .form-stack .button { margin-top: 5px; }
    .help-card { padding: 18px; color: #617063; background: #eff3ea; border-radius: 8px; font-size: 11px; }
    .help-card h3 { font-size: 14px; }
    .help-card li { margin: 9px 0; }
    .dashboard-stats { display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; margin-bottom: 20px; }
    .stat-card { padding: 15px; border: 1px solid var(--line); border-radius: 8px; background: white; }
    .stat-card span { color: var(--muted); font-size: 10px; }
    .stat-card strong { display: block; margin-top: 3px; color: var(--green-900); font-size: 21px; }
    .table-wrap { overflow-x: auto; border: 1px solid var(--line); border-radius: 8px; background: white; }
    table { width: 100%; border-collapse: collapse; text-align: left; }
    th, td { padding: 12px 13px; border-bottom: 1px solid var(--line); white-space: nowrap; }
    th { color: #657166; background: #f4f6f1; font-size: 9px; text-transform: uppercase; letter-spacing: .04em; }
    td { color: #516054; font-size: 10px; }
    td strong { color: var(--green-950); }
    tr:last-child td { border-bottom: 0; }
    .dashboard-head { display: flex; align-items: center; justify-content: space-between; gap: 15px; margin-bottom: 16px; }
    .dashboard-head h2 { margin: 0; font-size: 21px; }
    .hidden { display: none !important; }
    .login-view { display: grid; grid-template-columns: 1fr 1fr; min-height: calc(100vh - 68px); background: white; }
    .login-art { display: flex; flex-direction: column; justify-content: space-between; padding: 38px clamp(25px, 7vw, 95px); color: white; background: var(--green-950); }
    .login-art .brand { color: white; }
    .login-art h1 { max-width: 390px; margin-top: 70px; color: white; font-size: clamp(30px, 4vw, 46px); }
    .login-art p { max-width: 380px; color: #c4d5c9; font-size: 12px; }
    .login-art blockquote { margin: 35px 0 0; padding-left: 14px; border-left: 2px solid var(--gold); color: #d8e3da; font-size: 11px; }
    .login-panel { display: grid; place-items: center; padding: 35px 24px; }
    .login-form { width: min(360px, 100%); }
    .login-form h2 { font-size: 25px; }
    .login-form > p { color: var(--muted); font-size: 11px; }
    .login-form .form-stack { margin-top: 22px; }
    .toast { position: fixed; right: 20px; bottom: 20px; z-index: 50; max-width: min(370px, calc(100% - 40px)); padding: 12px 16px; color: white; background: var(--green-950); border-radius: 7px; box-shadow: var(--shadow); font-size: 12px; }
    @media (max-width: 800px) {
        .nav-links { gap: 15px; }
        .hero-grid { gap: 28px; }
        .product-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
        .catalog-layout { grid-template-columns: 175px 1fr; gap: 12px; }
        .catalog-row { grid-template-columns: 115px 1fr auto; gap: 10px; }
        .catalog-row img { width: 115px; }
    }
    @media (max-width: 620px) {
        .shell { width: min(calc(100% - 30px), 480px); }
        .nav { min-height: 60px; }
        .menu-toggle { display: block; }
        .nav-links { display: none; position: absolute; top: 59px; right: 0; left: 0; padding: 12px 20px 18px; align-items: stretch; background: white; border-bottom: 1px solid var(--line); }
        .nav-links.open { display: flex; flex-direction: column; gap: 0; }
        .nav-links a { padding: 10px 0; }
        .nav-actions .button-outline { display: none; }
        .nav-actions { margin-left: auto; }
        .nav-actions .button { min-height: 34px; padding: 7px 10px; font-size: 10px; }
        .hero { padding: 31px 0 24px; }
        .hero-grid { grid-template-columns: 1fr; gap: 20px; }
        .hero-copy { max-width: none; }
        .hero h1 { max-width: 350px; font-size: 36px; }
        .hero-copy > p:not(.eyebrow) { font-size: 12px; }
        .hero-image { min-height: 210px; }
        .search-form { grid-template-columns: 1fr 1fr; }
        .search-form .field:first-child, .search-form .button { grid-column: 1 / -1; }
        .products-section { padding: 26px 0; }
        .product-grid { gap: 9px; }
        .product-photo { height: 112px; }
        .product-info { padding: 9px; }
        .product-info h3 { font-size: 12px; }
        .product-meta { font-size: 9px; }
        .product-info .button { min-height: 31px; padding: 7px; font-size: 10px; }
        .section-heading h2 { font-size: 19px; }
        .steps-grid { grid-template-columns: 1fr; gap: 14px; }
        .faq-grid { grid-template-columns: 1fr; gap: 15px; }
        .cta-inner, .footer-inner { align-items: flex-start; flex-direction: column; }
        .footer-inner { gap: 8px; }
        .page-main { padding: 25px 0 40px; }
        .page-top h1 { font-size: 25px; }
        .catalog-layout, .detail-grid, .form-layout { grid-template-columns: 1fr; }
        .filter-panel { display: grid; grid-template-columns: 1fr 1fr; gap: 0 10px; }
        .filter-panel h3 { grid-column: 1 / -1; }
        .filter-panel label { margin-top: 6px; }
        .catalog-toolbar { align-items: stretch; flex-direction: column; }
        .catalog-toolbar .field { max-width: none; }
        .catalog-row { grid-template-columns: 86px 1fr; }
        .catalog-row img { width: 86px; height: 80px; grid-row: span 2; }
        .catalog-row .button { grid-column: 2; justify-self: start; }
        .detail-photo { height: 220px; }
        .form-card { padding: 17px; }
        .form-grid { grid-template-columns: 1fr; }
        .dashboard-stats { gap: 7px; }
        .stat-card { padding: 10px; }
        .stat-card strong { font-size: 17px; }
        .dashboard-head { align-items: flex-start; flex-direction: column; }
        .login-view { grid-template-columns: 1fr; }
        .login-art { min-height: 265px; padding: 22px; }
        .login-art h1 { margin: 34px 0 8px; font-size: 30px; }
        .login-art p { margin-bottom: 0; }
        .login-art blockquote { display: none; }
        .login-panel { padding: 33px 22px 45px; }
    }
`;

const style = document.createElement("style");
style.textContent = css;
document.head.append(style);

const app = document.getElementById("app");
app.innerHTML = `
    <header class="site-header">
        <div class="shell nav">
            <a class="brand" href="#home" data-route="home" aria-label="AgriMatch beranda">
                <span class="brand-mark" aria-hidden="true">🌱</span><span class="brand-name">Agri<span>Match</span></span>
            </a>
            <nav class="nav-links" id="nav-links" aria-label="Navigasi utama">
                <a href="#home" data-route="home">Beranda</a>
                <a href="#catalog" data-route="catalog">Cari pasokan</a>
                <a href="#demand" data-route="demand">Buat permintaan</a>
                <a href="#dashboard" data-route="dashboard">Dashboard</a>
            </nav>
            <div class="nav-actions">
                <a class="button button-outline" href="#login" data-route="login">Masuk</a>
                <a class="button" href="#catalog" data-route="catalog">Cari produk <span aria-hidden="true">→</span></a>
            </div>
            <button type="button" class="menu-toggle" id="menu-toggle" aria-label="Buka menu" aria-expanded="false">☰</button>
        </div>
    </header>
    <main>
        <section class="view active" data-view="home">
            <div class="shell hero">
                <div class="hero-grid">
                    <div class="hero-copy">
                        <p class="eyebrow">Dari petani lokal, untuk kebutuhan Anda</p>
                        <h1>Panen lokal.<br>Pasokan yang <span>lebih cocok.</span></h1>
                        <p>Temukan hasil panen segar langsung dari petani sekitar. Lebih dekat, lebih transparan, dan lebih adil untuk semua.</p>
                        <div class="hero-actions">
                            <a class="button" href="#catalog" data-route="catalog">Temukan pemasok <span aria-hidden="true">→</span></a>
                            <a class="button button-outline" href="#demand" data-route="demand">Buat permintaan</a>
                        </div>
                    </div>
                    <div class="hero-image" role="img" aria-label="Lahan pertanian lokal yang hijau">
                        <div class="image-note"><strong>Segar dari kebun, siap untuk dapur Anda.</strong><span>Panen terpilih dari petani dan kelompok tani lokal</span></div>
                    </div>
                </div>
            </div>
            <div class="search-band"><div class="shell">
                <h3>Apa kebutuhan dapur usaha Anda?</h3>
                <form id="home-search" class="search-form">
                    <input class="field" name="query" placeholder="Cari komoditas, mis. cabai keriting" aria-label="Cari komoditas">
                    <select class="field" name="location" aria-label="Pilih lokasi"><option value="">Semua lokasi</option><option>Bandung</option><option>Brebes</option><option>Malang</option><option>Cianjur</option></select>
                    <select class="field" name="type" aria-label="Pilih kategori"><option value="">Semua kategori</option><option>Sayuran</option><option>Bumbu</option><option>Buah</option><option>Beras</option></select>
                    <button class="button" type="submit">Cari pasokan <span aria-hidden="true">→</span></button>
                </form>
            </div></div>
            <section class="shell products-section">
                <div class="section-heading"><div><p class="eyebrow">Pilihan minggu ini</p><h2>Bahan segar untuk setiap menu.</h2></div><a class="text-link" href="#catalog" data-route="catalog">Lihat semua produk →</a></div>
                <div class="product-grid" id="home-products"></div>
            </section>
            <section class="steps-section"><div class="shell">
                <div class="section-heading"><div><p class="eyebrow">Mudah dan langsung</p><h2>Dari mencari sampai sepakat.</h2></div></div>
                <div class="steps-grid">
                    <article class="step"><span class="step-number">01</span><div><h3>Ceritakan kebutuhan</h3><p>Pilih produk, jumlah, dan waktu yang Anda perlukan.</p></div></article>
                    <article class="step"><span class="step-number">02</span><div><h3>Temukan yang cocok</h3><p>Bandingkan pasokan dari petani terdekat secara praktis.</p></div></article>
                    <article class="step"><span class="step-number">03</span><div><h3>Sepakati & pesan</h3><p>Hubungi pemasok dan atur pengiriman langsung.</p></div></article>
                </div>
            </div></section>
            <section class="cta-band"><div class="shell cta-inner">
                <div><h2>Hasil panen Anda, peluang pasar baru.</h2><p>Hubungkan panen lokal dengan pembeli yang tepat.</p></div>
                <a class="button button-gold" href="#dashboard" data-route="dashboard">Mulai sebagai petani →</a>
            </div></section>
            <section class="faq-section"><div class="shell faq-grid">
                <div><p class="eyebrow">Bantuan singkat</p><h2>Ada yang ingin ditanyakan?</h2><p class="muted" style="font-size:11px">Informasi dasar untuk mulai menggunakan AgriMatch.</p></div>
                <div class="faq-list">
                    <details><summary>Bagaimana cara menemukan pemasok?</summary><p>Buka halaman Cari pasokan, lalu gunakan pencarian dan filter untuk menemukan hasil panen sesuai lokasi serta kategori.</p></details>
                    <details><summary>Apakah harga sudah termasuk pengiriman?</summary><p>Harga yang ditampilkan merupakan harga indikatif produk. Detail pengiriman dapat dikonfirmasi langsung dengan pemasok.</p></details>
                    <details><summary>Bagaimana petani menambahkan hasil panen?</summary><p>Buka Dashboard, pilih Tambah hasil panen, lalu lengkapi informasi komoditas, jumlah, harga, dan lokasi.</p></details>
                </div>
            </div></section>
            <footer class="site-footer"><div class="shell footer-inner"><span class="footer-brand">AgriMatch</span><span>Mempertemukan petani lokal dan pembeli dengan lebih baik.</span><span>© 2026 AgriMatch</span></div></footer>
        </section>
        <section class="view" data-view="catalog">
            <div class="shell page-main">
                <div class="page-top"><p class="eyebrow">Pasar hasil panen lokal</p><h1>Temukan pemasok yang cocok.</h1><p>Pasokan segar dari petani sekitar, dengan informasi harga dan ketersediaan yang jelas.</p></div>
                <div class="catalog-layout">
                    <aside class="filter-panel"><h3>Filter pasokan</h3>
                        <label for="filter-location">Lokasi</label><select id="filter-location" class="field"><option value="">Semua lokasi</option><option>Bandung</option><option>Brebes</option><option>Malang</option><option>Cianjur</option></select>
                        <label for="filter-type">Kategori</label><select id="filter-type" class="field"><option value="">Semua kategori</option><option>Sayuran</option><option>Bumbu</option><option>Buah</option><option>Beras</option></select>
                    </aside>
                    <div><div class="catalog-toolbar"><input id="catalog-search" class="field" placeholder="Cari nama produk atau pemasok" aria-label="Cari produk"><span class="muted" id="catalog-count"></span></div><div class="catalog-list" id="catalog-list"></div></div>
                </div>
            </div>
            <footer class="site-footer"><div class="shell footer-inner"><span class="footer-brand">AgriMatch</span><span>Produk lokal, pasar yang lebih dekat.</span><a href="#home" data-route="home">Kembali ke beranda ↑</a></div></footer>
        </section>
        <section class="view" data-view="detail">
            <div class="shell page-main">
                <p class="eyebrow"><a href="#catalog" data-route="catalog">Pasar pasokan</a> / Detail produk</p>
                <div class="detail-grid"><div>
                    <img id="detail-image" class="detail-photo" src="" alt="">
                    <div class="detail-content"><span class="tag" id="detail-category"></span><h1 id="detail-name"></h1><p id="detail-description"></p>
                        <div class="seller-line"><span class="seller-avatar">🌿</span><div><strong id="detail-seller"></strong><span id="detail-location"></span></div></div>
                        <div class="specs"><div class="spec"><span>Ketersediaan</span><strong id="detail-stock"></strong></div><div class="spec"><span>Kualitas panen</span><strong>Grade pilihan</strong></div><div class="spec"><span>Lokasi</span><strong id="detail-region"></strong></div></div>
                        <h3>Panen segar, langsung dari lokal.</h3><p>Informasi produk dan harga ditampilkan agar pembeli dapat memilih pasokan yang sesuai kebutuhan.</p>
                    </div>
                </div><aside class="panel purchase-panel">
                    <p class="eyebrow">Harga transparan</p><div class="product-price" style="font-size:21px" id="detail-price"></div><p class="muted" id="detail-price-note" style="font-size:10px"></p>
                    <hr style="border:0;border-top:1px solid var(--line);margin:16px 0"><h3>Buat permintaan pesanan</h3>
                    <form id="order-form"><label class="muted" for="order-quantity" style="display:block;margin:10px 0 5px;font-size:10px">Jumlah yang dibutuhkan</label><input class="field" id="order-quantity" name="quantity" type="number" min="1" value="25" required>
                        <label class="muted" for="order-date" style="display:block;margin:10px 0 5px;font-size:10px">Tanggal dibutuhkan</label><input class="field" id="order-date" name="date" type="date" required>
                        <button class="button" type="submit">Kirim permintaan →</button>
                    </form><p class="muted" style="margin:12px 0 0;font-size:9px">Permintaan dicatat sebagai demo lokal dan belum dikirim ke pemasok.</p>
                </aside></div>
            </div>
            <footer class="site-footer"><div class="shell footer-inner"><span class="footer-brand">AgriMatch</span><a href="#catalog" data-route="catalog">← Kembali ke pasokan</a></div></footer>
        </section>
        <section class="view" data-view="demand">
            <div class="shell page-main"><div class="page-top"><p class="eyebrow">Untuk restoran, toko, dan usaha</p><h1>Pesanan usaha Anda.</h1><p>Ceritakan kebutuhan pasokan, lalu temukan petani yang sesuai.</p></div>
                <div class="form-layout"><div class="form-card"><h2>Buat permintaan pasokan</h2><p>Lengkapi detail berikut agar pemasok dapat memahami kebutuhan Anda.</p>
                    <form id="demand-form" class="form-stack"><div class="form-grid">
                        <div><label for="demand-business">Nama usaha</label><input class="field" id="demand-business" name="business" placeholder="Contoh: Dapur Nusantara" required></div>
                        <div><label for="demand-product">Komoditas</label><select class="field" id="demand-product" name="product" required><option value="">Pilih komoditas</option><option>Cabai keriting merah</option><option>Bawang merah</option><option>Tomat segar</option><option>Sayuran campur</option><option>Beras lokal</option></select></div>
                        <div><label for="demand-quantity">Jumlah per pesanan (kg)</label><input class="field" id="demand-quantity" name="quantity" type="number" min="1" placeholder="Contoh: 50" required></div>
                        <div><label for="demand-frequency">Frekuensi pasokan</label><select class="field" id="demand-frequency" name="frequency"><option>Mingguan</option><option>Harian</option><option>Bulanan</option><option>Sekali pesan</option></select></div>
                        <div><label for="demand-location">Lokasi pengiriman</label><input class="field" id="demand-location" name="location" placeholder="Kota atau kecamatan" required></div>
                        <div><label for="demand-date">Mulai dibutuhkan</label><input class="field" id="demand-date" name="date" type="date" required></div>
                    </div><label for="demand-notes">Catatan tambahan</label><textarea class="field" id="demand-notes" name="notes" placeholder="Ukuran, kualitas, atau kebutuhan khusus"></textarea><button class="button" type="submit">Kirim permintaan →</button></form>
                </div><aside class="help-card"><p class="eyebrow">Cara kerja</p><h3>Pasokan sesuai kebutuhan.</h3><ul><li>Tentukan produk dan jumlah yang dibutuhkan.</li><li>Bagikan lokasi dan jadwal pasokan.</li><li>Petani dapat menanggapi permintaan Anda.</li></ul><p>Belum yakin jumlahnya? Anda bisa berdiskusi langsung dengan pemasok sebelum menyepakati pesanan.</p></aside></div>
            </div><footer class="site-footer"><div class="shell footer-inner"><span class="footer-brand">AgriMatch</span><a href="#home" data-route="home">Kembali ke beranda ↑</a></div></footer>
        </section>
        <section class="view" data-view="dashboard">
            <div class="shell page-main">
                <div class="dashboard-head"><div><p class="eyebrow">Portal petani dan kelompok tani</p><h2>Selamat pagi, Kelompok Tani Balijaya.</h2><p class="muted" style="margin:5px 0 0;font-size:11px">Pantau hasil panen dan pasokan Anda.</p></div><button class="button" type="button" id="toggle-listing" aria-expanded="false">＋ Tambah hasil panen</button></div>
                <div class="dashboard-stats"><div class="stat-card"><span>Pasokan aktif</span><strong id="stat-products">3 komoditas</strong></div><div class="stat-card"><span>Permintaan diterima</span><strong id="stat-orders">2 permintaan</strong></div><div class="stat-card"><span>Nilai pasokan</span><strong id="stat-value">Rp 1,5 jt</strong></div></div>
                <div class="form-card hidden" id="listing-form-card" style="margin-bottom:18px"><h3>Tambah hasil panen</h3>
                    <form id="listing-form" class="form-stack"><div class="form-grid">
                        <div><label for="listing-name">Nama komoditas</label><input class="field" id="listing-name" name="name" required placeholder="Misalnya: Tomat segar"></div>
                        <div><label for="listing-category">Kategori</label><select class="field" id="listing-category" name="category" required><option>Sayuran</option><option>Bumbu</option><option>Buah</option><option>Beras</option></select></div>
                        <div><label for="listing-stock">Ketersediaan (kg)</label><input class="field" id="listing-stock" name="stock" type="number" min="1" required placeholder="100"></div>
                        <div><label for="listing-price">Harga per kg (Rp)</label><input class="field" id="listing-price" name="price" type="number" min="1" required placeholder="18000"></div>
                        <div><label for="listing-place">Lokasi</label><input class="field" id="listing-place" name="location" required placeholder="Kota atau kecamatan"></div>
                    </div><button class="button" type="submit">Simpan hasil panen</button></form>
                </div>
                <div class="panel" style="margin-bottom:14px"><p class="eyebrow" style="margin-bottom:4px">Status akun</p><strong style="font-size:12px">Profil kelompok tani</strong><span class="tag" style="margin-left:8px">Menunggu verifikasi</span><p class="muted" style="margin:7px 0 0;font-size:10px">Lengkapi profil untuk membangun kepercayaan pembeli.</p></div>
                <h3 style="margin:0 0 10px">Produk & ketersediaan</h3><div class="table-wrap"><table><thead><tr><th>Komoditas</th><th>Jumlah tersedia</th><th>Harga / kg</th><th>Lokasi</th><th>Status</th></tr></thead><tbody id="dashboard-list"></tbody></table></div>
            </div><footer class="site-footer"><div class="shell footer-inner"><span class="footer-brand">AgriMatch</span><a href="#home" data-route="home">Kembali ke beranda ↑</a></div></footer>
        </section>
        <section class="view" data-view="login"><div class="login-view">
            <div class="login-art"><a class="brand" href="#home" data-route="home"><span class="brand-mark">🌱</span><span class="brand-name">Agri<span>Match</span></span></a><div><h1>Petani dan pelanggan, lebih dekat.</h1><p>Ruang untuk menemukan pasokan lokal, berbagi kebutuhan, dan membangun kemitraan yang saling menguntungkan.</p><blockquote>Mulai dari hasil panen yang baik, tumbuh bersama pasar yang tepat.</blockquote></div><span style="font-size:9px;color:#a8c1ad">© 2026 AgriMatch</span></div>
            <div class="login-panel"><div class="login-form"><p class="eyebrow">Selamat datang kembali</p><h2>Mulai perjalanan Anda.</h2><p>Masuk untuk mengelola pasokan atau permintaan Anda.</p><form id="login-form" class="form-stack"><label for="login-email">Email</label><input class="field" id="login-email" name="email" type="email" placeholder="nama@email.com" required><label for="login-password">Kata sandi</label><input class="field" id="login-password" name="password" type="password" placeholder="Masukkan kata sandi" required><button class="button" type="submit">Masuk ke AgriMatch →</button></form><p style="margin-top:17px">Belum punya akun? <a class="text-link" href="#demand" data-route="demand">Buat permintaan usaha</a></p></div></div>
        </div></section>
    </main>
    <div id="toast" class="toast hidden" role="status" aria-live="polite"></div>
`;

const storageKeys = {
    products: "agrimatch-products",
    farmerListings: "agrimatch-farmer-listings",
    requests: "agrimatch-requests"
};
const readStoredArray = (key, fallback) => {
    try {
        const stored = localStorage.getItem(key);
        if (!stored) return fallback;
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed)) return parsed;
        console.error(`Data tersimpan untuk ${key} bukan daftar yang valid.`);
    } catch (error) {
        console.error(`Tidak dapat membaca data ${key}.`, error);
    }
    return fallback;
};
let products = readStoredArray(storageKeys.products, productsSeed);
let farmerListingIds = readStoredArray(storageKeys.farmerListings, [1, 2, 3]);
let requests = readStoredArray(storageKeys.requests, []);
let currentProduct = products[0] || productsSeed[0];
let toastTimer;

const formatRupiah = value => `Rp${Number(value).toLocaleString("id-ID")}`;
const escapeHtml = value => {
    const node = document.createElement("span");
    node.textContent = String(value);
    return node.innerHTML;
};
const todayLocal = () => {
    const now = new Date();
    now.setMinutes(now.getMinutes() - now.getTimezoneOffset());
    return now.toISOString().slice(0, 10);
};

function showToast(message) {
    const toast = document.getElementById("toast");
    toast.textContent = message;
    toast.classList.remove("hidden");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.add("hidden"), 3600);
}

function saveState() {
    try {
        localStorage.setItem(storageKeys.products, JSON.stringify(products));
        localStorage.setItem(storageKeys.farmerListings, JSON.stringify(farmerListingIds));
        localStorage.setItem(storageKeys.requests, JSON.stringify(requests));
    } catch (error) {
        console.error("Tidak dapat menyimpan perubahan AgriMatch.", error);
        showToast("Perubahan hanya tersimpan sementara di sesi ini.");
    }
}

function productCard(product) {
    return `<article class="product-card">
        <img class="product-photo" src="${escapeHtml(product.image)}" alt="${escapeHtml(product.name)}" loading="lazy">
        <div class="product-info"><span class="tag">${escapeHtml(product.category)}</span><h3>${escapeHtml(product.name)}</h3>
        <div class="product-meta"><span>${escapeHtml(product.location)}</span><span>${product.stock} ${escapeHtml(product.unit)} tersedia</span></div>
        <div class="product-price">${formatRupiah(product.price)} <small>/ ${escapeHtml(product.unit)}</small></div>
        <button class="button button-small" type="button" data-product="${Number(product.id)}">Lihat produk →</button></div>
    </article>`;
}

function renderHomeProducts() {
    document.getElementById("home-products").innerHTML = products.slice(0, 4).map(productCard).join("");
}

function renderCatalog() {
    const query = document.getElementById("catalog-search").value.trim().toLocaleLowerCase("id");
    const location = document.getElementById("filter-location").value;
    const category = document.getElementById("filter-type").value;
    const matches = products.filter(product =>
        (!query || `${product.name} ${product.seller} ${product.location}`.toLocaleLowerCase("id").includes(query)) &&
        (!location || product.location === location) &&
        (!category || product.category === category)
    );
    document.getElementById("catalog-count").textContent = `${matches.length} pasokan ditemukan`;
    document.getElementById("catalog-list").innerHTML = matches.length ? matches.map(product => `
        <article class="catalog-row">
            <img src="${escapeHtml(product.image)}" alt="${escapeHtml(product.name)}" loading="lazy">
            <div><span class="tag">${escapeHtml(product.category)}</span><h3>${escapeHtml(product.name)}</h3>
                <p>${escapeHtml(product.seller)} · ${escapeHtml(product.location)} · Tersedia ${product.stock} ${escapeHtml(product.unit)}</p>
                <div class="product-price" style="margin-top:7px">${formatRupiah(product.price)} <small>/ ${escapeHtml(product.unit)}</small></div>
            </div><button class="button button-small" type="button" data-product="${Number(product.id)}">Lihat pasokan →</button>
        </article>`).join("") : `<div class="panel muted" style="font-size:12px">Belum ada pasokan yang cocok. Coba ubah kata kunci atau filter lokasi.</div>`;
}

function renderDashboard() {
    const farmerProducts = products.filter(product => farmerListingIds.includes(product.id));
    const totalValue = farmerProducts.reduce((total, product) => total + Number(product.price) * Number(product.stock), 0);
    document.getElementById("dashboard-list").innerHTML = farmerProducts.map(product => `
        <tr><td><strong>${escapeHtml(product.name)}</strong></td><td>${Number(product.stock)} ${escapeHtml(product.unit)}</td>
        <td>${formatRupiah(product.price)}</td><td>${escapeHtml(product.location)}</td>
        <td><span class="tag">${product.stock > 0 ? "Tersedia" : "Habis"}</span></td></tr>`).join("");
    document.getElementById("stat-products").textContent = `${farmerProducts.length} komoditas`;
    document.getElementById("stat-orders").textContent = `${2 + requests.filter(request => request.type === "order").length} permintaan`;
    document.getElementById("stat-value").textContent = `Rp${new Intl.NumberFormat("id-ID", { notation: "compact", maximumFractionDigits: 1 }).format(totalValue)}`;
}

function showPage(page, updateHash = true) {
    const available = ["home", "catalog", "detail", "demand", "dashboard", "login"];
    const selected = available.includes(page) ? page : "home";
    document.querySelectorAll("[data-view]").forEach(view => view.classList.toggle("active", view.dataset.view === selected));
    document.querySelectorAll(".nav-links [data-route]").forEach(link => {
        const active = link.dataset.route === selected;
        link.classList.toggle("active", active);
        if (active) link.setAttribute("aria-current", "page");
        else link.removeAttribute("aria-current");
    });
    document.getElementById("nav-links").classList.remove("open");
    document.getElementById("menu-toggle").setAttribute("aria-expanded", "false");
    document.getElementById("menu-toggle").setAttribute("aria-label", "Buka menu");
    document.getElementById("menu-toggle").textContent = "☰";
    if (updateHash && location.hash !== `#${selected}`) history.pushState({ page: selected }, "", `#${selected}`);
    window.scrollTo({ top: 0, behavior: "smooth" });
}

function openProduct(id) {
    const selectedProduct = products.find(product => product.id === Number(id));
    if (!selectedProduct) {
        showToast("Produk tidak ditemukan. Muat ulang halaman dan coba lagi.");
        return;
    }
    currentProduct = selectedProduct;
    document.getElementById("detail-image").src = currentProduct.image;
    document.getElementById("detail-image").alt = currentProduct.name;
    document.getElementById("detail-category").textContent = currentProduct.category;
    document.getElementById("detail-name").textContent = currentProduct.name;
    document.getElementById("detail-description").textContent = currentProduct.description;
    document.getElementById("detail-seller").textContent = currentProduct.seller;
    document.getElementById("detail-location").textContent = `Petani lokal · ${currentProduct.location}`;
    document.getElementById("detail-stock").textContent = `${currentProduct.stock} ${currentProduct.unit}`;
    document.getElementById("detail-region").textContent = currentProduct.location;
    document.getElementById("detail-price").textContent = `${formatRupiah(currentProduct.price)} / ${currentProduct.unit}`;
    document.getElementById("detail-price-note").textContent = `Harga indikatif per ${currentProduct.unit}. Konfirmasi detail dengan pemasok.`;
    const quantity = document.getElementById("order-quantity");
    quantity.max = currentProduct.stock;
    quantity.value = Math.min(25, currentProduct.stock);
    document.getElementById("order-form").querySelector("button[type='submit']").disabled = currentProduct.stock < 1;
    document.getElementById("order-date").min = todayLocal();
    showPage("detail");
}

document.addEventListener("click", event => {
    const productButton = event.target.closest("[data-product]");
    if (productButton) {
        openProduct(productButton.dataset.product);
        return;
    }
    const routeLink = event.target.closest("[data-route]");
    if (routeLink) {
        event.preventDefault();
        showPage(routeLink.dataset.route);
    }
});

document.getElementById("home-search").addEventListener("submit", event => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    document.getElementById("catalog-search").value = form.get("query") || "";
    document.getElementById("filter-location").value = form.get("location") || "";
    document.getElementById("filter-type").value = form.get("type") || "";
    renderCatalog();
    showPage("catalog");
});
document.getElementById("catalog-search").addEventListener("input", renderCatalog);
document.getElementById("filter-location").addEventListener("change", renderCatalog);
document.getElementById("filter-type").addEventListener("change", renderCatalog);

document.getElementById("menu-toggle").addEventListener("click", event => {
    const menu = document.getElementById("nav-links");
    const expanded = menu.classList.toggle("open");
    event.currentTarget.setAttribute("aria-expanded", String(expanded));
    event.currentTarget.setAttribute("aria-label", expanded ? "Tutup menu" : "Buka menu");
    event.currentTarget.textContent = expanded ? "×" : "☰";
});

document.getElementById("order-form").addEventListener("submit", event => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const quantity = Number(form.get("quantity"));
    if (quantity > currentProduct.stock) {
        showToast(`Jumlah melebihi stok yang tersedia (${currentProduct.stock} ${currentProduct.unit}).`);
        return;
    }
    requests.push({ type: "order", productId: currentProduct.id, quantity, date: form.get("date"), createdAt: new Date().toISOString() });
    saveState();
    renderDashboard();
    showToast(`Permintaan ${quantity} ${currentProduct.unit} ${currentProduct.name} dicatat untuk ${currentProduct.seller}.`);
    event.currentTarget.reset();
    openProduct(currentProduct.id);
});

document.getElementById("demand-form").addEventListener("submit", event => {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(event.currentTarget).entries());
    requests.push({ type: "demand", ...data, createdAt: new Date().toISOString() });
    saveState();
    event.currentTarget.reset();
    renderDashboard();
    showToast(`Permintaan pasokan dari ${data.business} dicatat di perangkat ini.`);
});
document.getElementById("demand-date").min = todayLocal();

document.getElementById("toggle-listing").addEventListener("click", event => {
    const formCard = document.getElementById("listing-form-card");
    const isHidden = formCard.classList.toggle("hidden");
    event.currentTarget.setAttribute("aria-expanded", String(!isHidden));
    if (!isHidden) document.getElementById("listing-name").focus();
});

document.getElementById("listing-form").addEventListener("submit", event => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const newListing = {
        id: Date.now(),
        name: String(data.get("name")).trim(),
        category: String(data.get("category")),
        location: String(data.get("location")).trim(),
        seller: "Kelompok Tani Balijaya",
        price: Number(data.get("price")),
        stock: Number(data.get("stock")),
        unit: "kg",
        image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=850&q=80",
        description: "Hasil panen lokal baru dari Kelompok Tani Balijaya."
    };
    products.push(newListing);
    farmerListingIds.push(newListing.id);
    saveState();
    renderHomeProducts();
    renderCatalog();
    renderDashboard();
    event.currentTarget.reset();
    document.getElementById("listing-form-card").classList.add("hidden");
    document.getElementById("toggle-listing").setAttribute("aria-expanded", "false");
    showToast("Hasil panen ditambahkan dan tersimpan di perangkat ini.");
});

document.getElementById("login-form").addEventListener("submit", event => {
    event.preventDefault();
    showToast("Mode demo: layanan akun belum terhubung.");
});

window.addEventListener("popstate", () => showPage(location.hash.slice(1) || "home", false));
renderHomeProducts();
renderCatalog();
renderDashboard();
const initialPage = location.hash.slice(1);
if (["catalog", "detail", "demand", "dashboard", "login"].includes(initialPage)) showPage(initialPage, false);
