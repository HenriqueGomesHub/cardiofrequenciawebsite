/*
  Tudo que se mexe no site da Cardiofrequência.
  A primeira parte tem as informações que dá para editar (telefone, exames, avaliações).
  Depois vem cada parte da página, na mesma ordem em que aparece na tela.
*/

// ========== Informações que dá para editar ==========

// Número do WhatsApp da clínica (com 55 do Brasil e o DDD)
const WHATSAPP = "5524992058362";

// Horário de funcionamento (17.5 = 17h30)
const OPEN_HOUR = 8;
const CLOSE_HOUR = 17.5;

// As três áreas de exames que aparecem nos cartões com foto
const CATEGORIES = [
  { id: "cardio", name: "Cardiologia", img: "img/exames/cardiologia.webp" },
  { id: "usg", name: "Ultrassom e Doppler", img: "img/exames/ultrassom.webp" },
  { id: "endo", name: "Endoscopia", img: "img/exames/endoscopia.webp" },
];

// Lista de exames. "cat" diz em qual área o exame aparece.
const EXAMS = [
  { cat: "cardio", name: "Eletrocardiograma (ECG)", desc: "Exame rápido, indolor e não invasivo que registra a atividade elétrica do coração, auxiliando na identificação de alterações do ritmo, frequência e funcionamento cardíaco." },
  { cat: "cardio", name: "Holter 24 horas", desc: "Exame que monitora e registra continuamente a atividade elétrica do coração durante 24 horas, permitindo identificar alterações do ritmo cardíaco que podem não aparecer em um eletrocardiograma convencional." },
  { cat: "cardio", name: "MAPA 24 horas", desc: "Exame que monitora a pressão arterial automaticamente ao longo de 24 horas, durante as atividades habituais e o sono, permitindo avaliar as variações da pressão arterial ao longo do dia." },
  { cat: "cardio", name: "Ecocardiograma adulto", desc: "Exame de ultrassom que avalia a estrutura e o funcionamento do coração, permitindo analisar suas câmaras, válvulas, fluxo sanguíneo e função cardíaca. Exame indolor e seguro." },
  { cat: "cardio", name: "Ecocardiograma infantil", desc: "Exame de ultrassom que avalia a estrutura e o funcionamento do coração em crianças, permitindo analisar suas câmaras, válvulas, fluxo sanguíneo e função cardíaca. Exame indolor e seguro." },
  { cat: "cardio", name: "Teste ergométrico", desc: "Exame realizado na esteira com finalidade de avaliar o funcionamento do coração durante o esforço físico, monitorando frequência cardíaca, pressão arterial e eletrocardiograma para identificar possíveis alterações cardiovasculares." },
  { cat: "usg", name: "Ultrassom de carótidas e vertebrais com Doppler", desc: "Exame não invasivo que avalia a circulação das artérias do pescoço, verificando o fluxo sanguíneo e identificando possíveis estreitamentos, placas ou alterações vasculares." },
  { cat: "usg", name: "Ultrassom de aorta abdominal com Doppler", desc: "Exame não invasivo que avalia a aorta abdominal, seu calibre e fluxo sanguíneo, auxiliando na identificação de dilatações, aneurismas e outras alterações vasculares." },
  { cat: "usg", name: "Ultrassom de artérias renais com Doppler", desc: "Exame não invasivo que avalia as artérias que irrigam os rins, analisando o fluxo sanguíneo e identificando possíveis estreitamentos ou alterações vasculares." },
  { cat: "usg", name: "Ultrassom de tireoide com Doppler", desc: "Exame não invasivo que avalia a estrutura e o fluxo sanguíneo da tireoide, auxiliando na identificação de nódulos, cistos, inflamações e outras alterações." },
  { cat: "usg", name: "Ultrassom de abdômen superior com Doppler", desc: "Exame não invasivo que avalia os órgãos do abdômen superior e o fluxo sanguíneo dos principais vasos, auxiliando na identificação de alterações estruturais e vasculares." },
  { cat: "usg", name: "Ultrassom de bolsa escrotal com Doppler", desc: "Exame não invasivo que avalia testículos, epidídimos e estruturas da bolsa escrotal, identificando alterações como varicocele, hidrocele, cistos, inflamações e alterações do fluxo sanguíneo." },
  { cat: "usg", name: "Ultrassom de membros superiores e inferiores arterial com Doppler", desc: "Exame que avalia o fluxo sanguíneo das artérias, auxiliando na identificação de obstruções, estreitamentos, placas de gordura (aterosclerose), tromboses e alterações do fluxo arterial." },
  { cat: "usg", name: "Ultrassom de membros superiores e inferiores venoso com Doppler", desc: "Exame que avalia as veias e o fluxo sanguíneo, auxiliando na identificação de trombose, insuficiência venosa, varizes, obstruções e alterações do fluxo venoso." },
  { cat: "endo", name: "Endoscopia digestiva alta", desc: "Exame realizado por uma câmera para visualizar o esôfago, estômago e duodeno, investigando sintomas, identificando alterações e auxiliando no diagnóstico de doenças do aparelho digestivo como gastrite, refluxo, úlceras, esofagite, pólipos e outras alterações digestivas." },
];

