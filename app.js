/* CFTC site — vanilla JS */

// ============= SERVICES DATA =============
const SERVICES = [
  {
    code: "ISO 22000:2018",
    title: "نظام إدارة سلامة الأغذية",
    sub: "ISO 22000 · الخدمة الأكثر طلباً لدينا",
    desc: "النظام الدولي المرجعي لضمان سلامة المنتج الغذائي على طول السلسلة — من المادة الخام حتى المستهلك. نرافقك في بناء النظام بالكامل وتأهيل فريقك للاعتماد من أول محاولة.",
    feats: [
      "تحليل المخاطر HACCP الكامل",
      "بناء نظام التتبع والاسترجاع",
      "توثيق إجراءات النظافة GMP",
      "تأهيل فريق سلامة الأغذية",
      "خطط الطوارئ والاستدعاء",
      "تجهيز التدقيق الخارجي"
    ],
    duration: "3 – 4 أشهر",
    sectors: "مصانع الأغذية · المطاحن · المعاصر · المخابز",
    success: "97%",
    phases: [
      "زيارة ميدانية وتحليل الفجوة",
      "بناء وتوثيق نظام السلامة",
      "تدريب وتطبيق على أرض الواقع",
      "تدقيق داخلي ومرحلة ما قبل الاعتماد",
      "مرافقة التدقيق الخارجي ومنح الشهادة"
    ]
  },
  {
    code: "ISO 9001:2015",
    title: "نظام إدارة الجودة",
    sub: "ISO 9001 · المعيار الأكثر شيوعاً في العالم",
    desc: "إطار عمل شامل لإدارة عمليات منشأتك بطريقة منهجية تضمن رضا العملاء والتحسين المستمر. يصلح لأي قطاع: صناعي، تجاري، خدمي.",
    feats: [
      "نهج موجه نحو العميل",
      "قيادة قائمة على الأدلة",
      "إدارة العمليات بالطريقة العلمية",
      "إدارة المخاطر والفرص",
      "تحسين مستمر مبني على البيانات",
      "تأهيل المراجعين الداخليين"
    ],
    duration: "2.5 – 3.5 أشهر",
    sectors: "كل القطاعات تقريباً",
    success: "96%",
    phases: [
      "التشخيص الأولي وخريطة العمليات",
      "بناء سياسة وإجراءات الجودة",
      "التدريب وقياس مؤشرات الأداء",
      "التدقيق الداخلي وعلاج الفجوات",
      "تدقيق خارجي ومنح الشهادة"
    ]
  },
  {
    code: "ISO 45001:2018",
    title: "نظام إدارة الصحة والسلامة المهنية",
    sub: "ISO 45001 · بيئة عمل آمنة وإنتاجية أعلى",
    desc: "حماية موظفيك هي أهم استثمار. نبني معك نظام صحة وسلامة مهنية يقلل الحوادث ويرفع الإنتاجية ويحقق التزامك القانوني والاجتماعي.",
    feats: [
      "تقييم مخاطر بيئة العمل",
      "خطط الاستجابة لحالات الطوارئ",
      "إدارة الحوادث والتحقيق فيها",
      "تدريب فرق السلامة في الموقع",
      "متطلبات قانونية وتنظيمية",
      "مؤشرات أداء سلامة قابلة للقياس"
    ],
    duration: "3 – 4 أشهر",
    sectors: "مصانع · مقاولات · ورش · مرافق صناعية",
    success: "94%",
    phases: [
      "مسح ميداني وتقييم المخاطر",
      "بناء سياسة وإجراءات السلامة",
      "تدريب فرق العمل والإدارة",
      "تطبيق التدقيق الداخلي",
      "تدقيق خارجي والاعتماد"
    ]
  },
  {
    code: "ISO 27001:2013",
    title: "نظام إدارة أمن المعلومات",
    sub: "ISO 27001 · حماية بياناتك وثقة عملائك",
    desc: "في عصر التهديدات السيبرانية، حماية بيانات منشأتك وعملائك لم تعد خياراً. نبني نظام أمن معلومات معتمد دولياً يضمن السرية والتكامل والتوفر.",
    feats: [
      "تقييم مخاطر أمن المعلومات",
      "ضوابط الوصول والصلاحيات",
      "إدارة الحوادث السيبرانية",
      "استمرارية الأعمال والاسترجاع",
      "حماية البيانات الشخصية",
      "تأهيل مسؤول أمن المعلومات"
    ],
    duration: "3.5 – 5 أشهر",
    sectors: "البنوك · الصرافة · تقنية المعلومات · الاتصالات",
    success: "92%",
    phases: [
      "مسح الأصول المعلوماتية",
      "تقييم المخاطر السيبرانية",
      "تنفيذ الضوابط التقنية والإدارية",
      "اختبارات اختراق وتدقيق داخلي",
      "تدقيق خارجي ومنح الشهادة"
    ]
  },
  {
    code: "Training Programs",
    title: "التدريب والتطوير المهني",
    sub: "برامج معتمدة من مونتريال — كندا",
    desc: "أكثر من 30 برنامج تدريبي معتمد دولياً، تشمل المراجعين الداخليين والمدققين الرئيسيين وفِرق سلامة الأغذية. الشهادة معترف بها دولياً وفي الأسواق الخليجية.",
    feats: [
      "Lead Auditor · ISO 22000 / 9001 / 45001",
      "Internal Auditor · جميع المعايير",
      "HACCP & Food Safety Team Leader",
      "Risk Management Workshop",
      "ورش مخصصة لاحتياجات منشأتك",
      "شهادة معتمدة دولياً"
    ],
    duration: "أيام / أسابيع",
    sectors: "كل القطاعات والمستويات الإدارية",
    success: "98%",
    phases: [
      "تحديد الاحتياج التدريبي",
      "تصميم البرنامج المخصص",
      "تنفيذ ورش العمل المكثفة",
      "تقييم وتوزيع الشهادات",
      "متابعة ما بعد التدريب"
    ]
  }
];

