/* =====================================================
   RAILWAY COLONY GANESH UTSAV SAMITI
   MAIN JAVASCRIPT
===================================================== */


/* =====================================================
   CONFIG
===================================================== */

const CONFIG = {

    instagram:
        "https://www.instagram.com/railwaycolony_ganeshutsav_cph/",

    instagramUsername:
        "@railwaycolony_ganeshutsav_cph",

    contacts: [

        {
            name: "Contact 1",
            number: "+91 97521 18871",
            tel: "+919752118871",
            whatsapp: "919752118871"
        },

        {
            name: "Contact 2",
            number: "+91 91319 82363",
            tel: "+919131982363",
            whatsapp: "919131982363"
        }

    ]

};



/* =====================================================
   MEMBERS
===================================================== */

const members = [

    {
        name: "Vaibhav Rathore",
        instagram: "@_.vaibhav_rathore_",
        url: "https://www.instagram.com/_.vaibhav_rathore_/"
    },

    {
        name: "Gaurav Lahare",
        instagram: "@espresso.goluu",
        url: "https://www.instagram.com/espresso.goluu/"
    },

    {
        name: "Manish Suryavanshi",
        instagram: [
            "@cg_manish_king_100000k",
            "@mano.jk12345"
        ],
        url: [
            "https://www.instagram.com/cg_manish_king_100000k/",
            "https://www.instagram.com/mano.jk12345/"
        ]
    },

    {
        name: "Aditya Roy",
        instagram: "@adityaax_16",
        url: "https://www.instagram.com/adityaax_16/"
    },

    {
        name: "Virat Srivatsav",
        instagram: "@srv_virat_05",
        url: "https://www.instagram.com/srv_virat_05/"
    },

    {
        name: "Yash Raj Suryavanshi",
        instagram: "@cg_yash_raj_350",
        url: "https://www.instagram.com/cg_yash_raj_350/"
    },

    {
        name: "Rahul Singh",
        instagram: "@singh_5284",
        url: "https://www.instagram.com/singh_5284/"
    },

    {
        name: "Himanshu Patle",
        instagram: "@_himanshu_patle.01",
        url: "https://www.instagram.com/_himanshu_patle.01/"
    },

    {
        name: "Rupesh",
        instagram: "@__10__rpsh.s.knwr__",
        url: "https://www.instagram.com/__10__rpsh.s.knwr__/"
    },

    {
        name: "Abhishek Thakur",
        instagram: "@a__t_official",
        url: "https://www.instagram.com/a__t_official/"
    }

];



/* =====================================================
   VIDEOS
===================================================== */

const videoGroups = [

    {
        number: "01",
        category: "GANESH UTSAV",
        title: "The Celebration",
        videos: [

            {
                title: "Ganesh Ji Aagman",
                id: "1-ULjnjaF273tj76zyDpQ1g8mFLxIDeuX"
            },

            {
                title: "1st Puja",
                id: "16l0TA9FE8DbLCdICgMFyETZwsS1lRqKi"
            },

            {
                title: "Aarti",
                id: "1lYOmhJaWLUDmiUPxtvcSSV9IxQTKFxHQ"
            },

            {
                title: "Ganesh Utsav Events",
                id: "1YiISt6ViCcaCvNmNcXprs9NjJr1mfZik"
            },

            {
                title: "Havan",
                id: "1gqPpC_wGqWcn3rM6ssWMlr5kyoRmGza-"
            },

            {
                title: "Visarjan Dance",
                id: "15-TUmbF6SlIL_qcY8dwTjCuB59n64EX1"
            },

            {
                title: "Visarjan Dance",
                id: "17H6t8w2pAF7zj8gW7b9d0jsipcmY_HME"
            },

            {
                title: "Final Visarjan",
                id: "1Xwhnq9r7qFsobS0C_LGxjYuzvkzUEStM"
            }

        ]
    },


    {
        number: "02",
        category: "SAMITI MEMBERS",
        title: "The Memories",
        videos: [

            {
                title: "Funny Video",
                id: "1aPQW0l6PllK4zSfFSVuKWnpoYClxOdm8"
            },

            {
                title: "Transition Video",
                id: "1RRn-vy0A9t_AoAgUhVk5AQqwRrcDB7aN"
            }

        ]
    },


    {
        number: "03",
        category: "GANESH JI",
        title: "Divine Moments",
        videos: [

            {
                title: "Ganesh Ji Video",
                id: "1sbE0yRBKOensgDJyM7yw_Kq3p5w9US0t"
            }

        ]
    },


    {
        number: "04",
        category: "OTHER VIDEOS",
        title: "The Highlights",
        videos: [

            {
                title: "Chanda Collection",
                id: "1rCp5Wwb3V-XifKXT36uUSCgT2Txh_4d5"
            },

            {
                title: "Murtikar Video Edit",
                id: "1Q-JQIvXeRG_-jlf6BXh2vekp_Is872Xh"
            }

        ]
    },


    {
        number: "05",
        category: "PANDAL MAKING",
        title: "Coming Soon",
        comingSoon: true
    }

];



