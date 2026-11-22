const productsSeed = [
    { id: 1, name: "Cabai keriting merah", category: "Bumbu", location: "Kabupaten Toba", area: "Balige", seller: "Kelompok Tani Balige", price: 38000, stock: 120, unit: "kg", availableOn: "2026-11-24", image: "https://images.unsplash.com/photo-1588252303782-cb80119abd6d?auto=format&fit=crop&w=850&q=80", description: "Cabai keriting merah segar dari petani Balige. Dipetik dan disortir untuk menjaga kualitas selama pengiriman." },
    { id: 2, name: "Bawang merah", category: "Bumbu", location: "Kabupaten Toba", area: "Laguboti", seller: "Tani Sejahtera", price: 32000, stock: 200, unit: "kg", availableOn: "2026-11-25", image: "https://images.unsplash.com/photo-1508747703725-719777637510?auto=format&fit=crop&w=850&q=80", description: "Bawang merah lokal pilihan yang cocok untuk kebutuhan dapur rumah makan maupun usaha kuliner." },
    { id: 3, name: "Tomat segar", category: "Sayuran", location: "Kabupaten Toba", area: "Porsea", seller: "Kebun Lestari", price: 12000, stock: 150, unit: "kg", availableOn: "2026-11-26", image: "https://images.unsplash.com/photo-1546094096-0df4bcaaa337?auto=format&fit=crop&w=850&q=80", description: "Tomat segar dari kebun lokal, dipanen berkala agar pasokan tetap segar dan terjaga." },
    { id: 4, name: "Sayuran segar", category: "Sayuran", location: "Kabupaten Toba", area: "Siantar Narumonda", seller: "Koperasi Tani Narumonda", price: 8000, stock: 80, unit: "kg", availableOn: "2026-11-26", image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=850&q=80", description: "Aneka sayuran hijau lokal yang dipanen segar dari kebun di sekitar Toba." },
    { id: 5, name: "Cabai keriting merah", category: "Bumbu", location: "Kabupaten Toba", area: "Laguboti", seller: "Tani Sejahtera", price: 39000, stock: 85, unit: "kg", availableOn: "2026-11-24", image: "https://images.unsplash.com/photo-1588252303782-cb80119abd6d?auto=format&fit=crop&w=850&q=80", description: "Cabai keriting merah segar yang dipanen sesuai kebutuhan dan tersedia untuk pesanan rutin." },
    { id: 6, name: "Cabai keriting merah", category: "Bumbu", location: "Kabupaten Toba", area: "Porsea", seller: "Kebun Lestari", price: 40000, stock: 60, unit: "kg", availableOn: "2026-11-25", image: "https://images.unsplash.com/photo-1588252303782-cb80119abd6d?auto=format&fit=crop&w=850&q=80", description: "Cabai keriting lokal dengan ketersediaan yang diperbarui langsung oleh pemasok." }
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
    .hero-image { position: relative; min-height: 320px; overflow: hidden; border-radius: 13px; background: #dce9d2 url("https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1200&q=85") center 48% / cover; }
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
        .menu-toggle { display: block; width: auto; padding: 0 4px; border: 0; background: transparent; font-size: 11px; font-weight: 700; }
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
    :root {
        --green-950: #153f2d;
        --green-900: #194b35;
        --green-800: #287044;
        --green-700: #347b43;
        --green-100: #edf2e8;
        --green-50: #f4f7f0;
        --cream: #fafbf7;
        --ink: #1d3829;
        --muted: #78877b;
        --line: #e1e9df;
    }
    body { background: #fff; }
    .shell { width: min(1120px, calc(100% - 48px)); }
    .site-header { background: #fbfcf9; }
    .nav { min-height: 62px; gap: 20px; }
    .brand { gap: 5px; }
    .brand-mark { width: 41px; height: 39px; background: transparent; border-radius: 0; }
    .brand-mark svg { width: 100%; height: 100%; }
    .brand-name { font-size: 19px; }
    .brand-caption { display: block; margin-top: -3px; color: var(--muted); font-size: 8px; font-weight: 500; letter-spacing: 0; }
    .nav-links { gap: clamp(18px, 4vw, 48px); font-size: 12px; }
    .nav-actions { gap: 20px; }
    .button { min-height: 37px; border-radius: 6px; font-size: 12px; }
    .button-outline { border-color: transparent; background: transparent; }
    .hero { padding: 16px 0 31px; }
    .hero-grid { grid-template-columns: 1fr .83fr; gap: 52px; }
    .hero-copy { max-width: 460px; padding-left: 18px; }
    .hero h1 { margin-bottom: 10px; font-size: clamp(35px, 4vw, 48px); line-height: 1.26; }
    .hero h1 span { color: inherit; }
    .hero-copy > p:not(.eyebrow) { max-width: 470px; margin-bottom: 25px; color: var(--muted); font-size: 14px; }
    .hero .eyebrow { font-size: 10px; }
    .hero-image { min-height: 265px; border-radius: 11px; }
    .image-note { right: 12px; bottom: 11px; left: 12px; padding: 11px 13px; }
    .image-note strong { font-size: 12px; }
    .search-band { padding: 20px 0 24px; border: 0; }
    .search-band h3 { margin-bottom: 10px; font-size: 14px; }
    .search-form { grid-template-columns: 1.1fr 1fr 1fr 1fr auto; gap: 10px; }
    .search-control { min-width: 0; padding: 7px 10px 5px; border-radius: 6px; background: var(--green-50); }
    .search-control label { display: block; margin-bottom: 2px; color: var(--muted); font-size: 10px; }
    .search-control .field { min-height: 24px; padding: 0; border: 0; border-radius: 0; background: transparent; box-shadow: none; font-size: 12px; }
    .search-form > .button { min-width: 120px; }
    .products-section { padding: 24px 0 28px; }
    .section-heading { margin-bottom: 14px; }
    .section-heading h2 { font-size: 22px; }
    .section-heading .eyebrow { margin-bottom: 5px; font-size: 10px; }
    .product-grid { gap: 13px; }
    .product-card { border: 0; border-radius: 7px; }
    .product-card:hover { box-shadow: none; }
    .product-photo { height: 126px; border-radius: 8px; }
    .product-info { padding: 8px 0 0; }
    .product-info h3 { margin: 0 0 2px; font-size: 13px; }
    .product-meta { justify-content: flex-start; margin: 5px 0; font-size: 10px; }
    .product-info .button { margin-top: 7px; min-height: 32px; padding: 6px 10px; color: var(--green-700); background: white; border-color: var(--line); font-size: 11px; }
    .steps-section { padding: 10px 0 34px; background: #fff; }
    .steps-section .section-heading h2 { font-size: 22px; }
    .steps-grid { gap: 24px; margin-top: 14px; }
    .step-number { color: var(--green-700); }
    .step h3 { font-size: 13px; }
    .step p { font-size: 11px; }
    .cta-band { padding: 28px 0; }
    .cta-inner { display: grid; grid-template-columns: 1fr 1fr; gap: 35px; }
    .cta-band .eyebrow { color: #d3e2cf; font-size: 10px; }
    .cta-band h2 { max-width: 390px; font-size: 24px; }
    .cta-band p { font-size: 12px; }
    .button-gold { width: min(250px, 100%); }
    .faq-section { padding: 26px 0 30px; }
    .faq-grid { grid-template-columns: .8fr 1.2fr; gap: 40px; }
    .faq-grid h2 { font-size: 21px; }
    .faq-list details { padding: 8px 0; border: 0; background: transparent; }
    .faq-list summary { font-size: 11px; }
    .faq-list p { font-size: 10px; }
    .faq-list > div { padding: 7px 0; }
    .faq-list > div strong { font-size: 11px; }
    .faq-list > div p { margin: 5px 0 0; color: var(--muted); font-size: 10px; }
    .site-footer { padding: 24px 0; }
    .footer-inner { display: grid; grid-template-columns: 1.4fr 1fr 1fr; align-items: start; gap: 25px; }
    .footer-about { display: grid; gap: 5px; }
    .footer-about small, .footer-column a, .footer-copy { color: #c4d2c7; font-size: 10px; }
    .page-main { padding: 32px 0 38px; }
    .page-top h1 { font-size: 30px; }
    .catalog-page .page-top { margin-bottom: 18px; }
    .catalog-page .page-top h1 { font-size: 28px; }
    .catalog-search-form { display: grid; grid-template-columns: repeat(5, minmax(0, 1fr)) auto; gap: 10px; margin: 15px 0 26px; }
    .catalog-search-form .search-control { background: #fff; border: 1px solid var(--line); }
    .catalog-heading { display: flex; justify-content: space-between; gap: 16px; align-items: start; margin-bottom: 14px; }
    .catalog-heading h2 { margin: 0; font-size: 20px; }
    .catalog-heading p { margin: 4px 0 0; color: var(--muted); font-size: 11px; }
    .catalog-sort { width: auto; min-height: 34px; border: 0; background: transparent; font-size: 11px; }
    .catalog-list { gap: 10px; }
    .catalog-row { grid-template-columns: 112px 1fr 180px; gap: 16px; padding: 10px; border-radius: 8px; }
    .catalog-row img { width: 112px; height: 80px; border-radius: 7px; }
    .catalog-row h3 { margin: 4px 0; font-size: 13px; }
    .catalog-row p { font-size: 11px; }
    .catalog-row .product-price { text-align: center; font-size: 16px; }
    .catalog-row .button { justify-self: stretch; }
    .catalog-action { display: grid; align-content: center; gap: 12px; }
    .catalog-note { margin-top: 19px; color: var(--muted); font-size: 10px; }
    .detail-crumb { margin: 0 0 18px; color: var(--muted); font-size: 11px; }
    .detail-grid { grid-template-columns: .85fr 1.25fr; gap: 24px; }
    .detail-photo { height: 220px; }
    .detail-content { padding-top: 14px; }
    .detail-summary .seller-line { display: flex; align-items: center; gap: 5px; margin: 9px 0; padding: 0; background: transparent; }
    .detail-summary .seller-line strong, .detail-summary .seller-line span { display: inline; color: var(--ink); font-size: 11px; }
    .detail-content .eyebrow { margin-bottom: 6px; font-size: 10px; }
    .detail-content h1 { font-size: 32px; }
    .detail-content .detail-price { color: var(--green-700); font-size: 24px; font-weight: 750; }
    .detail-content .seller-line { margin: 10px 0; padding: 0; background: transparent; }
    .detail-content .seller-avatar { display: none; }
    .detail-content .seller-line strong, .detail-content .seller-line span { display: inline; }
    .detail-content .seller-line span { margin-left: 5px; color: var(--ink); }
    .detail-copy { color: var(--muted); font-size: 12px; }
    .purchase-panel { padding: 16px; border: 0; background: var(--green-50); }
    .purchase-panel h3 { margin-bottom: 10px; font-size: 14px; }
    .order-fields { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; }
    .order-total { display: flex; justify-content: space-between; gap: 16px; align-items: center; margin: 12px 0 4px; font-size: 12px; }
    .order-total strong { color: var(--green-950); font-size: 16px; }
    .order-help { margin: 10px 0 14px; color: var(--muted); font-size: 10px; }
    .order-actions { display: grid; grid-template-columns: .8fr 1.2fr; gap: 9px; }
    .related-section { margin-top: 32px; }
    .related-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 13px; }
    .related-card { display: flex; align-items: center; gap: 10px; padding: 8px; border-radius: 8px; background: var(--green-50); }
    .related-card img { width: 68px; height: 62px; border-radius: 7px; object-fit: cover; }
    .related-card strong { display: block; font-size: 12px; }
    .related-card small { color: var(--green-700); font-size: 10px; }
    .orders-layout { display: grid; grid-template-columns: 1.55fr 1fr; gap: 22px; align-items: start; }
    .order-tabs { display: flex; gap: 9px; margin: 18px 0; }
    .order-tab { flex: 1; min-height: 38px; padding: 8px 12px; border: 0; border-radius: 7px; background: var(--green-100); color: var(--muted); text-align: left; font-size: 11px; font-weight: 700; }
    .order-tab.active { background: var(--green-700); color: white; }
    .order-list { display: grid; gap: 12px; }
    .buyer-order { padding: 16px; border: 1px solid var(--line); border-radius: 9px; background: white; }
    .order-meta { display: flex; justify-content: space-between; gap: 10px; color: var(--muted); font-size: 10px; }
    .buyer-order h3 { margin: 10px 0 3px; font-size: 14px; }
    .buyer-order p { color: var(--muted); font-size: 11px; }
    .order-status-row { display: flex; justify-content: space-between; align-items: center; gap: 12px; margin: 12px 0; }
    .order-total-price { color: var(--green-950); font-size: 17px; font-weight: 800; }
    .order-actions-inline { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 10px; }
    .button-soft { color: var(--green-700); background: var(--green-50); }
    .button-soft:hover { color: white; background: var(--green-700); }
    .chat-panel { padding: 16px; border: 1px solid var(--line); border-radius: 9px; background: white; }
    .chat-panel h3 { font-size: 14px; }
    .chat-bubble { margin: 12px 0; padding: 13px; border-radius: 8px; background: var(--green-50); color: #526357; font-size: 11px; }
    .chat-bubble.reply { margin-left: 16px; background: var(--green-100); }
    .chat-form { display: flex; gap: 8px; margin-top: 32px; }
    .chat-form .field { background: var(--green-50); font-size: 12px; }
    .dashboard-stats { grid-template-columns: repeat(4, 1fr); gap: 13px; }
    .stat-card { min-height: 80px; padding: 13px; border: 0; background: var(--green-100); }
    .stat-card span { font-size: 11px; }
    .stat-card strong { font-size: 18px; }
    .stat-card.featured { background: var(--green-950); }
    .stat-card.featured span, .stat-card.featured strong { color: white; }
    .dashboard-head { margin-bottom: 18px; }
    .dashboard-head h1 { margin-bottom: 3px; font-size: 22px; }
    .dashboard-head p { margin-bottom: 0; color: var(--muted); font-size: 12px; }
    .table-wrap { margin-bottom: 18px; }
    .dashboard-table th, .dashboard-table td { padding: 11px 13px; font-size: 10px; }
    .dashboard-product { display: flex; align-items: center; gap: 9px; }
    .dashboard-product img { width: 40px; height: 34px; border-radius: 6px; object-fit: cover; }
    .dashboard-product strong { font-size: 11px; }
    .dashboard-bottom { display: grid; grid-template-columns: 1.7fr .9fr; gap: 16px; }
    .request-card, .membership-card { padding: 14px; border-radius: 8px; background: var(--green-50); }
    .request-card h3, .membership-card h3 { margin: 0 0 6px; font-size: 14px; }
    .request-card p, .membership-card p { margin: 0 0 9px; color: var(--muted); font-size: 10px; }
    .membership-card { background: #fbf0d7; }
    .register-view { display: grid; grid-template-columns: .82fr 1.15fr; gap: 54px; align-items: stretch; padding: 26px 0 40px; }
    .register-art { display: flex; flex-direction: column; justify-content: center; padding: 28px; border-radius: 9px; background: var(--green-950); color: white; }
    .register-art .eyebrow { color: #d6e0bd; }
    .register-art h1 { margin: 26px 0; color: white; font-size: 31px; }
    .register-art p { color: #c7d5ca; font-size: 13px; }
    .register-art li { margin: 12px 0; color: #dce5dc; font-size: 12px; }
    .register-form h1 { margin: 0; font-size: 28px; }
    .register-form > p { color: var(--muted); font-size: 12px; }
    .role-switch { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin: 15px 0; }
    .role-button { min-height: 42px; border: 0; border-radius: 7px; background: var(--green-50); color: var(--green-700); font-size: 12px; font-weight: 700; }
    .role-button.active { background: var(--green-700); color: white; }
    .register-form .field { border: 0; background: var(--green-50); }
    .register-form .form-grid { gap: 3px 12px; }
    .register-note { margin: 4px 0 14px; color: var(--muted); font-size: 10px; }
    .login-view { min-height: calc(100vh - 62px); }
    .login-art { padding: 38px clamp(25px, 7vw, 95px); }
    .login-form h2 { font-size: 25px; }
    .login-form .field { background: var(--green-50); }
    @media (max-width: 800px) {
        .hero-grid { gap: 25px; }
        .catalog-search-form { grid-template-columns: repeat(3, 1fr); }
        .catalog-row { grid-template-columns: 100px 1fr 130px; gap: 10px; }
        .catalog-row img { width: 100px; }
        .register-view { gap: 24px; }
    }
    @media (max-width: 620px) {
        .shell { width: min(calc(100% - 40px), 480px); }
        .nav { min-height: 58px; }
        .brand-mark { width: 36px; height: 34px; }
        .brand-name { font-size: 16px; }
        .brand-caption { font-size: 6px; }
        .nav-actions .button:not(.button-outline) { display: none; }
        .nav-links { top: 57px; flex-direction: column; gap: 0; }
        .hero { padding: 28px 0 22px; }
        .hero-grid { grid-template-columns: 1fr; gap: 20px; }
        .hero-copy { padding: 0; }
        .hero h1 { max-width: 370px; font-size: 36px; }
        .hero-copy > p:not(.eyebrow) { font-size: 13px; }
        .hero-actions { display: grid; grid-template-columns: 1fr; }
        .hero-actions .button { min-height: 42px; justify-content: flex-start; padding-left: 14px; }
        .hero-image { min-height: 230px; }
        .search-band { padding: 22px 0 14px; }
        .search-band h3 { max-width: 280px; margin-bottom: 12px; font-size: 20px; }
        .search-form, .catalog-search-form { grid-template-columns: 1fr; gap: 9px; }
        .search-control { min-height: 54px; padding: 8px 12px; }
        .search-control label { font-size: 9px; }
        .search-control .field { min-height: 22px; font-size: 12px; }
        .search-form > .button { min-height: 42px; width: 100%; }
        .products-section { padding-top: 22px; }
        .section-heading { align-items: flex-start; }
        .section-heading h2 { max-width: 270px; font-size: 23px; }
        .section-heading > .text-link { display: none; }
        .product-grid { grid-template-columns: 1fr; gap: 12px; }
        .product-card { display: grid; grid-template-columns: 96px 1fr; gap: 12px; padding: 10px; border-radius: 9px; background: white; }
        .product-photo { width: 96px; height: 94px; border-radius: 7px; }
        .product-info { padding: 0; }
        .product-info h3 { font-size: 13px; }
        .product-meta { margin: 5px 0; font-size: 9px; }
        .product-info .button { width: auto; min-height: 0; margin-top: 2px; padding: 0; color: var(--green-700); background: transparent; border: 0; font-size: 9px; }
        .steps-section { padding: 15px 0 30px; }
        .steps-grid { grid-template-columns: 1fr; gap: 13px; }
        .cta-inner { display: flex; flex-direction: column; align-items: stretch; gap: 17px; }
        .cta-band h2 { font-size: 24px; }
        .button-gold { width: 100%; min-height: 42px; }
        .faq-grid { grid-template-columns: 1fr; gap: 12px; }
        .footer-inner { grid-template-columns: 1fr; gap: 15px; }
        .catalog-search-form { grid-template-columns: 1fr 1fr; }
        .catalog-search-form .button { grid-column: 1 / -1; }
        .catalog-heading { flex-direction: column; }
        .catalog-row { grid-template-columns: 82px 1fr; }
        .catalog-row img { width: 82px; height: 76px; grid-row: span 2; }
        .catalog-row .product-price { text-align: left; font-size: 13px; }
        .catalog-row .button { grid-column: 2; justify-self: start; }
        .catalog-action { grid-column: 2; display: flex; justify-content: space-between; align-items: center; gap: 8px; }
        .detail-grid, .orders-layout, .dashboard-bottom, .register-view { grid-template-columns: 1fr; }
        .detail-photo { height: 220px; }
        .order-fields, .order-actions { grid-template-columns: 1fr; }
        .related-grid { grid-template-columns: 1fr; }
        .order-tabs { overflow-x: auto; }
        .order-tab { min-width: 120px; }
        .dashboard-stats { grid-template-columns: repeat(2, 1fr); }
        .dashboard-head { flex-direction: row; align-items: center; }
        .dashboard-head h1 { font-size: 19px; }
        .dashboard-head .button { white-space: nowrap; }
        .dashboard-table { min-width: 640px; }
        .register-view { padding: 18px 0 32px; }
        .register-art { min-height: 240px; padding: 20px; }
        .register-art h1 { margin: 16px 0; font-size: 28px; }
        .register-form .form-grid { grid-template-columns: 1fr; }
        .login-view { grid-template-columns: 1fr; }
        .login-art { min-height: 240px; padding: 22px; }
        .login-art h1 { margin: 25px 0 9px; font-size: 30px; }
    }
`;

const style = document.createElement("style");
style.textContent = css;
document.head.append(style);

const app = document.getElementById("app");
const logoMark = `<svg viewBox="0 0 48 44" aria-hidden="true">
    <path d="M4 35c10-1 16-6 22-17 2 10 8 15 18 17v4H4z" fill="#287044"/>
    <path d="M5 31c7-8 12-10 19-11-3 7-8 13-16 16zm17-9c7 0 13 3 19 9-8 1-15-1-21-6z" fill="#68a34e"/>
    <path d="M20 20c-1-7 1-11 5-15 4 5 5 10 2 16-2-4-4-6-7-8z" fill="#347b43"/>
    <circle cx="36" cy="8" r="5" fill="#f2b344"/>
</svg>`;
const footerMarkup = `<footer class="site-footer"><div class="shell footer-inner">
    <div class="footer-about"><span class="footer-brand">AgriMatch</span><small>Petani dan Pelanggan, Lebih Dekat</small><small>Kabupaten Toba, Sumatera Utara</small><span class="footer-copy">© 2026 AgriMatch · Rancangan platform B2B pertanian lokal</span></div>
    <div class="footer-column"><strong>Jelajahi</strong><a href="#catalog" data-route="catalog">Cari pemasok</a><a href="#register" data-route="register" data-role="supplier">Menjadi pemasok</a></div>
    <div class="footer-column"><strong>Dukungan</strong><a href="#help" data-anchor="help">Panduan penggunaan</a><a href="#orders" data-route="orders">Bantuan & laporan</a></div>
</div></footer>`;
app.innerHTML = `
    <header class="site-header">
        <div class="shell nav">
            <a class="brand" href="#home" data-route="home" aria-label="AgriMatch beranda">
                <span class="brand-mark">${logoMark}</span><span><span class="brand-name">Agri<span>Match</span></span><small class="brand-caption">Petani dan Pelanggan, Lebih Dekat</small></span>
            </a>
            <nav class="nav-links" id="nav-links" aria-label="Navigasi utama">
                <a href="#home" data-route="home">Beranda</a>
                <a href="#catalog" data-route="catalog">Cari pemasok</a>
                <a href="#how" data-anchor="how">Cara kerja</a>
                <a href="#help" data-anchor="help">Bantuan</a>
                <a href="#orders" data-route="orders">Pesan</a>
            </nav>
            <div class="nav-actions">
                <a class="button button-outline" href="#login" data-route="login">Masuk</a>
                <a class="button" href="#register" data-route="register">Daftar gratis</a>
            </div>
            <button type="button" class="menu-toggle" id="menu-toggle" aria-label="Buka menu" aria-expanded="false">Menu ☰</button>
        </div>
    </header>
    <main>
        <section class="view active" data-view="home">
            <div class="shell hero">
                <div class="hero-grid">
                    <div class="hero-copy">
                        <p class="eyebrow">Dari Toba, untuk usaha Anda</p>
                        <h1>Panen lokal.<br>Pasokan yang<br>lebih cocok.</h1>
                        <p>Temukan petani lokal untuk kebutuhan bahan baku usaha Anda. Cocokkan produk, jumlah, harga, lokasi, dan waktu dalam satu tempat.</p>
                        <div class="hero-actions">
                            <a class="button" href="#catalog" data-route="catalog">Temukan pemasok <span aria-hidden="true">→</span></a>
                            <a class="button button-outline" href="#register" data-route="register" data-role="supplier">Saya pemasok</a>
                        </div>
                    </div>
                    <div class="hero-image" role="img" aria-label="Hasil panen segar dari petani lokal">
                        <div class="image-note"><strong>Segar dari kebun, dekat dengan usaha Anda.</strong></div>
                    </div>
                </div>
            </div>
            <div class="search-band"><div class="shell">
                <h3>Apa kebutuhan dapur usaha Anda?</h3>
                <form id="home-search" class="search-form">
                    <div class="search-control"><label for="home-product">Komoditas</label><select class="field" id="home-product" name="product"><option value="">Semua komoditas</option><option>Cabai keriting merah</option><option>Bawang merah</option><option>Tomat segar</option><option>Sayuran segar</option></select></div>
                    <div class="search-control"><label for="home-quantity">Jumlah kebutuhan</label><input class="field" id="home-quantity" name="quantity" type="number" min="1" value="20" aria-label="Jumlah kebutuhan"></div>
                    <div class="search-control"><label for="home-location">Lokasi pemasok</label><select class="field" id="home-location" name="location"><option>Kabupaten Toba</option><option>Balige</option><option>Laguboti</option><option>Porsea</option><option>Siantar Narumonda</option></select></div>
                    <div class="search-control"><label for="home-date">Tanggal dibutuhkan</label><input class="field" id="home-date" name="date" type="date"></div>
                    <button class="button" type="submit">Cari kecocokan →</button>
                </form>
            </div></div>
            <section class="shell products-section">
                <div class="section-heading"><div><p class="eyebrow">Hasil panen lokal</p><h2>Bahan segar untuk setiap menu.</h2></div><a class="text-link" href="#catalog" data-route="catalog">Jelajahi katalog ↗</a></div>
                <div class="product-grid" id="home-products"></div>
                <p class="catalog-note">Contoh produk dan harga untuk pratinjau desain.</p>
            </section>
            <section class="steps-section" id="how"><div class="shell">
                <div class="section-heading"><div><p class="eyebrow">Mudah dan langsung</p><h2>Dari mencari sampai sepakat.</h2></div></div>
                <div class="steps-grid">
                    <article class="step"><span class="step-number">01</span><div><h3>Ceritakan kebutuhan</h3><p>Tentukan bahan, jumlah, kisaran harga, lokasi, dan waktu kebutuhan.</p></div></article>
                    <article class="step"><span class="step-number">02</span><div><h3>Temukan yang cocok</h3><p>Bandingkan ketersediaan dan hubungi pemasok secara langsung.</p></div></article>
                    <article class="step"><span class="step-number">03</span><div><h3>Sepakati & pesan</h3><p>Konfirmasi pesanan, atur pembayaran, dan pengiriman bersama pemasok.</p></div></article>
                </div>
            </div></section>
            <section class="cta-band"><div class="shell cta-inner">
                <div><p class="eyebrow">Untuk petani & kelompok tani</p><h2>Hasil panen Anda,<br>peluang pasar baru.</h2></div>
                <div><p>Tampilkan hasil panen, perbarui stok, dan bangun hubungan dengan pembeli di sekitar Anda.</p><p>Daftar gratis. Komisi 3% hanya untuk transaksi selesai dan tercatat, dibebankan kepada pemasok.</p><a class="button button-gold" href="#register" data-route="register" data-role="supplier">Bergabung sebagai pemasok →</a></div>
            </div></section>
            <section class="faq-section" id="help"><div class="shell faq-grid">
                <div><h2>Ada yang ingin ditanyakan?</h2><p class="muted" style="font-size:11px">Saya siap membantu Anda memulai.</p><a class="button button-soft" href="#orders" data-route="orders">Lihat pusat bantuan ↗</a></div>
                <div class="faq-list">
                    <div><strong>Apakah AgriMatch menjual produk langsung?</strong><p>Tidak. AgriMatch mempertemukan pemasok dan pembeli.</p></div>
                    <div><strong>Bagaimana pembayaran dan pengirimannya?</strong><p>Keduanya disepakati langsung dengan pemasok. AgriMatch tidak menyediakan layanan pembayaran atau logistik.</p></div>
                </div>
            </div></section>
            ${footerMarkup}
        </section>
        <section class="view" data-view="catalog">
            <div class="shell page-main catalog-page">
                <div class="page-top"><p class="eyebrow">Panen lokal, sesuai kebutuhan</p><h1>Temukan pemasok yang cocok.</h1></div>
                <form id="catalog-search-form" class="catalog-search-form">
                    <div class="search-control"><label for="catalog-product">Komoditas</label><select id="catalog-product" class="field" name="product"><option value="">Semua komoditas</option><option>Cabai keriting merah</option><option>Bawang merah</option><option>Tomat segar</option><option>Sayuran segar</option></select></div>
                    <div class="search-control"><label for="catalog-quantity">Jumlah</label><input id="catalog-quantity" class="field" name="quantity" type="number" min="1" value="20"></div>
                    <div class="search-control"><label for="catalog-budget">Harga</label><input id="catalog-budget" class="field" name="budget" type="number" min="0" value="40000" aria-label="Harga maksimum"></div>
                    <div class="search-control"><label for="catalog-location">Lokasi</label><select id="catalog-location" class="field" name="location"><option>Kabupaten Toba</option><option>Balige</option><option>Laguboti</option><option>Porsea</option><option>Siantar Narumonda</option></select></div>
                    <div class="search-control"><label for="catalog-date">Waktu tersedia</label><input id="catalog-date" class="field" name="date" type="date"></div>
                    <button class="button" type="submit">Cari →</button>
                </form>
                <div class="catalog-heading"><div><h2 id="catalog-title">Pemasok sesuai pencarian</h2><p id="catalog-summary">Kecocokan berdasarkan jenis produk, jumlah, harga, lokasi, dan tanggal tersedia.</p></div><label class="muted" for="catalog-sort" style="font-size:9px">Urutkan: <select id="catalog-sort" class="catalog-sort"><option value="match">Paling sesuai</option><option value="price">Harga terendah</option><option value="stock">Stok terbanyak</option></select></label></div>
                <div class="catalog-list" id="catalog-list"></div>
                <p class="catalog-note">Data pemasok dan harga merupakan contoh tampilan.</p>
            </div>
            ${footerMarkup}
        </section>
        <section class="view" data-view="detail">
            <div class="shell page-main">
                <p class="detail-crumb"><a href="#catalog" data-route="catalog">Cari pemasok</a> / <span id="detail-crumb-name">Cabai keriting merah</span></p>
                <div class="detail-grid">
                    <div class="detail-visual"><img id="detail-image" class="detail-photo" src="" alt="">
                        <div class="detail-content"><h3>Tentang hasil panen</h3><p id="detail-description" class="detail-copy"></p><p class="catalog-note">Diperbarui hari ini · Data contoh</p></div>
                    </div>
                    <div class="detail-summary">
                        <p class="eyebrow">Tersedia sesuai kebutuhan Anda</p><h1 id="detail-name"></h1>
                        <div id="detail-price" class="detail-price"></div>
                        <div class="seller-line"><strong id="detail-seller"></strong><span>·</span><span id="detail-location"></span></div>
                        <p class="detail-copy">Stok <strong id="detail-stock"></strong><span> · </span>Tersedia <span id="detail-available"></span></p>
                        <section class="panel purchase-panel">
                            <h3>Buat permintaan pesanan</h3>
                            <form id="order-form">
                                <div class="order-fields">
                                    <div><label class="muted" for="order-quantity">Jumlah (kg)</label><input class="field" id="order-quantity" name="quantity" type="number" min="1" value="20" required></div>
                                    <div><label class="muted" for="order-date">Tanggal kebutuhan</label><input class="field" id="order-date" name="date" type="date" required></div>
                                </div>
                                <div class="order-total"><span>Estimasi total</span><strong id="order-total">Rp760.000</strong></div>
                                <p class="order-help">Pembayaran & pengiriman disepakati langsung dengan pemasok.</p>
                                <div class="order-actions"><button class="button button-soft" id="contact-supplier" type="button">Hubungi pemasok</button><button class="button" type="submit">Kirim permintaan →</button></div>
                            </form>
                        </section>
                    </div>
                </div>
                <section class="related-section"><h2 style="font-size:16px">Lengkapi bahan baku usaha Anda</h2><div class="related-grid" id="related-products"></div></section>
            </div>
            ${footerMarkup}
        </section>
        <section class="view" data-view="orders">
            <div class="shell page-main">
                <div class="page-top"><h1>Pesanan usaha Anda</h1><p>Kelola kesepakatan, pantau status, dan pesan kembali dengan mudah.</p></div>
                <div class="order-tabs" role="tablist" aria-label="Filter pesanan">
                    <button class="order-tab active" type="button" data-order-filter="all">Semua pesanan</button>
                    <button class="order-tab" type="button" data-order-filter="pending">Menunggu konfirmasi</button>
                    <button class="order-tab" type="button" data-order-filter="confirmed">Dikonfirmasi</button>
                    <button class="order-tab" type="button" data-order-filter="completed">Selesai</button>
                </div>
                <div class="orders-layout">
                    <div class="order-list" id="order-list"></div>
                    <aside class="chat-panel"><h3 id="chat-supplier">Kelompok Tani Balige</h3><p class="catalog-note">Percakapan pesanan <span id="chat-order-id">AM-2026-0012</span></p>
                        <div class="chat-bubble">Apakah 20 kg cabai tersedia untuk tanggal 24 November?</div>
                        <div class="chat-bubble reply">Tersedia. Pembayaran dan pengiriman bisa disepakati di sini. Pesanan sudah saya konfirmasi.</div>
                        <div class="chat-messages" id="chat-messages"></div>
                        <form class="chat-form" id="chat-form"><input class="field" name="message" placeholder="Tulis pesan..." required><button class="button" type="submit">Kirim</button></form>
                    </aside>
                </div>
                <p class="catalog-note">Contoh tampilan akun dan transaksi. Tandai selesai hanya setelah barang diterima.</p>
            </div>
            ${footerMarkup}
        </section>
        <section class="view" data-view="dashboard">
            <div class="shell page-main">
                <div class="dashboard-head"><div><h1>Selamat pagi, Kelompok Tani Balige.</h1><p>Kelola hasil panen dan peluang pesanan Anda hari ini.</p></div><button class="button" type="button" id="toggle-listing" aria-expanded="false">＋ Tambah produk</button></div>
                <div class="dashboard-stats">
                    <div class="stat-card"><span>Produk aktif</span><strong id="stat-products">3 komoditas</strong></div>
                    <div class="stat-card"><span>Pesanan masuk</span><strong id="stat-orders">2 permintaan</strong></div>
                    <div class="stat-card"><span>Transaksi selesai</span><strong id="stat-value">Rp1.500.000</strong></div>
                    <div class="stat-card featured"><span>Komisi tercatat · 3%</span><strong id="stat-commission">Rp45.000</strong></div>
                </div>
                <div class="form-card hidden" id="listing-form-card" style="margin-bottom:18px"><h3 id="listing-form-title">Tambah hasil panen</h3>
                    <form id="listing-form" class="form-stack"><div class="form-grid">
                        <div><label for="listing-name">Nama komoditas</label><input class="field" id="listing-name" name="name" required placeholder="Misalnya: Tomat segar"></div>
                        <div><label for="listing-category">Kategori</label><select class="field" id="listing-category" name="category" required><option>Sayuran</option><option>Bumbu</option><option>Buah</option><option>Beras</option></select></div>
                        <div><label for="listing-stock">Ketersediaan (kg)</label><input class="field" id="listing-stock" name="stock" type="number" min="1" required placeholder="100"></div>
                        <div><label for="listing-price">Harga per kg (Rp)</label><input class="field" id="listing-price" name="price" type="number" min="1" required placeholder="18000"></div>
                        <div><label for="listing-place">Lokasi</label><input class="field" id="listing-place" name="location" required placeholder="Kota atau kecamatan"></div>
                    </div><button class="button" id="listing-submit" type="submit">Simpan hasil panen</button></form>
                </div>
                <div class="section-heading"><div><h2>Produk & ketersediaan</h2><p>Perbarui stok dan harga untuk menjaga informasi tetap akurat.</p></div></div>
                <div class="table-wrap"><table class="dashboard-table"><thead><tr><th>Produk</th><th>Stok</th><th>Harga / kg</th><th>Tanggal tersedia</th><th>Status</th><th>Kelola</th></tr></thead><tbody id="dashboard-list"></tbody></table></div>
                <div class="dashboard-bottom">
                    <div class="request-card"><p class="eyebrow">Permintaan baru · RM Dapur Toba</p><h3 id="dashboard-new-order">Cabai keriting · 20 kg</h3><p id="dashboard-new-order-detail">Kebutuhan 24 Nov 2026 · Estimasi Rp760.000</p><button class="button" type="button" data-route="orders">Tinjau permintaan →</button></div>
                    <div class="membership-card"><h3>AgriMatch Member · Tumbuh</h3><p>3 transaksi selesai dalam 3 bulan terakhir.<br>3 transaksi lagi menuju level Panen.</p></div>
                </div>
                <p class="catalog-note">Contoh data dasbor · Komisi dihitung hanya dari transaksi selesai dan tercatat.</p>
            </div>
            ${footerMarkup}
        </section>
        <section class="view" data-view="register">
            <div class="shell register-view">
                <aside class="register-art"><p class="eyebrow">Tumbuh bersama AgriMatch</p><h1>Petani dan pelanggan, lebih dekat.</h1><p>Satu akun untuk membuka peluang kerja sama di Kabupaten Toba.</p><ol><li>Pilih peran & daftarkan akun</li><li>Tunggu konfirmasi dari tim</li><li>Lengkapi profil dan mulai terhubung</li></ol></aside>
                <div class="register-form"><h1>Mulai perjalanan Anda.</h1><p>Sudah punya akun? <a class="text-link" href="#login" data-route="login">Masuk</a></p>
                    <div class="role-switch" role="group" aria-label="Pilih peran akun"><button class="role-button active" id="role-buyer" type="button" data-role-option="buyer">● Pembeli / UMKM</button><button class="role-button" id="role-supplier" type="button" data-role-option="supplier">○ Petani / Pemasok</button></div>
                    <form id="register-form" class="form-stack"><div class="form-grid">
                        <div><label for="register-name">Nama lengkap</label><input class="field" id="register-name" name="name" placeholder="Masukkan nama Anda" required></div>
                        <div><label for="register-business">Nama usaha</label><input class="field" id="register-business" name="business" placeholder="Nama rumah makan / usaha" required></div>
                        <div><label for="register-phone">Nomor WhatsApp</label><input class="field" id="register-phone" name="phone" type="tel" placeholder="08xxxxxxxxxx" required></div>
                        <div><label for="register-email">Email</label><input class="field" id="register-email" name="email" type="email" placeholder="nama@contoh.com" required></div>
                        <div><label for="register-password">Kata sandi</label><input class="field" id="register-password" name="password" type="password" minlength="8" placeholder="Minimal 8 karakter" required></div>
                        <div><label for="register-referral">Kode referral (opsional)</label><input class="field" id="register-referral" name="referral" placeholder="Masukkan kode referral"></div>
                    </div><p class="register-note">Dengan mendaftar, Anda menyetujui syarat penggunaan dan kebijakan privasi AgriMatch.</p><button class="button" id="register-submit" type="submit">Daftar sebagai pembeli →</button><p class="register-note">Tim akan mengonfirmasi pendaftaran sebelum akun dapat digunakan.</p></form>
                </div>
            </div>
            ${footerMarkup}
        </section>
        <section class="view" data-view="login"><div class="login-view">
            <div class="login-art"><a class="brand" href="#home" data-route="home"><span class="brand-mark">${logoMark}</span><span><span class="brand-name">Agri<span>Match</span></span><small class="brand-caption">Petani dan Pelanggan, Lebih Dekat</small></span></a><div><h1>Petani dan pelanggan, lebih dekat.</h1><p>Ruang untuk menemukan pasokan lokal, berbagi kebutuhan, dan membangun kemitraan yang saling menguntungkan.</p><blockquote>Mulai dari hasil panen yang baik, tumbuh bersama pasar yang tepat.</blockquote></div><span style="font-size:9px;color:#a8c1ad">© 2026 AgriMatch</span></div>
            <div class="login-panel"><div class="login-form"><p class="eyebrow">Selamat datang kembali</p><h2>Mulai perjalanan Anda.</h2><p>Masuk untuk mengelola pasokan atau permintaan Anda.</p><form id="login-form" class="form-stack"><label for="login-email">Email</label><input class="field" id="login-email" name="email" type="email" placeholder="nama@email.com" required><label for="login-password">Kata sandi</label><input class="field" id="login-password" name="password" type="password" placeholder="Masukkan kata sandi" required><button class="button" type="submit">Masuk ke AgriMatch →</button></form><p style="margin-top:17px">Belum punya akun? <a class="text-link" href="#register" data-route="register">Daftar gratis</a></p></div></div>
        </div></section>
    </main>
    <div id="toast" class="toast hidden" role="status" aria-live="polite"></div>
`;

const storageKeys = {
    products: "agrimatch-products-v3",
    farmerListings: "agrimatch-farmer-listings-v3",
    orders: "agrimatch-orders-v3",
    messages: "agrimatch-messages-v3"
};
const sampleOrders = [
    { id: "AM-2026-0012", productId: 1, product: "Cabai keriting merah", seller: "Kelompok Tani Balige", quantity: 20, unit: "kg", price: 38000, total: 760000, status: "Dikonfirmasi", date: "24 Nov 2026", buyer: "RM Dapur Toba", sample: true },
    { id: "AM-2026-0011", productId: 2, product: "Bawang merah", seller: "Tani Sejahtera", quantity: 25, unit: "kg", price: 32000, total: 800000, status: "Selesai", date: "18 Nov 2026", buyer: "RM Dapur Toba", sample: true }
];
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
let orders = readStoredArray(storageKeys.orders, sampleOrders);
let messages = readStoredArray(storageKeys.messages, []);
let currentProduct = products[0] || productsSeed[0];
let currentOrderFilter = "all";
let registerRole = "buyer";
let editingProductId = null;
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
const dateAfter = days => {
    const date = new Date();
    date.setDate(date.getDate() + days);
    date.setMinutes(date.getMinutes() - date.getTimezoneOffset());
    return date.toISOString().slice(0, 10);
};
const formatDate = value => {
    if (!value) return "Segera";
    const date = new Date(`${value}T12:00:00`);
    return Number.isNaN(date.getTime()) ? String(value) : new Intl.DateTimeFormat("id-ID", { day: "numeric", month: "short", year: "numeric" }).format(date);
};
const updateOrderTotal = () => {
    const quantity = Number(document.getElementById("order-quantity").value) || 0;
    document.getElementById("order-total").textContent = formatRupiah(quantity * currentProduct.price);
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
        localStorage.setItem(storageKeys.orders, JSON.stringify(orders));
        localStorage.setItem(storageKeys.messages, JSON.stringify(messages));
    } catch (error) {
        console.error("Tidak dapat menyimpan perubahan AgriMatch.", error);
        showToast("Perubahan hanya tersimpan sementara di sesi ini.");
    }
}

function productCard(product) {
    return `<article class="product-card">
        <img class="product-photo" src="${escapeHtml(product.image)}" alt="${escapeHtml(product.name)}" loading="lazy">
        <div class="product-info"><h3>${escapeHtml(product.name)}</h3>
        <div class="product-price">${formatRupiah(product.price)} <small>/ ${escapeHtml(product.unit)}</small></div>
        <div class="product-meta"><span>Stok ${Number(product.stock)} ${escapeHtml(product.unit)} · ${escapeHtml(product.area || product.location)}</span></div>
        <button class="button button-small" type="button" data-product="${Number(product.id)}">Lihat pemasok →</button></div>
    </article>`;
}

function renderHomeProducts() {
    document.getElementById("home-products").innerHTML = products.slice(0, 4).map(productCard).join("");
}

function renderCatalog() {
    const query = document.getElementById("catalog-product").value.trim().toLocaleLowerCase("id");
    const quantity = Number(document.getElementById("catalog-quantity").value) || 0;
    const budgetValue = document.getElementById("catalog-budget").value;
    const budget = budgetValue === "" ? Infinity : Number(budgetValue);
    const location = document.getElementById("catalog-location").value;
    const requestedDate = document.getElementById("catalog-date").value;
    const sort = document.getElementById("catalog-sort").value;
    const matches = products.filter(product =>
        (!query || product.name.toLocaleLowerCase("id").includes(query)) &&
        (!location || product.location === location || product.area === location) &&
        Number(product.stock) >= quantity &&
        Number(product.price) <= budget &&
        (!requestedDate || !product.availableOn || product.availableOn <= requestedDate)
    );
    if (sort === "price") matches.sort((a, b) => a.price - b.price);
    if (sort === "stock") matches.sort((a, b) => b.stock - a.stock);
    document.getElementById("catalog-title").textContent = `${matches.length} pemasok sesuai pencarian`;
    document.getElementById("catalog-summary").textContent = `Kecocokan: ${query || "semua komoditas"} · ${quantity} kg · maks. ${formatRupiah(budget)} / kg · ${location || "semua lokasi"}`;
    document.getElementById("catalog-list").innerHTML = matches.length ? matches.map(product => `
        <article class="catalog-row">
            <img src="${escapeHtml(product.image)}" alt="${escapeHtml(product.name)}" loading="lazy">
            <div><span class="tag">Sesuai semua kriteria</span><h3>${escapeHtml(product.name)}</h3>
                <p>${escapeHtml(product.seller)} · ${escapeHtml(product.area || product.location)}, Toba</p>
                <p>Stok ${Number(product.stock)} ${escapeHtml(product.unit)} · Tersedia ${formatDate(product.availableOn)}</p>
            </div><div class="catalog-action"><div class="product-price">${formatRupiah(product.price)} / ${escapeHtml(product.unit)}</div><button class="button button-small" type="button" data-product="${Number(product.id)}">Lihat detail →</button></div>
        </article>`).join("") : `<div class="panel muted" style="font-size:12px">Belum ada pasokan yang cocok. Coba ubah kata kunci atau filter lokasi.</div>`;
}

function renderDashboard() {
    const farmerProducts = products.filter(product => farmerListingIds.includes(product.id));
    const completedValue = 1500000 + orders.filter(order => !order.sample && order.status === "Selesai").reduce((total, order) => total + Number(order.total), 0);
    const pendingOrders = orders.filter(order => order.status === "Menunggu konfirmasi");
    document.getElementById("dashboard-list").innerHTML = farmerProducts.map(product => `
        <tr><td><div class="dashboard-product"><img src="${escapeHtml(product.image)}" alt=""><strong>${escapeHtml(product.name)}</strong></div></td>
        <td>${Number(product.stock)} ${escapeHtml(product.unit)}</td><td>${formatRupiah(product.price)}</td>
        <td>${formatDate(product.availableOn)}</td><td><span class="tag">${product.stock > 0 ? "Aktif" : "Habis"}</span></td>
        <td><button class="text-link" type="button" data-edit-product="${Number(product.id)}">Edit ↗</button></td></tr>`).join("");
    document.getElementById("stat-products").textContent = `${farmerProducts.length} komoditas`;
    document.getElementById("stat-orders").textContent = `${2 + pendingOrders.length} permintaan`;
    document.getElementById("stat-value").textContent = formatRupiah(completedValue);
    document.getElementById("stat-commission").textContent = formatRupiah(Math.round(completedValue * .03));
    const featuredOrder = pendingOrders[0] || sampleOrders[0];
    document.getElementById("dashboard-new-order").textContent = `${featuredOrder.product} · ${featuredOrder.quantity} ${featuredOrder.unit}`;
    document.getElementById("dashboard-new-order-detail").textContent = `Kebutuhan ${featuredOrder.date} · Estimasi ${formatRupiah(featuredOrder.total)}`;
}

function renderOrders() {
    const statusMap = { pending: "Menunggu konfirmasi", confirmed: "Dikonfirmasi", completed: "Selesai" };
    const visibleOrders = currentOrderFilter === "all" ? orders : orders.filter(order => order.status === statusMap[currentOrderFilter]);
    document.getElementById("order-list").innerHTML = visibleOrders.length ? visibleOrders.map(order => {
        const status = order.status;
        const actions = status === "Dikonfirmasi"
            ? `<button class="button button-small" type="button" data-order-action="complete" data-order-id="${escapeHtml(order.id)}">Tandai diterima & selesai</button><button class="button button-small button-soft" type="button" data-order-action="report" data-order-id="${escapeHtml(order.id)}">Laporkan masalah</button>`
            : status === "Selesai"
                ? `<span class="text-link">Beri ulasan pemasok ☆☆☆☆☆</span><button class="button button-small" type="button" data-order-action="reorder" data-order-id="${escapeHtml(order.id)}">Pesan ulang →</button>`
                : `<span class="tag">Menunggu respons pemasok</span>`;
        return `<article class="buyer-order">
            <div class="order-meta"><span>${escapeHtml(order.id)} · ${escapeHtml(order.date)}</span><span class="text-link">${escapeHtml(status)}</span></div>
            <h3>${escapeHtml(order.product)}${status === "Selesai" ? " · " + Number(order.quantity) + " kg" : ""}</h3>
            <p>${escapeHtml(order.seller)} · ${Number(order.quantity)} ${escapeHtml(order.unit)} × ${formatRupiah(order.price)}</p>
            <div class="order-status-row"><span class="muted">${status === "Selesai" ? "Selesai · Pembayaran dan pengiriman disepakati." : `Kebutuhan ${escapeHtml(order.date)} · Pembayaran dan pengiriman sesuai kesepakatan.`}</span><strong class="order-total-price">${formatRupiah(order.total)}</strong></div>
            <div class="order-actions-inline">${actions}</div>
        </article>`;
    }).join("") : `<div class="panel muted">Belum ada pesanan pada status ini.</div>`;
}

function renderMessages() {
    document.getElementById("chat-messages").innerHTML = messages.map(message =>
        `<div class="chat-bubble">${escapeHtml(message.text)}</div>`
    ).join("");
}

function showPage(page, updateHash = true) {
    const available = ["home", "catalog", "detail", "orders", "dashboard", "login", "register"];
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
    document.getElementById("menu-toggle").textContent = "Menu ☰";
    if (updateHash && location.hash !== `#${selected}`) history.pushState({ page: selected }, "", `#${selected}`);
    window.scrollTo({ top: 0, behavior: "smooth" });
}

function openProduct(id, updateHash = true) {
    const selectedProduct = products.find(product => product.id === Number(id));
    if (!selectedProduct) {
        showToast("Produk tidak ditemukan. Muat ulang halaman dan coba lagi.");
        return;
    }
    currentProduct = selectedProduct;
    document.getElementById("detail-image").src = currentProduct.image;
    document.getElementById("detail-image").alt = currentProduct.name;
    document.getElementById("detail-crumb-name").textContent = currentProduct.name;
    document.getElementById("detail-name").textContent = currentProduct.name;
    document.getElementById("detail-description").textContent = currentProduct.description;
    document.getElementById("detail-seller").textContent = currentProduct.seller;
    document.getElementById("detail-location").textContent = `${currentProduct.area || currentProduct.location}, ${currentProduct.location}`;
    document.getElementById("detail-stock").textContent = `${currentProduct.stock} ${currentProduct.unit}`;
    document.getElementById("detail-available").textContent = formatDate(currentProduct.availableOn);
    document.getElementById("detail-price").textContent = `${formatRupiah(currentProduct.price)} / ${currentProduct.unit}`;
    const quantity = document.getElementById("order-quantity");
    quantity.max = currentProduct.stock;
    quantity.value = Math.min(20, currentProduct.stock);
    document.getElementById("order-form").querySelector("button[type='submit']").disabled = currentProduct.stock < 1;
    const dateInput = document.getElementById("order-date");
    dateInput.min = todayLocal();
    dateInput.value = currentProduct.availableOn || dateAfter(7);
    updateOrderTotal();
    document.getElementById("related-products").innerHTML = products.filter(product => product.id !== currentProduct.id).slice(0, 3).map(product => `
        <button class="related-card" type="button" data-product="${Number(product.id)}">
            <img src="${escapeHtml(product.image)}" alt=""><span><strong>${escapeHtml(product.name)}</strong><small>${formatRupiah(product.price)}/${escapeHtml(product.unit)} · Lihat pemasok →</small></span>
        </button>`).join("");
    showPage("detail", updateHash);
}

function setRegisterRole(role) {
    registerRole = role;
    document.getElementById("role-buyer").classList.toggle("active", role === "buyer");
    document.getElementById("role-supplier").classList.toggle("active", role === "supplier");
    document.getElementById("role-buyer").textContent = `${role === "buyer" ? "●" : "○"} Pembeli / UMKM`;
    document.getElementById("role-supplier").textContent = `${role === "supplier" ? "●" : "○"} Petani / Pemasok`;
    document.getElementById("register-submit").textContent = `Daftar sebagai ${role === "buyer" ? "pembeli" : "pemasok"} →`;
}

function editProduct(id) {
    const product = products.find(item => item.id === Number(id));
    if (!product) return;
    editingProductId = product.id;
    const card = document.getElementById("listing-form-card");
    card.classList.remove("hidden");
    document.getElementById("listing-name").value = product.name;
    document.getElementById("listing-category").value = product.category;
    document.getElementById("listing-stock").value = product.stock;
    document.getElementById("listing-price").value = product.price;
    document.getElementById("listing-place").value = product.area || product.location;
    document.getElementById("listing-form-title").textContent = "Edit produk";
    document.getElementById("listing-submit").textContent = "Simpan perubahan";
    document.getElementById("toggle-listing").setAttribute("aria-expanded", "true");
    document.getElementById("listing-name").focus();
    card.scrollIntoView({ behavior: "smooth", block: "center" });
}

function showAnchor(id) {
    showPage("home", false);
    if (location.hash !== `#${id}`) history.pushState({ page: "home", anchor: id }, "", `#${id}`);
    window.setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }), 80);
}

document.addEventListener("click", event => {
    const productButton = event.target.closest("[data-product]");
    if (productButton) {
        openProduct(productButton.dataset.product);
        return;
    }

    const orderFilter = event.target.closest("[data-order-filter]");
    if (orderFilter) {
        currentOrderFilter = orderFilter.dataset.orderFilter;
        document.querySelectorAll("[data-order-filter]").forEach(button => button.classList.toggle("active", button === orderFilter));
        renderOrders();
        return;
    }

    const orderAction = event.target.closest("[data-order-action]");
    if (orderAction) {
        const order = orders.find(item => String(item.id) === orderAction.dataset.orderId);
        if (orderAction.dataset.orderAction === "complete" && order) {
            order.status = "Selesai";
            saveState();
            renderOrders();
            renderDashboard();
            showToast("Pesanan ditandai selesai.");
        } else if (orderAction.dataset.orderAction === "reorder" && order) {
            openProduct(order.productId);
        } else if (orderAction.dataset.orderAction === "report") {
            showToast("Laporan demo dicatat. Hubungi tim AgriMatch untuk bantuan.");
        }
        return;
    }

    const editButton = event.target.closest("[data-edit-product]");
    if (editButton) {
        editProduct(editButton.dataset.editProduct);
        return;
    }

    const roleButton = event.target.closest("[data-role-option]");
    if (roleButton) {
        setRegisterRole(roleButton.dataset.roleOption);
        return;
    }

    const anchorLink = event.target.closest("[data-anchor]");
    if (anchorLink) {
        event.preventDefault();
        showAnchor(anchorLink.dataset.anchor);
        return;
    }

    const routeLink = event.target.closest("[data-route]");
    if (routeLink) {
        event.preventDefault();
        if (routeLink.dataset.role) setRegisterRole(routeLink.dataset.role);
        showPage(routeLink.dataset.route);
    }
});

document.getElementById("home-search").addEventListener("submit", event => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    document.getElementById("catalog-product").value = form.get("product") || "";
    document.getElementById("catalog-quantity").value = form.get("quantity") || "20";
    document.getElementById("catalog-location").value = form.get("location") || "Kabupaten Toba";
    document.getElementById("catalog-date").value = form.get("date") || dateAfter(7);
    renderCatalog();
    showPage("catalog");
});
document.getElementById("catalog-search-form").addEventListener("submit", event => {
    event.preventDefault();
    renderCatalog();
});
["catalog-product", "catalog-quantity", "catalog-budget", "catalog-location", "catalog-date", "catalog-sort"].forEach(id => {
    document.getElementById(id).addEventListener("change", renderCatalog);
});

document.getElementById("menu-toggle").addEventListener("click", event => {
    const menu = document.getElementById("nav-links");
    const expanded = menu.classList.toggle("open");
    event.currentTarget.setAttribute("aria-expanded", String(expanded));
    event.currentTarget.setAttribute("aria-label", expanded ? "Tutup menu" : "Buka menu");
    event.currentTarget.textContent = expanded ? "Tutup ×" : "Menu ☰";
});

document.getElementById("order-quantity").addEventListener("input", updateOrderTotal);
document.getElementById("contact-supplier").addEventListener("click", () => {
    showToast(`Kontak ${currentProduct.seller} tersedia setelah akun terhubung.`);
});
document.getElementById("order-form").addEventListener("submit", event => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const quantity = Number(form.get("quantity"));
    if (quantity > currentProduct.stock) {
        showToast(`Jumlah melebihi stok yang tersedia (${currentProduct.stock} ${currentProduct.unit}).`);
        return;
    }
    const order = {
        id: `AM-${new Date().getFullYear()}-${String(Date.now()).slice(-6)}`,
        productId: currentProduct.id,
        product: currentProduct.name,
        seller: currentProduct.seller,
        quantity,
        unit: currentProduct.unit,
        price: currentProduct.price,
        total: quantity * currentProduct.price,
        status: "Menunggu konfirmasi",
        date: formatDate(form.get("date")),
        buyer: "RM Dapur Toba",
        createdAt: new Date().toISOString()
    };
    orders.unshift(order);
    saveState();
    renderOrders();
    renderDashboard();
    showToast("Permintaan pesanan berhasil dicatat.");
    showPage("orders");
});

document.getElementById("chat-form").addEventListener("submit", event => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    messages.push({ text: String(form.get("message")).trim(), createdAt: new Date().toISOString() });
    saveState();
    renderMessages();
    event.currentTarget.reset();
});

document.getElementById("toggle-listing").addEventListener("click", event => {
    const formCard = document.getElementById("listing-form-card");
    const isHidden = formCard.classList.toggle("hidden");
    event.currentTarget.setAttribute("aria-expanded", String(!isHidden));
    if (!isHidden) document.getElementById("listing-name").focus();
});

document.getElementById("listing-form").addEventListener("submit", event => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const area = String(data.get("location")).trim();
    const fields = {
        name: String(data.get("name")).trim(),
        category: String(data.get("category")),
        location: "Kabupaten Toba",
        area,
        seller: "Kelompok Tani Balige",
        price: Number(data.get("price")),
        stock: Number(data.get("stock")),
        unit: "kg",
        availableOn: dateAfter(7),
        image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=850&q=80",
        description: "Hasil panen lokal dari Kelompok Tani Balige."
    };
    if (editingProductId !== null) {
        const product = products.find(item => item.id === editingProductId);
        Object.assign(product, fields);
        showToast("Informasi produk berhasil diperbarui.");
    } else {
        const newListing = { id: Date.now(), ...fields };
        products.push(newListing);
        farmerListingIds.push(newListing.id);
        showToast("Produk berhasil ditambahkan ke katalog.");
    }
    saveState();
    editingProductId = null;
    renderHomeProducts();
    renderCatalog();
    renderDashboard();
    event.currentTarget.reset();
    document.getElementById("listing-form-card").classList.add("hidden");
    document.getElementById("listing-form-title").textContent = "Tambah hasil panen";
    document.getElementById("listing-submit").textContent = "Simpan hasil panen";
    document.getElementById("toggle-listing").setAttribute("aria-expanded", "false");
});

document.getElementById("register-form").addEventListener("submit", event => {
    event.preventDefault();
    showToast(`Pendaftaran ${registerRole === "buyer" ? "pembeli" : "pemasok"} dicatat untuk demo. Akun belum diaktifkan.`);
});
document.getElementById("login-form").addEventListener("submit", event => {
    event.preventDefault();
    showToast("Mode demo: layanan akun belum terhubung.");
});

window.addEventListener("popstate", () => {
    const page = location.hash.slice(1) || "home";
    if (["how", "help"].includes(page)) showAnchor(page);
    else showPage(page, false);
});

document.getElementById("home-date").min = todayLocal();
document.getElementById("home-date").value = dateAfter(7);
document.getElementById("catalog-date").min = todayLocal();
document.getElementById("catalog-date").value = dateAfter(7);
document.getElementById("order-date").min = todayLocal();
renderHomeProducts();
renderCatalog();
renderDashboard();
renderOrders();
renderMessages();
const initialPage = location.hash.slice(1);
if (initialPage === "detail") openProduct(currentProduct.id, false);
else if (["catalog", "orders", "dashboard", "login", "register"].includes(initialPage)) showPage(initialPage, false);
else if (["how", "help"].includes(initialPage)) showAnchor(initialPage);