// ============= SECTOR ICONS =============
const SECTOR_ICONS = {
  food: `<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8h1a4 4 0 0 1 0 8h-1"/><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/><line x1="6" y1="1" x2="6" y2="4"/><line x1="10" y1="1" x2="10" y2="4"/><line x1="14" y1="1" x2="14" y2="4"/></svg>`,
  comm: `<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>`,
  ind:  `<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.07 4.93l-1.41 1.41M5.34 18.66l-1.41 1.41M20 12h-2M6 12H4M19.07 19.07l-1.41-1.41M5.34 5.34 3.93 3.93M12 20v-2M12 6V4"/></svg>`,
  fin:  `<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>`,
  edu:  `<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>`,
};

const SECTOR_LABELS = { food:"غذائي", comm:"تجاري", ind:"صناعي", fin:"مالي", edu:"تعليمي" };

// ============= CLIENTS DATA =============
const CLIENTS = [
  {n:"أبو حميد للتجارة والصناعة", c:"ISO 22000:2018 · ISO 9001:2015", l:"غزة",    t:"food", mono:"أح", color:"#c0392b", logo:"assets/clients/abu-hamid.png"},
  {n:"أطيب",                       c:"ISO 22000:2018 — سلامة الغذاء",  l:"غزة",    t:"food", mono:"أط", color:"#e67e22", logo:""},
  {n:"الجرجاوي للمرطبات والعصائر", c:"ISO 22000:2018 — سلامة الغذاء",  l:"غزة",    t:"food", mono:"جر", color:"#c0392b", logo:"assets/clients/jarjawi.jpg"},
  {n:"مجموعة معاصر أبو عودة",      c:"ISO 22000:2018 · HACCP",         l:"غزة",    t:"food", mono:"أع", color:"#27ae60", logo:"assets/clients/abu-awda.png"},
  {n:"مول أبو دلال التجاري",        c:"ISO 9001:2015 — إدارة الجودة",   l:"غزة",    t:"comm", mono:"دل", color:"#c0392b", logo:"assets/clients/abu-dalal.jpg"},
  {n:"أبو سلمية للصرافة والحوالات", c:"ISO 27001:2013 — أمن المعلومات", l:"غزة",    t:"fin",  mono:"سل", color:"#c0392b", logo:"assets/clients/abu-salmiya.jpg"},
  {n:"الأصل تك للأدوات المنزلية",   c:"ISO 9001:2015 — إدارة الجودة",   l:"غزة",    t:"ind",  mono:"AT", color:"#b8960c", logo:"assets/clients/asl-tech.jpg"},
  {n:"سلامة الجنوب للمحروقات",      c:"ISO 9001:2015 — إدارة الجودة",   l:"غزة",    t:"ind",  mono:"سج", color:"#3498db", logo:"assets/clients/salamat-janub.jpg"},
  {n:"M&M المطاحن والتجارة العامة", c:"ISO 22000:2018 — سلامة الغذاء",  l:"غزة",    t:"food", mono:"MM", color:"#2c3e50", logo:""},
  {n:"مخابز كامل عجور",             c:"ISO 22000:2018 — سلامة الغذاء",  l:"غزة",    t:"food", mono:"كع", color:"#b8960c", logo:"assets/clients/kamel-ajour.jpg"},
  {n:"الغصون الإسلامية",            c:"ISO 22000:2018 — سلامة الغذاء",  l:"طولكرم", t:"food", mono:"غص", color:"#27ae60", logo:"assets/clients/ghusoun.jpg"},
  {n:"بال فروت للاستثمار والتسويق", c:"ISO 22000:2018 — سلامة الغذاء",  l:"نابلس",  t:"food", mono:"PF", color:"#27ae60", logo:"assets/clients/pal-fruit.jpg"},
  {n:"كوين فالي للاستثمار الزراعي", c:"ISO 22000:2018 · HALAL",         l:"نابلس",  t:"food", mono:"QV", color:"#b8960c", logo:"assets/clients/queen-valley.jpg"},
  {n:"الشيخ قاسم للمواد الغذائية",  c:"ISO 22000:2018 — سلامة الغذاء",  l:"القدس",  t:"food", mono:"شق", color:"#c0392b", logo:"assets/clients/sheikh-qasim.jpg"},
  {n:"القواسمي للمجوهرات",           c:"ISO 9001:2015 · ISO 45001:2015", l:"الضفة",  t:"comm", mono:"قو", color:"#b8960c", logo:"assets/clients/qawasmi.jpg"},
  {n:"تكني لوك",                    c:"ISO 9001:2015 — إدارة الجودة",   l:"الضفة",  t:"comm", mono:"TL", color:"#27ae60", logo:""},
  {n:"مدرسة أوائل وقادة",           c:"ISO 21001:2018 — جودة التعليم",  l:"غزة",    t:"edu",  mono:"AQ", color:"#e74c3c", logo:"assets/clients/awael.jpg"}
];