// Nomes mais curtos usados nas etiquetas dos cartões de convênio
const SHORT_NAMES = {
  "Eletrocardiograma (ECG)": "Eletrocardiograma",
  "Holter 24 horas": "Holter 24h",
  "MAPA 24 horas": "MAPA 24h",
  "Ultrassom de artérias renais com Doppler": "Doppler renal",
  "Endoscopia digestiva alta": "Endoscopia",
};

// Exames que aparecem como etiqueta em cada cartão de convênio
const KLINI_CHIPS = ["Eletrocardiograma (ECG)", "Holter 24 horas", "MAPA 24 horas", "Endoscopia digestiva alta"];
const KLINI_HIGHLIGHT = "Ecocardiograma adulto e infantil";
const PARTICULAR_CHIPS = ["Eletrocardiograma (ECG)", "Holter 24 horas", "MAPA 24 horas", "Endoscopia digestiva alta", "Ultrassom de artérias renais com Doppler", "Ecocardiograma adulto"];

// Avaliações dos pacientes: [nome, texto]
const REVIEWS = [
  ["Daniel S.", "Fui bem atendido desde a recepção até o médico. A gerente trouxe um cafezinho enquanto eu esperava, e já saí com o meu laudo."],
  ["Mônica S.", "Meu marido foi muito bem atendido! E ainda mandaram mensagem pelo WhatsApp confirmando o exame. Só temos a agradecer."],
  ["Ricardo B.", "Fiz um Holter, fui bem atendido e orientado. Pedi prioridade por urgência e em 2 dias peguei o laudo."],
  ["Sergio B.", "Atendimento top, clínica maravilhosa, fui atendido rápido. Parabéns à recepcionista, muito atenciosa."],
];

// Posição da clínica no mapa [longitude, latitude]
const CLINIC_LOCATION = [-44.3035509, -22.9986759];

// ========== Ícones usados em mais de um lugar ==========

const ICON_PULSE = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M2 12h5l2.2-5 3.6 10 2.2-5h7"/></svg>';
const ICON_WHATSAPP = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M20 11.5a8 8 0 0 1-11.8 7L4 20l1.5-4A8 8 0 1 1 20 11.5Z"/></svg>';
const ICON_ARROW = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>';
const ICON_PLUS = '<svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 2v10M2 7h10"/></svg>';
const ICON_STAR = '<svg viewBox="0 0 20 20" fill="currentColor"><path d="m10 1.5 2.6 5.3 5.9.9-4.3 4.1 1 5.8L10 14.8l-5.2 2.8 1-5.8L1.5 7.7l5.9-.9L10 1.5Z"/></svg>';

// ========== Ajudantes ==========

const byId = (id) => document.getElementById(id);

