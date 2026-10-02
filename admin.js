/* =========================================================
   RAILWAY COLONY GANESH UTSAV SAMITI
   ADMIN PANEL
========================================================= */


const SUPABASE_URL =
    "https://ewfglrnllbdngzhixkqm.supabase.co";

const SUPABASE_KEY =
    "PASTE_YOUR_SUPABASE_PUBLISHABLE_KEY_HERE";


const supabaseClient =
    window.supabase.createClient(
        SUPABASE_URL,
        SUPABASE_KEY
    );


/* =========================================================
   HELPERS
========================================================= */

function get(id) {
    return document.getElementById(id);
}


function setStatus(
    id,
    message,
    type = ""
) {

    const element =
        get(id);

    if (!element) {
        return;
    }

    element.textContent =
        message;

    element.className =
        `admin-status ${type}`;

}


function safeFileName(name) {

    return name
        .toLowerCase()
        .replace(/[^a-z0-9._-]/g, "-");

}


function uniqueFileName(file) {

    const extension =
        file.name.includes(".")
            ? "." +
              file.name
                  .split(".")
                  .pop()
                  .toLowerCase()
            : "";

    const base =
        file.name
            .replace(/\.[^/.]+$/, "")
            .toLowerCase()
            .replace(/[^a-z0-9-]/g, "-")
            .replace(/-+/g, "-")
            .slice(0, 70);

    return `${Date.now()}-${base || "media"}${extension}`;

}


/* =========================================================
   AUTH
========================================================= */

async function checkSession() {

    const {
        data,
        error
    } =
        await supabaseClient.auth.getSession();

    if (error) {

        console.error(error);

        return;

    }

    if (data.session) {

        showDashboard(
            data.session
        );

    } else {

        showLogin();

    }

}


function showDashboard(session) {

    get("loginCard")
        .classList.add("hidden");

    get("dashboard")
        .classList.remove("hidden");

    get("adminEmail")
        .textContent =
        session.user.email || "Admin";

    loadMediaList();

}


function showLogin() {

    get("loginCard")
        .classList.remove("hidden");

    get("dashboard")
        .classList.add("hidden");

}


/* =========================================================
   LOGIN
========================================================= */

get("loginButton")
    .addEventListener(
        "click",
        async () => {

            const email =
                get("email")
                    .value
                    .trim();

            const password =
                get("password")
                    .value;

            if (!email || !password) {

                setStatus(
                    "loginStatus",
                    "Enter your email and password.",
                    "error"
                );

                return;

            }


            setStatus(
                "loginStatus",
                "Logging in..."
            );


            const {
                data,
                error
            } =
                await supabaseClient.auth.signInWithPassword({
                    email,
                    password
                });


            if (error) {

                console.error(error);

                setStatus(
                    "loginStatus",
                    "Login failed. Check your email and password.",
                    "error"
                );

                return;

            }


            setStatus(
                "loginStatus",
                ""
            );


            showDashboard(
                data.session
            );

        }
    );


/* =========================================================
   LOGOUT
========================================================= */

get("logoutButton")
    .addEventListener(
        "click",
        async () => {

            await supabaseClient.auth.signOut();

            showLogin();

        }
    );


/* =========================================================
   PHOTO UPLOAD
========================================================= */

get("uploadPhotosButton")
    .addEventListener(
        "click",
        async () => {

            const input =
                get("photoFiles");

            const files =
                Array.from(
                    input.files || []
                );


            if (!files.length) {

                setStatus(
                    "photoStatus",
                    "Select at least one photo.",
                    "error"
                );

                return;

            }


            setStatus(
                "photoStatus",
                `Uploading ${files.length} photo(s)...`
            );


            const progress =
                get("photoProgress");

            const progressFill =
                get("photoProgressFill");

            progress.classList.add(
                "active"
            );


            let uploaded = 0;


            for (const file of files) {

                try {

                    const fileName =
                        uniqueFileName(file);


                    const {
                        error
                    } =
                        await supabaseClient
                            .storage
                            .from("photos")
                            .upload(
                                fileName,
                                file,
                                {
                                    cacheControl:
                                        "3600",

                                    upsert:
                                        false,

                                    contentType:
                                        file.type
                                }
                            );


                    if (error) {
                        throw error;
                    }


                    uploaded++;


                    progressFill.style.width =
                        `${(uploaded / files.length) * 100}%`;

                } catch (error) {

                    console.error(
                        error
                    );

                    setStatus(
                        "photoStatus",
                        `Upload error: ${file.name}`,
                        "error"
                    );

                }

            }


            setStatus(
                "photoStatus",
                `${uploaded} photo(s) uploaded successfully. 🙏`,
                "success"
            );


            input.value = "";

            await loadMediaList();

            setTimeout(() => {

                progress.classList.remove(
                    "active"
                );

                progressFill.style.width =
                    "0%";

            }, 1000);

        }
    );


/* =========================================================
   VIDEO UPLOAD
========================================================= */