// ============= RENDER SERVICE PANEL =============
function renderService(i){
  const s = SERVICES[i];
  const panel = document.getElementById("svc-panel");
  panel.innerHTML = `
    <div class="svc-panel__copy">
      <div class="svc-panel__sub">${s.sub}</div>
      <h3>${s.title}</h3>
      <p class="svc-panel__desc">${s.desc}</p>
      <ul class="svc-panel__feats">
        ${s.feats.map(f=>`<li>${f}</li>`).join("")}
      </ul>
      <div class="svc-panel__cta">
        <a href="#contact" class="btn btn--success">طلب عرض سعر</a>
        <a href="#contact" class="btn btn--ghost">استشارة مجانية</a>
      </div>
    </div>
    <div class="svc-panel__side">
      <div class="svc-panel__sidehd">ملخص الخدمة</div>
      <div class="svc-stat">
        <span class="svc-stat__lbl">المدة الزمنية</span>
        <span class="svc-stat__val">${s.duration}</span>
      </div>
      <div class="svc-stat">
        <span class="svc-stat__lbl">معدل النجاح</span>
        <span class="svc-stat__val svc-stat__val--orange">${s.success}</span>
      </div>
      <div class="svc-stat">
        <span class="svc-stat__lbl">القطاعات المناسبة</span>
        <span class="svc-stat__val" style="font-size:13px;text-align:end;max-width:200px">${s.sectors}</span>
      </div>

      <div class="svc-panel__sidehd" style="margin-top:24px">مراحل العمل</div>
      <div class="svc-phases">
        ${s.phases.map((p,idx)=>`
          <div class="svc-phase">
            <span class="svc-phase__no">${idx+1}</span>
            <span>${p}</span>
          </div>`).join("")}
      </div>
    </div>
  `;
}