// Se a pessoa pediu no aparelho para ter menos animação
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// Monta o link do WhatsApp já com a mensagem escrita
function whatsappLink(message) {
  return "https://wa.me/" + WHATSAPP + "?text=" + encodeURIComponent("Olá! Tudo bem?\n" + message);
}

// Deixa um texto seguro para colocar dentro do HTML
function escapeHtml(text) {
  const entities = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" };
  return String(text).replace(/[&<>"]/g, (char) => entities[char]);
}

function examsOf(categoryId) {
  return EXAMS.filter((exam) => exam.cat === categoryId);
}

// ========== Links do WhatsApp ==========
// Todo link com "data-wa" no HTML vira um link do WhatsApp com aquela mensagem.
function setupWhatsappLinks() {
  document.querySelectorAll("[data-wa]").forEach((link) => {
    link.href = whatsappLink(link.dataset.wa);
  });
}

// ========== Nome da clínica no logo ==========
// Estica o "CLÍNICA MÉDICA" para ficar da mesma largura que "CARDIOFREQUÊNCIA".
function fitBrandSubtitle() {
  document.querySelectorAll(".brand .tx").forEach((brand) => {
    const title = brand.querySelector("b");
    const subtitle = brand.querySelector("small");
    if (!title.offsetWidth || getComputedStyle(subtitle).display === "none") return;

    subtitle.style.letterSpacing = "0px";
    const extraWidth = title.getBoundingClientRect().width - subtitle.getBoundingClientRect().width;
    const spacing = Math.max(0, extraWidth / subtitle.textContent.length);
    subtitle.style.letterSpacing = spacing + "px";
    subtitle.style.marginRight = -spacing + "px";
  });
}

function setupBrand() {
  fitBrandSubtitle();
  window.addEventListener("load", fitBrandSubtitle);
  window.addEventListener("resize", fitBrandSubtitle);
  // Quando a fonte termina de carregar, o tamanho do texto muda
  document.fonts.ready.then(fitBrandSubtitle);
  document.fonts.addEventListener("loadingdone", fitBrandSubtitle);
}

// ========== Efeito de "onda" ao clicar nos botões ==========
function setupButtonRipple() {
  document.addEventListener("pointerdown", (event) => {
    const button = event.target.closest(".btn");
    if (!button || reduceMotion) return;

    const box = button.getBoundingClientRect();
    const size = Math.max(box.width, box.height) * 2.2;
    const ripple = document.createElement("span");
    ripple.className = "ripple";
    ripple.style.width = ripple.style.height = size + "px";
    ripple.style.left = event.clientX - box.left - size / 2 + "px";
    ripple.style.top = event.clientY - box.top - size / 2 + "px";
    button.appendChild(ripple);
    setTimeout(() => ripple.remove(), 650);
  });
}

// ========== Menu do topo ==========
const nav = byId("nav");
const menuButton = byId("menubtn");
const drawer = byId("drawer");

// O menu ganha fundo quando a página desce um pouco ou quando o menu do celular está aberto
function updateNavBackground() {
  nav.classList.toggle("solid", window.scrollY > 10 || drawer.classList.contains("open"));
}

function setMenuOpen(open) {
  const root = document.documentElement;
  drawer.classList.toggle("open", open);
  nav.classList.toggle("menu-open", open);
  menuButton.setAttribute("aria-expanded", String(open));
  menuButton.setAttribute("aria-label", open ? "Fechar menu" : "Abrir menu");
  // Trava a rolagem da página enquanto o menu está aberto
  root.style.overflow = open ? "hidden" : "";
  root.classList.toggle("menu-open", open);

  if (open) {
    root.style.setProperty("--navh", nav.getBoundingClientRect().bottom + "px");
    nav.classList.add("solid");
  } else {
    updateNavBackground();
  }
}

function setupMenu() {
  const isOpen = () => drawer.classList.contains("open");

  menuButton.addEventListener("click", () => setMenuOpen(!isOpen()));
  drawer.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => setMenuOpen(false));
  });
  // Tecla Esc fecha o menu
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && isOpen()) {
      setMenuOpen(false);
      menuButton.focus();
    }
  });
  // Se a tela ficar grande (computador), fecha o menu do celular
  window.addEventListener("resize", () => {
    if (window.innerWidth > 1120 && isOpen()) setMenuOpen(false);
  });

  let scrollQueued = false;
  window.addEventListener("scroll", () => {
    if (scrollQueued) return;
    scrollQueued = true;
    requestAnimationFrame(() => {
      updateNavBackground();
      scrollQueued = false;
    });
  }, { passive: true });
  updateNavBackground();
}

