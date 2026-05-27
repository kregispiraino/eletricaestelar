(() => {
  const SERVICES = {
    residencial: [
      {
        title: "Câmeras de segurança",
        desc: "Instalação, configuração e manutenção de sistemas de monitoramento.",
        img: "assets/servicos/cameras.webp"
      },
      {
        title: "Portão eletrônico",
        desc: "Instalação e reparo em portões automatizados, motores e sensores.",
        img: "assets/servicos/portao-eletronico.webp"
      },
      {
        title: "Reparos elétricos",
        desc: "Diagnóstico e correção de falhas, curtos e oscilações na rede.",
        img: "assets/servicos/reparos.webp"
      },
      {
        title: "Chuveiro elétrico",
        desc: "Instalação, troca e adequação de fiação para chuveiros com segurança.",
        img: "assets/servicos/chuveiro.webp"
      },
      {
        title: "Torneira elétrica",
        desc: "Instalação e manutenção com aterramento e disjuntor adequados.",
        img: "assets/servicos/torneira-eletrica.webp"
      },
      {
        title: "Pressurizador de água",
        desc: "Instalação e ajuste fino para melhor pressão e durabilidade do equipamento.",
        img: "assets/servicos/pressurizador-de-agua.webp"
      },
      {
        title: "Tomadas e pontos elétricos",
        desc: "Instalação, troca e organização de pontos novos com acabamento limpo.",
        img: "assets/servicos/tomadas.webp"
      },
      {
        title: "Circuitos em geral",
        desc: "Criação, adequação e manutenção de circuitos residenciais e prediais.",
        img: "assets/servicos/circuito.webp"
      },
      {
        title: "Projeto elétrico completo",
        desc: "Do dimensionamento ao quadro final, com execução do projeto do início ao fim.",
        img: "assets/servicos/projeto-eletrico.webp"
      },
      {
        title: "Instalação de painéis e máquinas",
        desc: "Instalação elétrica completa para painéis, máquinas e equipamentos.",
        img: "assets/servicos/instalacao-paineis.webp"
      }
    ],
    industrial: [
      {
        title: "Manutenção em painéis",
        desc: "Manutenção preventiva e corretiva em painéis elétricos industriais.",
        img: "assets/servicos/paineis.webp"
      },
      {
        title: "Troca de disjuntores",
        desc: "Substituição de disjuntores com análise técnica e dimensionamento correto.",
        img: "assets/servicos/disjuntores_industriais.webp"
      },
      {
        title: "Reparo em circuito de máquinas",
        desc: "Diagnóstico e reparo de problemas elétricos em máquinas operacionais.",
        img: "assets/servicos/reparo-circuito-maquinas.webp"
      },
      {
        title: "Troca de componentes",
        desc: "Identificação e substituição de componentes danificados ou desgastados.",
        img: "assets/servicos/troca-de-componentes.webp"
      }
    ]
  };

  // ====== Header scroll state ======
  const header = document.getElementById("siteHeader");
  const onScroll = () => {
    if (window.scrollY > 8) header.classList.add("is-scrolled");
    else header.classList.remove("is-scrolled");
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  // ====== Mobile menu ======
  const menuToggle = document.getElementById("menuToggle");
  const navMobile = document.getElementById("navMobile");

  const setMenu = (open) => {
    menuToggle.setAttribute("aria-expanded", open ? "true" : "false");
    if (open) {
      navMobile.hidden = false;
    } else {
      navMobile.hidden = true;
    }
  };
  setMenu(false);

  menuToggle.addEventListener("click", () => {
    const open = menuToggle.getAttribute("aria-expanded") === "true";
    setMenu(!open);
  });

  navMobile.addEventListener("click", (e) => {
    if (e.target.tagName === "A") setMenu(false);
  });

  // ====== Segment toggle + services rendering ======
  const grid = document.getElementById("servicesGrid");
  const toggle = document.querySelector(".segment-toggle");
  const thumb = toggle.querySelector(".segment-thumb");
  const options = toggle.querySelectorAll(".segment-option");

  const renderServices = (mode) => {
    const items = SERVICES[mode] || [];
    grid.innerHTML = "";

    items.forEach((item, i) => {
      const card = document.createElement("article");
      card.className = "service-card";
      card.style.animationDelay = `${i * 40}ms`;

      card.innerHTML = `
        <div class="service-image">
          <img src="${item.img}" alt="${item.title}" loading="lazy" decoding="async" width="600" height="450" />
        </div>
        <div class="service-body">
          <h3>${item.title}</h3>
          <p>${item.desc}</p>
        </div>
      `;

      grid.appendChild(card);
    });
  };

  const positionThumb = () => {
    const active = toggle.querySelector(".segment-option.is-active");
    if (!active) return;
    thumb.style.width = `${active.offsetWidth}px`;
    thumb.style.transform = `translateX(${active.offsetLeft}px)`;
  };

  const setMode = (mode) => {
    toggle.dataset.active = mode;
    options.forEach((opt) => {
      const isActive = opt.dataset.mode === mode;
      opt.classList.toggle("is-active", isActive);
      opt.setAttribute("aria-selected", isActive ? "true" : "false");
    });
    positionThumb();
    renderServices(mode);
  };

  options.forEach((opt) => {
    opt.addEventListener("click", () => setMode(opt.dataset.mode));
  });

  setMode("residencial");

  // Recalc thumb on resize and after webfonts load (text width may shift)
  window.addEventListener("resize", positionThumb);
  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(positionThumb);
  } else {
    window.addEventListener("load", positionThumb);
  }

  // ====== Year ======
  document.getElementById("year").textContent = new Date().getFullYear();
})();