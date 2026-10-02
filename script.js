/* =====================================================
   WEBSITE CONFIGURATION
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
   SAMITI MEMBERS
===================================================== */

const members = [

    {
        name: "Vaibhav Rathore",
        instagram: "@_.vaibhav_rathore_",
        instagramUrl:
            "https://www.instagram.com/_.vaibhav_rathore_/"
    },

    {
        name: "Gaurav Lahare",
        instagram: "@espresso.goluu",
        instagramUrl:
            "https://www.instagram.com/espresso.goluu/"
    },

    {
        name: "Manish Suryavanshi",
        instagram: "@cg_manish_king_100000k",
        instagramUrl:
            "https://www.instagram.com/cg_manish_king_100000k/",
        instagram2: "@mano.jk12345",
        instagramUrl2:
            "https://www.instagram.com/mano.jk12345/"
    },

    {
        name: "Aditya Roy",
        instagram: "@adityaax_16",
        instagramUrl:
            "https://www.instagram.com/adityaax_16/"
    },

    {
        name: "Virat Srivatsav",
        instagram: "@srv_virat_05",
        instagramUrl:
            "https://www.instagram.com/srv_virat_05/"
    },

    {
        name: "Yash Raj Suryavanshi",
        instagram: "@cg_yash_raj_350",
        instagramUrl:
            "https://www.instagram.com/cg_yash_raj_350/"
    },

    {
        name: "Rahul Singh",
        instagram: "@singh_5284",
        instagramUrl:
            "https://www.instagram.com/singh_5284/"
    },

    {
        name: "Himanshu Patle",
        instagram: "@_himanshu_patle.01",
        instagramUrl:
            "https://www.instagram.com/_himanshu_patle.01/"
    },

    {
        name: "Rupesh",
        instagram: "@__10__rpsh.s.knwr__",
        instagramUrl:
            "https://www.instagram.com/__10__rpsh.s.knwr__/"
    },

    {
        name: "Abhishek Thakur",
        instagram: "@a__t_official",
        instagramUrl:
            "https://www.instagram.com/a__t_official/"
    }

];


/* =====================================================
   PHOTO GALLERY
===================================================== */

const photos = [

    /*
    Add photos later.

    Example:

    {
        image: "images/photo1.jpg",
        title: "Ganesh Utsav"
    }

    */

];


/* =====================================================
   VIDEO GALLERY
===================================================== */

const videoCategories = [

    {
        title: "Pandal Making",
        icon: "🏗️",
        description:
            "Building and decorating our beautiful Ganesh Utsav pandal.",
        videos: []
    },

    {
        title: "Ganesh Ji Aagman",
        icon: "🥁",
        description:
            "The grand arrival of Ganesh Ji.",
        videos: []
    },

    {
        title: "First Puja & Aarti",
        icon: "🪔",
        description:
            "The first puja and aarti of Ganesh Utsav.",
        videos: []
    },

    {
        title: "Ganesh Utsav Events",
        icon: "🎉",
        description:
            "Games, celebrations and special Ganesh Utsav events.",
        videos: []
    },

    {
        title: "Hawan Puja",
        icon: "🔥",
        description:
            "Sacred hawan and puja moments.",
        videos: []
    },

    {
        title: "Visarjan Dance",
        icon: "💃",
        description:
            "Dance, celebration and unforgettable visarjan moments.",
        videos: []
    },

    {
        title: "Final Goodbye & Visarjan",
        icon: "🙏",
        description:
            "The final farewell to Ganesh Ji.",
        videos: []
    }

];


/* =====================================================
   OFFICIAL INSTAGRAM
===================================================== */

function setupOfficialInstagram() {

    const username =
        document.getElementById(
            "officialInstagram"
        );

    const link =
        document.getElementById(
            "officialInstagramLink"
        );

    const contactLink =
        document.getElementById(
            "contactInstagramLink"
        );


    if (username) {

        username.textContent =
            CONFIG.instagramUsername;

    }


    if (link) {

        link.href =
            CONFIG.instagramUrl;

    }


    if (contactLink) {

        contactLink.href =
            CONFIG.instagramUrl;

    }

}


/* =====================================================
   MEMBERS
===================================================== */

