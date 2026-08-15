const phone = '5515998201058';
const defaultMessage = 'Olá! Vim pelo site da Alicia Braids e gostaria de saber sobre horários disponíveis.';
const whatsapp = (message = defaultMessage) => `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

const services = [
  ['Nagô lateral ou topo', 'R$ 45', 'tranca-nago-lateral.jpg', 'Versátil'],
  ['Box Braids', 'R$ 430', 'box-braids.jpg', 'Clássica'],
  ['Fulany com cachos', 'R$ 430', 'fulany-cachos.jpg', 'Autêntica'],
  ['Gypsy Braids', 'R$ 440', 'gypsy-braids.jpg', 'Marcante'],
  ['Boho Braids longas', 'R$ 430', 'boho-braids.jpg', 'Leve'],
  ['Ghana Braids', 'R$ 130', 'ghana-braids.jpg', 'Elegante'],
  ['Duo ponytail', 'R$ 150', 'duo-ponytail-colorida.jpg', 'Colorida'],
  ['Tranças masculinas', 'R$ 120', 'tranca-masculina.jpg', 'Personalizada'],
];
const gallery = services.slice(1, 7);

document.querySelector('#app').innerHTML = `
  <a class="skip-link" href="#conteudo">Pular para o conteúdo</a>
  <header class="site-header">
    <div class="shell header-inner">
      <a class="brand" href="#inicio" aria-label="Alicia Braids — início"><img src="./assets/alicia-braids-logo-transparent-4k.webp" alt="Alicia Braids"><span>Trancista profissional</span></a>
      <button class="menu-button" type="button" aria-expanded="false" aria-controls="main-nav" aria-label="Abrir menu"><i class="ph ph-list"></i></button>
      <nav id="main-nav" class="main-nav" aria-label="Navegação principal">
        <a href="#inicio">Início</a><a href="#servicos">Serviços</a><a href="#trabalhos">Trabalhos</a><a href="#cursos">Cursos</a><a href="#contato">Contato</a>
        <a class="button button-small" href="${whatsapp()}" target="_blank" rel="noopener"><i class="ph-fill ph-whatsapp-logo"></i> Agendar horário</a>
      </nav>
    </div>
  </header>
  <main id="conteudo">
    <section class="hero" id="inicio">
      <div class="shell hero-grid">
        <div class="hero-copy reveal">
          <span class="eyebrow"><i class="ph-fill ph-sparkle"></i> Beleza, identidade e cuidado</span>
          <h1>Tranças que realçam <em>sua beleza</em> e sua autoestima.</h1>
          <p class="hero-script">Beleza, identidade e cuidado em cada detalhe.</p>
          <p>Há 5 anos transformando fios em identidade, confiança e alegria — com um atendimento acolhedor e cada detalhe pensado para você.</p>
          <div class="hero-actions"><a class="button" href="${whatsapp()}" target="_blank" rel="noopener"><i class="ph-fill ph-whatsapp-logo"></i> Agendar pelo WhatsApp</a><a class="text-link" href="#trabalhos">Ver transformações <i class="ph ph-arrow-down"></i></a></div>
          <div class="trust-row"><span><i class="ph-fill ph-map-pin"></i> Jd. São Guilherme — Sorocaba/SP</span><span><i class="ph-fill ph-shield-check"></i> Ambiente seguro e acolhedor</span></div>
        </div>
        <div class="hero-visual reveal"><div class="hero-splash"></div><img src="./assets/alicia-braids-drawing-transparent-4k.webp" alt="Ilustração da marca Alicia Braids"><div class="experience-card"><strong>5 anos</strong><span>criando autoestima</span></div></div>
      </div>
      <div class="ticker"><span>Tranças com propósito</span><i class="ph-fill ph-sparkle"></i><span>Material incluso</span><i class="ph-fill ph-sparkle"></i><span>Atendimento personalizado</span></div>
    </section>

    <section class="section services" id="servicos"><div class="shell">
      <div class="section-heading reveal"><div><span class="eyebrow">Escolha seu estilo</span><h2>Tranças para cada versão de você.</h2></div><p>Do clássico ao colorido, cada modelo é feito respeitando seu estilo, seu cabelo e o resultado que você deseja.</p></div>
      <div class="services-grid">${services.map(([name, price, image, tag], i) => `<article class="service-card reveal" style="--delay:${i * 45}ms"><div class="service-image"><img src="./assets/${image}" alt="${name}" loading="lazy"><span>${tag}</span></div><div class="service-info"><div><h3>${name}</h3><p>A partir de <strong>${price}</strong></p></div><a href="${whatsapp(`Olá! Vim pelo site da Alicia Braids e gostaria de saber mais sobre ${name}.`)}" target="_blank" rel="noopener" aria-label="Consultar ${name}"><i class="ph ph-arrow-up-right"></i></a></div></article>`).join('')}</div>
      <div class="price-note reveal"><i class="ph ph-info"></i><p>O valor final pode variar conforme comprimento, volume do cabelo e tamanho das tranças. O material está incluso; acessórios adicionais podem ser cobrados conforme a quantidade.</p><a href="${whatsapp('Olá! Vim pelo site e gostaria de enviar uma referência para receber meu orçamento.')}" target="_blank" rel="noopener">Pedir orçamento</a></div>
    </div></section>

    <section class="section work" id="trabalhos"><div class="shell">
      <div class="section-heading reveal"><div><span class="eyebrow">Transformações reais</span><h2>Seu cabelo. Sua história. Seu momento.</h2></div><p>Trabalhos realizados com técnica, conforto e atenção aos detalhes.</p></div>
      <div class="gallery">${gallery.map(([name,,image], i) => `<button class="gallery-item reveal gallery-${i + 1}" type="button" data-image="./assets/${image}" data-alt="${name}" aria-label="Ampliar foto: ${name}"><img src="./assets/${image}" alt="${name}" loading="lazy"><span><i class="ph ph-arrows-out-simple"></i></span></button>`).join('')}</div>
      <div class="about-card reveal"><div class="about-photo"><img src="./assets/alicia-perfil.jpg" alt="Alicia, trancista profissional" loading="lazy"><span>Começou como hobby.<br><strong>Virou propósito.</strong></span></div><div class="about-copy"><span class="eyebrow">Conheça a Alicia</span><h2>Mais do que tranças, autoestima, identidade e alegria.</h2><p>Sou trancista apaixonada pelo meu trabalho e focada em realçar a beleza e a autoestima de cada cliente. Cada técnica é realizada com atenção aos detalhes e respeito à personalidade de cada pessoa, garantindo conforto e um resultado feito com carinho.</p><p>Meu compromisso vai além do visual: quero proporcionar uma experiência acolhedora, leve e transformadora. Aqui, cada trança carrega propósito, história e muita dedicação.</p><a class="text-link" href="https://www.instagram.com/_aliciabraids/" target="_blank" rel="noopener"><i class="ph-fill ph-instagram-logo"></i> Acompanhe @_aliciabraids</a></div></div>
    </div></section>

    <section class="section courses" id="cursos"><div class="shell courses-grid">
      <div class="course-intro reveal"><span class="eyebrow">Aprenda com a Alicia</span><h2>Curso de tranças com certificado.</h2><p>Aulas VIP, práticas e pensadas para acompanhar seu nível. Escolha a modalidade e consulte as próximas turmas e o valor atualizado.</p><a class="button" href="${whatsapp('Olá! Vim pelo site e gostaria de saber sobre os cursos de tranças, próximas turmas e valores atuais.')}" target="_blank" rel="noopener">Consultar próximas turmas <i class="ph ph-arrow-right"></i></a></div>
      <div class="course-list">
        <article class="course-card reveal"><span>01</span><div><h3>Curso iniciante</h3><p>Para quem ainda não tem experiência. Inclui kit, aula VIP e prática de tranças de topo, lateral, desenhada, repartições limpas e aplicação de acessórios.</p><small><i class="ph ph-clock"></i> Carga horária: 4 horas</small></div></article>
        <article class="course-card reveal"><span>02</span><div><h3>Curso avançado</h3><p>Para trancistas que já têm uma base. Boxer braids, tranças masculinas, nagô com extensão, Ghana Braids e consultoria online após a aula.</p><small><i class="ph ph-clock"></i> Carga horária: 8 horas</small></div></article>
        <article class="course-card reveal"><span>03</span><div><h3>Fio de cristal</h3><p>Montagem, aplicação, lista de materiais e ajuda nas primeiras montagens para começar com mais segurança.</p><small><i class="ph ph-clock"></i> Carga horária: 1h30</small></div></article>
      </div>
    </div></section>

    <section class="section contact" id="contato"><div class="shell">
      <div class="contact-panel reveal"><div class="contact-copy"><span class="eyebrow">Pronta para transformar?</span><h2>Seu novo visual começa com uma conversa.</h2><p>Conte qual estilo você deseja e envie uma foto de referência. A Alicia orienta sobre modelo, valor e horários disponíveis pelo WhatsApp.</p><a class="button button-light" href="${whatsapp()}" target="_blank" rel="noopener"><i class="ph-fill ph-whatsapp-logo"></i> Falar com a Alicia</a></div><div class="contact-art"><img src="./assets/alicia-braids-drawing-transparent-4k.webp" alt="Ilustração Alicia Braids"><p><i class="ph-fill ph-map-pin"></i> Jd. São Guilherme<br>Sorocaba/SP</p></div></div>
      <div class="rules-grid"><article class="rule reveal"><i class="ph ph-calendar-check"></i><h3>Reserva de horário</h3><p>O agendamento é confirmado mediante sinal. Consulte as condições pelo WhatsApp.</p></article><article class="rule reveal"><i class="ph ph-package"></i><h3>Material e acessórios</h3><p>O material é incluso. Acessórios extras podem ser cobrados conforme a quantidade.</p></article><article class="rule reveal"><i class="ph ph-credit-card"></i><h3>Formas de pagamento</h3><p>Pix e dinheiro. Pagamentos no cartão possuem acréscimo da operadora.</p></article><article class="rule reveal"><i class="ph ph-clock-countdown"></i><h3>Tempo e cuidados</h3><p>O tempo varia conforme cabelo e técnica. Orientações de preparo e demais regras são confirmadas no atendimento.</p></article></div>
    </div></section>
  </main>
  <footer class="footer"><div class="shell footer-inner"><img src="./assets/alicia-braids-logo-transparent-4k.webp" alt="Alicia Braids"><p>© ${new Date().getFullYear()} Alicia Braids. Feito para realçar sua essência. <span aria-hidden="true">•</span> Desenvolvido por Ary Lab.</p><div><a href="https://www.instagram.com/_aliciabraids/" target="_blank" rel="noopener" aria-label="Instagram"><i class="ph-fill ph-instagram-logo"></i></a><a href="${whatsapp()}" target="_blank" rel="noopener" aria-label="WhatsApp"><i class="ph-fill ph-whatsapp-logo"></i></a></div></div></footer>
  <a class="floating-whatsapp" href="${whatsapp()}" target="_blank" rel="noopener" aria-label="Agendar pelo WhatsApp"><i class="ph-fill ph-whatsapp-logo"></i><span>Agendar</span></a>
  <dialog class="lightbox"><button type="button" aria-label="Fechar imagem"><i class="ph ph-x"></i></button><img src="" alt=""></dialog>`;

const menuButton = document.querySelector('.menu-button');
const nav = document.querySelector('.main-nav');
menuButton.addEventListener('click', () => { const open = nav.classList.toggle('is-open'); menuButton.setAttribute('aria-expanded', String(open)); menuButton.innerHTML = `<i class="ph ph-${open ? 'x' : 'list'}"></i>`; });
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => { nav.classList.remove('is-open'); menuButton.setAttribute('aria-expanded', 'false'); menuButton.innerHTML = '<i class="ph ph-list"></i>'; }));

const observer = new IntersectionObserver(entries => entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); } }), { threshold: .12 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

const lightbox = document.querySelector('.lightbox');
document.querySelectorAll('.gallery-item').forEach(button => button.addEventListener('click', () => { const image = lightbox.querySelector('img'); image.src = button.dataset.image; image.alt = button.dataset.alt; lightbox.showModal(); }));
lightbox.querySelector('button').addEventListener('click', () => lightbox.close());
lightbox.addEventListener('click', event => { if (event.target === lightbox) lightbox.close(); });