// ========== "Aberto agora" / "Fechado agora" na capa ==========
function updateOpenStatus() {
  const now = new Date();
  const hour = now.getHours() + now.getMinutes() / 60;
  const isOpen = hour >= OPEN_HOUR && hour < CLOSE_HOUR;

  byId("status").classList.toggle("on", isOpen);
  byId("statusTxt").textContent = isOpen ? "Aberto agora" : "Fechado agora";
  if (isOpen) byId("statusSub").textContent = "Hoje até 17h30";
  else byId("statusSub").textContent = hour < OPEN_HOUR ? "Abre hoje, 8h" : "Abre amanhã, 8h";
}

function setupOpenStatus() {
  updateOpenStatus();
  setInterval(updateOpenStatus, 60000); // confere de novo a cada minuto
}

// ========== Cartões de exames e painel lateral ==========
function renderCategoryTiles() {
  byId("tiles").innerHTML = CATEGORIES.map((category, index) => {
    const count = examsOf(category.id).length;
    const countLabel = count + (count > 1 ? " exames" : " exame");
    return (
      '<button type="button" class="tile rv" data-index="' + index + '">' +
        '<img src="' + category.img + '" alt="" loading="lazy">' +
        '<span class="in">' +
          "<span><h3>" + category.name + "</h3><small>" + countLabel + "</small></span>" +
          '<span class="go">' + ICON_ARROW + "</span>" +
        "</span>" +
      "</button>"
    );
  }).join("");
}

function examRow(exam) {
  const link = whatsappLink("Gostaria de agendar o exame " + exam.name + ". Poderiam me ajudar?");
  return (
    '<div class="xrow">' +
      '<button type="button" aria-expanded="false">' +
        "<span>" + escapeHtml(exam.name) + "</span>" +
        '<span class="pl" aria-hidden="true">' + ICON_PLUS + "</span>" +
      "</button>" +
      '<div class="xb"><div>' +
        "<p>" + escapeHtml(exam.desc) + "</p>" +
        '<a href="' + link + '" target="_blank" rel="noopener">' + ICON_WHATSAPP + "Agendar este exame</a>" +
      "</div></div>" +
    "</div>"
  );
}

function setupExamSheet() {
  const sheet = byId("sheet");
  const list = byId("shList");

  function openSheet(category) {
    byId("shTitle").textContent = category.name;
    byId("shImg").src = category.img;
    list.innerHTML = examsOf(category.id).map(examRow).join("");
    sheet.showModal();
    sheet.scrollTop = 0;
  }

  byId("tiles").addEventListener("click", (event) => {
    const tile = event.target.closest(".tile");
    if (tile) openSheet(CATEGORIES[Number(tile.dataset.index)]);
  });

  // Abre um exame e fecha os outros
  list.addEventListener("click", (event) => {
    const button = event.target.closest(".xrow > button");
    if (!button) return;
    const row = button.parentElement;
    const willOpen = !row.classList.contains("open");

    list.querySelectorAll(".xrow").forEach((other) => {
      other.classList.remove("open");
      other.firstElementChild.setAttribute("aria-expanded", "false");
    });
    if (willOpen) {
      row.classList.add("open");
      button.setAttribute("aria-expanded", "true");
    }
  });

  byId("shX").addEventListener("click", () => sheet.close());
  // Clicar fora do painel também fecha
  sheet.addEventListener("click", (event) => {
    if (event.target === sheet) sheet.close();
  });
}