function renderMembers() {

    const container =
        document.getElementById(
            "membersGrid"
        );

    if (!container) return;


    container.innerHTML =
        members.map(
            (member) => {

                const firstLetter =
                    member.name
                        .charAt(0)
                        .toUpperCase();


                let instagramHTML = "";


                if (
                    member.instagram &&
                    member.instagramUrl
                ) {

                    instagramHTML += `
                        <a
                            href="${member.instagramUrl}"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            📸 ${member.instagram}
                        </a>
                    `;

                }


                if (
                    member.instagram2 &&
                    member.instagramUrl2
                ) {

                    instagramHTML += `
                        <a
                            href="${member.instagramUrl2}"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            📸 ${member.instagram2}
                        </a>
                    `;

                }


                return `

                    <div class="member-card">

                        <div class="member-avatar">
                            ${firstLetter}
                        </div>

                        <h3>
                            ${member.name}
                        </h3>

                        <div class="member-instagram-list">
                            ${instagramHTML}
                        </div>

                    </div>

                `;

            }
        ).join("");

}


/* =====================================================
   PHOTO GALLERY
===================================================== */

function renderPhotoGallery() {

    const gallery =
        document.getElementById(
            "photoGallery"
        );

    if (!gallery) return;


    if (photos.length === 0) {

        gallery.innerHTML = `

            <div class="gallery-coming-soon">

                <div class="coming-icon">
                    📸
                </div>

                <h3>
                    Photos Coming Soon
                </h3>

                <p>
                    Our Ganesh Utsav memories
                    will be added here.
                </p>

            </div>

        `;

        return;

    }


    gallery.innerHTML =
        photos.map(
            (photo) => `

                <div
                    class="gallery-item"
                    onclick="openLightbox('${photo.image}')"
                >

                    <img
                        src="${photo.image}"
                        alt="${photo.title || "Ganesh Utsav Photo"}"
                        loading="lazy"
                    >

                    ${
                        photo.title
                        ?
                        `
                        <div class="gallery-caption">
                            ${photo.title}
                        </div>
                        `
                        :
                        ""
                    }

                </div>

            `
        ).join("");

}


/* =====================================================
   VIDEO GALLERY
===================================================== */

function renderVideoCategories() {

    const container =
        document.getElementById(
            "videoCategories"
        );

    if (!container) return;


    container.innerHTML =
        videoCategories.map(
            (category, categoryIndex) => {

                const hasVideos =
                    category.videos.length > 0;


                return `

                    <div class="video-category">

                        <div class="video-category-header">

                            <div class="video-category-icon">
                                ${category.icon}
                            </div>

                            <div>

                                <h3>
                                    ${categoryIndex + 1}.
                                    ${category.title}
                                </h3>

                                <p>
                                    ${category.description}
                                </p>

                            </div>

                        </div>


                        <div class="video-grid">

                            ${
                                hasVideos

                                ?

                                category.videos.map(
                                    (video) => `

                                        <div class="video-card">

                                            <video
                                                controls
                                                preload="metadata"
                                                playsinline
                                            >

                                                <source
                                                    src="${video.src}"
                                                    type="video/mp4"
                                                >

                                                Your browser does not
                                                support video playback.

                                            </video>

                                            <div class="video-card-title">
                                                ${video.title}
                                            </div>

                                        </div>

                                    `
                                ).join("")

                                :

                                `

                                    <div class="video-coming-soon">

                                        <span>
                                            🎬
                                        </span>

                                        <p>
                                            Videos coming soon
                                        </p>

                                    </div>

                                `
                            }

                        </div>

                    </div>

                `;

            }
        ).join("");

}


/* =====================================================
   LOCATION
===================================================== */

function setupLocation() {

    const mapsLink =
        document.getElementById(
            "mapsLink"
        );

    if (!mapsLink) return;


    if (CONFIG.googleMapsUrl) {

        mapsLink.href =
            CONFIG.googleMapsUrl;

    }

}


/* =====================================================
   CONTACT
===================================================== */

function setupContact() {

    /*
       Contact numbers and WhatsApp links
       are already directly inside index.html.

       This function is kept so the website
       initialization remains clean.
    */

    console.log(
        "Contact numbers:",
        CONFIG.contactNumbers
    );

    console.log(
        "WhatsApp numbers:",
        CONFIG.whatsappNumbers
    );

}


/* =====================================================
   MOBILE MENU
===================================================== */

function setupMobileMenu() {

    const toggle =
        document.getElementById(
            "menuToggle"
        );

    const nav =
        document.getElementById(
            "navMenu"
        );


    if (!toggle || !nav) return;


    toggle.addEventListener(
        "click",
        function() {

            nav.classList.toggle(
                "active"
            );

        }
    );


    nav.querySelectorAll("a")
        .forEach(
            (link) => {

                link.addEventListener(
                    "click",
                    function() {

                        nav.classList.remove(
                            "active"
                        );

                    }
                );

            }
        );

}


