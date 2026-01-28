import './tecnologia.css';
import $ from 'jquery';
import { wiVista } from '../widev.js';

// Cirugías láser refractivas
const cirugiasLaser = [
  {
    badge: 'MÁS POPULAR',
    badgeColor: '--success',
    icon: 'fa-eye',
    color: '--info',
    title: 'LASIK',
    subtitle: '(Laser-Assisted In Situ Keratomileusis)',
    desc: 'La cirugía refractiva más popular del mundo. Corrige miopía, hipermetropía y astigmatismo creando un colgajo corneal y remodelando el tejido con láser excimer.',
    procedimiento: [
      'Se crea un colgajo delgado en la córnea con microqueratomo o láser femtosegundo',
      'Se levanta el colgajo y se aplica láser excimer para remodelar la córnea',
      'El colgajo se reposiciona sin necesidad de suturas',
      'Procedimiento dura 10-15 minutos por ojo',
      'Anestesia con gotas, sin dolor durante la cirugía'
    ],
    ventajas: [
      'Recuperación visual rápida (24-48 horas)',
      'Mínimo dolor postoperatorio',
      'Resultados predecibles y estables',
      'Tasa de éxito del 96%',
      'Regreso a actividades normales en 2-3 días'
    ],
    candidatos: [
      'Mayores de 18 años con visión estable',
      'Miopía hasta -10 dioptrías',
      'Hipermetropía hasta +6 dioptrías',
      'Astigmatismo hasta 6 dioptrías',
      'Córnea de grosor adecuado'
    ],
    stats: [
      { number: '96%', label: 'Tasa de Éxito' },
      { number: '24h', label: 'Recuperación Visual' }
    ]
  },
  {
    badge: 'MÁS SEGURA',
    badgeColor: '--Cielo',
    icon: 'fa-shield-heart',
    color: '--Paz',
    title: 'PRK',
    subtitle: '(Photorefractive Keratectomy)',
    desc: 'Técnica original de cirugía láser. No crea colgajo corneal, remueve completamente el epitelio. Ideal para córneas delgadas o deportistas de alto impacto.',
    procedimiento: [
      'Se remueve completamente la capa epitelial de la córnea',
      'Se aplica láser excimer directamente sobre el estroma corneal',
      'Se coloca lente de contacto terapéutico por 3-5 días',
      'El epitelio se regenera naturalmente en 3-5 días',
      'Procedimiento dura 10 minutos por ojo'
    ],
    ventajas: [
      'No hay riesgo de complicaciones del colgajo',
      'Ideal para córneas delgadas',
      'Mejor para deportes de contacto',
      'Menor riesgo de ojo seco a largo plazo',
      'Resultados visuales excelentes'
    ],
    candidatos: [
      'Córneas delgadas (no aptas para LASIK)',
      'Deportistas de alto impacto (boxeo, artes marciales)',
      'Miopía hasta -8 dioptrías',
      'Hipermetropía hasta +4 dioptrías',
      'Pacientes con cicatrización corneal previa'
    ],
    stats: [
      { number: '95%', label: 'Tasa de Éxito' },
      { number: '5-7d', label: 'Recuperación Visual' }
    ]
  },
  {
    badge: 'ÚLTIMA GENERACIÓN',
    badgeColor: '--Mora',
    icon: 'fa-wand-magic-sparkles',
    color: '--Dulce',
    title: 'SMILE',
    subtitle: '(Small Incision Lenticule Extraction)',
    desc: 'Tecnología más reciente y menos invasiva. Usa solo láser femtosegundo, sin colgajo ni remoción de epitelio. Mínimo impacto en nervios corneales.',
    procedimiento: [
      'Láser femtosegundo crea un lentículo dentro de la córnea',
      'Se hace una pequeña incisión de 2-4mm (vs 20mm en LASIK)',
      'Se extrae el lentículo a través de la micro-incisión',
      'No se crea colgajo, estructura corneal más preservada',
      'Procedimiento dura 10 minutos por ojo'
    ],
    ventajas: [
      'Mínima invasión (incisión 80% más pequeña que LASIK)',
      'Menor riesgo de ojo seco',
      'Preserva mejor la biomecánica corneal',
      'Recuperación rápida (2-3 días)',
      'Sin riesgo de desplazamiento de colgajo'
    ],
    candidatos: [
      'Miopía de -1 a -10 dioptrías',
      'Astigmatismo hasta 5 dioptrías',
      'Pacientes propensos a ojo seco',
      'Deportistas y militares',
      'Córnea de grosor adecuado'
    ],
    stats: [
      { number: '97%', label: 'Satisfacción' },
      { number: '2-3d', label: 'Recuperación' }
    ]
  }
];