/* =====================================================
   INLINE INSTAGRAM ICON
===================================================== */

function instagramIcon(className = "") {

    return `
        <svg
            class="instagram-svg ${className}"
            viewBox="0 0 24 24"
            aria-hidden="true"
        >

            <rect
                x="2"
                y="2"
                width="20"
                height="20"
                rx="5"
                fill="url(#instagramGradient)"
            />

            <rect
                x="6.5"
                y="6.5"
                width="11"
                height="11"
                rx="3"
                fill="none"
                stroke="white"
                stroke-width="1.7"
            />

            <circle
                cx="12"
                cy="12"
                r="2.7"
                fill="none"
                stroke="white"
                stroke-width="1.7"
            />

            <circle
                cx="16.7"
                cy="7.5"
                r="1"
                fill="white"
            />

        </svg>
    `;
}



/* =====================================================
   MEMBERS
===================================================== */

function renderMembers() {

    const grid =
        document.getElementById("membersGrid");

    if (!grid) return;


    grid.innerHTML = "";


    members.forEach((member, index) => {

        const card =
            document.createElement("article");

        card.className =
            "member-card reveal";


        const firstLetter =
            member.name.charAt(0).toUpperCase();


        let instagramLinks = "";


        if (Array.isArray(member.instagram)) {

            member.instagram.forEach(
                (username, i) => {

                    instagramLinks += `

                        <a
                            href="${member.url[i]}"
                            target="_blank"
                            rel="noopener noreferrer"
                            class="member-instagram"
                        >

                            ${instagramIcon()}

                            ${username}

                        </a>

                    `;

                }
            );

        } else {

            instagramLinks = `

                <a
                    href="${member.url}"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="member-instagram"
                >

                    ${instagramIcon()}

                    ${member.instagram}

                </a>

            `;

        }


        card.innerHTML = `

            <div class="member-avatar">
                ${firstLetter}
            </div>

            <div class="member-info">

                <h3>
                    ${member.name}
                </h3>

                <div class="member-instagrams">
                    ${instagramLinks}
                </div>

            </div>

        `;


        grid.appendChild(card);

    });


    requestAnimationFrame(() => {

        observeReveals();

    });

}



/* =====================================================
   VIDEO CARD
===================================================== */

function createVideoCard(video) {

    return `

        <article class="video-card reveal">

            <div class="video-frame">

                <iframe
                    class="drive-video"
                    src="https://drive.google.com/file/d/${video.id}/preview"
                    title="${video.title}"
                    allow="autoplay; fullscreen"
                    allowfullscreen
                    loading="lazy"
                ></iframe>

            </div>

            <div class="video-info">

                <h4>
                    ${video.title}
                </h4>

                <span>
                    GOOGLE DRIVE VIDEO
                </span>

            </div>

        </article>

    `;

}



/* =====================================================
   VIDEO COMING SOON
===================================================== */

function createComingSoonCard() {

    return `

        <article class="video-card reveal">

            <div class="video-coming">

                <div class="video-coming-inner">

                    <div class="video-coming-icon">
                        🎬
                    </div>

                    <h4>
                        Pandal Making
                    </h4>

                    <p>
                        This video will be added here soon.
                    </p>

                </div>

            </div>

            <div class="video-info">

                <h4>
                    Coming Soon
                </h4>

                <span>
                    VIDEO WILL BE ADDED LATER
                </span>

            </div>

        </article>

    `;

}