// ========== Faixa com os nomes dos exames passando ==========
// A lista é repetida duas vezes para a faixa nunca ficar vazia enquanto passa.
function renderTicker() {
  byId("tk").innerHTML = EXAMS.concat(EXAMS)
    .map((exam) => "<span>" + escapeHtml(exam.name.replace(" (ECG)", "")) + ICON_PULSE + "</span>")
    .join("");
}

// ========== Conversa animada no celular ==========
function setupChatAnimation() {
  const messages = [...document.querySelectorAll("#msgs .m")];
  const typing = byId("typing");
  const steps = [...document.querySelectorAll("#st li")];
  let timers = [];
  let running = false;

  if (reduceMotion) {
    messages.forEach((message) => message.classList.add("show"));
    return;
  }

  function stop() {
    timers.forEach(clearTimeout);
    timers = [];
  }

  function highlightStep(index) {
    steps.forEach((step, i) => step.classList.toggle("on", i === index));
  }

  // Cada linha: [quando acontece (em milissegundos), o que acontece]
  function play() {
    stop();
    messages.forEach((message) => message.classList.remove("show"));
    typing.classList.remove("show");
    highlightStep(-1);

    const timeline = [
      [500, () => { messages[0].classList.add("show"); highlightStep(0); }],
      [1300, () => typing.classList.add("show")],
      [2600, () => { typing.classList.remove("show"); messages[1].classList.add("show"); highlightStep(1); }],
      [4000, () => messages[2].classList.add("show")],
      [4800, () => typing.classList.add("show")],
      [6200, () => { typing.classList.remove("show"); messages[3].classList.add("show"); highlightStep(2); }],
      [12500, play], // recomeça
    ];
    timeline.forEach(([delay, action]) => timers.push(setTimeout(action, delay)));
  }

  // Só anima quando o celular está aparecendo na tela
  new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && !running) {
        running = true;
        play();
      } else if (!entry.isIntersecting && running) {
        running = false;
        stop();
      }
    });
  }, { threshold: 0.35 }).observe(byId("msgs"));
}