// ============= RENDER CLIENTS =============
function renderClients(filter="all"){
  const grid = document.getElementById("clientGrid");
  const list = filter==="all" ? CLIENTS : CLIENTS.filter(c=>c.t===filter);
  grid.innerHTML = list.map(c=>{
    const logoHtml = c.logo
      ? `<img src="${c.logo}" alt="${c.n}" class="cli__logo" onerror="this.style.display='none';this.nextElementSibling.style.display='grid'" /><div class="cli__mono" style="background:linear-gradient(135deg,${c.color},${c.color}bb);display:none">${c.mono}</div>`
      : `<div class="cli__mono" style="background:linear-gradient(135deg,${c.color},${c.color}bb)">${c.mono}</div>`;
    return `
    <div class="cli">
      <div class="cli__card-top" style="border-bottom:2px solid ${c.color}22">
        ${logoHtml}
        <div class="cli__sector-badge" style="color:${c.color};background:${c.color}15">
          <span class="cli__sector-icon">${SECTOR_ICONS[c.t]||""}</span>
          ${SECTOR_LABELS[c.t]||""}
        </div>
      </div>
      <div class="cli__body">
        <div class="cli__name">${c.n}</div>
        <div class="cli__certs">${c.c}</div>
        <div class="cli__loc">
          <svg viewBox="0 0 24 24" width="10" height="10" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
          ${c.l}
        </div>
      </div>
    </div>`;
  }).join("");
}

