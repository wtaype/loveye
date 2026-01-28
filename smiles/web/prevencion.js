import './prevencion.css';
import $ from 'jquery';
import { wiVista } from '../widev.js';

// Consejos diarios de prevención
const consejosDiarios = [
  {
    icon: 'fa-sun',
    color: '--warning',
    title: 'Protección Solar',
    desc: 'Los rayos UV pueden dañar tus ojos permanentemente.',
    tips: [
      'Usa lentes con protección UV 100%',
      'Usa sombrero en días soleados',
      'Evita exposición directa al sol'
    ]
  },
  {
    icon: 'fa-desktop',
    color: '--info',
    title: 'Descanso Digital',
    desc: 'El uso excesivo de pantallas causa fatiga visual.',
    tips: [
      'Aplica la regla 20-20-20',
      'Ajusta el brillo de tu pantalla',
      'Mantén distancia de 50-60 cm'
    ]
  },
  {
    icon: 'fa-droplet',
    color: '--Cielo',
    title: 'Hidratación Ocular',
    desc: 'Mantén tus ojos lubricados y saludables.',
    tips: [
      'Parpadea frecuentemente',
      'Usa lágrimas artificiales si es necesario',
      'Bebe suficiente agua diariamente'
    ]
  },
  {
    icon: 'fa-bed',
    color: '--Mora',
    title: 'Descanso Adecuado',
    desc: 'Tus ojos necesitan recuperarse durante el sueño.',
    tips: [
      'Duerme 7-8 horas diarias',
      'Evita pantallas antes de dormir',
      'Mantén tu habitación oscura'
    ]
  },
  {
    icon: 'fa-hand-sparkles',
    color: '--success',
    title: 'Higiene Visual',
    desc: 'La limpieza previene infecciones oculares.',
    tips: [
      'Lávate las manos antes de tocar tus ojos',
      'No compartas toallas o maquillaje',
      'Limpia tus lentes regularmente'
    ]
  },
  {
    icon: 'fa-user-doctor',
    color: '--mco',
    title: 'Revisiones Periódicas',
    desc: 'La detección temprana salva tu visión.',
    tips: [
      'Visita al oftalmólogo anualmente',
      'Realiza exámenes completos',
      'No ignores síntomas inusuales'
    ]
  }
];

// Alimentos saludables para los ojos
const alimentosSaludables = [
  {
    emoji: '🥕',
    name: 'Zanahorias',
    benefit: 'Ricas en vitamina A y betacaroteno para la visión nocturna'
  },
  {
    emoji: '🥬',
    name: 'Vegetales Verdes',
    benefit: 'Luteína y zeaxantina protegen contra la degeneración macular'
  },
  {
    emoji: '🐟',
    name: 'Pescado',
    benefit: 'Omega-3 previene el ojo seco y mejora la salud retinal'
  },
  {
    emoji: '🥚',
    name: 'Huevos',
    benefit: 'Zinc y antioxidantes esenciales para la salud ocular'
  },
  {
    emoji: '🍊',
    name: 'Cítricos',
    benefit: 'Vitamina C protege contra cataratas y degeneración'
  },
  {
    emoji: '🌰',
    name: 'Frutos Secos',
    benefit: 'Vitamina E y ácidos grasos protegen las células oculares'
  }
];

// Hábitos nocivos a evitar
const habitosNocivos = [
  {
    icon: 'fa-smoking',
    title: 'Fumar',
    desc: 'El tabaco aumenta el riesgo de cataratas, degeneración macular y daño al nervio óptico. Dejar de fumar es una de las mejores decisiones para tu salud visual.'
  },
  {
    icon: 'fa-eye',
    title: 'Frotarse los Ojos',
    desc: 'Frotar tus ojos con fuerza puede causar infecciones, rasguños en la córnea y empeorar condiciones como el queratocono. Si sientes picazón, usa lágrimas artificiales.'
  },
  {
    icon: 'fa-moon',
    title: 'Dormir con Lentes de Contacto',
    desc: 'Dormir con lentes de contacto reduce el oxígeno a la córnea y aumenta el riesgo de infecciones graves. Siempre retíralos antes de dormir.'
  },
  {
    icon: 'fa-mobile-screen',
    title: 'Uso Excesivo de Pantallas',
    desc: 'Pasar muchas horas frente a pantallas sin descanso causa fatiga visual digital, ojos secos y dolores de cabeza. Aplica la regla 20-20-20.'
  },
  {
    icon: 'fa-lightbulb',
    title: 'Mala Iluminación',
    desc: 'Leer o trabajar con poca luz fuerza tus ojos innecesariamente. Asegúrate de tener iluminación adecuada en tu espacio de trabajo.'
  },
  {
    icon: 'fa-calendar-xmark',
    title: 'Ignorar Síntomas',
    desc: 'Posponer la visita al oftalmólogo cuando notas cambios en tu visión puede empeorar problemas tratables. Actúa rápido ante cualquier síntoma.'
  }
];

