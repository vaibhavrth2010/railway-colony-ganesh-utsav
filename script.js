/* =====================================================
   RAILWAY COLONY GANESH UTSAV — cute + fast
   - click-to-play videos (no 13 iframes at load)
   - capped petal rain, transform-only
===================================================== */

const CONFIG = {
    instagram: "https://www.instagram.com/railwaycolony_ganeshutsav_cph/",
    instagramUsername: "@railwaycolony_ganeshutsav_cph",
    // Fill this after deploying (e.g. "https://your-site.netlify.app").
    // Used by the Share button when the page is opened locally via file://.
    siteUrl: "https://railway-colony-ganesh-utsav.vercel.app/",
    contacts: [
        { name: "Contact 1", number: "+91 97521 18871", tel: "+919752118871", whatsapp: "919752118871" },
        { name: "Contact 2", number: "+91 91319 82363", tel: "+919131982363", whatsapp: "919131982363" }
    ]
};

/* Returns a shareable https URL, never a file:// path */
function getSiteUrl() {
    if (CONFIG.siteUrl) return CONFIG.siteUrl;
    if (window.location.protocol.indexOf("http") === 0) {
        return window.location.href.split("#")[0];
    }
    return "";
}

/* Clipboard that also works on file:// and old browsers */
async function copyText(text) {
    if (navigator.clipboard && window.isSecureContext !== false) {
        try { await navigator.clipboard.writeText(text); return true; }
        catch (e) { /* fall through to legacy */ }
    }
    try {
        const ta = document.createElement("textarea");
        ta.value = text;
        ta.setAttribute("readonly", "");
        ta.style.position = "fixed";
        ta.style.opacity = "0";
        document.body.appendChild(ta);
        ta.select();
        const ok = document.execCommand("copy");
        ta.remove();
        return ok;
    } catch (e) { return false; }
}

const members = [
    { name: "Vaibhav Rathore", instagram: "@_.vaibhav_rathore_", url: "https://www.instagram.com/_.vaibhav_rathore_/" },
    { name: "Gaurav Lahare", instagram: "@espresso.goluu", url: "https://www.instagram.com/espresso.goluu/" },
    { name: "Manish Suryavanshi", instagram: ["@cg_manish_king_100000k", "@mano.jk12345"], url: ["https://www.instagram.com/cg_manish_king_100000k/", "https://www.instagram.com/mano.jk12345/"] },
    { name: "Aditya Roy", instagram: "@adityaax_16", url: "https://www.instagram.com/adityaax_16/" },
    { name: "Virat Srivatsav", instagram: "@srv_virat_05", url: "https://www.instagram.com/srv_virat_05/" },
    { name: "Yash Raj Suryavanshi", instagram: "@cg_yash_raj_350", url: "https://www.instagram.com/cg_yash_raj_350/" },
    { name: "Rahul Singh", instagram: "@singh_5284", url: "https://www.instagram.com/singh_5284/" },
    { name: "Himanshu Patle", instagram: "@_himanshu_patle.01", url: "https://www.instagram.com/_himanshu_patle.01/" },
    { name: "Rupesh", instagram: "@__10__rpsh.s.knwr__", url: "https://www.instagram.com/__10__rpsh.s.knwr__/" },
    { name: "Abhishek Thakur", instagram: "@a__t_official", url: "https://www.instagram.com/a__t_official/" },
    { name: "Yogesh Das Mahant", instagram: "@zx_sujuki_2", url: "https://www.instagram.com/zx_sujuki_2/" },
    { name: "Ishant Banjare", instagram: "@mr.__ishant__.07", url: "https://www.instagram.com/mr.__ishant__.07/" }
];