/* =====================================================
   SHARE WEBSITE
===================================================== */

function setupShare() {

    const button =
        document.getElementById(
            "shareButton"
        );

    if (!button) return;


    button.addEventListener(
        "click",
        async function() {

            const shareData = {

                title:
                    CONFIG.samitiName,

                text:
                    "Railway Colony Ganesh Utsav Samiti, Champa, Chhattisgarh",

                url:
                    window.location.href

            };


            if (
                navigator.share
            ) {

                try {

                    await navigator.share(
                        shareData
                    );

                }
                catch (error) {

                    // User cancelled share

                }

            }
            else {

                try {

                    await navigator.clipboard.writeText(
                        window.location.href
                    );

                    showToast(
                        "Website link copied!"
                    );

                }
                catch (error) {

                    showToast(
                        "Copy the website link from your browser."
                    );

                }

            }

        }
    );

}


/* =====================================================
   LIGHTBOX
===================================================== */

function openLightbox(imageSrc) {

    const lightbox =
        document.getElementById(
            "lightbox"
        );

    const image =
        document.getElementById(
            "lightboxImage"
        );


    if (!lightbox || !image) return;


    image.src =
        imageSrc;

    lightbox.classList.add(
        "active"
    );

}


function closeLightbox() {

    const lightbox =
        document.getElementById(
            "lightbox"
        );

    if (!lightbox) return;

    lightbox.classList.remove(
        "active"
    );

}


/* =====================================================
   TOAST
===================================================== */

let toastTimeout;


function showToast(message) {

    const toast =
        document.getElementById(
            "toast"
        );

    if (!toast) return;


    toast.textContent =
        message;

    toast.classList.add(
        "show"
    );


    clearTimeout(
        toastTimeout
    );


    toastTimeout =
        setTimeout(
            () => {

                toast.classList.remove(
                    "show"
                );

            },
            2500
        );

}


/* =====================================================
   LIGHTBOX EVENTS
===================================================== */

function setupLightbox() {

    const close =
        document.getElementById(
            "lightboxClose"
        );

    const lightbox =
        document.getElementById(
            "lightbox"
        );


    if (close) {

        close.addEventListener(
            "click",
            closeLightbox
        );

    }


    if (lightbox) {

        lightbox.addEventListener(
            "click",
            function(event) {

                if (
                    event.target ===
                    lightbox
                ) {

                    closeLightbox();

                }

            }
        );

    }


    document.addEventListener(
        "keydown",
        function(event) {

            if (
                event.key === "Escape"
            ) {

                closeLightbox();

            }

        }
    );

}


/* =====================================================
   FLOWER PETALS
===================================================== */

function createPetal() {

    const petalsContainer =
        document.getElementById(
            "petals"
        );


    if (!petalsContainer) return;


    const petal =
        document.createElement(
            "div"
        );


    petal.className =
        "petal";


    petal.textContent =
        Math.random() > 0.5
            ? "🌸"
            : "🌺";


    petal.style.left =
        Math.random() * 100 +
        "vw";


    petal.style.fontSize =
        10 +
        Math.random() * 10 +
        "px";


    petal.style.animationDuration =
        6 +
        Math.random() * 7 +
        "s";


    petalsContainer.appendChild(
        petal
    );


    setTimeout(
        () => {

            petal.remove();

        },
        14000
    );

}


/* Start flower petals */

setInterval(
    createPetal,
    700
);


/* Create initial flowers */

for (
    let i = 0;
    i < 8;
    i++
) {

    setTimeout(
        createPetal,
        i * 300
    );

}


/* =====================================================
   CURRENT YEAR
===================================================== */

function setupYear() {

    const year =
        document.getElementById(
            "currentYear"
        );

    if (year) {

        year.textContent =
            new Date().getFullYear();

    }

}


/* =====================================================
   INITIALIZE WEBSITE
===================================================== */

document.addEventListener(
    "DOMContentLoaded",
    function() {

        setupOfficialInstagram();

        renderMembers();

        renderPhotoGallery();

        renderVideoCategories();

        setupLocation();

        setupContact();

        setupMobileMenu();

        setupShare();

        setupLightbox();

        setupYear();

        console.log(
            "Railway Colony Ganesh Utsav Samiti website loaded successfully."
        );

    }
);