// Preparación para cirugía
const preparacionCirugia = [
  {
    icon: '📋',
    tiempo: '2-4 Semanas Antes',
    titulo: 'Evaluación Completa',
    desc: 'Examen oftalmológico exhaustivo: topografía corneal, paquimetría, pupilometría, refracción estable. Suspender lentes de contacto (blandos 1 semana, rígidos 3 semanas antes).'
  },
  {
    icon: '💊',
    tiempo: '1 Semana Antes',
    titulo: 'Preparación Médica',
    desc: 'Informar todos tus medicamentos al cirujano. Evitar aspirina y antiinflamatorios. Comprar gotas antibióticas y lubricantes recetadas. Organizar transporte para el día de la cirugía.'
  },
  {
    icon: '🚫',
    tiempo: '24 Horas Antes',
    titulo: 'Día Previo',
    desc: 'No usar maquillaje, cremas, perfumes o lociones. Lavar bien el rostro y pestañas. Dormir bien. Evitar alcohol. Comer ligero. Preparar ropa cómoda para el día siguiente.'
  },
  {
    icon: '⚕️',
    tiempo: 'Día de la Cirugía',
    titulo: 'Momento de la Cirugía',
    desc: 'Llegar 30 min antes. Ayuno de 4 horas si te darán sedante oral. Llevar lentes de sol oscuros. Alguien debe acompañarte. Seguir todas las instrucciones del equipo médico.'
  },
  {
    icon: '🏠',
    tiempo: 'Primeras 24 Horas',
    titulo: 'Recuperación Inmediata',
    desc: 'Descansar con ojos cerrados 4-6 horas. Usar gotas según indicación. NO frotarse los ojos. Usar protector ocular al dormir. Evitar pantallas. Visión borrosa es normal.'
  },
  {
    icon: '✅',
    tiempo: 'Primera Semana',
    titulo: 'Cuidados Postoperatorios',
    desc: 'Aplicar gotas religiosamente. Evitar agua directa en ojos, maquillaje, natación, deportes de contacto. Usar lentes de sol. Asistir a controles. Mejora gradual de visión.'
  }
];

// Otras tecnologías oftalmológicas
const otrasTecnologias = [
  {
    emoji: '💎',
    name: 'Facoemulsificación',
    desc: 'Cirugía de cataratas con ultrasonido. Fragmenta el cristalino opaco y lo reemplaza con lente intraocular. Recuperación rápida.'
  },
  {
    emoji: '🔬',
    name: 'OCT (Tomografía Óptica)',
    desc: 'Imágenes 3D de alta resolución de retina y nervio óptico. Detecta enfermedades en etapas tempranas.'
  },
  {
    emoji: '💉',
    name: 'Inyecciones Intravítreas',
    desc: 'Tratamiento para degeneración macular y retinopatía diabética. Medicamentos anti-VEGF directamente en el ojo.'
  },
  {
    emoji: '⚡',
    name: 'Láser YAG',
    desc: 'Trata cataratas secundarias y glaucoma. Procedimiento ambulatorio rápido y sin dolor.'
  },
  {
    emoji: '🌊',
    name: 'Crosslinking Corneal',
    desc: 'Fortalece la córnea en queratocono usando riboflavina y luz UV. Detiene la progresión de la enfermedad.'
  },
  {
    emoji: '🎯',
    name: 'Láser Argón',
    desc: 'Trata desgarros de retina, retinopatía diabética y glaucoma. Previene desprendimiento de retina.'
  }
];