const videoGroups = [
    {
        number: "01", category: "GANESH UTSAV", title: "The Celebration",
        videos: [
            { title: "Ganesh Ji Aagman", id: "1-ULjnjaF273tj76zyDpQ1g8mFLxIDeuX" },
            { title: "1st Puja", id: "16l0TA9FE8DbLCdICgMFyETZwsS1lRqKi" },
            { title: "Aarti", id: "1lYOmhJaWLUDmiUPxtvcSSV9IxQTKFxHQ" },
            { title: "Ganesh Utsav Events", id: "1YiISt6ViCcaCvNmNcXprs9NjJr1mfZik" },
            { title: "Havan", id: "1gqPpC_wGqWcn3rM6ssWMlr5kyoRmGza-" },
            { title: "Visarjan Dance", id: "15-TUmbF6SlIL_qcY8dwTjCuB59n64EX1" },
            { title: "Visarjan Dance", id: "17H6t8w2pAF7zj8gW7b9d0jsipcmY_HME" },
            { title: "Final Visarjan", id: "1Xwhnq9r7qFsobS0C_LGxjYuzvkzUEStM" }
        ]
    },
    {
        number: "02", category: "SAMITI MEMBERS", title: "The Memories",
        videos: [
            { title: "Funny Video", id: "1aPQW0l6PllK4zSfFSVuKWnpoYClxOdm8" },
            { title: "Transition Video", id: "1RRn-vy0A9t_AoAgUhVk5AQqwRrcDB7aN" }
        ]
    },
    {
        number: "03", category: "GANESH JI", title: "Divine Moments",
        videos: [{ title: "Ganesh Ji Video", id: "1sbE0yRBKOensgDJyM7yw_Kq3p5w9US0t" }]
    },
    {
        number: "04", category: "OTHER VIDEOS", title: "The Highlights",
        videos: [
            { title: "Chanda Collection", id: "1rCp5Wwb3V-XifKXT36uUSCgT2Txh_4d5" },
            { title: "Murtikar Video Edit", id: "1Q-JQIvXeRG_-jlf6BXh2vekp_Is872Xh" }
        ]
    },
    { number: "05", category: "PANDAL MAKING", title: "Coming Soon", comingSoon: true }
];

function instagramIcon(className = "") {
    return `<svg class="instagram-svg ${className}" viewBox="0 0 24 24" aria-hidden="true"><rect x="2" y="2" width="20" height="20" rx="5" fill="url(#instagramGradient)"/><rect x="6.5" y="6.5" width="11" height="11" rx="3" fill="none" stroke="white" stroke-width="1.7"/><circle cx="12" cy="12" r="2.7" fill="none" stroke="white" stroke-width="1.7"/><circle cx="16.7" cy="7.5" r="1" fill="white"/></svg>`;
}

function renderMembers() {
    const grid = document.getElementById("membersGrid");
    if (!grid) return;
    grid.innerHTML = "";
    members.forEach((member) => {
        const card = document.createElement("article");
        card.className = "member-card reveal";
        const firstLetter = member.name.charAt(0).toUpperCase();
        let instagramLinks = "";
        if (Array.isArray(member.instagram)) {
            member.instagram.forEach((username, i) => {
                instagramLinks += `<a href="${member.url[i]}" target="_blank" rel="noopener noreferrer" class="member-instagram">${instagramIcon()}${username}</a>`;
            });
        } else {
            instagramLinks = `<a href="${member.url}" target="_blank" rel="noopener noreferrer" class="member-instagram">${instagramIcon()}${member.instagram}</a>`;
        }
        card.innerHTML = `<div class="member-avatar">${firstLetter}</div><div class="member-info"><h3>${member.name}</h3><div class="member-instagrams">${instagramLinks}</div></div>`;
        grid.appendChild(card);
    });
    requestAnimationFrame(() => observeReveals());
}

