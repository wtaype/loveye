import{j as a}from"./vendor-gzd0YkcT.js";import{w as o}from"./main-DYz9wJF0.js";import"./firebase-xYuwcABI.js";const t=[{icon:"fa-glasses",color:"--info",title:"Lentes Monofocales",desc:"Lentes con una sola graduación en toda la superficie. Ideales para miopía, hipermetropía o astigmatismo.",caracteristicas:["Una sola prescripción en todo el lente","Visión clara a una distancia específica","Más económicos y simples","Ideales para uso diario","Disponibles en muchos estilos"]},{icon:"fa-layer-group",color:"--Mora",title:"Lentes Bifocales",desc:"Dos graduaciones en un solo lente: parte superior para lejos, parte inferior para cerca. Línea visible de separación.",caracteristicas:["Dos zonas de visión claramente divididas","Superior para visión lejana","Inferior para lectura y cerca","Línea visible de separación","Solución económica para presbicia"]},{icon:"fa-infinity",color:"--success",title:"Lentes Progresivos",desc:"Transición gradual entre múltiples graduaciones sin líneas visibles. Visión natural a todas las distancias.",caracteristicas:["Transición suave entre distancias","Sin líneas visibles","Visión lejana, intermedia y cercana","Apariencia más joven","Requiere período de adaptación"]},{icon:"fa-circle-dot",color:"--Cielo",title:"Lentes de Contacto",desc:"Lentes correctivos que se colocan directamente sobre la córnea. Blandos o rígidos, diarios o mensuales.",caracteristicas:["Campo visual completo sin marcos","Ideales para deportes","Blandos (hidrogel) o rígidos (RGP)","Desechables diarios, quincenales o mensuales","Requieren higiene estricta"]},{icon:"fa-desktop",color:"--warning",title:"Lentes para Computadora",desc:"Diseñados específicamente para distancia intermedia (50-70cm). Reducen fatiga visual digital.",caracteristicas:["Optimizados para distancia de pantalla","Reducen fatiga visual digital","Filtro de luz azul integrado","Campo visual amplio para monitor","Ideales para trabajo de oficina"]},{icon:"fa-sun",color:"--Dulce",title:"Lentes de Sol",desc:"Protección UV 100% con o sin graduación. Esenciales para proteger tus ojos del daño solar.",caracteristicas:["Protección UV 100% esencial","Disponibles con graduación","Reducen deslumbramiento","Polarizados para mayor claridad","Previenen cataratas y degeneración macular"]}],n=[{icon:"fa-shield-halved",title:"Filtro de Luz Azul",desc:"Bloquea 30-50% de luz azul dañina emitida por pantallas. Reduce fatiga, mejora sueño y previene daño retinal a largo plazo. Esencial para 8+ horas frente a pantallas."},{icon:"fa-eye",title:"Lentes Anti-Reflejo",desc:"Eliminan reflejos molestos de pantallas y luces. Mejoran contraste y claridad. Reducen deslumbramiento nocturno al conducir. Imprescindibles para programadores."},{icon:"fa-ruler",title:"Distancia Correcta",desc:"Mantén monitor a 50-70cm (brazo extendido). Lentes para computadora están optimizados para esta distancia. Lentes de lectura normales son para 30-40cm (muy cerca)."},{icon:"fa-clock",title:"Regla 20-20-20",desc:"Cada 20 minutos, mira algo a 20 pies (6m) por 20 segundos. Relaja el músculo ciliar. Combina con lentes adecuados para máxima protección."},{icon:"fa-droplet",title:"Lubricación Constante",desc:"Parpadea conscientemente cada 10-15 segundos. Usa lágrimas artificiales sin conservantes 3-4 veces al día. Lentes de contacto requieren gotas especiales."},{icon:"fa-moon",title:"Modo Nocturno",desc:"Activa filtros de luz azul en dispositivos después de las 6pm. Reduce temperatura de color a 3000-4000K. Mejora calidad de sueño significativamente."},{icon:"fa-lightbulb",title:"Iluminación Adecuada",desc:"Evita trabajar en oscuridad total. Usa luz ambiental suave detrás del monitor. Reduce contraste entre pantalla y entorno. Previene fatiga visual."},{icon:"fa-arrows-up-down",title:"Posición del Monitor",desc:"Parte superior del monitor a nivel de ojos o ligeramente abajo. Inclinación de 10-20° hacia atrás. Reduce tensión en cuello y ojos."}],p=()=>`
  <div class="lentes_container">
    <!-- HERO SECTION -->
    <section class="lent_hero">
      <div class="lent_hero_content">
        <h1>
          <span class="highlight">Lentes:</span> Tu Ventana al Mundo
        </h1>
        <p>
          Los lentes correctivos no solo mejoran tu visión, también protegen tus ojos de daños. 
          Con la tecnología moderna, existen opciones para cada necesidad y estilo de vida.
        </p>
        <p>
          <strong>Para Programadores:</strong> Los lentes con filtro de luz azul y anti-reflejo 
          son esenciales para proteger tus ojos durante largas jornadas frente a pantallas. 👓💻
        </p>
      </div>
      <div class="lent_hero_visual">
        <img src="/loveye/lentes.png" alt="Tipos de Lentes" class="lent_hero_img" loading="lazy">
      </div>
    </section>

    <!-- SIMULADOR INTERACTIVO -->
    <section class="simulador_section">
      <div class="simulador_header">
        <h2>👁️ Simulador de Visión Interactivo</h2>
        <p>
          Experimenta cómo ven las personas con diferentes condiciones visuales. 
          Haz clic en los botones para simular cada condición.
        </p>
      </div>
      <div class="simulador_content">
        <div class="simulador_image_container">
          <img src="/loveye/eyeCielo.png" alt="Simulador de Visión" class="simulador_image" id="simuladorImg">
        </div>
        <div class="simulador_controls">
          <button class="simulador_btn active" data-vision="normal">
            <i class="fas fa-eye"></i> Visión Normal
          </button>
          <button class="simulador_btn" data-vision="miopia">
            <i class="fas fa-eye-low-vision"></i> Miopía
          </button>
          <button class="simulador_btn" data-vision="hipermetropia">
            <i class="fas fa-glasses"></i> Hipermetropía
          </button>
          <button class="simulador_btn" data-vision="astigmatismo">
            <i class="fas fa-circle-half-stroke"></i> Astigmatismo
          </button>
        </div>
        <div class="simulador_info" id="simuladorInfo">
          <h4>Visión Normal</h4>
          <p>Así es como ven las personas con visión 20/20 perfecta. Todos los objetos están nítidos y claros.</p>
        </div>
      </div>
    </section>

    <!-- TIPOS DE LENTES -->
    <section class="tipos_section">
      <div class="section_header">
        <h2 class="section_title">
          <i class="fas fa-glasses"></i>
          Tipos de Lentes Correctivos
        </h2>
        <p class="section_subtitle">
          Conoce las diferentes opciones disponibles y encuentra la ideal para tu estilo de vida
        </p>
        <div class="section_line"></div>
      </div>
      <div class="tipos_grid">
        ${t.map(e=>`
          <div class="tipo_card">
            <div class="tipo_header">
              <div class="tipo_icon" style="background: linear-gradient(135deg, var(${e.color}) 0%, var(--hv) 100%); color: var(--txa);">
                <i class="fas ${e.icon}"></i>
              </div>
              <h3 class="tipo_title">${e.title}</h3>
            </div>
            <p class="tipo_desc">${e.desc}</p>
            
            <div class="tipo_caracteristicas">
              <h4><i class="fas fa-list-check"></i> Características:</h4>
              <ul>
                ${e.caracteristicas.map(i=>`
                  <li><i class="fas fa-check-circle"></i> ${i}</li>
                `).join("")}
              </ul>
            </div>
          </div>
        `).join("")}
      </div>
    </section>

    <!-- PARA PROGRAMADORES -->
    <section class="programadores_section">
      <div class="section_header">
        <h2 class="section_title">
          <i class="fas fa-code"></i>
          Guía Especial para Programadores
        </h2>
        <p class="section_subtitle">
          Consejos profesionales para proteger tus ojos durante largas jornadas de código
        </p>
        <div class="section_line"></div>
      </div>
      <div class="programadores_grid">
        ${n.map(e=>`
          <div class="programador_card">
            <div class="programador_header">
              <div class="programador_icon">
                <i class="fas ${e.icon}"></i>
              </div>
              <h3 class="programador_title">${e.title}</h3>
            </div>
            <p class="programador_desc">${e.desc}</p>
          </div>
        `).join("")}
      </div>
    </section>
  </div>
`,m=()=>{console.log("✅ Lentes completado");const e={normal:{title:"Visión Normal",desc:"Así es como ven las personas con visión 20/20 perfecta. Todos los objetos están nítidos y claros.",blur:0},miopia:{title:"Miopía (Vista Corta)",desc:"Los objetos lejanos se ven borrosos. La imagen se enfoca delante de la retina. Común en programadores por trabajo cercano prolongado.",blur:8},hipermetropia:{title:"Hipermetropía (Vista Larga)",desc:"Los objetos cercanos se ven borrosos. La imagen se enfoca detrás de la retina. Causa fatiga al leer o usar computadora.",blur:6},astigmatismo:{title:"Astigmatismo",desc:"Visión distorsionada o borrosa a todas las distancias. La córnea tiene forma irregular. Puede combinarse con miopía o hipermetropía.",blur:5}};a(".simulador_btn").on("click",function(){const i=a(this).data("vision"),s=e[i];a(".simulador_btn").removeClass("active"),a(this).addClass("active"),a("#simuladorImg").css("filter",`blur(${s.blur}px)`),a("#simuladorInfo").html(`
      <h4>${s.title}</h4>
      <p>${s.desc}</p>
    `)}),o(".tipo_card",()=>{a(".tipo_card").each((i,s)=>{setTimeout(()=>{a(s).css({opacity:"0",transform:"translateY(30px)"}),setTimeout(()=>{a(s).css({transition:"all 0.6s cubic-bezier(0.4, 0, 0.2, 1)",opacity:"1",transform:"translateY(0)"})},50)},i*100)})}),o(".programador_card",()=>{a(".programador_card").each((i,s)=>{setTimeout(()=>{a(s).css({opacity:"0",transform:"translateX(-30px)"}),setTimeout(()=>{a(s).css({transition:"all 0.6s cubic-bezier(0.4, 0, 0.2, 1)",opacity:"1",transform:"translateX(0)"})},50)},i*100)})})},u=()=>{console.log("🧹 Lentes limpiado"),a(".simulador_btn").off("click")};export{u as cleanup,m as init,p as render};