get("uploadVideoButton")
    .addEventListener(
        "click",
        async () => {

            const input =
                get("videoFile");

            const file =
                input.files[0];

            const category =
                get("videoCategory")
                    .value;


            if (!file) {

                setStatus(
                    "videoStatus",
                    "Select a video first.",
                    "error"
                );

                return;

            }


            setStatus(
                "videoStatus",
                "Uploading video..."
            );


            const progress =
                get("videoProgress");

            const progressFill =
                get("videoProgressFill");

            progress.classList.add(
                "active"
            );


            try {

                const fileName =
                    uniqueFileName(file);

                const filePath =
                    `${category}/${fileName}`;


                const {
                    error
                } =
                    await supabaseClient
                        .storage
                        .from("videos")
                        .upload(
                            filePath,
                            file,
                            {
                                cacheControl:
                                    "3600",

                                upsert:
                                    false,

                                contentType:
                                    file.type
                            }
                        );


                if (error) {
                    throw error;
                }


                progressFill.style.width =
                    "100%";


                setStatus(
                    "videoStatus",
                    "Video uploaded successfully. 🎥",
                    "success"
                );


                input.value = "";

                await loadMediaList();


                setTimeout(() => {

                    progress.classList.remove(
                        "active"
                    );

                    progressFill.style.width =
                        "0%";

                }, 1000);


            } catch (error) {

                console.error(
                    error
                );

                setStatus(
                    "videoStatus",
                    "Video upload failed.",
                    "error"
                );

                progress.classList.remove(
                    "active"
                );

            }

        }
    );


/* =========================================================
   MEDIA LIST
========================================================= */

async function loadMediaList() {

    const container =
        get("mediaList");

    container.innerHTML = `

        <div
            style="
                color:var(--muted);
                font-size:11px;
                padding:15px;
            "
        >
            Loading media...
        </div>

    `;


    let html = "";


    /* PHOTOS */

    const {
        data: photos
    } =
        await supabaseClient
            .storage
            .from("photos")
            .list("", {
                limit: 100,
                sortBy: {
                    column:
                        "created_at",
                    order:
                        "desc"
                }
            });


    if (photos && photos.length) {

        photos
            .filter(file =>
                file.name &&
                !file.name.startsWith(".")
            )
            .forEach(file => {

                html += mediaItemHTML(
                    file.name,
                    "Photo",
                    "photos",
                    file.name
                );

            });

    }


    /* VIDEOS */

    const categories = [
        "pandal-making",
        "ganesh-ji-aagman",
        "first-puja-aarti",
        "ganesh-utsav-events",
        "hawan-puja",
        "visarjan-dance",
        "final-goodbye-visarjan"
    ];


    for (const category of categories) {

        const {
            data: videos
        } =
            await supabaseClient
                .storage
                .from("videos")
                .list(category, {
                    limit: 100,
                    sortBy: {
                        column:
                            "created_at",
                        order:
                            "desc"
                    }
                });


        if (videos && videos.length) {

            videos
                .filter(file =>
                    file.name &&
                    !file.name.startsWith(".")
                )
                .forEach(file => {

                    html += mediaItemHTML(
                        file.name,
                        `Video • ${category}`,
                        "videos",
                        `${category}/${file.name}`
                    );

                });

        }

    }


    if (!html) {

        html = `

            <div
                style="
                    color:var(--muted);
                    font-size:11px;
                    padding:15px;
                "
            >
                No media uploaded yet.
            </div>

        `;

    }


    container.innerHTML =
        html;


    container
        .querySelectorAll(
            "[data-delete]"
        )
        .forEach(button => {

            button.addEventListener(
                "click",
                async () => {

                    await deleteMedia(
                        button.dataset.bucket,
                        button.dataset.path
                    );

                }
            );

        });

}


/* =========================================================
   MEDIA ITEM
========================================================= */

function mediaItemHTML(
    name,
    type,
    bucket,
    path
) {

    return `

        <div class="media-item">

            <div class="media-item-info">

                <div class="media-item-name">
                    ${name}
                </div>

                <div class="media-item-type">
                    ${type}
                </div>

            </div>

            <button
                class="delete-button"
                data-delete="true"
                data-bucket="${bucket}"
                data-path="${path}"
            >
                Delete
            </button>

        </div>

    `;

}


/* =========================================================
   DELETE
========================================================= */

async function deleteMedia(
    bucket,
    path
) {

    const confirmed =
        confirm(
            "Delete this file permanently?"
        );


    if (!confirmed) {
        return;
    }


    const {
        error
    } =
        await supabaseClient
            .storage
            .from(bucket)
            .remove([
                path
            ]);


    if (error) {

        console.error(error);

        alert(
            "Could not delete the file."
        );

        return;

    }


    await loadMediaList();

}


/* =========================================================
   AUTH STATE
========================================================= */

supabaseClient.auth.onAuthStateChange(
    (event, session) => {

        if (session) {

            showDashboard(
                session
            );

        } else {

            showLogin();

        }

    }
);


/* =========================================================
   START
========================================================= */

checkSession();