export const render = () => `
  <div class="prevencion_container">
    <!-- HERO SECTION -->
    <section class="prev_hero">
      <div class="prev_hero_content">
        <h1>
          <span class="highlight">Prevención:</span> Tu Mejor Aliado para una Visión Saludable
        </h1>
        <p>
          La mayoría de los problemas visuales pueden prevenirse con hábitos simples y conscientes. 
          Aquí encontrarás todo lo que necesitas saber para cuidar tus ojitos cada día.
        </p>
        <p>
          <strong>Recuerda:</strong> Prevenir es más fácil y económico que curar. 
          ¡Tus ojos te lo agradecerán! 👁️💙
        </p>
      </div>
      <div class="prev_hero_visual">
        <img src="${import.meta.env.BASE_URL}prevencion.png" alt="Prevención Ocular" class="prev_hero_img" loading="lazy">
      </div>
    </section>

    <!-- CONSEJOS DIARIOS -->
    <section class="consejos_section">
      <div class="section_header">
        <h2 class="section_title">
          <i class="fas fa-shield-heart"></i>
          Consejos Diarios de Prevención
        </h2>
        <p class="section_subtitle">
          Incorpora estos hábitos en tu rutina diaria para mantener tus ojos sanos y protegidos
        </p>
        <div class="section_line"></div>
      </div>
      <div class="consejos_grid">
        ${consejosDiarios.map(consejo => `
          <div class="consejo_card">
            <div class="consejo_icon" style="background: linear-gradient(135deg, var(${consejo.color}) 0%, var(--hv) 100%); color: var(--txa);">
              <i class="fas ${consejo.icon}"></i>
            </div>
            <h3 class="consejo_title">${consejo.title}</h3>
            <p class="consejo_desc">${consejo.desc}</p>
            <ul class="consejo_tips">
              ${consejo.tips.map(tip => `
                <li><i class="fas fa-check-circle"></i> ${tip}</li>
              `).join('')}
            </ul>
          </div>
        `).join('')}
      </div>
    </section>

    <!-- REGLA 20-20-20 -->
    <section class="regla_section">
      <div class="regla_header">
        <h2>⏰ La Regla de Oro: 20-20-20</h2>
        <p>
          Si trabajas frente a una pantalla, esta regla simple puede salvar tus ojos de la fatiga visual digital. 
          Es fácil de recordar y extremadamente efectiva.
        </p>
      </div>
      <div class="regla_grid">
        <div class="regla_item">
          <div class="regla_number">20</div>
          <div class="regla_label">Minutos</div>
          <p class="regla_desc">
            Cada 20 minutos de trabajo frente a la pantalla
          </p>
        </div>
        <div class="regla_item">
          <div class="regla_number">20</div>
          <div class="regla_label">Segundos</div>
          <p class="regla_desc">
            Descansa tu vista durante 20 segundos
          </p>
        </div>
        <div class="regla_item">
          <div class="regla_number">20</div>
          <div class="regla_label">Pies (6m)</div>
          <p class="regla_desc">
            Mira algo a 20 pies (6 metros) de distancia
          </p>
        </div>
      </div>
    </section>

    <!-- ALIMENTOS SALUDABLES -->
    <section class="alimentos_section">
      <div class="section_header">
        <h2 class="section_title">
          <i class="fas fa-apple-whole"></i>
          Alimentos que Aman tus Ojos
        </h2>
        <p class="section_subtitle">
          Una dieta balanceada rica en estos nutrientes puede mejorar significativamente tu salud visual
        </p>
        <div class="section_line"></div>
      </div>
      <div class="alimentos_grid">
        ${alimentosSaludables.map(alimento => `
          <div class="alimento_card">
            <span class="alimento_emoji">${alimento.emoji}</span>
            <h3 class="alimento_name">${alimento.name}</h3>
            <p class="alimento_benefit">${alimento.benefit}</p>
          </div>
        `).join('')}
      </div>
    </section>

    <!-- HÁBITOS NOCIVOS -->
    <section class="habitos_section">
      <div class="section_header">
        <h2 class="section_title">
          <i class="fas fa-triangle-exclamation"></i>
          Hábitos Nocivos que Debes Evitar
        </h2>
        <p class="section_subtitle">
          Estos comportamientos comunes pueden dañar seriamente tu visión a largo plazo
        </p>
        <div class="section_line"></div>
      </div>
      <div class="habitos_grid">
        ${habitosNocivos.map(habito => `
          <div class="habito_card">
            <div class="habito_header">
              <div class="habito_icon">
                <i class="fas ${habito.icon}"></i>
              </div>
              <h3 class="habito_title">${habito.title}</h3>
            </div>
            <p class="habito_desc">${habito.desc}</p>
          </div>
        `).join('')}
      </div>
    </section>
  </div>
`;

export const init = () => {
  console.log(`✅ Prevención completado`);

  // Animación de entrada para las cards de consejos
  wiVista('.consejo_card', () => {
    $('.consejo_card').each((i, el) => {
      setTimeout(() => {
        $(el).css({
          opacity: '0',
          transform: 'translateY(30px)'
        });
        setTimeout(() => {
          $(el).css({
            transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
            opacity: '1',
            transform: 'translateY(0)'
          });
        }, 50);
      }, i * 100);
    });
  });

  // Animación para la sección de la regla 20-20-20
  wiVista('.regla_section', () => {
    $('.regla_item').each((i, el) => {
      setTimeout(() => {
        $(el).css({
          opacity: '0',
          transform: 'scale(0.8)'
        });
        setTimeout(() => {
          $(el).css({
            transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
            opacity: '1',
            transform: 'scale(1)'
          });
        }, 50);
      }, i * 200);
    });
  });
};

export const cleanup = () => {
  console.log('🧹 Prevención limpiada');
};
