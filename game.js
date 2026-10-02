/* =====================================================
   MODAK MADNESS — cute catch game, mobile-first
   Canvas only runs while playing. No assets.
===================================================== */
(function () {
  "use strict";

  var canvas = document.getElementById("gameCanvas");
  var wrap = document.getElementById("gameWrap");
  var scoreEl = document.getElementById("score");
  var timeEl = document.getElementById("time");
  var livesEl = document.getElementById("lives");
  var bestEl = document.getElementById("best");
  var startOverlay = document.getElementById("startOverlay");
  var endOverlay = document.getElementById("endOverlay");
  var startBtn = document.getElementById("startBtn");
  var againBtn = document.getElementById("againBtn");
  var pauseBtn = document.getElementById("pauseBtn");
  var muteBtn = document.getElementById("muteBtn");
  var shareBtn = document.getElementById("shareScoreBtn");
  var finalScoreEl = document.getElementById("finalScore");
  var finalBestEl = document.getElementById("finalBest");
  var newBestEl = document.getElementById("newBest");
  var endTitleEl = document.getElementById("endTitle");
  var endEmojiEl = document.getElementById("endEmoji");

  if (!canvas || !wrap) return;
  var ctx = canvas.getContext("2d");

  var BEST_KEY = "ganesh_modak_best";
  var MUTE_KEY = "ganesh_modak_mute";
  var GAME_SECONDS = 45;

  var reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  var state = "idle"; // idle | playing | paused | over
  var score = 0;
  var lives = 3;
  var timeLeft = GAME_SECONDS;
  var best = 0;
  var muted = false;
  var rafId = null;
  var lastTime = 0;
  var elapsed = 0;
  var spawnTimer = 0;
  var entities = [];
  var confetti = [];
  var shake = 0;
  var milestonesHit = {};

  try {
    best = parseInt(localStorage.getItem(BEST_KEY) || "0", 10) || 0;
    muted = localStorage.getItem(MUTE_KEY) === "1";
  } catch (e) { /* private mode */ }

  /* ---------- sizing: logical 400x560, DPR capped ---------- */
  var W = 400, H = 560;
  function resize() {
    var rect = wrap.getBoundingClientRect();
    var cssW = Math.min(rect.width, 480);
    var cssH = Math.round(cssW * 1.35);
    cssH = Math.max(420, Math.min(cssH, 620));
    var dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.style.width = cssW + "px";
    canvas.style.height = cssH + "px";
    canvas.width = Math.round(cssW * dpr);
    canvas.height = Math.round(cssH * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    W = cssW; H = cssH;
    basket.y = H - 64;
    basket.x = Math.max(basket.w / 2, Math.min(W - basket.w / 2, basket.x || W / 2));
  }

  /* ---------- basket ---------- */
  var basket = { x: 200, y: 496, w: 88, h: 30, targetX: 200, color: "#4A2712" };
  var keys = { left: false, right: false };

  /* ---------- tiny sound (no files) ---------- */
  var audioCtx = null;
  function beep(freq, dur, type) {
    if (muted) return;
    try {
      if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      if (audioCtx.state === "suspended") audioCtx.resume();
      var o = audioCtx.createOscillator();
      var g = audioCtx.createGain();
      o.type = type || "sine";
      o.frequency.value = freq;
      g.gain.setValueAtTime(0.12, audioCtx.currentTime);
      g.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + dur);
      o.connect(g); g.connect(audioCtx.destination);
      o.start(); o.stop(audioCtx.currentTime + dur);
    } catch (e) { /* no audio */ }
  }

  function toast(msg) {
    var t = document.getElementById("gameToast");
    var m = document.getElementById("gameToastMsg");
    if (!t || !m) return;
    m.textContent = msg;
    t.classList.add("show");
    clearTimeout(window.gameToastTimer);
    window.gameToastTimer = setTimeout(function () { t.classList.remove("show"); }, 2200);
  }

  /* ---------- spawning ---------- */
  function spawnInterval() {
    if (reducedMotion) return 900;
    if (elapsed > 30) return 420;
    if (elapsed > 15) return 560;
    return 720;
  }
  function fallSpeed() {
    var base = reducedMotion ? 130 : 170;
    var ramp = Math.min(elapsed * 5, reducedMotion ? 60 : 150);
    return base + ramp + Math.random() * 60;
  }
  function spawn() {
    if (entities.length >= 20) return;
    var roll = Math.random();
    var type = "modak";
    if (roll < 0.14) type = "mouse";
    else if (roll < 0.26) type = "gold";
    entities.push({
      x: 24 + Math.random() * (W - 48),
      y: -24,
      vy: fallSpeed() * (type === "mouse" ? 1.15 : 1),
      r: type === "mouse" ? 15 : 14,
      type: type,
      wob: Math.random() * Math.PI * 2,
      wobSpeed: 2 + Math.random() * 2
    });
  }

  function burst(x, y, colors) {
    if (reducedMotion) return;
    for (var i = 0; i < 16; i++) {
      confetti.push({
        x: x, y: y,
        vx: (Math.random() - 0.5) * 260,
        vy: -80 - Math.random() * 200,
        life: 0.7 + Math.random() * 0.5,
        age: 0,
        color: colors[i % colors.length],
        size: 4 + Math.random() * 4
      });
    }
  }

  /* ---------- update ---------- */
  function update(dt) {
    elapsed += dt;
    timeLeft = Math.max(0, GAME_SECONDS - elapsed);
    timeEl.textContent = Math.ceil(timeLeft);

    // basket movement: keys + pointer target easing
    var speed = W * 1.6;
    if (keys.left) basket.targetX -= speed * dt;
    if (keys.right) basket.targetX += speed * dt;
    basket.targetX = Math.max(basket.w / 2, Math.min(W - basket.w / 2, basket.targetX));
    basket.x += (basket.targetX - basket.x) * Math.min(1, dt * 14);

    spawnTimer -= dt * 1000;
    if (spawnTimer <= 0) { spawn(); spawnTimer = spawnInterval(); }

    var i, e;
    for (i = entities.length - 1; i >= 0; i--) {
      e = entities[i];
      e.y += e.vy * dt;
      e.wob += e.wobSpeed * dt;
      e.x += Math.sin(e.wob) * 18 * dt;
      // catch?
      if (e.y + e.r >= basket.y - 6 && e.y < basket.y + basket.h + 10 &&
          Math.abs(e.x - basket.x) < basket.w / 2 + 6) {
        entities.splice(i, 1);
        onCatch(e);
        continue;
      }
      if (e.y > H + 30) entities.splice(i, 1);
    }

    for (i = confetti.length - 1; i >= 0; i--) {
      var c = confetti[i];
      c.age += dt;
      if (c.age >= c.life) { confetti.splice(i, 1); continue; }
      c.x += c.vx * dt;
      c.y += c.vy * dt;
      c.vy += 500 * dt;
    }
    if (shake > 0) shake = Math.max(0, shake - dt * 3);

    if (timeLeft <= 0 || lives <= 0) endGame(lives <= 0);
  }

  function onCatch(e) {
    if (e.type === "modak") {
      score += 10;
      beep(620, 0.12, "sine");
      burst(e.x, basket.y - 10, ["#FF8A00", "#FFC93C", "#FFE9B8"]);
    } else if (e.type === "gold") {
      score += 30;
      beep(880, 0.18, "triangle");
      toast("Golden modak! +30 🌟");
      burst(e.x, basket.y - 10, ["#FFC93C", "#FFF3B0", "#FF8A00", "#FF5A8F"]);
    } else {
      lives -= 1;
      livesEl.textContent = lives;
      beep(180, 0.25, "sawtooth");
      if (!reducedMotion) shake = 1;
      toast(lives > 0 ? "Ouch! Mushak stole a heart 🐭" : "Oh no! 🐭");
    }
    scoreEl.textContent = score;
    [100, 200, 300].forEach(function (m) {
      if (score >= m && !milestonesHit[m]) {
        milestonesHit[m] = true;
        burst(W / 2, H / 3, ["#FF5A8F", "#FFC93C", "#2E9E6B", "#4EBBFF"]);
        beep(780, 0.15, "triangle");
      }
    });
  }

  /* ---------- drawing (fills only, no shadows) ---------- */
  function drawModak(x, y, r, gold) {
    ctx.fillStyle = gold ? "#FFC93C" : "#F5A623";
    ctx.beginPath();
    ctx.arc(x, y + 2, r, 0, Math.PI * 2);
    ctx.fill();
    // pleats
    ctx.strokeStyle = gold ? "#C98A00" : "#B25A00";
    ctx.lineWidth = 1.6;
    for (var k = -2; k <= 2; k++) {
      ctx.beginPath();
      ctx.moveTo(x + k * (r / 3), y - r - 4);
      ctx.quadraticCurveTo(x + k * (r / 4), y, x + k * (r / 5), y + r - 2);
      ctx.stroke();
    }
    // top knot
    ctx.fillStyle = gold ? "#FFE28A" : "#FFD98A";
    ctx.beginPath();
    ctx.arc(x, y - r - 3, 4.5, 0, Math.PI * 2);
    ctx.fill();
    if (gold) {
      ctx.fillStyle = "#fff";
      ctx.fillRect(x - r - 6, y - r - 10, 3, 3);
      ctx.fillRect(x + r + 3, y + 2, 3, 3);
    }
  }

  function drawMouse(x, y, r) {
    ctx.fillStyle = "#9AA3B2";
    ctx.beginPath(); ctx.arc(x - r * 0.7, y - r * 0.6, r * 0.45, 0, Math.PI * 2); ctx.fill();
    ctx.beginPath(); ctx.arc(x + r * 0.7, y - r * 0.6, r * 0.45, 0, Math.PI * 2); ctx.fill();
    ctx.fillStyle = "#B9C0CC";
    ctx.beginPath(); ctx.arc(x, y, r, 0, Math.PI * 2); ctx.fill();
    ctx.fillStyle = "#4A2712";
    ctx.beginPath(); ctx.arc(x - 4, y - 2, 2, 0, Math.PI * 2); ctx.fill();
    ctx.beginPath(); ctx.arc(x + 4, y - 2, 2, 0, Math.PI * 2); ctx.fill();
    ctx.strokeStyle = "#4A2712";
    ctx.lineWidth = 1.6;
    ctx.beginPath(); ctx.moveTo(x + r * 0.8, y + r * 0.4); ctx.quadraticCurveTo(x + r * 1.8, y + r, x + r * 2.2, y); ctx.stroke();
  }

  function drawBasket() {
    var x = basket.x, y = basket.y, w = basket.w, h = basket.h;
    ctx.fillStyle = "#B25A00";
    ctx.beginPath();
    ctx.moveTo(x - w / 2, y);
    ctx.lineTo(x + w / 2, y);
    ctx.lineTo(x + w / 2 - 10, y + h);
    ctx.lineTo(x - w / 2 + 10, y + h);
    ctx.closePath();
    ctx.fill();
    ctx.strokeStyle = "#7A3A00";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(x - w / 2, y);
    ctx.lineTo(x + w / 2, y);
    ctx.stroke();
    ctx.strokeStyle = "rgba(255,220,150,0.7)";
    ctx.lineWidth = 1.5;
    ctx.beginPath(); ctx.moveTo(x - w / 2 + 6, y + 10); ctx.lineTo(x + w / 2 - 6, y + 10); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(x - w / 2 + 8, y + 20); ctx.lineTo(x + w / 2 - 8, y + 20); ctx.stroke();
  }

  function draw() {
    ctx.save();
    if (shake > 0) ctx.translate((Math.random() - 0.5) * 8 * shake, 0);
    ctx.fillStyle = "#FFFDF6";
    ctx.fillRect(-10, -10, W + 20, H + 20);
    // faint dots (cheap, static grid)
    ctx.fillStyle = "rgba(255,138,0,0.10)";
    for (var gy = 20; gy < H; gy += 44) {
      for (var gx = 14; gx < W; gx += 44) {
        ctx.fillRect(gx, gy, 2.5, 2.5);
      }
    }
    var i, e;
    for (i = 0; i < entities.length; i++) {
      e = entities[i];
      if (e.type === "mouse") drawMouse(e.x, e.y, e.r);
      else drawModak(e.x, e.y, e.r, e.type === "gold");
    }
    drawBasket();
    for (i = 0; i < confetti.length; i++) {
      var c = confetti[i];
      ctx.globalAlpha = 1 - c.age / c.life;
      ctx.fillStyle = c.color;
      ctx.fillRect(c.x, c.y, c.size, c.size * 0.6);
    }
    ctx.globalAlpha = 1;
    ctx.restore();
  }

  /* ---------- loop (only while playing) ---------- */
  function loop(t) {
    if (state !== "playing") return;
    if (!lastTime) lastTime = t;
    var dt = Math.min((t - lastTime) / 1000, 0.05);
    lastTime = t;
    update(dt);
    if (state === "playing") {
      draw();
      rafId = requestAnimationFrame(loop);
    }
  }

  function startGame() {
    score = 0; lives = 3; elapsed = 0; timeLeft = GAME_SECONDS;
    entities = []; confetti = []; milestonesHit = {}; shake = 0;
    spawnTimer = 0;
    basket.x = W / 2; basket.targetX = W / 2;
    scoreEl.textContent = "0";
    livesEl.textContent = "3";
    timeEl.textContent = GAME_SECONDS;
    bestEl.textContent = best;
    startOverlay.classList.add("hidden");
    endOverlay.classList.add("hidden");
    state = "playing";
    lastTime = 0;
    cancelAnimationFrame(rafId);
    rafId = requestAnimationFrame(loop);
    pauseBtn.textContent = "⏸ pause";
  }

  function endGame(knockedOut) {
    state = "over";
    cancelAnimationFrame(rafId);
    var isBest = score > best;
    if (isBest) {
      best = score;
      try { localStorage.setItem(BEST_KEY, String(best)); } catch (e) {}
    }
    finalScoreEl.textContent = score;
    finalBestEl.textContent = best;
    newBestEl.classList.toggle("hidden", !isBest);
    endTitleEl.textContent = knockedOut ? "Mushaks got you! 🐭" : "Time's up! 🎉";
    endEmojiEl.textContent = score >= 200 ? "🏆" : score >= 100 ? "🎉" : knockedOut ? "🐭" : "🍬";
    bestEl.textContent = best;
    endOverlay.classList.remove("hidden");
    beep(isBest ? 990 : 520, 0.25, "triangle");
  }

  function togglePause() {
    if (state === "playing") {
      state = "paused";
      cancelAnimationFrame(rafId);
      pauseBtn.textContent = "▶ resume";
      toast("Paused — take a modak break 🍬");
    } else if (state === "paused") {
      state = "playing";
      lastTime = 0;
      rafId = requestAnimationFrame(loop);
      pauseBtn.textContent = "⏸ pause";
    }
  }

  /* ---------- input: touch-drag first ---------- */
  function pointerToX(clientX) {
    var rect = canvas.getBoundingClientRect();
    var scale = W / rect.width;
    return (clientX - rect.left) * scale;
  }
  var dragging = false;
  canvas.addEventListener("pointerdown", function (ev) {
    dragging = true;
    basket.targetX = pointerToX(ev.clientX);
    canvas.setPointerCapture && canvas.setPointerCapture(ev.pointerId);
  });
  canvas.addEventListener("pointermove", function (ev) {
    if (dragging || ev.pointerType === "mouse") basket.targetX = pointerToX(ev.clientX);
  });
  ["pointerup", "pointercancel", "pointerleave"].forEach(function (evt) {
    canvas.addEventListener(evt, function () { dragging = false; });
  });
  // stop page scroll while swiping on game
  canvas.addEventListener("touchmove", function (ev) { ev.preventDefault(); }, { passive: false });

  document.addEventListener("keydown", function (ev) {
    if (ev.key === "ArrowLeft") keys.left = true;
    if (ev.key === "ArrowRight") keys.right = true;
    if ((ev.key === " " || ev.key === "Enter") && (state === "idle" || state === "over")) {
      var visible = !startOverlay.classList.contains("hidden") || !endOverlay.classList.contains("hidden");
      if (visible) startGame();
    }
  });
  document.addEventListener("keyup", function (ev) {
    if (ev.key === "ArrowLeft") keys.left = false;
    if (ev.key === "ArrowRight") keys.right = false;
  });

  document.addEventListener("visibilitychange", function () {
    if (document.hidden && state === "playing") togglePause();
  });

  /* ---------- buttons ---------- */
  startBtn.addEventListener("click", startGame);
  againBtn.addEventListener("click", startGame);
  pauseBtn.addEventListener("click", togglePause);

  function renderMute() { muteBtn.textContent = muted ? "🔇 muted" : "🔊 sound on"; }
  muteBtn.addEventListener("click", function () {
    muted = !muted;
    try { localStorage.setItem(MUTE_KEY, muted ? "1" : "0"); } catch (e) {}
    renderMute();
  });

  function pageUrl() {
    if (window.location.protocol.indexOf("http") === 0) {
      return window.location.href.split("#")[0];
    }
    return "";
  }

  async function copyText(text) {
    if (navigator.clipboard && window.isSecureContext !== false) {
      try { await navigator.clipboard.writeText(text); return true; }
      catch (e) { /* fall through to legacy */ }
    }
    try {
      var ta = document.createElement("textarea");
      ta.value = text;
      ta.setAttribute("readonly", "");
      ta.style.position = "fixed";
      ta.style.opacity = "0";
      document.body.appendChild(ta);
      ta.select();
      var ok = document.execCommand("copy");
      ta.remove();
      return ok;
    } catch (e) { return false; }
  }

  shareBtn.addEventListener("click", async function () {
    var url = pageUrl();
    var text = "I scored " + score + " in Modak Madness! 🍬 Can you beat me?";
    var data = { title: "Modak Madness", text: text };
    if (url) data.url = url;
    try {
      if (navigator.share) { await navigator.share(data); return; }
    } catch (e) {
      if (e && e.name === "AbortError") return;
    }
    var full = url ? text + " " + url : text;
    if (await copyText(full)) toast("Score copied! 📋");
    else toast("Score: " + score + " 🍬");
  });

  /* ---------- init ---------- */
  bestEl.textContent = best;
  renderMute();
  resize();
  window.addEventListener("resize", resize);
  draw(); // cute idle backdrop behind start overlay
})();
