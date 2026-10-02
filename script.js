/* =========================================================
   RAILWAY COLONY GANESH UTSAV SAMITI
   WEBSITE JAVASCRIPT + SUPABASE GALLERY
========================================================= */


/* =========================================================
   SUPABASE
========================================================= */

const SUPABASE_URL =
    "https://ewfglrnllbdngzhixkqm.supabase.co";

const SUPABASE_KEY =
    "sb_publishable_MD3tKZLy1240PioluSbH4g_4w5YMTnM";

const supabaseClient =
    window.supabase.createClient(
        SUPABASE_URL,
        SUPABASE_KEY
    );


document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       CONFIG
    ===================================================== */

    const CONFIG = {

        samitiName:
            "Railway Colony Ganesh Utsav Samiti",

        city:
            "Champa, Chhattisgarh",

        instagramUsername:
            "@railwaycolony_ganeshutsav_cph",

        instagramUrl:
            "https://www.instagram.com/railwaycolony_ganeshutsav_cph/",

        address:
            "Railway Colony, Champa, Chhattisgarh",

        googleMapsUrl:
            "https://maps.app.goo.gl/iWrGcVQCoZLjcJ8e6",

        contactNumbers: [
            "+91 97521 18871",
            "+91 91319 82363"
        ],

        whatsappNumbers: [
            "919752118871",
            "919131982363"
        ]

    };


    /* =====================================================
       MEMBERS
    ===================================================== */

    const MEMBERS = [

        {
            name: "Vaibhav Rathore",
            instagram: [
                {
                    username: "@_.vaibhav_rathore_",
                    url: "https://www.instagram.com/_.vaibhav_rathore_/"
                }
            ]
        },

        {
            name: "Gaurav Lahare",
            instagram: [
                {
                    username: "@espresso.goluu",
                    url: "https://www.instagram.com/espresso.goluu/"
                }
            ]
        },

        {
            name: "Manish Suryavanshi",
            instagram: [
                {
                    username: "@cg_manish_king_100000k",
                    url: "https://www.instagram.com/cg_manish_king_100000k/"
                },
                {
                    username: "@mano.jk12345",
                    url: "https://www.instagram.com/mano.jk12345/"
                }
            ]
        },

        {
            name: "Aditya Roy",
            instagram: [
                {
                    username: "@adityaax_16",
                    url: "https://www.instagram.com/adityaax_16/"
                }
            ]
        },

        {
            name: "Virat Srivatsav",
            instagram: [
                {
                    username: "@srv_virat_05",
                    url: "https://www.instagram.com/srv_virat_05/"
                }
            ]
        },

        {
            name: "Yash Raj Suryavanshi",
            instagram: [
                {
                    username: "@cg_yash_raj_350",
                    url: "https://www.instagram.com/cg_yash_raj_350/"
                }
            ]
        },

        {
            name: "Rahul Singh",
            instagram: [
                {
                    username: "@singh_5284",
                    url: "https://www.instagram.com/singh_5284/"
                }
            ]
        },

        {
            name: "Himanshu Patle",
            instagram: [
                {
                    username: "@_himanshu_patle.01",
                    url: "https://www.instagram.com/_himanshu_patle.01/"
                }
            ]
        },

        {
            name: "Rupesh",
            instagram: [
                {
                    username: "@__10__rpsh.s.knwr__",
                    url: "https://www.instagram.com/__10__rpsh.s.knwr__/"
                }
            ]
        },

        {
            name: "Abhishek Thakur",
            instagram: [
                {
                    username: "@a__t_official",
                    url: "https://www.instagram.com/a__t_official/"
                }
            ]
        }

    ];


    /* =====================================================
       VIDEO CATEGORIES
    ===================================================== */

    const VIDEO_CATEGORIES = [

        {
            title: "Pandal Making",
            icon: "🔨",
            folder: "pandal-making"
        },

        {
            title: "Ganesh Ji Aagman",
            icon: "🐘",
            folder: "ganesh-ji-aagman"
        },

        {
            title: "First Puja & Aarti",
            icon: "🪔",
            folder: "first-puja-aarti"
        },

        {
            title: "Ganesh Utsav Events",
            icon: "🎉",
            folder: "ganesh-utsav-events"
        },

        {
            title: "Hawan Puja",
            icon: "🔥",
            folder: "hawan-puja"
        },

        {
            title: "Visarjan Dance",
            icon: "🥁",
            folder: "visarjan-dance"
        },

        {
            title: "Final Goodbye & Visarjan",
            icon: "🙏",
            folder: "final-goodbye-visarjan"
        }

    ];


    /* =====================================================
       HELPERS
    ===================================================== */

    function get(id) {
        return document.getElementById(id);
    }


    function setText(id, value) {

        const element = get(id);

        if (element) {
            element.textContent = value;
        }

    }


    function setHref(id, value) {

        const element = get(id);

        if (element) {
            element.href = value;
        }

    }


    /* =====================================================
       INSTAGRAM SVG
    ===================================================== */

    function instagramIcon() {

        return `
            <svg viewBox="0 0 24 24"
                 aria-hidden="true"
                 xmlns="http://www.w3.org/2000/svg">

                <rect
                    x="3"
                    y="3"
                    width="18"
                    height="18"
                    rx="5">
                </rect>

                <circle
                    cx="12"
                    cy="12"
                    r="4">
                </circle>

                <circle
                    cx="17.5"
                    cy="6.5"
                    r="1">
                </circle>

            </svg>
        `;

    }


    /* =====================================================
       BASIC DATA
    ===================================================== */

    setText(
        "officialInstagram",
        CONFIG.instagramUsername
    );

    setHref(
        "officialInstagramLink",
        CONFIG.instagramUrl
    );

    setHref(
        "mapsLink",
        CONFIG.googleMapsUrl
    );

    setText(
        "currentYear",
        new Date().getFullYear()
    );


    /* =====================================================
       MEMBERS
    ===================================================== */

    function renderMembers() {

        const container =
            get("membersGrid");

        if (!container) {
            return;
        }

        container.innerHTML = "";

        MEMBERS.forEach(member => {

            const card =
                document.createElement("article");

            card.className =
                "member-card reveal";

            const initials =
                member.name
                    .split(" ")
                    .map(word => word[0])
                    .join("")
                    .slice(0, 2)
                    .toUpperCase();

            let instagramHTML = "";

            member.instagram.forEach(account => {

                instagramHTML += `
                    <a
                        href="${account.url}"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="member-instagram"
                    >
                        ${instagramIcon()}

                        <span>
                            ${account.username}
                        </span>
                    </a>
                `;

            });

            card.innerHTML = `

                <div class="member-avatar">
                    ${initials}
                </div>

                <h3>
                    ${member.name}
                </h3>

                <div class="member-instagram-list">
                    ${instagramHTML}
                </div>

            `;

            container.appendChild(card);

        });

    }


    renderMembers();


    /* =====================================================
       SUPABASE PHOTO GALLERY
    ===================================================== */

    async function loadPhotos() {

        const gallery =
            get("photoGallery");

        if (!gallery) {
            return;
        }

        gallery.innerHTML = `

            <div class="gallery-loading">
                <div class="gallery-spinner"></div>
                <span>Loading memories...</span>
            </div>

        `;

        try {

            const {
                data,
                error
            } = await supabaseClient
                .storage
                .from("photos")
                .list("", {
                    limit: 100,
                    sortBy: {
                        column: "created_at",
                        order: "desc"
                    }
                });

            if (error) {
                throw error;
            }

            const files =
                (data || []).filter(
                    file =>
                        file.name &&
                        !file.name.startsWith(".")
                );

            if (!files.length) {

                gallery.innerHTML = `

                    <div class="gallery-coming-soon reveal">

                        <div class="coming-icon">
                            📸
                        </div>

                        <strong>
                            Photos Coming Soon
                        </strong>

                        <span>
                            Real Ganesh Utsav photos will appear here.
                        </span>

                    </div>

                `;

                return;
            }

            gallery.innerHTML = "";

            files.forEach(file => {

                const {
                    data: publicData
                } = supabaseClient
                    .storage
                    .from("photos")
                    .getPublicUrl(file.name);

                const image =
                    document.createElement("div");

                image.className =
                    "gallery-item reveal";

                image.innerHTML = `

                    <img
                        src="${publicData.publicUrl}"
                        alt="Railway Colony Ganesh Utsav"
                        loading="lazy"
                        data-lightbox="${publicData.publicUrl}"
                    >

                `;

                gallery.appendChild(image);

            });

            setupReveal();

        } catch (error) {

            console.error(
                "Photo loading error:",
                error
            );

            gallery.innerHTML = `

                <div class="gallery-coming-soon reveal">

                    <div class="coming-icon">
                        📸
                    </div>

                    <strong>
                        Gallery will be updated soon
                    </strong>

                    <span>
                        Please check again later.
                    </span>

                </div>

            `;

        }

    }


    loadPhotos();


    /* =====================================================
       SUPABASE VIDEO GALLERY
    ===================================================== */

    async function loadVideos() {

        const container =
            get("videoCategories");

        if (!container) {
            return;
        }

        container.innerHTML = "";

        for (const category of VIDEO_CATEGORIES) {

            const section =
                document.createElement("div");

            section.className =
                "video-category reveal";

            section.innerHTML = `

                <div class="video-category-header">

                    <div class="video-category-icon">
                        ${category.icon}
                    </div>

                    <h3>
                        ${category.title}
                    </h3>

                </div>

                <div
                    class="video-grid"
                    data-video-folder="${category.folder}"
                >

                    <div class="video-card">
                        <span>
                            Loading videos...
                        </span>
                    </div>

                </div>

            `;

            container.appendChild(section);

            await loadCategoryVideos(
                category,
                section.querySelector(".video-grid")
            );

        }

        setupReveal();

    }


    async function loadCategoryVideos(
        category,
        videoGrid
    ) {

        try {

            const {
                data,
                error
            } = await supabaseClient
                .storage
                .from("videos")
                .list(category.folder, {
                    limit: 100,
                    sortBy: {
                        column: "created_at",
                        order: "desc"
                    }
                });

            if (error) {
                throw error;
            }

            const files =
                (data || []).filter(
                    file =>
                        file.name &&
                        !file.name.startsWith(".")
                );

            if (!files.length) {

                videoGrid.innerHTML = `

                    <div class="video-card video-empty">

                        <span>
                            ▶
                        </span>

                        <strong>
                            Videos coming soon
                        </strong>

                    </div>

                `;

                return;

            }

            videoGrid.innerHTML = "";

            files.forEach(file => {

                const filePath =
                    `${category.folder}/${file.name}`;

                const {
                    data: publicData
                } = supabaseClient
                    .storage
                    .from("videos")
                    .getPublicUrl(filePath);

                const card =
                    document.createElement("div");

                card.className =
                    "video-card video-card-real";

                card.innerHTML = `

                    <video
                        controls
                        preload="metadata"
                        playsinline
                    >
                        <source
                            src="${publicData.publicUrl}"
                        >
                        Your browser does not support video.
                    </video>

                `;

                videoGrid.appendChild(card);

            });

        } catch (error) {

            console.error(
                "Video loading error:",
                error
            );

            videoGrid.innerHTML = `

                <div class="video-card video-empty">

                    <span>
                        ⚠️
                    </span>

                    <strong>
                        Videos coming soon
                    </strong>

                </div>

            `;

        }

    }


    loadVideos();


    /* =====================================================
       CONTACT
    ===================================================== */

    function renderContacts() {

        const container =
            get("contactGrid");

        if (!container) {
            return;
        }

        container.innerHTML = "";


        CONFIG.contactNumbers.forEach(number => {

            const telNumber =
                number.replace(/\D/g, "");

            const card =
                document.createElement("div");

            card.className =
                "contact-card reveal";

            card.innerHTML = `

                <div class="contact-icon">
                    📞
                </div>

                <h3>
                    Call
                </h3>

                <p>
                    ${number}
                </p>

                <a
                    href="tel:+${telNumber}"
                    class="contact-link"
                >
                    Call Now
                </a>

            `;

            container.appendChild(card);

        });


        CONFIG.whatsappNumbers.forEach(
            (number, index) => {

                const displayNumber =
                    CONFIG.contactNumbers[index];

                const card =
                    document.createElement("div");

                card.className =
                    "contact-card reveal";

                card.innerHTML = `

                    <div class="contact-icon">
                        💬
                    </div>

                    <h3>
                        WhatsApp
                    </h3>

                    <p>
                        ${displayNumber}
                    </p>

                    <a
                        href="https://wa.me/${number}"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="contact-link"
                    >
                        WhatsApp
                    </a>

                `;

                container.appendChild(card);

            }
        );


        const instagramCard =
            document.createElement("div");

        instagramCard.className =
            "contact-card reveal";

        instagramCard.innerHTML = `

            <div class="contact-icon instagram-contact">
                ${instagramIcon()}
            </div>

            <h3>
                Instagram
            </h3>

            <p>
                ${CONFIG.instagramUsername}
            </p>

            <a
                href="${CONFIG.instagramUrl}"
                target="_blank"
                rel="noopener noreferrer"
                class="contact-link instagram-contact-link"
            >
                Instagram
            </a>

        `;

        container.appendChild(
            instagramCard
        );

    }


    renderContacts();


    /* =====================================================
       MOBILE MENU
    ===================================================== */

    const menuToggle =
        get("menuToggle");

    const navMenu =
        get("navMenu");

    if (menuToggle && navMenu) {

        menuToggle.addEventListener(
            "click",
            () => {

                navMenu.classList.toggle(
                    "active"
                );

            }
        );


        navMenu
            .querySelectorAll("a")
            .forEach(link => {

                link.addEventListener(
                    "click",
                    () => {

                        navMenu.classList.remove(
                            "active"
                        );

                    }
                );

            });

    }


    /* =====================================================
       SHARE
    ===================================================== */

    const shareButton =
        get("shareButton");

    if (shareButton) {

        shareButton.addEventListener(
            "click",
            async () => {

                const shareData = {

                    title:
                        CONFIG.samitiName,

                    text:
                        "Railway Colony Ganesh Utsav Samiti, Champa, Chhattisgarh",

                    url:
                        window.location.href

                };

                try {

                    if (navigator.share) {

                        await navigator.share(
                            shareData
                        );

                        showToast(
                            "Website shared successfully 🙏"
                        );

                    } else {

                        await navigator.clipboard.writeText(
                            window.location.href
                        );

                        showToast(
                            "Website link copied!"
                        );

                    }

                } catch (error) {

                    if (
                        error &&
                        error.name !== "AbortError"
                    ) {

                        showToast(
                            "Could not share the website."
                        );

                    }

                }

            }
        );

    }


    /* =====================================================
       TOAST
    ===================================================== */

    const toast =
        get("toast");

    let toastTimer;


    function showToast(message) {

        if (!toast) {
            return;
        }

        clearTimeout(toastTimer);

        toast.textContent =
            message;

        toast.classList.add(
            "show"
        );

        toastTimer =
            setTimeout(() => {

                toast.classList.remove(
                    "show"
                );

            }, 2800);

    }


    /* =====================================================
       SCROLL REVEAL
    ===================================================== */

    function setupReveal() {

        const elements =
            document.querySelectorAll(
                ".reveal:not(.revealed)"
            );

        if (
            !("IntersectionObserver" in window)
        ) {

            elements.forEach(element => {

                element.classList.add(
                    "revealed"
                );

            });

            return;

        }


        const observer =
            new IntersectionObserver(
                entries => {

                    entries.forEach(entry => {

                        if (
                            entry.isIntersecting
                        ) {

                            entry.target.classList.add(
                                "revealed"
                            );

                            observer.unobserve(
                                entry.target
                            );

                        }

                    });

                },
                {
                    threshold: 0.12
                }
            );


        elements.forEach(element => {

            observer.observe(
                element
            );

        });

    }


    setupReveal();


    /* =====================================================
       FALLING PETALS
    ===================================================== */

    const petals =
        get("petals");


    function createPetal() {

        if (!petals) {
            return;
        }

        const petal =
            document.createElement("div");

        petal.className =
            "petal";

        const size =
            Math.random() * 6 + 5;

        const left =
            Math.random() * 100;

        const duration =
            Math.random() * 5 + 6;

        const delay =
            Math.random() * 2;

        petal.style.left =
            `${left}%`;

        petal.style.width =
            `${size}px`;

        petal.style.height =
            `${size * 1.6}px`;

        petal.style.animationDuration =
            `${duration}s`;

        petal.style.animationDelay =
            `${delay}s`;

        petal.style.opacity =
            `${Math.random() * 0.5 + 0.25}`;

        petals.appendChild(
            petal
        );

        setTimeout(() => {

            petal.remove();

        }, (duration + delay) * 1000 + 500);

    }


    for (
        let i = 0;
        i < 18;
        i++
    ) {

        setTimeout(
            createPetal,
            i * 300
        );

    }


    setInterval(
        createPetal,
        650
    );


    /* =====================================================
       LIGHTBOX
    ===================================================== */

    const lightbox =
        get("lightbox");

    const lightboxImage =
        get("lightboxImage");

    const lightboxClose =
        get("lightboxClose");


    function closeLightbox() {

        if (!lightbox) {
            return;
        }

        lightbox.classList.remove(
            "active"
        );

        if (lightboxImage) {
            lightboxImage.src = "";
        }

    }


    if (lightboxClose) {

        lightboxClose.addEventListener(
            "click",
            closeLightbox
        );

    }


    if (lightbox) {

        lightbox.addEventListener(
            "click",
            event => {

                if (
                    event.target === lightbox
                ) {

                    closeLightbox();

                }

            }
        );

    }


    document.addEventListener(
        "keydown",
        event => {

            if (
                event.key === "Escape"
            ) {

                closeLightbox();

            }

        }
    );


    document.addEventListener(
        "click",
        event => {

            const image =
                event.target.closest(
                    "[data-lightbox]"
                );

            if (!image) {
                return;
            }

            if (
                !lightbox ||
                !lightboxImage
            ) {

                return;

            }

            lightboxImage.src =
                image.dataset.lightbox;

            lightbox.classList.add(
                "active"
            );

        }
    );


    /* =====================================================
       NAVBAR
    ===================================================== */

    const navbar =
        document.querySelector(
            ".navbar"
        );


    function updateNavbar() {

        if (!navbar) {
            return;
        }

        if (
            window.scrollY > 50
        ) {

            navbar.style.background =
                "rgba(7, 3, 10, 0.92)";

            navbar.style.boxShadow =
                "0 10px 35px rgba(0,0,0,0.25)";

        } else {

            navbar.style.background =
                "rgba(7, 3, 10, 0.72)";

            navbar.style.boxShadow =
                "none";

        }

    }


    window.addEventListener(
        "scroll",
        updateNavbar,
        {
            passive: true
        }
    );

    updateNavbar();


    /* =====================================================
       ACTIVE NAVIGATION
    ===================================================== */

    const sections =
        document.querySelectorAll(
            "main section[id]"
        );

    const navLinks =
        document.querySelectorAll(
            "#navMenu a"
        );


    if (
        sections.length &&
        navLinks.length
    ) {

        const sectionObserver =
            new IntersectionObserver(
                entries => {

                    entries.forEach(entry => {

                        if (
                            entry.isIntersecting
                        ) {

                            navLinks.forEach(link => {

                                link.classList.remove(
                                    "active-nav"
                                );

                            });

                            const activeLink =
                                document.querySelector(
                                    `#navMenu a[href="#${entry.target.id}"]`
                                );

                            if (activeLink) {

                                activeLink.classList.add(
                                    "active-nav"
                                );

                            }

                        }

                    });

                },
                {
                    rootMargin:
                        "-35% 0px -55% 0px"
                }
            );


        sections.forEach(section => {

            sectionObserver.observe(
                section
            );

        });

    }


    console.log(
        "🙏 Railway Colony Ganesh Utsav Samiti website loaded."
    );

});