export const render = () => `
  <div class="tecnologia_container">
    <!-- HERO SECTION -->
    <section class="tech_hero">
      <div class="tech_hero_content">
        <h1>
          <span class="highlight">Tecnología:</span> Innovación en Oftalmología
        </h1>
        <p>
          La tecnología moderna ha revolucionado el tratamiento de problemas visuales. 
          Las cirugías láser refractivas permiten a millones de personas vivir sin lentes 
          con resultados seguros y predecibles.
        </p>
        <p>
          <strong>Importante:</strong> Solo un oftalmólogo especializado puede determinar 
          si eres candidato para cirugía. Esta información es educativa. 👨‍⚕️💙
        </p>
      </div>
      <div class="tech_hero_visual">
        <img src="/tecnologia.png" alt="Tecnología Oftalmológica" class="tech_hero_img" loading="lazy">
      </div>
    </section>

    <!-- CIRUGÍAS LÁSER -->
    <section class="cirugias_section">
      <div class="section_header">
        <h2 class="section_title">
          <i class="fas fa-microscope"></i>
          Cirugías Láser Refractivas
        </h2>
        <p class="section_subtitle">
          Conoce las principales técnicas para corregir miopía, hipermetropía y astigmatismo
        </p>
        <div class="section_line"></div>
      </div>
      <div class="cirugias_grid">
        ${cirugiasLaser.map(cirugia => `
          <div class="cirugia_card">
            <div class="cirugia_badge" style="background: var(${cirugia.badgeColor}); color: var(--txa);">
              ${cirugia.badge}
            </div>
            <div class="cirugia_header">
              <div class="cirugia_icon" style="background: linear-gradient(135deg, var(${cirugia.color}) 0%, var(--hv) 100%); color: var(--txa);">
                <i class="fas ${cirugia.icon}"></i>
              </div>
              <div>
                <h3 class="cirugia_title">${cirugia.title}</h3>
                <p style="font-size: var(--fz_s4); color: var(--txe); margin-top: 0.5vh;">${cirugia.subtitle}</p>
              </div>
            </div>
            <p class="cirugia_desc">${cirugia.desc}</p>
            
            <div class="cirugia_section">
              <h4><i class="fas fa-list-ol"></i> Procedimiento:</h4>
              <ul>
                ${cirugia.procedimiento.map(paso => `
                  <li><i class="fas fa-check-circle"></i> ${paso}</li>
                `).join('')}
              </ul>
            </div>

            <div class="cirugia_section">
              <h4><i class="fas fa-star"></i> Ventajas:</h4>
              <ul>
                ${cirugia.ventajas.map(ventaja => `
                  <li><i class="fas fa-check-circle"></i> ${ventaja}</li>
                `).join('')}
              </ul>
            </div>

            <div class="cirugia_section">
              <h4><i class="fas fa-user-check"></i> Candidatos Ideales:</h4>
              <ul>
                ${cirugia.candidatos.map(candidato => `
                  <li><i class="fas fa-check-circle"></i> ${candidato}</li>
                `).join('')}
              </ul>
            </div>

            <div class="cirugia_stats">
              ${cirugia.stats.map(stat => `
                <div class="cirugia_stat">
                  <div class="cirugia_stat_number">${stat.number}</div>
                  <div class="cirugia_stat_label">${stat.label}</div>
                </div>
              `).join('')}
            </div>
          </div>
        `).join('')}
      </div>
    </section>

    <!-- PREPARACIÓN -->
    <section class="preparacion_section">
      <div class="preparacion_header">
        <h2>✓ Preparación para Cirugía Láser</h2>
        <p>
          Una preparación adecuada es clave para el éxito de tu cirugía. Sigue esta guía paso a paso 
          para asegurar los mejores resultados y una recuperación sin complicaciones.
        </p>
      </div>
      <div class="preparacion_timeline">
        ${preparacionCirugia.map(prep => `
          <div class="preparacion_item">
            <div class="preparacion_time">
              <span class="preparacion_time_icon">${prep.icon}</span>
              <div class="preparacion_time_label">${prep.tiempo}</div>
            </div>
            <div class="preparacion_content">
              <h3>${prep.titulo}</h3>
              <p>${prep.desc}</p>
            </div>
          </div>
        `).join('')}
      </div>
    </section>

    <!-- OTRAS TECNOLOGÍAS -->
    <section class="otras_tech_section">
      <div class="section_header">
        <h2 class="section_title">
          <i class="fas fa-microchip"></i>
          Otras Tecnologías Oftalmológicas
        </h2>
        <p class="section_subtitle">
          Equipos y procedimientos modernos que mejoran el diagnóstico y tratamiento
        </p>
        <div class="section_line"></div>
      </div>
      <div class="otras_tech_grid">
        ${otrasTecnologias.map(tech => `
          <div class="tech_card">
            <span class="tech_emoji">${tech.emoji}</span>
            <h3 class="tech_name">${tech.name}</h3>
            <p class="tech_desc">${tech.desc}</p>
          </div>
        `).join('')}
      </div>
    </section>
  </div>
`;

export const init = () => {
  console.log(`✅ Tecnología completado`);

  // Animación de entrada para las cards de cirugías
  wiVista('.cirugia_card', () => {
    $('.cirugia_card').each((i, el) => {
      setTimeout(() => {
        $(el).css({
          opacity: '0',
          transform: 'translateY(40px)'
        });
        setTimeout(() => {
          $(el).css({
            transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
            opacity: '1',
            transform: 'translateY(0)'
          });
        }, 50);
      }, i * 150);
    });
  });

  // Animación para preparación
  wiVista('.preparacion_item', () => {
    $('.preparacion_item').each((i, el) => {
      setTimeout(() => {
        $(el).css({
          opacity: '0',
          transform: 'translateX(-30px)'
        });
        setTimeout(() => {
          $(el).css({
            transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
            opacity: '1',
            transform: 'translateX(0)'
          });
        }, 50);
      }, i * 150);
    });
  });

  // Animación para otras tecnologías
  wiVista('.tech_card', () => {
    $('.tech_card').each((i, el) => {
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
      }, i * 120);
    });
  });
};

export const cleanup = () => {
  console.log('🧹 Tecnología limpiado');
};