/* =====================================================
   VIDEO GROUP
===================================================== */

function createVideoGroup(group) {

    const section =
        document.createElement("section");

    section.className =
        "video-category";


    let cards = "";


    if (group.comingSoon) {

        cards =
            createComingSoonCard();

    } else {

        cards =
            group.videos
                .map(createVideoCard)
                .join("");

    }


    const countText =
        group.comingSoon
            ? "COMING SOON"
            : `${group.videos.length} VIDEO${group.videos.length === 1 ? "" : "S"}`;


    section.innerHTML = `

        <div class="video-category-heading">

            <div>

                <span class="video-category-number">
                    ${group.number} • ${group.category}
                </span>

                <h3 class="video-category-title">
                    ${group.title}
                </h3>

                <span class="video-category-subtitle">
                    ${group.comingSoon
                        ? "Video will be uploaded later"
                        : group.category === "GANESH UTSAV"
                            ? "Moments from our celebration"
                            : group.category === "SAMITI MEMBERS"
                                ? "Memories with the team"
                                : group.category === "GANESH JI"
                                    ? "Moments of devotion"
                                    : "Special moments"
                    }
                </span>

            </div>

            <span class="video-count">
                ${countText}
            </span>

        </div>


        <div class="video-grid">

            ${cards}

        </div>

    `;


    return section;

}



/* =====================================================
   VIDEO GALLERY
===================================================== */

function renderVideos() {

    const gallery =
        document.getElementById("videoGallery");

    if (!gallery) return;


    gallery.innerHTML = "";


    videoGroups.forEach(group => {

        gallery.appendChild(
            createVideoGroup(group)
        );

    });


    requestAnimationFrame(() => {

        observeReveals();

    });

}



/* =====================================================
   CONTACTS
===================================================== */

function renderContacts() {

    const grid =
        document.getElementById("contactGrid");

    if (!grid) return;


    grid.innerHTML = "";


    CONFIG.contacts.forEach(contact => {

        const card =
            document.createElement("article");

        card.className =
            "contact-card reveal";


        card.innerHTML = `

            <div class="contact-icon">
                📞
            </div>

            <div class="contact-info">

                <span>
                    ${contact.name}
                </span>

                <strong>
                    ${contact.number}
                </strong>

                <div class="contact-actions">

                    <a
                        href="tel:${contact.tel}"
                        class="contact-action"
                    >
                        Call
                    </a>

                    <a
                        href="https://wa.me/${contact.whatsapp}"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="contact-action"
                    >
                        WhatsApp
                    </a>

                </div>

            </div>

        `;


        grid.appendChild(card);

    });


    /* Official Instagram */

    const instagramCard =
        document.createElement("article");

    instagramCard.className =
        "contact-card instagram-contact reveal";


    instagramCard.innerHTML = `

        <div class="contact-icon">

            ${instagramIcon()}

        </div>

        <div class="contact-info">

            <span>
                OFFICIAL INSTAGRAM
            </span>

            <strong>
                ${CONFIG.instagramUsername}
            </strong>

            <div class="contact-actions">

                <a
                    href="${CONFIG.instagram}"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="contact-action"
                >
                    Open Instagram
                </a>

            </div>

        </div>

    `;


    grid.appendChild(instagramCard);


    requestAnimationFrame(() => {

        observeReveals();

    });

}



/* =====================================================
   PETAL RAIN
===================================================== */

function createPetal() {

    const container =
        document.getElementById("petalContainer");

    if (!container) return;


    const petal =
        document.createElement("span");

    petal.className = "petal";


    const left =
        Math.random() * 100;

    const duration =
        7 + Math.random() * 8;

    const delay =
        Math.random() * 2;

    const drift =
        (Math.random() * 220) - 110;


    petal.style.left =
        `${left}%`;

    petal.style.animationDuration =
        `${duration}s, ${1.5 + Math.random() * 2}s`;

    petal.style.animationDelay =
        `${delay}s`;

    petal.style.setProperty(
        "--drift",
        `${drift}px`
    );


    const scale =
        0.55 + Math.random() * 0.9;

    petal.style.transform =
        `scale(${scale})`;


    container.appendChild(petal);


    setTimeout(() => {

        petal.remove();

    }, (duration + delay) * 1000 + 1000);

}