// ============= COUNTER ANIMATION =============
function animateCounters(){
  const counters = document.querySelectorAll("[data-count]");
  counters.forEach(el=>{
    const target = parseInt(el.dataset.count,10);
    const duration = 1400;
    const start = performance.now();
    function tick(now){
      const p = Math.min(1,(now-start)/duration);
      const eased = 1 - Math.pow(1-p,3);
      el.textContent = Math.round(target*eased);
      if(p<1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  });
}

// ============= INIT =============
document.addEventListener("DOMContentLoaded",()=>{
  // initial render
  renderService(0);
  renderClients("all");

  // service tabs
  document.querySelectorAll(".svc-tab").forEach(tab=>{
    tab.addEventListener("click",()=>{
      document.querySelectorAll(".svc-tab").forEach(t=>t.classList.remove("svc-tab--active"));
      tab.classList.add("svc-tab--active");
      renderService(parseInt(tab.dataset.svc,10));
    });
  });

  // client filters
  document.querySelectorAll(".cf").forEach(btn=>{
    btn.addEventListener("click",()=>{
      document.querySelectorAll(".cf").forEach(b=>b.classList.remove("cf--active"));
      btn.classList.add("cf--active");
      renderClients(btn.dataset.f);
    });
  });

  // mobile nav
  const burger = document.getElementById("burger");
  const nav = document.getElementById("nav");
  burger?.addEventListener("click",()=>{
    const open = nav.classList.toggle("is-open");
    burger.setAttribute("aria-expanded", open);
  });
  nav?.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>{
    nav.classList.remove("is-open");
    burger.setAttribute("aria-expanded","false");
  }));
  // close nav on outside click
  document.addEventListener("click",e=>{
    if(nav.classList.contains("is-open") && !nav.contains(e.target) && !burger.contains(e.target)){
      nav.classList.remove("is-open");
      burger.setAttribute("aria-expanded","false");
    }
  });

  // active nav link on scroll
  const sections = ["home","about","services","cases","clients","pricing","contact"];
  const navLinks = document.querySelectorAll(".nav__link");
  const io = new IntersectionObserver(entries=>{
    entries.forEach(e=>{
      if(e.isIntersecting){
        navLinks.forEach(l=>l.classList.remove("nav__link--active"));
        const idx = sections.indexOf(e.target.id);
        if(idx>=0 && navLinks[idx]) navLinks[idx].classList.add("nav__link--active");
      }
    });
  },{rootMargin:"-50% 0px -50% 0px"});
  sections.forEach(id=>{
    const el = document.getElementById(id);
    if(el) io.observe(el);
  });

  // animate counters when hero visible
  const heroIO = new IntersectionObserver((entries,obs)=>{
    entries.forEach(e=>{
      if(e.isIntersecting){
        animateCounters();
        obs.disconnect();
      }
    });
  },{threshold:.2});
  const stats = document.querySelector(".stats");
  if(stats) heroIO.observe(stats);

  // sticky mobile CTA
  const stickyCta = document.getElementById("stickyCta");
  window.addEventListener("scroll", ()=>{
    if(window.scrollY > 400) stickyCta.classList.add("is-visible");
    else stickyCta.classList.remove("is-visible");
  }, {passive:true});

  // exit intent popup
  const overlay = document.getElementById("exitOverlay");
  let exitShown = false;
  document.addEventListener("mouseleave", e=>{
    if(e.clientY < 10 && !exitShown){
      exitShown = true;
      overlay.classList.add("is-open");
    }
  });
  document.getElementById("exitClose")?.addEventListener("click", ()=>overlay.classList.remove("is-open"));
  document.getElementById("exitSkip")?.addEventListener("click", ()=>overlay.classList.remove("is-open"));
  overlay.addEventListener("click", e=>{ if(e.target===overlay) overlay.classList.remove("is-open"); });

  // FAQ accordion
  document.querySelectorAll(".faq-q").forEach(btn=>{
    btn.addEventListener("click",()=>{
      const item=btn.closest(".faq-item");
      const ans=item.querySelector(".faq-a");
      const isOpen=btn.getAttribute("aria-expanded")==="true";
      document.querySelectorAll(".faq-q").forEach(b=>{
        b.setAttribute("aria-expanded","false");
        b.closest(".faq-item").querySelector(".faq-a").classList.remove("is-open");
      });
      if(!isOpen){btn.setAttribute("aria-expanded","true");ans.classList.add("is-open");}
    });
  });

  // urgency spots — random 2-4, persisted per session
  const spotsEl=document.getElementById("spotsLeft");
  if(spotsEl){
    const saved=sessionStorage.getItem("cftc_spots");
    const n=saved||String(Math.floor(Math.random()*3)+2);
    spotsEl.textContent=n;
    if(!saved) sessionStorage.setItem("cftc_spots",n);
  }

  // WA online chip — click opens WhatsApp
  const waOnline=document.getElementById("waOnline");
  const WA_URL="https://wa.me/972595802221?text=السلام%20عليكم%2C%20أريد%20استشارة%20مجانية%20عن%20شهادة%20ISO";
  waOnline?.addEventListener("click",()=>window.open(WA_URL,"_blank"));
  waOnline?.addEventListener("keydown",e=>{if(e.key==="Enter"||e.key===" ") window.open(WA_URL,"_blank");});

  // contact form
  const form = document.getElementById("cform");
  form?.addEventListener("submit",e=>{
    e.preventDefault();
    if(!form.checkValidity()){form.reportValidity();return;}
    const ok = document.getElementById("cformSuccess");
    ok.hidden = false;
    form.reset();
    setTimeout(()=>{ok.hidden = true;}, 5000);
  });
});