/* click-to-play: thumbnail first, iframe only on tap */
function createVideoCard(video) {
    const thumb = `https://drive.google.com/thumbnail?id=${video.id}&sz=w600`;
    const safeTitle = video.title.replace(/"/g, "&quot;");
    return `
        <article class="video-card reveal">
            <div class="video-frame">
                <button class="video-facade" data-video-id="${video.id}" data-video-title="${safeTitle}" aria-label="Play ${safeTitle}">
                    <img src="${thumb}" alt="${safeTitle}" loading="lazy" decoding="async" onerror="this.style.display='none'">
                    <span class="video-facade-play">▶</span>
                    <small>${video.title}</small>
                </button>
            </div>
            <div class="video-info"><h4>${video.title}</h4><span>TAP TO PLAY • DRIVE VIDEO</span></div>
        </article>`;
}

function createComingSoonCard() {
    return `
        <article class="video-card reveal">
            <div class="video-coming"><div class="video-coming-inner">
                <div class="video-coming-icon">🎬</div>
                <h4>Pandal Making</h4>
                <p>Glue guns are out… video dropping soon! 🌼</p>
            </div></div>
            <div class="video-info"><h4>Coming Soon</h4><span>VIDEO WILL BE ADDED LATER</span></div>
        </article>`;
}

function createVideoGroup(group) {
    const section = document.createElement("section");
    section.className = "video-category";
    let cards = group.comingSoon ? createComingSoonCard() : group.videos.map(createVideoCard).join("");
    const countText = group.comingSoon ? "COMING SOON" : `${group.videos.length} VIDEO${group.videos.length === 1 ? "" : "S"}`;
    const subtitle = group.comingSoon ? "Video will be uploaded later"
        : group.category === "GANESH UTSAV" ? "dhol, aarti & full celebration energy"
        : group.category === "SAMITI MEMBERS" ? "silly moments with the team"
        : group.category === "GANESH JI" ? "sweet divine moments" : "little extras we love";
    section.innerHTML = `
        <div class="video-category-heading">
            <div><span class="video-category-number">${group.number} • ${group.category}</span>
            <h3 class="video-category-title">${group.title}</h3>
            <span class="video-category-subtitle">${subtitle}</span></div>
            <span class="video-count">${countText}</span>
        </div>
        <div class="video-grid">${cards}</div>`;
    return section;
}

function renderVideos() {
    const gallery = document.getElementById("videoGallery");
    if (!gallery) return;
    gallery.innerHTML = "";
    videoGroups.forEach(group => gallery.appendChild(createVideoGroup(group)));

    gallery.querySelectorAll(".video-facade").forEach(btn => {
        btn.addEventListener("click", () => {
            const id = btn.dataset.videoId;
            const title = btn.dataset.videoTitle || "Video";
            const frame = btn.closest(".video-frame");
            if (!frame || frame.dataset.loaded) return;
            frame.dataset.loaded = "true";
            frame.innerHTML = `<iframe class="drive-video" src="https://drive.google.com/file/d/${id}/preview" title="${title}" allow="autoplay; fullscreen" allowfullscreen></iframe>`;
        }, { once: true });
    });
    requestAnimationFrame(() => observeReveals());
}

function renderContacts() {
    const grid = document.getElementById("contactGrid");
    if (!grid) return;
    grid.innerHTML = "";
    CONFIG.contacts.forEach(contact => {
        const card = document.createElement("article");
        card.className = "contact-card reveal";
        card.innerHTML = `
            <div class="contact-icon">📞</div>
            <div class="contact-info"><span>${contact.name}</span><strong>${contact.number}</strong>
            <div class="contact-actions">
                <a href="tel:${contact.tel}" class="contact-action">Call</a>
                <a href="https://wa.me/${contact.whatsapp}" target="_blank" rel="noopener noreferrer" class="contact-action">WhatsApp</a>
            </div></div>`;
        grid.appendChild(card);
    });
    const instagramCard = document.createElement("article");
    instagramCard.className = "contact-card instagram-contact reveal";
    instagramCard.innerHTML = `
        <div class="contact-icon">${instagramIcon()}</div>
        <div class="contact-info"><span>OFFICIAL INSTAGRAM</span><strong>${CONFIG.instagramUsername}</strong>
        <div class="contact-actions"><a href="${CONFIG.instagram}" target="_blank" rel="noopener noreferrer" class="contact-action">Open Instagram</a></div></div>`;
    grid.appendChild(instagramCard);
    requestAnimationFrame(() => observeReveals());
}

/* ---------- photo wall: Supabase photos bucket, graceful fallback ---------- */
const PHOTOS = {
    supabaseUrl: "https://ewfglrnllbdngzhixkqm.supabase.co",
    anonKey: "", // paste anon key to auto-load bucket photos; empty = placeholders
    bucket: "photos",
    manual: [] // or paste direct image URLs here, e.g. ["https://.../aarti.jpg"]
};

function memPlaceholderHTML() {
    const cards = [
        { emoji: "🪔", title: "Aarti nights", text: "Photos from the pandal drop here soon." },
        { emoji: "🌼", title: "Marigold mornings", text: "Decoration-day pics coming soon." },
        { emoji: "💛", title: "Visarjan love", text: "Dance + dhol + goodbye smiles." }
    ];
    return cards.map(c => `
        <div class="mem-empty reveal">
            <div class="big">${c.emoji}</div>
            <h4>${c.title}</h4>
            <p>${c.text}</p>
        </div>`).join("");
}

async function fetchBucketPhotos() {
    if (!PHOTOS.anonKey) return [];
    try {
        const res = await fetch(`${PHOTOS.supabaseUrl}/storage/v1/object/list/${PHOTOS.bucket}`, {
            method: "POST",
            headers: {
                "apikey": PHOTOS.anonKey,
                "Authorization": `Bearer ${PHOTOS.anonKey}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ prefix: "", limit: 100, sortBy: { column: "created_at", order: "desc" } })
        });
        if (!res.ok) return [];
        const files = await res.json();
        return (files || [])
            .filter(f => f.name && !f.name.startsWith(".") && /\.(jpe?g|png|webp|gif)$/i.test(f.name))
            .map(f => `${PHOTOS.supabaseUrl}/storage/v1/object/public/${PHOTOS.bucket}/${encodeURIComponent(f.name)}`);
    } catch (e) { return []; }
}

async function renderPhotos() {
    const grid = document.getElementById("memGrid");
    if (!grid) return;
    grid.innerHTML = memPlaceholderHTML();

    let urls = [...PHOTOS.manual];
    // optional local manifest: photos.json = ["img1.jpg", ...]
    try {
        const r = await fetch("photos.json", { cache: "no-store" });
        if (r.ok) {
            const j = await r.json();
            if (Array.isArray(j) && j.length) urls = [...urls, ...j];
        }
    } catch (e) { /* no manifest — fine */ }
    if (!urls.length) urls = await fetchBucketPhotos();
    if (!urls.length) { requestAnimationFrame(() => observeReveals()); return; }

    urls = urls.slice(0, 24);
    grid.innerHTML = "";
    urls.forEach((src, i) => {
        const item = document.createElement("div");
        item.className = "mem-item reveal";
        item.innerHTML = `
            <button data-full="${src}" aria-label="View photo ${i + 1}">
                <img src="${src}" alt="Ganesh Utsav memory ${i + 1}" loading="lazy" decoding="async" onerror="this.closest('.mem-item').remove()">
            </button>`;
        grid.appendChild(item);
    });
    grid.querySelectorAll("button[data-full]").forEach(btn => {
        btn.addEventListener("click", () => openLightbox(btn.dataset.full));
    });
    requestAnimationFrame(() => observeReveals());
}

function openLightbox(src) {
    const box = document.getElementById("lightbox");
    const img = document.getElementById("lightboxImg");
    if (!box || !img) return;
    img.src = src;
    box.classList.remove("hidden");
    document.body.style.overflow = "hidden";
}
function closeLightbox() {
    const box = document.getElementById("lightbox");
    if (!box) return;
    box.classList.add("hidden");
    document.body.style.overflow = "";
}
function setupLightbox() {
    const box = document.getElementById("lightbox");
    const close = document.getElementById("lightboxClose");
    if (!box || !close) return;
    close.addEventListener("click", closeLightbox);
    box.addEventListener("click", (e) => { if (e.target === box) closeLightbox(); });
    document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeLightbox(); });
}

/* ---------- light petal rain (capped, transform-only) ---------- */
const PETAL_COLORS = ["#FF8A00", "#FF5A8F", "#FFC93C", "#2E9E6B", "#FF9DC3"];
let petalTimer = null;

function petalsAllowed() {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return false;
    return true;
}

function createPetal() {
    const container = document.getElementById("petalContainer");
    if (!container) return;
    if (document.hidden) return;
    if (container.childElementCount > 12) return; // hard cap — old code had no cap
    const petal = document.createElement("span");
    petal.className = "petal";
    const left = Math.random() * 100;
    const duration = 7 + Math.random() * 6;
    const drift = (Math.random() * 160) - 80;
    const size = 7 + Math.random() * 8;
    petal.style.left = `${left}%`;
    petal.style.width = `${size}px`;
    petal.style.height = `${size}px`;
    petal.style.background = PETAL_COLORS[Math.floor(Math.random() * PETAL_COLORS.length)];
    petal.style.animationDuration = `${duration}s`;
    petal.style.setProperty("--drift", `${drift}px`);
    container.appendChild(petal);
    setTimeout(() => petal.remove(), duration * 1000 + 500);
}

function startPetals() {
    if (!petalsAllowed() || petalTimer) return;
    for (let i = 0; i < 4; i++) setTimeout(createPetal, i * 400);
    petalTimer = setInterval(createPetal, 2400); // was 850ms — way too many
}

/* ---------- navbar / menu / share ---------- */
function setupNavbar() {
    const navbar = document.getElementById("navbar");
    if (!navbar) return;
    let ticking = false;
    function update() {
        navbar.classList.toggle("scrolled", window.scrollY > 10);
        ticking = false;
    }
    window.addEventListener("scroll", () => {
        if (!ticking) { ticking = true; requestAnimationFrame(update); }
    }, { passive: true });
    update();
}

function setupMobileMenu() {
    const toggle = document.getElementById("menuToggle");
    const menu = document.getElementById("navMenu");
    if (!toggle || !menu) return;
    toggle.addEventListener("click", () => menu.classList.toggle("open"));
    menu.querySelectorAll("a").forEach(link => link.addEventListener("click", () => menu.classList.remove("open")));
}

function showToast(message) {
    const toast = document.getElementById("toast");
    const toastMessage = document.getElementById("toastMessage");
    if (!toast || !toastMessage) return;
    toastMessage.textContent = message;
    toast.classList.add("show");
    clearTimeout(window.toastTimer);
    window.toastTimer = setTimeout(() => toast.classList.remove("show"), 2600);
}

function setupShare() {
    const button = document.getElementById("shareButton");
    if (!button) return;
    button.addEventListener("click", async () => {
        const url = getSiteUrl();
        const text = "Our cute Ganesh Utsav page from Railway Colony, Champa 🌼";
        const fullText = url ? `${text} ${url}` : text;
        const shareData = { title: "Railway Colony Ganesh Utsav Samiti", text };
        if (url) shareData.url = url;

        // Tier 1: native share sheet (mobile / secure context)
        try {
            if (navigator.share) { await navigator.share(shareData); return; }
        } catch (error) {
            if (error && error.name === "AbortError") return;
            /* fall through to copy */
        }

        // Tier 2+3: copy link (modern API, then legacy fallback)
        if (url && await copyText(url)) {
            showToast("Link copied! Send it to everyone 🌼");
        } else if (!url) {
            showToast("Host the site online to share the link 🌐");
        } else {
            showToast("Copy this link: " + url);
        }
    });
}

/* ---------- scroll reveal (light, once) ---------- */
let revealObserver;
function observeReveals() {
    const elements = document.querySelectorAll(".reveal:not(.reveal-observed)");
    if (!elements.length) return;
    if (!revealObserver) {
        revealObserver = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                    revealObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.08, rootMargin: "0px 0px -30px 0px" });
    }
    elements.forEach(el => { el.classList.add("reveal-observed"); revealObserver.observe(el); });
}

document.addEventListener("DOMContentLoaded", () => {
    renderMembers();
    renderPhotos();
    renderVideos();
    renderContacts();
    setupNavbar();
    setupMobileMenu();
    setupShare();
    setupLightbox();
    observeReveals();
    startPetals();
});