// ========== Fotos da clínica passando sem parar ==========
function setupGallery() {
  const track = byId("track");
  const belt = byId("belt");
  const originals = [...belt.children];
  const SLIDE_GAP = 20; // mesmo espaço entre fotos do CSS (.belt)
  const SPEED = reduceMotion ? 0 : 28; // pixels por segundo

  // Copia as fotos duas vezes para a faixa parecer infinita
  for (let copy = 0; copy < 2; copy++) {
    originals.forEach((slide) => {
      const clone = slide.cloneNode(true);
      clone.setAttribute("aria-hidden", "true");
      belt.appendChild(clone);
    });
  }

  let setWidth = 0; // largura de um grupo completo de fotos
  let offset = 0; // quanto a faixa está deslocada para o lado
  let paused = false;
  let started = false;
  let slideAnimation = null; // animação de quando clica nas setas
  let drag = null;
  let lastFrameTime = 0;

  function measure() {
    setWidth = belt.children[originals.length].offsetLeft - belt.children[0].offsetLeft;
    if (!offset) offset = -setWidth;
  }

  // Quando passa do fim, volta para o começo sem ninguém perceber
  function keepInLoop() {
    if (!setWidth) return;
    while (offset <= -2 * setWidth) offset += setWidth;
    while (offset > 0) offset -= setWidth;
  }

  function render() {
    belt.style.transform = "translate3d(" + offset + "px,0,0)";
  }

  function frame(time) {
    const elapsed = lastFrameTime ? Math.min(64, time - lastFrameTime) : 16;
    lastFrameTime = time;

    if (slideAnimation) {
      const progress = Math.min(1, (time - slideAnimation.start) / slideAnimation.duration);
      const eased = 1 - Math.pow(1 - progress, 3);
      offset = slideAnimation.from + (slideAnimation.to - slideAnimation.from) * eased;
      if (progress >= 1) slideAnimation = null;
    } else if (started && !paused && !drag) {
      offset -= (SPEED * elapsed) / 1000;
    }

    keepInLoop();
    render();
    requestAnimationFrame(frame);
  }

  // Anda uma foto para frente (1) ou para trás (-1)
  function moveBy(direction) {
    const step = belt.children[0].getBoundingClientRect().width + SLIDE_GAP;
    slideAnimation = {
      from: offset,
      to: offset - direction * step,
      start: performance.now(),
      duration: reduceMotion ? 1 : 650,
    };
  }

  // Coloca a foto marcada com "data-start" no meio da tela
  function centerStartSlide() {
    const startIndex = originals.findIndex((slide) => slide.hasAttribute("data-start"));
    const slide = belt.children[originals.length + startIndex];
    if (!slide) return;
    measure();
    offset = track.clientWidth / 2 - (slide.offsetLeft + slide.offsetWidth / 2);
    keepInLoop();
    render();
  }

  byId("cPrev").addEventListener("click", () => moveBy(-1));
  byId("cNext").addEventListener("click", () => moveBy(1));

  // Para quando o mouse está em cima
  track.addEventListener("pointerenter", (event) => {
    if (event.pointerType === "mouse") paused = true;
  });
  track.addEventListener("pointerleave", () => { paused = false; });

  // Arrastar com o dedo ou o mouse
  track.addEventListener("pointerdown", (event) => {
    drag = { startX: event.clientX, startOffset: offset, pointerId: event.pointerId };
    slideAnimation = null;
    track.classList.add("drag");
    track.setPointerCapture(event.pointerId);
  });
  track.addEventListener("pointermove", (event) => {
    if (!drag || event.pointerId !== drag.pointerId) return;
    offset = drag.startOffset + (event.clientX - drag.startX);
  });
  function endDrag() {
    if (!drag) return;
    drag = null;
    track.classList.remove("drag");
  }
  track.addEventListener("pointerup", endDrag);
  track.addEventListener("pointercancel", endDrag);

  // As medidas mudam quando a tela muda de tamanho ou a fonte carrega
  window.addEventListener("resize", measure);
  window.addEventListener("load", measure);
  document.fonts.ready.then(measure);

  measure();
  centerStartSlide();
  requestAnimationFrame(frame);

  // Começa a andar um pouco depois que as fotos aparecem na tela
  new IntersectionObserver((entries, observer) => {
    if (!entries[0].isIntersecting) return;
    observer.disconnect();
    if (!drag && !slideAnimation) centerStartSlide();
    setTimeout(() => { started = true; }, 1500);
  }, { threshold: 0.6 }).observe(track);
}

// ========== Foto da capa se afasta de leve ao rolar ==========
function setupHeroZoom() {
  if (reduceMotion) return;
  const hero = byId("heroPh");

  function updateZoom() {
    const box = hero.getBoundingClientRect();
    const progress = Math.max(0, Math.min(1, -box.top / Math.max(1, box.height)));
    hero.style.setProperty("--hs", (1.06 + progress * 0.08).toFixed(4));
  }

  window.addEventListener("scroll", () => requestAnimationFrame(updateZoom), { passive: true });
  updateZoom();
}

// ========== Etiquetas dos cartões de convênio ==========
function chip(name, className) {
  const classAttr = className ? ' class="' + className + '"' : "";
  return "<span" + classAttr + ">" + escapeHtml(SHORT_NAMES[name] || name) + "</span>";
}

function renderInsuranceChips() {
  const more = "<span>Entre outros</span>";
  byId("klini").innerHTML = KLINI_CHIPS.map((name) => chip(name)).join("") + chip(KLINI_HIGHLIGHT, "hl") + more;
  byId("particular").innerHTML = PARTICULAR_CHIPS.map((name) => chip(name)).join("") + more;
}