/* =====================================================
   NAVBAR
===================================================== */

function setupNavbar() {

    const navbar =
        document.getElementById("navbar");

    if (!navbar) return;


    function updateNavbar() {

        if (window.scrollY > 30) {

            navbar.classList.add("scrolled");

        } else {

            navbar.classList.remove("scrolled");

        }

    }


    window.addEventListener(
        "scroll",
        updateNavbar,
        { passive: true }
    );


    updateNavbar();

}



/* =====================================================
   MOBILE MENU
===================================================== */

function setupMobileMenu() {

    const toggle =
        document.getElementById("menuToggle");

    const menu =
        document.getElementById("navMenu");

    if (!toggle || !menu) return;


    toggle.addEventListener(
        "click",
        () => {

            menu.classList.toggle("open");

        }
    );


    menu.querySelectorAll("a").forEach(link => {

        link.addEventListener(
            "click",
            () => {

                menu.classList.remove("open");

            }
        );

    });

}



/* =====================================================
   SHARE
===================================================== */

function showToast(message) {

    const toast =
        document.getElementById("toast");

    const toastMessage =
        document.getElementById("toastMessage");

    if (!toast || !toastMessage) return;


    toastMessage.textContent =
        message;


    toast.classList.add("show");


    clearTimeout(
        window.toastTimer
    );


    window.toastTimer =
        setTimeout(() => {

            toast.classList.remove("show");

        }, 2800);

}



function setupShare() {

    const button =
        document.getElementById("shareButton");

    if (!button) return;


    button.addEventListener(
        "click",
        async () => {

            const shareData = {

                title:
                    "Railway Colony Ganesh Utsav Samiti",

                text:
                    "Check out Railway Colony Ganesh Utsav Samiti, Champa, Chhattisgarh.",

                url:
                    window.location.href

            };


            try {

                if (
                    navigator.share
                ) {

                    await navigator.share(
                        shareData
                    );

                    return;

                }


                await navigator.clipboard.writeText(
                    window.location.href
                );


                showToast(
                    "Website link copied!"
                );

            } catch (error) {

                if (
                    error &&
                    error.name === "AbortError"
                ) {

                    return;

                }


                showToast(
                    "Share cancelled."
                );

            }

        }
    );

}



/* =====================================================
   SCROLL REVEAL
===================================================== */

let revealObserver;


function observeReveals() {

    const elements =
        document.querySelectorAll(
            ".reveal:not(.reveal-observed)"
        );


    if (!elements.length) return;


    if (!revealObserver) {

        revealObserver =
            new IntersectionObserver(
                entries => {

                    entries.forEach(
                        entry => {

                            if (
                                entry.isIntersecting
                            ) {

                                entry.target.classList.add(
                                    "visible"
                                );

                                revealObserver.unobserve(
                                    entry.target
                                );

                            }

                        }
                    );

                },
                {
                    threshold: 0.12,
                    rootMargin: "0px 0px -40px 0px"
                }
            );

    }


    elements.forEach(element => {

        element.classList.add(
            "reveal-observed"
        );

        revealObserver.observe(
            element
        );

    });

}



/* =====================================================
   SMOOTH SCROLL FALLBACK
===================================================== */

function setupSmoothScroll() {

    document.querySelectorAll(
        'a[href^="#"]'
    ).forEach(link => {

        link.addEventListener(
            "click",
            event => {

                const targetId =
                    link.getAttribute("href");


                if (
                    !targetId ||
                    targetId === "#"
                ) {

                    return;

                }


                const target =
                    document.querySelector(
                        targetId
                    );


                if (!target) return;


                event.preventDefault();


                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }
        );

    });

}



/* =====================================================
   INITIALIZE
===================================================== */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        renderMembers();

        renderVideos();

        renderContacts();

        setupNavbar();

        setupMobileMenu();

        setupShare();

        setupSmoothScroll();

        observeReveals();


        /* Start flower/petal rain */

        setInterval(
            createPetal,
            850
        );


        /* Initial petals */

        for (
            let i = 0;
            i < 8;
            i++
        ) {

            setTimeout(
                createPetal,
                i * 250
            );

        }

    }
);