// ========== Avaliações que trocam sozinhas ==========
function setupReviews() {
  const quote = byId("quote");
  const dots = byId("dots");
  let current = 0;
  let autoTimer = null;

  byId("stars").innerHTML = ICON_STAR.repeat(5);

  quote.innerHTML = REVIEWS.map(([name, text], i) =>
    '<figure class="q' + (i === 0 ? " on" : "") + '"' + (i ? ' aria-hidden="true"' : "") + ">" +
      "<blockquote>“" + escapeHtml(text) + "”</blockquote>" +
      "<cite><b>" + escapeHtml(name) + "</b>, paciente</cite>" +
    "</figure>"
  ).join("");

  dots.innerHTML = REVIEWS.map((_, i) =>
    '<button type="button" aria-label="Avaliação ' + (i + 1) + '"' + (i === 0 ? ' aria-current="true"' : "") + "></button>"
  ).join("");

  function show(index) {
    current = (index + REVIEWS.length) % REVIEWS.length;
    [...quote.children].forEach((review, i) => {
      review.classList.toggle("on", i === current);
      if (i === current) review.removeAttribute("aria-hidden");
      else review.setAttribute("aria-hidden", "true");
    });
    [...dots.children].forEach((dot, i) => {
      if (i === current) dot.setAttribute("aria-current", "true");
      else dot.removeAttribute("aria-current");
    });
  }

  // Passa para a próxima a cada 6,5 segundos
  function restartAutoPlay() {
    clearInterval(autoTimer);
    if (!reduceMotion) autoTimer = setInterval(() => show(current + 1), 6500);
  }

  byId("rPrev").addEventListener("click", () => { show(current - 1); restartAutoPlay(); });
  byId("rNext").addEventListener("click", () => { show(current + 1); restartAutoPlay(); });
  dots.addEventListener("click", (event) => {
    const dot = event.target.closest("button");
    if (!dot) return;
    show([...dots.children].indexOf(dot));
    restartAutoPlay();
  });

  // Para de trocar quando o mouse está em cima
  const section = byId("avaliacoes");
  section.addEventListener("pointerenter", () => clearInterval(autoTimer));
  section.addEventListener("pointerleave", restartAutoPlay);
  restartAutoPlay();
}

// ========== Mapa ==========
// Usa o MapLibre (mapa gratuito). Só baixa quando a pessoa chega perto do mapa.
const MAPLIBRE_URL = "https://cdn.jsdelivr.net/npm/maplibre-gl@4.7.1/dist/maplibre-gl";
const MAP_STYLE_URL = "https://tiles.openfreemap.org/styles/positron";

// Pinta o mapa com as cores do site e tira os pontos de comércio
function tintMapStyle(style) {
  style.layers = style.layers.filter((layer) => !/poi|housenumber|aerodrome/.test(layer.id));
  style.layers.forEach((layer) => {
    const id = layer.id;
    const paint = (layer.paint = layer.paint || {});

    if (layer.type === "background") {
      paint["background-color"] = "#F6EEEB";
    } else if (layer.type === "fill") {
      if (/water/.test(id)) paint["fill-color"] = "#E8D5D6";
      else if (/building/.test(id)) {
        paint["fill-color"] = "#EFE2DE";
        paint["fill-outline-color"] = "#E5D3CF";
      } else if (/park|wood|grass|landcover|landuse|green/.test(id)) paint["fill-color"] = "#F1E7E3";
    } else if (layer.type === "line") {
      if (/water|river/.test(id)) paint["line-color"] = "#E2CACB";
      else if (/boundary|admin/.test(id)) paint["line-color"] = "#DDC6C6";
      else if (/road|highway|street|path|bridge|tunnel|rail/.test(id)) {
        if (/casing|outline/.test(id)) paint["line-color"] = "#E9D9D5";
        else if (/motorway|trunk|primary/.test(id)) paint["line-color"] = "#F2CFD4";
        else paint["line-color"] = "#FFFFFF";
      }
    } else if (layer.type === "symbol") {
      paint["text-color"] = "#7D6E71";
      paint["text-halo-color"] = "#FBF7F5";
      paint["text-halo-width"] = 1.4;
    }
  });
  return style;
}

function buildMap(mapElement) {
  fetch(MAP_STYLE_URL)
    .then((response) => response.json())
    .then((style) => {
      const container = document.createElement("div");
      container.className = "ml";
      mapElement.appendChild(container);

      const map = new maplibregl.Map({
        container,
        style: tintMapStyle(style),
        center: CLINIC_LOCATION,
        zoom: 16.3,
        attributionControl: { compact: true },
        cooperativeGestures: true, // precisa de dois dedos / Ctrl para mexer, assim não atrapalha a rolagem
        dragRotate: false,
        pitchWithRotate: false,
        locale: {
          "CooperativeGesturesHandler.WindowsHelpText": "Use Ctrl + rolagem para aproximar o mapa",
          "CooperativeGesturesHandler.MacHelpText": "Use ⌘ + rolagem para aproximar o mapa",
          "CooperativeGesturesHandler.MobileHelpText": "Use dois dedos para mover o mapa",
          "NavigationControl.ZoomIn": "Aproximar",
          "NavigationControl.ZoomOut": "Afastar",
        },
      });
      map.addControl(new maplibregl.NavigationControl({ showCompass: false }), "top-right");

      // Marcador da clínica
      const pin = document.createElement("div");
      pin.className = "pin";
      pin.innerHTML = '<span class="pl"><img src="img/marca/simbolo.webp" alt="">Cardiofrequência</span><span class="tip"></span><span class="dot"></span>';
      new maplibregl.Marker({ element: pin, anchor: "bottom" }).setLngLat(CLINIC_LOCATION).addTo(map);

      // Tira o endereço provisório quando o mapa termina de carregar
      map.once("load", () => mapElement.querySelector(".map-ph")?.remove());
    })
    .catch(() => {
      // Se o mapa não carregar, o endereço provisório continua na tela
    });
}

function setupMap() {
  const mapElement = byId("map");

  function loadMap() {
    const css = document.createElement("link");
    css.rel = "stylesheet";
    css.href = MAPLIBRE_URL + ".css";
    document.head.appendChild(css);

    const script = document.createElement("script");
    script.src = MAPLIBRE_URL + ".js";
    script.onload = () => buildMap(mapElement);
    document.head.appendChild(script);
  }

  new IntersectionObserver((entries, observer) => {
    if (!entries[0].isIntersecting) return;
    observer.disconnect();
    loadMap();
  }, { rootMargin: "600px 0px" }).observe(mapElement);
}

// ========== Partes aparecendo suave ao rolar a página ==========
// Tudo que tem a classe "rv" começa escondido e aparece quando entra na tela.
function setupRevealOnScroll() {
  const elements = document.querySelectorAll(".rv");
  if (reduceMotion) {
    elements.forEach((element) => element.classList.add("in"));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("in");
      observer.unobserve(entry.target);
    });
  }, { rootMargin: "0px 0px -8% 0px", threshold: 0.06 });

  elements.forEach((element) => {
    // Itens lado a lado aparecem um pouquinho depois do outro
    const position = [...element.parentElement.children].indexOf(element);
    element.style.transitionDelay = Math.min(position, 4) * 90 + "ms";
    observer.observe(element);
  });
}

// ========== Liga tudo ==========
// Avisa o CSS que o JavaScript está funcionando (para esconder as partes antes de aparecerem)
document.documentElement.classList.add("js");

setupWhatsappLinks();
setupBrand();
setupButtonRipple();
setupMenu();
setupOpenStatus();
renderCategoryTiles();
setupExamSheet();
renderTicker();
setupChatAnimation();
setupGallery();
setupHeroZoom();
renderInsuranceChips();
setupReviews();
setupMap();
setupRevealOnScroll(); // por último, porque os cartões de exames são criados antes
